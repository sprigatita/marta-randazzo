import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import LiquidEther from "../src/components/LiquidEther";
import BlurText from "../src/components/BlurText";
import ProfileCard from "../src/components/ProfileCard";
import MagicBento from "../src/components/MagicBento";
import TextType from "../src/components/TextType";
import ScrollFloat from "../src/components/ScrollFloat";
import laptop from "./assets/laptop.png";
import icon from "./assets/code.png";
import logo from "./assets/github.svg";
import StickerPeel from "../src/components/StickerPeel";
import SplashCursor from "../src/components/SplashCursor";
import StarBorder from "../src/components/StarBorder";
import GithubStats from "../src/components/GithubStats";
import GradientBlinds from "../src/components/GradientBlinds";
function App() {
    return (_jsxs("div", { style: { width: "100%", overflowX: "hidden" }, children: [_jsxs("section", { style: {
                    position: "relative",
                    width: "100vw",
                    height: "100vh",
                    overflow: "hidden",
                    backgroundColor: "#000",
                }, children: [_jsx(LiquidEther, { colors: ["#5227FF", "#FF9FFC", "#B19EEF"], mouseForce: 20, cursorSize: 100, isViscous: false, viscous: 30, iterationsViscous: 32, iterationsPoisson: 32, resolution: 0.5, isBounce: false, autoDemo: true, autoSpeed: 0.5, autoIntensity: 2.2, takeoverDuration: 0.25, autoResumeDelay: 3000, autoRampDuration: 0.6, style: {
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            zIndex: 0,
                        } }), _jsx("div", { style: {
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            zIndex: 1,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "100%",
                            height: "100%",
                            textAlign: "center",
                            color: "#fff",
                            pointerEvents: "none",
                        }, children: _jsx(BlurText, { text: "Turning logic into experience.", delay: 450, animateBy: "words", direction: "top", className: "text-7xl font-extrabold" }) })] }), _jsx("section", { id: "about", style: {
                    backgroundColor: "#000",
                    color: "#fff",
                    padding: "4rem 2rem",
                    display: "flex",
                    justifyContent: "center",
                }, children: _jsxs("div", { style: {
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "3rem",
                        maxWidth: "1100px",
                        width: "100%",
                        flexWrap: "wrap",
                    }, children: [_jsx("div", { style: { flex: "1 1 300px", display: "flex", justifyContent: "center" }, children: _jsx(ProfileCard, { name: "Marta Randazzo", title: "Software Developer", handle: "sprigatita", status: "Online", contactText: "Contact Me", avatarUrl: "../src/assets/marta.png", iconUrl: icon, miniAvatarUrl: "../src/assets/marta.png", showUserInfo: true, enableTilt: true, enableMobileTilt: false, onContactClick: () => window.open("https://www.linkedin.com/in/marta-randazzo/", "_blank") }) }), _jsxs("div", { style: { flex: "1 1 400px" }, children: [_jsx(TextType, { style: {
                                        fontSize: "3rem",
                                        fontWeight: "bold",
                                        lineHeight: 1.8,
                                        opacity: 0.85,
                                    }, text: ["Who I Am", "(and what I’m not)"], typingSpeed: 75, pauseDuration: 1500, showCursor: true, cursorCharacter: "|" }), _jsxs("p", { style: {
                                        fontSize: "1.25rem",
                                        lineHeight: 1.8,
                                        opacity: 0.85,
                                    }, children: ["I\u2019m Marta, a 25-year-old software developer based in Rome, Italy. Currently studying Computer Science, I like both backend engineering and frontend experiences.", _jsx("br", {}), " ", _jsx("strong", { children: "I don\u2019t write code to fill screens." })] })] })] }) }), _jsxs("section", { id: "curvedLoops", style: {
                    backgroundColor: "#000",
                    color: "#fff",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "4rem 2rem",
                    textAlign: "center",
                }, children: [_jsx(ScrollFloat, { animationDuration: 1, ease: 'back.inOut(2)', scrollStart: 'center bottom+=50%', scrollEnd: 'bottom bottom-=40%', stagger: 0.03, children: "My Digital Toolkit" }), _jsx("p", { style: {
                            marginTop: "1rem",
                            fontSize: "1rem",
                            opacity: 0.7,
                            maxWidth: "600px",
                            lineHeight: 1.6,
                        }, children: "The languages, frameworks, and libraries I talk to daily. Some of them even talk back." })] }), _jsx("section", { id: "techStack", style: {
                    backgroundColor: "#000",
                    color: "#fff",
                    display: "flex",
                    justifyContent: "center",
                }, children: _jsx(MagicBento, { textAutoHide: true, enableStars: true, enableSpotlight: true, enableBorderGlow: true, enableTilt: true, enableMagnetism: true, clickEffect: true, spotlightRadius: 300, particleCount: 12, glowColor: "132, 0, 255" }) }), _jsxs("section", { id: "github", style: {
                    position: "relative",
                    backgroundColor: "#000",
                    color: "#fff",
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "2rem",
                    padding: "6rem 2rem",
                }, children: [_jsxs("div", { style: {
                            flex: "1 1 400px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            position: "relative",
                            minWidth: "280px",
                            maxWidth: "500px",
                        }, children: [_jsx("img", { src: laptop, alt: "Github Profile", style: {
                                    width: "100%",
                                    height: "auto",
                                    borderRadius: "0.5rem",
                                    pointerEvents: "none",
                                } }), _jsx(StickerPeel, { imageSrc: logo, width: 180, rotate: 10, peelBackHoverPct: 8, peelBackActivePct: 40, peelDirection: 200, shadowIntensity: 0.6, lightingIntensity: 0.1, initialPosition: { x: -80, y: 80 } })] }), _jsxs("div", { style: {
                            flex: "1 1 400px",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            gap: "1rem",
                            maxWidth: "600px",
                            textAlign: "left",
                        }, children: [_jsx("h2", { style: {
                                    fontSize: "2.5rem",
                                    fontWeight: "bold",
                                    marginBottom: "0.5rem",
                                    lineHeight: 1.2,
                                }, children: "My GitHub Chronicles" }), _jsxs("p", { style: {
                                    fontSize: "1.15rem",
                                    lineHeight: 1.7,
                                    opacity: 0.85,
                                }, children: ["A chaotic mix of ", _jsx("strong", { children: "university assignments" }), ", half-finished ideas, and ", _jsx("em", { children: "\u201CI\u2019ll clean this up later\u201D" }), " projects.", _jsx("br", {}), "You\u2019ll find ", _jsx("strong", { children: "empty repos" }), " full of dreams,", _jsx("strong", { children: "3 a.m. experiments" }), " that somehow compile, and the occasional piece of code that actually works."] }), _jsx(StarBorder, { as: "button", className: "custom-class", color: "cyan", speed: "5s", children: _jsx("a", { href: "https://github.com/sprigatita", target: "_blank", rel: "noopener noreferrer", onMouseOver: (e) => ((e.currentTarget.style.transform = "scale(1.05)")), onMouseOut: (e) => ((e.currentTarget.style.transform = "scale(1)")), children: "Check it out" }) })] })] }), _jsx("section", { id: "github-stats", style: {
                    backgroundColor: "#000",
                    color: "#fff",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "6rem 2rem",
                    textAlign: "center",
                }, children: _jsx(GithubStats, {}) }), _jsxs("section", { style: {
                    position: "relative",
                    overflow: "hidden",
                    minHeight: "60vh",
                    background: "#000",
                    color: "#fff",
                    textAlign: "center",
                }, children: [_jsx(GradientBlinds, { gradientColors: ["#FF9FFC", "#5227FF"], angle: 0, noise: 0.3, blindCount: 12, blindMinWidth: 50, spotlightRadius: 0.5, spotlightSoftness: 1, spotlightOpacity: 1, mouseDampening: 0.15, distortAmount: 0, shineDirection: "left", mixBlendMode: "normal" }), _jsx("div", { style: {
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            zIndex: 2,
                            textAlign: "center",
                            pointerEvents: "none",
                        }, children: _jsx("h1", { style: {
                                fontFamily: "'Clash Display', sans-serif",
                                fontSize: "6rem",
                                fontWeight: 400,
                                color: "#fff",
                                textShadow: "0 0 20px rgba(0,0,0,0.4)",
                                margin: 0,
                            }, children: "The End." }) }), _jsxs("div", { style: { position: "relative", zIndex: 1, padding: "4rem 2rem" }, children: [_jsx("p", { style: {
                                    fontFamily: "'Allison', cursive",
                                    fontSize: "2.8rem",
                                    marginBottom: "1rem",
                                    fontWeight: 400,
                                    textShadow: "0 0 12px rgba(0,0,0,0.25)",
                                    margin: "0.5rem 0 0 0",
                                    opacity: 0.8
                                }, children: "If you made it down here... I'm honestly surprised." }), _jsxs("p", { style: { margin: "2rem 0 0 0", fontStyle: "italic", opacity: 0.6 }, children: ["\u00A9 ", new Date().getFullYear(), " Marta \u2013 I need a copywriter to understand what to write in here."] }), "                "] })] }), _jsx(SplashCursor, {})] }));
}
export default App;
