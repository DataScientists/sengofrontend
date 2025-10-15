/* eslint-disable @typescript-eslint/no-redeclare @typescript-eslint/no-use-before-define,@typescript-eslint/no-unused-vars,no-prototype-builtins */
import type { AuthPayload, CreateProfileInput, CreateTodoInput, CreateUserInput, LoginInput, Node, PageInfo, Profile, ProfileConnection, ProfileEdge, ProfileTitleGroup, ProfileWhereInput, RefreshTokenPayload, Todo, TodoConnection, TodoEdge, TodoWhereInput, UpdateProfileInput, UpdateTodoInput, UpdateUserInput, User, UserConnection, UserEdge, UserWhereInput, TodoStatus } from './index.mock';

export const mockAuthPayload = (overrides?: Partial<AuthPayload>): { __typename: 'AuthPayload' } & AuthPayload => {
    return {
        __typename: 'AuthPayload',
        accessToken: overrides && overrides.hasOwnProperty('accessToken') ? overrides.accessToken! : 'vorax',
        refreshToken: overrides && overrides.hasOwnProperty('refreshToken') ? overrides.refreshToken! : 'temperantia',
        user: overrides && overrides.hasOwnProperty('user') ? overrides.user! : mockUser(),
    };
};

export const mockCreateProfileInput = (overrides?: Partial<CreateProfileInput>): CreateProfileInput => {
    return {
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'corroboro',
        sourceFile: overrides && overrides.hasOwnProperty('sourceFile') ? overrides.sourceFile! : 'dignissimos',
        title: overrides && overrides.hasOwnProperty('title') ? overrides.title! : 'thymbra',
        urn: overrides && overrides.hasOwnProperty('urn') ? overrides.urn! : 'delectus',
    };
};

export const mockCreateTodoInput = (overrides?: Partial<CreateTodoInput>): CreateTodoInput => {
    return {
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'consectetur',
        priority: overrides && overrides.hasOwnProperty('priority') ? overrides.priority! : 1555,
        status: overrides && overrides.hasOwnProperty('status') ? overrides.status! : ('COMPLETED' as TodoStatus),
        userID: overrides && overrides.hasOwnProperty('userID') ? overrides.userID! : '8dd72d6a-62e5-4907-b7bc-292180d61c31',
    };
};

export const mockCreateUserInput = (overrides?: Partial<CreateUserInput>): CreateUserInput => {
    return {
        age: overrides && overrides.hasOwnProperty('age') ? overrides.age! : 9451,
        email: overrides && overrides.hasOwnProperty('email') ? overrides.email! : 'amoveo',
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'neque',
        password: overrides && overrides.hasOwnProperty('password') ? overrides.password! : 'acervus',
    };
};

export const mockLoginInput = (overrides?: Partial<LoginInput>): LoginInput => {
    return {
        email: overrides && overrides.hasOwnProperty('email') ? overrides.email! : 'truculenter',
        password: overrides && overrides.hasOwnProperty('password') ? overrides.password! : 'copiose',
    };
};

export const mockNode = (overrides?: Partial<Node>): { __typename: 'Node' } & Node => {
    return {
        __typename: 'Node',
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : '85bb2f34-7c86-495f-9cfd-ce25b025cdba',
    };
};

export const mockPageInfo = (overrides?: Partial<PageInfo>): { __typename: 'PageInfo' } & PageInfo => {
    return {
        __typename: 'PageInfo',
        endCursor: overrides && overrides.hasOwnProperty('endCursor') ? overrides.endCursor! : string,
        hasNextPage: overrides && overrides.hasOwnProperty('hasNextPage') ? overrides.hasNextPage! : true,
        hasPreviousPage: overrides && overrides.hasOwnProperty('hasPreviousPage') ? overrides.hasPreviousPage! : false,
        startCursor: overrides && overrides.hasOwnProperty('startCursor') ? overrides.startCursor! : string,
    };
};

export const mockProfile = (overrides?: Partial<Profile>): { __typename: 'Profile' } & Profile => {
    return {
        __typename: 'Profile',
        createdAt: overrides && overrides.hasOwnProperty('createdAt') ? overrides.createdAt! : 'valetudo',
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : '03d26b9d-1d30-4e29-8522-42f00fa8cf27',
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'viridis',
        sourceFile: overrides && overrides.hasOwnProperty('sourceFile') ? overrides.sourceFile! : 'aestus',
        title: overrides && overrides.hasOwnProperty('title') ? overrides.title! : 'succurro',
        updatedAt: overrides && overrides.hasOwnProperty('updatedAt') ? overrides.updatedAt! : 'titulus',
        urn: overrides && overrides.hasOwnProperty('urn') ? overrides.urn! : 'cohibeo',
    };
};

export const mockProfileConnection = (overrides?: Partial<ProfileConnection>): { __typename: 'ProfileConnection' } & ProfileConnection => {
    return {
        __typename: 'ProfileConnection',
        edges: overrides && overrides.hasOwnProperty('edges') ? overrides.edges! : [mockProfileEdge()],
        pageInfo: overrides && overrides.hasOwnProperty('pageInfo') ? overrides.pageInfo! : mockPageInfo(),
        totalCount: overrides && overrides.hasOwnProperty('totalCount') ? overrides.totalCount! : 9266,
    };
};

export const mockProfileEdge = (overrides?: Partial<ProfileEdge>): { __typename: 'ProfileEdge' } & ProfileEdge => {
    return {
        __typename: 'ProfileEdge',
        cursor: overrides && overrides.hasOwnProperty('cursor') ? overrides.cursor! : string,
        node: overrides && overrides.hasOwnProperty('node') ? overrides.node! : mockProfile(),
    };
};

export const mockProfileTitleGroup = (overrides?: Partial<ProfileTitleGroup>): { __typename: 'ProfileTitleGroup' } & ProfileTitleGroup => {
    return {
        __typename: 'ProfileTitleGroup',
        count: overrides && overrides.hasOwnProperty('count') ? overrides.count! : 1696,
        title: overrides && overrides.hasOwnProperty('title') ? overrides.title! : 'dapifer',
    };
};

export const mockProfileWhereInput = (overrides?: Partial<ProfileWhereInput>): ProfileWhereInput => {
    return {
        and: overrides && overrides.hasOwnProperty('and') ? overrides.and! : [mockProfileWhereInput()],
        createdAt: overrides && overrides.hasOwnProperty('createdAt') ? overrides.createdAt! : string,
        createdAtGT: overrides && overrides.hasOwnProperty('createdAtGT') ? overrides.createdAtGT! : string,
        createdAtGTE: overrides && overrides.hasOwnProperty('createdAtGTE') ? overrides.createdAtGTE! : string,
        createdAtIn: overrides && overrides.hasOwnProperty('createdAtIn') ? overrides.createdAtIn! : [string],
        createdAtLT: overrides && overrides.hasOwnProperty('createdAtLT') ? overrides.createdAtLT! : string,
        createdAtLTE: overrides && overrides.hasOwnProperty('createdAtLTE') ? overrides.createdAtLTE! : string,
        createdAtNEQ: overrides && overrides.hasOwnProperty('createdAtNEQ') ? overrides.createdAtNEQ! : string,
        createdAtNotIn: overrides && overrides.hasOwnProperty('createdAtNotIn') ? overrides.createdAtNotIn! : [string],
        hasTodos: overrides && overrides.hasOwnProperty('hasTodos') ? overrides.hasTodos! : false,
        hasTodosWith: overrides && overrides.hasOwnProperty('hasTodosWith') ? overrides.hasTodosWith! : [mockTodoWhereInput()],
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : '9abb83bb-dc75-4dc4-aeb1-187cef0f803e',
        idGT: overrides && overrides.hasOwnProperty('idGT') ? overrides.idGT! : '1f1a7253-820a-41d3-bae1-1dcc351a0a90',
        idGTE: overrides && overrides.hasOwnProperty('idGTE') ? overrides.idGTE! : '4a613577-c590-48c0-8afe-3e5ad0d3d4c2',
        idIn: overrides && overrides.hasOwnProperty('idIn') ? overrides.idIn! : ['ec1613e4-af6c-4cb0-a2d1-09d26f66bc89'],
        idLT: overrides && overrides.hasOwnProperty('idLT') ? overrides.idLT! : '335c1f76-2b35-4aa3-ab85-073d1c8795c4',
        idLTE: overrides && overrides.hasOwnProperty('idLTE') ? overrides.idLTE! : 'c1a03bd7-4771-451f-9b17-e42f2617b695',
        idNEQ: overrides && overrides.hasOwnProperty('idNEQ') ? overrides.idNEQ! : '8dc0d3f9-ea11-427e-9e10-c60fac702d59',
        idNotIn: overrides && overrides.hasOwnProperty('idNotIn') ? overrides.idNotIn! : ['ffb165b2-fb33-4913-9b93-bddc4d97a3a8'],
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'esse',
        nameContains: overrides && overrides.hasOwnProperty('nameContains') ? overrides.nameContains! : 'ars',
        nameContainsFold: overrides && overrides.hasOwnProperty('nameContainsFold') ? overrides.nameContainsFold! : 'velum',
        nameEqualFold: overrides && overrides.hasOwnProperty('nameEqualFold') ? overrides.nameEqualFold! : 'contigo',
        nameGT: overrides && overrides.hasOwnProperty('nameGT') ? overrides.nameGT! : 'ipsa',
        nameGTE: overrides && overrides.hasOwnProperty('nameGTE') ? overrides.nameGTE! : 'alius',
        nameHasPrefix: overrides && overrides.hasOwnProperty('nameHasPrefix') ? overrides.nameHasPrefix! : 'corporis',
        nameHasSuffix: overrides && overrides.hasOwnProperty('nameHasSuffix') ? overrides.nameHasSuffix! : 'admoveo',
        nameIn: overrides && overrides.hasOwnProperty('nameIn') ? overrides.nameIn! : ['vel'],
        nameLT: overrides && overrides.hasOwnProperty('nameLT') ? overrides.nameLT! : 'terminatio',
        nameLTE: overrides && overrides.hasOwnProperty('nameLTE') ? overrides.nameLTE! : 'volva',
        nameNEQ: overrides && overrides.hasOwnProperty('nameNEQ') ? overrides.nameNEQ! : 'condico',
        nameNotIn: overrides && overrides.hasOwnProperty('nameNotIn') ? overrides.nameNotIn! : ['attollo'],
        not: overrides && overrides.hasOwnProperty('not') ? overrides.not! : mockProfileWhereInput(),
        or: overrides && overrides.hasOwnProperty('or') ? overrides.or! : [mockProfileWhereInput()],
        sourceFile: overrides && overrides.hasOwnProperty('sourceFile') ? overrides.sourceFile! : 'veritatis',
        sourceFileContains: overrides && overrides.hasOwnProperty('sourceFileContains') ? overrides.sourceFileContains! : 'crur',
        sourceFileContainsFold: overrides && overrides.hasOwnProperty('sourceFileContainsFold') ? overrides.sourceFileContainsFold! : 'temporibus',
        sourceFileEqualFold: overrides && overrides.hasOwnProperty('sourceFileEqualFold') ? overrides.sourceFileEqualFold! : 'tepidus',
        sourceFileGT: overrides && overrides.hasOwnProperty('sourceFileGT') ? overrides.sourceFileGT! : 'alius',
        sourceFileGTE: overrides && overrides.hasOwnProperty('sourceFileGTE') ? overrides.sourceFileGTE! : 'aperte',
        sourceFileHasPrefix: overrides && overrides.hasOwnProperty('sourceFileHasPrefix') ? overrides.sourceFileHasPrefix! : 'templum',
        sourceFileHasSuffix: overrides && overrides.hasOwnProperty('sourceFileHasSuffix') ? overrides.sourceFileHasSuffix! : 'sonitus',
        sourceFileIn: overrides && overrides.hasOwnProperty('sourceFileIn') ? overrides.sourceFileIn! : ['ambulo'],
        sourceFileLT: overrides && overrides.hasOwnProperty('sourceFileLT') ? overrides.sourceFileLT! : 'quod',
        sourceFileLTE: overrides && overrides.hasOwnProperty('sourceFileLTE') ? overrides.sourceFileLTE! : 'advenio',
        sourceFileNEQ: overrides && overrides.hasOwnProperty('sourceFileNEQ') ? overrides.sourceFileNEQ! : 'quidem',
        sourceFileNotIn: overrides && overrides.hasOwnProperty('sourceFileNotIn') ? overrides.sourceFileNotIn! : ['aperiam'],
        title: overrides && overrides.hasOwnProperty('title') ? overrides.title! : 'temeritas',
        titleContains: overrides && overrides.hasOwnProperty('titleContains') ? overrides.titleContains! : 'eum',
        titleContainsFold: overrides && overrides.hasOwnProperty('titleContainsFold') ? overrides.titleContainsFold! : 'valeo',
        titleEqualFold: overrides && overrides.hasOwnProperty('titleEqualFold') ? overrides.titleEqualFold! : 'textilis',
        titleGT: overrides && overrides.hasOwnProperty('titleGT') ? overrides.titleGT! : 'uredo',
        titleGTE: overrides && overrides.hasOwnProperty('titleGTE') ? overrides.titleGTE! : 'sub',
        titleHasPrefix: overrides && overrides.hasOwnProperty('titleHasPrefix') ? overrides.titleHasPrefix! : 'balbus',
        titleHasSuffix: overrides && overrides.hasOwnProperty('titleHasSuffix') ? overrides.titleHasSuffix! : 'tot',
        titleIn: overrides && overrides.hasOwnProperty('titleIn') ? overrides.titleIn! : ['aptus'],
        titleLT: overrides && overrides.hasOwnProperty('titleLT') ? overrides.titleLT! : 'admoveo',
        titleLTE: overrides && overrides.hasOwnProperty('titleLTE') ? overrides.titleLTE! : 'voluntarius',
        titleNEQ: overrides && overrides.hasOwnProperty('titleNEQ') ? overrides.titleNEQ! : 'verumtamen',
        titleNotIn: overrides && overrides.hasOwnProperty('titleNotIn') ? overrides.titleNotIn! : ['laboriosam'],
        urn: overrides && overrides.hasOwnProperty('urn') ? overrides.urn! : 'vilis',
        urnContains: overrides && overrides.hasOwnProperty('urnContains') ? overrides.urnContains! : 'sustineo',
        urnContainsFold: overrides && overrides.hasOwnProperty('urnContainsFold') ? overrides.urnContainsFold! : 'textor',
        urnEqualFold: overrides && overrides.hasOwnProperty('urnEqualFold') ? overrides.urnEqualFold! : 'attollo',
        urnGT: overrides && overrides.hasOwnProperty('urnGT') ? overrides.urnGT! : 'creptio',
        urnGTE: overrides && overrides.hasOwnProperty('urnGTE') ? overrides.urnGTE! : 'infit',
        urnHasPrefix: overrides && overrides.hasOwnProperty('urnHasPrefix') ? overrides.urnHasPrefix! : 'nam',
        urnHasSuffix: overrides && overrides.hasOwnProperty('urnHasSuffix') ? overrides.urnHasSuffix! : 'cogito',
        urnIn: overrides && overrides.hasOwnProperty('urnIn') ? overrides.urnIn! : ['arx'],
        urnLT: overrides && overrides.hasOwnProperty('urnLT') ? overrides.urnLT! : 'censura',
        urnLTE: overrides && overrides.hasOwnProperty('urnLTE') ? overrides.urnLTE! : 'spiculum',
        urnNEQ: overrides && overrides.hasOwnProperty('urnNEQ') ? overrides.urnNEQ! : 'suffoco',
        urnNotIn: overrides && overrides.hasOwnProperty('urnNotIn') ? overrides.urnNotIn! : ['viscus'],
    };
};

export const mockRefreshTokenPayload = (overrides?: Partial<RefreshTokenPayload>): { __typename: 'RefreshTokenPayload' } & RefreshTokenPayload => {
    return {
        __typename: 'RefreshTokenPayload',
        accessToken: overrides && overrides.hasOwnProperty('accessToken') ? overrides.accessToken! : 'degusto',
        refreshToken: overrides && overrides.hasOwnProperty('refreshToken') ? overrides.refreshToken! : 'contigo',
    };
};

export const mockTodo = (overrides?: Partial<Todo>): { __typename: 'Todo' } & Todo => {
    return {
        __typename: 'Todo',
        createdAt: overrides && overrides.hasOwnProperty('createdAt') ? overrides.createdAt! : 'amo',
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : 'acbfc1fd-8f84-4ca5-8204-f72522ce5ea9',
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'demens',
        priority: overrides && overrides.hasOwnProperty('priority') ? overrides.priority! : 6780,
        status: overrides && overrides.hasOwnProperty('status') ? overrides.status! : ('COMPLETED' as TodoStatus),
        updatedAt: overrides && overrides.hasOwnProperty('updatedAt') ? overrides.updatedAt! : 'sortitus',
        userID: overrides && overrides.hasOwnProperty('userID') ? overrides.userID! : '43344a17-f1db-4950-a137-e829c42f9f15',
    };
};

export const mockTodoConnection = (overrides?: Partial<TodoConnection>): { __typename: 'TodoConnection' } & TodoConnection => {
    return {
        __typename: 'TodoConnection',
        edges: overrides && overrides.hasOwnProperty('edges') ? overrides.edges! : [mockTodoEdge()],
        pageInfo: overrides && overrides.hasOwnProperty('pageInfo') ? overrides.pageInfo! : mockPageInfo(),
        totalCount: overrides && overrides.hasOwnProperty('totalCount') ? overrides.totalCount! : 4859,
    };
};

export const mockTodoEdge = (overrides?: Partial<TodoEdge>): { __typename: 'TodoEdge' } & TodoEdge => {
    return {
        __typename: 'TodoEdge',
        cursor: overrides && overrides.hasOwnProperty('cursor') ? overrides.cursor! : string,
        node: overrides && overrides.hasOwnProperty('node') ? overrides.node! : mockTodo(),
    };
};

export const mockTodoWhereInput = (overrides?: Partial<TodoWhereInput>): TodoWhereInput => {
    return {
        and: overrides && overrides.hasOwnProperty('and') ? overrides.and! : [mockTodoWhereInput()],
        createdAt: overrides && overrides.hasOwnProperty('createdAt') ? overrides.createdAt! : string,
        createdAtGT: overrides && overrides.hasOwnProperty('createdAtGT') ? overrides.createdAtGT! : string,
        createdAtGTE: overrides && overrides.hasOwnProperty('createdAtGTE') ? overrides.createdAtGTE! : string,
        createdAtIn: overrides && overrides.hasOwnProperty('createdAtIn') ? overrides.createdAtIn! : [string],
        createdAtLT: overrides && overrides.hasOwnProperty('createdAtLT') ? overrides.createdAtLT! : string,
        createdAtLTE: overrides && overrides.hasOwnProperty('createdAtLTE') ? overrides.createdAtLTE! : string,
        createdAtNEQ: overrides && overrides.hasOwnProperty('createdAtNEQ') ? overrides.createdAtNEQ! : string,
        createdAtNotIn: overrides && overrides.hasOwnProperty('createdAtNotIn') ? overrides.createdAtNotIn! : [string],
        hasUser: overrides && overrides.hasOwnProperty('hasUser') ? overrides.hasUser! : false,
        hasUserWith: overrides && overrides.hasOwnProperty('hasUserWith') ? overrides.hasUserWith! : [mockUserWhereInput()],
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : '2b7093a2-518e-42f1-afe1-ec221400f77a',
        idGT: overrides && overrides.hasOwnProperty('idGT') ? overrides.idGT! : '7969a664-3a75-4162-838b-4193c23c35d7',
        idGTE: overrides && overrides.hasOwnProperty('idGTE') ? overrides.idGTE! : '410864c4-8f66-40c9-8a76-1f82f043e630',
        idIn: overrides && overrides.hasOwnProperty('idIn') ? overrides.idIn! : ['e4b189e5-8172-4baa-8f56-ca5268383451'],
        idLT: overrides && overrides.hasOwnProperty('idLT') ? overrides.idLT! : '84a940e8-a653-4f1a-b496-8a52e1918ef9',
        idLTE: overrides && overrides.hasOwnProperty('idLTE') ? overrides.idLTE! : '14c0c026-fc89-4e48-8d61-fdb12d3e922a',
        idNEQ: overrides && overrides.hasOwnProperty('idNEQ') ? overrides.idNEQ! : '33248141-d1ba-4493-a236-999790723db3',
        idNotIn: overrides && overrides.hasOwnProperty('idNotIn') ? overrides.idNotIn! : ['83426ee8-a4f5-4e00-a1c0-9f80c8fd5be5'],
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'decerno',
        nameContains: overrides && overrides.hasOwnProperty('nameContains') ? overrides.nameContains! : 'defessus',
        nameContainsFold: overrides && overrides.hasOwnProperty('nameContainsFold') ? overrides.nameContainsFold! : 'allatus',
        nameEqualFold: overrides && overrides.hasOwnProperty('nameEqualFold') ? overrides.nameEqualFold! : 'arbor',
        nameGT: overrides && overrides.hasOwnProperty('nameGT') ? overrides.nameGT! : 'ante',
        nameGTE: overrides && overrides.hasOwnProperty('nameGTE') ? overrides.nameGTE! : 'titulus',
        nameHasPrefix: overrides && overrides.hasOwnProperty('nameHasPrefix') ? overrides.nameHasPrefix! : 'adulatio',
        nameHasSuffix: overrides && overrides.hasOwnProperty('nameHasSuffix') ? overrides.nameHasSuffix! : 'exercitationem',
        nameIn: overrides && overrides.hasOwnProperty('nameIn') ? overrides.nameIn! : ['bonus'],
        nameLT: overrides && overrides.hasOwnProperty('nameLT') ? overrides.nameLT! : 'vel',
        nameLTE: overrides && overrides.hasOwnProperty('nameLTE') ? overrides.nameLTE! : 'casus',
        nameNEQ: overrides && overrides.hasOwnProperty('nameNEQ') ? overrides.nameNEQ! : 'officia',
        nameNotIn: overrides && overrides.hasOwnProperty('nameNotIn') ? overrides.nameNotIn! : ['cribro'],
        not: overrides && overrides.hasOwnProperty('not') ? overrides.not! : mockTodoWhereInput(),
        or: overrides && overrides.hasOwnProperty('or') ? overrides.or! : [mockTodoWhereInput()],
        priority: overrides && overrides.hasOwnProperty('priority') ? overrides.priority! : 2710,
        priorityGT: overrides && overrides.hasOwnProperty('priorityGT') ? overrides.priorityGT! : 9002,
        priorityGTE: overrides && overrides.hasOwnProperty('priorityGTE') ? overrides.priorityGTE! : 2002,
        priorityIn: overrides && overrides.hasOwnProperty('priorityIn') ? overrides.priorityIn! : [3648],
        priorityLT: overrides && overrides.hasOwnProperty('priorityLT') ? overrides.priorityLT! : 2696,
        priorityLTE: overrides && overrides.hasOwnProperty('priorityLTE') ? overrides.priorityLTE! : 2978,
        priorityNEQ: overrides && overrides.hasOwnProperty('priorityNEQ') ? overrides.priorityNEQ! : 5248,
        priorityNotIn: overrides && overrides.hasOwnProperty('priorityNotIn') ? overrides.priorityNotIn! : [4959],
        status: overrides && overrides.hasOwnProperty('status') ? overrides.status! : ('COMPLETED' as TodoStatus),
        statusIn: overrides && overrides.hasOwnProperty('statusIn') ? overrides.statusIn! : [('COMPLETED' as TodoStatus)],
        statusNEQ: overrides && overrides.hasOwnProperty('statusNEQ') ? overrides.statusNEQ! : ('COMPLETED' as TodoStatus),
        statusNotIn: overrides && overrides.hasOwnProperty('statusNotIn') ? overrides.statusNotIn! : [('COMPLETED' as TodoStatus)],
        userID: overrides && overrides.hasOwnProperty('userID') ? overrides.userID! : '08fd5278-5655-44cf-bae1-670cd842d606',
        userIDContains: overrides && overrides.hasOwnProperty('userIDContains') ? overrides.userIDContains! : 'aaf2b560-2992-48bd-aaf1-c3d0b7096c9e',
        userIDContainsFold: overrides && overrides.hasOwnProperty('userIDContainsFold') ? overrides.userIDContainsFold! : 'c9e6140c-83c7-46e6-8a8c-f70e653d10c7',
        userIDEqualFold: overrides && overrides.hasOwnProperty('userIDEqualFold') ? overrides.userIDEqualFold! : 'ebf272bf-0f18-4e60-8102-079a4454f003',
        userIDGT: overrides && overrides.hasOwnProperty('userIDGT') ? overrides.userIDGT! : '4a6cd76e-32ea-461a-bc7e-0d9a461d661d',
        userIDGTE: overrides && overrides.hasOwnProperty('userIDGTE') ? overrides.userIDGTE! : '9cf2cce7-cc1c-4368-9c58-9fb78c2a1177',
        userIDHasPrefix: overrides && overrides.hasOwnProperty('userIDHasPrefix') ? overrides.userIDHasPrefix! : '92846328-74c0-4ea4-a44d-86557b3c9909',
        userIDHasSuffix: overrides && overrides.hasOwnProperty('userIDHasSuffix') ? overrides.userIDHasSuffix! : '102244b8-6d13-49e0-a09d-9814d2e13714',
        userIDIn: overrides && overrides.hasOwnProperty('userIDIn') ? overrides.userIDIn! : ['f3de0cd0-70af-47b2-abd5-3779a22c7cd2'],
        userIDIsNil: overrides && overrides.hasOwnProperty('userIDIsNil') ? overrides.userIDIsNil! : true,
        userIDLT: overrides && overrides.hasOwnProperty('userIDLT') ? overrides.userIDLT! : 'aaa7cb8a-0ee1-408a-a717-26df717c9cb2',
        userIDLTE: overrides && overrides.hasOwnProperty('userIDLTE') ? overrides.userIDLTE! : 'c25079a6-ac2f-46f8-af3b-699c2a7b7bd7',
        userIDNEQ: overrides && overrides.hasOwnProperty('userIDNEQ') ? overrides.userIDNEQ! : 'e6d7faec-16f5-4b37-b9ae-ef43d228c5b8',
        userIDNotIn: overrides && overrides.hasOwnProperty('userIDNotIn') ? overrides.userIDNotIn! : ['7d6d6c51-1fd9-4431-820c-354b1b22e7d1'],
        userIDNotNil: overrides && overrides.hasOwnProperty('userIDNotNil') ? overrides.userIDNotNil! : true,
    };
};

export const mockUpdateProfileInput = (overrides?: Partial<UpdateProfileInput>): UpdateProfileInput => {
    return {
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : 'a941cc5d-20b3-4e18-b2c9-18c1f272a593',
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'magnam',
        sourceFile: overrides && overrides.hasOwnProperty('sourceFile') ? overrides.sourceFile! : 'corroboro',
        title: overrides && overrides.hasOwnProperty('title') ? overrides.title! : 'varietas',
        urn: overrides && overrides.hasOwnProperty('urn') ? overrides.urn! : 'celer',
    };
};

export const mockUpdateTodoInput = (overrides?: Partial<UpdateTodoInput>): UpdateTodoInput => {
    return {
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : '1aa8dc47-1fa2-4eea-a9d9-181496d360a8',
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'depopulo',
        priority: overrides && overrides.hasOwnProperty('priority') ? overrides.priority! : 71,
        status: overrides && overrides.hasOwnProperty('status') ? overrides.status! : ('COMPLETED' as TodoStatus),
        userID: overrides && overrides.hasOwnProperty('userID') ? overrides.userID! : 'd8c093e6-19fe-432f-b9d1-00b543035142',
    };
};

export const mockUpdateUserInput = (overrides?: Partial<UpdateUserInput>): UpdateUserInput => {
    return {
        age: overrides && overrides.hasOwnProperty('age') ? overrides.age! : 9462,
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : '0d6a9360-d92b-4660-b1e5-f14155047bdd',
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'velit',
    };
};

export const mockUser = (overrides?: Partial<User>): { __typename: 'User' } & User => {
    return {
        __typename: 'User',
        age: overrides && overrides.hasOwnProperty('age') ? overrides.age! : 667,
        createdAt: overrides && overrides.hasOwnProperty('createdAt') ? overrides.createdAt! : 'vulpes',
        email: overrides && overrides.hasOwnProperty('email') ? overrides.email! : 'natus',
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : 'b5756f00-51a6-422a-81a7-dc13ee6a6375',
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'supellex',
        todos: overrides && overrides.hasOwnProperty('todos') ? overrides.todos! : [mockTodo()],
        updatedAt: overrides && overrides.hasOwnProperty('updatedAt') ? overrides.updatedAt! : 'sint',
    };
};

export const mockUserConnection = (overrides?: Partial<UserConnection>): { __typename: 'UserConnection' } & UserConnection => {
    return {
        __typename: 'UserConnection',
        edges: overrides && overrides.hasOwnProperty('edges') ? overrides.edges! : [mockUserEdge()],
        pageInfo: overrides && overrides.hasOwnProperty('pageInfo') ? overrides.pageInfo! : mockPageInfo(),
        totalCount: overrides && overrides.hasOwnProperty('totalCount') ? overrides.totalCount! : 3509,
    };
};

export const mockUserEdge = (overrides?: Partial<UserEdge>): { __typename: 'UserEdge' } & UserEdge => {
    return {
        __typename: 'UserEdge',
        cursor: overrides && overrides.hasOwnProperty('cursor') ? overrides.cursor! : string,
        node: overrides && overrides.hasOwnProperty('node') ? overrides.node! : mockUser(),
    };
};

export const mockUserWhereInput = (overrides?: Partial<UserWhereInput>): UserWhereInput => {
    return {
        age: overrides && overrides.hasOwnProperty('age') ? overrides.age! : 6583,
        ageGT: overrides && overrides.hasOwnProperty('ageGT') ? overrides.ageGT! : 4518,
        ageGTE: overrides && overrides.hasOwnProperty('ageGTE') ? overrides.ageGTE! : 9856,
        ageIn: overrides && overrides.hasOwnProperty('ageIn') ? overrides.ageIn! : [1026],
        ageLT: overrides && overrides.hasOwnProperty('ageLT') ? overrides.ageLT! : 6631,
        ageLTE: overrides && overrides.hasOwnProperty('ageLTE') ? overrides.ageLTE! : 4503,
        ageNEQ: overrides && overrides.hasOwnProperty('ageNEQ') ? overrides.ageNEQ! : 3385,
        ageNotIn: overrides && overrides.hasOwnProperty('ageNotIn') ? overrides.ageNotIn! : [2390],
        and: overrides && overrides.hasOwnProperty('and') ? overrides.and! : [mockUserWhereInput()],
        createdAt: overrides && overrides.hasOwnProperty('createdAt') ? overrides.createdAt! : string,
        createdAtGT: overrides && overrides.hasOwnProperty('createdAtGT') ? overrides.createdAtGT! : string,
        createdAtGTE: overrides && overrides.hasOwnProperty('createdAtGTE') ? overrides.createdAtGTE! : string,
        createdAtIn: overrides && overrides.hasOwnProperty('createdAtIn') ? overrides.createdAtIn! : [string],
        createdAtLT: overrides && overrides.hasOwnProperty('createdAtLT') ? overrides.createdAtLT! : string,
        createdAtLTE: overrides && overrides.hasOwnProperty('createdAtLTE') ? overrides.createdAtLTE! : string,
        createdAtNEQ: overrides && overrides.hasOwnProperty('createdAtNEQ') ? overrides.createdAtNEQ! : string,
        createdAtNotIn: overrides && overrides.hasOwnProperty('createdAtNotIn') ? overrides.createdAtNotIn! : [string],
        email: overrides && overrides.hasOwnProperty('email') ? overrides.email! : 'vir',
        emailContains: overrides && overrides.hasOwnProperty('emailContains') ? overrides.emailContains! : 'uredo',
        emailContainsFold: overrides && overrides.hasOwnProperty('emailContainsFold') ? overrides.emailContainsFold! : 'conitor',
        emailEqualFold: overrides && overrides.hasOwnProperty('emailEqualFold') ? overrides.emailEqualFold! : 'taceo',
        emailGT: overrides && overrides.hasOwnProperty('emailGT') ? overrides.emailGT! : 'ullus',
        emailGTE: overrides && overrides.hasOwnProperty('emailGTE') ? overrides.emailGTE! : 'titulus',
        emailHasPrefix: overrides && overrides.hasOwnProperty('emailHasPrefix') ? overrides.emailHasPrefix! : 'aspicio',
        emailHasSuffix: overrides && overrides.hasOwnProperty('emailHasSuffix') ? overrides.emailHasSuffix! : 'concido',
        emailIn: overrides && overrides.hasOwnProperty('emailIn') ? overrides.emailIn! : ['solvo'],
        emailLT: overrides && overrides.hasOwnProperty('emailLT') ? overrides.emailLT! : 'surculus',
        emailLTE: overrides && overrides.hasOwnProperty('emailLTE') ? overrides.emailLTE! : 'thorax',
        emailNEQ: overrides && overrides.hasOwnProperty('emailNEQ') ? overrides.emailNEQ! : 'velociter',
        emailNotIn: overrides && overrides.hasOwnProperty('emailNotIn') ? overrides.emailNotIn! : ['aggero'],
        hasTodos: overrides && overrides.hasOwnProperty('hasTodos') ? overrides.hasTodos! : false,
        hasTodosWith: overrides && overrides.hasOwnProperty('hasTodosWith') ? overrides.hasTodosWith! : [mockTodoWhereInput()],
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : '8d6f2fe0-311c-4269-a067-237aa769c02a',
        idGT: overrides && overrides.hasOwnProperty('idGT') ? overrides.idGT! : '75ffc7c4-0fc9-4c0a-9dbb-f5730b624348',
        idGTE: overrides && overrides.hasOwnProperty('idGTE') ? overrides.idGTE! : '73a6c5fc-2f47-4238-aeeb-1375c1934480',
        idIn: overrides && overrides.hasOwnProperty('idIn') ? overrides.idIn! : ['4421cc96-7a0f-4488-b46b-83240394c2aa'],
        idLT: overrides && overrides.hasOwnProperty('idLT') ? overrides.idLT! : '4aea0dc6-dec7-4616-b030-e4fcbc857266',
        idLTE: overrides && overrides.hasOwnProperty('idLTE') ? overrides.idLTE! : 'e1f9e409-f263-4fc2-ab29-6e4ed2a0454e',
        idNEQ: overrides && overrides.hasOwnProperty('idNEQ') ? overrides.idNEQ! : '218dc1af-b6aa-46ca-917d-5b7bf6e1a555',
        idNotIn: overrides && overrides.hasOwnProperty('idNotIn') ? overrides.idNotIn! : ['42c2fba3-0169-42c5-a5de-10a6f6c4c747'],
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'est',
        nameContains: overrides && overrides.hasOwnProperty('nameContains') ? overrides.nameContains! : 'amplexus',
        nameContainsFold: overrides && overrides.hasOwnProperty('nameContainsFold') ? overrides.nameContainsFold! : 'culpo',
        nameEqualFold: overrides && overrides.hasOwnProperty('nameEqualFold') ? overrides.nameEqualFold! : 'strues',
        nameGT: overrides && overrides.hasOwnProperty('nameGT') ? overrides.nameGT! : 'abstergo',
        nameGTE: overrides && overrides.hasOwnProperty('nameGTE') ? overrides.nameGTE! : 'alias',
        nameHasPrefix: overrides && overrides.hasOwnProperty('nameHasPrefix') ? overrides.nameHasPrefix! : 'sono',
        nameHasSuffix: overrides && overrides.hasOwnProperty('nameHasSuffix') ? overrides.nameHasSuffix! : 'admoneo',
        nameIn: overrides && overrides.hasOwnProperty('nameIn') ? overrides.nameIn! : ['acceptus'],
        nameLT: overrides && overrides.hasOwnProperty('nameLT') ? overrides.nameLT! : 'defaeco',
        nameLTE: overrides && overrides.hasOwnProperty('nameLTE') ? overrides.nameLTE! : 'auctus',
        nameNEQ: overrides && overrides.hasOwnProperty('nameNEQ') ? overrides.nameNEQ! : 'crustulum',
        nameNotIn: overrides && overrides.hasOwnProperty('nameNotIn') ? overrides.nameNotIn! : ['bene'],
        not: overrides && overrides.hasOwnProperty('not') ? overrides.not! : mockUserWhereInput(),
        or: overrides && overrides.hasOwnProperty('or') ? overrides.or! : [mockUserWhereInput()],
    };
};
