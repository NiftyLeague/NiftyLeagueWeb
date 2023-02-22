import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';
import Script from 'next/script';
import cn from 'classnames';

import ErrorPage from 'next/error';
import { GetStaticProps, GetStaticPaths } from 'next';
import { ParsedUrlQuery } from 'querystring';
import styles from './gltf.module.scss';
import * as React from 'react';

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

export default function PostView({ preview }: { preview: boolean }) {
  const router = useRouter();
  const { tokenId } = router.query;
  const [selected, setSelected] = useState<SelectGroup>('2D');
  const [src, setSrc] = useState(`/degens/3D/${tokenId}.glb`);

  if (!router.isFallback && !tokenId) return <ErrorPage statusCode={404} />;

  const switchSrc = (group: SelectGroup, path: string) => {
    if (group !== '2D' && group !== 'Sprite') setSrc(path);
    setSelected(group);
  };

  return (
    <>
      <Head>
        <title>Nifty League | About</title>
        <meta name="description" content="About Nifty League and our team" />
      </Head>
      <Script type="module" src="https://ajax.googleapis.com/ajax/libs/model-viewer/3.0.1/model-viewer.min.js"></Script>
      <div className={styles.root}>
        {selected === '2D' && (
          <Image
            alt="NiftyDegen 2D NFT"
            className={styles.image}
            fill
            objectFit="cover"
            objectPosition="top left"
            src={`/degens/2D/${tokenId}.png`}
          />
        )}
        {selected === 'Sprite' && (
          <div className={styles.sprite}>
            <Image
              alt="Degen Sprite Background"
              className={styles.image}
              fill
              objectFit="cover"
              src="/degens/sprites/bg-2.png"
            />
            <Image
              alt="Degen Sprite"
              className={styles.image}
              fill
              objectFit="cover"
              objectPosition="top left"
              src="https://pixls.blob.core.windows.net/images/animated-sprite/3058.gif"
            />
          </div>
        )}
        <div
          className={cn(styles.wrapper, {
            [styles.gradient_salmon]: selected === '3D',
            [styles.gradient_blue]: selected === 'Box',
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
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
