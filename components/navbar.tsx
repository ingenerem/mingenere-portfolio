"use client";

const navItems = [
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Connect", id: "connect" },
    { label: "Hire me", id: "availability" },
];

type NavbarProps = {
    setActiveCard: React.Dispatch<React.SetStateAction<string | null>>;
};

export default function Navbar({ setActiveCard }: NavbarProps) {


    return (
        <nav className="flex items-center justify-between py-2 mt-0 text-black dark:text-white">
            <div className="flex h-15 w-15 items-center justify-center rounded-full border border-purple-500 text-lg font-semibold">
                M
            </div>

            <div className="flex items-center gap-8 text-sm text-black/100 dark:text-white/60">

                {navItems.map((item) => (
                    <button
                        key={item.id}
                        type="button"
                        onClick={(e) => {
                            e.stopPropagation();

                            setActiveCard((prev) =>
                                prev === item.id ? null : item.id
                            );
                        }}
                        className="cursor-pointer hover:text-black dark:hover:text-white transition">

                        {item.label}
                    </button>
                ))}

            </div>
        </nav>
    );
}