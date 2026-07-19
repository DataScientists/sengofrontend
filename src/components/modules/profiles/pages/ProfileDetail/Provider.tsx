import { useProfilePostsQuery, useProfileQuery } from "@graphql/hooks";
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

    const username = data?.profile?.username;
    const {
        data: postsData,
        loading: postsLoading,
        error: postsError,
    } = useProfilePostsQuery({
        variables: { username: username ?? "" },
        skip: !username,
    });

    return {
        data,
        loading,
        error,
        username,
        posts: postsData?.profilePosts ?? null,
        postsLoading,
        postsError,
    };
};

useValue.__PROVIDER__ =
    "src/components/modules/profiles/pages/ProfileDetail/Provider.tsx";

export const {
    Provider: ProfileDetailProvider,
    useContext: useProfileDetailContext,
} = createProvider(useValue);
