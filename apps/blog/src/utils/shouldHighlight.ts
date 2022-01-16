export default function shouldHighlight(
  currentLineNumber: number,
  highlights: string
) {
  if (!highlights) {
    return false;
  }

  let highlightToArray = highlights.split(',');

  return highlightToArray.some((highlight) => {
    if (highlight.includes('-')) {
      let range = highlight.split('-');
      let from = Number(range[0]);
      let to = Number(range[1]);

      if (currentLineNumber >= from && currentLineNumber <= to) {
        return true;
      }
    } else {
      return Number(highlight) === currentLineNumber;
    }
  });
}
