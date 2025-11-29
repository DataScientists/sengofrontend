import { Button, Flex, Link, Stack, Text } from "@components/ui/atoms";
import { AuthCard } from "@components/ui/molecules";

import { EmailInput, PasswordInput } from "./Fields";
import { LoginFormProvider, useLoginFormContext } from "./Provider";

export const LoginForm: React.FC = () => {
  return (
    <LoginFormProvider>
      <Component />
    </LoginFormProvider>
  );
};

const Component = () => {
  const {
    generalError,
    isSubmitting,
    formik: { handleSubmit, isValid, dirty },
  } = useLoginFormContext();

  return (
    <form
      onSubmit={handleSubmit}
      autoComplete="off"
      style={{ maxWidth: "500px" }}
    >
      <input
        type="text"
        name="fakeusernameremembered"
        id="fakeusernameremembered"
        style={{ display: "none" }}
        autoComplete="off"
      />
      <input
        type="password"
        name="fakepasswordremembered"
        id="fakepasswordremembered"
        style={{ display: "none" }}
        autoComplete="new-password"
      />
      <AuthCard>
        <Stack gap="264px" p="16px">
          <Stack gap="48px">
            <Stack gap="32px">
              <Stack gap="24px">
                <Stack gap="16px">
                  <Text fontSize="30px" fontWeight="700" color="title.dark">
                    Hello, Kuzuzangpola
                  </Text>
                </Stack>
                <EmailInput />
                <Stack gap="8px" width="full">
                  <Flex
                    alignItems="center"
                    mb="-28px"
                    justifyContent="flex-end"
                  >
                    <Link
                      href="#"
                      fontSize="13px"
                      fontWeight="500"
                      color="brand"
                      whiteSpace="nowrap"
                    >
                      Forgot password
                    </Link>
                  </Flex>
                  <PasswordInput />
                </Stack>
                {generalError && (
                  <Text fontSize="13px" color="red.1050">
                    {generalError}
                  </Text>
                )}
              </Stack>

              <Button
                type="submit"
                loading={isSubmitting}
                disabled={isSubmitting || !dirty || !isValid}
                height="42px"
                width="full"
                visual="primary"
              >
                Log In
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </AuthCard>
    </form>
  );
};
