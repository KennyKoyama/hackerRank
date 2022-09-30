let body = document.getElementsByTagName('body')[0];
let button = document.createElement('button');
button.id = 'btn';
body.appendChild(button);
let count = 0;
button.innerHTML = count;
button.addEventListener('click', () => {
    count += 1;
    button.innerHTML = count;
});