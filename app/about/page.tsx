import BottomNav from "@/components/BottomNav";

export default function AboutPage() {
  return (
    <main className="page">
      <div className="page-content">
        <div className="page-header">
          <p className="handwritten-label">About this diary</p>
          <h1 className="heading-lg">
            For the things that don't have anywhere else to go.
          </h1>
        </div>

        <div className="about-sections">
          <section className="about-section">
            <h2 className="heading-md">A small promise.</h2>
            <p className="body-serif">
              A mother's diary is for the things that don't have anywhere else
              to go. The 3 a.m. thoughts. The sentences that feel too long for a
              text and too small for a therapist. The relief and the rage. The
              love that frightens you.
            </p>
          </section>

          <section className="about-section">
            <h2 className="heading-md">You are anonymous.</h2>
            <p className="body-serif">
              We do not collect names, photos, or accounts. Each letter is
              signed only by 'a mother.' We will not change this.
            </p>
          </section>

          <section className="about-section">
            <h2 className="heading-md">There are no comments.</h2>
            <p className="body-serif">
              No replies, no advice, no fixing. Just one button: 'I see you.' If
              a letter moves you, tap it. Nothing more is needed.
            </p>
          </section>

          <section className="about-section">
            <h2 className="heading-md">Be gentle with heavy letters.</h2>
            <p className="body-serif">
              Letters about loss, postpartum mental health, or other difficult
              subjects are marked with a gentle warning. You are always in
              control of what you read.
            </p>
          </section>
        </div>
      </div>

      <BottomNav active="about" />
    </main>
  );
}
