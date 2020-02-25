class DataHelper {

    constructor() {
        throw Error('Esta classe não pode ser instanciada');
    }

    static textoParaData(texto) {

        if (!/^\d{4}-\d{2}-\d{2}$/.test(texto))
            throw new Error('A data deve estar no formato aaaa-mm-dd');

        return new Date(...texto.split('-').map((item,indice) => (indice%2 & indice!=0) ? item-1 : item));   
 
    }

    static dataParaTexto(data) {
        return `${data.getDate()}/${(data.getMonth()+1)}/${data.getFullYear()}`;
    }
}