export interface ProfileData {
    name: string;
    username: string;
    avatar_url: string;
    banner_url: string | null;
    badges: string[];
    premium: boolean;
    created_at: Date;
    last_login: Date;
}