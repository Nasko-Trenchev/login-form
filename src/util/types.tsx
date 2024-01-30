
export type SwapiPeopleResults = {
    name: string,
    height: string,
    mass: number,
    hair_color: string,
    skin_color: string,
    eye_color: string,
    birth_year: string,
    gender: 'male' | 'female',
    homeworld: string,
    films: string[],
    species: string[],
    vehicles: string[],
    starships: string[],
    created: Date,
    edited: Date,
    url: string
}[]

export type SwapiDataType = {
    count: number,
    next: string,
    previous: null | string,
    results: SwapiPeopleResults
}

export interface Column {
    id: 'name' | 'mass' | 'height' | 'hair_color' | 'skin_color';
    label: string;
    minWidth?: number;
    align?: 'right' | 'center';
}