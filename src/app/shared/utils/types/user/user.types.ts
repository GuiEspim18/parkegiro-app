export type User = {
    id: number;
    email: string;
    photo: Photo;
    username: string;
};

export type Photo = {
    admin: number | null
    id: number
    name: string
    originName: string
    url: string
}