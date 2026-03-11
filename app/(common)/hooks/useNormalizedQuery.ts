import { useQuery } from "@apollo/client/react";
import { DocumentNode, OperationVariables, TypedDocumentNode } from "@apollo/client";
import { useMemo } from "react";

interface UseNormalizedQueryProps<TData, TVariables extends OperationVariables, TDataNormalized> {
	query: DocumentNode | TypedDocumentNode<TData, TVariables>;
	options?: useQuery.Options<NoInfer<TData>, NoInfer<TVariables>>;
    selector?: (data: TData) => TDataNormalized;
}

export function useNormalizedQuery<TData, TVariables extends OperationVariables, TDataNormalized>
    (props: UseNormalizedQueryProps<TData, TVariables, TDataNormalized>) {
	const { query, options } = props;

	const { data, loading, error } = useQuery<TData, TVariables>(query, (options ?? {}) as useQuery.Options<TData, TVariables>);

	const normalizedData = useMemo(() => {
		if (!data) {
			return undefined;
		}

		if (!props.selector) {
			return data;
		}

		return props.selector(data);
	}, [data, props.selector]);

	return { data: normalizedData, loading, error };
}