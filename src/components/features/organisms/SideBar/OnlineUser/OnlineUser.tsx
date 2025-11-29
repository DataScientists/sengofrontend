import { Box } from "@components/ui/atoms/Box";
import { Flex } from "@components/ui/atoms/Flex";
import { Text } from "@components/ui/atoms/Text";
import { Avatar } from "@components/ui/molecules/Avatar";
import { useMe } from "@store/me/hooks";
import { useNavigate } from "react-router";

type Props = {
  isExpanded?: boolean;
};

export const OnlineUser: React.FC<Props> = ({ isExpanded }) => {
  //TODO: pass these from props
  const navigate = useNavigate();
  const { me } = useMe();

  return (
    <Flex
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap="8px"
      position="sticky"
      top="0"
      bg="white"
      pb="12px"
      zIndex="2"
    >
      <Box display="flex" alignItems="center" gap="10px">
        <Avatar
          css={{
            width: isExpanded ? "64px" : "24px",
            height: isExpanded ? "64px" : "24px",
            transition: "all 0.2s ease",
          }}
          cursor="pointer"
        />
      </Box>
      {isExpanded && (
        <>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap="4px"
          >
            <Text fontWeight="700" fontSize="13px" color="title.dark">
              {me?.fullName ?? "Guest User"}
            </Text>
            <Text fontSize="12px" fontWeight="400" color="body.dark">
              {me?.email ?? ""}
            </Text>
          </Box>
          <Box
            display="flex"
            padding="4px 16px"
            alignItems="center"
            gap="10px"
            bg="brand"
            borderRadius="100px"
          >
            {/* <Text fontSize="11px" fontWeight="600" textTransform="uppercase">
              {me?.role ?? 'Admin'}
            </Text> */}
            <Text
              fontSize="11px"
              fontWeight="600"
              color="white"
              textTransform="uppercase"
            >
              {me?.status ?? ""}
            </Text>
          </Box>
        </>
      )}
    </Flex>
  );
};
