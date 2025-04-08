import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import { NewWelcome } from '@/components/NewWelcome/Welcome.js';
import { Model } from '../components/3DModel/Model.js';
import { WelcomeButton } from '@/components/WelcomeButton/WelcomeButton.js';
import classes from './homepage.module.css';

export function HomePage() {
    const [message, setMessage] = useState("Drag and Scroll around ↓");

    const handleInteractionComplete = () => {
        setMessage("Click to see something different!");
    };

    return (
        <>
            <NewWelcome />
            <div className={classes.carouselContainer}>
                <Swiper
                    modules={[Navigation]}
                    navigation
                    spaceBetween={50}
                    slidesPerView={1}
                    loop
                    allowTouchMove={false}
                >
                    {/* Slide 1: 3D Model */}
                    <SwiperSlide>
                        <div className={classes.modelScreen}>
                            <Model onInteractionComplete={handleInteractionComplete} />
                        </div>
                    </SwiperSlide>

                    {/* Slide 2: Accomplishments */}
                    <SwiperSlide>
                        <div className={classes.accomplishment}>
                            <h2>My Accomplishments</h2>
                            <p>Here you can showcase your accomplishments or other details.</p>
                        </div>
                    </SwiperSlide>

                    {/* Slide 3: Another Feature */}
                    <SwiperSlide>
                        <div className={classes.feature}>
                            <h2>Another Cool Feature</h2>
                            <p>Showcase something else here.
                            No way!
                            </p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <WelcomeButton />
        </>
    );
}
