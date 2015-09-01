/**
 * View for step 2 of registration
 */
define(['jquery',
        'backbone',
        'templates/registration/step2',
        'models/BankAccount',
        'collections/BankAccounts',
        'views/registration/BankAccount'
],function ($, Backbone, step2Tmp, BankAccountModel, BankAccountsCollection, BankAccountView) {

    return Backbone.View.extend({

        el: $("#page"),

        template: step2Tmp,

        events: {
            "click .add-account" : "onAddBankAccount",
            "submit" : "onSave"
        },
        
        /**
         * Creates bank accounts collection and first model
         * @returns {*}
         */
        initialize: function () {

            var bankAccountsCollection = new BankAccountsCollection([new BankAccountModel]);

            bankAccountsCollection.on('add', this.renderBankAccount, this );
            this.model.set('bankAccounts', bankAccountsCollection);

            return this;
        },

        /**
         * Render bank accounts
         * @returns {*}
         */
        render: function(){
            this.$el.html(this.template());
            this.$bankAccountContainer = this.$el.find('.bank-accounts');
            this.$errorMessage = this.$el.find('.error-message');
            this.model.get('bankAccounts').each(this.renderBankAccount, this);
            return this;
        },

        /**
         * Renders 1 bank account
         * @param bankAccountModel
         * @returns {*}
         */
        renderBankAccount: function(bankAccountModel){
            var bankAccountView = new BankAccountView({
                model: bankAccountModel
            });

            this.$bankAccountContainer.append(bankAccountView.render().el);
            bankAccountView.listenTo(this, 'saveUserProfile', bankAccountView.setBankAccount);

            return this;
        },

        /**
         * Adds new bank account model to the collection
         * @returns {boolean}
         */
        onAddBankAccount: function(){
            this.model.get('bankAccounts').add(new BankAccountModel);
            return false;
        },

        /**
         * Sends user profile to the server
         * @param e
         */
        onSave: function(e){

            e.preventDefault();
            this.$errorMessage.hide();
            this.trigger('saveUserProfile');

            if (this.model.get('bankAccounts').areAllValid()) {

                this.model.save(null, {
                    success: $.proxy(function() {
                        this.undelegateEvents();
                        this.navigate('registration/success', {trigger: true});
                    }, this),
                    error: $.proxy(function() {
                        this.$errorMessage.text("Bad Request").show();
                    }, this)
                });

            }
        }

    });
});