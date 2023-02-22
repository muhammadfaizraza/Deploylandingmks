import { Chart } from "react-google-charts";
export const data = [
  ["Year", "Gate", "Wiiner"],
  ["1 32", 1000, 400],
  ["5 56", 1170, 460],
  ["7    42", 660, 1120],
  ["9 38", 1030, 540],
];

export const options = {
  chart: {
    title: "Horse Draw",
    subtitle: "Gate, Wiiner",
  },
};

const Draw = () => {
  return (
    <div className="drawchart">
      <Chart
      chartType="Bar"
      data={data}
      options={options}
      />
    </div>
  )
}
export default Draw