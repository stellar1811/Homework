class SuperMath {
    isValidZnak(znak) {
        return ['+', '-', '/', '*'].includes(znak);
    }
    check(obj) {
        const { X, Y, znak } = obj;
        if (!this.isValidZnak(znak)) {
          console.log('Неправильний знак операції.');
          return;
        }
    
        const confirmAction = confirm(`Ви хочете виконати дію  ${X} ${znak} ${Y}?`);
        if (confirmAction) {
          const result = this.calculate(X, Y, znak);
          console.log(`Результат: ${X} ${znak} ${Y} = ${result}`);
        } else {
          this.input();
        }
    }

    input() {
        let X = parseFloat(prompt('Введіть значення X:'));
        let Y = parseFloat(prompt('Введіть значення Y:'));
        let znak;
        do {
          znak = prompt('Введіть знак операції (+, -, /, *):');
        } while (!this.isValidZnak(znak));
        this.check({ X, Y, znak }); 
    }

   
    calculate(X, Y, znak) {
      switch (znak) {
        case '+':
          return X + Y;
        case '-':
          return X - Y;
        case '/':
          return X / Y;
        case '*':
          return X * Y;
        default:
          return null;
      }
    }
}

const math = new SuperMath();
math.check({ X: 12, Y: 3, znak: '+' });