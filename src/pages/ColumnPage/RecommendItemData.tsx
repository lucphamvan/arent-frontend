import { Box, Flex, Image, Link } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { Recommend } from "model/recomnend.model";
import moment from "moment";

const StyledImg = styled(Image)`
    aspect-ratio: 1.625;
    width: 100%;
`;

const Wrapper = styled(Box)`
    aspect-ratio: 1.625;
    position: relative;
    cursor: pointer;
`;

const TimeBox = styled(Box)`
    position: absolute;
    left: 0;
    bottom: 0;
    background-color: #ffcc21;
    color: white;
    font-size: 15px;
    padding: 0.25rem 0.5rem;
`;

interface Props {
    item: Recommend;
}
const RecommendItemData = ({ item }: Props) => {
    return (
        <Flex flexDir="column" gap="0.125rem">
            <Wrapper>
                <StyledImg src={item.img} objectFit="cover" />
                <TimeBox>{moment(new Date(item.time)).format("YYYY.MM.DD hh:mm")}</TimeBox>
            </Wrapper>
            <Box fontSize="15px">{item.description}</Box>
            <Flex gap="4">
                {item.tags?.map((tag) => {
                    return (
                        <Link fontSize="12px" color="#FF963C" key={`tag-${tag}`}>
                            {tag}
                        </Link>
                    );
                })}
            </Flex>
        </Flex>
    );
};
export default RecommendItemData;
