    // emailjs
    // .sendForm(
    //     'service_twtahhs',
    //     'template_v1ribgg',
    //     event.target,
    //     'QTktYluZ0k2105CYX'
    // ).then(() => {
    //     console.log('this worked!')
    // })

function contact(event){
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')
    loading.classList += " modal__overlay--visible";

    setTimeout(() => {
        loading.classList.remove("modal__overlay--visible");
        success.classList += " modal__overlay--visible";
        console.log('it worked 1')
    }, 1000);
    
}