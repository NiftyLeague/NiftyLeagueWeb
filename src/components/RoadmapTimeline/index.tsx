import { renderRoadmapCard } from './roadmapCard';
import { ROADMAP_CARDS } from './constants';
import styles from './index.module.scss';

const RoadmapTimeline = () => {
  return (
    <section id={styles.cd_timeline} className={styles.cd_container}>
      {ROADMAP_CARDS.map(renderRoadmapCard)}
    </section>
  );
};

export { styles };

export default RoadmapTimeline;
