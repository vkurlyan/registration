/**
 * Bank Account model
 */
define([
    'backbone'
], function(Backbone) {

    var BankAccount = Backbone.Model.extend({

        defaults : {
            iban: '',
            bic: ''
        },

        validation: {
            iban: {
                required: true,
                pattern: 'alphanumeric',
                fn: function(value, attr) {

                    if(value.replace(/ /g, '').length > 34) {
                        return attr + ' without spaces must comprise maximum 34 characters';
                    }
                }
            },
            bic: {
                required: true,
                fn: function(value, attr) {

                    var bic = value.replace(/ /g, '');

                    if(bic.length !== 8 && bic.length !== 11) {
                        return attr + ' without spaces must comprise 8 or 11 characters';
                    }

                    if(!(/^[a-zA-Z]{6}[a-zA-Z0-9]{2}([a-zA-Z0-9]{3})?$/).test(bic)) {
                        return attr + ' is not valid. Example: AAAABB00111';
                    }
                }
            }
        }

    });

    return BankAccount;
});