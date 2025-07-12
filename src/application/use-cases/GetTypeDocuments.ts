import { TypeDocument } from '../../domain/entities/TypeDocument';
import { TypeDocumentRepository } from '../../domain/repositories/TypeDocumentRepository';

export class GetAllTypeDocuments {
  constructor(private typeDocumentRepository: TypeDocumentRepository) {}

  async execute(): Promise<TypeDocument[]> {
    return this.typeDocumentRepository.getAllTypeDocuments();
  }
}

export class GetTypeDocumentById {
  constructor(private typeDocumentRepository: TypeDocumentRepository) {}

  async execute(id: number): Promise<TypeDocument | null> {
    return this.typeDocumentRepository.getTypeDocumentById(id);
  }
}