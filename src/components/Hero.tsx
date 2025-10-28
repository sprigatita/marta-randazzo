import { ASCIIText} from "./AsciiText.tsx";

export function HeroBanner() {
    return (
        <section className="flex flex-col items-center justify-center h-screen bg-black text-center">
            <ASCIIText text={`Welcome to My Website\nReact-powered creativity ✨`} />
            <p className="mt-6 text-gray-400 text-lg">
                Building modern interfaces with React & Tailwind
            </p>
        </section>
    );
}
