describe('MyTestSuit', function()
 {
    it('login page', function() 
    {
      // cy.visit('https://go.qa.mardom.com')

      //  cy.reload()
      
      // cy.get('app-layout').shadow().find('.email-input').type('test-coordinator@mardom.com')

      // cy.get('app-layout').shadow().find('.contraseña').should('be.enabled').should('be.visible').type('@siddhatech2021', { force: true })

      // cy.get('app-layout').shadow().find('.btn-primary').click()  
       
   
        // cy.get('body > kt-mdmaincontainer > kt-mdheader > header > div > div > div.col.d-flex.align-items-center > div.btn-mobile > span').click()
            // Burger menu button

        // cy.get('#nav-main > ul:nth-child(3) > li:nth-child(2) > div > div').click()
            //Solicitud de Traslado

        // cy.get('#nav-main > ul:nth-child(3) > li.nav-item.has-child.openNav > ul > li:nth-child(1) > a').click() 
          //Crear solicitud

      cy.visit('https://www.google.com')
      // cy.visit('https://go.qa.mardom.com/transfer-request')

      // cy.get('body > kt-mdmaincontainer > main > kt-transfer-request-create > div > div:nth-child(2) > div > div.col-12.col-md-8 > form > div > div.card-body > div:nth-child(1) > div > input').click().type('2021112300') 
      //      // No. de Manifiesto

      // cy.get('body > kt-mdmaincontainer > main > kt-transfer-request-create > div > div:nth-child(2) > div > div.col-12.col-md-8 > form > div > div.card-body > div:nth-child(1) > button').click() 
      //      // verificar button

      // cy.get('body > kt-mdmaincontainer > main > kt-transfer-request-create > div > div:nth-child(2) > div > div.col-12.col-md-8 > form > div > div.card-body > div:nth-child(2) > div > select2 > span > span.selection > span').click()
      //    // Seleccionar Consolidador 
      // cy.get('li').last().click()
      
      // cy.get('body > kt-mdmaincontainer > main > kt-transfer-request-create > div > div:nth-child(2) > div > div.col-12.col-md-8 > form > div > div.card-body > div:nth-child(3) > div > select2').click()
      // cy.get('li').last().click()
      //   // Barco *

      // cy.get('body > kt-mdmaincontainer > main > kt-transfer-request-create > div > div:nth-child(2) > div > div.col-12.col-md-8 > form > div > div.card-body > div:nth-child(4) > div > select2 > span > span.selection > span').click()
      // cy.get('li').last().click()
      //   // Puerto de Origen *

      // cy.get('body > kt-mdmaincontainer > main > kt-transfer-request-create > div > div:nth-child(2) > div > div.col-12.col-md-8 > form > div > div.card-body > div:nth-child(5) > div > select2 > span > span.selection > span').click()
      // cy.get('li').last().click()
      //   //Puerto de Descarga *

      // cy.get('body > kt-mdmaincontainer > main > kt-transfer-request-create > div > div:nth-child(2) > div > div.col-12.col-md-8 > form > div > div.card-body > div:nth-child(6) > div > input').click().type('This is automation testing')
      //   // No. de Viaje *

      // cy.get('body > kt-mdmaincontainer > main > kt-transfer-request-create > div > div:nth-child(2) > div > div.col-12.col-md-8 > form > div > div.card-body > div:nth-child(7) > div > input').click()
      //   //Fecha de Atraque *

      // cy.get('body > kt-mdmaincontainer > main > kt-transfer-request-create > div > div:nth-child(2) > div > div.col-12.col-md-8 > form > div > div.card-body > div:nth-child(8) > div > select2 > span > span.selection > span').click()
      // cy.get('li').last().click()
      //   //Agencia *

      //   cy.get('body > kt-mdmaincontainer > main > kt-transfer-request-create > div > div:nth-child(2) > div > div.col-12.col-md-8 > form > div > div.card-body > div:nth-child(10) > div.col-12.col-md-9 > div:nth-child(2) > div > div > div > input[type=file]').click()
      //   // Carta de asignación de depósito dirigida a MARDOM * Seleccionar1

      //   cy.get('body > kt-mdmaincontainer > main > kt-transfer-request-create > div > div:nth-child(2) > div > div.col-12.col-md-8 > form > div > div.card-body > div:nth-child(10) > div.col-12.col-md-9 > div:nth-child(3) > div > div > div > input[type=file]').click()
      //   // Carta a DPH * Seleccionar2

      //   cy.get('body > kt-mdmaincontainer > main > kt-transfer-request-create > div > div:nth-child(2) > div > div.col-12.col-md-8 > form > div > div.card-body > div:nth-child(10) > div.col-12.col-md-9 > div:nth-child(4) > div > div > div > input[type=file]').click()
      //   // BL Original * Seleccionar3

      //   cy.get('body > kt-mdmaincontainer > main > kt-transfer-request-create > div > div:nth-child(2) > div > div.col-12.col-md-8 > form > div > div.card-body > div:nth-child(10) > div.col-12.col-md-9 > div:nth-child(5) > div > div > div > input[type=file]').click()
      //   // Manifiesto en PDF sellado por el solicitante * Seleccionar4

      //   cy.get('body > kt-mdmaincontainer > main > kt-transfer-request-create > div > div:nth-child(2) > div > div.col-12.col-md-8 > form > div > div.card-body > div:nth-child(10) > div.col-12.col-md-9 > div.form-group.row > button').click()
      //    // Añadir Otro Documento

      //    cy.get('body > kt-mdmaincontainer > main > kt-transfer-request-create > div > div:nth-child(2) > div > div.col-12.col-md-8 > form > div > div.card-body > div:nth-child(10) > div.col-12.col-md-9 > div:nth-child(6) > form > div > div > input').click().type('New File')
      //    // Nombre Documento

      //    cy.get('body > kt-mdmaincontainer > main > kt-transfer-request-create > div > div:nth-child(2) > div > div.col-12.col-md-8 > form > div > div.card-body > div:nth-child(10) > div.col-12.col-md-9 > div:nth-child(6) > form > div > div > div.col-12.col-md-4 > div > input').click()


      //    cy.get('body > kt-mdmaincontainer > main > kt-transfer-request-create > div > div:nth-child(2) > div > div.col-12.col-md-4 > button').click()
      //  cy.get('body > kt-mdmaincontainer > kt-mdheader > header > div > div > div.col-auto.d-flex.align-items-center > div > div > figure > img').click()
       // profile photo

    // cy.get('body > kt-mdmaincontainer > kt-mdheader > header > div > div > div.col-auto.d-flex.align-items-center > div > div > div.dropdown-menu.user-menu.show > a').click()
    // logout button

    })
 })   