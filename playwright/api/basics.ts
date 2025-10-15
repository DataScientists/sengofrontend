import { APIRequestContext } from '@playwright/test';

interface User {
  email: string;
  password: string;
}

interface LoginResponse {
  login: {
    accessToken: string;
    refreshToken: string;
    errors: [
      {
        message: string;
        code: string;
      },
    ];
    me: {
      id: string;
    };
  };
}

interface ApiResponse<T> {
  data: T;
}

export class BasicApiService {
  readonly request: APIRequestContext;

  constructor(request: APIRequestContext) {
    this.request = request;
  }

  async logInUserViaApi(user: User): Promise<ApiResponse<LoginResponse>> {
    const query = `mutation Login{
            login(input :{email:"${user.email}", password: "${user.password}"}) {
                accessToken
                refreshToken
                errors: errors {
                    code
                    message
                }
                me{
                    id
                }
            }
        }`;

    const loginResponse = await this.request.post(process.env.API_URL || '', {
      data: { query },
    });
    const loginResponseJson = await loginResponse.json();
    console.log(loginResponseJson);

    return loginResponseJson as ApiResponse<LoginResponse>;
  }
}
