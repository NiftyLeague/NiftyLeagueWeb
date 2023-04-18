import { useEffect, Dispatch, SetStateAction, useState } from 'react';
import { useRouter } from 'next/router';
import { CircularProgress } from '@mui/material';
import { DEGEN_3D_MODEL_URL } from '@/constants/degens';
import { SRC, Color } from '@/types/gltf';
import styles from '@/styles/gltf.module.scss';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}

export function ModelView({ selected }: { selected: SRC }) {
  const router = useRouter();
  const { tokenId } = router.query;
  const [loading, setLoading] = useState(true);
  const MODEL_SRC = `${DEGEN_3D_MODEL_URL}/${tokenId}/${tokenId}.gltf`;
  const POSTER_SRC = `${DEGEN_3D_MODEL_URL}/${tokenId}/${tokenId}.webp`;

  const handleProgress = (event: Event) => {
    // @ts-ignore
    const progress = event?.detail?.totalProgress || 0;
    if (progress === 1) setLoading(false);
  };

  useEffect(() => {
    const model = document?.querySelector('#model-viewer');
    if (model) model.addEventListener('progress', handleProgress);
    return function cleanup() {
      if (model) model.removeEventListener('progress', handleProgress);
    };
  }, []);

  return (
    <>
      {selected === SRC.MODEL && loading ? (
        <div style={{ minHeight: '100vh', width: '100%', position: 'absolute', display: 'flex', zIndex: 2 }}>
          <CircularProgress color="secondary" style={{ margin: 'auto', width: 75, height: 'auto' }} />
        </div>
      ) : null}
      <model-viewer
        // https://modelviewer.dev/docs/index.html#loading-attributes
        id="model-viewer"
        alt="Nifty League DEGEN 3D model"
        style={selected === SRC.MODEL ? { minHeight: '100vh', width: '100%' } : { display: 'none' }}
        src={MODEL_SRC}
        // @ts-ignore
        poster={POSTER_SRC}
        loading="eager"
        exposure="0.72"
        shadow-intensity="1"
        shadow-softness="0.8"
        camera-controls="true"
        touch-action="pan-y"
        auto-rotate="true"
        auto-rotate-delay="1000"
        interaction-prompt="auto"
        interaction-prompt-threshold="10000"
        disable-tap="true"
        // ar="true"
        // ar-modes="webxr scene-viewer quick-look"
        // ar-status="not-presenting"
        // interaction-bounds="none"
        // animation-name="Idle"
        // max-camera-orbit="Infinity 100deg auto"
        // min-camera-orbit="-Infinity 0deg 300%"
        // scale="0.5 0.5 0.5"
        // orientation="0 0 200deg"
      />
    </>
  );
}

type ModelActionsProps = {
  color: Color;
  setColor: Dispatch<SetStateAction<Color>>;
};

export function ModelActions({ color, setColor }: ModelActionsProps) {
  const handleSelectColor = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setColor(e.target.value as Color);
  };

  return (
    <div className={styles.menu__overlay__colorpicker}>
      <select
        name="background"
        className={styles.background__picker}
        title="Background"
        onChange={e => handleSelectColor(e)}
        value={color}
      >
        <option value="blue">Blue</option>
        <option value="bluegreen">Blue Green</option>
        <option value="bluepurple">Blue Purple</option>
        <option value="bluegrey">Blue Grey</option>
        <option value="brown">Brown</option>
        <option value="green">Green</option>
        <option value="greenish">Greenish</option>
        <option value="lightblue">Light Blue</option>
        <option value="ochre">Ochre</option>
        <option value="ochretwo">Ochre Two</option>
        <option value="palepink">Pale Pink</option>
        <option value="purple">Purple</option>
        <option value="salmon">Salmon</option>
        <option value="yellow">Yellow</option>
      </select>

      {/* <button slot="ar-button" id="ar-button">
        View in your space
      </button>
      <div id="ar-prompt">
        <img src="https://modelviewer.dev/shared-assets/icons/hand.png" />
      </div> */}
    </div>
  );
}

export default ModelView;
