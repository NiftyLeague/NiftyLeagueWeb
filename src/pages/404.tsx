import Head from 'next/head';
import { styled } from '@mui/material/styles';
import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import Layout from '@/components/Layout';

// styles
const CardMediaWrapper = styled('div')({
  maxWidth: 720,
  margin: '0 auto',
  position: 'relative',
});

const ErrorWrapper = styled('div')({
  maxWidth: 350,
  margin: '0 auto',
  textAlign: 'center',
});

const ErrorCard = styled(Card)({
  paddingTop: '100px',
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'transparent',
  color: 'white',
});

const CardMediaBlock = styled('img')({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  animation: '3s bounce ease-in-out infinite',
});

const CardMediaBlue = styled('img')({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  animation: '15s wings ease-in-out infinite',
});

const CardMediaPurple = styled('img')({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  animation: '12s wings ease-in-out infinite',
});

// ==============================|| ERROR PAGE ||============================== //

const NotFoundPage = () => {
  return (
    <Layout>
      <Head>
        <title>Nifty League | 404</title>
      </Head>
      <ErrorCard>
        <CardContent>
          <Grid container justifyContent="center" spacing={2}>
            <Grid item xs={12}>
              <CardMediaWrapper>
                <CardMedia component="img" image={'/img/maintenance/img-error-bg-dark.svg'} title="Slider5 image" />
                <CardMediaBlock src={'/img/maintenance/img-error-text.svg'} title="Slider 1 image" />
                <CardMediaBlue src={'/img/maintenance/img-error-blue.svg'} title="Slider 2 image" />
                <CardMediaPurple src={'/img/maintenance/img-error-purple.svg'} title="Slider 3 image" />
              </CardMediaWrapper>
            </Grid>
            <Grid item xs={12}>
              <ErrorWrapper>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Typography variant="h4" component="div">
                      Something is wrong
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="body2">
                      The page you are looking was moved, removed, renamed, or might have never exist!{' '}
                    </Typography>
                  </Grid>
                </Grid>
              </ErrorWrapper>
            </Grid>
          </Grid>
        </CardContent>
      </ErrorCard>
    </Layout>
  );
};

export default NotFoundPage;
