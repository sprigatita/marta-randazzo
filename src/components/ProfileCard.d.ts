import React from 'react';
import '../styles/ProfileCard.css';
interface ProfileCardProps {
    avatarUrl: string;
    iconUrl?: string;
    grainUrl?: string;
    behindGradient?: string;
    innerGradient?: string;
    showBehindGradient?: boolean;
    className?: string;
    enableTilt?: boolean;
    enableMobileTilt?: boolean;
    mobileTiltSensitivity?: number;
    miniAvatarUrl?: string;
    name?: string;
    title?: string;
    handle?: string;
    status?: string;
    contactText?: string;
    showUserInfo?: boolean;
    onContactClick?: () => void;
}
declare const ProfileCard: React.NamedExoticComponent<ProfileCardProps>;
export default ProfileCard;
