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
    return (
        <div className="app-container">
            {/* HERO */}
            <section className="hero-section">
                <LiquidEther
                    colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
                    mouseForce={20}
                    cursorSize={100}
                    isViscous={false}
                    viscous={30}
                    iterationsViscous={32}
                    iterationsPoisson={32}
                    resolution={0.5}
                    isBounce={false}
                    autoDemo={true}
                    autoSpeed={0.5}
                    autoIntensity={2.2}
                    takeoverDuration={0.25}
                    autoResumeDelay={3000}
                    autoRampDuration={0.6}
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        zIndex: 0,
                    }}
                />
                <div className="hero-text">
                    <BlurText
                        text="Turning logic into experience."
                        delay={450}
                        animateBy="words"
                        direction="top"
                        className="hero-title"
                    />
                </div>
            </section>

            {/* ABOUT */}
            <section id="about" className="about-section">
                <div className="about-wrapper">
                    <div className="about-card">
                        <ProfileCard
                            name="Marta Randazzo"
                            title="Software Developer"
                            handle="sprigatita"
                            status="Online"
                            contactText="Contact Me"
                            avatarUrl={marta}
                            iconUrl={icon}
                            miniAvatarUrl={marta}
                            showUserInfo={true}
                            enableTilt={true}
                            enableMobileTilt={false}
                            onContactClick={() =>
                                window.open(
                                    "https://www.linkedin.com/in/marta-randazzo/",
                                    "_blank"
                                )
                            }
                        />
                    </div>

                    <div className="about-text">
                        <TextType
                            style={{
                                fontSize: "3rem",
                                fontWeight: "bold",
                                lineHeight: 1.8,
                                opacity: 0.85,
                            }}
                            text={["Who I Am", "(and what I’m not)"]}
                            typingSpeed={75}
                            pauseDuration={1500}
                            showCursor={true}
                            cursorCharacter="|"
                        />
                        <p className="about-paragraph">
                            I’m Marta, a 25-year-old software developer based in Rome, Italy.
                            Currently studying Computer Science, I like both backend
                            engineering and frontend experiences.
                            <br />
                            <strong>I don’t write code to fill screens.</strong>
                        </p>
                    </div>
                </div>
            </section>

            {/* TOOLKIT */}
            <section id="curvedLoops" className="toolkit-section">
                <ScrollFloat
                    animationDuration={1}
                    ease="back.inOut(2)"
                    scrollStart="center bottom+=50%"
                    scrollEnd="bottom bottom-=40%"
                    stagger={0.03}
                >
                    My Digital Toolkit
                </ScrollFloat>
                <p className="toolkit-description">
                    The languages, frameworks, and libraries I talk to daily.
                    Some of them even talk back.
                </p>
            </section>

            {/* TECH STACK */}
            <section id="techStack" className="techstack-section">
                <MagicBento
                    textAutoHide={true}
                    enableStars={true}
                    enableSpotlight={true}
                    enableBorderGlow={true}
                    enableTilt={true}
                    enableMagnetism={true}
                    clickEffect={true}
                    spotlightRadius={300}
                    particleCount={12}
                    glowColor="132, 0, 255"
                />
            </section>

            {/* GITHUB */}
            <section id="github" className="github-section">
                <div className="github-image">
                    <img src={laptop} alt="Github Profile" className="github-laptop" />
                    <StickerPeel
                        imageSrc={logo}
                        width={180}
                        rotate={10}
                        peelBackHoverPct={8}
                        peelBackActivePct={40}
                        peelDirection={200}
                        shadowIntensity={0.6}
                        lightingIntensity={0.1}
                        initialPosition={{ x: -80, y: 80 }}
                    />
                </div>

                <div className="github-text">
                    <h2>My GitHub Chronicles</h2>
                    <p>
                        A chaotic mix of <strong>university assignments</strong>,
                        half-finished ideas, and <em>“I’ll clean this up later”</em> projects.
                        <br />
                        You’ll find <strong>empty repos</strong> full of dreams,
                        <strong>3 a.m. experiments</strong> that somehow compile,
                        and the occasional piece of code that actually works.
                    </p>

                    <StarBorder as="button" className="custom-class" color="cyan" speed="5s">
                        <a
                            href="https://github.com/sprigatita"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Check it out
                        </a>
                    </StarBorder>
                </div>
            </section>

            {/* GITHUB STATS */}
            <section id="github-stats" className="github-stats-section">
                <GithubStats />
            </section>

            {/* FOOTER */}
            <section className="footer-section">
                <GradientBlinds
                    gradientColors={["#FF9FFC", "#5227FF"]}
                    angle={0}
                    noise={0.3}
                    blindCount={12}
                    blindMinWidth={50}
                    spotlightRadius={0.5}
                    spotlightSoftness={1}
                    spotlightOpacity={1}
                    mouseDampening={0.15}
                    distortAmount={0}
                    shineDirection="left"
                    mixBlendMode="normal"
                />
                <div className="footer-content">
                    <p className="footer-subtext">
                        If you made it down here... I'm honestly surprised.
                    </p>
                    <p className="footer-copy">
                        © {new Date().getFullYear()} Marta – I need a copywriter to understand what to write in here.
                    </p>
                </div>
            </section>

            <SplashCursor />
        </div>
    );
}

export default App;
