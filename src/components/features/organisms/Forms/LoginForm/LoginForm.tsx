import logo from '@assets/logo.svg';
import { Image } from '@chakra-ui/react';
import { Button, Flex, Group, Link, Stack, Text } from '@components/ui/atoms';
import { AuthCard, Divider } from '@components/ui/molecules';

import { EmailInput, PasswordInput } from './Fields';
import { LoginFormProvider, useLoginFormContext } from './Provider';

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
    <form onSubmit={handleSubmit} autoComplete="off">
      <input
        type="text"
        name="fakeusernameremembered"
        id="fakeusernameremembered"
        style={{ display: 'none' }}
        autoComplete="off"
      />
      <input
        type="password"
        name="fakepasswordremembered"
        id="fakepasswordremembered"
        style={{ display: 'none' }}
        autoComplete="new-password"
      />
      <AuthCard>
        <Stack gap="264px" p="16px">
          <Group cursor="button" flexWrap="nowrap" whiteSpace="nowrap">
            <Image src={logo} height="32px" width="37px" />
            <Text fontSize="18px" color="title.dark" fontWeight="700">
              Bhutan Payments
            </Text>
          </Group>

          <Stack gap="48px">
            <Stack gap="32px">
              <Stack gap="24px">
                <Stack gap="16px">
                  <Text fontSize="30px" fontWeight="700" color="title.dark">
                    Hello, Kuzuzangpola 👋
                  </Text>
                  <Text fontSize="14px" fontWeight="400" color="body.dark">
                    Get started with Bhutan&apos;s Premier Payment Solution
                  </Text>
                </Stack>
                <EmailInput />
                <Stack gap="8px" width="full">
                  <Flex alignItems="center" mb="-28px" justifyContent="flex-end">
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

            <Stack flexDir="column" alignItems="center" gap="24px">
              <Group width="full" alignItems="center" justifyContent="center" gap="12px">
                <Divider
                  position="absolute"
                  left="0"
                  right="0"
                  width="full"
                  height="1px"
                  opacity="0.5"
                />
                <Text fontSize="13px" color="body.dark" whiteSpace="nowrap">
                  {`New to Bhutan Payments`}?
                </Text>
                <Divider
                  position="absolute"
                  left="0"
                  right="0"
                  width="full"
                  height="1px"
                  opacity="0.5"
                />
              </Group>
              <Button
                type="button"
                width="full"
                height="42px"
                visual="secondary"
                data-testid="signUpButton"
              >
                Sign Up For Free
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </AuthCard>
    </form>
  );
};
