import { APIGatewayProxyHandler } from "aws-lambda";
import { GetStatuses } from '../../application/use-cases/GetStatuses';
import { SupabaseStatusRepository } from '../../infrastructure/database/SupabaseStatusRepository';
import { GetAllTypeDocuments } from '../../application/use-cases/GetAllTypeDocuments';
import { SupabaseTypeDocRepository } from '../../infrastructure/database/SupabaseTypeDocRepository';


const statusRepository = new SupabaseStatusRepository();
const getStatuses = new GetStatuses(statusRepository);

const typeDocumentRepository = new SupabaseTypeDocRepository();
const getTypeDocuments = new GetAllTypeDocuments(typeDocumentRepository);

import { corsResponse } from './CorsResponse';

export const getUtilsDataHandler: APIGatewayProxyHandler = async (event) => {
  try {
    const statuses = await getStatuses.execute();
    const typeDocuments = await getTypeDocuments.execute();

    return corsResponse(200, { data: {
      transactionStatuses: statuses,
      typeDocuments: typeDocuments 
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

