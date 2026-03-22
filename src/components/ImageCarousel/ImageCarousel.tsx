import { ActionIcon } from '@mantine/core';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import { useState, type CSSProperties } from 'react';
import classes from './ImageCarousel.module.css';

export type CarouselItem = {
  id: string;
  alt: string;
  title: string;
  src?: string;
  accent?: string;
};

type ImageCarouselProps = {
  items: CarouselItem[];
};

export default function ImageCarousel({ items }: ImageCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (items.length === 0) {
    return null;
  }

  const activeItem = items[activeIndex];
  const slideStyle = {
    '--slide-accent': activeItem.accent ?? 'var(--mantine-color-mist-6)',
  } as CSSProperties;

  const showPrevious = () => {
    setActiveIndex((current) => (current - 1 + items.length) % items.length);
  };

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % items.length);
  };

  return (
    <div className={classes.carousel}>
      <div className={classes.frame}>
        <article className={classes.slide} style={slideStyle}>
          {activeItem.src ? (
            <img
              src={activeItem.src}
              alt={activeItem.alt}
              className={classes.image}
              draggable={false}
            />
          ) : (
            <div className={classes.placeholder} aria-hidden="true">
              <span className={classes.placeholderText}>Image coming soon</span>
            </div>
          )}

          <div className={classes.caption}>
            <span>{activeItem.title}</span>
          </div>
        </article>
      </div>

      {items.length > 1 ? (
        <>
          <div className={classes.dots} aria-label="Carousel progress">
            {items.map((item, index) => (
              <span
                key={item.id}
                className={index === activeIndex ? classes.dotActive : classes.dot}
                style={
                  index === activeIndex
                    ? ({ '--dot-accent': item.accent ?? 'var(--mantine-color-mist-6)' } as CSSProperties)
                    : undefined
                }
              />
            ))}
          </div>

          <ActionIcon
            variant="transparent"
            radius="xl"
            size="lg"
            className={`${classes.arrowButton} ${classes.arrowLeft}`}
            onClick={showPrevious}
            aria-label="Show previous image"
          >
            <IconChevronLeft size={20} stroke={2.2} />
          </ActionIcon>

          <ActionIcon
            variant="transparent"
            radius="xl"
            size="lg"
            className={`${classes.arrowButton} ${classes.arrowRight}`}
            onClick={showNext}
            aria-label="Show next image"
          >
            <IconChevronRight size={20} stroke={2.2} />
          </ActionIcon>
        </>
      ) : null}
    </div>
  );
}
