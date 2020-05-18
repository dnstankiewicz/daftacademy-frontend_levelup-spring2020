import 'bootstrap';

import {fetchData,hideLoader,failedMsg} from './scripts/apiRepsonses';
import {carousel} from './scripts/carousel';
import {cardCreate, showCards} from './scripts/productCardLoad';
import {articlesCreate} from './scripts/articleLoad';
import scrollTop from './scripts/scroll-top-btn';
import loadAllProducts from './scripts/load-products';
import updateYear from './scripts/copyright-year';

import './styles/style.scss';


window.addEventListener('DOMContentLoaded', () => {
    
    fetchData().then(res => {
        carousel(res);
        showCards(res);
        articlesCreate(res);
    }
    ).catch(err => {
        failedMsg();
        console.log(err);
    })
    .finally(() => {
        hideLoader();
        Glider(document.querySelector('.glider')).refresh();
    });
    
    loadAllProducts();
    scrollTop();
    updateYear();
});

