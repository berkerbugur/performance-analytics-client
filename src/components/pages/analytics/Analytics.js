import './analytics.sass';
import Chart from "../../dynamic/chart/Chart";
import NoData from "../nodata/NoData";
import Loader from "../../dynamic/loader/Loader";

import {chartVals} from "../../../utilities/constants";
import {api} from "../../../utilities/helpers";

import {useState, useEffect} from "react";

const Analytics = () => {
    const [metrics, setMetrics] = useState([]);
    const [startDate, setStart] = useState(null);
    const [endDate, setEnd] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const [urlParams, setParams] = useState(null);

    useEffect(() => {
        //A disgusting hack I know, but it should do since dayjs is not properly working for my test suite
        // (ts compatibility problems I don't have time to properly research)
        setStart(new Date(new Date().setMinutes(new Date().getMinutes() - 30)).toISOString());
        setEnd(new Date().toISOString());
    }, []);

    useEffect(() => {
        setParams(startDate || endDate ? `/getMetrics?startDate=${startDate}&endDate=${endDate}` : null);
    }, [startDate, endDate])

    useEffect(() => {
        if (urlParams === null)
            console.warn('urlParams are not set!');
        else {
            api.get(urlParams)
                .then((resp) => {
                    setMetrics(resp.data.length === 0 ? null : resp.data);
                    setLoading(false);
                }).catch(err => {
                console.error(`Cannot fetch metrics from API. Reason: ${err}`);
                setLoading(false);
            });
        }
    }, [urlParams]);

    const getQueryDateByHour = (hourInterval) => {
        setStart(new Date(new Date().setHours(new Date().getHours() - hourInterval)).toISOString());
    }

    const getQueryDateByMinute = (minuteInterval) => {
        setStart(new Date(new Date().setMinutes(new Date().getHours() - minuteInterval)).toISOString());
    }

    return (
        <div>
            {isLoading ? <Loader isLoading={isLoading}/> :
                <div className="analytics-wrapper">
                    <div className="button-group">
                        <button className="time-interval-button" onClick={() => getQueryDateByMinute(30)}>30m</button>
                        <button className="time-interval-button" onClick={() => getQueryDateByHour(1)}>1h</button>
                        <button className="time-interval-button" onClick={() => getQueryDateByHour(2)}>2h</button>
                        <button className="time-interval-button" onClick={() => getQueryDateByHour(3)}>3h</button>
                    </div>
                    {metrics?.length > 0 ? <div className="chart-container">{chartVals.map((chart, index) => {
                            return (
                                <Chart
                                    key={index}
                                    chartProps={chart}
                                    chartData={metrics}
                                />
                            );
                        })}</div>
                        :
                        <NoData/>}
                </div>

            }
        </div>
    );
}

export default Analytics;