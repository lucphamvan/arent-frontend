import { Box, Circle, Flex } from "@chakra-ui/react";
import { Exercise } from "model/exercise.model";

interface Props {
    item: Exercise;
}
const RowItem = ({ item }: Props) => {
    return (
        <Flex borderBottom="1px solid #777777" gap="2" alignItems="baseline">
            <Circle size={1} bg="white" />
            <Box flexGrow={1}>
                <Box color="white" fontWeight={300}>
                    {item.content}
                </Box>
                <Box color="#FFCC21">{item.energy}</Box>
            </Box>
            <Box fontSize="18px" color="#FFCC21">
                {item.duration}
            </Box>
        </Flex>
    );
};
export default RowItem;
