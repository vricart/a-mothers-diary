import LetterCard from "@/components/LetterCard";
import BottomNav from "@/components/BottomNav";
import Fab from "@/components/Fab";
import { LETTERS } from "@/lib/letters";

export default function FeedPage() {
  const dateLabel = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  return (
    <main className="page">
      <div className="page-content">
        <div className="page-header">
          <p className="handwritten-label">{dateLabel}</p>
          <h1 className="heading-xl">Letters from the night.</h1>
          <p className="feed-subtitle">
            {LETTERS.length} mothers wrote here today.
          </p>
        </div>

        <div className="feed">
          {LETTERS.map((letter) => (
            <LetterCard key={letter.id} letter={letter} />
          ))}
        </div>
      </div>

      <Fab />
      <BottomNav active="letters" />
    </main>
  );
}
