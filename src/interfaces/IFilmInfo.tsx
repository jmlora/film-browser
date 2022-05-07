export interface IFilmInfo {
    id: number,
    name: string,
    genres: string[],
    rating: {
        average: number,
    },
    image: {
        medium: string,
        original: string,
    },
    summary: string,
}