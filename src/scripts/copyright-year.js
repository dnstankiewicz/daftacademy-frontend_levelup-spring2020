export default function () {
    const copyrightYear = document.querySelector('.copyright-year');

    copyrightYear.innerHTML = new Date().getFullYear();
}