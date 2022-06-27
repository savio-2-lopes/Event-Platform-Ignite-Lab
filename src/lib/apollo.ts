import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4vz9yz21zp601un7lv651hm/master",
  cache: new InMemoryCache(),
});
