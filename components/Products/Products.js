class Products { 

    render() { 
        let htmlCatalog = '';

        CATALOG.forEach(({ id, title, price, img, autor }) => {
            htmlCatalog += `
                <li>
                    <img src="${img}" />
                    <span>${title}</span>
                    <span>${autor}</span>
                    <span>${price}</span>
                    <button>Add in basket </button>
                </li>
            `;
        });

        const html = `
            <ul>
                ${htmlCatalog}
            </ul>
        `;

        ROOT_PRODUCTS.innerHTML = html;
    }
}

const productsPage = new Products();
productsPage.render();