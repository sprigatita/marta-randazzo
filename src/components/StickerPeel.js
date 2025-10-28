import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef, useEffect, useMemo } from 'react';
import { gsap } from 'gsap';
import { Draggable } from 'gsap/Draggable';
import './StickerPeel.css';
gsap.registerPlugin(Draggable);
const StickerPeel = ({ imageSrc, rotate = 30, peelBackHoverPct = 30, peelBackActivePct = 40, peelEasing = 'power3.out', peelHoverEasing = 'power2.out', width = 200, shadowIntensity = 0.6, lightingIntensity = 0.1, initialPosition = 'center', peelDirection = 0, className = '' }) => {
    const containerRef = useRef(null);
    const dragTargetRef = useRef(null);
    const pointLightRef = useRef(null);
    const pointLightFlippedRef = useRef(null);
    const draggableInstanceRef = useRef(null);
    const defaultPadding = 10;
    useEffect(() => {
        const target = dragTargetRef.current;
        if (!target)
            return;
        let startX = 0, startY = 0;
        if (initialPosition === 'center') {
            return;
        }
        if (typeof initialPosition === 'object' && initialPosition.x !== undefined && initialPosition.y !== undefined) {
            startX = initialPosition.x;
            startY = initialPosition.y;
        }
        gsap.set(target, { x: startX, y: startY });
    }, [initialPosition]);
    useEffect(() => {
        const target = dragTargetRef.current;
        if (!target)
            return;
        const boundsEl = target.parentNode;
        const draggable = Draggable.create(target, {
            type: 'x,y',
            bounds: boundsEl,
            inertia: true,
            onDrag() {
                const rot = gsap.utils.clamp(-24, 24, this.deltaX * 0.4);
                gsap.to(target, { rotation: rot, duration: 0.15, ease: 'power1.out' });
            },
            onDragEnd() {
                const rotationEase = 'power2.out';
                const duration = 0.8;
                gsap.to(target, { rotation: 0, duration, ease: rotationEase });
            }
        });
        draggableInstanceRef.current = draggable[0];
        const handleResize = () => {
            if (draggableInstanceRef.current) {
                draggableInstanceRef.current.update();
                const currentX = gsap.getProperty(target, 'x');
                const currentY = gsap.getProperty(target, 'y');
                const boundsRect = boundsEl.getBoundingClientRect();
                const targetRect = target.getBoundingClientRect();
                const maxX = boundsRect.width - targetRect.width;
                const maxY = boundsRect.height - targetRect.height;
                const newX = Math.max(0, Math.min(currentX, maxX));
                const newY = Math.max(0, Math.min(currentY, maxY));
                if (newX !== currentX || newY !== currentY) {
                    gsap.to(target, {
                        x: newX,
                        y: newY,
                        duration: 0.3,
                        ease: 'power2.out'
                    });
                }
            }
        };
        window.addEventListener('resize', handleResize);
        window.addEventListener('orientationchange', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('orientationchange', handleResize);
            if (draggableInstanceRef.current) {
                draggableInstanceRef.current.kill();
            }
        };
    }, []);
    useEffect(() => {
        const updateLight = (e) => {
            const mouseEvent = e;
            const rect = containerRef.current?.getBoundingClientRect();
            if (!rect)
                return;
            const x = mouseEvent.clientX - rect.left;
            const y = mouseEvent.clientY - rect.top;
            if (pointLightRef.current) {
                gsap.set(pointLightRef.current, { attr: { x, y } });
            }
            const normalizedAngle = Math.abs(peelDirection % 360);
            if (pointLightFlippedRef.current) {
                if (normalizedAngle !== 180) {
                    gsap.set(pointLightFlippedRef.current, {
                        attr: { x, y: rect.height - y }
                    });
                }
                else {
                    gsap.set(pointLightFlippedRef.current, {
                        attr: { x: -1000, y: -1000 }
                    });
                }
            }
        };
        const container = containerRef.current;
        const eventType = 'mousemove';
        if (container) {
            container.addEventListener(eventType, updateLight);
            return () => container.removeEventListener(eventType, updateLight);
        }
    }, [peelDirection]);
    useEffect(() => {
        const container = containerRef.current;
        if (!container)
            return;
        const handleTouchStart = () => {
            container.classList.add('touch-active');
        };
        const handleTouchEnd = () => {
            container.classList.remove('touch-active');
        };
        container.addEventListener('touchstart', handleTouchStart);
        container.addEventListener('touchend', handleTouchEnd);
        container.addEventListener('touchcancel', handleTouchEnd);
        return () => {
            container.removeEventListener('touchstart', handleTouchStart);
            container.removeEventListener('touchend', handleTouchEnd);
            container.removeEventListener('touchcancel', handleTouchEnd);
        };
    }, []);
    const cssVars = useMemo(() => ({
        '--sticker-rotate': `${rotate}deg`,
        '--sticker-p': `${defaultPadding}px`,
        '--sticker-peelback-hover': `${peelBackHoverPct}%`,
        '--sticker-peelback-active': `${peelBackActivePct}%`,
        '--sticker-peel-easing': peelEasing,
        '--sticker-peel-hover-easing': peelHoverEasing,
        '--sticker-width': `${width}px`,
        '--sticker-shadow-opacity': shadowIntensity,
        '--sticker-lighting-constant': lightingIntensity,
        '--peel-direction': `${peelDirection}deg`
    }), [
        rotate,
        peelBackHoverPct,
        peelBackActivePct,
        peelEasing,
        peelHoverEasing,
        width,
        shadowIntensity,
        lightingIntensity,
        peelDirection
    ]);
    return (_jsxs("div", { className: `draggable ${className}`, ref: dragTargetRef, style: cssVars, children: [_jsx("svg", { width: "0", height: "0", children: _jsxs("defs", { children: [_jsxs("filter", { id: "pointLight", children: [_jsx("feGaussianBlur", { stdDeviation: "1", result: "blur" }), _jsx("feSpecularLighting", { result: "spec", in: "blur", specularExponent: "100", specularConstant: lightingIntensity, lightingColor: "white", children: _jsx("fePointLight", { ref: pointLightRef, x: "100", y: "100", z: "300" }) }), _jsx("feComposite", { in: "spec", in2: "SourceGraphic", result: "lit" }), _jsx("feComposite", { in: "lit", in2: "SourceAlpha", operator: "in" })] }), _jsxs("filter", { id: "pointLightFlipped", children: [_jsx("feGaussianBlur", { stdDeviation: "10", result: "blur" }), _jsx("feSpecularLighting", { result: "spec", in: "blur", specularExponent: "100", specularConstant: lightingIntensity * 7, lightingColor: "white", children: _jsx("fePointLight", { ref: pointLightFlippedRef, x: "100", y: "100", z: "300" }) }), _jsx("feComposite", { in: "spec", in2: "SourceGraphic", result: "lit" }), _jsx("feComposite", { in: "lit", in2: "SourceAlpha", operator: "in" })] }), _jsx("filter", { id: "dropShadow", children: _jsx("feDropShadow", { dx: "2", dy: "4", stdDeviation: 3 * shadowIntensity, floodColor: "black", floodOpacity: shadowIntensity }) }), _jsxs("filter", { id: "expandAndFill", children: [_jsx("feOffset", { dx: "0", dy: "0", in: "SourceAlpha", result: "shape" }), _jsx("feFlood", { floodColor: "rgb(179,179,179)", result: "flood" }), _jsx("feComposite", { operator: "in", in: "flood", in2: "shape" })] })] }) }), _jsxs("div", { className: "sticker-container", ref: containerRef, children: [_jsx("div", { className: "sticker-main", children: _jsx("div", { className: "sticker-lighting", children: _jsx("img", { src: imageSrc, alt: "", className: "sticker-image", draggable: "false", onContextMenu: e => e.preventDefault() }) }) }), _jsx("div", { className: "flap", children: _jsx("div", { className: "flap-lighting", children: _jsx("img", { src: imageSrc, alt: "", className: "flap-image", draggable: "false", onContextMenu: e => e.preventDefault() }) }) })] })] }));
};
export default StickerPeel;
