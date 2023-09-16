class Header{
    constructor() { 
        this.signUp = "signUp";
        this.signIn = "signIn";
    }

    handlerOpenBasketPage() {
        basketPage.render();
    }
    
    handlerOpenSignUpPage() { 

        loginPage.render(this.signUp);   
    }

    handlerOpenSignInPage() { 

        loginPage.render(this.signIn);   
    }
   
    render(count) { 

        const html = `
            <div class="header-container">
                <div class="header-counter" onclick="headerPage.handlerOpenBasketPage()">
                   📚 ${count}
                </div>

                <span class="sign_in_header" onclick="headerPage.handlerOpenSignInPage()">
                    sign in
                </span>
                   / 
                <span class="sign_up_header" onclick="headerPage.handlerOpenSignUpPage()">
                    sign up  
                </span>
                
            </div>
        `;

        ROOT_HEADER.innerHTML = html;
    }
}

const headerPage = new Header();

const productsStore = localStorageUtil.getProducts();

headerPage.render(productsStore.length);