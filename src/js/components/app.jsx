import Balance from "./balance";
import BarChart from "./barChart";
import Total from "./total";

export default function Chart() {
    return (
        <div className="chart-main-container">
            <Balance />
            <div className="chart-data-container">
                <BarChart />
                <Total />
            </div>
        </div>
    )
}