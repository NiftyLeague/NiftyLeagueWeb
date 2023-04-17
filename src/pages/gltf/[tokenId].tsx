import { useState } from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Image from 'next/image';
import Script from 'next/script';
import cn from 'classnames';
import { ButtonGroup, Button } from '@mui/material';
import { DEGEN_BASE_SPRITE_URL, LEGGIES } from '@/constants/degens';
import { SRC, Color } from '@/types/gltf';

import styles from '@/styles/gltf.module.scss';

const ModelView = dynamic(() => import('@/components/modelViewer').then(mod => mod.ModelView));
const ModelActions = dynamic(() => import('@/components/modelViewer').then(mod => mod.ModelActions));

export default function DegenViews() {
  const router = useRouter();
  const { tokenId } = router.query;
  const [selected, setSelected] = useState<SRC>(SRC.IMAGE);
  const [color, setColor] = useState<Color>('lightblue');
  const IMAGE_SRC = `/img/degens/${tokenId}.${LEGGIES.includes(Number(tokenId)) ? 'gif' : 'png'}`;
  const SPRITE_SRC = `${DEGEN_BASE_SPRITE_URL}/${tokenId}.gif`;

  if (!tokenId) return null;

  const switchSrc = (group: SRC) => {
    setSelected(group);
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
            ...(selected === SRC.MODEL && {
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
            <ModelView selected={selected} />
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
                    <Button
                      onClick={() => switchSrc(SRC.MODEL)}
                      className={cn(styles.btn, { [styles.btn_selected]: selected === SRC.MODEL })}
                    >
                      3D
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
              {selected === SRC.MODEL && <ModelActions color={color} setColor={setColor} />}
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
