import { useEffect } from 'react';

export const useCarousel = () => {
  useEffect(() => {
    // Wait for jQuery and OwlCarousel to be loaded
    const initCarousel = () => {
      if (window.jQuery) {
        const $ = window.jQuery;
        if ($.fn.owlCarousel) {
          $('.home-slider').owlCarousel({
            loop: true,
            autoplay: true,
            margin: 0,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            nav: false,
            autoplayHoverPause: false,
            items: 1,
            navText: [
              "<span class='ion-md-arrow-back'></span>",
              "<span class='ion-chevron-right'></span>"
            ],
            responsive: {
              0: {
                items: 1
              },
              600: {
                items: 1
              },
              1000: {
                items: 1
              }
            }
          });
        }
      }
    };

    // Try to initialize immediately
    initCarousel();

    // Also try again after a short delay to ensure all scripts are loaded
    const timer = setTimeout(initCarousel, 1000);

    return () => clearTimeout(timer);
  }, []);
};