import {test, expect} from '@playwright/test'

test('Testando Assertions', async({page}) =>{
    await page.goto('https://kitchen.applitools.com/');

    // checando se o elementop está presente ou não
    await expect(page.locator('text=The Kitchen')).toHaveCount(1);
    if(await page.$('text=The Kitchen')){
        await page.locator('text=The Kitchen').click();
    }
    
    //checando se está escondido ou visível
    await expect(page.locator('text=The Kitchen')).toBeVisible();
    await expect.soft(page.locator('text=The Kitchen')).toBeHidden(); //.soft faz com que a execução do teste não seja interrompida após um erro

    //checando se o elemento está habilitado ou desabilitado
    await expect(page.locator('text=The Kitchen')).toBeEnabled();
    await expect.soft(page.locator('text=The Kitchen')).toBeDisabled();

    //checando se o elemento tem um texto
    await expect(page.locator('text=The Kitchen')).toHaveText('The Kitchen');
    await expect(page.locator('text=The Kitchen')).not.toHaveText('ABCDE');

    //checando valor do atributo
    await expect(page.locator('text=The Kitchen')).toHaveAttribute('class', 'chakra-heading css-dpmy2a');
    await expect(page.locator('text=The Kitchen')).toHaveClass('chakra-heading css-dpmy2a');

    //checando url e título da pag
    await expect(page).toHaveURL('https://kitchen.applitools.com/');
    await expect(page).toHaveTitle('The Kitchen');
    await page.pause();

    //validação visual com screenshot
    await expect(page).toHaveScreenshot();
})