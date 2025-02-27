import {  FaCheckCircle,  FaClipboardList, FaRegSmile } from "react-icons/fa";





const HowItWorks = () => {
    const steps = [
        { icon: <FaClipboardList size={30} className="text-blue-500" />, title: "Browse Camps", description: "Explore upcoming and popular camps easily." },
        { icon: <FaCheckCircle size={30} className="text-green-500" />, title: "Register", description: "Sign up and reserve your spot hassle-free." },
        { icon: <FaRegSmile size={30} className="text-yellow-500" />, title: "Enjoy", description: "Pack your bags and have an amazing experience!" }
    ];
    return (
        <section className="py-16 px-4 md:px-20 bg-gray-100 text-center">
            <h2 className="text-3xl font-bold mb-8">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {steps.map((step, index) => (
                    <div key={index} className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
                        {step.icon}
                        <h3 className="text-xl font-semibold mt-3">{step.title}</h3>
                        <p className="text-gray-600 text-sm mt-1">{step.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};
export default HowItWorks ;