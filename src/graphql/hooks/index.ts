import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export const UserFragmentDoc = gql`
    fragment User on User {
  id
  name
  email
}
    `;
export const AuthPayloadFragmentDoc = gql`
    fragment AuthPayload on AuthPayload {
  accessToken
  refreshToken
  user {
    ...User
  }
}
    ${UserFragmentDoc}`;
export const PageInfoFragmentDoc = gql`
    fragment PageInfo on PageInfo {
  hasNextPage
  hasPreviousPage
  startCursor
  endCursor
}
    `;
export const ProfileFragmentDoc = gql`
    fragment Profile on Profile {
  id
  name
  title
  urn
}
    `;
export const ProfileTitleGroupFragmentDoc = gql`
    fragment ProfileTitleGroup on ProfileTitleGroup {
  title
  count
}
    `;
export const RefreshTokenFragmentFragmentDoc = gql`
    fragment RefreshTokenFragment on RefreshTokenPayload {
  accessToken
  refreshToken
}
    `;
export const LoginDocument = gql`
    mutation Login($input: LoginInput!) {
  login(input: $input) {
    ...AuthPayload
  }
}
    ${AuthPayloadFragmentDoc}`;
export type LoginMutationFn = Apollo.MutationFunction<import('../types').LoginMutation, import('../types').LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<import('../types').LoginMutation, import('../types').LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<import('../types').LoginMutation, import('../types').LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<import('../types').LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<import('../types').LoginMutation, import('../types').LoginMutationVariables>;
export const RefreshTokenDocument = gql`
    mutation RefreshToken {
  refreshToken {
    ...RefreshTokenFragment
  }
}
    ${RefreshTokenFragmentFragmentDoc}`;
export type RefreshTokenMutationFn = Apollo.MutationFunction<import('../types').RefreshTokenMutation, import('../types').RefreshTokenMutationVariables>;

/**
 * __useRefreshTokenMutation__
 *
 * To run a mutation, you first call `useRefreshTokenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRefreshTokenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [refreshTokenMutation, { data, loading, error }] = useRefreshTokenMutation({
 *   variables: {
 *   },
 * });
 */
export function useRefreshTokenMutation(baseOptions?: Apollo.MutationHookOptions<import('../types').RefreshTokenMutation, import('../types').RefreshTokenMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<import('../types').RefreshTokenMutation, import('../types').RefreshTokenMutationVariables>(RefreshTokenDocument, options);
      }
export type RefreshTokenMutationHookResult = ReturnType<typeof useRefreshTokenMutation>;
export type RefreshTokenMutationResult = Apollo.MutationResult<import('../types').RefreshTokenMutation>;
export type RefreshTokenMutationOptions = Apollo.BaseMutationOptions<import('../types').RefreshTokenMutation, import('../types').RefreshTokenMutationVariables>;
export const GroupProfilesByTitleDocument = gql`
    query GroupProfilesByTitle($searchTerm: String, $minCount: Int!) {
  profilesByTitle(searchTerm: $searchTerm, minCount: $minCount) {
    ...ProfileTitleGroup
  }
}
    ${ProfileTitleGroupFragmentDoc}`;

/**
 * __useGroupProfilesByTitleQuery__
 *
 * To run a query within a React component, call `useGroupProfilesByTitleQuery` and pass it any options that fit your needs.
 * When your component renders, `useGroupProfilesByTitleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGroupProfilesByTitleQuery({
 *   variables: {
 *      searchTerm: // value for 'searchTerm'
 *      minCount: // value for 'minCount'
 *   },
 * });
 */
export function useGroupProfilesByTitleQuery(baseOptions: Apollo.QueryHookOptions<import('../types').GroupProfilesByTitleQuery, import('../types').GroupProfilesByTitleQueryVariables> & ({ variables: import('../types').GroupProfilesByTitleQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<import('../types').GroupProfilesByTitleQuery, import('../types').GroupProfilesByTitleQueryVariables>(GroupProfilesByTitleDocument, options);
      }
export function useGroupProfilesByTitleLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<import('../types').GroupProfilesByTitleQuery, import('../types').GroupProfilesByTitleQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<import('../types').GroupProfilesByTitleQuery, import('../types').GroupProfilesByTitleQueryVariables>(GroupProfilesByTitleDocument, options);
        }
export function useGroupProfilesByTitleSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<import('../types').GroupProfilesByTitleQuery, import('../types').GroupProfilesByTitleQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<import('../types').GroupProfilesByTitleQuery, import('../types').GroupProfilesByTitleQueryVariables>(GroupProfilesByTitleDocument, options);
        }
export type GroupProfilesByTitleQueryHookResult = ReturnType<typeof useGroupProfilesByTitleQuery>;
export type GroupProfilesByTitleLazyQueryHookResult = ReturnType<typeof useGroupProfilesByTitleLazyQuery>;
export type GroupProfilesByTitleSuspenseQueryHookResult = ReturnType<typeof useGroupProfilesByTitleSuspenseQuery>;
export type GroupProfilesByTitleQueryResult = Apollo.QueryResult<import('../types').GroupProfilesByTitleQuery, import('../types').GroupProfilesByTitleQueryVariables>;
export const ProfilesDocument = gql`
    query Profiles($after: Cursor, $first: Int, $before: Cursor, $last: Int, $where: ProfileWhereInput) {
  profiles(
    after: $after
    before: $before
    first: $first
    last: $last
    where: $where
  ) {
    edges {
      node {
        ...Profile
      }
    }
    pageInfo {
      ...PageInfo
    }
    totalCount
  }
}
    ${ProfileFragmentDoc}
${PageInfoFragmentDoc}`;

/**
 * __useProfilesQuery__
 *
 * To run a query within a React component, call `useProfilesQuery` and pass it any options that fit your needs.
 * When your component renders, `useProfilesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProfilesQuery({
 *   variables: {
 *      after: // value for 'after'
 *      first: // value for 'first'
 *      before: // value for 'before'
 *      last: // value for 'last'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useProfilesQuery(baseOptions?: Apollo.QueryHookOptions<import('../types').ProfilesQuery, import('../types').ProfilesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<import('../types').ProfilesQuery, import('../types').ProfilesQueryVariables>(ProfilesDocument, options);
      }
export function useProfilesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<import('../types').ProfilesQuery, import('../types').ProfilesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<import('../types').ProfilesQuery, import('../types').ProfilesQueryVariables>(ProfilesDocument, options);
        }
export function useProfilesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<import('../types').ProfilesQuery, import('../types').ProfilesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<import('../types').ProfilesQuery, import('../types').ProfilesQueryVariables>(ProfilesDocument, options);
        }
export type ProfilesQueryHookResult = ReturnType<typeof useProfilesQuery>;
export type ProfilesLazyQueryHookResult = ReturnType<typeof useProfilesLazyQuery>;
export type ProfilesSuspenseQueryHookResult = ReturnType<typeof useProfilesSuspenseQuery>;
export type ProfilesQueryResult = Apollo.QueryResult<import('../types').ProfilesQuery, import('../types').ProfilesQueryVariables>;
export const UsersDocument = gql`
    query Users($after: Cursor, $first: Int, $before: Cursor, $last: Int, $where: UserWhereInput) {
  users(after: $after, before: $before, first: $first, where: $where) {
    edges {
      node {
        ...User
      }
    }
    pageInfo {
      ...PageInfo
    }
    totalCount
  }
}
    ${UserFragmentDoc}
${PageInfoFragmentDoc}`;

/**
 * __useUsersQuery__
 *
 * To run a query within a React component, call `useUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersQuery({
 *   variables: {
 *      after: // value for 'after'
 *      first: // value for 'first'
 *      before: // value for 'before'
 *      last: // value for 'last'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useUsersQuery(baseOptions?: Apollo.QueryHookOptions<import('../types').UsersQuery, import('../types').UsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<import('../types').UsersQuery, import('../types').UsersQueryVariables>(UsersDocument, options);
      }
export function useUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<import('../types').UsersQuery, import('../types').UsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<import('../types').UsersQuery, import('../types').UsersQueryVariables>(UsersDocument, options);
        }
export function useUsersSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<import('../types').UsersQuery, import('../types').UsersQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<import('../types').UsersQuery, import('../types').UsersQueryVariables>(UsersDocument, options);
        }
export type UsersQueryHookResult = ReturnType<typeof useUsersQuery>;
export type UsersLazyQueryHookResult = ReturnType<typeof useUsersLazyQuery>;
export type UsersSuspenseQueryHookResult = ReturnType<typeof useUsersSuspenseQuery>;
export type UsersQueryResult = Apollo.QueryResult<import('../types').UsersQuery, import('../types').UsersQueryVariables>;