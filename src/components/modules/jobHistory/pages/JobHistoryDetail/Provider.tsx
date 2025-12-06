import { useJobHistoryQuery } from "@graphql/hooks";
import { createProvider } from "@shared/react/createProvider";
import { useParams } from "react-router-dom";

const useValue = () => {
    const { id } = useParams<{ id: string }>();
    const { data, loading, error } = useJobHistoryQuery({
        variables: {
            id: id!,
        },
        skip: !id,
    });

    return {
        data,
        loading,
        error,
    };
};

useValue.__PROVIDER__ =
    "src/components/modules/jobHistory/pages/JobHistoryDetail/Provider.tsx";

export const {
    Provider: JobHistoryDetailProvider,
    useContext: useJobHistoryDetailContext,
} = createProvider(useValue);
