import { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import axios from "axios";
import Papa from "papaparse";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register the components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Leaderboard = () => {
  const [view, setView] = useState("table"); // Default view
  const [csvData, setCsvData] = useState([]);
  const [teams, setTeams] = useState([
    {
      name: "CSE/MNC/MATHS",
      points: 0,
      cultural: 0,
      sportsBoys: 0,
      sportsGirls: 0,
      Athletics: 0,
      Aquatics: 0,
      Esports: 0,
    },
    {
      name: "EE/AI/IC Design/CoE",
      points: 0,
      cultural: 0,
      sportsBoys: 0,
      sportsGirls: 0,
      Athletics: 0,
      Aquatics: 0,
      Esports: 0,
    },
    {
      name: "BME/BT/ES/EP/Physics",
      points: 0,
      cultural: 0,
      sportsBoys: 0,
      sportsGirls: 0,
      Athletics: 0,
      Aquatics: 0,
      Esports: 0,
    },
    {
      name: "ChE/Chy/IC/Design",
      points: 0,
      cultural: 0,
      sportsBoys: 0,
      sportsGirls: 0,
      Athletics: 0,
      Aquatics: 0,
      Esports: 0,
    },
    {
      name: "Civil/MSME/LA/EM",
      points: 0,
      cultural: 0,
      sportsBoys: 0,
      sportsGirls: 0,
      Athletics: 0,
      Aquatics: 0,
      Esports: 0,
    },
    {
      name: "MAE/Inter-Displinary/Climate Change/Heritage Science",
      points: 0,
      cultural: 0,
      sportsBoys: 0,
      sportsGirls: 0,
      Athletics: 0,
      Aquatics: 0,
      Esports: 0,
    },
    {
      name: "Staff",
      points: 0,
      cultural: 0,
      sportsBoys: 0,
      sportsGirls: 0,
      Athletics: 0,
      Aquatics: 0,
      Esports: 0,
    },
  ]);

  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "ascending",
  });
  useEffect(() => {
    fetchCSVData();
  }, []);

  const fetchCSVData = () => {
    //https://docs.google.com/spreadsheets/d/1TRX6LgL54LgR4Sh3dW6cFzF4wti5mVrc6znwv-eikQw/gviz/tq?tqx=out:csv&sheet=DIESTA_SCORE_TRACKER
    //https://docs.google.com/spreadsheets/d/1TRX6LgL54LgR4Sh3dW6cFzF4wti5mVrc6znwv-eikQw/edit?usp=sharing
    const csvUrl =
      "https://docs.google.com/spreadsheets/d/1TRX6LgL54LgR4Sh3dW6cFzF4wti5mVrc6znwv-eikQw/gviz/tq?tqx=out:csv&sheet=DIESTA_SCORE_TRACKER";
    axios
      .get(csvUrl)
      .then((response) => {
        const parsedCsvData = Papa.parse(response.data, { header: true }).data;

        parsedCsvData.forEach((event) => {
          if (
            event.Type === "Cultural" ||
            event.Type === "Sports (M)" ||
            event.Type === "Sports (W)" ||
            event.Type === "Athletics" ||
            event.Type === "Aquatics" ||
            event.Type === "Esports"
          ) {
            teams.forEach((team) => {
              const teamName = team.name;
              const eventPoints = parseInt(event[teamName], 10);

              // Add points based on event type
              if (event.Type === "Cultural") {
                team.cultural += eventPoints;
              } else if (event.Type === "Sports (M)") {
                team.sportsBoys += eventPoints;
              } else if (event.Type === "Sports (W)") {
                team.sportsGirls += eventPoints;
              } else if (event.Type === "Athletics") {
                team.Athletics += eventPoints;
              } else if (event.Type === "Aquatics") {
                team.Aquatics += eventPoints;
              } else if (event.Type === "Esports") {
                team.Esports += eventPoints;
              }

              team.points =
                team.cultural +
                team.sportsBoys +
                team.sportsGirls +
                team.Athletics +
                team.Aquatics +
                team.Esports;
            });
          }
        });
        // console.log(parsedCsvData);
        setTeams([...teams]);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };


  const sortTeams = (column) => {
    let direction = "ascending";
    if (column === "points" && sortConfig.key !== column) {
      direction = "descending";
    } else if (sortConfig.key === column) {
      direction =
        sortConfig.direction === "ascending" ? "descending" : "ascending";
    }

    const sortedTeams = [...teams].sort((a, b) => {
      if (a[column] < b[column]) {
        return direction === "ascending" ? -1 : 1;
      }
      if (a[column] > b[column]) {
        return direction === "ascending" ? 1 : -1;
      }
      return 0;
    });

    setTeams(sortedTeams);
    setSortConfig({ key: column, direction });
  };
  useEffect(() => {
    sortTeams("points");
  }, []);

  const chartData = {
    labels: teams.map((team) => team.name),
    datasets: [
      {
        label: "Cultural Points",
        data: teams.map((team) => team.cultural),
        backgroundColor: "rgba(255, 206, 86, 0.5)",
        borderColor: "rgba(255, 206, 86, 0.8)",
      },
      {
        label: "Sports Boys Points",
        data: teams.map((team) => team.sportsBoys),
        backgroundColor: "rgba(75, 192, 192, 0.5)",
        borderColor: "rgba(75, 192, 192, 0.8)",
      },
      {
        label: "Sports Girls Points",
        data: teams.map((team) => team.sportsGirls),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        borderColor: "rgba(255, 99, 132, 0.8)",
      },
      {
        label: "Athletics Points",
        data: teams.map((team) => team.Athletics),
        backgroundColor: "rgba(54, 162, 235, 0.5)",
        borderColor: "rgba(54, 162, 235, 0.8)",
      },
      {
        label: "Aquatics Points",
        data: teams.map((team) => team.Aquatics),
        backgroundColor: "rgba(153, 102, 255, 0.5)",
        borderColor: "rgba(153, 102, 255, 0.8)",
      },
      {
        label: "Esports Points",
        data: teams.map((team) => team.Esports),
        backgroundColor: "rgba(255, 159, 64, 0.5)",
        borderColor: "rgba(255, 159, 64, 0.8)",
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        mode: "index",
        intersect: false,
      },
    },
  };

  return (
    <div className="flex flex-col items-center justify-center  shadow-md rounded-lg p-6">
      <div className="graph-view h-screen/2 w-full py-24">
        <Bar data={chartData} options={options as any} />
        {/* <p className="text-gray-700">Graph View Coming Soon...</p> */}
      </div>

      <div className="overflow-x-auto w-full">
        <table className="min-w-full w-full sm:text-sm text-xs text-left text-gray-500">
          <thead className="text-gray-300">
            <tr>
              <th
                scope="col"
                className="md:text-left text-center md:px-12 px-4 py-3"
              >
                Team
              </th>
              <th
                scope="col"
                className="md:text-left text-center md:px-12 px-4 py-3 cursor-pointer hover:bg-black"
                onClick={() => sortTeams("points")}
              >
                Overall Points
                {sortConfig.key === "points" &&
                  (sortConfig.direction === "ascending" ? " ↑" : " ↓")}
              </th>

              <th
                scope="col"
                className="md:text-left text-center md:px-12 px-4 py-3 cursor-pointer hover:bg-black"
                onClick={() => sortTeams("cultural")}
              >
                Cultural Points
                {sortConfig.key === "cultural" &&
                  (sortConfig.direction === "ascending" ? " ↑" : " ↓")}
              </th>
              <th
                scope="col"
                className="md:text-left text-center md:px-12 px-4 py-3 cursor-pointer hover:bg-black"
                onClick={() => sortTeams("sportsBoys")}
              >
                Sports Boys Points
                {sortConfig.key === "sportsBoys" &&
                  (sortConfig.direction === "ascending" ? " ↑" : " ↓")}
              </th>
              <th
                scope="col"
                className="md:text-left text-center md:px-12 px-4 py-3 cursor-pointer hover:bg-black"
                onClick={() => sortTeams("sportsGirls")}
              >
                Sports Girls Points
                {sortConfig.key === "sportsGirls" &&
                  (sortConfig.direction === "ascending" ? " ↑" : " ↓")}
              </th>
              <th
                scope="col"
                className="md:text-left text-center md:px-12 px-4 py-3 cursor-pointer hover:bg-black"
                onClick={() => sortTeams("Athletics")}
              >
                Athletics Points
                {sortConfig.key === "Athletics" &&
                  (sortConfig.direction === "ascending" ? " ↑" : " ↓")}
              </th>
              <th
                scope="col"
                className="md:text-left text-center md:px-12 px-4 py-3 cursor-pointer hover:bg-black"
                onClick={() => sortTeams("Aquatics")}
              >
                Aquatics Points
                {sortConfig.key === "Aquatics" &&
                  (sortConfig.direction === "ascending" ? " ↑" : " ↓")}
              </th>
              <th
                scope="col"
                className="md:text-left text-center md:px-12 px-4 py-3 cursor-pointer hover:bg-black"
                onClick={() => sortTeams("Esports")}
              >
                Esports Points
                {sortConfig.key === "Esports" &&
                  (sortConfig.direction === "ascending" ? " ↑" : " ↓")}
              </th>
            </tr>
          </thead>
          <tbody>
            {teams.map((team, index) => (
              <tr
                key={index}
                className="odd:bg-white even:bg-gray-100 border-b"
              >
                <td className="md:text-left text-center md:px-12 px-4 py-4">
                  {team.name}
                </td>
                <td className="md:text-left text-center md:px-12 px-4 py-4">
                  {team.points}
                </td>
                <td className="md:text-left text-center md:px-12 px-4 py-4">
                  {team.cultural}
                </td>
                <td className="md:text-left text-center md:px-12 px-4 py-4">
                  {team.sportsBoys}
                </td>
                <td className="md:text-left text-center md:px-12 px-4 py-4">
                  {team.sportsGirls}
                </td>
                <td className="md:text-left text-center md:px-12 px-4 py-4">
                  {team.Athletics}
                </td>
                <td className="md:text-left text-center md:px-12 px-4 py-4">
                  {team.Aquatics}
                </td>
                <td className="md:text-left text-center md:px-12 px-4 py-4">
                  {team.Esports}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leaderboard;
