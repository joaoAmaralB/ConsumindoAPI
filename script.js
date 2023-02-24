async function buscaEndereco(cep){
    var mensagem = document.getElementById('erro')
    try{
        var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        var consultaCEPConvertido = await consultaCEP.json()
        console.log(consultaCEPConvertido)
        var endereco = document.getElementById('endereco')
        var bairro = document.getElementById('bairro')
        var cidade = document.getElementById('cidade')
        var uf = document.getElementById('estado')

        endereco.value = consultaCEPConvertido.logradouro
        bairro.value = consultaCEPConvertido.bairro
        cidade.value = consultaCEPConvertido.localidade
        uf.value = consultaCEPConvertido.uf

        mensagem.innerHTML = ``
    } catch(erro){
        mensagem.innerHTML = `<p>CEP inválido! Tente novamente.</p>`
    }
}

var cep = document.getElementById('cep')
cep.addEventListener("focusout", () => buscaEndereco(cep.value))