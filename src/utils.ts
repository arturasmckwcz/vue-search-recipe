export function capitalize<T>(str: string) {
  return str ? ((str[0].toUpperCase() + str.slice(1)) as T) : str;
}

export function getTruncated(
  fullText: string,
  maxLength: number,
  ellipsis = "..."
) {
  if (maxLength <= 0 || fullText.length <= maxLength) return fullText;

  const words = fullText.split(" ");

  if (words[0].length >= maxLength) {
    return words[0].slice(0, maxLength) + ellipsis;
  }

  let truncatedText = "";
  for (const word of words) {
    if ((truncatedText + word).length >= maxLength) break;
    truncatedText += word + " ";
  }

  return truncatedText.trim() + ellipsis;
}

export function getParas(text: string, cr = "\r\n") {
  return text.split(cr);
}
