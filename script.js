document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const emailButton = document.getElementById('email-button');

emailButton.addEventListener('click', function(e) {
    e.preventDefault(); 
    
    const emailAddress = 'dnjswnsdlf48@gmail.com';
    
    navigator.clipboard.writeText(emailAddress).then(() => {
        const originalText = emailButton.textContent;
        emailButton.textContent = 'Copied!';
        
        setTimeout(() => {
            emailButton.textContent = originalText;
        }, 1500); // 1.5초 후에 원래 텍스트로 돌아옴
    }).catch(err => {
        console.error('Failed to copy text: ', err);
    });
});