import {test, expect} from '@playwright/test'

test.skip('Test 1',  async({page}) => {
    // quando rodar o arquivo esse teste será pulado por conta do .skip
    await page.goto('https//:google.com');
})

test('not ready',  async({page}) => {
    test.fail();
})

test.fixme('test to be fixes',  async({page}) => {
    //........
})

test('slow test',  async({page}) => {
    test.slow();
    //o teste será 3x mais lento doq o tempo de timeout setado
})

test.only('focus this test',  async({page}) => {
    //roda testes específicos 
})

// Tags

test('test login page @smoke ',  async({page}) => {
   //para rodar com a tag: --grep "@smoke"
   // também podemos usar comandos para pular testes com a tag: --grep-invert "smoke"
})