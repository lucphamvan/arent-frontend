import { Box } from "@chakra-ui/react";
import styled from "@emotion/styled";
import React from "react";
import { CategoryItemType } from "../type";

const Wrapper = styled.a`
    aspect-ratio: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    border: 24px solid #ffcc21;
    cursor: pointer;
`;

const Image = styled(Box)`
    width: 100%;
    height: 100%;
    position: absolute;
    aspect-ratio: 1;
    background: url(${(props) => props.imgUrl});
    background-size: cover;
    mix-blend-mode: luminosity;
`;

const OverPlay = styled(Box)`
    width: 100%;
    height: 100%;
    background: #000000;
    position: absolute;
    mix-blend-mode: luminosity;
    opacity: 0.5;
`;

const Title = styled(Box)`
    font-size: 25px;
    line-height: 30px;
    text-align: center;
    letter-spacing: 0.125px;
    color: #ffcc21;
    text-transform: uppercase;
`;

const Description = styled(Box)`
    background: #ff963c;
    color: white;
    margin-top: 1rem;
    text-align: center;
    padding: 0 20px;
`;
/**
 * render 1 category item
 */
interface Props {
    item: CategoryItemType;
}
const CategoryItem = React.memo(({ item }: Props) => {
    return (
        <Wrapper href={item.nav}>
            <Image imgUrl={item.img} />
            <OverPlay />
            <Box position="absolute">
                <Title>{item.title}</Title>
                <Description>{item.description}</Description>
            </Box>
        </Wrapper>
    );
});
export default React.memo(CategoryItem);
