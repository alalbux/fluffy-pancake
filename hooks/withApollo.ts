import withApollo from "next-with-apollo";
import ApolloClient, { InMemoryCache } from "apollo-boost";
import lscache from "lscache";
import { createHttpLink } from "apollo-link-http";

const getToken = lscache.get("token");

export default withApollo(
  ({ initialState }) =>
    new ApolloClient({
      uri: process.env.endpoint,
      cache: new InMemoryCache().restore(initialState || {}),
      headers: {
        authorization: getToken ? `Bearer ${getToken}` : ""
      }
    })
);
