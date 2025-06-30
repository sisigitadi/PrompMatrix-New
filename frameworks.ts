import { Framework } from './types';
import { mergeAndSortTextToolLinks, createMediaMusicToolLinks, standardImageVideoAlternatives, standardMusicAlternatives } from './frameworkUtils';

export const frameworks: Framework[] = [
  // --- Text Frameworks ---
  {
    id: 'rtf',
    idLocale: {
      name: 'rtf_name',
      shortName: 'rtf_shortName',
      description: 'rtf_description', 
      shortDescription: 'rtf_short_desc', 
      category: 'text',
      components: [
        { id: 'role', label: 'rtf_role_label', example: 'rtf_role_example', tooltip: 'rtf_role_tooltip' },
        { id: 'task', label: 'rtf_task_label', example: 'rtf_task_example', tooltip: 'rtf_task_tooltip' },
        { id: 'format', label: 'rtf_format_label', example: 'rtf_format_example', tooltip: 'rtf_format_tooltip' },
      ],
      genericToolLinks: mergeAndSortTextToolLinks(),
    },
    enLocale: {
      name: 'rtf_name',
      shortName: 'rtf_shortName',
      description: 'rtf_description', 
      shortDescription: 'rtf_short_desc', 
      category: 'text',
      components: [
        { id: 'role', label: 'rtf_role_label', example: 'rtf_role_example', tooltip: 'rtf_role_tooltip' },
        { id: 'task', label: 'rtf_task_label', example: 'rtf_task_example', tooltip: 'rtf_task_tooltip' },
        { id: 'format', label: 'rtf_format_label', example: 'rtf_format_example', tooltip: 'rtf_format_tooltip' },
      ],
      genericToolLinks: mergeAndSortTextToolLinks(),
    }
  },
  {
    id: 'aida',
    idLocale: {
      name: 'aida_name',
      shortName: 'aida_shortName',
      description: 'aida_description', 
      shortDescription: 'aida_short_desc', 
      category: 'text',
      components: [
        { id: 'attention', label: 'aida_attention_label', example: 'aida_attention_example', tooltip: 'aida_attention_tooltip' },
        { id: 'interest', label: 'aida_interest_label', example: 'aida_interest_example', tooltip: 'aida_interest_tooltip' },
        { id: 'desire', label: 'aida_desire_label', example: 'aida_desire_example', tooltip: 'aida_desire_tooltip' },
        { id: 'action', label: 'aida_action_label', example: 'aida_action_example', tooltip: 'aida_action_tooltip' },
      ],
      genericToolLinks: mergeAndSortTextToolLinks(),
    },
    enLocale: {
      name: 'aida_name',
      shortName: 'aida_shortName',
      description: 'aida_description', 
      shortDescription: 'aida_short_desc', 
      category: 'text',
      components: [
        { id: 'attention', label: 'aida_attention_label', example: 'aida_attention_example', tooltip: 'aida_attention_tooltip' },
        { id: 'interest', label: 'aida_interest_label', example: 'aida_interest_example', tooltip: 'aida_interest_tooltip' },
        { id: 'desire', label: 'aida_desire_label', example: 'aida_desire_example', tooltip: 'aida_desire_tooltip' },
        { id: 'action', label: 'aida_action_label', example: 'aida_action_example', tooltip: 'aida_action_tooltip' },
      ],
      genericToolLinks: mergeAndSortTextToolLinks(),
    }
  },
  {
    id: 'care',
    idLocale: {
      name: 'care_name',
      shortName: 'care_shortName',
      description: 'care_description',
      shortDescription: 'care_short_desc',
      category: 'text',
      components: [
        { id: 'context', label: 'care_comp1_label', example: 'care_comp1_example', tooltip: 'care_context_tooltip' },
        { id: 'action', label: 'care_comp2_label', example: 'care_comp2_example', tooltip: 'care_action_tooltip' },
        { id: 'result', label: 'care_comp3_label', example: 'care_comp3_example', tooltip: 'care_result_tooltip' },
        { id: 'example', label: 'care_comp4_label', example: 'care_comp4_example', tooltip: 'care_example_tooltip' },
      ],
      genericToolLinks: mergeAndSortTextToolLinks(),
    },
    enLocale: {
      name: 'care_name',
      shortName: 'care_shortName',
      description: 'care_description',
      shortDescription: 'care_short_desc',
      category: 'text',
      components: [
        { id: 'context', label: 'care_comp1_label', example: 'care_comp1_example', tooltip: 'care_context_tooltip' },
        { id: 'action', label: 'care_comp2_label', example: 'care_comp2_example', tooltip: 'care_action_tooltip' },
        { id: 'result', label: 'care_comp3_label', example: 'care_comp3_example', tooltip: 'care_result_tooltip' },
        { id: 'example', label: 'care_comp4_label', example: 'care_comp4_example', tooltip: 'care_example_tooltip' },
      ],
      genericToolLinks: mergeAndSortTextToolLinks(),
    }
  },
  {
    id: 'co-star',
    idLocale: {
      name: 'co_star_name',
      shortName: 'co_star_shortName',
      description: 'co_star_description',
      shortDescription: 'co_star_short_desc',
      category: 'text',
      components: [
        { id: 'context', label: 'co_star_comp1_label', example: 'co_star_comp1_example', tooltip: 'costar_context_tooltip'},
        { id: 'objective', label: 'co_star_comp2_label', example: 'co_star_comp2_example', tooltip: 'costar_objective_tooltip'},
        { id: 'style', label: 'co_star_comp3_label', example: 'co_star_comp3_example', tooltip: 'costar_style_tooltip'},
        { id: 'tone', label: 'co_star_comp4_label', example: 'co_star_comp4_example', tooltip: 'costar_tone_tooltip'},
        { id: 'audience', label: 'co_star_comp5_label', example: 'co_star_comp5_example', tooltip: 'costar_audience_tooltip'},
        { id: 'response', label: 'co_star_comp6_label', example: 'co_star_comp6_example', tooltip: 'costar_response_tooltip'},
      ],
      genericToolLinks: mergeAndSortTextToolLinks(),
    },
    enLocale: {
      name: 'co_star_name',
      shortName: 'co_star_shortName',
      description: 'co_star_description',
      shortDescription: 'co_star_short_desc',
      category: 'text',
      components: [
        { id: 'context', label: 'co_star_comp1_label', example: 'co_star_comp1_example', tooltip: 'costar_context_tooltip'},
        { id: 'objective', label: 'co_star_comp2_label', example: 'co_star_comp2_example', tooltip: 'costar_objective_tooltip'},
        { id: 'style', label: 'co_star_comp3_label', example: 'co_star_comp3_example', tooltip: 'costar_style_tooltip'},
        { id: 'tone', label: 'co_star_comp4_label', example: 'co_star_comp4_example', tooltip: 'costar_tone_tooltip'},
        { id: 'audience', label: 'co_star_comp5_label', example: 'co_star_comp5_example', tooltip: 'costar_audience_tooltip'},
        { id: 'response', label: 'co_star_comp6_label', example: 'co_star_comp6_example', tooltip: 'costar_response_tooltip'},
      ],
      genericToolLinks: mergeAndSortTextToolLinks(),
    }
  },
  {
    id: 'rtf-c',
    idLocale: {
      name: 'rtf_c_name',
      shortName: 'rtf_c_shortName',
      description: 'rtf_c_description',
      shortDescription: 'rtf_c_short_desc',
      category: 'text',
      components: [
        { id: 'role', label: 'rtf_c_role_label', example: 'rtf_c_role_example', tooltip: 'rtfc_role_tooltip' },
        { id: 'task', label: 'rtf_c_task_label', example: 'rtf_c_task_example', tooltip: 'rtfc_task_tooltip' },
        { id: 'format', label: 'rtf_c_format_label', example: 'rtf_c_format_example', tooltip: 'rtfc_format_tooltip' },
        { id: 'context', label: 'rtf_c_context_label', example: 'rtf_c_context_example', tooltip: 'rtfc_context_tooltip' },
      ],
      genericToolLinks: mergeAndSortTextToolLinks(),
    },
    enLocale: {
      name: 'rtf_c_name',
      shortName: 'rtf_c_shortName',
      description: 'rtf_c_description',
      shortDescription: 'rtf_c_short_desc',
      category: 'text',
      components: [
        { id: 'role', label: 'rtf_c_role_label', example: 'rtf_c_role_example', tooltip: 'rtfc_role_tooltip' },
        { id: 'task', label: 'rtf_c_task_label', example: 'rtf_c_task_example', tooltip: 'rtfc_task_tooltip' },
        { id: 'format', label: 'rtf_c_format_label', example: 'rtf_c_format_example', tooltip: 'rtfc_format_tooltip' },
        { id: 'context', label: 'rtf_c_context_label', example: 'rtf_c_context_example', tooltip: 'rtfc_context_tooltip' },
      ],
      genericToolLinks: mergeAndSortTextToolLinks(),
    }
  }
];
