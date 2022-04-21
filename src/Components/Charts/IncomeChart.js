import React from "react";
import "./IncomeChart.css";

import {
    Label,
    PieChart,
    Pie,
    Sector,
    BarChart,
    Bar,
    Cell,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Treemap,
    ResponsiveContainer,
} from "recharts";

export default function IncomeChart(props) {
    const data = [
        {
            name: "Payments",
            Actual: props.dataToPlot.allVerified.totalPaidIncome,
            AwaitingPay: props.dataToPlot.allVerified.totalVerifiedButNotPaid,
            OnlyVerified: props.dataToPlot.allVerified.totalOnlyWasherVerified,
        },
    ];

    const service_type_income = props.dataToPlot.allVerified.totalByServiceType;

    service_type_income.map((item) => {
        item.value = parseInt(item.value);
    });

    const data2 = [
        {
            name: "Your actual Payments by Service Type",
            Car: service_type_income[0].value,
            Truck: service_type_income[1].value,
            Ute: service_type_income[2].value,
        },
    ];

    return (
        <>
            <div className="container">
                <div className="chart1">
                    <h3>All possible payments to you</h3>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={data}>
                            <Legend verticalAlign="bottom" height={36} />
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis tick={{ stroke: "green", strokeWidth: 1 }} />
                            <Tooltip />

                            <Bar dataKey="Actual" fill="#82ca9d" />
                            <Bar dataKey="AwaitingPay" fill="#8884d8" />
                            <Bar dataKey="OnlyVerified" fill="red" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
                <div className="chart2">
                    <h3>Your actual payments by service type</h3>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={data2}>
                            <Legend verticalAlign="bottom" height={36} />
                            <CartesianGrid strokeDasharray="3 3" />

                            <XAxis dataKey="name"></XAxis>
                            <YAxis tick={{ stroke: "green", strokeWidth: 1 }} />
                            <Tooltip />

                            <Bar dataKey="Car" fill="#82ca9d" />
                            <Bar dataKey="Truck" fill="#8884d8" />
                            <Bar dataKey="Ute" fill="red" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
                {/* <ResponsiveContainer width="100%" height={400}>
                    <BarChart className="chart1" data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="Car" fill="#82ca9d" />
                        <Bar dataKey="Truck" fill="#8884d8" />
                        <Bar dataKey="Ute" fill="red" />
                    </BarChart>
                </ResponsiveContainer>
                <ResponsiveContainer width="100%" height={400}>
                    <BarChart className="chart2" data={service_type_income}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="value" fill="#82ca9d" />
                    </BarChart>
                </ResponsiveContainer> */}
            </div>
        </>
    );
}
