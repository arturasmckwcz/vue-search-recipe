export function capitalize<T>(str: string) {
  return (str[0].toUpperCase() + str.slice(1)) as T;
}

export function getTruncated(fullText: string, maxLength: number) {
  if (fullText.length <= maxLength) return fullText;

  const words = fullText.split(" ");
  let truncatedText = "";
  for (const word of words) {
    if ((truncatedText + word).length >= maxLength) break;
    truncatedText += word + " ";
  }

  return truncatedText.trim() + "...";
}
