let isModalOpen = false;
let contrastToggle = false;


function toggleContrast(){
    contrastToggle = !contrastToggle;
    
    if (contrastToggle) {
        document.body.classList += " dark-theme"
    }
    else {
        document.body.classList.remove("dark-theme")
    }
}








function contact(event){
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')
    loading.classList += " modal__overlay--visible";

    
    
    emailjs
    .sendForm(
        'service_twtahhs',
        'template_v1ribgg',
        event.target,
        'QTktYluZ0k2105CYX'
    ).then(() => {
        
        loading.classList.remove("modal__overlay--visible");
        success.classList += " modal__overlay--visible";
        
    }).catch(() => {
        loading.classList.remove("modal__overlay--visible");
        alert(
            "The email service is temporarily available. Please contact me directly on kwb.augusto@gmail.com"
        );
    })

}

function toggleModal(){
    document.body.classList += " modal--open"; 
    isModalOpen = !isModalOpen;   
    if (isModalOpen){
        return document.body.classList.remove("modal--open")
    } 
    
}

