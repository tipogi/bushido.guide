import { ApolloError } from "@apollo/client";
import { GraphQLError } from "graphql";
import { ExternalError } from "~/constants";

interface GraphQLExtensionError extends GraphQLError {
  code: string;
  response: {
    error: ExternalError;
    message: string;
    statusCode: number;
  }
}

export const filterErrorType = (error: ApolloError): ExternalError => {
  const { graphQLErrors } = error;
  console.log(graphQLErrors)
  if (graphQLErrors.length === 1 && graphQLErrors[0].extensions) {
    const grExten: GraphQLExtensionError = graphQLErrors[0].extensions;
    const error = grExten.response.error;
    if (error) {
      return error;
    }
  } else if (graphQLErrors.length === 0) {
    return ExternalError.CONNECTION_REFUSED;
  }
  return ExternalError.INTERNAL_ERROR;
}