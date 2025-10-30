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
import marta from "./assets/marta.png";
import StickerPeel from "../src/components/StickerPeel";
import SplashCursor from "../src/components/SplashCursor";
import StarBorder from "../src/components/StarBorder";
import GithubStats from "../src/components/GithubStats";
import GradientBlinds from "../src/components/GradientBlinds";
import "./App.css";
function App() {
    return (_jsxs("div", { className: "app-container", children: [_jsxs("section", { className: "hero-section", children: [_jsx(LiquidEther, { colors: ["#5227FF", "#FF9FFC", "#B19EEF"], mouseForce: 20, cursorSize: 100, isViscous: false, viscous: 30, iterationsViscous: 32, iterationsPoisson: 32, resolution: 0.5, isBounce: false, autoDemo: true, autoSpeed: 0.5, autoIntensity: 2.2, takeoverDuration: 0.25, autoResumeDelay: 3000, autoRampDuration: 0.6, style: {
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            zIndex: 0,
                        } }), _jsx("div", { className: "hero-text", children: _jsx(BlurText, { text: "Turning logic into experience.", delay: 450, animateBy: "words", direction: "top", className: "hero-title" }) })] }), _jsx("section", { id: "about", className: "about-section", children: _jsxs("div", { className: "about-wrapper", children: [_jsx("div", { className: "about-card", children: _jsx(ProfileCard, { name: "Marta Randazzo", title: "Software Developer", handle: "sprigatita", status: "Online", contactText: "Contact Me", avatarUrl: marta, iconUrl: icon, miniAvatarUrl: marta, showUserInfo: true, enableTilt: true, enableMobileTilt: false, onContactClick: () => window.open("https://www.linkedin.com/in/marta-randazzo/", "_blank") }) }), _jsxs("div", { className: "about-text", children: [_jsx(TextType, { style: {
                                        fontSize: "3rem",
                                        fontWeight: "bold",
                                        lineHeight: 1.8,
                                        opacity: 0.85,
                                    }, text: ["Who I Am", "(and what I’m not)"], typingSpeed: 75, pauseDuration: 1500, showCursor: true, cursorCharacter: "|" }), _jsxs("p", { className: "about-paragraph", children: ["I\u2019m Marta, a 25-year-old software developer based in Rome, Italy. Currently studying Computer Science, I like both backend engineering and frontend experiences.", _jsx("br", {}), _jsx("strong", { children: "I don\u2019t write code to fill screens." })] })] })] }) }), _jsxs("section", { id: "curvedLoops", className: "toolkit-section", children: [_jsx(ScrollFloat, { animationDuration: 1, ease: "back.inOut(2)", scrollStart: "center bottom+=50%", scrollEnd: "bottom bottom-=40%", stagger: 0.03, children: "My Digital Toolkit" }), _jsx("p", { className: "toolkit-description", children: "The languages, frameworks, and libraries I talk to daily. Some of them even talk back." })] }), _jsx("section", { id: "techStack", className: "techstack-section", children: _jsx(MagicBento, { textAutoHide: true, enableStars: true, enableSpotlight: true, enableBorderGlow: true, enableTilt: true, enableMagnetism: true, clickEffect: true, spotlightRadius: 300, particleCount: 12, glowColor: "132, 0, 255" }) }), _jsxs("section", { id: "github", className: "github-section", children: [_jsxs("div", { className: "github-image", children: [_jsx("img", { src: laptop, alt: "Github Profile", className: "github-laptop" }), _jsx(StickerPeel, { imageSrc: logo, width: 180, rotate: 10, peelBackHoverPct: 8, peelBackActivePct: 40, peelDirection: 200, shadowIntensity: 0.6, lightingIntensity: 0.1, initialPosition: { x: -80, y: 80 } })] }), _jsxs("div", { className: "github-text", children: [_jsx("h2", { children: "My GitHub Chronicles" }), _jsxs("p", { children: ["A chaotic mix of ", _jsx("strong", { children: "university assignments" }), ", half-finished ideas, and ", _jsx("em", { children: "\u201CI\u2019ll clean this up later\u201D" }), " projects.", _jsx("br", {}), "You\u2019ll find ", _jsx("strong", { children: "empty repos" }), " full of dreams,", _jsx("strong", { children: "3 a.m. experiments" }), " that somehow compile, and the occasional piece of code that actually works."] }), _jsx(StarBorder, { as: "button", className: "custom-class", color: "cyan", speed: "5s", children: _jsx("a", { href: "https://github.com/sprigatita", target: "_blank", rel: "noopener noreferrer", children: "Check it out" }) })] })] }), _jsx("section", { id: "github-stats", className: "github-stats-section", children: _jsx(GithubStats, {}) }), _jsxs("section", { className: "footer-section", children: [_jsx(GradientBlinds, { gradientColors: ["#FF9FFC", "#5227FF"], angle: 0, noise: 0.3, blindCount: 12, blindMinWidth: 50, spotlightRadius: 0.5, spotlightSoftness: 1, spotlightOpacity: 1, mouseDampening: 0.15, distortAmount: 0, shineDirection: "left", mixBlendMode: "normal" }), _jsxs("div", { className: "footer-content", children: [_jsx("p", { className: "footer-subtext", children: "If you made it down here... I'm impressed!" }), _jsxs("p", { className: "footer-copy", children: ["\u00A9 ", new Date().getFullYear(), " Marta \u2013 I need a copywriter to understand what to write in here."] })] })] }), _jsx(SplashCursor, {})] }));
}
export default App;
