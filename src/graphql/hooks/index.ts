import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export const ApiQuotaTrackerFragmentDoc = gql`
    fragment APIQuotaTracker on APIQuotaTracker {
  id
  month
  year
  callCount
  quotaLimit
  quotaExceeded
  overrideEnabled
  notificationSent
  lastCallAt
  createdAt
}
    `;
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
export const JobExecutionHistoryFragmentDoc = gql`
    fragment JobExecutionHistory on JobExecutionHistory {
  id
  jobName
  status
  startedAt
  completedAt
  durationSeconds
  totalProcessed
  successfulCount
  failedCount
  apiCallsMade
  quotaRemaining
  errorSummary
  createdAt
}
    `;
export const JobStatsFragmentDoc = gql`
    fragment JobStats on JobStats {
  totalExecutions
  successRate
  averageDuration
  totalProfiles
  totalAPICallsMade
}
    `;
export const PageInfoFragmentDoc = gql`
    fragment PageInfo on PageInfo {
  hasNextPage
  hasPreviousPage
  startCursor
  endCursor
}
    `;
export const ProfileEntryFragmentDoc = gql`
    fragment ProfileEntry on ProfileEntry {
  id
  linkedinUrn
  gender
  status
  lastFetchedAt
  fetchCount
  profileData
  createdAt
  updatedAt
}
    `;
export const ProfileDetailFragmentDoc = gql`
    fragment ProfileDetail on Profile {
  id
  firstName
  name
  title
  urn
  country
  city
  educations
  positions
  skills
  geoData
  rawDataS3Key
  cleanedDataS3Key
  profileEntry {
    ...ProfileEntry
  }
  sourceFile
  createdAt
  updatedAt
}
    ${ProfileEntryFragmentDoc}`;
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
export const CreateProfileEntryDocument = gql`
    mutation CreateProfileEntry($input: CreateProfileEntryInput!) {
  createProfileEntry(input: $input) {
    ...ProfileEntry
  }
}
    ${ProfileEntryFragmentDoc}`;
export type CreateProfileEntryMutationFn = Apollo.MutationFunction<import('../types').CreateProfileEntryMutation, import('../types').CreateProfileEntryMutationVariables>;

/**
 * __useCreateProfileEntryMutation__
 *
 * To run a mutation, you first call `useCreateProfileEntryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProfileEntryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProfileEntryMutation, { data, loading, error }] = useCreateProfileEntryMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateProfileEntryMutation(baseOptions?: Apollo.MutationHookOptions<import('../types').CreateProfileEntryMutation, import('../types').CreateProfileEntryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<import('../types').CreateProfileEntryMutation, import('../types').CreateProfileEntryMutationVariables>(CreateProfileEntryDocument, options);
      }
export type CreateProfileEntryMutationHookResult = ReturnType<typeof useCreateProfileEntryMutation>;
export type CreateProfileEntryMutationResult = Apollo.MutationResult<import('../types').CreateProfileEntryMutation>;
export type CreateProfileEntryMutationOptions = Apollo.BaseMutationOptions<import('../types').CreateProfileEntryMutation, import('../types').CreateProfileEntryMutationVariables>;
export const FetchProfileEntryDocument = gql`
    mutation FetchProfileEntry($id: ID!) {
  fetchProfileEntry(id: $id)
}
    `;
export type FetchProfileEntryMutationFn = Apollo.MutationFunction<import('../types').FetchProfileEntryMutation, import('../types').FetchProfileEntryMutationVariables>;

/**
 * __useFetchProfileEntryMutation__
 *
 * To run a mutation, you first call `useFetchProfileEntryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useFetchProfileEntryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [fetchProfileEntryMutation, { data, loading, error }] = useFetchProfileEntryMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useFetchProfileEntryMutation(baseOptions?: Apollo.MutationHookOptions<import('../types').FetchProfileEntryMutation, import('../types').FetchProfileEntryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<import('../types').FetchProfileEntryMutation, import('../types').FetchProfileEntryMutationVariables>(FetchProfileEntryDocument, options);
      }
export type FetchProfileEntryMutationHookResult = ReturnType<typeof useFetchProfileEntryMutation>;
export type FetchProfileEntryMutationResult = Apollo.MutationResult<import('../types').FetchProfileEntryMutation>;
export type FetchProfileEntryMutationOptions = Apollo.BaseMutationOptions<import('../types').FetchProfileEntryMutation, import('../types').FetchProfileEntryMutationVariables>;
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
export const CurrentQuotaStatusDocument = gql`
    query currentQuotaStatus {
  currentQuotaStatus {
    ...APIQuotaTracker
  }
}
    ${ApiQuotaTrackerFragmentDoc}`;

/**
 * __useCurrentQuotaStatusQuery__
 *
 * To run a query within a React component, call `useCurrentQuotaStatusQuery` and pass it any options that fit your needs.
 * When your component renders, `useCurrentQuotaStatusQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCurrentQuotaStatusQuery({
 *   variables: {
 *   },
 * });
 */
export function useCurrentQuotaStatusQuery(baseOptions?: Apollo.QueryHookOptions<import('../types').CurrentQuotaStatusQuery, import('../types').CurrentQuotaStatusQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<import('../types').CurrentQuotaStatusQuery, import('../types').CurrentQuotaStatusQueryVariables>(CurrentQuotaStatusDocument, options);
      }
export function useCurrentQuotaStatusLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<import('../types').CurrentQuotaStatusQuery, import('../types').CurrentQuotaStatusQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<import('../types').CurrentQuotaStatusQuery, import('../types').CurrentQuotaStatusQueryVariables>(CurrentQuotaStatusDocument, options);
        }
export function useCurrentQuotaStatusSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<import('../types').CurrentQuotaStatusQuery, import('../types').CurrentQuotaStatusQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<import('../types').CurrentQuotaStatusQuery, import('../types').CurrentQuotaStatusQueryVariables>(CurrentQuotaStatusDocument, options);
        }
export type CurrentQuotaStatusQueryHookResult = ReturnType<typeof useCurrentQuotaStatusQuery>;
export type CurrentQuotaStatusLazyQueryHookResult = ReturnType<typeof useCurrentQuotaStatusLazyQuery>;
export type CurrentQuotaStatusSuspenseQueryHookResult = ReturnType<typeof useCurrentQuotaStatusSuspenseQuery>;
export type CurrentQuotaStatusQueryResult = Apollo.QueryResult<import('../types').CurrentQuotaStatusQuery, import('../types').CurrentQuotaStatusQueryVariables>;
export const JobHistoryListDocument = gql`
    query JobHistoryList($after: Cursor, $first: Int, $before: Cursor, $last: Int, $where: JobExecutionHistoryWhereInput) {
  jobExecutionHistoryList(
    after: $after
    before: $before
    first: $first
    last: $last
    where: $where
  ) {
    edges {
      node {
        ...JobExecutionHistory
      }
    }
    pageInfo {
      ...PageInfo
    }
    totalCount
  }
}
    ${JobExecutionHistoryFragmentDoc}
${PageInfoFragmentDoc}`;

/**
 * __useJobHistoryListQuery__
 *
 * To run a query within a React component, call `useJobHistoryListQuery` and pass it any options that fit your needs.
 * When your component renders, `useJobHistoryListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useJobHistoryListQuery({
 *   variables: {
 *      after: // value for 'after'
 *      first: // value for 'first'
 *      before: // value for 'before'
 *      last: // value for 'last'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useJobHistoryListQuery(baseOptions?: Apollo.QueryHookOptions<import('../types').JobHistoryListQuery, import('../types').JobHistoryListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<import('../types').JobHistoryListQuery, import('../types').JobHistoryListQueryVariables>(JobHistoryListDocument, options);
      }
export function useJobHistoryListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<import('../types').JobHistoryListQuery, import('../types').JobHistoryListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<import('../types').JobHistoryListQuery, import('../types').JobHistoryListQueryVariables>(JobHistoryListDocument, options);
        }
export function useJobHistoryListSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<import('../types').JobHistoryListQuery, import('../types').JobHistoryListQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<import('../types').JobHistoryListQuery, import('../types').JobHistoryListQueryVariables>(JobHistoryListDocument, options);
        }
export type JobHistoryListQueryHookResult = ReturnType<typeof useJobHistoryListQuery>;
export type JobHistoryListLazyQueryHookResult = ReturnType<typeof useJobHistoryListLazyQuery>;
export type JobHistoryListSuspenseQueryHookResult = ReturnType<typeof useJobHistoryListSuspenseQuery>;
export type JobHistoryListQueryResult = Apollo.QueryResult<import('../types').JobHistoryListQuery, import('../types').JobHistoryListQueryVariables>;
export const JobHistoryDocument = gql`
    query JobHistory($id: ID!) {
  jobExecutionHistory(id: $id) {
    ...JobExecutionHistory
  }
}
    ${JobExecutionHistoryFragmentDoc}`;

/**
 * __useJobHistoryQuery__
 *
 * To run a query within a React component, call `useJobHistoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useJobHistoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useJobHistoryQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useJobHistoryQuery(baseOptions: Apollo.QueryHookOptions<import('../types').JobHistoryQuery, import('../types').JobHistoryQueryVariables> & ({ variables: import('../types').JobHistoryQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<import('../types').JobHistoryQuery, import('../types').JobHistoryQueryVariables>(JobHistoryDocument, options);
      }
export function useJobHistoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<import('../types').JobHistoryQuery, import('../types').JobHistoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<import('../types').JobHistoryQuery, import('../types').JobHistoryQueryVariables>(JobHistoryDocument, options);
        }
export function useJobHistorySuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<import('../types').JobHistoryQuery, import('../types').JobHistoryQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<import('../types').JobHistoryQuery, import('../types').JobHistoryQueryVariables>(JobHistoryDocument, options);
        }
export type JobHistoryQueryHookResult = ReturnType<typeof useJobHistoryQuery>;
export type JobHistoryLazyQueryHookResult = ReturnType<typeof useJobHistoryLazyQuery>;
export type JobHistorySuspenseQueryHookResult = ReturnType<typeof useJobHistorySuspenseQuery>;
export type JobHistoryQueryResult = Apollo.QueryResult<import('../types').JobHistoryQuery, import('../types').JobHistoryQueryVariables>;
export const JobStatsDocument = gql`
    query JobStats($jobName: String!, $days: Int) {
  jobStats(jobName: $jobName, days: $days) {
    ...JobStats
  }
}
    ${JobStatsFragmentDoc}`;

/**
 * __useJobStatsQuery__
 *
 * To run a query within a React component, call `useJobStatsQuery` and pass it any options that fit your needs.
 * When your component renders, `useJobStatsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useJobStatsQuery({
 *   variables: {
 *      jobName: // value for 'jobName'
 *      days: // value for 'days'
 *   },
 * });
 */
export function useJobStatsQuery(baseOptions: Apollo.QueryHookOptions<import('../types').JobStatsQuery, import('../types').JobStatsQueryVariables> & ({ variables: import('../types').JobStatsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<import('../types').JobStatsQuery, import('../types').JobStatsQueryVariables>(JobStatsDocument, options);
      }
export function useJobStatsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<import('../types').JobStatsQuery, import('../types').JobStatsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<import('../types').JobStatsQuery, import('../types').JobStatsQueryVariables>(JobStatsDocument, options);
        }
export function useJobStatsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<import('../types').JobStatsQuery, import('../types').JobStatsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<import('../types').JobStatsQuery, import('../types').JobStatsQueryVariables>(JobStatsDocument, options);
        }
export type JobStatsQueryHookResult = ReturnType<typeof useJobStatsQuery>;
export type JobStatsLazyQueryHookResult = ReturnType<typeof useJobStatsLazyQuery>;
export type JobStatsSuspenseQueryHookResult = ReturnType<typeof useJobStatsSuspenseQuery>;
export type JobStatsQueryResult = Apollo.QueryResult<import('../types').JobStatsQuery, import('../types').JobStatsQueryVariables>;
export const ProfileDocument = gql`
    query Profile($id: ID!) {
  profile(id: $id) {
    ...ProfileDetail
  }
}
    ${ProfileDetailFragmentDoc}`;

/**
 * __useProfileQuery__
 *
 * To run a query within a React component, call `useProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProfileQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useProfileQuery(baseOptions: Apollo.QueryHookOptions<import('../types').ProfileQuery, import('../types').ProfileQueryVariables> & ({ variables: import('../types').ProfileQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<import('../types').ProfileQuery, import('../types').ProfileQueryVariables>(ProfileDocument, options);
      }
export function useProfileLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<import('../types').ProfileQuery, import('../types').ProfileQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<import('../types').ProfileQuery, import('../types').ProfileQueryVariables>(ProfileDocument, options);
        }
export function useProfileSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<import('../types').ProfileQuery, import('../types').ProfileQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<import('../types').ProfileQuery, import('../types').ProfileQueryVariables>(ProfileDocument, options);
        }
export type ProfileQueryHookResult = ReturnType<typeof useProfileQuery>;
export type ProfileLazyQueryHookResult = ReturnType<typeof useProfileLazyQuery>;
export type ProfileSuspenseQueryHookResult = ReturnType<typeof useProfileSuspenseQuery>;
export type ProfileQueryResult = Apollo.QueryResult<import('../types').ProfileQuery, import('../types').ProfileQueryVariables>;
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
export const ProfileEntriesDocument = gql`
    query ProfileEntries($after: Cursor, $first: Int, $before: Cursor, $last: Int, $where: ProfileEntryWhereInput) {
  profileEntries(
    after: $after
    before: $before
    first: $first
    last: $last
    where: $where
  ) {
    edges {
      node {
        ...ProfileEntry
      }
    }
    pageInfo {
      ...PageInfo
    }
    totalCount
  }
}
    ${ProfileEntryFragmentDoc}
${PageInfoFragmentDoc}`;

/**
 * __useProfileEntriesQuery__
 *
 * To run a query within a React component, call `useProfileEntriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useProfileEntriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProfileEntriesQuery({
 *   variables: {
 *      after: // value for 'after'
 *      first: // value for 'first'
 *      before: // value for 'before'
 *      last: // value for 'last'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useProfileEntriesQuery(baseOptions?: Apollo.QueryHookOptions<import('../types').ProfileEntriesQuery, import('../types').ProfileEntriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<import('../types').ProfileEntriesQuery, import('../types').ProfileEntriesQueryVariables>(ProfileEntriesDocument, options);
      }
export function useProfileEntriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<import('../types').ProfileEntriesQuery, import('../types').ProfileEntriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<import('../types').ProfileEntriesQuery, import('../types').ProfileEntriesQueryVariables>(ProfileEntriesDocument, options);
        }
export function useProfileEntriesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<import('../types').ProfileEntriesQuery, import('../types').ProfileEntriesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<import('../types').ProfileEntriesQuery, import('../types').ProfileEntriesQueryVariables>(ProfileEntriesDocument, options);
        }
export type ProfileEntriesQueryHookResult = ReturnType<typeof useProfileEntriesQuery>;
export type ProfileEntriesLazyQueryHookResult = ReturnType<typeof useProfileEntriesLazyQuery>;
export type ProfileEntriesSuspenseQueryHookResult = ReturnType<typeof useProfileEntriesSuspenseQuery>;
export type ProfileEntriesQueryResult = Apollo.QueryResult<import('../types').ProfileEntriesQuery, import('../types').ProfileEntriesQueryVariables>;
export const ProfileEntryDocument = gql`
    query ProfileEntry($id: ID!) {
  profileEntry(id: $id) {
    ...ProfileEntry
  }
}
    ${ProfileEntryFragmentDoc}`;

/**
 * __useProfileEntryQuery__
 *
 * To run a query within a React component, call `useProfileEntryQuery` and pass it any options that fit your needs.
 * When your component renders, `useProfileEntryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProfileEntryQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useProfileEntryQuery(baseOptions: Apollo.QueryHookOptions<import('../types').ProfileEntryQuery, import('../types').ProfileEntryQueryVariables> & ({ variables: import('../types').ProfileEntryQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<import('../types').ProfileEntryQuery, import('../types').ProfileEntryQueryVariables>(ProfileEntryDocument, options);
      }
export function useProfileEntryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<import('../types').ProfileEntryQuery, import('../types').ProfileEntryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<import('../types').ProfileEntryQuery, import('../types').ProfileEntryQueryVariables>(ProfileEntryDocument, options);
        }
export function useProfileEntrySuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<import('../types').ProfileEntryQuery, import('../types').ProfileEntryQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<import('../types').ProfileEntryQuery, import('../types').ProfileEntryQueryVariables>(ProfileEntryDocument, options);
        }
export type ProfileEntryQueryHookResult = ReturnType<typeof useProfileEntryQuery>;
export type ProfileEntryLazyQueryHookResult = ReturnType<typeof useProfileEntryLazyQuery>;
export type ProfileEntrySuspenseQueryHookResult = ReturnType<typeof useProfileEntrySuspenseQuery>;
export type ProfileEntryQueryResult = Apollo.QueryResult<import('../types').ProfileEntryQuery, import('../types').ProfileEntryQueryVariables>;
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