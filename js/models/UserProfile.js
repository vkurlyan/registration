/**
 * User profile model. It's used for registration
 */
define([
    'backbone'
], function(Backbone) {

    var UserProfile = Backbone.Model.extend({
        url: '/registration',

        defaults : {
            firstName: '',
            lastName: '',
            dateOfBirthday: '',
            bankAccounts: null
        },

        validation: {
            firstName: {
                required: true,
                pattern: 'name',
                maxLength: 40
            },
            lastName: {
                required: true,
                pattern: 'name',
                maxLength: 40
            },
            dateOfBirthday: {
                required: true,
                pattern: 'date',
                rangeLength: [6, 10]
            }
        }

    });

    return UserProfile;
});