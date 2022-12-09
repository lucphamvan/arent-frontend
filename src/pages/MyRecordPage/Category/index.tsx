import { Box } from "@chakra-ui/react";
import styled from "@emotion/styled";
import recordImg from "assets/img/MyRecommend-1.jpg";
import exerciseImg from "assets/img/MyRecommend-2.jpg";
import diaryImg from "assets/img/MyRecommend-3.jpg";
import { useCallback } from "react";
import { CategoryItemType } from "../type";
import CategoryItem from "./CategoryItem";

const categories: CategoryItemType[] = [
    { title: "body record", description: "自分のカラダの記録", img: recordImg, nav: "#body-record" },
    { title: "my exercise", description: "自分の運動の記録", img: exerciseImg, nav: "#my-exercise" },
    { title: "my diary", description: "自分の日記", img: diaryImg, nav: "#my-diary" },
];

const Grid = styled(Box)`
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 3rem;
`;
/**
 *render Categories
 */
const Category = () => {
    const renderListItem = useCallback(() => {
        return categories.map((item, index) => <CategoryItem item={item} key={`cat-item-${index}`} />);
    }, []);

    return <Grid>{renderListItem()}</Grid>;
};

export default Category;
