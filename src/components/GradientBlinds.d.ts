import React from 'react';
import './GradientBlinds.css';
export interface GradientBlindsProps {
    className?: string;
    dpr?: number;
    paused?: boolean;
    gradientColors?: string[];
    angle?: number;
    noise?: number;
    blindCount?: number;
    blindMinWidth?: number;
    mouseDampening?: number;
    mirrorGradient?: boolean;
    spotlightRadius?: number;
    spotlightSoftness?: number;
    spotlightOpacity?: number;
    distortAmount?: number;
    shineDirection?: 'left' | 'right';
    mixBlendMode?: string;
}
declare const GradientBlinds: React.FC<GradientBlindsProps>;
export default GradientBlinds;
