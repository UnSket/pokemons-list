'use client';

import { ApolloProvider } from "@apollo/client/react";
import createAppoloClient from "@/apollo/appolo-client";

const client = createAppoloClient();

export function ApolloClientProvider({ children }: { children: React.ReactNode }) {
	return <ApolloProvider client={client}>{children}</ApolloProvider>;
}