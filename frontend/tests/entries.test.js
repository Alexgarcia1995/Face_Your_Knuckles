const faker = require('faker');
const puppeteer = require('puppeteer');
let browser
let page

const person = {
    name: faker.name.firstName(),
    name2: faker.name.firstName(),
    email: faker.internet.email(),
    email2: faker.internet.email(),
};

const appUrlBase = 'http://localhost:8080/'


beforeAll(async () => {
  // launch browser	
  browser = await puppeteer.launch(
	{
    headless: true,
  }
  )
  // creates a new page in the opened browser	
  page = await browser.newPage()
},10000)

  afterAll(() => {
    browser.close()
  })

  describe('1.Register User 1', () => {
    test('users can register', async () => {
      await page.goto(appUrlBase)
      await page.waitForSelector('.login')
      await page.click('a[id=login]')
      await page.waitForSelector('.login-form')
      await page.click('a[id=register]')
      await page.click('input[id=username]')
      await page.type('input[id=username]',person.name)
      await page.click('input[id=email]')
      await page.type('input[id=email]', person.email)
      await page.click('input[id=password]')
      await page.type('input[id=password]', '123456789')
      await page.click('button[type=submit]')
      await page.waitForNavigation()
      await expect(page.url()).toBe(appUrlBase)
    }, 10000);
  });

  describe('2.Register User 2', () => {
    test('users can register', async () => {
      await page.goto(appUrlBase);
      await page.waitForSelector('.login');
      await page.click('a[id=login]');
      await page.waitForSelector('.login-form');
      await page.click('a[id=register]');
      await page.click('input[id=username]')
      await page.type('input[id=username]',person.name2);
      await page.click('input[id=email]');
      await page.type('input[id=email]', person.email2);
      await page.click('input[id=password]');
      await page.type('input[id=password]', '123456789');
      await page.click('button[type=submit]');
      await page.waitForNavigation()
      await expect(page.url()).toBe(appUrlBase)
    }, 10000);
  });

  describe('3.Login User 1', () => {
    test('users can login', async () => {
      await page.goto(appUrlBase);
      await page.waitForSelector('.login');
      await page.click('a[id=login]');
      await page.waitForSelector('.login-form');
      await page.click('input[id=email]')
      await page.type('input[id=email]', person.email)
      await page.click('input[id=password]')
      await page.type('input[id=password]', '123456789')
      await page.click('button[type=submit]')
      await page.waitForNavigation()
      await expect(page.url()).toBe(appUrlBase)
    }, 10000);
  });

  // describe('4.Entry', () => {
  //   test('user 1 create a entry ', async () => {
  //     await page.goto(appUrlBase);
  //     await page.waitFor(1000);
  //     await page.click('a[id=blog]');
  //     await page.click('a[id=newentry]');
  //     await page.waitForSelector('.login-form');
  //     await page.click('input[id=title]');
  //     await page.type('input[id=title]', 'Titulo Usuario'+person.name);
  //     await page.click('textarea[id=description]');
  //     await page.type('textarea[id=description]', 'Descripcion usuario 1');
  //     await page.click('select[id=category]');
  //     await page.waitFor(2000);
  //     await page.click('button[type=submit]');
  //     await page.waitFor(5000);
  //     await expect(page.url()).toBe(appUrlBase+'blogs');
  //   }, 100000);
  // });
  describe('5.Add comment', () => {
    test('user 1 create a comment ', async () => {
      await page.goto(appUrlBase);
      await page.waitFor(2000);
      await page.click('a[id=blog]');
      await page.waitFor(2000);
      await page.click('a[id="1"]');
      await page.waitFor(2000);
      await page.click('textarea[id=comment]');
      await page.type('textarea[id=comment]', 'Comentario usuario 1');
      await page.click('button[type=submit]')
      await page.waitFor(2000);
    }, 10000);
  });

  describe('6.Logout', () => {
    test('users can logout', async () => {
      await page.goto(appUrlBase);
      await page.click('a[id=logout]');
      await expect(page.url()).toBe(appUrlBase)
    }, 10000);
  });

  describe('7.Login User 2', () => {
    test('users can login', async () => {
      await page.goto(appUrlBase);
      await page.waitForSelector('.login');
      await page.click('a[id=login]');
      await page.waitForSelector('.login-form');
      await page.click('input[id=email]')
      await page.type('input[id=email]', person.email2)
      await page.click('input[id=password]')
      await page.type('input[id=password]', '123456789')
      await page.click('button[type=submit]')
      await page.waitForNavigation()
      await expect(page.url()).toBe(appUrlBase)
    }, 10000);
  });

  describe('8.Add comment', () => {
    test('user 2 create a comment ', async () => {
      await page.goto(appUrlBase);
      await page.waitFor(2000);
      await page.click('a[id=blog]');
      await page.waitFor(2000);
      await page.click('a[id="1"]');
      await page.waitFor(2000);
      await page.click('textarea[id=comment]');
      await page.type('textarea[id=comment]', 'Comentario usuario 2');
      await page.click('button[type=submit]')
      await page.waitFor(2000);
    }, 10000);
  });

