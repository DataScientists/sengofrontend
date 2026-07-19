import { Badge, Box, Heading, Wrap } from "@chakra-ui/react";
import React from "react";

import { asItems, str } from "./helpers";

type Props = {
    skills: unknown;
};

export const SkillsSection: React.FC<Props> = ({ skills }) => {
    const items = asItems(skills);
    if (items.length === 0) return null;

    return (
        <Box w="full">
            <Heading size="md" mb={3}>
                Skills
            </Heading>
            <Wrap gap={2}>
                {items.map((skill, index) => {
                    const name = str(skill.name) || JSON.stringify(skill);
                    const endorsements =
                        typeof skill.endorsementsCount === "number" &&
                        skill.endorsementsCount > 0
                            ? ` (${skill.endorsementsCount})`
                            : "";
                    return (
                        <Badge key={index} colorPalette="teal" variant="subtle">
                            {name}
                            {endorsements}
                        </Badge>
                    );
                })}
            </Wrap>
        </Box>
    );
};
