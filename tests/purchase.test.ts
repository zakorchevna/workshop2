import { test, expect } from '@playwright/test';

test('can purchase product', async ({ page }) => {
  const email = 'test9@test.com'
  const password = 'test9@test.com'

  //login
  await page.goto('https://shopdemo-alex-hot.koyeb.app/');
  await page.getByRole('link', { name: 'Welcome! ' }).click();
  await page.getByRole('menuitem', { name: 'Login' }).click();
  await page.getByRole('main').getByPlaceholder('Please Enter Your Email').fill('test9@test.com');
  await page.getByPlaceholder('Please Enter Your Password').fill('test9@test.com');
  await page.getByRole('button', { name: 'Login' }).click();


  //purchase
  await page.getByRole('link', { name: 'Brands ' }).click();
  await page.locator('div').filter({ hasText: /^Nizhyn cannery$/ }).first().click();
  await page.getByRole('menuitem', { name: 'Nizhyn cannery' }).click();
  await page.getByRole('link', { name: 'CHERRY TOMATOES By Nizhyn' }).click();
  await page.getByRole('button', { name: 'Add To Bag' }).click();
  await page.getByRole('button', { name: 'Place Order' }).click();
  await expect(page.getByRole('heading', {level: 2, name: 'Thank you for your order.'})).toBeVisible();
});