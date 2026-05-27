import type { Letter } from "@/lib/letters";

type Props = {
  letter: Letter;
};

export default function LetterCard({ letter }: Props) {
  return (
    <article className="card">
      <div className="card-meta">
        <span>{letter.date}</span>
        <span>·</span>
        <span>{letter.when}</span>
        <span>·</span>
        <span>{letter.place}</span>
      </div>

      <h2 className="card-title">{letter.title}</h2>

      <p className="card-excerpt">{letter.body[0]}</p>

      <div className="card-footer">
        <span className="signature">— a mother</span>
        <span className="card-seen">{letter.seen.toLocaleString()} saw this</span>
      </div>
    </article>
  );
}
