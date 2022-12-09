import { Box, Divider, Flex, Grid } from "@chakra-ui/react";

interface RecommendItemProps {
    title: string;
    content: string;
}
const RecommendItem = ({ title, content }: RecommendItemProps) => {
    return (
        <Flex alignItems="center" flexDir="column" padding="4" bg="#2E2E2E" gap="2" cursor="pointer">
            <Box fontSize="22px" color="#FFCC21" wordBreak="break-word" textAlign="center">
                {title}
            </Box>
            <Flex justifyContent="center" w="100%">
                <Divider w="50%" />
            </Flex>
            <Box fontSize="18px" color="#fff">
                {content}
            </Box>
        </Flex>
    );
};

const Recommend = () => {
    return (
        <Grid gridTemplateColumns="repeat(4, minmax(0, 1fr))" gap="32px">
            <RecommendItem title="RECOMMENDED COLUMN" content="オススメ" />
            <RecommendItem title="RECOMMENDED DIET" content="ダイエット" />
            <RecommendItem title="RECOMMENDED BEAUTY" content="美容" />
            <RecommendItem title="RECOMMENDED HEALTH" content="健康" />
        </Grid>
    );
};

export default Recommend;
