/* eslint-disable @typescript-eslint/no-redeclare */
import { graphql, type GraphQLResponseResolver, type RequestHandlerOptions } from 'msw'
export type Maybe<T> = T | null;
export type InputMaybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Cursor: { input: string; output: string; }
  Map: { input: any; output: any; }
  Time: { input: string; output: string; }
};

export type AuthPayload = {
  __typename?: 'AuthPayload';
  accessToken: Scalars['String']['output'];
  refreshToken: Scalars['String']['output'];
  user: User;
};

export type CreateProfileEntryInput = {
  gender: Scalars['String']['input'];
  linkedinUrn: Scalars['String']['input'];
};

export type CreateProfileInput = {
  name: Scalars['String']['input'];
  sourceFile: Scalars['String']['input'];
  title: Scalars['String']['input'];
  urn: Scalars['String']['input'];
};

export type CreateTodoInput = {
  name: Scalars['String']['input'];
  priority: Scalars['Int']['input'];
  status?: InputMaybe<TodoStatus>;
  userID: Scalars['ID']['input'];
};

export type CreateUserInput = {
  age: Scalars['Int']['input'];
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type LoginInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createProfile: Profile;
  createProfileEntry: ProfileEntry;
  createTodo: Todo;
  createUser: User;
  login: Maybe<AuthPayload>;
  refreshToken: Maybe<RefreshTokenPayload>;
  updateProfile: Profile;
  updateProfileEntry: ProfileEntry;
  updateTodo: Todo;
  updateUser: User;
};


export type MutationCreateProfileArgs = {
  input: CreateProfileInput;
};


export type MutationCreateProfileEntryArgs = {
  input: CreateProfileEntryInput;
};


export type MutationCreateTodoArgs = {
  input: CreateTodoInput;
};


export type MutationCreateUserArgs = {
  input: CreateUserInput;
};


export type MutationLoginArgs = {
  input: LoginInput;
};


export type MutationUpdateProfileArgs = {
  input: UpdateProfileInput;
};


export type MutationUpdateProfileEntryArgs = {
  input: UpdateProfileEntryInput;
};


export type MutationUpdateTodoArgs = {
  input: UpdateTodoInput;
};


export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
};

export type Node = {
  id: Scalars['ID']['output'];
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor: Maybe<Scalars['Cursor']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor: Maybe<Scalars['Cursor']['output']>;
};

export type Profile = Node & {
  __typename?: 'Profile';
  createdAt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  sourceFile: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
  urn: Scalars['String']['output'];
};

export type ProfileConnection = {
  __typename?: 'ProfileConnection';
  edges: Maybe<Array<Maybe<ProfileEdge>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ProfileEdge = {
  __typename?: 'ProfileEdge';
  cursor: Scalars['Cursor']['output'];
  node: Maybe<Profile>;
};

export type ProfileEntry = Node & {
  __typename?: 'ProfileEntry';
  createdAt: Scalars['Time']['output'];
  fetchCount: Scalars['Int']['output'];
  gender: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  lastFetchedAt: Maybe<Scalars['Time']['output']>;
  linkedinUrn: Scalars['String']['output'];
  profileData: Maybe<Scalars['Map']['output']>;
  status: ProfileEntryStatus;
  updatedAt: Scalars['Time']['output'];
};

export type ProfileEntryConnection = {
  __typename?: 'ProfileEntryConnection';
  edges: Maybe<Array<Maybe<ProfileEntryEdge>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ProfileEntryEdge = {
  __typename?: 'ProfileEntryEdge';
  cursor: Scalars['Cursor']['output'];
  node: Maybe<ProfileEntry>;
};

export const ProfileEntryStatus = {
  Completed: 'COMPLETED',
  Failed: 'FAILED',
  Fetching: 'FETCHING',
  Pending: 'PENDING'
} as const;

export type ProfileEntryStatus = typeof ProfileEntryStatus[keyof typeof ProfileEntryStatus];
/**
 * ProfileEntryWhereInput is used for filtering ProfileEntry objects.
 * Input was generated by ent.
 */
export type ProfileEntryWhereInput = {
  and?: InputMaybe<Array<ProfileEntryWhereInput>>;
  /** created_at field predicates */
  createdAt?: InputMaybe<Scalars['Time']['input']>;
  createdAtGT?: InputMaybe<Scalars['Time']['input']>;
  createdAtGTE?: InputMaybe<Scalars['Time']['input']>;
  createdAtIn?: InputMaybe<Array<Scalars['Time']['input']>>;
  createdAtLT?: InputMaybe<Scalars['Time']['input']>;
  createdAtLTE?: InputMaybe<Scalars['Time']['input']>;
  createdAtNEQ?: InputMaybe<Scalars['Time']['input']>;
  createdAtNotIn?: InputMaybe<Array<Scalars['Time']['input']>>;
  /** error_message field predicates */
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  errorMessageContains?: InputMaybe<Scalars['String']['input']>;
  errorMessageContainsFold?: InputMaybe<Scalars['String']['input']>;
  errorMessageEqualFold?: InputMaybe<Scalars['String']['input']>;
  errorMessageGT?: InputMaybe<Scalars['String']['input']>;
  errorMessageGTE?: InputMaybe<Scalars['String']['input']>;
  errorMessageHasPrefix?: InputMaybe<Scalars['String']['input']>;
  errorMessageHasSuffix?: InputMaybe<Scalars['String']['input']>;
  errorMessageIn?: InputMaybe<Array<Scalars['String']['input']>>;
  errorMessageIsNil?: InputMaybe<Scalars['Boolean']['input']>;
  errorMessageLT?: InputMaybe<Scalars['String']['input']>;
  errorMessageLTE?: InputMaybe<Scalars['String']['input']>;
  errorMessageNEQ?: InputMaybe<Scalars['String']['input']>;
  errorMessageNotIn?: InputMaybe<Array<Scalars['String']['input']>>;
  errorMessageNotNil?: InputMaybe<Scalars['Boolean']['input']>;
  /** fetch_count field predicates */
  fetchCount?: InputMaybe<Scalars['Int']['input']>;
  fetchCountGT?: InputMaybe<Scalars['Int']['input']>;
  fetchCountGTE?: InputMaybe<Scalars['Int']['input']>;
  fetchCountIn?: InputMaybe<Array<Scalars['Int']['input']>>;
  fetchCountLT?: InputMaybe<Scalars['Int']['input']>;
  fetchCountLTE?: InputMaybe<Scalars['Int']['input']>;
  fetchCountNEQ?: InputMaybe<Scalars['Int']['input']>;
  fetchCountNotIn?: InputMaybe<Array<Scalars['Int']['input']>>;
  /** gender field predicates */
  gender?: InputMaybe<Scalars['String']['input']>;
  genderContains?: InputMaybe<Scalars['String']['input']>;
  genderContainsFold?: InputMaybe<Scalars['String']['input']>;
  genderEqualFold?: InputMaybe<Scalars['String']['input']>;
  genderGT?: InputMaybe<Scalars['String']['input']>;
  genderGTE?: InputMaybe<Scalars['String']['input']>;
  genderHasPrefix?: InputMaybe<Scalars['String']['input']>;
  genderHasSuffix?: InputMaybe<Scalars['String']['input']>;
  genderIn?: InputMaybe<Array<Scalars['String']['input']>>;
  genderIsNil?: InputMaybe<Scalars['Boolean']['input']>;
  genderLT?: InputMaybe<Scalars['String']['input']>;
  genderLTE?: InputMaybe<Scalars['String']['input']>;
  genderNEQ?: InputMaybe<Scalars['String']['input']>;
  genderNotIn?: InputMaybe<Array<Scalars['String']['input']>>;
  genderNotNil?: InputMaybe<Scalars['Boolean']['input']>;
  /** id field predicates */
  id?: InputMaybe<Scalars['ID']['input']>;
  idGT?: InputMaybe<Scalars['ID']['input']>;
  idGTE?: InputMaybe<Scalars['ID']['input']>;
  idIn?: InputMaybe<Array<Scalars['ID']['input']>>;
  idLT?: InputMaybe<Scalars['ID']['input']>;
  idLTE?: InputMaybe<Scalars['ID']['input']>;
  idNEQ?: InputMaybe<Scalars['ID']['input']>;
  idNotIn?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** last_fetched_at field predicates */
  lastFetchedAt?: InputMaybe<Scalars['Time']['input']>;
  lastFetchedAtGT?: InputMaybe<Scalars['Time']['input']>;
  lastFetchedAtGTE?: InputMaybe<Scalars['Time']['input']>;
  lastFetchedAtIn?: InputMaybe<Array<Scalars['Time']['input']>>;
  lastFetchedAtIsNil?: InputMaybe<Scalars['Boolean']['input']>;
  lastFetchedAtLT?: InputMaybe<Scalars['Time']['input']>;
  lastFetchedAtLTE?: InputMaybe<Scalars['Time']['input']>;
  lastFetchedAtNEQ?: InputMaybe<Scalars['Time']['input']>;
  lastFetchedAtNotIn?: InputMaybe<Array<Scalars['Time']['input']>>;
  lastFetchedAtNotNil?: InputMaybe<Scalars['Boolean']['input']>;
  /** linkedin_urn field predicates */
  linkedinUrn?: InputMaybe<Scalars['String']['input']>;
  linkedinUrnContains?: InputMaybe<Scalars['String']['input']>;
  linkedinUrnContainsFold?: InputMaybe<Scalars['String']['input']>;
  linkedinUrnEqualFold?: InputMaybe<Scalars['String']['input']>;
  linkedinUrnGT?: InputMaybe<Scalars['String']['input']>;
  linkedinUrnGTE?: InputMaybe<Scalars['String']['input']>;
  linkedinUrnHasPrefix?: InputMaybe<Scalars['String']['input']>;
  linkedinUrnHasSuffix?: InputMaybe<Scalars['String']['input']>;
  linkedinUrnIn?: InputMaybe<Array<Scalars['String']['input']>>;
  linkedinUrnLT?: InputMaybe<Scalars['String']['input']>;
  linkedinUrnLTE?: InputMaybe<Scalars['String']['input']>;
  linkedinUrnNEQ?: InputMaybe<Scalars['String']['input']>;
  linkedinUrnNotIn?: InputMaybe<Array<Scalars['String']['input']>>;
  not?: InputMaybe<ProfileEntryWhereInput>;
  or?: InputMaybe<Array<ProfileEntryWhereInput>>;
  /** raw_response_s3_key field predicates */
  rawResponseS3Key?: InputMaybe<Scalars['String']['input']>;
  rawResponseS3KeyContains?: InputMaybe<Scalars['String']['input']>;
  rawResponseS3KeyContainsFold?: InputMaybe<Scalars['String']['input']>;
  rawResponseS3KeyEqualFold?: InputMaybe<Scalars['String']['input']>;
  rawResponseS3KeyGT?: InputMaybe<Scalars['String']['input']>;
  rawResponseS3KeyGTE?: InputMaybe<Scalars['String']['input']>;
  rawResponseS3KeyHasPrefix?: InputMaybe<Scalars['String']['input']>;
  rawResponseS3KeyHasSuffix?: InputMaybe<Scalars['String']['input']>;
  rawResponseS3KeyIn?: InputMaybe<Array<Scalars['String']['input']>>;
  rawResponseS3KeyIsNil?: InputMaybe<Scalars['Boolean']['input']>;
  rawResponseS3KeyLT?: InputMaybe<Scalars['String']['input']>;
  rawResponseS3KeyLTE?: InputMaybe<Scalars['String']['input']>;
  rawResponseS3KeyNEQ?: InputMaybe<Scalars['String']['input']>;
  rawResponseS3KeyNotIn?: InputMaybe<Array<Scalars['String']['input']>>;
  rawResponseS3KeyNotNil?: InputMaybe<Scalars['Boolean']['input']>;
  /** status field predicates */
  status?: InputMaybe<ProfileEntryStatus>;
  statusIn?: InputMaybe<Array<ProfileEntryStatus>>;
  statusNEQ?: InputMaybe<ProfileEntryStatus>;
  statusNotIn?: InputMaybe<Array<ProfileEntryStatus>>;
  /** template_json_s3_key field predicates */
  templateJSONS3Key?: InputMaybe<Scalars['String']['input']>;
  templateJSONS3KeyContains?: InputMaybe<Scalars['String']['input']>;
  templateJSONS3KeyContainsFold?: InputMaybe<Scalars['String']['input']>;
  templateJSONS3KeyEqualFold?: InputMaybe<Scalars['String']['input']>;
  templateJSONS3KeyGT?: InputMaybe<Scalars['String']['input']>;
  templateJSONS3KeyGTE?: InputMaybe<Scalars['String']['input']>;
  templateJSONS3KeyHasPrefix?: InputMaybe<Scalars['String']['input']>;
  templateJSONS3KeyHasSuffix?: InputMaybe<Scalars['String']['input']>;
  templateJSONS3KeyIn?: InputMaybe<Array<Scalars['String']['input']>>;
  templateJSONS3KeyIsNil?: InputMaybe<Scalars['Boolean']['input']>;
  templateJSONS3KeyLT?: InputMaybe<Scalars['String']['input']>;
  templateJSONS3KeyLTE?: InputMaybe<Scalars['String']['input']>;
  templateJSONS3KeyNEQ?: InputMaybe<Scalars['String']['input']>;
  templateJSONS3KeyNotIn?: InputMaybe<Array<Scalars['String']['input']>>;
  templateJSONS3KeyNotNil?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ProfileTitleGroup = {
  __typename?: 'ProfileTitleGroup';
  count: Scalars['Int']['output'];
  title: Scalars['String']['output'];
};

/**
 * ProfileWhereInput is used for filtering Profile objects.
 * Input was generated by ent.
 */
export type ProfileWhereInput = {
  and?: InputMaybe<Array<ProfileWhereInput>>;
  /** created_at field predicates */
  createdAt?: InputMaybe<Scalars['Time']['input']>;
  createdAtGT?: InputMaybe<Scalars['Time']['input']>;
  createdAtGTE?: InputMaybe<Scalars['Time']['input']>;
  createdAtIn?: InputMaybe<Array<Scalars['Time']['input']>>;
  createdAtLT?: InputMaybe<Scalars['Time']['input']>;
  createdAtLTE?: InputMaybe<Scalars['Time']['input']>;
  createdAtNEQ?: InputMaybe<Scalars['Time']['input']>;
  createdAtNotIn?: InputMaybe<Array<Scalars['Time']['input']>>;
  /** todos edge predicates */
  hasTodos?: InputMaybe<Scalars['Boolean']['input']>;
  hasTodosWith?: InputMaybe<Array<TodoWhereInput>>;
  /** id field predicates */
  id?: InputMaybe<Scalars['ID']['input']>;
  idGT?: InputMaybe<Scalars['ID']['input']>;
  idGTE?: InputMaybe<Scalars['ID']['input']>;
  idIn?: InputMaybe<Array<Scalars['ID']['input']>>;
  idLT?: InputMaybe<Scalars['ID']['input']>;
  idLTE?: InputMaybe<Scalars['ID']['input']>;
  idNEQ?: InputMaybe<Scalars['ID']['input']>;
  idNotIn?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** name field predicates */
  name?: InputMaybe<Scalars['String']['input']>;
  nameContains?: InputMaybe<Scalars['String']['input']>;
  nameContainsFold?: InputMaybe<Scalars['String']['input']>;
  nameEqualFold?: InputMaybe<Scalars['String']['input']>;
  nameGT?: InputMaybe<Scalars['String']['input']>;
  nameGTE?: InputMaybe<Scalars['String']['input']>;
  nameHasPrefix?: InputMaybe<Scalars['String']['input']>;
  nameHasSuffix?: InputMaybe<Scalars['String']['input']>;
  nameIn?: InputMaybe<Array<Scalars['String']['input']>>;
  nameLT?: InputMaybe<Scalars['String']['input']>;
  nameLTE?: InputMaybe<Scalars['String']['input']>;
  nameNEQ?: InputMaybe<Scalars['String']['input']>;
  nameNotIn?: InputMaybe<Array<Scalars['String']['input']>>;
  not?: InputMaybe<ProfileWhereInput>;
  or?: InputMaybe<Array<ProfileWhereInput>>;
  /** source_file field predicates */
  sourceFile?: InputMaybe<Scalars['String']['input']>;
  sourceFileContains?: InputMaybe<Scalars['String']['input']>;
  sourceFileContainsFold?: InputMaybe<Scalars['String']['input']>;
  sourceFileEqualFold?: InputMaybe<Scalars['String']['input']>;
  sourceFileGT?: InputMaybe<Scalars['String']['input']>;
  sourceFileGTE?: InputMaybe<Scalars['String']['input']>;
  sourceFileHasPrefix?: InputMaybe<Scalars['String']['input']>;
  sourceFileHasSuffix?: InputMaybe<Scalars['String']['input']>;
  sourceFileIn?: InputMaybe<Array<Scalars['String']['input']>>;
  sourceFileLT?: InputMaybe<Scalars['String']['input']>;
  sourceFileLTE?: InputMaybe<Scalars['String']['input']>;
  sourceFileNEQ?: InputMaybe<Scalars['String']['input']>;
  sourceFileNotIn?: InputMaybe<Array<Scalars['String']['input']>>;
  /** title field predicates */
  title?: InputMaybe<Scalars['String']['input']>;
  titleContains?: InputMaybe<Scalars['String']['input']>;
  titleContainsFold?: InputMaybe<Scalars['String']['input']>;
  titleEqualFold?: InputMaybe<Scalars['String']['input']>;
  titleGT?: InputMaybe<Scalars['String']['input']>;
  titleGTE?: InputMaybe<Scalars['String']['input']>;
  titleHasPrefix?: InputMaybe<Scalars['String']['input']>;
  titleHasSuffix?: InputMaybe<Scalars['String']['input']>;
  titleIn?: InputMaybe<Array<Scalars['String']['input']>>;
  titleLT?: InputMaybe<Scalars['String']['input']>;
  titleLTE?: InputMaybe<Scalars['String']['input']>;
  titleNEQ?: InputMaybe<Scalars['String']['input']>;
  titleNotIn?: InputMaybe<Array<Scalars['String']['input']>>;
  /** urn field predicates */
  urn?: InputMaybe<Scalars['String']['input']>;
  urnContains?: InputMaybe<Scalars['String']['input']>;
  urnContainsFold?: InputMaybe<Scalars['String']['input']>;
  urnEqualFold?: InputMaybe<Scalars['String']['input']>;
  urnGT?: InputMaybe<Scalars['String']['input']>;
  urnGTE?: InputMaybe<Scalars['String']['input']>;
  urnHasPrefix?: InputMaybe<Scalars['String']['input']>;
  urnHasSuffix?: InputMaybe<Scalars['String']['input']>;
  urnIn?: InputMaybe<Array<Scalars['String']['input']>>;
  urnLT?: InputMaybe<Scalars['String']['input']>;
  urnLTE?: InputMaybe<Scalars['String']['input']>;
  urnNEQ?: InputMaybe<Scalars['String']['input']>;
  urnNotIn?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type Query = {
  __typename?: 'Query';
  node: Maybe<Node>;
  profile: Maybe<Profile>;
  profileEntries: Maybe<ProfileEntryConnection>;
  profileEntry: Maybe<ProfileEntry>;
  profiles: Maybe<ProfileConnection>;
  profilesByTitle: Array<ProfileTitleGroup>;
  todo: Maybe<Todo>;
  todos: Maybe<TodoConnection>;
  user: Maybe<User>;
  users: Maybe<UserConnection>;
};


export type QueryNodeArgs = {
  id: Scalars['ID']['input'];
};


export type QueryProfileArgs = {
  input?: InputMaybe<ProfileWhereInput>;
};


export type QueryProfileEntriesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProfileEntryWhereInput>;
};


export type QueryProfileEntryArgs = {
  id: Scalars['ID']['input'];
};


export type QueryProfilesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProfileWhereInput>;
};


export type QueryProfilesByTitleArgs = {
  minCount: Scalars['Int']['input'];
  searchTerm?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTodoArgs = {
  input?: InputMaybe<TodoWhereInput>;
};


export type QueryTodosArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TodoWhereInput>;
};


export type QueryUserArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUsersArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};

export type RefreshTokenPayload = {
  __typename?: 'RefreshTokenPayload';
  accessToken: Scalars['String']['output'];
  refreshToken: Scalars['String']['output'];
};

export type Todo = Node & {
  __typename?: 'Todo';
  createdAt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  priority: Scalars['Int']['output'];
  status: TodoStatus;
  updatedAt: Scalars['String']['output'];
  userID: Maybe<Scalars['ID']['output']>;
};

export type TodoConnection = {
  __typename?: 'TodoConnection';
  edges: Maybe<Array<Maybe<TodoEdge>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type TodoEdge = {
  __typename?: 'TodoEdge';
  cursor: Scalars['Cursor']['output'];
  node: Maybe<Todo>;
};

export const TodoStatus = {
  Completed: 'COMPLETED',
  InProgress: 'IN_PROGRESS'
} as const;

export type TodoStatus = typeof TodoStatus[keyof typeof TodoStatus];
/**
 * TodoWhereInput is used for filtering Todo objects.
 * Input was generated by ent.
 */
export type TodoWhereInput = {
  and?: InputMaybe<Array<TodoWhereInput>>;
  /** created_at field predicates */
  createdAt?: InputMaybe<Scalars['Time']['input']>;
  createdAtGT?: InputMaybe<Scalars['Time']['input']>;
  createdAtGTE?: InputMaybe<Scalars['Time']['input']>;
  createdAtIn?: InputMaybe<Array<Scalars['Time']['input']>>;
  createdAtLT?: InputMaybe<Scalars['Time']['input']>;
  createdAtLTE?: InputMaybe<Scalars['Time']['input']>;
  createdAtNEQ?: InputMaybe<Scalars['Time']['input']>;
  createdAtNotIn?: InputMaybe<Array<Scalars['Time']['input']>>;
  /** user edge predicates */
  hasUser?: InputMaybe<Scalars['Boolean']['input']>;
  hasUserWith?: InputMaybe<Array<UserWhereInput>>;
  /** id field predicates */
  id?: InputMaybe<Scalars['ID']['input']>;
  idGT?: InputMaybe<Scalars['ID']['input']>;
  idGTE?: InputMaybe<Scalars['ID']['input']>;
  idIn?: InputMaybe<Array<Scalars['ID']['input']>>;
  idLT?: InputMaybe<Scalars['ID']['input']>;
  idLTE?: InputMaybe<Scalars['ID']['input']>;
  idNEQ?: InputMaybe<Scalars['ID']['input']>;
  idNotIn?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** name field predicates */
  name?: InputMaybe<Scalars['String']['input']>;
  nameContains?: InputMaybe<Scalars['String']['input']>;
  nameContainsFold?: InputMaybe<Scalars['String']['input']>;
  nameEqualFold?: InputMaybe<Scalars['String']['input']>;
  nameGT?: InputMaybe<Scalars['String']['input']>;
  nameGTE?: InputMaybe<Scalars['String']['input']>;
  nameHasPrefix?: InputMaybe<Scalars['String']['input']>;
  nameHasSuffix?: InputMaybe<Scalars['String']['input']>;
  nameIn?: InputMaybe<Array<Scalars['String']['input']>>;
  nameLT?: InputMaybe<Scalars['String']['input']>;
  nameLTE?: InputMaybe<Scalars['String']['input']>;
  nameNEQ?: InputMaybe<Scalars['String']['input']>;
  nameNotIn?: InputMaybe<Array<Scalars['String']['input']>>;
  not?: InputMaybe<TodoWhereInput>;
  or?: InputMaybe<Array<TodoWhereInput>>;
  /** priority field predicates */
  priority?: InputMaybe<Scalars['Int']['input']>;
  priorityGT?: InputMaybe<Scalars['Int']['input']>;
  priorityGTE?: InputMaybe<Scalars['Int']['input']>;
  priorityIn?: InputMaybe<Array<Scalars['Int']['input']>>;
  priorityLT?: InputMaybe<Scalars['Int']['input']>;
  priorityLTE?: InputMaybe<Scalars['Int']['input']>;
  priorityNEQ?: InputMaybe<Scalars['Int']['input']>;
  priorityNotIn?: InputMaybe<Array<Scalars['Int']['input']>>;
  /** status field predicates */
  status?: InputMaybe<TodoStatus>;
  statusIn?: InputMaybe<Array<TodoStatus>>;
  statusNEQ?: InputMaybe<TodoStatus>;
  statusNotIn?: InputMaybe<Array<TodoStatus>>;
  /** user_id field predicates */
  userID?: InputMaybe<Scalars['ID']['input']>;
  userIDContains?: InputMaybe<Scalars['ID']['input']>;
  userIDContainsFold?: InputMaybe<Scalars['ID']['input']>;
  userIDEqualFold?: InputMaybe<Scalars['ID']['input']>;
  userIDGT?: InputMaybe<Scalars['ID']['input']>;
  userIDGTE?: InputMaybe<Scalars['ID']['input']>;
  userIDHasPrefix?: InputMaybe<Scalars['ID']['input']>;
  userIDHasSuffix?: InputMaybe<Scalars['ID']['input']>;
  userIDIn?: InputMaybe<Array<Scalars['ID']['input']>>;
  userIDIsNil?: InputMaybe<Scalars['Boolean']['input']>;
  userIDLT?: InputMaybe<Scalars['ID']['input']>;
  userIDLTE?: InputMaybe<Scalars['ID']['input']>;
  userIDNEQ?: InputMaybe<Scalars['ID']['input']>;
  userIDNotIn?: InputMaybe<Array<Scalars['ID']['input']>>;
  userIDNotNil?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateProfileEntryInput = {
  gender?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  linkedinUrn?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateProfileInput = {
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  sourceFile?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  urn?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateTodoInput = {
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  priority?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<TodoStatus>;
  userID?: InputMaybe<Scalars['ID']['input']>;
};

export type UpdateUserInput = {
  age?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};

export type User = Node & {
  __typename?: 'User';
  age: Scalars['Int']['output'];
  createdAt: Scalars['String']['output'];
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  todos: Array<Todo>;
  updatedAt: Scalars['String']['output'];
};

export type UserConnection = {
  __typename?: 'UserConnection';
  edges: Maybe<Array<Maybe<UserEdge>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type UserEdge = {
  __typename?: 'UserEdge';
  cursor: Scalars['Cursor']['output'];
  node: Maybe<User>;
};

/**
 * UserWhereInput is used for filtering User objects.
 * Input was generated by ent.
 */
export type UserWhereInput = {
  /** age field predicates */
  age?: InputMaybe<Scalars['Int']['input']>;
  ageGT?: InputMaybe<Scalars['Int']['input']>;
  ageGTE?: InputMaybe<Scalars['Int']['input']>;
  ageIn?: InputMaybe<Array<Scalars['Int']['input']>>;
  ageLT?: InputMaybe<Scalars['Int']['input']>;
  ageLTE?: InputMaybe<Scalars['Int']['input']>;
  ageNEQ?: InputMaybe<Scalars['Int']['input']>;
  ageNotIn?: InputMaybe<Array<Scalars['Int']['input']>>;
  and?: InputMaybe<Array<UserWhereInput>>;
  /** created_at field predicates */
  createdAt?: InputMaybe<Scalars['Time']['input']>;
  createdAtGT?: InputMaybe<Scalars['Time']['input']>;
  createdAtGTE?: InputMaybe<Scalars['Time']['input']>;
  createdAtIn?: InputMaybe<Array<Scalars['Time']['input']>>;
  createdAtLT?: InputMaybe<Scalars['Time']['input']>;
  createdAtLTE?: InputMaybe<Scalars['Time']['input']>;
  createdAtNEQ?: InputMaybe<Scalars['Time']['input']>;
  createdAtNotIn?: InputMaybe<Array<Scalars['Time']['input']>>;
  /** email field predicates */
  email?: InputMaybe<Scalars['String']['input']>;
  emailContains?: InputMaybe<Scalars['String']['input']>;
  emailContainsFold?: InputMaybe<Scalars['String']['input']>;
  emailEqualFold?: InputMaybe<Scalars['String']['input']>;
  emailGT?: InputMaybe<Scalars['String']['input']>;
  emailGTE?: InputMaybe<Scalars['String']['input']>;
  emailHasPrefix?: InputMaybe<Scalars['String']['input']>;
  emailHasSuffix?: InputMaybe<Scalars['String']['input']>;
  emailIn?: InputMaybe<Array<Scalars['String']['input']>>;
  emailLT?: InputMaybe<Scalars['String']['input']>;
  emailLTE?: InputMaybe<Scalars['String']['input']>;
  emailNEQ?: InputMaybe<Scalars['String']['input']>;
  emailNotIn?: InputMaybe<Array<Scalars['String']['input']>>;
  /** todos edge predicates */
  hasTodos?: InputMaybe<Scalars['Boolean']['input']>;
  hasTodosWith?: InputMaybe<Array<TodoWhereInput>>;
  /** id field predicates */
  id?: InputMaybe<Scalars['ID']['input']>;
  idGT?: InputMaybe<Scalars['ID']['input']>;
  idGTE?: InputMaybe<Scalars['ID']['input']>;
  idIn?: InputMaybe<Array<Scalars['ID']['input']>>;
  idLT?: InputMaybe<Scalars['ID']['input']>;
  idLTE?: InputMaybe<Scalars['ID']['input']>;
  idNEQ?: InputMaybe<Scalars['ID']['input']>;
  idNotIn?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** name field predicates */
  name?: InputMaybe<Scalars['String']['input']>;
  nameContains?: InputMaybe<Scalars['String']['input']>;
  nameContainsFold?: InputMaybe<Scalars['String']['input']>;
  nameEqualFold?: InputMaybe<Scalars['String']['input']>;
  nameGT?: InputMaybe<Scalars['String']['input']>;
  nameGTE?: InputMaybe<Scalars['String']['input']>;
  nameHasPrefix?: InputMaybe<Scalars['String']['input']>;
  nameHasSuffix?: InputMaybe<Scalars['String']['input']>;
  nameIn?: InputMaybe<Array<Scalars['String']['input']>>;
  nameLT?: InputMaybe<Scalars['String']['input']>;
  nameLTE?: InputMaybe<Scalars['String']['input']>;
  nameNEQ?: InputMaybe<Scalars['String']['input']>;
  nameNotIn?: InputMaybe<Array<Scalars['String']['input']>>;
  not?: InputMaybe<UserWhereInput>;
  or?: InputMaybe<Array<UserWhereInput>>;
};

export type AuthPayloadFragment = { __typename?: 'AuthPayload', accessToken: string, refreshToken: string, user: { __typename?: 'User', id: string, name: string, email: string } };

export type PageInfoFragment = { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor: string | null, endCursor: string | null };

export type ProfileFragment = { __typename?: 'Profile', id: string, name: string, title: string, urn: string };

export type ProfileTitleGroupFragment = { __typename?: 'ProfileTitleGroup', title: string, count: number };

export type ProfileEntryFragment = { __typename?: 'ProfileEntry', id: string, linkedinUrn: string, gender: string | null, status: ProfileEntryStatus, lastFetchedAt: string | null, fetchCount: number, profileData: any | null, createdAt: string, updatedAt: string };

export type RefreshTokenFragmentFragment = { __typename?: 'RefreshTokenPayload', accessToken: string, refreshToken: string };

export type UserFragment = { __typename?: 'User', id: string, name: string, email: string };

export type CreateProfileEntryMutationVariables = Exact<{
  input: CreateProfileEntryInput;
}>;


export type CreateProfileEntryMutation = { __typename?: 'Mutation', createProfileEntry: { __typename?: 'ProfileEntry', id: string, linkedinUrn: string, gender: string | null, status: ProfileEntryStatus, lastFetchedAt: string | null, fetchCount: number, profileData: any | null, createdAt: string, updatedAt: string } };

export type UpdateProfileEntryMutationVariables = Exact<{
  input: UpdateProfileEntryInput;
}>;


export type UpdateProfileEntryMutation = { __typename?: 'Mutation', updateProfileEntry: { __typename?: 'ProfileEntry', id: string, linkedinUrn: string, gender: string | null, status: ProfileEntryStatus, lastFetchedAt: string | null, fetchCount: number, profileData: any | null, createdAt: string, updatedAt: string } };

export type LoginMutationVariables = Exact<{
  input: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'AuthPayload', accessToken: string, refreshToken: string, user: { __typename?: 'User', id: string, name: string, email: string } } | null };

export type RefreshTokenMutationVariables = Exact<{ [key: string]: never; }>;


export type RefreshTokenMutation = { __typename?: 'Mutation', refreshToken: { __typename?: 'RefreshTokenPayload', accessToken: string, refreshToken: string } | null };

export type GroupProfilesByTitleQueryVariables = Exact<{
  searchTerm?: InputMaybe<Scalars['String']['input']>;
  minCount: Scalars['Int']['input'];
}>;


export type GroupProfilesByTitleQuery = { __typename?: 'Query', profilesByTitle: Array<{ __typename?: 'ProfileTitleGroup', title: string, count: number }> };

export type ProfilesQueryVariables = Exact<{
  after?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProfileWhereInput>;
}>;


export type ProfilesQuery = { __typename?: 'Query', profiles: { __typename?: 'ProfileConnection', totalCount: number, edges: Array<{ __typename?: 'ProfileEdge', node: { __typename?: 'Profile', id: string, name: string, title: string, urn: string } | null } | null> | null, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor: string | null, endCursor: string | null } } | null };

export type ProfileEntriesQueryVariables = Exact<{
  after?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProfileEntryWhereInput>;
}>;


export type ProfileEntriesQuery = { __typename?: 'Query', profileEntries: { __typename?: 'ProfileEntryConnection', totalCount: number, edges: Array<{ __typename?: 'ProfileEntryEdge', node: { __typename?: 'ProfileEntry', id: string, linkedinUrn: string, gender: string | null, status: ProfileEntryStatus, lastFetchedAt: string | null, fetchCount: number, profileData: any | null, createdAt: string, updatedAt: string } | null } | null> | null, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor: string | null, endCursor: string | null } } | null };

export type ProfileEntryQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type ProfileEntryQuery = { __typename?: 'Query', profileEntry: { __typename?: 'ProfileEntry', id: string, linkedinUrn: string, gender: string | null, status: ProfileEntryStatus, lastFetchedAt: string | null, fetchCount: number, profileData: any | null, createdAt: string, updatedAt: string } | null };

export type UsersQueryVariables = Exact<{
  after?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
}>;


export type UsersQuery = { __typename?: 'Query', users: { __typename?: 'UserConnection', totalCount: number, edges: Array<{ __typename?: 'UserEdge', node: { __typename?: 'User', id: string, name: string, email: string } | null } | null> | null, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor: string | null, endCursor: string | null } } | null };


/**
 * @param resolver A function that accepts [resolver arguments](https://mswjs.io/docs/api/graphql#resolver-argument) and must always return the instruction on what to do with the intercepted request. ([see more](https://mswjs.io/docs/concepts/response-resolver#resolver-instructions))
 * @param options Options object to customize the behavior of the mock. ([see more](https://mswjs.io/docs/api/graphql#handler-options))
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockCreateProfileEntryMutation(
 *   ({ query, variables }) => {
 *     const { input } = variables;
 *     return HttpResponse.json({
 *       data: { createProfileEntry }
 *     })
 *   },
 *   requestOptions
 * )
 */
export const mockCreateProfileEntryMutation = (resolver: GraphQLResponseResolver<CreateProfileEntryMutation, CreateProfileEntryMutationVariables>, options?: RequestHandlerOptions) =>
  graphql.mutation<CreateProfileEntryMutation, CreateProfileEntryMutationVariables>(
    'CreateProfileEntry',
    resolver,
    options
  )

/**
 * @param resolver A function that accepts [resolver arguments](https://mswjs.io/docs/api/graphql#resolver-argument) and must always return the instruction on what to do with the intercepted request. ([see more](https://mswjs.io/docs/concepts/response-resolver#resolver-instructions))
 * @param options Options object to customize the behavior of the mock. ([see more](https://mswjs.io/docs/api/graphql#handler-options))
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockUpdateProfileEntryMutation(
 *   ({ query, variables }) => {
 *     const { input } = variables;
 *     return HttpResponse.json({
 *       data: { updateProfileEntry }
 *     })
 *   },
 *   requestOptions
 * )
 */
export const mockUpdateProfileEntryMutation = (resolver: GraphQLResponseResolver<UpdateProfileEntryMutation, UpdateProfileEntryMutationVariables>, options?: RequestHandlerOptions) =>
  graphql.mutation<UpdateProfileEntryMutation, UpdateProfileEntryMutationVariables>(
    'UpdateProfileEntry',
    resolver,
    options
  )

/**
 * @param resolver A function that accepts [resolver arguments](https://mswjs.io/docs/api/graphql#resolver-argument) and must always return the instruction on what to do with the intercepted request. ([see more](https://mswjs.io/docs/concepts/response-resolver#resolver-instructions))
 * @param options Options object to customize the behavior of the mock. ([see more](https://mswjs.io/docs/api/graphql#handler-options))
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockLoginMutation(
 *   ({ query, variables }) => {
 *     const { input } = variables;
 *     return HttpResponse.json({
 *       data: { login }
 *     })
 *   },
 *   requestOptions
 * )
 */
export const mockLoginMutation = (resolver: GraphQLResponseResolver<LoginMutation, LoginMutationVariables>, options?: RequestHandlerOptions) =>
  graphql.mutation<LoginMutation, LoginMutationVariables>(
    'Login',
    resolver,
    options
  )

/**
 * @param resolver A function that accepts [resolver arguments](https://mswjs.io/docs/api/graphql#resolver-argument) and must always return the instruction on what to do with the intercepted request. ([see more](https://mswjs.io/docs/concepts/response-resolver#resolver-instructions))
 * @param options Options object to customize the behavior of the mock. ([see more](https://mswjs.io/docs/api/graphql#handler-options))
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockRefreshTokenMutation(
 *   ({ query, variables }) => {
 *     return HttpResponse.json({
 *       data: { refreshToken }
 *     })
 *   },
 *   requestOptions
 * )
 */
export const mockRefreshTokenMutation = (resolver: GraphQLResponseResolver<RefreshTokenMutation, RefreshTokenMutationVariables>, options?: RequestHandlerOptions) =>
  graphql.mutation<RefreshTokenMutation, RefreshTokenMutationVariables>(
    'RefreshToken',
    resolver,
    options
  )

/**
 * @param resolver A function that accepts [resolver arguments](https://mswjs.io/docs/api/graphql#resolver-argument) and must always return the instruction on what to do with the intercepted request. ([see more](https://mswjs.io/docs/concepts/response-resolver#resolver-instructions))
 * @param options Options object to customize the behavior of the mock. ([see more](https://mswjs.io/docs/api/graphql#handler-options))
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockGroupProfilesByTitleQuery(
 *   ({ query, variables }) => {
 *     const { searchTerm, minCount } = variables;
 *     return HttpResponse.json({
 *       data: { profilesByTitle }
 *     })
 *   },
 *   requestOptions
 * )
 */
export const mockGroupProfilesByTitleQuery = (resolver: GraphQLResponseResolver<GroupProfilesByTitleQuery, GroupProfilesByTitleQueryVariables>, options?: RequestHandlerOptions) =>
  graphql.query<GroupProfilesByTitleQuery, GroupProfilesByTitleQueryVariables>(
    'GroupProfilesByTitle',
    resolver,
    options
  )

/**
 * @param resolver A function that accepts [resolver arguments](https://mswjs.io/docs/api/graphql#resolver-argument) and must always return the instruction on what to do with the intercepted request. ([see more](https://mswjs.io/docs/concepts/response-resolver#resolver-instructions))
 * @param options Options object to customize the behavior of the mock. ([see more](https://mswjs.io/docs/api/graphql#handler-options))
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockProfilesQuery(
 *   ({ query, variables }) => {
 *     const { after, first, before, last, where } = variables;
 *     return HttpResponse.json({
 *       data: { profiles }
 *     })
 *   },
 *   requestOptions
 * )
 */
export const mockProfilesQuery = (resolver: GraphQLResponseResolver<ProfilesQuery, ProfilesQueryVariables>, options?: RequestHandlerOptions) =>
  graphql.query<ProfilesQuery, ProfilesQueryVariables>(
    'Profiles',
    resolver,
    options
  )

/**
 * @param resolver A function that accepts [resolver arguments](https://mswjs.io/docs/api/graphql#resolver-argument) and must always return the instruction on what to do with the intercepted request. ([see more](https://mswjs.io/docs/concepts/response-resolver#resolver-instructions))
 * @param options Options object to customize the behavior of the mock. ([see more](https://mswjs.io/docs/api/graphql#handler-options))
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockProfileEntriesQuery(
 *   ({ query, variables }) => {
 *     const { after, first, before, last, where } = variables;
 *     return HttpResponse.json({
 *       data: { profileEntries }
 *     })
 *   },
 *   requestOptions
 * )
 */
export const mockProfileEntriesQuery = (resolver: GraphQLResponseResolver<ProfileEntriesQuery, ProfileEntriesQueryVariables>, options?: RequestHandlerOptions) =>
  graphql.query<ProfileEntriesQuery, ProfileEntriesQueryVariables>(
    'ProfileEntries',
    resolver,
    options
  )

/**
 * @param resolver A function that accepts [resolver arguments](https://mswjs.io/docs/api/graphql#resolver-argument) and must always return the instruction on what to do with the intercepted request. ([see more](https://mswjs.io/docs/concepts/response-resolver#resolver-instructions))
 * @param options Options object to customize the behavior of the mock. ([see more](https://mswjs.io/docs/api/graphql#handler-options))
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockProfileEntryQuery(
 *   ({ query, variables }) => {
 *     const { id } = variables;
 *     return HttpResponse.json({
 *       data: { profileEntry }
 *     })
 *   },
 *   requestOptions
 * )
 */
export const mockProfileEntryQuery = (resolver: GraphQLResponseResolver<ProfileEntryQuery, ProfileEntryQueryVariables>, options?: RequestHandlerOptions) =>
  graphql.query<ProfileEntryQuery, ProfileEntryQueryVariables>(
    'ProfileEntry',
    resolver,
    options
  )

/**
 * @param resolver A function that accepts [resolver arguments](https://mswjs.io/docs/api/graphql#resolver-argument) and must always return the instruction on what to do with the intercepted request. ([see more](https://mswjs.io/docs/concepts/response-resolver#resolver-instructions))
 * @param options Options object to customize the behavior of the mock. ([see more](https://mswjs.io/docs/api/graphql#handler-options))
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockUsersQuery(
 *   ({ query, variables }) => {
 *     const { after, first, before, last, where } = variables;
 *     return HttpResponse.json({
 *       data: { users }
 *     })
 *   },
 *   requestOptions
 * )
 */
export const mockUsersQuery = (resolver: GraphQLResponseResolver<UsersQuery, UsersQueryVariables>, options?: RequestHandlerOptions) =>
  graphql.query<UsersQuery, UsersQueryVariables>(
    'Users',
    resolver,
    options
  )
