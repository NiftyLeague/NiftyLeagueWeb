import '../styles/app.css';
import '../styles/animation.css';
import '../styles/slick.css';
import '../styles/roadmap.css';
import '../styles/satoshi-right.css';
import '../styles/blog.scss';
import '../styles/footer.scss';

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
        src="/js/slick.js"
        strategy="beforeInteractive"
      />
      <Script id="animation-elements" strategy="lazyOnload">
        {`var $animation_elements = $('.animation-element');
        var $window = $(window);

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

        $window.trigger('scroll');`}
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
    </>
  );
}

export default MyApp;
