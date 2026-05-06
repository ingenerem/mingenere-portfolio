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
        <nav className="flex items-center justify-between py-2 mt-0 text-black dark:text-white sticky top-0 z-50 bg-black/90 backdrop-blur py-4sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-black/80 border-b border-black/10 dark:border-white/10">
            <div 
            onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" }); 
            }}
            className=" cursor-pointer flex h-15 w-15 items-center justify-center rounded-full border border-purple-500 text-lg font-semibold">
                M
            </div>

            <div className="flex items-center gap-8 text-sm text-black/100 dark:text-white/60">

                {navItems.map((item) => (
                    <a

                        key={item.id}
                        type="button"
                        onClick={(e) => {
                            e.stopPropagation();
                            setActiveCard((prev) => (prev === item.id ? null : item.id));
                            document.getElementById(item.id)?.scrollIntoView({
                                behavior: "smooth",
                                block: "center",
                            });
                        }}
                        className="cursor-pointer hover:text-black dark:hover:text-white transition">

                        {item.label}
                    </a>
                ))}

            </div>
        </nav>
    );
}