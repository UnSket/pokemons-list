import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const createApolloClient = () => {
	return new ApolloClient({
		link: new HttpLink({
			uri: "https://graphql.pokeapi.co/v1beta2"
		}),
		cache: new InMemoryCache(),
	});
};

export default createApolloClient;