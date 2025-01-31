const createImageLink = (url: string, filename: string) => {
  const link = document.createElement('a');
  link.href = url;
  link.download = `${filename}.svg`;
  document.body.appendChild(link);
  link.click();
};

const clearBody = (link: HTMLAnchorElement, url: string) => {
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};
const createBlob = (svgString: string) => {
  const blob = new Blob([svgString], { type: 'image/svg+xml' });
  return URL.createObjectURL(blob);
};

export const downloadSVG = (svgString: string, filename: string) => {
  if (!svgString) return;

  const url = createBlob(svgString);
  createImageLink(url, filename);

  const link = document.createElement('a');
  link.href = url;
  link.download = `${filename}.svg`;
  document.body.appendChild(link);
  link.click();

  clearBody(link, url);
};
