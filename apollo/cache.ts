import { InMemoryCache } from "@apollo/client";
import { queryPolicy } from "./typePolices/queryPolicy";

export const cache = new InMemoryCache({
	typePolicies: {
		Query: queryPolicy,
	},
});