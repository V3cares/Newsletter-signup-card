const myForm = document.getElementById('emailForm');

myForm.addEventListener('submit', (event)=> {
    event.preventDefault();

    const email = document.getElementById('emailInput');
    const submitBtn = document.getElementById('submitBtn');
    const errorMsg = document.getElementById('emailError');
    const article = document.getElementById('article');
    const successMsg = document.getElementById('successMsg');
    const dismissalBtn = document.getElementById('dismissalBtn');
    

    if(email.value === ""){
        errorMsg.textContent = 'email cant be empty';
        email.style.border = "1px solid red";
        email.style.background = "hsl(4, 66.70%, 90.60%)";
       
    }
    else if(email.validity.typeMismatch){
        errorMsg.textContent = 'valid email required';
         email.style.border = "1px solid red";
         email.style.color = "red";
        email.style.background = "hsl(4, 66.70%, 90.60%)";
    }

    else if(email.value === "true"){
        email.textContent = "";
    }

    else{
        article.style.display = "none";
        successMsg.style.display = "block";
    }

    dismissalBtn.addEventListener("click", ()=> {
        if(successMsg.style.display === "block"){
            article.style.display = "flex";
            successMsg.style.display = "none";
        }
    });

    return;
});


