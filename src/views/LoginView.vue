<template>
  <div className="llogin container p-4">
    <ToastContainer />
    <div className="row w-100 g-5 d-flex justify-content-evenly">
      <div className="d-none d-md-block col-md-5 my-auto">
        <img src="undraw_remotely_2j6y.svg" alt="Image" className="img-fluid" />
      </div>
      <div className="col-md-5 d-flex justify-content-center">
        <div className="screen">
          <div className="screen__content">
            <form onSubmit="{onSubmit}" className="login">
              <div className="login__field">
                <i className="login__icon fas fa-user"></i>
                <input
                  type="text"
                  id="username"
                  ref="{username}"
                  className="login__input"
                  placeholder="User name"
                  required
                />
              </div>
              <div className="login__field">
                <i className="login__icon fas fa-lock"></i>
                <input
                  id="password"
                  ref="{password}"
                  type="password"
                  className="login__input"
                  placeholder="Password"
                />
              </div>
              <button type="submit" className="button login__submit">
                <span className="button__text">Log In Now</span>
                <i className="button__icon fas fa-chevron-right"></i>
              </button>
              <div id="bold" className="text-center mt-4 text-warning">
                Register <i className="fas fa-chevron-right mx-2"></i>
              </div>
            </form>
            <div className="social-login">
              <div className="social-icons mt-5">
                <a
                  href="#/"
                  className="social-login__icon fab fa-instagram"
                ></a>
                <a href="#/" className="social-login__icon fab fa-facebook"></a>
                <a href="#/" className="social-login__icon fab fa-twitter"></a>
              </div>
            </div>
          </div>
          <div className="screen__background">
            <span
              className="screen__background__shape screen__background__shape4"
            ></span>
            <span
              className="screen__background__shape screen__background__shape3"
            ></span>
            <span
              className="screen__background__shape screen__background__shape2"
            ></span>
            <span
              className="screen__background__shape screen__background__shape1"
            ></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Raleway:400,700");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: #f8fafb;
}

.llogin {
  font-family: Raleway, sans-serif;
}

#register .login {
  padding-top: 50px;
}
#register .login__field {
  padding: 15px 0px 10px;
}
#bold {
  font-weight: bold;
  cursor: pointer;
}
#bold:hover {
  text-decoration: underline;
}

.llogin {
  display: flex;
  align-items: center;
  justify-content: center;
}

.screen {
  background: linear-gradient(90deg, #5d54a4, #7c78b8);
  position: relative;
  height: 500px;
  width: 350px;
  box-shadow: 0px 0px 24px #5c5696;
}

.screen__content {
  z-index: 1;
  position: relative;
  height: 100%;
}

.screen__background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  -webkit-clip-path: inset(0 0 0 0);
  clip-path: inset(0 0 0 0);
}

.screen__background__shape {
  transform: rotate(45deg);
  position: absolute;
}

.screen__background__shape1 {
  height: 520px;
  width: 520px;
  background: #fff;
  top: -50px;
  right: 120px;
  border-radius: 0 72px 0 0;
}

.screen__background__shape2 {
  height: 220px;
  width: 220px;
  background: #6c63ac;
  top: -172px;
  right: 0;
  border-radius: 32px;
}

.screen__background__shape3 {
  height: 540px;
  width: 190px;
  background: linear-gradient(270deg, #5d54a4, #6a679e);
  top: -24px;
  right: 0;
  border-radius: 32px;
}

.screen__background__shape4 {
  height: 400px;
  width: 200px;
  background: #7e7bb9;
  top: 420px;
  right: 50px;
  border-radius: 60px;
}

.login {
  width: 320px;
  padding: 30px;
  padding-top: 126px;
}

.login__field {
  padding: 20px 0px 15px;
  position: relative;
}

.login__icon {
  position: absolute;
  top: 30px;
  color: #7875b5;
}

.login__input {
  border: none;
  border-bottom: 2px solid #d1d1d4;
  background: none;
  padding: 10px;
  padding-left: 24px;
  font-weight: 700;
  width: 75%;
  transition: 0.2s;
}

.login__input:active,
.login__input:focus,
.login__input:hover {
  outline: none;
  border-bottom-color: #6a679e;
}

.login__submit {
  background: #fff;
  font-size: 14px;
  margin-top: 30px;
  padding: 16px 20px;
  border-radius: 26px;
  border: 1px solid #d4d3e8;
  text-transform: uppercase;
  font-weight: 700;
  display: flex;
  align-items: center;
  width: 100%;
  color: #4c489d;
  box-shadow: 0px 2px 2px #5c5696;
  cursor: pointer;
  transition: 0.2s;
}

.login__submit:active,
.login__submit:focus,
.login__submit:hover {
  border-color: #6a679e;
  outline: none;
}

.button__icon {
  font-size: 24px;
  margin-left: auto;
  color: #7875b5;
}

.social-login {
  position: absolute;
  height: 120px;
  width: 160px;
  text-align: center;
  bottom: 0px;
  right: 0px;
  color: #fff;
}

.social-icons {
  display: flex;
  align-items: center;
  justify-content: center;
}

.social-login__icon {
  padding: 20px 10px;
  color: #fff;
  text-decoration: none;
  text-shadow: 0px 0px 8px #7875b5;
}

.social-login__icon:hover {
  transform: scale(1.5);
}
</style>