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
import useClaimableNFTL from '@/hooks/useClaimableNFTL';
import { formatNumberToDisplay } from '@/lib/numbers';

import styles from '@/styles/gltf.module.scss';

const ModelView = dynamic(() => import('@/components/ModelView'));
const ModelActions = dynamic(() => import('@/components/ModelView').then(mod => mod.ModelActions));

export default function DegenViews() {
  const router = useRouter();
  const { tokenId } = router.query;
  const [source, setSource] = useState<SRC>(SRC.IMAGE);
  const [color, setColor] = useState<Color>('purple');
  const IMAGE_SRC = `/img/degens/${tokenId}.${LEGGIES.includes(Number(tokenId)) ? 'gif' : 'png'}`;
  const SPRITE_SRC = `${DEGEN_BASE_SPRITE_URL}/${tokenId}.gif`;
  const { totalAccrued } = useClaimableNFTL(tokenId as string);

  if (!tokenId) return null;

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
        {source === SRC.IMAGE && (
          <Image
            alt="NiftyDegen 2D NFT"
            className={styles.image}
            width={584}
            height={640}
            priority
            quality={100}
            src={IMAGE_SRC}
          />
        )}
        {source === SRC.SPRITE && <Image alt="Degen Sprite" className={styles.sprite} fill priority src={SPRITE_SRC} />}
        {source === SRC.IMAGE && (
          <div className={styles.nftlUnclaimed}>NFTL Unclaimed: {formatNumberToDisplay(totalAccrued)}</div>
        )}
        <div
          className={cn(styles.wrapper, {
            ...(source === SRC.MODEL && {
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
            <ModelView source={source} />
            <div className={styles.menu__overlay}>
              <div className={styles.menu__overlay__dimension}>
                <div className={styles.menu__overlay__boggs}>
                  <ButtonGroup variant="contained" size="small" aria-label="outlined primary button group">
                    <Button
                      onClick={() => setSource(SRC.IMAGE)}
                      className={cn(styles.btn, { [styles.btn_selected]: source === SRC.IMAGE })}
                    >
                      2D
                    </Button>
                    <Button
                      onClick={() => setSource(SRC.MODEL)}
                      className={cn(styles.btn, { [styles.btn_selected]: source === SRC.MODEL })}
                    >
                      3D
                    </Button>
                    <Button
                      onClick={() => setSource(SRC.SPRITE)}
                      className={cn(styles.btn, { [styles.btn_selected]: source === SRC.SPRITE })}
                    >
                      Sprite
                    </Button>
                  </ButtonGroup>
                </div>
              </div>
              {source === SRC.MODEL && <ModelActions color={color} setColor={setColor} />}
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
