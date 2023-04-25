function gerarSenha(){
    let tamanho = document.getElementById('pswLength').value
    let quantidade = document.getElementById('pswQtd').value
    let charspecial = document.getElementById('carespecial').checked
    let numeros = document.getElementById('incNums').checked
    let maiusculas = document.getElementById('incUpper').checked
    let caracteres = 'abcdefghijklmnopqrstuvwxyz'
    
    // Processamento dos dados
    if(charspecial){
        caracteres += '!@#$%&*()?'
    }
    if(numeros){
        caracteres += '1234567890'
    }
    if(maiusculas){
        caracteres += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    }

    for(let i = 0; i < quantidade; i++) {
        let senhas = ""
        for(let x = 0; x < tamanho; x++) {
            var random = Math.floor(Math.random() * caracteres.length)
            senhas += caracteres.substring(random, random + 1) 
        }
        document.getElementById('passwords').value += senhas + '\n'
    }
}

function limparSenha() { 
    document.getElementById('pswLength').value = ''
    document.getElementById('pswQtd').value = ''
    document.getElementById('carespecial').checked = false
    document.getElementById('incNums').checked = false
    document.getElementById('incUpper').checked = false
    document.getElementById('passwords').value = ''
    
}