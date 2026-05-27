import Button from "@/components/Button";

export default function Home() {
  return (
    <main className="page page-centered">
      <div className="page-content">
        <p className="label">A safe space for mothers</p>
        <h1 className="heading-xl">A mother&apos;s diary.</h1>
        <p className="italic-muted">For the things that don&apos;t have anywhere else to go.</p>
        <div className="divider" style={{ margin: "2.5rem auto" }} />
        <Button href="/feed">Continue</Button>
      </div>
    </main>
  );
}
