import { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import axios from "axios"
import Papa from 'papaparse';
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
    },
    {
      name: "EE/AI/IC Design/CoE",
      points: 0,
      cultural: 0,
      sportsBoys: 0,
      sportsGirls: 0,
    },
    {
      name: "BME/BT/ES/EP/Physics",
      points: 0,
      cultural: 0,
      sportsBoys: 0,
      sportsGirls: 0,
    },
    {
      name: "ChE/Chy/IC/Design",
      points: 0,
      cultural: 0,
      sportsBoys: 0,
      sportsGirls: 0,
    },
    {
      name: "Civil/MSME/LA/EM",
      points: 0,
      cultural: 0,
      sportsBoys: 0,
      sportsGirls: 0,
    },
    {
      name: "MAE/Inter-Displinary/Climate Change/Heritage Science",
      points: 0,
      cultural: 0,
      sportsBoys: 0,
      sportsGirls: 0,
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
  const csvUrl = 'https://docs.google.com/spreadsheets/d/1TRX6LgL54LgR4Sh3dW6cFzF4wti5mVrc6znwv-eikQw/gviz/tq?tqx=out:csv&sheet=DIESTA_SCORE_TRACKER';
  axios.get(csvUrl)
  .then((response) => {
    const parsedCsvData = Papa.parse(response.data, { header: true }).data;
   
    parsedCsvData.forEach((event) => {
   
      if (event.Type === 'Cultural' || event.Type === 'Sports (M)' || event.Type === 'Sports (W)') {
        teams.forEach((team) => {
            const teamName = team.name;
            const eventPoints = parseInt(event[teamName], 10);
    
            // Add points based on event type
            if (event.Type === 'Cultural') {
                team.cultural += eventPoints ;
            } else if (event.Type === 'Sports (M)') {
                team.sportsBoys += eventPoints ;
            } else if (event.Type === 'Sports (W)') {
                team.sportsGirls += eventPoints;
            }
    
            
            team.points = team.cultural + team.sportsBoys + team.sportsGirls;
        });
      }
    });
    console.log( parsedCsvData)
    setTeams([...teams]);
  })
  .catch((error) => {
    console.error('Error fetching data:', error);
  });

  }

  function parseCSV(csvText) {
    const rows = csvText.split(/\r?\n/);   
    const headers = rows[0].split(',');    
    const data = [];       
    for (let i = 1; i < rows.length; i++) {
        const rowData = rows[i].split(',');          // Use the regular expression to split the row while handling '\r'
        const rowObject = {};
        for (let j = 0; j < headers.length; j++) {
            rowObject[headers[j]] = rowData[j];
        }
        data.push(rowObject);
    }
    return data;
}

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
