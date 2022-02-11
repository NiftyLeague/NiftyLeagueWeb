export default function Intro() {
  return (
    <>
      <div className="overlay-dark" />
      <div className="overlay-gradient-top" />
      <div className="overlay-gradient-bottom" />
      <div className="container my-5">
        <div className="row m-0 p-0 position-relative d-flex flex-column py-5  float-end text-end">
          <h4 className="text-m-center">Nifty League</h4>
          <h1 className="text-m-center">Blog</h1>
          <p className="my-3 text-m-center">
            Stay up to date with the latest news
            <br /> and annoucements from Nifty League!
          </p>
        </div>
      </div>
      <img className="earth-grad" src="/img/community/earth-grad.svg" />
    </>
  );
}
