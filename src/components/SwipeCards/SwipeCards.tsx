import { useState, Dispatch, SetStateAction } from "react";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import { Button, Box } from "@mantine/core";
import { IconRefresh } from "@tabler/icons-react";
import classes from "./SwipeCards.module.css";

// Use your own images here
const cardData: CardType[] = [
  { id: 1, url: "/src/assets/slider_2.jpg" }, // Your current profile pic
  { id: 2, url: "/src/assets/slider_1.png" }, // Placeholder Shoe
  { id: 3, url: "/src/assets/profile.jpg" }, // Placeholder City
];

type CardType = {
  id: number;
  url: string;
};

const SwipeCards = () => {
  const [cards, setCards] = useState<CardType[]>(cardData);

  const resetCards = () => {
    setCards(cardData);
  };

  return (
    <div className={classes.container}>
      {cards.length === 0 && (
        <div className={classes.resetContainer}>
          <Button onClick={resetCards} variant="outline" color="gray" leftSection={<IconRefresh size={16} />}>
            Reset
          </Button>
        </div>
      )}
      {cards.map((card, index) => {
        const depth = cards.length - 1 - index;
        return (
          <Card
            key={card.id}
            cards={cards}
            setCards={setCards}
            depth={depth}
            {...card}
          />
        );
      })}
    </div>
  );
};

const Card = ({
  id,
  url,
  setCards,
  cards,
  depth,
}: {
  id: number;
  url: string;
  setCards: Dispatch<SetStateAction<CardType[]>>;
  cards: CardType[];
  depth: number;
}) => {
  const x = useMotionValue(0);
  const rotateRaw = useTransform(x, [-150, 150], [-18, 18]);
  const opacity = useTransform(x, [-100, 0, 100], [0, 1, 0]);

  const isFront = id === cards[cards.length - 1]?.id;

  const rotate = useTransform(() => {
    const offset = isFront ? 0 : id % 2 ? 6 : -6;
    return `${rotateRaw.get() + offset}deg`;
  });

  const handleDragEnd = (_: any, info: { offset: { x: number } }) => {
    if (Math.abs(info.offset.x) > 100) {
      setCards((pv) => pv.filter((v) => v.id !== id));
    } else {
      animate(x, 0, {
        type: "spring",
        stiffness: 400,
        damping: 40,
      });
    }
  };

  return (
    <motion.div
      className={classes.card}
      style={{
        gridRow: 1,
        gridColumn: 1,
        x,
        opacity,
        rotate,
        zIndex: isFront ? 10 : depth,
        cursor: isFront ? "grab" : "default",
        boxShadow: isFront
          ? "0 10px 15px -3px rgb(0 0 0 / 0.3), 0 4px 6px -4px rgb(0 0 0 / 0.3)"
          : undefined,
      }}
      animate={{
        scale: isFront ? 1 : Math.max(0.85, 0.94 - depth * 0.04),
      }}
      drag={isFront ? "x" : false}
      dragConstraints={{
        left: -150,
        right: 150,
        top: 0,
        bottom: 0,
      }}
      onDragEnd={handleDragEnd}
      whileTap={{ cursor: "grabbing" }}
    >
      <img
        src={url}
        alt="Swipe Card"
        className={classes.image}
        draggable={false}
      />
    </motion.div>
  );
};

export default SwipeCards;