export interface ITypeDebt {
    id: number;
    name: string;
}

export class TypeDebt implements ITypeDebt {
    id: number;
    name: string;

    constructor(data: ITypeDebt) {
        this.id = data.id;
        this.name = data.name;
    }
}