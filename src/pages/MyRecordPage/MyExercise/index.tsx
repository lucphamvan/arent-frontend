import { Box, Flex, Grid } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { Exercise } from "model/exercise.model";
import moment from "moment";
import { useEffect, useState } from "react";
import { getExerciseData } from "service";
import RowItem from "./RowItem";

const Wrapper = styled(Box)`
    background-color: #2e2e2e;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem 2rem;
    margin-bottom: 3.5rem;
    width: 100%;
`;

const TableWrapper = styled(Box)`
    &::-webkit-scrollbar {
        width: 19px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #ffcc21;
        border-radius: 20px;
        border: 6px solid transparent;
        background-clip: content-box;
    }

    &::-webkit-scrollbar-thumb:hover {
        background-color: #ffcc21;
    }
`;

const MyExercise = () => {
    const [data, setData] = useState<Exercise[]>([]);

    /** get exercise data */
    useEffect(() => {
        getExerciseData(new Date()).then((result) => setData(result));
    }, []);

    const renderListItem = () => {
        return data.map((item, index) => {
            return <RowItem item={item} key={`exercise-item-${index}`} />;
        });
    };

    return (
        <Wrapper id="my-exercise">
            <Flex gap={4} alignItems="baseline">
                <Box color="white" fontSize="16px">
                    MY EXERCISE
                </Box>
                <Box color="white" fontSize="22px">
                    {moment().format("YYYY.MM.DD")}
                </Box>
            </Flex>
            <TableWrapper height="260px" overflow="auto" paddingRight={4}>
                <Grid gridTemplateColumns="1fr 1fr" columnGap="8" rowGap="4">
                    {renderListItem()}
                </Grid>
            </TableWrapper>
        </Wrapper>
    );
};

export default MyExercise;
