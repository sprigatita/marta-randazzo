import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './StarBorder.css';
const StarBorder = ({ as, className = '', color = 'white', speed = '6s', thickness = 1, children, ...rest }) => {
    const Component = as || 'button';
    return (_jsxs(Component, { className: `star-border-container ${className}`, ...rest, style: {
            padding: `${thickness}px 0`,
            ...rest.style
        }, children: [_jsx("div", { className: "border-gradient-bottom", style: {
                    background: `radial-gradient(circle, ${color}, transparent 10%)`,
                    animationDuration: speed
                } }), _jsx("div", { className: "border-gradient-top", style: {
                    background: `radial-gradient(circle, ${color}, transparent 10%)`,
                    animationDuration: speed
                } }), _jsx("div", { className: "inner-content", children: children })] }));
};
export default StarBorder;
