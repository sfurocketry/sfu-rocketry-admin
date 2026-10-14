export default function ProjectSummary({ summary, compact = false }) {
  const paragraphs = summary.split(/\n\n+/);
  const visibleParagraphs = compact ? paragraphs.slice(0, 1) : paragraphs;

  return visibleParagraphs.map((paragraph, paragraphIndex) => (
    <p key={paragraphIndex}>
      {paragraph.split(/(\*\*[^*]+\*\*)/g).map((part, partIndex) =>
        part.startsWith("**") && part.endsWith("**") ? (
          <strong key={partIndex}>{part.slice(2, -2)}</strong>
        ) : (
          part
        ),
      )}
    </p>
  ));
}
