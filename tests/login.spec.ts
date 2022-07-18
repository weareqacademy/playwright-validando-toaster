import { test, expect} from '@playwright/test'

test('nao deve logar com senha incoreta', async ({ page }) => {
    await page.goto('https://login-app-qacademy.vercel.app/');
    const title = page.locator('.App-header p')
    await expect(title).toHaveText('Login')

    await page.fill('input[placeholder$=usuário]', 'qa')
    await page.fill('input[placeholder^=senha]', 'cademi')
    await page.click('button >> text=Entrar')

    const target = page.locator('.toast-message div[role=status]')
    await expect(target).toHaveText('Oops! Credenciais inválidas :(')

    // temporario
    // await page.waitForTimeout(1500)
    // const contentPage  = await page.content()

    // const fs = require('fs')
    // fs.writeFileSync('temp.html', contentPage)
})

