

export const showCards = function(productsResponse) {
    cardCreate(productsResponse,0,12);
}

export const cardCreate = function(productList,startIndex, endIndex) {

    let elements = productList.slice(startIndex,endIndex);

    elements.forEach(element => {
        const viewMoreBtn = document.getElementById('view-more');
        const cardInput = document.getElementById('card-input');
    
        let cardContainer = document.createElement('div');
        cardContainer.classList.add("pt-4","col-6","col-md-3");
        cardInput.appendChild(cardContainer);
    
        let card = document.createElement('div');
        card.classList.add('card');
        cardContainer.appendChild(card);
    
        let cardImg = document.createElement('img');
        cardImg.classList.add("item-pic-placeholder","card-img-top");
        cardImg.src = `http://${element.imageUrl}`;
        cardImg.alt = "Item info";
        card.appendChild(cardImg);
    
        let cardBody = document.createElement('div');
        cardBody.classList.add('card-body');
        card.appendChild(cardBody);
    
        let productName = document.createElement('p');
        productName.classList.add('card-product__name');
        productName.innerHTML = element.name;
        cardBody.appendChild(productName);
    
        let productPrice = document.createElement('p');
        productPrice.classList.add('card-product__price');
        productPrice.innerHTML = element.price + " " + element.currency;
        cardBody.appendChild(productPrice);
    
        let cardAction = document.createElement('div');
        cardAction.classList.add("card-action","d-flex","justify-content-between");
        cardBody.appendChild(cardAction);
    
        let addToCardBtn = document.createElement('button');
        addToCardBtn.classList.add("btn","card-action__buy");
        addToCardBtn.innerHTML = "ADD TO CARD";
        cardAction.appendChild(addToCardBtn);
    
        let saveBtn = document.createElement('button');
        saveBtn.classList.add("btn","card-action__save");
        cardAction.appendChild(saveBtn);
    
        let hearthImg = document.createElement('img');
        hearthImg.src = "src/assets/9 View mobile/-e-kz-heart.svg";
        hearthImg.alt = "Save icon";
        saveBtn.appendChild(hearthImg);
    
        viewMoreBtn.parentNode.appendChild(viewMoreBtn);
    })
}