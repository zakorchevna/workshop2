import { randomUUID } from 'crypto';
import { test, expect } from '@playwright/test';

test('user should be able to signup', async ({ page }) => {
  //const email = `test-${randomUUID().replace(/\-/g, '')}@test.com`;
  const email = `test-${randomUUID()}@test.com`;
  await page.goto('https://shopdemo-alex-hot.koyeb.app/');
  await page.getByRole('link', { name: 'Welcome! ' }).click();
  await page.getByRole('menuitem', { name: 'Sign Up' }).click();
  await page.getByRole('main').getByPlaceholder('Please Enter Your Email').fill(email);
  await page.getByRole('main').getByPlaceholder('Please Enter Your password').fill(email);
  await page.getByPlaceholder('Please Enter Your First Name').fill('Joe');
  await page.getByPlaceholder('Please Enter Your Last Name').fill('Doe');
  await page.getByPlaceholder('Please Enter Your Password').fill('Welcome123');
  await page.getByRole('button', { name: 'Sign Up' }).click();
  await expect(page.getByRole('heading', { name: 'Account Details' })).toBeVisible();
});