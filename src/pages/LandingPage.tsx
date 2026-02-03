import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import classes from './LandingPage.module.css';
import SwipeCards from '../components//SwipeCards/SwipeCards'; // Adjust path if needed

const languages = [
  "Hello",
  "Hola",
  "Bonjour",
  "你好", 
  "こんにちは",
  "안녕하세요", 
  "Xin chào",
];

export function LandingPage() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % languages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={classes.container}>
      <div className={classes.contentGroup}>
        
        {/* Left Side: Text */}
        <div className={classes.textWrapper}>
          <div className={classes.scrollContainer}>
            {languages.map((word) => (
              <span key={word} className={classes.ghostText}>
                {word}
              </span>
            ))}

            <AnimatePresence mode="popLayout">
              <motion.span
                key={index}
                className={classes.animatingText}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{
                  y: { type: "spring", stiffness: 100, damping: 20 },
                  opacity: { duration: 0.2 }
                }}
              >
                {languages[index]}
              </motion.span>
            </AnimatePresence>
          </div>

          <span className={classes.staticText}>
            I'm <span className={classes.highlight}>Gordon</span>
          </span>
          <span className={classes.infoText}>
            <span className={classes.introText}>20yo software developer</span> based in <span className={classes.singapore}>Singapore</span>
          </span>
          <span></span>
          <span className={classes.mainDescription}> 
            <span>I'm passionate about music, photography, and sports.</span>
            <span>I work on many projects for fun</span>
            </span>
        </div>

        {/* Right Side: Swipe Cards */}
        <div className={classes.cardWrapper}>
  <div className={classes.cardStackAnchor}>
    <SwipeCards />
  </div>
</div>

      </div>
    </div>
  );
}