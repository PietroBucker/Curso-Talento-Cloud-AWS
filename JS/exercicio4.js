numerosDaSorte = [37, 14, 26, 5, 94, 87];

function verifica(array) {
    array.forEach(element => {
        if (element % 2 == 0 && element < 50) {
            console.log('X é par e menor que 50');
        }
        else if (element < 50) {
            console.log('X é menor que 50');
        }
        else {
            console.log('X é maior que 50');
        }
    });
}

verifica(numerosDaSorte)