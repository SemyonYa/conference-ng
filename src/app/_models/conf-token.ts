
export class ConfToken {
    id: number;
    login: string;
    role: number;
    personSurname: string;

    constructor(id: string, login: string, role: string) {
        this.login = login;
    }
}
