import heart from '../assets/9 View mobile/-e-kz-heart.svg';
import {cardCreate} from './productCardLoad';
import {fetchData} from './apiRepsonses';

export default function() {

    // Load more products on "View all products" button click
    let productsToAdd = 4;
    const viewAllBtn = document.querySelector('.load-products');

    let startIndex = 13;
    let endIndex = startIndex + productsToAdd;

    viewAllBtn.addEventListener('click', ()=>{
        viewAllBtn.classList.remove('d-flex');
        viewAllBtn.classList.add('d-none');
        fetchData().then(res => {
            console.log("more prods loaded");
            cardCreate(res,startIndex,endIndex);
        })
    });

    
    

    

    // function loadMore(productsToAdd){
    //     let cardContainer = document.querySelector('.card-container');

    //     for(let i=0; i<productsToAdd;i++){
    //         cardContainer.innerHTML += 
    //         `
    //         <div class="pt-4 col-6 col-md-3">
    //             <div class="card">
    //                 <img src="https://via.placeholder.com/309x390" class="item-pic-placeholder card-img-top" alt="Item placeholder">
    //                 <div class="card-body">
    //                     <p class="card-product__name">PRODUCT NAME PLACEHOLDER</p>
    //                     <p class="card-product__price">PRICE $ <span class="card-product__sale">SALES $</span></p>
    //                     <div class="card-action d-flex justify-content-between">
    //                         <button class="btn card-action__buy">
    //                             ADD TO CARD
    //                         </button>
    //                         <button class="btn card-action__save">
    //                             <img src=${heart} alt="Hearth icon">
    //                         </button>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //         `
    //     }
    // }
}