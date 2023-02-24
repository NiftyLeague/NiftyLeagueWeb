import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';
import Script from 'next/script';
import cn from 'classnames';
import styles from './gltf.module.scss';

export const DEGEN_BASE_API_URL = 'https://nifty-league.s3.amazonaws.com';
export const DEGEN_BASE_IMAGE_URL = `${DEGEN_BASE_API_URL}/degens/mainnet/images/`;

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

  const switchSrc = (group: SelectGroup, path: string) => {
    if (['3D', 'Box'].includes(group)) {
      setSrc(path);
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
        <title>Nifty League DEGEN #{tokenId}</title>
        <meta name="description" content="About Nifty League and our team" />
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
          <Image alt="NiftyDegen 2D NFT" priority className={styles.image} fill src={`/degens/2D/${tokenId}.png`} />
        )}
        {selected === 'Sprite' && (
          <div className={styles.sprite}>
            <Image alt="Degen Sprite Background" className={styles.image} fill priority src="/degens/sprites/bg.png" />
            <Image
              alt="Degen Sprite"
              className={styles.image}
              fill
              priority
              src="https://pixls.blob.core.windows.net/images/animated-sprite/3058.gif"
            />
          </div>
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
                  <button
                    type="button"
                    onClick={() => switchSrc('2D', `/degens/2D/${tokenId}.png`)}
                    style={{ backgroundColor: selected === '2D' ? '#8484e4' : 'White' }}
                  >
                    2D
                  </button>
                  <button
                    type="button"
                    onClick={() => switchSrc('3D', `/degens/3D/${tokenId}.glb`)}
                    style={{ backgroundColor: selected === '3D' ? '#8484e4' : 'White' }}
                  >
                    3D
                  </button>
                  <button
                    type="button"
                    onClick={() => switchSrc('Box', `/degens/boxes/${tokenId}.glb`)}
                    style={{ backgroundColor: selected === 'Box' ? '#8484e4' : 'White' }}
                  >
                    Box
                  </button>
                  <button
                    type="button"
                    onClick={() => switchSrc('Sprite', `/degens/spritess/${tokenId}.webp`)}
                    style={{ backgroundColor: selected === 'Sprite' ? '#8484e4' : 'White' }}
                  >
                    Sprite
                  </button>
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
