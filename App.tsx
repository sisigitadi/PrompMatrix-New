import React, { useState, useEffect } from 'react';
import { frameworks } from './frameworks';
import { allTranslations } from './translations';
import { useLanguage } from './contexts/LanguageContext';
import { Framework, SavedPrompt, PromptComponent, Language } from './types';
import { addPromptToDB, getAllPromptsFromDB, updatePromptInDB, deletePromptFromDB } from './db';
import InputField from './components/InputField';

const App: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [selectedFramework, setSelectedFramework] = useState<Framework | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<'text' | 'media' | 'music'>('text');
  const [promptComponents, setPromptComponents] = useState<PromptComponent[]>([]);
  const [generatedPrompt, setGeneratedPrompt] = useState<string>('');
  const [savedPrompts, setSavedPrompts] = useState<SavedPrompt[]>([]);
  const [showStash, setShowStash] = useState(false);
  const [apiKeyAvailable, setApiKeyAvailable] = useState(false);

  useEffect(() => {
    // Check if API key is available
    const apiKey = process.env.API_KEY || process.env.GEMINI_API_KEY;
    setApiKeyAvailable(!!apiKey);
    
    // Load saved prompts
    loadSavedPrompts();
  }, []);

  const loadSavedPrompts = async () => {
    try {
      const prompts = await getAllPromptsFromDB();
      setSavedPrompts(prompts);
    } catch (error) {
      console.error('Error loading saved prompts:', error);
    }
  };

  const handleFrameworkSelect = (framework: Framework) => {
    setSelectedFramework(framework);
    const locale = language === 'id' ? framework.idLocale : framework.enLocale;
    const components: PromptComponent[] = locale.components.map(comp => ({
      id: comp.id,
      value: '',
      label: comp.label,
      example: comp.example
    }));
    setPromptComponents(components);
    setGeneratedPrompt('');
  };

  const handleInputChange = (id: string, value: string) => {
    setPromptComponents(prev => 
      prev.map(comp => 
        comp.id === id ? { ...comp, value } : comp
      )
    );
    generatePrompt();
  };

  const generatePrompt = () => {
    if (!selectedFramework) return;
    
    const filledComponents = promptComponents.filter(comp => comp.value.trim() !== '');
    if (filledComponents.length === 0) {
      setGeneratedPrompt('');
      return;
    }

    const prompt = filledComponents
      .map(comp => `${t(comp.label)}: ${comp.value}`)
      .join('\n\n');
    
    setGeneratedPrompt(prompt);
  };

  const handleSavePrompt = async () => {
    if (!selectedFramework || !generatedPrompt) return;

    try {
      const promptToSave = {
        name: `${t(selectedFramework.idLocale.shortName)} - ${new Date().toLocaleDateString()}`,
        frameworkId: selectedFramework.id,
        category: selectedCategory,
        promptComponents,
        interactiveFormValues: {},
        otherInputValues: {},
        userDefinedInteraction: '',
        generatedPrompt,
        promptToCopy: generatedPrompt,
        language,
        selectedFrameworkName: t(selectedFramework.idLocale.name)
      };

      await addPromptToDB(promptToSave);
      await loadSavedPrompts();
      // Show success notification
    } catch (error) {
      console.error('Error saving prompt:', error);
    }
  };

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      // Show success notification
    } catch (error) {
      console.error('Error copying to clipboard:', error);
    }
  };

  const filteredFrameworks = frameworks.filter(fw => {
    const locale = language === 'id' ? fw.idLocale : fw.enLocale;
    return locale.category === selectedCategory;
  });

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      {/* Header */}
      <header className="bg-slate-800 border-b border-slate-700 p-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-teal-400">PromptMatrix</h1>
            <p className="text-sm text-slate-400">
              {t('app_subtitle')}
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            {/* Language Toggle */}
            <button
              onClick={() => setLanguage(language === 'en' ? 'id' : 'en')}
              className="px-3 py-1 bg-slate-700 hover:bg-slate-600 rounded text-sm"
            >
              {language === 'en' ? 'ID' : 'EN'}
            </button>

            {/* API Status */}
            <div className={`px-3 py-1 rounded text-xs ${
              apiKeyAvailable 
                ? 'bg-green-600 text-white' 
                : 'bg-red-600 text-white'
            }`}>
              {apiKeyAvailable ? 'AI Inside' : 'Disconnected'}
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto p-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Panel - Framework Selection */}
          <div className="lg:col-span-1">
            <div className="bg-slate-800 rounded-lg p-4">
              <h2 className="text-lg font-semibold mb-4">{t('select_framework')}</h2>
              
              {/* Category Selection */}
              <div className="flex gap-2 mb-4">
                {(['text', 'media', 'music'] as const).map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-3 py-1 rounded text-sm ${
                      selectedCategory === category
                        ? 'bg-teal-600 text-white'
                        : 'bg-slate-700 hover:bg-slate-600 text-slate-300'
                    }`}
                  >
                    {t(`category_${category}`)}
                  </button>
                ))}
              </div>

              {/* Framework List */}
              <div className="space-y-2 max-h-96 overflow-y-auto">
                {filteredFrameworks.map(framework => {
                  const locale = language === 'id' ? framework.idLocale : framework.enLocale;
                  return (
                    <button
                      key={framework.id}
                      onClick={() => handleFrameworkSelect(framework)}
                      className={`w-full text-left p-3 rounded border ${
                        selectedFramework?.id === framework.id
                          ? 'border-teal-500 bg-teal-900/20'
                          : 'border-slate-600 hover:border-slate-500 bg-slate-700/50'
                      }`}
                    >
                      <div className="font-medium">{t(locale.shortName)}</div>
                      <div className="text-sm text-slate-400 mt-1">
                        {t(locale.shortDescription || locale.description)}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Saved Prompts Toggle */}
            <button
              onClick={() => setShowStash(!showStash)}
              className="w-full mt-4 px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded"
            >
              {t('my_prompt_stash')} ({savedPrompts.length})
            </button>
          </div>

          {/* Middle Panel - Input Fields */}
          <div className="lg:col-span-1">
            {selectedFramework ? (
              <div className="bg-slate-800 rounded-lg p-4">
                <h2 className="text-lg font-semibold mb-4">
                  {t(selectedFramework.idLocale.name)}
                </h2>
                <p className="text-sm text-slate-400 mb-6">
                  {t(selectedFramework.idLocale.description)}
                </p>

                <div className="space-y-4">
                  {promptComponents.map(component => (
                    <InputField
                      key={component.id}
                      id={component.id}
                      label={t(component.label)}
                      value={component.value}
                      onChange={handleInputChange}
                      placeholder={component.example ? t(component.example) : ''}
                    />
                  ))}
                </div>
              </div>
            ) : (
              <div className="bg-slate-800 rounded-lg p-4 text-center text-slate-400">
                <p>{t('select_framework_to_start')}</p>
              </div>
            )}
          </div>

          {/* Right Panel - Output */}
          <div className="lg:col-span-1">
            <div className="bg-slate-800 rounded-lg p-4">
              <h2 className="text-lg font-semibold mb-4">{t('prompt_preview')}</h2>
              
              {generatedPrompt ? (
                <div>
                  <div className="bg-slate-900 rounded p-4 mb-4 min-h-32">
                    <pre className="whitespace-pre-wrap text-sm">{generatedPrompt}</pre>
                  </div>
                  
                  <div className="flex gap-2">
                    <button
                      onClick={() => copyToClipboard(generatedPrompt)}
                      className="flex-1 px-4 py-2 bg-teal-600 hover:bg-teal-700 rounded"
                    >
                      {t('copy_prompt')}
                    </button>
                    <button
                      onClick={handleSavePrompt}
                      className="px-4 py-2 bg-slate-600 hover:bg-slate-700 rounded"
                    >
                      {t('save')}
                    </button>
                  </div>
                </div>
              ) : (
                <div className="bg-slate-900 rounded p-4 text-center text-slate-400 min-h-32 flex items-center justify-center">
                  <p>{t('prompt_will_appear_here')}</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Saved Prompts Panel */}
        {showStash && (
          <div className="mt-6 bg-slate-800 rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-4">{t('saved_prompts')}</h2>
            {savedPrompts.length > 0 ? (
              <div className="grid gap-4">
                {savedPrompts.map(prompt => (
                  <div key={prompt.id} className="bg-slate-700 rounded p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-medium">{prompt.name}</h3>
                      <span className="text-xs text-slate-400">
                        {new Date(prompt.timestamp).toLocaleDateString()}
                      </span>
                    </div>
                    <p className="text-sm text-slate-400 mb-3 line-clamp-2">
                      {prompt.generatedPrompt}
                    </p>
                    <div className="flex gap-2">
                      <button
                        onClick={() => {
                          // Load prompt logic
                        }}
                        className="px-3 py-1 bg-teal-600 hover:bg-teal-700 rounded text-sm"
                      >
                        {t('load')}
                      </button>
                      <button
                        onClick={() => copyToClipboard(prompt.generatedPrompt)}
                        className="px-3 py-1 bg-slate-600 hover:bg-slate-700 rounded text-sm"
                      >
                        {t('copy')}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-slate-400 text-center py-8">{t('no_saved_prompts')}</p>
            )}
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-slate-800 border-t border-slate-700 p-4 mt-8">
        <div className="max-w-7xl mx-auto text-center text-sm text-slate-400">
          <p>PromptMatrix V6.2.0 - {t('footer_text')}</p>
        </div>
      </footer>
    </div>
  );
};

export default App;