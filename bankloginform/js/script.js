// LOGING JS 
document.getElementById('submit_button').addEventListener('click',function(){
    // EmailFild
    const email = document.getElementById('userEmail')
    const mainEmail =email.value;

    // Password Fild 
    const password = document.getElementById('userPassword')
    const mainPassword = password.value;

        if(mainEmail == 'admin@gmail.com' && mainPassword == 'admin'){
            window.location.href='home.html';
        }
})

// BALANCE INCRISING 
