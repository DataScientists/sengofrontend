import { useJobHistoryListQuery } from "@graphql/hooks";
import { createProvider } from "@shared/react/createProvider";
import { useCallback, useState } from "react";

const useValue = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const PAGE_SIZE = 10;

    const { data, loading, error, fetchMore } = useJobHistoryListQuery({
        variables: {
            first: PAGE_SIZE,
        },
        notifyOnNetworkStatusChange: true,
    });

    const handleNextPage = useCallback(async () => {
        if (data?.jobExecutionHistoryList.pageInfo.hasNextPage) {
            await fetchMore({
                variables: {
                    first: PAGE_SIZE,
                    after: data.jobExecutionHistoryList.pageInfo.endCursor,
                    before: null,
                    last: null,
                },
                updateQuery: (_, { fetchMoreResult }) => {
                    return fetchMoreResult;
                },
            });
            setCurrentPage((prev) => prev + 1);
        }
    }, [data, fetchMore]);

    const handlePrevPage = useCallback(async () => {
        if (data?.jobExecutionHistoryList.pageInfo.hasPreviousPage) {
            await fetchMore({
                variables: {
                    last: PAGE_SIZE,
                    before: data.jobExecutionHistoryList.pageInfo.startCursor,
                    first: null,
                    after: null,
                },
                updateQuery: (_, { fetchMoreResult }) => {
                    return fetchMoreResult;
                },
            });
            setCurrentPage((prev) => prev - 1);
        }
    }, [data, fetchMore]);

    return {
        data,
        loading,
        error,
        currentPage,
        handleNextPage,
        handlePrevPage,
    };
};

useValue.__PROVIDER__ =
    "src/components/modules/jobHistory/pages/JobHistoryList/Provider.tsx";

export const {
    Provider: JobHistoryListProvider,
    useContext: useJobHistoryListContext,
} = createProvider(useValue);
