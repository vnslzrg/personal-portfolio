import { useEffect } from 'react';

export const useAnimate = () => {
  useEffect(() => {
    const initAnimation = () => {
      if (window.jQuery) {
        const $ = window.jQuery;
        
        // Check if waypoints plugin is loaded
        if ($.fn.waypoint) {
          $('.ftco-animate').waypoint(
            function(direction) {
              if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {
                $(this.element).addClass('item-animate');
                setTimeout(function() {
                  $('body .ftco-animate.item-animate').each(function(k) {
                    const el = $(this);
                    setTimeout(
                      function() {
                        const effect = el.data('animate-effect');
                        if (effect === 'fadeIn') {
                          el.addClass('fadeIn ftco-animated');
                        } else if (effect === 'fadeInLeft') {
                          el.addClass('fadeInLeft ftco-animated');
                        } else if (effect === 'fadeInRight') {
                          el.addClass('fadeInRight ftco-animated');
                        } else {
                          el.addClass('fadeInUp ftco-animated');
                        }
                        el.removeClass('item-animate');
                      },
                      k * 50,
                      'easeInOutExpo'
                    );
                  });
                }, 100);
              }
            },
            { offset: '95%' }
          );
        }
      }
    };

    // Try to initialize immediately
    initAnimation();

    // Also try again after a short delay to ensure all scripts are loaded
    const timer = setTimeout(initAnimation, 1000);

    return () => clearTimeout(timer);
  }, []);
};