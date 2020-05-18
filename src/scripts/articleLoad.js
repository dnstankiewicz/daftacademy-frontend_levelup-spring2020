const articleSectionContainer = document.getElementById('article-input');



const articleVertical = function(element) {
    let articleContainer = document.createElement('div');
    articleContainer.classList.add("mt-2","col-12","col-md-5","article");
    articleSectionContainer.appendChild(articleContainer);

    let articleDesc = document.createElement('div');
    articleDesc.classList.add("article-description");
    articleContainer.appendChild(articleDesc);

    let articleHeader = document.createElement('h5');
    articleHeader.classList.add('article-description__header');
    articleHeader.innerHTML = element.name;
    articleDesc.appendChild(articleHeader);

    let articleLink = document.createElement('a');
    articleLink.classList.add('article-description__link');
    articleLink.href = '#';
    articleLink.innerHTML = "Shop now";
    articleDesc.appendChild(articleLink);

    let articleImg = document.createElement('img');
    articleImg.classList.add('article__pic-placeholder');
    articleImg.src = `http://${element.imageUrl}`;
    articleImg.alt = "Article highlight";
    articleContainer.appendChild(articleImg);
}

const articleSmall = function (parentNode,elements){
    elements.forEach(element => {
        let articleContainer = document.createElement('div');
        articleContainer.classList.add("mt-2","mt-md-0","col-12","col-md-6","article");
        parentNode.appendChild(articleContainer);
        
        let articleDesc = document.createElement('div');
        articleDesc.classList.add("article-description");
        articleContainer.appendChild(articleDesc);

        let articleHeader = document.createElement('h5');
        articleHeader.classList.add('article-description__header');
        articleHeader.innerHTML = element.name;
        articleDesc.appendChild(articleHeader);

        let articleLink = document.createElement('a');
        articleLink.classList.add('article-description__link');
        articleLink.href = '#';
        articleLink.innerHTML = "Shop now";
        articleDesc.appendChild(articleLink);

        let articleImg = document.createElement('img');
        articleImg.classList.add('article__pic-placeholder');
        articleImg.src = `http://${element.imageUrl}`;
        articleImg.alt = "Article highlight";
        articleContainer.appendChild(articleImg);
    })
}

const articleHorizontal = function(parentNode,element){
    let articleContainer = document.createElement('div');
    articleContainer.classList.add("mt-2","col-12","article");
    parentNode.appendChild(articleContainer);

    let articleDesc = document.createElement('div');
    articleDesc.classList.add("article-description");
    articleContainer.appendChild(articleDesc);

    let articleHeader = document.createElement('h5');
    articleHeader.classList.add('article-description__header');
    articleHeader.innerHTML = element.name
    articleDesc.appendChild(articleHeader);

    let articleLink = document.createElement('a');
    articleLink.classList.add('article-description__link');
    articleLink.href = '#';
    articleLink.innerHTML = "Shop now";
    articleDesc.appendChild(articleLink);

    let articleImg = document.createElement('img');
    articleImg.classList.add('article__pic-placeholder');
    articleImg.src = `http://${element.imageUrl}`;
    articleImg.alt = "Article highlight";
    articleContainer.appendChild(articleImg);
}

export const articlesCreate = function(productList) {

    let verticalElement = productList[21];
    let smallElements = productList.slice(22,24);
    let horizontalElement = productList[25];

    articleVertical(verticalElement);

    let articleRightSection = document.createElement('div');
    articleRightSection.classList.add("mt-2","col-12","col-md-7");
    articleSectionContainer.appendChild(articleRightSection);

    let smallArticlesRow = document.createElement('div');
    smallArticlesRow.classList.add("row");
    articleRightSection.appendChild(smallArticlesRow);

    articleSmall(smallArticlesRow,smallElements);

    let verticalArticleRow = document.createElement('div');
    verticalArticleRow.classList.add('row');
    articleRightSection.appendChild(verticalArticleRow);

    articleHorizontal(verticalArticleRow,horizontalElement);
}

