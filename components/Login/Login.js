class Login{

   
    render(signInOrSignUp) { 

        if (signInOrSignUp == "signUp") {
            const html = `

            <div class="login_container">

                <h2 class="nonactive"> sign in </h2>
                <h2 class="active"> sign up </h2>

             <form>

                <input type="email" class="text" name="email">
                <span class="span_user_password">email</span>

                <input type="text" class="text" name="username">
                <span class="span_user_password">username</span>

                <input type="password" class="text" name="password">
                <span class="span_user_password">password</span>
                <br>
    
                <button class="sign_up_login">
                    Sign Up
                </button>

             </form>

            </div>
           
            `;

            ROOT_Login.innerHTML = html;
        } else {
            const html = `

          <div class="login_container">

            <h2 class="active"> sign in </h2>
            <h2 class="nonactive"> sign up </h2>

            <form>
                <input type="text" class="text" name="username">
                <span class="span_user_password">username</span>

                <input type="password" class="text" name="password">
                <span class="span_user_password">password</span>
                <br>

                <input type="checkbox" id="checkbox-1-1" class="custom-checkbox" />
                <label for="checkbox-1-1">Keep me Signed in</label>
    
                <button class="sign_in_login">
                    Sign In
                </button>

                <hr>
                
                <a href="#">Forgot Password?</a>

            </form>

          </div>
           
            `;

            ROOT_Login.innerHTML = html;
        }
    }
}

const loginPage = new Login();
