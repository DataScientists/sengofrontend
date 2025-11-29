import logo from "@assets/logo.svg";
import { Icon, Image, Menu } from "@chakra-ui/react";
import { Box } from "@components/ui/atoms/Box";
import { Flex } from "@components/ui/atoms/Flex";
import { useAuthContext } from "@shared/auth";
import { HamburgerMenu, Logout } from "iconsax-reactjs";
import { memo, useCallback, useState } from "react";
import { useNavigate } from "react-router";

import { MobileMenuContent } from "./MobileMenuContent";

export const HamburgerHeaderMenu: React.FC = memo(() => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { logout } = useAuthContext();

  const handleLogoClick = useCallback(() => {
    void navigate("/");
  }, [navigate]);

  const handleLogOut = useCallback(() => {
    void logout();
  }, [logout]);

  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      w="full"
      px="4"
      py="3"
      bg="body.50"
      boxShadow="0 2px 10px 0 rgba(236, 238, 241, 0.70)"
      position="sticky"
      top="0"
      zIndex="1000"
    >
      <Flex gap="8px" alignItems="center">
        <Image
          src={logo}
          height="24px"
          width="28px"
          cursor="pointer"
          onClick={handleLogoClick}
        />

        <Menu.Root
          open={isMenuOpen}
          onOpenChange={(e) => {
            setIsMenuOpen(e.open);
          }}
          positioning={{
            placement: "bottom-start",
            gutter: 8,
          }}
        >
          <Menu.Trigger asChild>
            <Box
              cursor="pointer"
              p="2"
              borderRadius="8px"
              bg={isMenuOpen ? "brand.50" : "transparent"}
              _hover={{ bg: "brand.50" }}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Icon css={{ height: "20px", width: "20px" }}>
                <HamburgerMenu size="20" color="#6E6789" variant="Linear" />
              </Icon>
            </Box>
          </Menu.Trigger>

          <Menu.Positioner>
            <MobileMenuContent
              onClose={() => {
                setIsMenuOpen(false);
              }}
            />
          </Menu.Positioner>
        </Menu.Root>
      </Flex>

      <Box
        cursor="pointer"
        onClick={handleLogOut}
        p="2"
        borderRadius="8px"
        _hover={{ bg: "brand.50" }}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Icon css={{ height: "20px", width: "20px" }}>
          <Logout size="20" color="#6E6789" variant="Linear" />
        </Icon>
      </Box>
    </Flex>
  );
});

HamburgerHeaderMenu.displayName = "HamburgerHeaderMenu";
