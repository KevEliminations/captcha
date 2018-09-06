var submitBtn = document.querySelector('.submit-btn');
var popup = document.querySelector('.popup');
var closePopup = document.querySelector('.card__close');
var form = document.querySelector('.survey-form');
submitBtn.addEventListener('click', function(e){
    if (form.checkValidity()) {
        popup.style.display = 'flex';
        popup.style.opacity = '1';
    }
})

closePopup.addEventListener('click', function() {
    popup.style.display = 'none';
    popup.style.opacity = '0';
})