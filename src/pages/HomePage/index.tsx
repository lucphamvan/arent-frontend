import { Box } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { Button } from "components";
import AchievementRate from "./AchivementRate";
import BodyWeight from "./BodyWeight";
import ButtonGroup from "./ButtonGroup";
import MealHistory from "./MealHistory";

const Grid = styled(Box)`
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1.37fr);
`;
const HomePage = () => {
    return (
        <Box>
            <Grid templateColumns="1fr 2fr">
                <AchievementRate />
                <BodyWeight />
            </Grid>
            <ButtonGroup />
            <MealHistory />
            <Box textAlign="center" py="12">
                <Button px="12" onClick={() => {}}>
                    記録をもっと見る
                </Button>
            </Box>
        </Box>
    );
};

export default HomePage;
