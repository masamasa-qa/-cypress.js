describe('Проверка покупки нового аватара', function () {
    it('e2e тест на покупку нового аватара для тренера', function () {
         cy.visit('https://pokemonbattle.ru/'); // Вход на сайт

         cy.get('input[id="k_email"]').type('USER_LOGIN'); // вводим логин
         cy.get('input[id="k_password"]').type('USER_PASSWORD'); // вводим пароль
         cy.get('button[type="submit"]').click(); // нажимаем кнопку Подтвердить

         cy.wait(3000);

         cy.get('.header_card_trainer').click(); // нажимаем в шапке на аватарку тренера

         cy.wait(3000);

         cy.get('.k_mobile > :nth-child(5) > #dropdown > img').click(); // нажимаем кнопку Смена аватара
         cy.get('.available > button').first().click();   // нажимаем кнопку купить

         cy.get('.card_number').type('4620869113632996'); // вводим номер карты
         cy.get('.card_csv').type('125'); // вводим CVV карты
         cy.get('.card_date').type('1226'); // вводим срок действия карты
         cy.get('.card_name').type('NAME'); // вводим имя владельца действия карты
         cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click(); // нажимаем кнопку Оплатить

         cy.get('.threeds_number').type('56456'); // вводим код подтверждения СМС
         cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click(); // нажимаем кнопку Оплатить
         cy.contains('Покупка прошла успешно').should('be.visible'); // текст виден пользователю
         
     });
 });