import axios from 'axios'

export const fetchData = () => {
    return new Promise((resolve, reject) => {
        axios.get('https://asos2.p.rapidapi.com/products/v2/list?country=US&currency=USD&sort=freshness&lang=en-US&sizeSchema=US&offset=0&categoryId=4209&limit=48&store=US', {
            headers: {
                "x-rapidapi-host": "asos2.p.rapidapi.com",
		        "x-rapidapi-key": "e1036d0198msh378cbb17ccba770p1bbc42jsndbc43e2b885b"
            }
        }).then(res => {
            const products = [];
            res.data.products.forEach(element => {
                products.push({
                    name: element.brandName,
                    price: element.price.current.value,
                    imageUrl: element.imageUrl,
                    currency: element.price.currency
                })
            });
            resolve(products);
        }).catch(err => { reject() })

    })
}

export const hideLoader = function() {
    document.getElementById('loader').style.visibility = 'hidden';   
}

export const failedMsg = function() {
    document.getElementById('failed').style.visibility = 'visible'
}

