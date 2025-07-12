import { APIGatewayProxyHandler } from "aws-lambda";
import { GetStatuses } from '../../application/use-cases/GetStatuses';
import { SupabaseStatusRepository } from '../../infrastructure/database/SupabaseStatusRepository';
import { GetAllTypeDocuments } from '../../application/use-cases/GetTypeDocuments';
import { SupabaseTypeDocRepository } from '../../infrastructure/database/SupabaseTypeDocRepository';
import { GetAllTypeDebts } from '../../application/use-cases/GetTypeDebts';
import { SupabaseTypeDebtRepository } from '../../infrastructure/database/SupabaseTypeDebtRepository';


const statusRepository = new SupabaseStatusRepository();
const getStatuses = new GetStatuses(statusRepository);

const typeDocumentRepository = new SupabaseTypeDocRepository();
const getTypeDocuments = new GetAllTypeDocuments(typeDocumentRepository);

const typeDebtRepository = new SupabaseTypeDebtRepository();
const getTypeDebts = new GetAllTypeDebts(typeDebtRepository);

import { corsResponse } from './CorsResponse';

export const getValuesHandler: APIGatewayProxyHandler = async (event) => {
  try {
    const statuses = await getStatuses.execute();
    const typeDocuments = await getTypeDocuments.execute();
    const typeDebts = await getTypeDebts.execute();

    return corsResponse(200, { data: {
      transactionStatuses: statuses,
      typeDocuments: typeDocuments, 
      typeDebts: typeDebts
    }});
  } catch (error) {
    console.error('Error getting statuses:', error);
    return corsResponse(500, {
      error: {
        code: "InternalServerError",
        message: "An unexpected error occurred while retrieving statuses."
      }
    });
  }
};

