import '../styles/mdb.min.css';
import '../styles/style.css';
import '../styles/slick.css';
import type { AppProps } from 'next/app';
import Script from 'next/script';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Script
        type="text/javascript"
        src="/js/mdb.min.js"
        strategy="beforeInteractive"
      />
      <Script
        type="text/javascript"
        src="/js/jquery.min.js"
        strategy="beforeInteractive"
      />
      <Script
        type="text/javascript"
        src="//cdn.jsdelivr.net/npm/jquery.marquee@1.6.0/jquery.marquee.min.js"
      />
      <Script
        type="text/javascript"
        src="/js/slick.js"
        strategy="beforeInteractive"
      />
      <Script id="animation-elements" strategy="lazyOnload">
        {`var $animation_elements = $('.animation-element');
        var $window = $(window);

        function check_if_in_view() {
            var window_height = $window.height();
            var window_top_position = $window.scrollTop();
            var window_bottom_position = (window_top_position + window_height);

            $.each($animation_elements, function() {
                var $element = $(this);
                var element_height = $element.outerHeight();
                var element_top_position = $element.offset().top;
                var element_bottom_position = (element_top_position + element_height);

                //check to see if this current container is within viewport
                if ((element_bottom_position >= window_top_position) &&
                    (element_top_position <= window_bottom_position)) {
                    $element.addClass('in-view');
                } else {
                    $element.removeClass('in-view');
                }
            });
        }

        $window.on('scroll resize', check_if_in_view);
        $window.trigger('scroll');`}
      </Script>
      <Script id="marquee" strategy="lazyOnload">
        {`$(document).ready(function() {
            $('.marquee').marquee({
              //speed in milliseconds of the marquee
              duration: 5000,
              //gap in pixels between the tickers
              gap: 50,
              //time in milliseconds before the marquee will start animating
              delayBeforeStart: 0,
              //'left' or 'right'
              direction: 'up',
              //true or false - should the marquee be duplicated to show an effect of continues flow
              duplicated: true
            });
          });`}
      </Script>
      <Script id="collapsible" type="text/javascript" strategy="lazyOnload">
        {`var coll = document.getElementsByClassName("collapsible");
        var i;
        for (i = 0; i < coll.length; i++) {
            coll[i].addEventListener("click", function() {
                this.classList.toggle("active");
                var content = this.nextElementSibling;
                if (content.style.maxHeight) {
                    content.style.maxHeight = null;
                } else {
                    content.style.maxHeight = content.scrollHeight + "px";
                }
            });
        }`}
      </Script>
      <Script id="spons-slider" type="text/javascript" strategy="lazyOnload">
        {`$(document).ready(function() {
            $('.spons-slider').slick({
                slidesToShow: 4,
                slidesToScroll: 1,
                centerMode: false,
                variableWidth: true,
                autoplay: true,
                autoplaySpeed: 2500,
                arrows: false,
                dots: false,
                pauseOnHover: false,
                responsive: [{
                    breakpoint: 769,
                    settings: {
                        slidesToShow: 2,
                    }
                }, {
                    breakpoint: 520,
                    settings: {
                        slidesToShow: 1
                    }
                }]
            });
        });`}
      </Script>
      <Script id="spons-slider2" type="text/javascript" strategy="lazyOnload">
        {`$(document).ready(function() {
            $('.spons-slider2').slick({
                slidesToShow: 4,
                slidesToScroll: 1,
                centerMode: false,
                variableWidth: true,
                autoplay: true,
                autoplaySpeed: 1500,
                arrows: false,
                dots: false,
                pauseOnHover: false,
                responsive: [{
                    breakpoint: 769,
                    settings: {
                        slidesToShow: 2,
                    }
                }, {
                    breakpoint: 520,
                    settings: {
                        slidesToShow: 1
                    }
                }]
            });
        });`}
      </Script>
      <Script id="teams-slider" type="text/javascript" strategy="lazyOnload">
        {`$(document).ready(function() {
            $('.teams-slider').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: false,

                autoplay: false,
                autoplaySpeed: 3500,
                arrows: false,
                dots: true,
                pauseOnHover: false,
                responsive: [{
                    breakpoint: 769,
                    settings: {
                        slidesToShow: 2,
                    }
                }, {
                    breakpoint: 520,
                    settings: {
                        slidesToShow: 1
                    }
                }]
            });
        });`}
      </Script>
    </>
  );
}

export default MyApp;
