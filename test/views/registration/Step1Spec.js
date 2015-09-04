
define([
    'jquery',
    'js/views/registration/Step1',
    'js/models/UserProfile',
    'js/models/BankAccount',
    'js/collections/BankAccounts',
    'serializeObject',
    'js/validation'
], function($, RegistrationStep1View, UserProfileModel, BankAccountModel, BankAccountsCollection) {

    describe("registration step 1", function () {

        var userProfileModel = new UserProfileModel({
            bankAccounts: new BankAccountsCollection(
                [new BankAccountModel]
            )
        });

        new RegistrationStep1View({
            model: userProfileModel
        }).render();

        var $firstName = $("input[name='firstName']"),
            $lastName = $("input[name='lastName']"),
            $dateOfBirthday = $("input[name='dateOfBirthday']"),
            $form = $("form");

        it("checks rendering", function () {
            expect($firstName.length).toEqual(1);
            expect($lastName.length).toEqual(1);
            expect($dateOfBirthday.length).toEqual(1);
            expect($form.length).toEqual(1);
        });

        it("checks validation", function (done) {
            expect($('.error').length).toEqual(0);

            $firstName.val("John8");
            $dateOfBirthday.val('I had never been born');
            $form.submit();

            setTimeout(function(){
                expect($('.error').length).toEqual(3);
                done();
            }, 0);
        });

        it("checks saving", function (done) {

            $firstName.val("John");
            $lastName.val("Smith");
            $dateOfBirthday.val('1985-03-22');
            $form.submit();

            setTimeout(function(){
                expect($('.error').length).toEqual(0);
                expect(userProfileModel.get('firstName')).toEqual('John');
                expect(userProfileModel.get('lastName')).toEqual('Smith');
                expect(userProfileModel.get('dateOfBirthday')).toEqual('1985-03-22');
                expect($('.registration-step2').length).toEqual(1);
                done();
            }, 0);
        });

    });

});