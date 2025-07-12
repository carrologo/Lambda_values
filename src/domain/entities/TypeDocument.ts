export interface ITypeDocument {
    id: number;
    name: string;
}

export class TypeDocument implements ITypeDocument {
    id: number;
    name: string;

    constructor(data: ITypeDocument) {
        this.id = data.id;
        this.name = data.name;
    }
}