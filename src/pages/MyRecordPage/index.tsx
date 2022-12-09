import { Box, Container } from "@chakra-ui/react";
import { Button } from "components";
import BodyRecord from "./BodyRecord";
import Category from "./Category";
import MyDiary from "./MyDiary";
import MyExercise from "./MyExercise";

const MyRecordPage = () => {
    return (
        <Container maxW="container.lg" py="3.5rem">
            <Category />
            <BodyRecord />
            <MyExercise />
            <MyDiary />
            <Box textAlign="center">
                <Button>自分の日記をもっと見る</Button>
            </Box>
        </Container>
    );
};
export default MyRecordPage;
