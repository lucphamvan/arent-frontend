import { Box } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { Diary } from "model/diary.model";
import moment from "moment";

const Wrapper = styled(Box)`
    padding: 1rem;
    border: 2px solid #707070;
    cursor: pointer;
`;
interface Props {
    item: Diary;
}
const DiaryItem = ({ item }: Props) => {
    return (
        <Wrapper>
            <Box fontSize="18px">{moment(new Date(item.time)).format("YYYY.MM.DD")}</Box>
            <Box fontSize="18px">{moment(new Date(item.time)).format("hh:mm")}</Box>
            <Box>{item.content}</Box>
        </Wrapper>
    );
};
export default DiaryItem;
