const captchaTextBox = document.querySelector(".captch_box input");
const refreshButton = document.querySelector(".refresh_button");
const captchaInputBox = document.querySelector(".captch_input input");
const message = document.querySelector(".message");
const summitButton = document.querySelector(".button");

//variable generadora de captcha
let captchaText = null

//funcion generadora de captcha
const generateCaptcha = () => {
    const randomString = Math.random().toString(36).substring(2, 7);
    const randomStringArray = randomString.split("");
    const changeString = randomStringArray.map((char) => (Math.random() > 0.5 ? char.toUpperCase() : char ));
    captchaText = changeString.join(" ");
    captchaTextBox.value = captchaText;
    console.log(changeString);
};

const refreshBtnClick = () => {
    generateCaptcha();
    captchaInputBox.value = "";
    captchakeyUpValidate();
};

const captchakeyUpValidate = () => {
    summitButton.classList.toggle("disabled", !captchaInputBox.value);
};

const submitBtnClick = () => {
    captchaText = captchaText.split("")
    .filter((char) => char !== "").join();

    message.classList.add("active");
    if(captchaInputBox.value === captchaText) {
        message.innerText = " esa cosa es corecta";
    };
};

refreshButton.addEventListener("clik", refreshBtnClick);
captchaInputBox.addEventListener("keyup", captchakeyUpValidate);
summitButton.addEventListener("click", submitBtnClick);

//generador de captcha cuando la pagina carga
generateCaptcha();