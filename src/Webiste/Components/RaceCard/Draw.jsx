import { Chart } from "react-google-charts";
export const data = [
  ["Year", "Votes", "Expenses", "Profit"],
  ["2014", 1000, 400, 200],
  ["2015", 1170, 460, 250],
  ["2016", 660, 1120, 300],
  ["2017", 1030, 540, 350],
];

export const options = {
  chart: {
    title: "Horse Performance",
    subtitle: "Votes, Expenses, and Profit: 2014-2017",
  },
};

const Draw = () => {
  return (
    <div className="drawchart">
      <Chart
      chartType="Bar"
      width="517px"
      height="315px"
      data={data}
      options={options}
    />
    </div>
  )
}
export default Draw