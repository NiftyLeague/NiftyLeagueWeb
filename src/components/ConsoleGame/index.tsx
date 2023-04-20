import { memo } from 'react';
import Image from 'next/image';
import AnimatedWrapper from '@/components/AnimatedWrapper';
import styles from './index.module.scss';

const ConsoleGame = ({ src }: { src: string }) => {
  return (
    <div className="position-relative">
      <AnimatedWrapper>
        <div className="position-relative flex-grow-1 animated-fade-slow animated-fade-start transition-delay-small animation-sm-hidden">
          <Image
            alt="Classic Gaming Reinvented"
            className="pixelated"
            width={4842}
            height={3371}
            layout="responsive"
            src="/img/home/classic-gaming-reinvented-notv.png"
            priority
          />
          <video
            width="100%"
            height="100%"
            muted
            autoPlay
            loop
            playsInline
            data-keepplaying
            className={styles.game_video}
          >
            <source src={src} type="video/mp4" />
          </video>
          <div className="position-absolute gaming-bonk animated-fade-start animated-fade transition-delay-medium">
            <Image
              alt="Classic Gaming Reinvented Bonk"
              className="pixelated"
              width={4842}
              height={3371}
              layout="responsive"
              src="/img/home/bonk.png"
              priority
            />
          </div>
        </div>
      </AnimatedWrapper>
      <div className={styles.gaming_controller}>
        <AnimatedWrapper parallax parallaxDirection="bottom" transitionAmount="medium">
          <div className="animation-bounce animated-fade-start animated-fade transition-delay-large">
            <Image
              alt="Classic Gaming Reinvented Controller Left"
              className="pixelated"
              width={4842}
              height={3371}
              layout="responsive"
              src="/img/home/gaming_controller_left.png"
              priority
            />
          </div>
        </AnimatedWrapper>
      </div>
      <div className={styles.gaming_controller}>
        <AnimatedWrapper parallax parallaxDirection="bottom" transitionAmount="medium">
          <div className="animation-bounce2 animated-fade-start animated-fade transition-delay-large">
            <Image
              alt="Classic Gaming Reinvented Controller Right"
              className="pixelated"
              width={4842}
              height={3371}
              layout="responsive"
              src="/img/home/gaming_controller_right.png"
              priority
            />
          </div>
        </AnimatedWrapper>
      </div>
      <div className="radial-gradient-background" />
    </div>
  );
};

export default memo(ConsoleGame);
