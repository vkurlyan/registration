define([
    'backbone',
    'models/BankAccount'
], function(Backbone, BankAccountModel) {

    var BankAccountsCollection = Backbone.Collection.extend({
        model: BankAccountModel,

        /**
         * Checks are valid all models in collection
         * @returns {boolean}
         */
        areAllValid: function(){
            return this.reduce(function(isOthersValid, model){
                return (model.isValid(true) && isOthersValid);
            }, true);
        }
    });

    return BankAccountsCollection;
});