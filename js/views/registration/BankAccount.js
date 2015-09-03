/**
 * View for 1 bank account
 */
define(['backbone',
        'compiledTemplates'
],function (Backbone, templates) {

    return Backbone.View.extend({

        template: templates['registration/bankAccount'],

        events: {
            "click .delete-account" : "onDeleteBankAccount"
        },

        /**
         * Binds listeners for validation and 'destroy' event
         */
        initialize: function () {
            this.model.on('destroy', this.remove, this);
            Backbone.Validation.bind(this);
        },

        /**
         * Renders view
         * @returns {*}
         */
        render: function(){
            this.$el.html(this.template());
            this.$inputs = this.$el.find('input');
            return this;
        },

        /**
         * Removes model and unbinds listeners
         * @returns {boolean}
         */
        onDeleteBankAccount: function() {
            this.model.destroy();
            Backbone.Validation.unbind(this);
            return false;
        },

        /**
         * Set new attributes to the model after click on "save" button
         */
        setBankAccount: function(){
            this.model.set(this.$inputs.serializeObject());
        }

    });
});