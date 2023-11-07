import cn from 'classnames';
import Image from 'next/image';
import DoneIcon from '@mui/icons-material/Done';
import styles from './index.module.scss';

interface RoadmapCardProps {
  body: JSX.Element;
  current?: boolean;
  completed?: boolean;
  completionDate?: string;
  divider?: boolean;
  image?: { src: string; width: number; height: number; style: { top: string; right?: string } };
  title: string;
}

export const renderRoadmapCard = (item: RoadmapCardProps) => <RoadmapCard key={item.title} {...item} />;

const RoadmapCard = ({
  body,
  current,
  completed,
  completionDate,
  divider,
  image,
  title,
}: RoadmapCardProps): JSX.Element => (
  <div className={cn(styles.cd_timeline_block, styles.fade_in)}>
    {divider ? (
      <h4 className={styles.cd_timeline_divider}>Options below are TBD!</h4>
    ) : (
      <div className={cn(styles.cd_timeline_checkpoint, { [styles.completed]: completed })}>
        {completed && <DoneIcon className={styles.done_icon} />}
      </div>
    )}

    <div className={styles.cd_timeline_content}>
      {image && (
        <div className={styles.timeline_content_img} style={image.style}>
          <Image
            src={image.src}
            alt={title}
            width={image.width}
            height={image.height}
            sizes="100vw"
            style={{
              width: '100%',
              height: 'auto',
            }}
          />
        </div>
      )}
      <h5>{title}</h5>
      {completed && (
        <div className={styles.timeline_content_info}>
          <span className={styles.timeline_content_info_title}>Mission Accomplished</span>
          <span className={styles.timeline_content_info_date}>{completionDate}</span>
        </div>
      )}
      {body}
    </div>

    {current ? (
      <div className={styles.satoshiStationary}>
        <Image
          src="/img/roadmap/satoshi_stationary.gif"
          alt="satoshi stationary"
          width={200}
          height={200}
          sizes="100vw"
          style={{
            width: '100%',
            height: 'auto',
          }}
        />
      </div>
    ) : null}
  </div>
);

export default RoadmapCard;
