import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    ResponsiveContainer,
    Legend,
} from "recharts";
import TextPressure from "../../src/components/TextPressure";

interface LanguageData {
    name: string;
    value: number;
    [key: string]: string | number;
}

const COLORS = [
    "#E580D8",
    "#72E8E0",
    "#A47CFF",
    "#E5DA7A",
    "#6BE5A8",
    "#E06F9F",
];

const GithubStats: React.FC = () => {
    const [repos, setRepos] = useState<any[]>([]);
    const [languages, setLanguages] = useState<LanguageData[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const user = "sprigatita"; // 👈 il tuo username GitHub
                const token = import.meta.env.VITE_GITHUB_TOKEN;
                const headers: HeadersInit = {};

                if (token) {
                    (headers as Record<string, string>).Authorization = `token ${token}`;
                }


                if (!token) {
                    console.warn(
                        "%c⚠️ GitHub token mancante:",
                        "color: orange; font-weight: bold;",
                        "le API funzioneranno ma con limiti (60 richieste/ora)"
                    );
                }

                // Ottieni le repo pubbliche
                const res = await fetch(`https://api.github.com/users/${user}/repos`, {
                    headers,
                });
                if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);

                const data = await res.json();
                setRepos(data);

                // Calcola linguaggi più usati
                const langMap: Record<string, number> = {};
                await Promise.all(
                    data.slice(0, 10).map(async (repo: any) => {
                        const langRes = await fetch(repo.languages_url, { headers });
                        const langData = await langRes.json();
                        for (const [lang, bytes] of Object.entries(langData)) {
                            langMap[lang] = (langMap[lang] || 0) + (bytes as number);
                        }
                    })
                );

                const total = Object.values(langMap).reduce((a, b) => a + b, 0);
                const langArray = Object.entries(langMap)
                    .map(([name, value]) => ({ name, value: (value / total) * 100 }))
                    .sort((a, b) => b.value - a.value);

                setLanguages(langArray);
            } catch (err) {
                setError((err as Error).message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <section
            style={{
                backgroundColor: "#000",
                color: "#fff",
                padding: "4rem 2rem",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "center",
                gap: "4rem",
                minHeight: "60vh",
                flexDirection: "row", // 👈 testo a sinistra, grafico a destra
            }}
        >
            {loading ? (
                <p style={{ opacity: 0.7 }}>Loading GitHub data...</p>
            ) : error ? (
                <p style={{ color: "red" }}>Error: {error}</p>
            ) : (
                <>
                    {/* 📊 TESTO E STATISTICHE */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        style={{
                            maxWidth: "420px",
                            textAlign: "left",
                            flex: "1 1 300px",
                        }}
                    >
                        <TextPressure
                            text="Some boring numbers"
                            scale={true}
                        />

                        <p style={{ opacity: 0.8, marginBottom: "1.5rem" }}>
                            Currently juggling{" "}
                            <strong>{repos.length}</strong> repositories.
                            My GitHub is a chaotic mix of empty repos, university projects, and brilliant ideas born at 3 AM. Some even compile.
                        </p>

                        <ul
                            style={{
                                opacity: 0.9,
                                lineHeight: 1.8,
                                display: "flex",
                                flexWrap: "wrap",
                                gap: "0.75rem",
                                padding: 0,
                                margin: 0,
                                listStyle: "none",
                            }}
                        >
                            {languages.slice(0, 5).map((lang, idx) => (
                                <li
                                    key={lang.name}
                                    style={{
                                        flex: "1 1 45%", // due colonne su schermi medi
                                        minWidth: "140px",
                                        display: "flex",
                                        alignItems: "center",
                                        padding: "0.5rem 0.75rem",
                                        background: "rgba(255,255,255,0.05)",
                                        borderRadius: "6px",
                                        transition: "background 0.3s",
                                    }}
                                    onMouseEnter={(e) => {
                                        (e.currentTarget.style.background = "rgba(255,255,255,0.12)");
                                    }}
                                    onMouseLeave={(e) => {
                                        (e.currentTarget.style.background = "rgba(255,255,255,0.05)");
                                    }}
                                >
                                    {/* badge colore */}
                                    <span
                                        style={{
                                            display: "inline-block",
                                            width: "12px",
                                            height: "12px",
                                            borderRadius: "50%",
                                            background: COLORS[idx % COLORS.length],
                                            marginRight: "0.75rem",
                                        }}
                                    />
                                    <span style={{ flexGrow: 1, textTransform: "capitalize" }}>
        {lang.name}
      </span>
                                    <span style={{ fontWeight: "bold", marginLeft: "0.5rem" }}>
        {lang.value.toFixed(1)}%
      </span>
                                </li>
                            ))}
                        </ul>

                    </motion.div>

                    {/* 🎨 GRAFICO PIECHART */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        style={{
                            flex: "1 1 360px",
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        <ResponsiveContainer width={360} height={360}>
                            <PieChart>
                                <Pie
                                    data={languages}
                                    cx="50%"
                                    cy="45%"
                                    innerRadius={70}
                                    outerRadius={110}
                                    cornerRadius={10}
                                    paddingAngle={5}
                                    dataKey="value"
                                    nameKey="name"
                                    labelLine={false}
                                    label={false}
                                >
                                    {languages.map((_, index) => (
                                        <Cell
                                            key={index}
                                            fill={COLORS[index % COLORS.length]}
                                            stroke="#000"
                                            strokeWidth={1}
                                        />
                                    ))}
                                </Pie>

                                <Tooltip
                                    contentStyle={{
                                        background: "rgba(0, 0, 0, 0.85)",
                                        border: "1px solid #8400FF",
                                        borderRadius: "8px",
                                        boxShadow: "0 0 12px rgba(132, 0, 255, 0.5)",
                                    }}
                                    itemStyle={{
                                        color: "#fff",
                                        fontSize: "0.9rem",
                                        textTransform: "capitalize",
                                    }}
                                    labelStyle={{
                                        color: "#FF9FFC",
                                        fontWeight: "bold",
                                        marginBottom: "4px",
                                    }}
                                />

                                <Legend
                                    verticalAlign="bottom"
                                    align="center"
                                    wrapperStyle={{
                                        color: "#ccc",
                                        fontSize: "0.9rem",
                                        marginTop: "1rem",
                                        lineHeight: "1.5rem",
                                    }}
                                />
                            </PieChart>
                        </ResponsiveContainer>
                    </motion.div>
                </>
            )}
        </section>
    );
};

export default GithubStats;
