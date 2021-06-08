document.querySelector('.form-submit').addEventListener('submit', validateForm);

function validateForm(e){
    const firstName = document.querySelector('.first-name');
    const lastName = document.querySelector('.last-name');
    const email = document.querySelector('.email');
    const password = document.querySelector('.password');
    const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
 
    e.preventDefault();

    if(firstName.value === ''){
        document.querySelector('.fname-control').classList.add('error-active');  
    }else{
        document.querySelector('.fname-control').classList.remove('error-active');
    }

    if(lastName.value === ''){
        document.querySelector('.lname-control').classList.add('error-active');
    }else{
        document.querySelector('.lname-control').classList.remove('error-active');
    }

    if(email.value === ''){
        document.querySelector('.email-control').classList.add('error-active');
    }else if(!re.test(email.value)){
        document.querySelector('.email-control').classList.add('error-active');
        email.value = "email@example/com";
    } else{
        document.querySelector('.email-control').classList.remove('error-active');
    }

    if(password.value === ''){
        document.querySelector('.password-control').classList.add('error-active');
    }else{
        document.querySelector('.password-control').classList.remove('error-active');
    }
    
    // else{
    //     invalid.style.display ='none';
    //     email.style.borderColor = 'hsl(0, 36%, 70%)';
    //     btn.classList.remove('btn-error');
    // }
    
}