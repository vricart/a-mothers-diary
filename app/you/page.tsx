import LetterCard from "@/components/LetterCard";
import BottomNav from "@/components/BottomNav";
import { LETTERS } from "@/lib/letters";

export default function YouPage() {
  return (
    <main className="page">
      <div className="page-content">
        <div className="page-header">
          <p className="label">You, here</p>
          <h1 className="handwritten-label">a mother</h1>
          <p className="italic-muted">Everything you've written, held here.</p>
        </div>

        <p className="label you-section-label">Your letters</p>
        <div className="feed">
          {LETTERS.map((letter) => (
            <LetterCard key={letter.id} letter={letter} />
          ))}
        </div>
      </div>

      <BottomNav active="you" />
    </main>
  );
}
