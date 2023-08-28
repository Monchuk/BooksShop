class Products { 
    constructor() { 
        this.classNameActive = "products-element__btn_active";
        this.labelAdd = "Buy";
        this.labelRemove = "Don't buy";
    }

    handleSetLocationStorage(element, id) {
        const {pushProduct, products } = localStorageUtil.putProducts(id);
        
        if (pushProduct) {
            element.classList.add(this.classNameActive);
            element.innerHTML = this.labelRemove;
        } else { 
            element.classList.remove(this.classNameActive);
            element.innerHTML = this.labelAdd;
        }
     }

    render() { 

        const productsStore = localStorageUtil.getProducts();
        let htmlCatalog = '';

        CATALOG.forEach(({ id, title, price, img, autor }) => {
            let activeClass = "";
            let activeText = "";

            if (productsStore.indexOf(id) === -1) {
                activeText = this.labelAdd;
            } else { 
                activeClass = " " + this.classNameActive;
                activeText = this.labelRemove;
            }

            htmlCatalog += `
                <li class="products-element">
                    <img class="products-element__img" src="${img}" />
                    <span class="products-element__title">${title}</span>
                    <span class="products-element__autor">${autor}</span>
                    <span class="products-element__price">
                       💵 ${price.toLocaleString()} грн
                        </span>
                    <button class="products-element__btn${activeClass}" onclick="productsPage.handleSetLocationStorage(this, '${id}');">
                        ${activeText}
                    </button>
                </li>
            `;
        });

        const html = `
            <ul class="products-conteiner">
                ${htmlCatalog}
            </ul>
        `;

        ROOT_PRODUCTS.innerHTML = html;
    }
}

const productsPage = new Products();
productsPage.render();