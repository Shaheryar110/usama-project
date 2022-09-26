import React from "react";
import { motion } from "framer-motion";
import "../App.css";
import ParentCard from "./ParentCard";

const Sidebar = () => {
  return (
    <div className="main-container">
      <motion.div animate={{ width: [0, 280] }} className="sidebar">
        <ParentCard />
      </motion.div>
    </div>
  );
};

export default Sidebar;
