import React, { useEffect } from "react";
import useStorage from "../hooks/useStorage";
import "./progressBar.css";
import { motion } from "framer-motion";

const ProgressBar = ({ file, setFile }) => {
  const { url, progress } = useStorage(file);

  console.log("progress", progress, url);

  useEffect(() => {
    if (url) {
      setFile();
    }
  }, [url, setFile]);

  // if (progress !== 100) {
  // }
  return (
    <motion.div
      className="progress-bar"
      initial={{ width: 0 }}
      animate={{ width: progress + "%" }}
    >
      {/* ProgressBar */}
    </motion.div>
  );
};

export default ProgressBar;
