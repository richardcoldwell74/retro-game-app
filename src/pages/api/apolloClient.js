import { ApolloClient, InMemoryCache } from "@apollo/client";
//process.env.GRAPH_CMS_ENDPOINT
export const client = new ApolloClient({
  uri: "https://api-eu-west-2.graphcms.com/v2/cl2z967p44ki201wbgz6i75lz/master",
  cache: new InMemoryCache(),
  headers: {
    Authorization: `Bearer ${process.env.HYGRAPH_TOKEN}`,
  },
});

export default client;
