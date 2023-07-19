export default function textReduce(text?: string): string {
  if (!text) {
    return '';
  } else if (text.length <= 38) {
    return text;
  } else {
    return text.slice(0, 38) + '...';
  }
}