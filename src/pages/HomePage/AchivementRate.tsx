import { Box, CircularProgress, CircularProgressLabel, Image, chakra } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { useEffect, useRef, useState } from "react";
import { getAchievementRate } from "service";
import moment from "moment";

const Wrapper = styled(Box)`
    aspect-ratio: 1.7;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
`;

const Progress = styled(CircularProgress)`
    position: absolute;
`;

const StyledSpan = styled(chakra.span)`
    text-shadow: 0px 0px 6px #fc7400;
    color: #ffffff;
`;

const AchievementRate = () => {
    const ref = useRef<HTMLDivElement>(null);
    const [width, setWidth] = useState(0);
    const [percentRate, setPercentRate] = useState(0);

    useEffect(() => {
        if (!ref.current?.clientWidth) {
            return;
        }
        setWidth(ref.current?.clientWidth * 0.335);
    }, [ref?.current?.clientWidth]);

    /**
     * get data
     */
    useEffect(() => {
        getAchievementRate(Date.now()).then((result) => setPercentRate(result));
    }, []);

    return (
        <Wrapper ref={ref}>
            <Image src="./img/d01.jpg" objectFit="cover" w="100%" h="100%" />
            <Progress value={percentRate} trackColor="rgba(0,0,0,0)" color="white" size={`${width}px`} thickness="1px">
                <CircularProgressLabel fontSize="2rem" color="white">
                    <StyledSpan fontSize="1.5rem"> {moment().format("MM / DD")}</StyledSpan>
                    <StyledSpan ml="2">{percentRate}%</StyledSpan>
                </CircularProgressLabel>
            </Progress>
        </Wrapper>
    );
};

export default AchievementRate;
