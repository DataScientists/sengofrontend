import { useProfileQuery } from "@graphql/hooks";
import { createProvider } from "@shared/react/createProvider";
import { useParams } from "react-router-dom";

const useValue = () => {
    const { id } = useParams<{ id: string }>();
    const { data, loading, error } = useProfileQuery({
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
    "src/components/modules/profiles/pages/ProfileDetail/Provider.tsx";

export const {
    Provider: ProfileDetailProvider,
    useContext: useProfileDetailContext,
} = createProvider(useValue);
