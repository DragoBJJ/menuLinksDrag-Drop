import { Factor, runes, RunesKey } from '../data/runes';

export const numbersSequenceBreakdown = (numRepresentation: number) => {
  const factors: Factor[] = [1000, 100, 10, 1];
  const total = [];
  for (const factor of factors) {
    const digit = Math.floor(numRepresentation / factor);
    if (digit > 0) {
      total.push(digit * factor);
      numRepresentation -= digit * factor;
    }
  }
  return total;
};

export const mapNumberRepresentationToRunes = (numRepresentations: number[]) => {
  return numRepresentations.map((value) => runes[value as RunesKey]).join('');
};

export const generateRune = (numRepresentation: number) => {
  const total = numbersSequenceBreakdown(numRepresentation);
  return mapNumberRepresentationToRunes(total);
};

export const generateSVG = (runesRepresentation: string) => {
  return `
    <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
      ${runesRepresentation}
    </svg>
  `;
};
