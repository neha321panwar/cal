document.addEventListener("DOMContentLoaded", function () {
    const result = document.getElementById('result');
    const buttons = document.querySelectorAll('.button');
    const equalBtn = document.querySelector('.equalBtn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const buttonText = button.textContent;
            
            if (buttonText === 'AC') {
                result.value = '';
            } else if (buttonText === 'DEL') {
                result.value = result.value.slice(0, -1);
            } else if (buttonText === '=') {
                try {
                    result.value = eval(result.value);
                } catch (error) {
                    result.value = 'Error';
                }
            } else {
                result.value += buttonText;
            }
        });
    });
});
