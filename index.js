window.onload = function(){

    const adviceId = document.querySelector('.advice-id');
    const adviceText = document.querySelector('.advice-text');
    const adviceButton = document.querySelector('button');



   function fetchAdvice(){
        fetch('https://api.adviceslip.com/advice', {cache: 'no-cache'})
        .then(response => response.json())
        .then(data => {
            adviceId.textContent = data.slip.id;
            adviceText.textContent = data.slip.advice;
        })
        .catch(error => console.error('Error:', error));
    };

    fetchAdvice();

    adviceButton.addEventListener('click', fetchAdvice);
   
}






