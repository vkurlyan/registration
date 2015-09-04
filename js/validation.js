define([
    'underscore',
    'backbone',
    'backbone-validation'
], function(_, Backbone) {

    var validation = {
        /**
         * Sets up validation for whole application
         */
        initialize: function () {
            this.setCallbacks();
            this.initPatterns();
        },
        /**
         * Sets up display of validation messages
         */
        setCallbacks: function() {

            _.extend(Backbone.Validation.callbacks, {

                valid: function (view, attr) {
                    var $el = view.$('[name=' + attr + ']'),
                        $row = $el.closest('.form-row');

                    $row.removeClass('error');
                },

                invalid: function (view, attr, error) {
                    var $el = view.$('[name=' + attr + ']'),
                        $row = $el.closest('.form-row');

                    $row.find('.error-msg').html(error);
                    $row.addClass('error');
                }

            });
        },
        /**
         * Creates validation patterns
         */
        initPatterns: function(){

            _.extend(Backbone.Validation.patterns, {
                name: /^[^\d!@#$%^&*()_/\\.,:;|{}[\]"=+~`<>]*$/,
                date: /^[\d\-/.]*$/,
                alphanumeric: /^[\da-zA-Z ]*$/
            });

            _.extend(Backbone.Validation.messages, {
                name: '{0} must not contain numbers or special characters',
                date: '{0} must contain only numbers and symbols "/", "-", "."',
                alphanumeric: '{0} must contain only letters, numbers and spaces'
            });
        }
    };

    validation.initialize();

    return validation;
});
