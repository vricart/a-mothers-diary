import Link from "next/link";

type Tab = "letters" | "rooms" | "write" | "you" | "about";

type Props = {
  active?: Tab;
};

const tabs: { id: Tab; label: string; href: string; icon: React.ReactNode }[] = [
  {
    id: "letters",
    label: "Letters",
    href: "/feed",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="3" y1="6" x2="21" y2="6" />
        <line x1="3" y1="12" x2="21" y2="12" />
        <line x1="3" y1="18" x2="15" y2="18" />
      </svg>
    ),
  },
  {
    id: "write",
    label: "Write",
    href: "/write",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
  },
  {
    id: "you",
    label: "You",
    href: "/you",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
  {
    id: "about",
    label: "About",
    href: "/about",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
  },
];

export default function BottomNav({ active = "letters" }: Props) {
  return (
    <nav className="bottom-nav">
      {tabs.map((tab) => (
        <Link
          key={tab.id}
          href={tab.href}
          className={`bottom-nav-item${active === tab.id ? " active" : ""}`}
        >
          {tab.icon}
          {tab.label}
        </Link>
      ))}
    </nav>
  );
}
