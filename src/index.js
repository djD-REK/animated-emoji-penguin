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
          scale: [6, 7, 6, 7, 6]
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
          scale: [5, 10, 15, 20, 25, 30]
        }}
        transition={{
          duration: 1,
          ease: "easeInOut"
        }}
        whileHover={{ scale: 35 }}
        whileTap={{ rotate: [0, 5, -5, 5, 0] }}
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
