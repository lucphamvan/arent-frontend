import { Box, Grid } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { Diary } from "model/diary.model";
import { useCallback, useEffect, useState } from "react";
import { getDiaryData } from "service";
import DiaryItem from "./DiaryItem";

const Wrapper = styled(Box)`
    margin-bottom: 2rem;
`;

const MyDiary = () => {
    const [data, setData] = useState<Diary[]>([]);

    /**get diary data */
    useEffect(() => {
        getDiaryData(new Date()).then((result) => setData(result));
    }, []);

    /** render list diary data */
    const renderListDiary = useCallback(() => {
        return data.map((item, index) => {
            return <DiaryItem item={item} key={`diary-item-${index}`} />;
        });
    }, [data]);

    return (
        <Wrapper id="my-diary">
            <Box fontSize="22px">MY DIARY</Box>
            <Grid gridTemplateColumns="repeat(4, minmax(0, 1fr))" gap="2">
                {renderListDiary()}
            </Grid>
        </Wrapper>
    );
};
export default MyDiary;
