import { TypeDocument } from '../entities/TypeDocument';

export interface TypeDocumentRepository {
     /**
   * Get all available types from the database
   * @returns Promise<TypeDocument[]> - List of all types
   */
    getAllTypeDocuments(): Promise<TypeDocument[]>;

    /**
   * Get a specific status by ID
   * @param id - The ID of the type document to retrieve
   * @returns Promise<TypeDocument | null> - The type if found, null otherwise
   */
    getTypeDocumentById(id: number): Promise<TypeDocument | null>;
}