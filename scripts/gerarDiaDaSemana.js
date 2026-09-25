// Declara uma função responsável por gerar
// as informações de data e horário.
//
// Como não existem valores dentro dos `()`,
// ela não recebe parâmetros.
function gerarDiaDaSemana() {

    // `new` é uma palavra-chave utilizada para criar uma nova
    // instância de determinado objeto ou classe.
    //
    // `Date` é um objeto nativo do JavaScript utilizado
    // para trabalhar com datas e horários.
    //
    // `new Date()` cria um objeto contendo a data
    // e o horário atuais.
    //
    // `.toLocaleDateString()` transforma a data em uma string
    // formatada de acordo com uma determinada localização.
    //
    // `"pt-BR"` indica que queremos utilizar o formato
    // correspondente ao português do Brasil.
    //
    // O segundo argumento é um objeto de configurações.
    //
    // `weekday: "long"` solicita o nome completo
    // do dia da semana.
    //
    // Exemplo:
    // "sexta-feira"
    const diaDaSemana = new Date().toLocaleDateString("pt-BR", {
        weekday: "long"
    });


    // Cria novamente um objeto Date contendo a data atual.
    //
    // Como não fornecemos opções adicionais,
    // `.toLocaleDateString("pt-BR")` gera a data
    // no formato utilizado no Brasil.
    //
    // Exemplo:
    // 25/09/2026
    const data = new Date().toLocaleDateString("pt-BR");


    // `.toLocaleTimeString()` funciona de maneira semelhante
    // ao `toLocaleDateString()`, porém é utilizado para horários.
    //
    // O objeto `{}` enviado como segundo argumento contém
    // opções de formatação.
    //
    // `hour: "numeric"` solicita a hora.
    // `minute: "numeric"` solicita os minutos.
    //
    // Dessa forma evitamos mostrar informações desnecessárias,
    // como os segundos.
    const hora = new Date().toLocaleTimeString("pt-BR", {
        hour: "numeric",
        minute: "numeric",
    });


    // As crases `` indicam uma Template Literal.
    //
    // Template Literals são strings que permitem inserir
    // valores diretamente dentro do texto.
    //
    // `${}` é utilizado para interpolação:
    // o JavaScript substitui o conteúdo pelas variáveis correspondentes.
    //
    // Exemplo de resultado:
    //
    // sexta-feira (25/09/2026) as 11:30
    const dataCompleta = `${diaDaSemana} (${data}) as ${hora}`;


    // Retorna a string completa para quem chamou a função.
    //
    // Neste projeto, esse resultado será utilizado
    // dentro de `criarItemDaLista()`.
    return dataCompleta;
}


// `export` permite que algo deste arquivo seja utilizado
// por outro módulo JavaScript.
//
// `default` indica que esta é a exportação principal do arquivo.
//
// Por isso outro arquivo pode escrever:
//
// import gerarDiaDaSemana from "./gerarDiaDaSemana.js";
//
// sem precisar utilizar `{}`.
export default gerarDiaDaSemana;
