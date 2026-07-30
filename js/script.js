$(function () { 
    const textElement = document.querySelector(".text");
if (textElement) {
  new Typed(".text", {
    strings: ["Aboubacar", "Développeur Web", "web designer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
  });
}

    
ScrollReveal({ 
    reset: true,
    distance: '60px',
    duration: 1200,
    delay: 200 
  });
  
  ScrollReveal().reveal('section h2, .divider', { origin: 'top' });
  ScrollReveal().reveal('.card, .education-blog, .form-control, .btn', { origin: 'bottom', interval: 100 });

  
    });



 




