import { ApolloClient, HttpLink } from "@apollo/client";
import { cache } from "./cache";

const createApolloClient = () => {
	return new ApolloClient({
		link: new HttpLink({
			uri: "https://graphql.pokeapi.co/v1beta2"
		}),
		cache,
	});
};

export default createApolloClient;