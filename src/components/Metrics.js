import "chart.js/auto";
import { Pie, Bar, Line } from "react-chartjs-2";

const Metrics = () => {
  const pieData = {
    maintainAspectRatio: false,
    responsive: false,
    labels: ["Matured", "Not Matured", "Near Maturity"],
    datasets: [
      {
        data: [300, 50, 100],
      },
    ],
  };

  const barData = {
    labels: [
      "1-3 months",
      "3-6 months",
      "6-9 months",
      "9-12 months",
      "12-15 months",
      "15-18 months",
    ],
    datasets: [
      {
        label: "Months to maturity",
        data: [5, 59, 80, 96, 56, 66],
      },
    ],
  };

  const lineData = {
    labels: ["3%", "4%", "5%", "6%", ">6%"],
    datasets: [
      {
        label: "No. of bonds",
        lineTension: 0.5,
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: [65, 59, 80, 81, 56],
      },
    ],
  };

  return (
    <>
        <div>
          {/* the bar chart represents the number of companies close to maturity where the X-axis is how close they are to mature  */}
          <div style={barStyle}>
            <Bar data={barData} />
          </div>

          {/* the pie chart is a comparison of all bonds matured vs close to maturity vs above the time frame of what we consider close (1.5 yr) */}
          <div style={pieStyle}>
            <Pie data={pieData} />
          </div>

          {/* the line chart is a comparison of the total number of companies close to maturity and what particular interest rate */}
          <div style={lineStyle}>
            <Line data={lineData} />
          </div>
        </div>
    </>
  );
};

export default Metrics;

const pieStyle = {
  width: "350px",
  height: "350px",
};

const barStyle = {
  marginBottom: "3rem",
  width: "500px",
};

const lineStyle = {
  marginTop: "3rem",
  width: "500px",
};
