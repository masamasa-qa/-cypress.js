import * as data from "../helpers/default_data.json"
import * as main_page from "../locators/main_page.json";
import * as recovery_password_page from "../locators/recovery_password_page.json"
import * as result_page from "../locators/result_page.json"

describe('Проверка авторизации', function () {

    beforeEach('Начало теста', function () {
         cy.visit('/'); // Вход на сайт
        cy.get(main_page.fogot_pass_btn).should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверка кнопки восстановить пароль

        });

           afterEach('Конец теста', function () {
         cy.get(result_page.close).should('be.visible'); // Есть крестик и он виден для пользователя
  
        });

   it('Верный логин и верный пароль', function () {

        cy.get(main_page.email).type(data.login); // Ввести верный логин
        cy.get(main_page.password).type(data.password); // Ввести верный пароль
        cy.get(main_page.login_button).click(); // Нажать войти

        cy.get(result_page.title).contains('Авторизация прошла успешно'); // Проверка, что после авторизации виден текст
        cy.get(result_page.title).should('be.visible'); // Текст виден пользователю
  
    })

     it('Проверка восстановления пароля', function () {
        
        cy.get(main_page.fogot_pass_btn).click(); // Нажать восстановить пароль

        cy.get(recovery_password_page.email).type(data.login); // Ввести почту для восстановления пароля
        cy.get(recovery_password_page.send_button).click() // Нажать отправить код

        cy.get(result_page.title).contains('Успешно отправили пароль на e-mail'); // Проверею на совпадение текст
        cy.get(result_page.title).should('be.visible'); // Текст виден пользователю
  
    })

    it('Верный логин и неверный пароль', function () {
        
        cy.get(main_page.email).type(data.login); // Ввести верный логин
        cy.get(main_page.password).type('qa_one_love9'); // Ввести неверный пароль
        cy.get(main_page.login_button).click(); // Нажать войти

        cy.get(result_page.title).contains('Такого логина или пароля нет'); // Проверка, что после авторизации виден текст
        cy.get(result_page.title).should('be.visible'); // Текст виден пользователю

    })

      it('Верный неверный логин и верный пароль', function () {
        

        cy.get(main_page.email).type('gesadrman@dolnikov.ru'); // Ввести неверный логин
        cy.get(main_page.password).type(data.password); // Ввести верный пароль
        cy.get(main_page.login_button).click(); // Нажать войти

        cy.get(result_page.title).contains('Такого логина или пароля нет'); // Проверка, что после авторизации виден текст
        cy.get(result_page.title).should('be.visible'); // Текст виден пользователю

    })


        it('Проверка, что в логине есть @', function () {
        

        cy.get(main_page.email).type('germandolnikov.ru'); // Ввести логин без @
        cy.get(main_page.password).type(data.password); // Ввести верный пароль
        cy.get(main_page.login_button).click(); // Нажать войти

        cy.get(result_page.title).contains('Нужно исправить проблему валидации'); // Проверка, что после авторизации виден текст
        cy.get(result_page.title).should('be.visible'); // Текст виден пользователю
  
    })

    it('Проверка на строчные буквы в логине', function () {
        

        cy.get(main_page.email).type('GerMan@Dolnikov.ru'); // Ввести логин со строчными буквами
        cy.get(main_page.password).type(data.password); // Ввести верный пароль
        cy.get(main_page.login_button).click(); // Нажать войти

        cy.get(result_page.title).contains('Авторизация прошла успешно'); // Проверка, что после авторизации виден текст
        cy.get(result_page.title).should('be.visible'); // Текст виден пользователю
  
    })

})

