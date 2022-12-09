import { Box, Container, Grid, Image } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { MealHistoryItem } from "model/meal.model";
import React from "react";
import { useState, useEffect, useCallback } from "react";
import { getMealHistory } from "service";

const ItemWrapper = styled(Box)`
    aspect-ratio: 1;
    position: relative;
    cursor: pointer;
`;

const Description = styled(Box)`
    background-color: #ffcc21;
    position: absolute;
    left: 0;
    bottom: 0;
    color: white;
    padding: 4px 10px;
    font-size: 15px;
    min-width: 120px;
`;

interface HistoryItemProp {
    item: MealHistoryItem;
}
const HistoryItem = React.memo(({ item }: HistoryItemProp) => {
    return (
        <ItemWrapper>
            <Image src={item.img} w="100%" h="100%" objectFit="cover" />
            <Description>{item.description}</Description>
        </ItemWrapper>
    );
});

const MealHistory = () => {
    const [data, setData] = useState<MealHistoryItem[]>([]);

    /**
     * get meal history data
     */
    useEffect(() => {
        getMealHistory().then((results) => setData(results));
    }, []);

    const renderListMealHistory = useCallback(() => {
        return data.map((item, index) => {
            return <HistoryItem key={`meal-item-${index}`} item={item} />;
        });
    }, [data]);

    return (
        <Container maxW="container.lg">
            <Grid gridTemplateColumns="repeat(4, minmax(0, 1fr))" gap="2">
                {renderListMealHistory()}
            </Grid>
        </Container>
    );
};
export default MealHistory;
