import { Container, Flex, Image as ChakraImage } from "@chakra-ui/react";
import snackImg from "assets/img/snack.svg";
import lunchImg from "assets/img/lunch.svg";
import dinnerImg from "assets/img/dinner.svg";
import morningImg from "assets/img/morning.svg";
import styled from "@emotion/styled";

const Image = styled(ChakraImage)`
    cursor: pointer;
`;

const ButtonGroup = () => {
    return (
        <Container maxW="container.lg">
            <Flex gap="5.25rem" alignItems="center" justifyContent="center" py="1.375rem">
                <Image src={morningImg} />
                <Image src={lunchImg} />
                <Image src={dinnerImg} />
                <Image src={snackImg} />
            </Flex>
        </Container>
    );
};

export default ButtonGroup;
