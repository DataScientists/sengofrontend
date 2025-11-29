import dummyAvatar from "@assets/dumy-avatars/1.png";
import { Menu } from "@chakra-ui/react";
import { Box } from "@components/ui/atoms/Box";
import { Flex } from "@components/ui/atoms/Flex";
import { Stack } from "@components/ui/atoms/Stack";
import { Text } from "@components/ui/atoms/Text";
import { Avatar } from "@components/ui/molecules/Avatar";
import { useMe } from "@store/me/hooks";
import { memo, useCallback } from "react";
import { useNavigate } from "react-router";

import { useMenuStructure, useSystemMenuStructure } from "../Menu/hooks";
import type { SidebarMenuItem } from "../Menu/types";
import { MobileMenuGroup } from "./MobileMenuGroup";
import { MobileMenuItem } from "./MobileMenuItem";

interface Props {
  onClose: () => void;
}

export const MobileMenuContent: React.FC<Props> = memo(({ onClose }) => {
  const navigate = useNavigate();
  const { me } = useMe();
  const menuStructure = useMenuStructure();
  const systemMenuStructure = useSystemMenuStructure();

  const handleItemClick = useCallback(() => {
    onClose();
  }, [onClose]);

  const handleNavigateToProfile = useCallback(() => {
    onClose();
  }, [navigate, onClose]);

  const renderMenuItem = useCallback(
    (menuItem: SidebarMenuItem) => {
      if (menuItem.type === "itemGroup") {
        return (
          <MobileMenuGroup
            key={menuItem.id}
            menuItem={menuItem}
            onItemClick={handleItemClick}
          />
        );
      }

      return (
        <MobileMenuItem
          key={menuItem.id}
          menuItem={menuItem}
          onItemClick={handleItemClick}
        />
      );
    },
    [handleItemClick],
  );

  return (
    <Menu.Content
      minW="320px"
      maxW="320px"
      maxH="calc(100vh - 80px)"
      boxShadow="0px 4px 20px rgba(0, 0, 0, 0.1)"
      borderRadius="12px"
      p="0"
      bg="body.50"
      overflowY="auto"
      css={{
        "::-webkit-scrollbar": { display: "none" },
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
    >
      <Stack display="flex" flexDirection="column" gap="32px" p="4" pb="8">
        {/* Profile Section */}
        <Flex
          display="flex"
          alignItems="center"
          gap="12px"
          px="2"
          py="3"
          cursor="pointer"
          onClick={handleNavigateToProfile}
          borderRadius="8px"
          transition="all 0.2s"
          _hover={{
            bg: "body.550/5",
          }}
        >
          <Avatar
            src={me?.avatar?.path ?? dummyAvatar}
            css={{
              width: "48px",
              height: "48px",
            }}
          />
          <Flex flexDirection="column" gap="2px">
            <Text fontSize="14px" fontWeight="600" color="title.dark">
              {me?.fullName ?? "Guest User"}
            </Text>
            <Text fontSize="12px" fontWeight="400" color="body.dark">
              View Profile
            </Text>
          </Flex>
        </Flex>

        {/* Payment Section */}
        <Flex flexDirection="column" gap="16px">
          <Box w="full" px="2">
            <Text
              fontSize="12px"
              fontWeight="500"
              textTransform="uppercase"
              color="body.dark"
              borderBottom="1px solid"
              borderColor="body.550/10"
              pb="2"
            >
              Payment
            </Text>
          </Box>
          <Stack display="flex" flexDirection="column" gap="8px">
            {menuStructure.map(renderMenuItem)}
          </Stack>
        </Flex>

        {/* System Section */}
        <Flex flexDirection="column" gap="16px">
          <Box w="full" px="2">
            <Text
              fontSize="12px"
              fontWeight="500"
              textTransform="uppercase"
              color="body.dark"
              borderBottom="1px solid"
              borderColor="body.550/10"
              pb="2"
            >
              System
            </Text>
          </Box>
          <Stack display="flex" flexDirection="column" gap="8px">
            {systemMenuStructure.map(renderMenuItem)}
          </Stack>
        </Flex>
      </Stack>
    </Menu.Content>
  );
});

MobileMenuContent.displayName = "MobileMenuContent";
