export interface BannerOptions {
    width?: number;
    height?: number;
    borderColor?: string;
    borderRadius?: number;
    backgroundColor?: string;
}

export interface ProfileOptions extends BannerOptions {
    showBadges?: boolean;
}