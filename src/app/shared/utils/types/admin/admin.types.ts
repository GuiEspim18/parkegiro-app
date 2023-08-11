import { Company } from "../company/company.types";

export type Admin = {
    username: string;
    name: string;
    surname: string;
    cpf: string;
    birthdate: string | null;
    zipCode: string;
    street: string;
    state: string;
    city: string;
    number: string;
    compliment: string;
    cellphone: string;
    telephone: string;
    email: string;
    password: string;
    company: Company
};