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
  if (graphQLErrors.length === 1 && graphQLErrors[0].extensions) {
    const grExten: GraphQLExtensionError = graphQLErrors[0].extensions;
    return grExten.response.error;
  }
  return ExternalError.INTERNAL_ERROR;
}