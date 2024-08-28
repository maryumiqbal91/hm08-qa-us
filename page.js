module.exports = {
    // Inputs
    fromField: '#from',
    toField: '#to',
    phoneNumberField: '#phone',
    codeField: '#code',
    countervalue: '//*[@id="root"]/div/div[3]/div[3]/div[2]/div[2]/div[4]/div[2]/div[3]/div/div[2]/div[1]/div/div[2]/div/div[2]',
    cardcode: '/html/body/div/div/div[2]/div[2]/div[2]/form/div[1]/div[2]/div[2]/div[2]/input',
    icecreamLabel: '//*[@id="root"]/div/div[3]/div[3]/div[2]/div[2]/div[4]/div[2]/div[3]/div/div[2]/div[1]/div/div[1]',
    


    // Buttons
    callATaxiButton: 'button=Call a taxi',
    phoneNumberButton: '//div[starts-with(text(), "Phone number")]',
    nextButton: 'button=Next',
    confirmButton: 'button=Confirm',
    supportive: '//*[@id="root"]/div/div[3]/div[3]/div[2]/div[1]/div[5]/div[2]',
    paymentMethodbutton: '//*[@id="root"]/div/div[3]/div[3]/div[2]/div[2]/div[2]/div[1]',
    addcardbutton:'//*[@id="root"]/div/div[2]/div[2]/div[1]/div[2]/div[3]/div[2]',
    
    cardnumber: '//*[@id="number"]',
    submitbutton: '//*[@id="root"]/div/div[2]/div[2]/div[2]/form/div[3]/button[1]',
    closebutton: '//*[@id="root"]/div/div[2]/div[2]/div[1]/button',
    driverMessageField: '//*[@id="comment"]',
    orderRequirementbutton: '//*[@id="root"]/div/div[3]/div[3]/div[2]/div[2]/div[4]/div[1]/div[2]/img',
    addcardtitle: '//*[@id="root"]/div/div[2]/div[2]/div[2]/div',
    blanketandhandkerchiefsbutton:'//*[@id="root"]/div/div[3]/div[3]/div[2]/div[2]/div[4]/div[2]/div[1]/div/div[2]/div/span',
    businesscar: '//*[@id="root"]/div/div[3]/div[3]/div[2]/div[1]/div[1]/div[2]',
    bluebutton: '//*[@id="root"]/div/div[3]/div[4]/button',
    icecreamplus: '//*[@id="root"]/div/div[3]/div[3]/div[2]/div[2]/div[4]/div[2]/div[3]/div/div[2]/div[1]/div/div[2]/div/div[3]',


    // Modals
    phoneNumberModal: '.modal',
    paymentmethodModal: '.payment-picker.open',
    addingacardModal: '.modal',
    carsearchmodal: '//*[@id="root"]/div/div[5]/div[2]/div[1]/div',
    // Functions
    fillAddresses: async function(from, to) {
        const fromField = await $(this.fromField);
        await fromField.setValue(from);
        const toField = await $(this.toField);
        await toField.setValue(to);
        const callATaxiButton = await $(this.callATaxiButton);
        await callATaxiButton.waitForDisplayed();
        await callATaxiButton.click();
    },
    fillPhoneNumber: async function(phoneNumber) {
        const phoneNumberButton = await $(this.phoneNumberButton);
        await phoneNumberButton.waitForDisplayed();
        await phoneNumberButton.click();
        const phoneNumberModal = await $(this.phoneNumberModal);
        await phoneNumberModal.waitForDisplayed()
        const phoneNumberField = await $(this.phoneNumberField);
        await phoneNumberField.waitForDisplayed();
        await phoneNumberField.setValue(phoneNumber);
    },
    submitPhoneNumber: async function(phoneNumber) {
        await this.fillPhoneNumber(phoneNumber);
        // we are starting interception of request from the moment of method call
        await browser.setupInterceptor();
        await $(this.nextButton).click();
        // we should wait for response
        // eslint-disable-next-line wdio/no-pause
        await browser.pause(2000);
        const codeField = await $(this.codeField);
        // collect all responses
        const requests = await browser.getRequests();
        // use first response
        await expect(requests.length).toBe(1)
        const code = await requests[0].response.body.code
        await codeField.setValue(code)
        await $(this.confirmButton).click()
    },
};