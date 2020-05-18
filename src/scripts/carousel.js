import '../../node_modules/glider-js/glider.min.js'

const carouselSetup = function() {
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
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: {
                    prev: '.glider-prev',
                    next: '.glider-next'
                  },
              }
            }
          ]
      });
  });
};

export const carousel = function(productList){
  
  let elements = productList.slice(38,48);

  elements.forEach(element => {
    const gliderInput = document.getElementById('glider-input');

    let gliderInner = document.createElement('div');
    gliderInner.classList.add('glider-inner');
    gliderInput.appendChild(gliderInner);
  
    let gliderDesc = document.createElement('div');
    gliderDesc.classList.add("glider-inner__description");
    gliderInner.appendChild(gliderDesc);
  
    let gliderTitle = document.createElement('p');
    gliderTitle.classList.add('description__title');
    gliderTitle.innerHTML = element.name;
    gliderDesc.appendChild(gliderTitle);
  
    let gliderPrice = document.createElement('p');
    gliderPrice.classList.add('description__price');
    gliderPrice.innerHTML = element.price + " " + element.currency;
    gliderDesc.appendChild(gliderPrice);
  
    let gliderImg = document.createElement('img');
    gliderImg.classList.add("glider-inner__image");
    gliderImg.src = `http://${element.imageUrl}`;
    gliderImg.alt = 'Recommended product';
    gliderInner.appendChild(gliderImg);
  });

  carouselSetup();

}