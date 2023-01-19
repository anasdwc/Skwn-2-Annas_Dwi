import SectionHeader from "./SectionHeader";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
};

const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

export const data = {
  labels,
  datasets: [
    {
      label: "Month",
      data: [2, 5, 3, 4.5, 2, 5],
      borderColor: "rgb(37,99,235)",
      backgroundColor: "white",
      borderWidth: 2,
      tension: 0.7,
      fill: false,
    },
  ],
};

export default function Statistics() {
  return (
    <section className="mb-4">
      <SectionHeader text="Statistics" />
      <div>
        <Line options={options} data={data} />
      </div>
    </section>
  );
}
