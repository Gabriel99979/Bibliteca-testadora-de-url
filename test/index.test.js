const pegaArquivo = require('../index');

const arrayResult = [{
    FileList: 'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList'
}]


describe('pegaArquivo::', () => {
   it('deve ser uma função',() => {
    expect (typeof pegaArquivo).toBe('function'); 
   })
   it('deve retornar um array com o resultado',async () => {
    const resultado =  await pegaArquivo('C:\\Users\\Gabriel\\Downloads\\2299-lib-nodejs-markdown-aula-5\\2299-lib-nodejs-markdown-aula-5\\test\\arquivos\\texto1.md')
    expect(resultado).toEqual(arrayResult) 
   })
   it('deve retornar uma mensagem "não há links"',async () => {
    const resultado =  await pegaArquivo('C:\\Users\\Gabriel\\Downloads\\2299-lib-nodejs-markdown-aula-5\\2299-lib-nodejs-markdown-aula-5\\test\\arquivos\\texto1_semlink.md')
    expect(resultado).toBe('não há links')
  })
})

