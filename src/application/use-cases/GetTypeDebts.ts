import { TypeDebt } from '../../domain/entities/TypeDebt';
import { TypeDebtRepository } from '../../domain/repositories/TypeDebtRepository';

export class GetAllTypeDebts {
  constructor(private typeDebtRepository: TypeDebtRepository) {}

  async execute(): Promise<TypeDebt[]> {
    return this.typeDebtRepository.getAllTypeDebts();
  }
}

export class GetTypeDebtById {
  constructor(private typeDebtRepository: TypeDebtRepository) {}

    async execute(id: number): Promise<TypeDebt | null> {
        return this.typeDebtRepository.getTypeDebtById(id);
    }
}