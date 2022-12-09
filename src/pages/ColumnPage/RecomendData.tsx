import { Grid } from "@chakra-ui/react";
import { Recommend } from "model/recomnend.model";
import { useCallback, useEffect, useState } from "react";
import { getRecommendData } from "service";
import RecommendItemData from "./RecommendItemData";

const RecommendData = () => {
    const [data, setData] = useState<Recommend[]>([]);

    /**
     * get recommend data
     */
    useEffect(() => {
        getRecommendData().then((result) => setData(result));
    }, []);

    const renderListData = useCallback(() => {
        return data.map((item, index) => {
            return <RecommendItemData key={`rec-item-data-${index}`} item={item} />;
        });
    }, [data]);

    return (
        <Grid gridTemplateColumns="repeat(4, minmax(0, 1fr))" gap="4" py="3rem">
            {renderListData()}
        </Grid>
    );
};
export default RecommendData;
