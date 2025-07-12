import { createClient } from "@supabase/supabase-js";
import { TypeDocument } from "../../domain/entities/TypeDocument";
import { TypeDocumentRepository } from "../../domain/repositories/TypeDocumentRepository";

export class SupabaseTypeDocRepository implements TypeDocumentRepository {
  private supabase = createClient(
    process.env.SUPABASE_URL || "",
    process.env.SUPABASE_KEY || ""
  );

  async getAllTypeDocuments(): Promise<TypeDocument[]> {
    const { data, error } = await this.supabase
      .from("type_document")
      .select("*")
      .order("id", { ascending: true });

    if (error) {
      console.error("Error fetching type documents:", error);
      throw new Error(error.message);
    }

    return data.map(
      (type) =>
        new TypeDocument({
          id: type.id,
          name: type.name,
        })
    );
  }

  async getTypeDocumentById(id: number): Promise<TypeDocument | null> {
    const { data, error } = await this.supabase
      .from("type_document")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      console.error("Error fetching type document by ID:", error);
      throw new Error(error.message);
    }

    if (!data) {
      return null;
    }

    return new TypeDocument({
      id: data.id,
      name: data.name,
    });
  }
}
