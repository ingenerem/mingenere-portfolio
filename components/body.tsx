"use client";
import Card from "./Card";
import { skills } from "@/data/skills";
import { motion } from "framer-motion";
import { useState } from "react";

type BodyProps = {
    activeCard: string | null;
    setActiveCard: (id: string) => void;

};

export default function Body({ activeCard, setActiveCard }: BodyProps) {
    const [copied, setCopied] = useState(false);
    return (
        <section className="py-4">
            < motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 30, ease: "easeOut" }} className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">

                <section id="about">

                    <Card id="about" className="scroll-mt-28" activeCard={activeCard}
                        setActiveCard={setActiveCard}>
                        <p className="text-2xl font-bold">Who Am I</p>
                        <h2 className="mt-2 text-xl mb-2">Software Engineer</h2>
                        <p>
                            A full stack software engineer, with a Master’s in IT from Carnegie Mellon and experience improving enterprise systems.
                        </p>
                    </Card>

                </section>

                <section id="skills" className="scroll-mt-28">

                    <Card id="skills" activeCard={activeCard}
                        setActiveCard={setActiveCard}
                    >
                        <p className="text-2xl font-bold ">Skills </p>

                        <div className="mt-4 flex flex-wrap gap-2">
                            {skills.map((skill) => (
                                <span
                                    key={skill.name}
                                    className={`flex items-center rounded-xl border px-4 text-lg shadow-sm  ${skill.classes}`}
                                >
                                    {skill.name}
                                </span>
                            ))}
                        </div>

                    </Card>

                </section>

                <section id="connect" className="scroll-mt-28">

                    <Card
                        id="connect"
                        activeCard={activeCard}
                        setActiveCard={setActiveCard}

                    >
                        <div className="space-y-4">

                            <h2 className="text-2xl font-bold tracking-tight">
                                Let’s connect
                            </h2>

                            <div className="flex flex-wrap items-center gap-3 pt-2">

                                {/* LinkedIn */}
                                <a
                                    href="https://linkedin.com/in/m-claudine-ingenere"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="rounded-lg border border-gray-500 px-4 py-2 text-sm font-medium 
                                hover:bg-blue-500 hover:text-white transition"
                                >
                                    LinkedIn
                                </a>

                                {/* GitHub */}
                                <a
                                    href="https://github.com/ingenerem"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="rounded-lg border border-gray-500 px-4 py-2 text-sm font-medium 
                                hover:bg-gray-900 hover:text-white transition dark:hover:bg-white dark:hover:text-black"
                                >
                                    GitHub
                                </a>

                                {/* Email + Copy */}
                                <div className="flex items-center gap-2 rounded-lg border border-purple-500 px-3 py-2 text-sm font-medium">
                                    <span>ingenerem@gmail.com</span>

                                    <button
                                        onClick={() => {
                                            navigator.clipboard.writeText("ingenerem@example.com");
                                            setCopied(true);
                                            setTimeout(() => setCopied(false), 3000);
                                        }}
                                        className="cursor-pointer ml-2 text-xs px-2 py-1 rounded-md 
                                    border border-purple-500 
                                    hover:bg-purple-500 hover:text-white transition"
                                    >
                                        {copied ? "✓ Copied" : "Copy"}
                                    </button>
                                </div>

                            </div>
                        </div>
                    </Card>

                </section>

                <section id="availability" className="scroll-mt-28">
                    <Card id="availability" activeCard={activeCard}
                        setActiveCard={setActiveCard} >

                        <p className="text-2xl font-bold">Availability</p>
                        <h2 className="mt-2 text-xl mb-2">Atlanta Metro area/Remote</h2>

                    </Card>

                </section>


            </motion.div>


        </section>
    );
}