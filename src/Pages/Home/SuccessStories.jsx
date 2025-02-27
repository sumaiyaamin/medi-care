import { FaUsers, FaCheckCircle, FaCampground } from "react-icons/fa";



const SuccessStories = () => {
    const stats = [
        { icon: <FaUsers size={40} className="text-blue-500" />, number: "10K+", label: "Happy Campers" },
        { icon: <FaCheckCircle size={40} className="text-green-500" />, number: "500+", label: "Successful Camps" },
        { icon: <FaCampground size={40} className="text-yellow-500" />, number: "50+", label: "Locations Covered" }
    ];
    return (
        <section className="py-16 px-4 md:px-20 bg-white text-center">
            <h2 className="text-3xl font-bold mb-8">Success Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {stats.map((stat, index) => (
                    <div key={index} className="flex flex-col items-center bg-gray-50 p-6 rounded-lg shadow-md">
                        {stat.icon}
                        <h3 className="text-2xl font-semibold mt-3">{stat.number}</h3>
                        <p className="text-gray-600">{stat.label}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};
export default SuccessStories;