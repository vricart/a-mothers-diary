import type { Letter } from "@/lib/letters";

type Props = {
  letter: Letter;
};

function HeartIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}

// Organic, slightly uneven hand-drawn underline in accent color
function HandUnderline() {
  return (
    <svg className="card-underline" viewBox="0 0 300 8" preserveAspectRatio="none">
      <path
        d="M1,5.5 C25,3.5 55,6.5 90,5 C125,3.5 155,6.5 190,4.5 C220,3 255,6 285,4.5 C292,4.2 296,4.8 299,5"
        stroke="var(--accent)"
        strokeWidth="1.6"
        fill="none"
        strokeLinecap="round"
        opacity="0.65"
      />
    </svg>
  );
}

export default function LetterCard({ letter }: Props) {
  const pageNum = Math.floor(letter.seen / 15);

  return (
    <article className="card">
      {/* Lavender corner tab */}
      <div className="card-tab" />

      {/* Meta: script time (left) + topic (right) */}
      <div className="card-meta">
        <span className="card-meta-time">{letter.date}, {letter.when}</span>
        <span className="card-meta-topic">{letter.topic}</span>
      </div>

      {/* Title + hand-drawn underline grouped */}
      <div className="card-title-block">
        <h2 className="card-title">{letter.title}</h2>
        <HandUnderline />
      </div>

      {/* Excerpt */}
      <p className="card-excerpt">{letter.body[0]}</p>

      {/* Continue reading */}
      <button className="card-read-more">Continue reading →</button>

      {/* Standalone signature */}
      <p className="card-signature">— a mother</p>

      {/* Footer: heart + seen count · page number */}
      <div className="card-footer">
        <span className="card-seen">
          <HeartIcon /> I see you · {letter.seen.toLocaleString()}
        </span>
        <span className="card-page">p. {pageNum}</span>
      </div>
    </article>
  );
}
