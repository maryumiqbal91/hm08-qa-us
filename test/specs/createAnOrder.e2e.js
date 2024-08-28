const page = require('../../page');
const helper = require('../../helper')

describe('Create an order', () => {
    it('should open phone number modal', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const phoneNumberButton = await $(page.phoneNumberButton);
        await phoneNumberButton.waitForDisplayed();
        await phoneNumberButton.click();
        const phoneNumberModal = await $(page.phoneNumberModal);
        await expect(phoneNumberModal).toBeExisting();
    })

    it('should save the phone', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const phoneNumber = helper.getPhoneNumber("+1");
        await page.submitPhoneNumber(phoneNumber);
        await expect(await helper.getElementByText(phoneNumber)).toBeExisting();
    });

    it('should set an addresss', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601','1300 1st St');
        const fromField = await $(page.fromField);
        const toField = await $(page.toField)
        await expect(fromField).toHaveValue('East 2nd Street, 601');
        await expect(toField).toHaveValue('1300 1st St');
    });


    
    it('should select the supportive plan', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const supportive = await $(page.supportive);
        await supportive.click();
        await expect(supportive).toBeExisting();
        await browser.pause(1000);
    });

    
    it('add a credit card', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const paymentMethodbutton = await $(page.paymentMethodbutton);
        await paymentMethodbutton.click();
        const addcardbutton = await $(page.addcardbutton);
        await addcardbutton.click();
        const cardnumber = await $(page.cardnumber);
        await cardnumber.setValue(123345678123);
        const cardcode = await $(page.cardcode);
        await cardcode.setValue(55);
        const addcardtitle = await $(page.addcardtitle);
        await addcardtitle.click();
        const submitbutton = await $(page.submitbutton);
        await submitbutton.click();
       
        await expect(cardnumber).toHaveValue('123345678123');
        await expect(cardcode).toHaveValue('55');

        await browser.pause(2000);
    });


    it('Writing a message for the driver', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const driverMessageField = await $(page.driverMessageField);
        await driverMessageField.setValue('Please take the shortest route.');
        await expect(driverMessageField).toHaveValue('Please take the shortest route.');


        await browser.pause(1000);
    });

    it('should order a blanket and handkerchiefs', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St')
        const supportive = await $(page.supportive);
        await supportive.click();
        const blanketandhandkerchiefsbutton = await $(page.blanketandhandkerchiefsbutton);
        await blanketandhandkerchiefsbutton.click();
        await expect(blanketandhandkerchiefsbutton).toBeExisting();

        await browser.pause(1000);
    });

    it('Ordering 2 Ice creams', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const supportive = await $(page.supportive);
        await supportive.click();
       
        const icecreamplus = await $(page.icecreamplus);
        await icecreamplus.click();
        await icecreamplus.click();
        const countervalue = await $(page.countervalue);

        await expect(countervalue).toHaveText('2');

        await browser.pause(1000);
    
    });
    
    it('The car search modal should appears', async () => {
    await browser.url(`/`)
    await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
    const businesscar = await $(page.businesscar);
    await businesscar.click();
    const bluebutton = await $(page.bluebutton);
    await bluebutton.click();
    const carsearchmodal = await $(page.carsearchmodal)

    await expect(carsearchmodal).toBeExisting();

    await browser.pause(1000);

    });
    
});








