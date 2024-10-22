export default interface Person {
    id?: number;
    first_name: string;
    last_name: string;
    gender: 'man' | 'woman' | 'other' | '';
}
