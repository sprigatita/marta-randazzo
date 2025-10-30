import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend, } from "recharts";
import TextPressure from "../../src/components/TextPressure";
const COLORS = [
    "#E580D8",
    "#72E8E0",
    "#A47CFF",
    "#E5DA7A",
    "#6BE5A8",
    "#E06F9F",
];
const GithubStats = () => {
    const [repos, setRepos] = useState([]);
    const [languages, setLanguages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("/api/github"); // ✅ chiamata al proxy server
                if (!res.ok)
                    throw new Error(`Server API error: ${res.status}`);
                const { repos, languages: langMap } = await res.json();
                setRepos(repos);
                const total = Object.values(langMap)
                    .filter((v) => typeof v === "number")
                    .reduce((a, b) => a + b, 0);
                const langArray = Object.entries(langMap)
                    .map(([name, value]) => ({
                    name,
                    value: (value / total) * 100,
                }))
                    .sort((a, b) => b.value - a.value);
                setLanguages(langArray);
            }
            catch (err) {
                setError(err.message);
            }
            finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);
    return (_jsx("section", { style: {
            backgroundColor: "#000",
            color: "#fff",
            padding: "4rem 2rem",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            gap: "4rem",
            minHeight: "60vh",
            flexDirection: "row",
        }, children: loading ? (_jsx("p", { style: { opacity: 0.7 }, children: "Loading GitHub data..." })) : error ? (_jsxs("p", { style: { color: "red" }, children: ["Error: ", error] })) : (_jsxs(_Fragment, { children: [_jsxs(motion.div, { initial: { opacity: 0, y: 40 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.2 }, style: {
                        maxWidth: "420px",
                        textAlign: "left",
                        flex: "1 1 300px",
                    }, children: [_jsx(TextPressure, { text: "Some boring numbers", scale: true }), _jsxs("p", { style: { opacity: 0.8, marginBottom: "1.5rem" }, children: ["Currently juggling ", _jsx("strong", { children: repos.length }), " repositories. My GitHub is a chaotic mix of empty repos, university projects, and brilliant ideas born at 3 AM. Some even compile."] }), _jsx("ul", { style: {
                                opacity: 0.9,
                                lineHeight: 1.8,
                                display: "flex",
                                flexWrap: "wrap",
                                gap: "0.75rem",
                                padding: 0,
                                margin: 0,
                                listStyle: "none",
                            }, children: languages.slice(0, 5).map((lang, idx) => (_jsxs("li", { style: {
                                    flex: "1 1 45%",
                                    minWidth: "140px",
                                    display: "flex",
                                    alignItems: "center",
                                    padding: "0.5rem 0.75rem",
                                    background: "rgba(255,255,255,0.05)",
                                    borderRadius: "6px",
                                    transition: "background 0.3s",
                                }, onMouseEnter: (e) => {
                                    e.currentTarget.style.background = "rgba(255,255,255,0.12)";
                                }, onMouseLeave: (e) => {
                                    e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                                }, children: [_jsx("span", { style: {
                                            display: "inline-block",
                                            width: "12px",
                                            height: "12px",
                                            borderRadius: "50%",
                                            background: COLORS[idx % COLORS.length],
                                            marginRight: "0.75rem",
                                        } }), _jsx("span", { style: { flexGrow: 1, textTransform: "capitalize" }, children: lang.name }), _jsxs("span", { style: { fontWeight: "bold", marginLeft: "0.5rem" }, children: [lang.value.toFixed(1), "%"] })] }, lang.name))) })] }), _jsx(motion.div, { initial: { opacity: 0, y: 40 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.8 }, style: {
                        flex: "1 1 360px",
                        display: "flex",
                        justifyContent: "center",
                    }, children: _jsx(ResponsiveContainer, { width: 360, height: 360, children: _jsxs(PieChart, { children: [_jsx(Pie, { data: languages, cx: "50%", cy: "45%", innerRadius: 70, outerRadius: 110, cornerRadius: 10, paddingAngle: 5, dataKey: "value", nameKey: "name", labelLine: false, label: false, children: languages.map((_, index) => (_jsx(Cell, { fill: COLORS[index % COLORS.length], stroke: "#000", strokeWidth: 1 }, index))) }), _jsx(Tooltip, { contentStyle: {
                                        background: "rgba(0, 0, 0, 0.85)",
                                        border: "1px solid #8400FF",
                                        borderRadius: "8px",
                                        boxShadow: "0 0 12px rgba(132, 0, 255, 0.5)",
                                    }, itemStyle: {
                                        color: "#fff",
                                        fontSize: "0.9rem",
                                        textTransform: "capitalize",
                                    }, labelStyle: {
                                        color: "#FF9FFC",
                                        fontWeight: "bold",
                                        marginBottom: "4px",
                                    } }), _jsx(Legend, { verticalAlign: "bottom", align: "center", wrapperStyle: {
                                        color: "#ccc",
                                        fontSize: "0.9rem",
                                        marginTop: "1rem",
                                        lineHeight: "1.5rem",
                                    } })] }) }) })] })) }));
};
export default GithubStats;
