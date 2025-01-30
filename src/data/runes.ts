export const runes = {
  1: '<path d="M10 10 L20 20 L30 10" stroke="black" fill="none"/>',
  2: '<path d="M10 20 Q15 5 20 20 T30 20" stroke="black"/>',
  3: '<path d="M10 10 L20 20 M15 15 L25 5" stroke="black"/>',
  4: '<path d="M10 10 L30 10 L20 30" stroke="black"/>',
  5: '<circle cx="20" cy="20" r="8" stroke="black" fill="none"/>',
  6: '<rect x="12" y="12" width="16" height="16" stroke="black"/>',
  7: '<path d="M10 15 L20 5 L30 15 M20 5 L20 25" stroke="black"/>',
  8: '<path d="M10 10 L30 30 M30 10 L10 30" stroke="black"/>',
  9: '<path d="M5 20 L35 20 M20 5 L20 35" stroke="black"/>',
  10: '<path d="M10 15 L30 15" stroke="black"/>',
  20: '<path d="M15 10 L15 30 M25 10 L25 30" stroke="black"/>',
  30: '<path d="M10 12 L30 12 M10 20 L30 20 M10 28 L30 28" stroke="black"/>',
  40: '<path d="M10 10 L30 30 M10 30 L30 10" stroke="black"/>',
  50: '<circle cx="20" cy="20" r="10" stroke="black"/><circle cx="20" cy="20" r="3" fill="black"/>',
  60: '<rect x="10" y="10" width="20" height="20" stroke="black"/>',
  70: '<polygon points="20,10 30,30 10,30" stroke="black"/>',
  80: '<rect x="10" y="10" width="20" height="20" stroke="black"/><path d="M10 10 L30 30 M30 10 L10 30" stroke="black"/>',
  90: '<polygon points="20,10 30,20 20,30 10,20" stroke="black"/>',
  100: '<path d="M5 5 L15 15 M25 5 L35 15" stroke="black"/>',
  200: '<circle cx="20" cy="20" r="8" stroke="black" fill="none"/>',
  300: '<rect x="10" y="10" width="20" height="20" stroke="black"/>',
  400: '<polygon points="20,5 35,35 5,35" stroke="black"/>',
  500: '<path d="M10 10 C20 5 25 15 30 10" stroke="black"/>',
  600: '<ellipse cx="20" cy="20" rx="15" ry="10"/>',
  700: '<path d="M10 15 L20 5 L30 15 M20 5 L20 25"/>',
  800: '<path d="M10 10 L30 30 M30 10 L10 30"/>',
  900: '<path d="M5 20 L35 20 M20 5 L20 35"/>',
  1000: '<path d="M10 5 L10 35 M25 5 L25 35"/>',
  2000: '<path d="M5 5 L35 35 M35 5 L5 35"/>',
  3000: '<rect x="5" y="5" width="30" height="30" rx="5"/>',
  4000: '<path d="M20 5 L35 20 L20 35 L5 20 Z"/>',
  5000: '<path d="M5 20 L20 5 L35 20 L20 35 Z"/>',
  6000: '<path d="M10 5 L30 5 L30 35 L10 35 Z"/>',
  7000: '<path d="M5 5 L35 5 L35 35 L5 35" stroke="black" fill="none"/>',
  8000: '<path d="M5 20 L35 20 M20 5 L20 35"/>',
  9000: '<circle cx="20" cy="20" r="15" stroke="black" fill="none"/>',
};

export type RunesKey = keyof typeof runes;

type FactorKey = 1000 | 100 | 10 | 1;

export type Factor = Record<FactorKey, string>;
