import { renderRoadmapCard } from './roadmapCard';
import { ROADMAP_CARDS } from './constants';
import styles from '../../styles/roadmap.module.scss';

const RoadmapTimeline = () => {
  return (
    <section id={styles.cd_timeline} className={styles.cd_container}>
      {ROADMAP_CARDS.map(renderRoadmapCard)}
    </section>
  );
};

export default RoadmapTimeline;
