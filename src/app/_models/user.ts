export class User {
    id: number;
    login: string;
    roleId: number;
    personId: number;
    personSurname: string;
    personName: string;
    personName2: string;

    static create(id: string, login: string, roleId: string, personId: string, personSurname: string, personName: string, personName2: string): User {
        let user = new User();
        user.id = Number.parseInt(id);
        user.login = login;
        user.roleId = Number.parseInt(roleId);
        user.personId = personId ? Number.parseInt(personId) : 0;
        user.personSurname = personSurname ? personSurname : '';
        user.personName = personName ? personName : '';
        user.personName2 = personName2 ? personName2 : '';
        return user;
    }
}
