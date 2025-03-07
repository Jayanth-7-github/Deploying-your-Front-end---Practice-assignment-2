import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function HomePage() {
  const gradients = [
    { bg: "from-blue-400 to-purple-600", shadow: "rgba(255, 165, 0, 0.7)", text: "text-white", card: "bg-gray-800" },
    { bg: "from-green-400 to-blue-600", shadow: "rgba(255, 0, 150, 0.7)", text: "text-white", card: "bg-gray-900" },
    { bg: "from-pink-400 to-red-600", shadow: "rgba(0, 255, 0, 0.7)", text: "text-white", card: "bg-gray-700" },
    { bg: "from-yellow-400 to-orange-600", shadow: "rgba(0, 0, 255, 0.7)", text: "text-white", card: "bg-gray-600" },
  ];

  const [gradient, setGradient] = useState(gradients[0]);
  const [autoChange, setAutoChange] = useState(true);

  useEffect(() => {
    if (!autoChange) return;
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % gradients.length;
      setGradient(gradients[index]);
    }, 3000);
    return () => clearInterval(interval);
  }, [autoChange]);

  return (
    <div className={`flex flex-col items-center justify-center min-h-screen bg-gradient-to-r ${gradient.bg} transition-all duration-1000 p-4 relative`}>
      {/* Floating Emojis */}
      <div className="absolute top-16 left-10 text-4xl animate-bounce">🎉</div>
      <div className="absolute bottom-5 right-10 text-4xl animate-spin">🚀</div>
      <div className="absolute bottom-10 left-10 text-4xl animate-pulse">💡</div>
      
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-gray-900 to-gray-700 p-4 flex justify-between items-center text-white z-50">
        <h1 className="text-2xl font-bold">My Profile</h1>
        <ul className="flex space-x-6">
          <li><a href="#" className="hover:text-gray-300 transition">Home</a></li>
          <li><a href="#" className="hover:text-gray-300 transition">About</a></li>
          <li><a href="#" className="hover:text-gray-300 transition">Projects</a></li>
          <li><a href="#" className="hover:text-gray-300 transition">Contact</a></li>
        </ul>
      </nav>

      {/* Switch Button */}
      <div className="absolute top-16 right-5">
        <label className="flex items-center cursor-pointer">
          <span className="mr-2 text-white text-lg">Auto Change</span>
          <input 
            type="checkbox" 
            className="hidden" 
            checked={autoChange} 
            onChange={() => setAutoChange(!autoChange)}
          />
          <div className={`w-12 h-6 rounded-full p-1 transition duration-300 ${autoChange ? "bg-green-500" : "bg-gray-400"}`}>
            <div className={`w-4 h-4 bg-white rounded-full transform transition duration-300 ${autoChange ? "translate-x-6" : "translate-x-0"}`}></div>
          </div>
        </label>
      </div>

      {/* Rest of the content */}
      <motion.div 
        className={`rounded-2xl p-8 md:p-10 max-w-xs md:max-w-lg text-center relative overflow-hidden w-full mx-auto ${gradient.text} ${gradient.card}`}
        style={{ 
          boxShadow: `0 0 20px 5px ${gradient.shadow}`,
          filter: "drop-shadow(0px 0px 15px rgba(255, 255, 255, 0.8))"
        }}
        whileHover={{ scale: 1.05, boxShadow: `0 0 30px 10px ${gradient.shadow}` }}
        transition={{ duration: 0.3 }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold relative z-10">Jayanth</h1>
        <p className="mt-2 text-lg sm:text-xl md:text-2xl relative z-10">Web Developer</p>
        <div className="mt-4 relative z-10 space-y-2">
          <p className="flex flex-col md:flex-row items-center justify-center space-x-0 md:space-x-2 text-base sm:text-lg md:text-xl">
            <span>📧</span> <span>jayanth@example.com</span>
          </p>
          <p className="flex flex-col md:flex-row items-center justify-center space-x-0 md:space-x-2 text-base sm:text-lg md:text-xl">
            <span>📞</span> <span>+123 456 7890</span>
          </p>
        </div>
        <div className="mt-6 flex flex-col md:flex-row justify-center space-y-2 md:space-y-0 md:space-x-6 relative z-10">
          <motion.a 
            href="#" 
            className="font-semibold hover:underline transform hover:scale-110 transition duration-300 text-lg sm:text-xl md:text-2xl"
          >LinkedIn</motion.a>
          <motion.a 
            href="#" 
            className="font-semibold hover:underline transform hover:scale-110 transition duration-300 text-lg sm:text-xl md:text-2xl"
          >GitHub</motion.a>
        </div>
      </motion.div>
    </div>
  );
}
