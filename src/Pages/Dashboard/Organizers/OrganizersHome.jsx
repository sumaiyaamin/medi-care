import { Helmet } from "react-helmet-async";
import { Bar, Doughnut } from "react-chartjs-2";
import { FaUsers, FaCalendarCheck, FaHandHoldingMedical } from "react-icons/fa";
import "chart.js/auto";

const OrganizersHome = () => {
    const stats = [
        { icon: <FaUsers className="text-blue-500 text-4xl" />, label: "Total Volunteers", value: "1,250" },
        { icon: <FaCalendarCheck className="text-green-500 text-4xl" />, label: "Upcoming Camps", value: "25" },
        { icon: <FaHandHoldingMedical className="text-red-500 text-4xl" />, label: "Patients Treated", value: "8,745" }
    ];

    const barData = {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [{
            label: "Patients Treated",
            data: [500, 800, 1200, 1500, 1300, 1700],
            backgroundColor: "#4CAF50",
        }]
    };

    const doughnutData = {
        labels: ["Pediatrics", "General Medicine", "Surgery", "Others"],
        datasets: [{
            data: [40, 30, 20, 10],
            backgroundColor: ["#3B82F6", "#F59E0B", "#EF4444", "#10B981"],
        }]
    };

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <Helmet>
                <title>Dashboard | Organizers Home</title>
            </Helmet>
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Organizer Dashboard</h2>

            {/* Stats Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {stats.map((stat, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow flex items-center">
                        <div className="mr-4">{stat.icon}</div>
                        <div>
                            <p className="text-gray-500 text-sm">{stat.label}</p>
                            <p className="text-xl font-semibold text-gray-700">{stat.value}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                {/* Bar Chart */}
                <div className="bg-white p-6 rounded-lg shadow">
                    <h3 className="text-lg font-semibold text-gray-700 mb-4">Patients Treated Over Time</h3>
                    <Bar data={barData} />
                </div>

                {/* Doughnut Chart */}
                <div className="bg-white p-6 rounded-lg shadow">
                    <h3 className="text-lg font-semibold text-gray-700 mb-4">Treatment Distribution</h3>
                    <Doughnut data={doughnutData} />
                </div>
            </div>
        </div>
    );
};

export default OrganizersHome;
