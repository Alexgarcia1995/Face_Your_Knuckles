const faker = require('faker');
const puppeteer = require('puppeteer');
let browser
let page

const person = {
    email: faker.internet.email(),
    password: faker.random.word(),
};

const appUrlBase = 'http://54.37.8.167:8080/'

beforeAll(async () => {
  // launch browser	
  browser = await puppeteer.launch(
	{
    headless: true,
  }
  )
  // creates a new page in the opened browser	
  page = await browser.newPage()
})

  afterAll(() => {
    browser.close()
  })

  describe('1.Register', () => {
    test('users can register', async () => {
      await page.goto(appUrlBase);
      await page.waitForSelector('.login');
      await page.click('a[id=login]');
      await page.waitForSelector('.login-form');
      await page.click('a[id=register]');
      await page.click('input[id=username]')
      await page.type('input[id=username]','alexgarcia1234');
      await page.click('input[id=email]');
      await page.type('input[id=email]', person.email);
      await page.click('input[id=password]');
      await page.type('input[id=password]', 'alejandro1995');
      await page.click('button[type=submit]');
      await page.waitForNavigation()
      await expect(page.url()).toBe(appUrlBase)
    }, 10000);
  });

  describe('2.Login', () => {
    test('users can login', async () => {
      await page.goto(appUrlBase);
      await page.waitForSelector('.login');
      await page.click('a[id=login]');
      await page.waitForSelector('.login-form');
      await page.click('input[id=email]')
      await page.type('input[id=email]', person.email)
      await page.click('input[id=password]')
      await page.type('input[id=password]', 'alejandro1995')
      await page.click('button[type=submit]')
      await page.waitForNavigation()
      await expect(page.url()).toBe(appUrlBase)
    }, 100000);
  });

  describe('3.Profile', () => {
    test('users can see his profile', async () => {
      await page.goto(appUrlBase);
      await page.waitForSelector('.buttonscontainer');
      await page.click('a[id=profile]');
      await expect(page.url()).toBe(appUrlBase+'profile');
    }, 10000);
  });

  // describe('4.Modify User', () => {
  //   test('users can modify his profile', async () => {
  //     await page.goto(appUrlBase);
  //     await page.waitForSelector('.buttonscontainer');
  //     await page.click('a[id=profile]');
  //     await page.waitForSelector('.video-player');
  //     await page.click('a[id=modify]');
  //     await page.waitForSelector('.login-form');
  //     await page.click('input[id=username]');
  //     await page.type('input[id=username]','alexgarciasanz');
  //     await page.click('input[id=email]');
  //     await page.type('input[id=email]', person.email);
  //     await page.click('input[id=password]');
  //     await page.type('input[id=password]', 'alejandro1995');
  //     await page.click('button[type=submit]')
  //     await page.waitForSelector('.buttonscontainer');
  //     await page.click('a[id=profile]');
  //     await expect(page.url()).toBe(appUrlBase+'profile');
  //     const name = await page.evaluate(() => document.querySelector('.video-player > h1').innerText)
  //     await expect(name).toBe('alexgarciasanz');
  //   }, 10000);
  // });