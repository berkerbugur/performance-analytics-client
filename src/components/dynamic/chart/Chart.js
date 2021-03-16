import './chart.sass';
import {
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
} from "recharts";
import {zeroPoint} from "../../../utilities/helpers";

const Chart = ({chartProps, chartData}) => {
    //format x axis check points as HH:mm
    const xAxisTimeFormat = (checkPoint) => {
        if (!checkPoint) return false;
        const formattedDate = new Date(checkPoint);
        const utcCompliantDate = formattedDate.setHours(formattedDate.getHours() -3);
        //I will hate myself for this fix later
        return zeroPoint(new Date(utcCompliantDate)).getHours() + ':' + zeroPoint(formattedDate.getMinutes());
    }

    return (
        <div className='chart-wrapper'>
            <div className='chart-label'>{chartProps.labelName}</div>
            <ResponsiveContainer>
                <LineChart
                    data={chartData}
                    margin={{
                        top: 10, right: 30, left: 0, bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey="createdAt" tickFormatter={xAxisTimeFormat}/>
                    <YAxis />
                    <Tooltip/>
                    <Line type="monotone" dataKey={chartProps.varName} stroke="#8884d8" fill="#8884d8"/>
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}

export default Chart;