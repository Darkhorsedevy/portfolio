// var faq = document.getElementsByClassName("faq-button");
// var i;
// for (i = 0; i < faq.length; i++) {
//     faq[i].addEventListener("click", function () {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        // this.classList.toggle("active");
        /* Toggle between hiding and showing the active panel */
//         var body = this.nextElementSibling;
//         if (body.style.display === "block") {
//             body.style.display = "none";
//         } else {
//             body.style.display = "block";
//         }
//     });
// }

const faqs = document.querySelectorAll('.faq');
faqs.forEach(faq => {
    faq.addEventListener('click', ()=>{
        faq.classList.toggle('open');

        //change icon
        const icon = faq.querySelector('.faq-icon i');
        if (icon.className === 'fa fa-plus') {
            icon.className = 'fa fa-minus';
        } else {
            icon.className = 'fa fa-plus';
        }
    })
})