import { useEffect, Dispatch, SetStateAction, useState } from 'react';
import { useRouter } from 'next/router';
import { styled } from '@mui/material/styles';
import CircularProgress from '@mui/material/CircularProgress';
import FormControl from '@mui/material/FormControl';
import InputBase from '@mui/material/InputBase';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
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

const COLOR_OPTIONS = [
  ['blue', 'Blue'],
  ['bluegreen', 'Blue Green'],
  ['bluepurple', 'Blue Purple'],
  ['bluegrey', 'Blue Grey'],
  ['brown', 'Brown'],
  ['green', 'Green'],
  ['greenish', 'Greenish'],
  ['lightblue', 'Light Blue'],
  ['ochre', 'Ochre'],
  ['ochretwo', 'Ochre Two'],
  ['palepink', 'Pale Pink'],
  ['purple', 'Purple'],
  ['salmon', 'Salmon'],
  ['yellow', 'Yellow'],
];

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: 20,
  },
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    color: '#5f4ce6',
    backgroundColor: '#fff',
    border: '1px solid #5f4ce6',
    padding: '0.3rem 1rem 0.3rem 0.8rem',
    fontSize: '0.8125rem',
    textTransform: 'uppercase',
    boxShadow: '0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)',
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      backgroundColor: '#fff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}));

export function ModelActions({ color, setColor }: ModelActionsProps) {
  const handleSelectColor = (e: SelectChangeEvent) => {
    setColor(e.target.value as Color);
  };

  return (
    <div className={styles.menu__overlay__colorpicker}>
      <FormControl style={{ minWidth: 135 }} size="small" variant="standard">
        <Select
          id="background-select"
          className={styles.background__picker}
          value={color}
          label="Background"
          onChange={handleSelectColor}
          input={<BootstrapInput />}
        >
          {COLOR_OPTIONS.map(([value, name]) => (
            <MenuItem value={value} key={value}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* <Button slot="ar-button" id="ar-button">
        View in your space
      </Button> */}
    </div>
  );
}

export default ModelView;
