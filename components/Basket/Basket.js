class Basket { 

    handleClear() { 
        ROOT_BASKET.innerHTML = '';
    }

    render() { 

        const productsStore = localStorageUtil.getProducts();
        let htmlCatalog = '';
        let sumCatalog = 0;

        CATALOG.forEach(({ id, title, price, autor, img }) => { 
            if (productsStore.indexOf(id) !== -1) {
                htmlCatalog += `
                    <tr>
                        <td class="basket-element__img"> <img src ="${img}" width ="50"> </td>
                        <td class="basket-element__title">${title}</td>
                        <td class="basket-element__autor">${autor}</td>
                        <td class="basket-element__price">${price.toLocaleString()} грн</td>                      
                    </tr>
                `;

                sumCatalog += price;
            } 
        });

        const html = `
            <div class="basket-container">
                <div class="basket__close" onclick="basketPage.handleClear()"></div>
                <table>
                    ${htmlCatalog} 
                    <tr>
                        <td class="basket-element__title">Total price: </td>
                        <td></td>
                        <td></td>
                        <td class="basket-element__price">${sumCatalog.toLocaleString()} грн</td>                      
                    </tr>                
                </table>
            </div>
        `;
        ROOT_BASKET.innerHTML = html;
    }
}

const basketPage = new Basket();