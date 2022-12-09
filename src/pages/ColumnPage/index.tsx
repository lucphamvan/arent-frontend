import { Box, Container } from "@chakra-ui/react";
import { Button } from "components";
import RecommendData from "./RecomendData";
import Recommend from "./Recommend";

const ColumnPage = () => {
    return (
        <Container maxW="container.lg" py="3.5rem">
            <Recommend />
            <RecommendData />
            <Box textAlign="center">
                <Button p="1rem 2rem">コラムをもっと見る</Button>
            </Box>
        </Container>
    );
};

export default ColumnPage;
