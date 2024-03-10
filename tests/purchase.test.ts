import { test, expect, Page } from '@playwright/test';
import { Login } from '../pages/login.page';

const email = 'test9@test.com'
const password = 'test9@test.com'

test('can purchase product', async ({ page }) => {
  //login
  const login = new Login(page);
await login.openAndLogin(email, password);


  //purchase
  await page.getByRole('link', { name: 'Brands ' }).click();
  await page.locator('div').filter({ hasText: /^Nizhyn cannery$/ }).first().click();
  await page.getByRole('menuitem', { name: 'Nizhyn cannery' }).click();
  await page.getByRole('link', { name: 'CHERRY TOMATOES By Nizhyn' }).click();
  await page.getByRole('button', { name: 'Add To Bag' }).click();
  await page.getByRole('button', { name: 'Place Order' }).click();
  await expect(page.getByRole('heading', {level: 2, name: 'Thank you for your order.'})).toBeVisible();
});

test('can purchase 2 products', async ({ page }) => {

  //login
  const login = new Login(page);
await login.openAndLogin(email, password);
  //purchase
  await page.getByRole('link', { name: 'Brands ' }).click();
  await page.locator('div').filter({ hasText: /^Nizhyn cannery$/ }).first().click();
  await page.getByRole('menuitem', { name: 'Nizhyn cannery' }).click();
  await page.getByRole('link', { name: 'CHERRY TOMATOES By Nizhyn' }).click();
  await page.getByRole('button', { name: 'Add To Bag' }).click();

  await page.goto('https://shopdemo-alex-hot.koyeb.app/');
  await page.getByRole('link', { name: 'Brands ' }).click();
  await page.locator('div').filter({ hasText: /^Nizhyn cannery$/ }).nth(1).click();
  await page.getByRole('menuitem', { name: 'Nizhyn cannery' }).click();
  await page.getByRole('link', { name: 'MARINATED CUCUMBERS NEZHIN' }).click();
  await page.getByRole('button', { name: 'Add To Bag' }).click();
  await page.getByRole('button', { name: 'Place Order' }).click();
  await expect(page.getByRole('heading', {level: 2, name: 'Thank you for your order.'})).toBeVisible();
  });