import { useEffect, useState } from 'react';
import { Button } from '@mantine/core';
import { motion, AnimatePresence } from 'framer-motion';
import carousel1 from '../assets/carousel_1.jpg';
import classes from './LandingPage.module.css';
import ImageCarousel, { type CarouselItem } from '../components/ImageCarousel/ImageCarousel';
import SwipeCards from '../components/SwipeCards/SwipeCards';

const languages = [
  "Hello",
  "Hola",
  "Bonjour",
  "你好",
  "こんにちは",
  "안녕하세요",
  "Xin chào",
];

const passionItems: CarouselItem[] = [
  { id: 'ui', title: 'Bouldering', src: carousel1, alt: 'Placeholder for frontend UI projects' },
  { id: 'apps', title: 'Music', alt: 'Placeholder for app screenshots', accent: '#0ea5e9' },
  { id: 'motion', title: 'Coding', alt: 'Placeholder for motion experiments', accent: '#22c55e' },
  { id: 'brand', title: 'Sports', alt: 'Placeholder for branding work', accent: '#eab308' },
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
        </div>

        {/* Right Side: Swipe Cards */}
        <div className={classes.cardWrapper}>
          <div className={classes.cardStackAnchor}>
            <SwipeCards />
            <span className={classes.caption}>My cool pics</span>
          </div>
        </div>
      </div>

      <div className={classes.mainDescription}>
        <span className={classes.passionLabel}>I'm passionate about:</span>
        <ImageCarousel items={passionItems} />
        <Button
          component="a"
          href="#"
          onClick={(event) => event.preventDefault()}
          className={classes.projectsButton}
          radius="xl"
          size="md"
        >
          View my projects
        </Button>
      </div>
    </div>
  );
}
