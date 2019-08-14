import React from "react";
import ReactDOM from "react-dom";
import { motion } from "framer-motion";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <motion.div
        className="speechBubble"
        aria-label="speechBubble"
        role="img"
        animate={{
          scale: [0.6, 0.7, 0.6, 0.7, 0.6]
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.25, 0.5, 0.75, 1],
          loop: Infinity,
          repeatDelay: 0
        }}
      >
        <span role="img" aria-label="speechBubble">
          💬
        </span>
      </motion.div>
      <motion.div
        className="penguin"
        aria-label="penguin"
        role="img"
        animate={{
          scale: [1, 1.5, 2, 2.5, 2]
        }}
        transition={{
          duration: 0.5,
          ease: "easeInOut"
        }}
        whileHover={{ scale: 2.5 }}
        whileTap={{ rotate: [5, -5, 5, 0] }}
      >
        <span role="img" aria-label="Penguin">
          🐧
        </span>
      </motion.div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
