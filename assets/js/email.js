

function send() {
    var params={
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
       
        message: document.getElementById('message').value
    }
    if(params.name==""||params.email==""||params.message==""){
        alert('Please text message and email')
    }
    else{


    emailjs.send('service_ntrl0jp','template_zmga95g', params,'j7KDK0w-eI_9BjJJk')
    .then(function(response) {
        document.getElementById('name').value=""
        document.getElementById('email').value=""
        document.getElementById('subject').value=""
        document.getElementById('message').value=""
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });
}}

// let toggleMenu = document.getElementById('menuToggle');
// let navBar = document.getElementById('navbarSupportedContent')
// let num=1

// toggleMenu.addEventListener('click',()=>{

//     if(num%2==1){
//         navBar.style.display = 'block';
//         num++
        
//     }else{
//         navBar.style.display = 'none';
//         num++
//     }

//     })

// // function visible() {
//     navBar.style.display = 'block';
//     console.log('hi');
// }