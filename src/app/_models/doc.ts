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
        this.path = path;
        this.extension = extension;
    }
}
