export interface ProfileData {
    id: string;
    name: string;
    username: string;
    avatar: string;
    banner: string | null;
    bio: string;
    badges: string[];
    premium: boolean;
    location: string;
    last_login: Date;
    created_at: Date;
}