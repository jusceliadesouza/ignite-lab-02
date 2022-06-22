import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o9trvx1c7s01xr4zpgdef9/master',
  cache: new InMemoryCache()
})