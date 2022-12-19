/*
Try: Envolve um código que pode ser considerado suspeito, nesse bloco, colocamos o código
*/

/*
Catch: Mostrará o que você quiser caso houver um erro
*/

/*
Finally: Esse bloco de código será excutado independentemente de houver um erro ou não
*/

try{
    let ultimoNome = 'Murillo'
    let nomeCompleto = primeiroNome + ' ' + ultimoNome
} catch (err){
    console.log(err.message) // exemplos de mensagens de erro
    console.log(err.name) // exeplos de mensagens de erro
} finally{
    console.log('Em todos os casos será executado')
}

// throw: permite você criar um erro customizado

const exemploThrow = () => {
    let mensagem
    let x = prompt('Envie um número: ')
    try{
        if (x == '') throw 'Vázio'
        if (isNaN(x)) throw 'Isso não é um número'
        x = Number(x)
        if (x < 5) throw 'Muito pequeno'
        if (x > 5) throw 'Muito grande'
    } catch (err){
        console.error(err)
    }
}
exemploThrow()


