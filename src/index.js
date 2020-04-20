import 'bootstrap';
import '../node_modules/glider-js/glider.min.js';
import './styles/style.scss';

window.addEventListener('load', function(){
    new Glider(document.querySelector('.glider'), {
        slidesToShow: 1.5,
        slidesToScroll: 1,
        draggable: true,     
        rewind: true,   
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 4.5,
                slidesToScroll: 1,
                arrows: {
                    prev: '.glider-prev',
                    next: '.glider-next'
                  },
              }
            }
          ]
      });
})