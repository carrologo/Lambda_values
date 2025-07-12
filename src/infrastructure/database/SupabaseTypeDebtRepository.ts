import { createClient } from "@supabase/supabase-js";
import { TypeDebt } from "../../domain/entities/TypeDebt";
import { TypeDebtRepository } from "../../domain/repositories/TypeDebtRepository";

export class SupabaseTypeDebtRepository implements TypeDebtRepository {
  private supabase = createClient(
    process.env.SUPABASE_URL || "",
    process.env.SUPABASE_KEY || ""
  );

  async getAllTypeDebts(): Promise<TypeDebt[]> {
    const { data, error } = await this.supabase
      .from("type_debt")
      .select("*")
      .order("id", { ascending: true });

    if (error) {
      console.error("Error fetching type debts:", error);
      throw new Error(error.message);
    }

    return data.map(
      (type) =>
        new TypeDebt({
          id: type.id,
          name: type.name,
        })
    );
  }

  async getTypeDebtById(id: number): Promise<TypeDebt | null> {
    const { data, error } = await this.supabase
      .from("type_debt")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      console.error("Error fetching type debt by ID:", error);
      throw new Error(error.message);
    }

    if (!data) {
      return null;
    }

    return new TypeDebt({
      id: data.id,
      name: data.name,
    });
  }
}
