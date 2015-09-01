define([
    'backbone',
    'validation',
    'views/registration/Step1',
    'views/registration/Success',
    'views/404',
    'models/UserProfile',
    'serializeObject'
], function(Backbone, validation, RegistrationStep1View, RegistrationSuccessView, error404View, UserProfile) {

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
                model: new UserProfile
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
            validation.initialize();
            var router = new Router;

            Backbone.View.prototype.navigate = function (location, options) {
                router.navigate(location, options);
            };

            Backbone.history.start();
        }
    };
});