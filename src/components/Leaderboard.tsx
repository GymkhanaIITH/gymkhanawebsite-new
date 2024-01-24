import { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
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

  const [teams, setTeams] = useState([
    {
      name: "CSE/MNC/MATHS",
      points: 100,
      cultural: 30,
      sportsBoys: 35,
      sportsGirls: 35,
    },
    {
      name: "EE/AI/IC Design/CoE",
      points: 90,
      cultural: 20,
      sportsBoys: 40,
      sportsGirls: 30,
    },
    {
      name: "BME/BT/ES/EP/Physics",
      points: 50,
      cultural: 10,
      sportsBoys: 30,
      sportsGirls: 10,
    },
    {
      name: "ChE/Chy/IC/Design",
      points: 200,
      cultural: 80,
      sportsBoys: 80,
      sportsGirls: 40,
    },
    {
      name: "Civil/MSME/LA/EM",
      points: 130,
      cultural: 30,
      sportsBoys: 50,
      sportsGirls: 50,
    },
    {
      name: "MAE/Inter-Displinary/Climate Change/Heritage Science",
      points: 45,
      cultural: 10,
      sportsBoys: 30,
      sportsGirls: 5,
    },
  ]);

  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "ascending",
  });

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
        position: 'top',
      },
      tooltip: {
        mode: 'index',
        intersect: false,
      },
    },
  };

  return (
    <div className="flex flex-col items-center justify-center  shadow-md rounded-lg p-6">
      <div className="flex justify-center space-x-4 mb-6">
        <button
          className={`px-4 py-2 rounded-lg ${
            view === "table" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => setView("table")}
        >
          Table View
        </button>
        <button
          className={`px-4 py-2 rounded-lg ${
            view === "graph" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => setView("graph")}
        >
          Graph View
        </button>
      </div>

      {view === "table" && (
        <div className="">
          {/* <p className="text-center text-gray-600 mb-2">
            Click on column headers to sort
          </p> */}
          <div className="overflow-x-auto">
            <table className="min-w-full md:text-sm text-xs text-left text-gray-500">
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
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {view === "graph" && (
        <div className="graph-view h-screen/2 w-full">
          <Bar data={chartData} options={options as any} />
          {/* <p className="text-gray-700">Graph View Coming Soon...</p> */}
        </div>
      )}
    </div>
  );
};

export default Leaderboard;
