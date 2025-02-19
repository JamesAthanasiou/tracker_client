export interface LoginFormData {
    username: string;
    password: string;
    // TODO, try making not optional
    first_name?: string;
    last_name?: string;
    gender?: 'man' | 'woman' | 'other' | '';
}