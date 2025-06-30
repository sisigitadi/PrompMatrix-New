import React from 'react';

interface InputFieldProps {
  id: string;
  label: string;
  value: string;
  onChange: (id: string, value: string) => void;
  placeholder?: string;
  type?: 'text' | 'textarea';
  disabled?: boolean;
  tooltip?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  id,
  label,
  value,
  onChange,
  placeholder = '',
  type = 'textarea',
  disabled = false,
  tooltip
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    onChange(id, e.target.value);
  };

  return (
    <div className="space-y-2">
      <label htmlFor={id} className="block text-sm font-medium text-slate-200">
        {label}
        {tooltip && (
          <span className="ml-1 text-slate-400 cursor-help" title={tooltip}>
            ℹ️
          </span>
        )}
      </label>
      
      {type === 'textarea' ? (
        <textarea
          id={id}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          disabled={disabled}
          rows={3}
          className={`w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-vertical ${
            disabled ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        />
      ) : (
        <input
          type="text"
          id={id}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          disabled={disabled}
          className={`w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent ${
            disabled ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        />
      )}
    </div>
  );
};

export default InputField;