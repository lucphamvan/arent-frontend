import { Box } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { WeightChartInfo } from "model/weight.model";
import { useState, useEffect } from "react";
import { LineChart, XAxis, YAxis, Tooltip, Line, ResponsiveContainer, CartesianGrid } from "recharts";
import { getWeigthChartInfo } from "service";

const Wrapper = styled(Box)`
    background-color: #2e2e2e;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
`;

const BodyWeight = () => {
    const [data, setData] = useState<WeightChartInfo[]>([]);

    /**
     * get body weight chart data
     */
    useEffect(() => {
        getWeigthChartInfo(new Date()).then((result) => setData(result));
    }, []);

    return (
        <Wrapper>
            <ResponsiveContainer>
                <LineChart data={data} margin={{ left: -40 }}>
                    <XAxis axisLine={false} dataKey="name" />
                    <YAxis axisLine={false} tick={false} />
                    <Tooltip />
                    <CartesianGrid />
                    <Line dataKey="x" stroke="#8FE9D0" />
                    <Line dataKey="y" stroke="#FFCC21" />
                </LineChart>
            </ResponsiveContainer>
        </Wrapper>
    );
};

export default BodyWeight;
