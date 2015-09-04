define([
    'backbone',
    'js/views/registration/Step1',
    'js/views/registration/Success',
    'js/views/404',
    'js/models/UserProfile',
    'js/models/BankAccount',
    'js/collections/BankAccounts',
    'js/validation',
    'serializeObject'
], function(Backbone, RegistrationStep1View, RegistrationSuccessView, error404View, UserProfileModel, BankAccountModel, BankAccountsCollection) {

    var Router = Backbone.Router.extend({
        routes: {
            '': 'registrationAction',
            'registration/success': 'successRegistrationAction',
            '*path': 'defaultAction'
        },

        /**
         * Registration action
         */
        registrationAction:  function(){
            new RegistrationStep1View({
                model: new UserProfileModel({
                    bankAccounts: new BankAccountsCollection(
                        [new BankAccountModel]
                    )
                })
            }).render();
        },

        /**
         * Action for Success message after registration
         */
        successRegistrationAction: function(){
            new RegistrationSuccessView().render();
        },

        /**
         * Error 404 for URL hash
         * @param path
         */
        defaultAction: function(path){
            new error404View().render();
        }
    });

    return {
        /**
         * Initialization of app
         */
        initialize: function(){
            var router = new Router;

            Backbone.View.prototype.navigate = function (location, options) {
                router.navigate(location, options);
            };

            Backbone.history.start();
        }
    };
});