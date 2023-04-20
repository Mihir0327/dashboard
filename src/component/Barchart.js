import React from "react";
import { VictoryChart, VictoryBar, VictoryAxis } from "victory";

// const data = [
//   { month: "Jan", sales: 200 },
//   { month: "Feb", sales: 350 },
//   { month: "Mar", sales: 400 },
//   { month: "Apr", sales: 300 },
// ];


const BarChart = ({data}) => {
    console.log(data)
  return (
    <div className="bg-[blue]/.90  border border-blue-900 h-[10vw]"> 
    <VictoryChart>
      <VictoryAxis
        dependentAxis
        tickFormat={(tick) => `${tick}`}
        style={{
            axis: { stroke: "none" },
            tickLabels: { fontSize: 12, fontWeight: "bold" },
        }}
        />
      <VictoryBar 
        alignment="start"
        data={data}
        x="Week"
        y="Sales"
        style={{ data: { fill: "cyan" }}}
        />
    </VictoryChart>
        </div>
  );
};

export default BarChart;
