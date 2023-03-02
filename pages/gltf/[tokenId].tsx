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

type SelectGroup = '2D' | '3D' | 'Box' | 'Sprite';

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

export default function DegenViews() {
  const router = useRouter();
  const { tokenId } = router.query;
  const [selected, setSelected] = useState<SelectGroup>('2D');
  const [color, setColor] = useState<Color>('blue');
  const [src, setSrc] = useState(`/degens/3D/${tokenId}.glb`);

  if (!tokenId) return null;

  const switchSrc = (group: SelectGroup, path?: string) => {
    if (['3D', 'Box'].includes(group)) {
      setSrc(path as string);
      if (group === '3D') setColor('salmon');
      else if (group === 'Box') setColor('bluepurple');
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
        {selected === '2D' && (
          <Image
            alt="NiftyDegen 2D NFT"
            className={styles.image}
            fill
            priority
            quality={100}
            src={`/img/degens/${tokenId}.${LEGGIES.includes(Number(tokenId)) ? 'gif' : 'png'}`}
          />
        )}
        {selected === 'Sprite' && (
          <Image
            alt="Degen Sprite"
            className={styles.sprite}
            fill
            priority
            src={`${DEGEN_BASE_SPRITE_URL}/${tokenId}.gif`}
          />
        )}
        <div
          className={cn(styles.wrapper, {
            ...(['3D', 'Box'].includes(selected) && {
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
            {['3D', 'Box'].includes(selected) && (
              <model-viewer
                id={styles.main__viewer}
                max-camera-orbit="Infinity 100deg auto"
                min-camera-orbit="-Infinity 0deg 300%"
                auto-rotate="false"
                animation-name="Idle"
                interaction-bounds="none"
                // @ts-ignore
                scale="0.5 0.5 0.5"
                orientation="0 0 200deg"
                interaction-prompt="none"
                camera-controls="true"
                shadow-intensity="1"
                exposure="1"
                shadow-softness="0.8"
                autoplay="true"
                ar-status="not-presenting"
                touch-action="pan-y"
                src={src}
                alt="3D model of Nifty Degen"
              />
            )}
            <div className={styles.menu__overlay}>
              <div className={styles.menu__overlay__dimension}>
                <div className={styles.menu__overlay__boggs}>
                  <ButtonGroup variant="contained" aria-label="outlined primary button group">
                    <Button
                      onClick={() => switchSrc('2D')}
                      className={cn(styles.btn, { [styles.btn_selected]: selected === '2D' })}
                    >
                      2D
                    </Button>
                    {/* <Button
                      onClick={() => switchSrc('3D', `/degens/3D/${tokenId}.glb`)}
                      className={cn(styles.btn, { [styles.btn_selected]: selected === '3D' })}
                    >
                      3D
                    </Button>
                    <Button
                      onClick={() => switchSrc('Box', `/degens/boxes/${tokenId}.glb`)}
                      className={cn(styles.btn, { [styles.btn_selected]: selected === 'Box' })}
                    >
                      Box
                    </Button> */}
                    <Button
                      onClick={() => switchSrc('Sprite')}
                      className={cn(styles.btn, { [styles.btn_selected]: selected === 'Sprite' })}
                    >
                      Sprite
                    </Button>
                  </ButtonGroup>
                </div>
              </div>
              {['3D', 'Box'].includes(selected) && (
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
                </div>
              )}
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
