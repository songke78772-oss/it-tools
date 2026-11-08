import { tool as base64StringConverter } from './base64-string-converter';
import { tool as caseConverter } from './case-converter';
import { tool as colorConverter } from './color-converter';
import { tool as dateTimeConverter } from './date-time-converter';
import { tool as emojiPicker } from './emoji-picker';
import { tool as loremIpsumGenerator } from './lorem-ipsum-generator';
import { tool as qrCodeGenerator } from './qr-code-generator';
import { tool as textDiff } from './text-diff';
import { tool as textStatistics } from './text-statistics';
import { tool as tokenGenerator } from './token-generator';
import type { ToolCategory } from './tools.types';

export const toolsByCategory: ToolCategory[] = [
  {
    name: 'Tools',
    components: [
      base64StringConverter,
      qrCodeGenerator,
      colorConverter,
      caseConverter,
      dateTimeConverter,
      textDiff,
      loremIpsumGenerator,
      tokenGenerator,
      textStatistics,
      emojiPicker,
    ],
  },
];

export const tools = toolsByCategory.flatMap(({ components }) => components);
export const toolsWithCategory = toolsByCategory.flatMap(({ components, name }) =>
  components.map(tool => ({ category: name, ...tool })),
);
