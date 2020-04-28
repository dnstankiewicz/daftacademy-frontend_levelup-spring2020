export default function () {
    const scrollTopBtn = document.querySelector('.btn-scroll-top');
    const vh = 0.5* (Math.max(document.documentElement.clientHeight, window.innerHeight || 0));

    window.onscroll = function () {
        if (this.document.body.scrollTop > vh || this.document.documentElement.scrollTop > vh){
            scrollTopBtn.classList.add('btn-show');
        } else {
            scrollTopBtn.classList.remove('btn-show');
        }
    }
}