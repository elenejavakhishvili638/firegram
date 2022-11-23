import React from "react";
import useFirestore from "../hooks/useFirestore";
import "./imageGrid.css";
import { motion } from "framer-motion";

const ImageGrid = ({ setSelectedImg, setModal }) => {
  const { docs } = useFirestore("images");
  console.log(docs);

  return (
    <div className="image-grid">
      {docs &&
        docs.map((pic) => (
          <motion.div
            className="image-container"
            key={pic.id}
            layout
            whileHover={{ opacity: 1 }}
            onClick={() => {
              setSelectedImg(pic.url);
              setModal((prevValue) => !prevValue);
            }}
          >
            <motion.img
              src={pic.url}
              alt="pic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            />
          </motion.div>
        ))}
    </div>
  );
};

export default ImageGrid;
