import { useState } from 'react';
import { useRouter } from 'next/router';
import { ButtonGroup, Button } from '@mui/material';
import Head from 'next/head';
import Image from 'next/image';
import Script from 'next/script';
import cn from 'classnames';
import styles from './gltf.module.scss';

const DEGEN_BASE_API_URL = 'https://nifty-league.s3.amazonaws.com';
const DEGEN_BASE_IMAGE_URL = `${DEGEN_BASE_API_URL}/degens/mainnet/images`;
const DEGEN_BASE_SPRITE_URL = `${DEGEN_BASE_API_URL}/assets/raw/gifs-retro`;
const DEGEN_3D_BOX_URL = `${DEGEN_BASE_API_URL}/assets/gltfs/v2`;

const LEGGIES = [
  150, 225, 293, 456, 831, 863, 868, 872, 948, 974, 998, 1008, 1041, 1124, 1218, 1362, 1402, 1439, 1453, 1485, 1486,
  1509, 1524, 1640, 1676, 2065, 2069, 2170, 2199, 2399, 2500, 2754, 2886, 3070, 3213, 3313, 3390, 3392, 3403, 3454,
  3568, 3667, 3722, 3767, 3776, 3803, 3925, 3963, 3980, 4078, 4193, 4300, 4311, 4342, 4491, 4498, 4576, 4588, 4627,
  4706, 4768, 4857, 4867, 5064, 5073, 5082, 5178, 5504, 5547, 5555, 5783, 5908, 6088, 6140, 6203, 6628, 6963, 7215,
  7222, 7458, 7548, 7616, 7834, 7845, 8039, 8140, 8239, 8290, 8461, 8506, 8614, 8741, 8807, 8812, 8863, 8877, 8902,
  8994, 9626, 9792, 9810, 9835, 9845, 9924,
];

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}

type Color =
  | 'salmon'
  | 'purple'
  | 'blue'
  | 'bluegrey'
  | 'bluepurple'
  | 'green'
  | 'bluegreen'
  | 'brown'
  | 'ochre'
  | 'palepink'
  | 'yellow'
  | 'greenish'
  | 'lightblue'
  | 'ochretwo';

enum SRC {
  IMAGE = '2D',
  SPRITE = 'Sprite',
  BOX = 'Box',
  UNBOXED = '3D',
}

export default function DegenViews() {
  const router = useRouter();
  const { tokenId } = router.query;
  const [selected, setSelected] = useState<SRC>(SRC.IMAGE);
  const [color, setColor] = useState<Color>('blue');
  const IMAGE_SRC = `/img/degens/${tokenId}.${LEGGIES.includes(Number(tokenId)) ? 'gif' : 'png'}`;
  const SPRITE_SRC = `${DEGEN_BASE_SPRITE_URL}/${tokenId}.gif`;
  const BOX_SRC = `${DEGEN_3D_BOX_URL}/${tokenId}/${tokenId}.gltf`;
  const BOX_POSTER_SRC = `${DEGEN_3D_BOX_URL}/${tokenId}/${tokenId}.webp`;
  const UNBOXED_SRC = `${DEGEN_3D_BOX_URL}/${tokenId}/${tokenId}.gltf`;
  const UNBOXED_POSTER_SRC = `${DEGEN_3D_BOX_URL}/${tokenId}/${tokenId}.webp`;
  const [modelSrc, setModelSrc] = useState(BOX_SRC);
  const [posterSrc, setPosterSrc] = useState(BOX_POSTER_SRC);

  if (!tokenId) return null;

  const switchSrc = (group: SRC) => {
    switch (group) {
      case SRC.BOX:
        setModelSrc(BOX_SRC);
        setPosterSrc(BOX_POSTER_SRC);
        setColor('brown');
        break;
      case SRC.UNBOXED:
        setModelSrc(UNBOXED_SRC);
        setPosterSrc(UNBOXED_POSTER_SRC);
        setColor('bluepurple');
        break;
      default:
        break;
    }
    setSelected(group);
  };

  const handleSelectColor = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setColor(e.target.value as Color);
  };

  return (
    <>
      <Head>
        <title>NiftyDegen Model Viewer</title>
        <meta name="description" content="Nifty League Degen 2D & 3D Asset" />
      </Head>
      <style jsx global>{`
        body,
        html {
          margin: 0;
          height: 100%;
          overflow: hidden;
        }
        body {
          background-color: #fff;
          margin: 0;
          padding: 0;
        }
      `}</style>
      <Script type="module" src="https://ajax.googleapis.com/ajax/libs/model-viewer/3.0.1/model-viewer.min.js"></Script>
      <div className={styles.root}>
        {selected === SRC.IMAGE && (
          <Image alt="NiftyDegen 2D NFT" className={styles.image} fill priority quality={100} src={IMAGE_SRC} />
        )}
        {selected === SRC.SPRITE && (
          <Image alt="Degen Sprite" className={styles.sprite} fill priority src={SPRITE_SRC} />
        )}
        <div
          className={cn(styles.wrapper, {
            ...([SRC.BOX, SRC.UNBOXED].includes(selected) && {
              [styles.gradient_salmon]: color === 'salmon',
              [styles.gradient_purple]: color === 'purple',
              [styles.gradient_blue]: color === 'blue',
              [styles.gradient_bluegrey]: color === 'bluegrey',
              [styles.gradient_bluepurple]: color === 'bluepurple',
              [styles.gradient_green]: color === 'green',
              [styles.gradient_bluegreen]: color === 'bluegreen',
              [styles.gradient_brown]: color === 'brown',
              [styles.gradient_ochre]: color === 'ochre',
              [styles.gradient_palepink]: color === 'palepink',
              [styles.gradient_yellow]: color === 'yellow',
              [styles.gradient_greenish]: color === 'greenish',
              [styles.gradient_lightblue]: color === 'lightblue',
              [styles.gradient_ochretwo]: color === 'ochretwo',
            }),
          })}
        >
          <main className={styles.main__wrapper}>
            {[SRC.BOX, SRC.UNBOXED].includes(selected) && (
              <model-viewer
                // https://modelviewer.dev/docs/index.html#entrydocs-loading-attributes-poster
                id={styles.main__viewer}
                src={modelSrc}
                // @ts-ignore
                poster={posterSrc}
                alt="Nifty League DEGEN 3D model"
                loading="eager"
                exposure="0.72"
                shadow-intensity="1"
                shadow-softness="0.8"
                camera-controls="true"
                touch-action="pan-x"
                auto-rotate="true"
                auto-rotate-delay="1000"
                interaction-prompt="auto"
                interaction-prompt-threshold="5000"
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
            )}
            <div className={styles.menu__overlay}>
              <div className={styles.menu__overlay__dimension}>
                <div className={styles.menu__overlay__boggs}>
                  <ButtonGroup variant="contained" aria-label="outlined primary button group">
                    <Button
                      onClick={() => switchSrc(SRC.IMAGE)}
                      className={cn(styles.btn, { [styles.btn_selected]: selected === SRC.IMAGE })}
                    >
                      2D
                    </Button>
                    {/* <Button
                      onClick={() => switchSrc(SRC.UNBOXED)}
                      className={cn(styles.btn, { [styles.btn_selected]: selected === SRC.UNBOXED })}
                    >
                      3D
                    </Button> */}
                    <Button
                      onClick={() => switchSrc(SRC.BOX)}
                      className={cn(styles.btn, { [styles.btn_selected]: selected === SRC.BOX })}
                    >
                      Box
                    </Button>
                    <Button
                      onClick={() => switchSrc(SRC.SPRITE)}
                      className={cn(styles.btn, { [styles.btn_selected]: selected === SRC.SPRITE })}
                    >
                      Sprite
                    </Button>
                  </ButtonGroup>
                </div>
              </div>
              {[SRC.BOX, SRC.UNBOXED].includes(selected) && (
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
              )}
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
