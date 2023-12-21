document.addEventListener("DOMContentLoaded", function() 
{
  const display = document.querySelector('input[name="display"]');
  const buttons = document.querySelectorAll('input[type="button"]');

  buttons.forEach(function(button) 
  {
    button.addEventListener('click', function() 
    {
      handleButtonClick(button.value);
    });
  });

  function handleButtonClick(value) 
  {
    switch (value) 
    {
      case 'AC':
        clearDisplay();
        break;
      case 'DE':
        deleteLastChar();
        break;
      case '=':
        evaluateExpression();
        break;
      default:
        appendToDisplay(value);
        break;
    }
  }

  function clearDisplay() 
  {
    display.value = '';
  }

  function deleteLastChar() 
  {
    display.value = display.value.toString().slice(0, -1);
  }

  function evaluateExpression() 
  {
    try {
      display.value = eval(display.value);
    } catch (error) {
      display.value = 'Error';
    }
  }

  function appendToDisplay(value) 
  {
    display.value += value;
  }
});