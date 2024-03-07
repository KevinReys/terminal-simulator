document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('inputCommand').focus();
});

function executeCommand(event) {
    if (event.key === 'Enter') {
        const inputElement = document.getElementById('inputCommand');
        const outputElement = document.getElementById('output');
        const command = inputElement.value;

        outputElement.innerHTML += `<div>> ${command}</div>`;
        executeCommandLogic(command);

        inputElement.value = '';
    }
}

function executeCommandLogic(command) {
    const outputElement = document.getElementById('output');
    let result;

    switch (command.toLowerCase()) {
        case 'help':
            result = 'Lista de comandos disponíveis: help, clear, date, ls, greet, calc, version';
            break;
        case 'clear':
            outputElement.innerHTML = '';
            return;
        case 'date':
            result = new Date().toLocaleString();
            break;
        case 'ls':
            result = 'Arquivo1.txt  Arquivo2.js  Diretorio1  Diretorio2';
            break;
        case 'greet':
            result = 'Olá! Como você está?';
            break;
        case 'calc':
            result = 'Uso: calc [operador] [número1] [número2]\nExemplo: calc + 5 3';
            break;
        case 'version':
            result = 'Terminal Simulator v1.0';
            break;
        default:
            result = 'Comando não reconhecido. Digite "help" para obter a lista de comandos.';
    }
    
    outputElement.innerHTML += `<div>${result}</div>`;
}
