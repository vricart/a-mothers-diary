import Link from "next/link";

type Props = {
  variant?: "primary" | "ghost";
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  children: React.ReactNode;
};

export default function Button({ variant = "primary", href, onClick, disabled, children }: Props) {
  const className = `btn btn-${variant}`;

  if (href) {
    return <Link href={href} className={className}>{children}</Link>;
  }

  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
