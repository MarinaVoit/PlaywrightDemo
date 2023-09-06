import{test, expect} from "@playwright/test"

test.describe('Home_tests', () => {

    test('Check_prof', async ({page}) => {
        await page.goto('https://coding.pasv.us/user/login')

        await page.locator('#normal_login_email').fill('voitsekhivska.marina@gmail.com')
        await page.locator('#normal_login_password').fill('*867542310*Vv')
        await page.locator('button[type="submit"]').click()

        await page.locator('//span[text()="Maryna Voitsekhivska"]').click()
        await page.locator('//a[text()="Profile"]').click()
        await expect(page).toHaveURL('https://coding.pasv.us/profile/626ec70224d5e61bb4e94786')
        await expect(page.getByText('Приглашайте пользователей по этой ссылке, чтобы получить кэшбэк с их покупок')).toBeVisible()

        await page.locator('//span[text()="Maryna Voitsekhivska"]').click()
        await page.locator('//a[text()="Settings"]').click()
        await expect(page).toHaveURL('https://coding.pasv.us/settings/profile')
        await expect(page.getByText('Edit avatar')).toBeVisible()

        await page.locator('//span[text()="Maryna Voitsekhivska"]').click()
        await page.locator('//a[text()="Выйти"]').click()
        await expect(page).toHaveURL('https://coding.pasv.us/')
        await expect(page.getByText('Создание аккаунта')).toBeVisible()
    })
})

