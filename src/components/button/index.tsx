import { Button as ChakraBtn } from "@chakra-ui/react";
import styled from "@emotion/styled";

export const Button = styled(ChakraBtn)`
    background: linear-gradient(32.95deg, #ffcc21 8.75%, #ff963c 86.64%);
    color: white;
    border-radius: 4px;
    &:hover {
        background: linear-gradient(32.95deg, #ffcc21 8.75%, #fcd659 86.64%);
    }
`;
