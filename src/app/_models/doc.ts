import { environment } from 'src/environments/environment';

export class Doc {
    id: number;
    name: string;
    description: string;
    path: string;
    extension: string;

    constructor(id: string, name: string, description: string, path: string, extension: string) {
        this.id = Number.parseInt(id);
        this.name = name;
        this.description = description;
        this.path = environment.docPath + path;
        this.extension = extension;
    }
}
