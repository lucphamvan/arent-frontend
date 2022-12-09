import { Box, Flex } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { WeightChartInfo } from "model/weight.model";
import { useCallback, useEffect, useMemo, useState } from "react";
import { LineChart, XAxis, YAxis, Tooltip, Line, ResponsiveContainer, CartesianGrid } from "recharts";
import { getWeigthChartInfo } from "service";
import { VIEW_CHART_MODE } from "config/enum";
import moment from "moment";

const Wrapper = styled(Box)`
    background-color: #2e2e2e;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem 2rem;
    margin: 3.5rem 0;
    width: 100%;
`;

const SwitchModeBtn = styled(Box)`
    cursor: pointer;
    color: #ffcc21;
    border-radius: 16px;
    background-color: white;
    padding: 0rem 1rem;
    &.selected {
        color: white;
        background-color: #ffcc21;
    }
`;

const BodyRecord = () => {
    const [data, setData] = useState<WeightChartInfo[]>([]);
    const [viewcChartMode, setViewChartMode] = useState<VIEW_CHART_MODE>(VIEW_CHART_MODE.year);
    const [selectedIndex, setSelectedInex] = useState(3); // default select VIEW_CHART_MODE.year;

    /**
     * get body weight chart data base on Date + View chart mode
     */
    useEffect(() => {
        getWeigthChartInfo(new Date(), viewcChartMode).then((result) => setData(result));
    }, [viewcChartMode]);

    const optionViewChartModes = useMemo(
        () => [VIEW_CHART_MODE.day, VIEW_CHART_MODE.week, VIEW_CHART_MODE.month, VIEW_CHART_MODE.year],
        []
    );

    const handleSelectItem = useCallback((item: VIEW_CHART_MODE, index: number) => {
        setSelectedInex(index);
        setViewChartMode(item);
    }, []);

    /**
     * render list option view chart mode
     */
    const renderListOptionViewChartMode = useCallback(() => {
        return optionViewChartModes.map((item, index) => {
            return (
                <SwitchModeBtn
                    className={`${index === selectedIndex ? "selected" : "non-selected"}`}
                    key={`view-chart-option-${index}`}
                    onClick={() => handleSelectItem(item, index)}
                >
                    {item}
                </SwitchModeBtn>
            );
        });
    }, [optionViewChartModes, handleSelectItem, selectedIndex]);

    return (
        <Wrapper id="body-record">
            <Flex gap={4} alignItems="baseline">
                <Box color="white" fontSize="16px">
                    BODY RECORD
                </Box>
                <Box color="white" fontSize="22px">
                    {moment().format("YYYY.MM.DD")}
                </Box>
            </Flex>
            <Box height="310px">
                <ResponsiveContainer>
                    <LineChart
                        data={data}
                        margin={{
                            left: -40,
                        }}
                    >
                        <XAxis axisLine={false} dataKey="name" />
                        <YAxis axisLine={false} tick={false} />
                        <CartesianGrid className="custom-grid" />
                        <Tooltip />
                        <Line dataKey="x" stroke="#8FE9D0" />
                        <Line dataKey="y" stroke="#FFCC21" />
                    </LineChart>
                </ResponsiveContainer>
            </Box>
            <Flex gap="4">{renderListOptionViewChartMode()}</Flex>
        </Wrapper>
    );
};

export default BodyRecord;
