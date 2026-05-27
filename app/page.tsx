export default function Home() {
  return (
    <main className="min-h-screen bg-paper flex flex-col items-center justify-center px-6">
      <div className="text-center max-w-md">
        <p className="font-sans text-xs tracking-widest uppercase text-muted mb-4">
          A safe space for mothers
        </p>
        <h1 className="font-serif text-5xl text-ink leading-tight mb-4">
          A mother&apos;s diary.
        </h1>
        <p className="font-serif italic text-muted text-lg leading-relaxed mb-10">
          For the things that don&apos;t have anywhere else to go.
        </p>
        <div className="w-px h-12 bg-hairline mx-auto mb-10" />
        <p className="font-script text-3xl text-muted">
          — coming soon
        </p>
      </div>
    </main>
  );
}
