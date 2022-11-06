let buttonsGrid = document.getElementById('btns');
let button5 = document.getElementById('btn5');

button5.addEventListener('click', () => {
    let button1Value = document.getElementById('btn1').innerHTML;
    let button2Value = document.getElementById('btn2').innerHTML;
    let button3Value = document.getElementById('btn3').innerHTML;
    let button4Value = document.getElementById('btn4').innerHTML;
    let button6Value = document.getElementById('btn6').innerHTML;
    let button7Value = document.getElementById('btn7').innerHTML;
    let button8Value = document.getElementById('btn8').innerHTML;
    let button9Value = document.getElementById('btn9').innerHTML;

    document.getElementById('btn2').innerHTML = button1Value;
    document.getElementById('btn3').innerHTML = button2Value;
    document.getElementById('btn6').innerHTML = button3Value;
    document.getElementById('btn9').innerHTML = button6Value;
    document.getElementById('btn8').innerHTML = button9Value;
    document.getElementById('btn7').innerHTML = button8Value;
    document.getElementById('btn4').innerHTML = button7Value;
    document.getElementById('btn1').innerHTML = button4Value;
});