import 'bootstrap';

import carousel from './scripts/carousel';
import scrollTop from './scripts/scroll-top-btn';
import loadAllProducts from './scripts/load-products';
import updateYear from './scripts/copyright-year';

import './styles/style.scss';


window.addEventListener('DOMContentLoaded', () => {
    carousel();
    scrollTop();
    loadAllProducts();
    updateYear();
});

