import { Group, Image } from "@chakra-ui/react";
import { Text } from "@components/ui/atoms";

type Props = {
  onClick: () => void;
  isExpanded?: boolean;
};

export const BrandLogo: React.FC<Props> = ({ onClick, isExpanded }) => {
  return (
    <Group
      onClick={onClick}
      cursor="button"
      flexWrap="nowrap"
      whiteSpace="nowrap"
    >
      <Image height="24px" width="28px" />
      {isExpanded && (
        <Text fontSize="14px" color="title.dark" fontWeight="700"></Text>
      )}
    </Group>
  );
};
