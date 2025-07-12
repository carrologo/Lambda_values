import { TypeDebt } from "../entities/TypeDebt";

export interface TypeDebtRepository {
  /**
   * Get all available types of debt from the database
   * @returns Promise<TypeDebt[]> - List of all types of debt
   */
  getAllTypeDebts(): Promise<TypeDebt[]>;

  /**
   * Get a specific type of debt by ID
   * @param id - The ID of the type of debt to retrieve
   * @returns Promise<TypeDebt | null> - The type of debt if found, null otherwise
   */
  getTypeDebtById(id: number): Promise<TypeDebt | null>;
}

