import { Flex } from "@components/ui/atoms";
import React from "react";

export const BrandFooter: React.FC = () => (
  <Flex
    display="flex"
    position="absolute"
    bottom="64px"
    px="40px"
    gap="12px"
    alignItems="center"
    textAlign="start"
    justifyContent="center"
  ></Flex>
);
