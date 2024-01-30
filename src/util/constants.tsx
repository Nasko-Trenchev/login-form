import { Column } from "./types";

export const swapiTablecolumns: Column[] = [
    { id: 'name', label: 'Name' },
    { id: 'mass', label: 'Mass', align: 'center'},
    {
        id: 'height',
        label: 'Height',
        align: 'center'
    },
    {
        id: 'hair_color',
        label: 'Hair color',
        align: 'center'
    },
    {
        id: 'skin_color',
        label: 'Skin Color',
        align: 'center'
    },
];