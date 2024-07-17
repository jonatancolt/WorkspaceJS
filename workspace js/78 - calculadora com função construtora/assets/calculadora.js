function Calculadora() {
    this.display = document.querySelector('.display');

    this.capturaCliques = () => {
        document.addEventListener('click', event => {
            const el = event.target;
            if (el.classList.contains('btn-num')) this.addNumDisplay(el);
            if (el.classList.contains('btn-clear')) this.clear();
            if (el.classList.contains('btn-del')) this.del();
            if (el.classList.contains('btn-eq')) this.realizaConta();
        });
    };

    this.addNumDisplay = el => this.display.value += el.innerText;    
    this.clear = () => this.display.value = '';
    this.del = () => this.display.value = this.display.value.slice(0, -1); 
    
    this.realizaConta = () => {
        let conta = this.display.value;
        try {
            conta = eval(conta);

            if (conta === undefined) {
                alert('Conta inválida');
                return;
            }
            this.display.value = String(conta);
        } catch (e) {
            alert('Conta inválida');
        }
    };

    this.pressionaEnter = () => {
        this.display.addEventListener('keyup', (e) => {
            if (e.key === 'Enter') {
                this.realizaConta();
            }
        });
    };

    this.inicia = () => {
        this.capturaCliques();
        this.pressionaEnter();
    };
}

const calculadora = new Calculadora();
calculadora.inicia();
