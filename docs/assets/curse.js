
const img = document.querySelector('.img');
const question = document.querySelector('.question');
const secretCode = 'kiss';
const userCode = [];
const userLetters = document.querySelector('.user-info');

window.addEventListener('keyup', (e) => {
    userCode.push(e.key);
    userCode.splice(-secretCode.length-1, userCode.length - secretCode.length);
    const userKey = userCode.join('');
    userLetters.innerHTML = userKey.toLocaleUpperCase();
    if(userKey.includes(secretCode)) {
        img.classList.add('img-transform');
        question.innerHTML = 'YESSSSSS!!!!';
    }
})