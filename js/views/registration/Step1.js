/**
 * View for step 1 of registration
 */
define(['backbone',
        'templates/registration/step1',
        'views/registration/Step2'
],function (Backbone, step1Tmp, Step2View) {

    return Backbone.View.extend({

        el: $("#page"),

        template: step1Tmp,

        events: {
            "submit" : "onNextStep"
        },

        /**
         * initializes view
         * @returns {*}
         */
        initialize: function () {
            Backbone.Validation.bind(this);
            return this;
        },

        /**
         * Renders view
         * @returns {*}
         */
        render: function(){
            this.$el.html(this.template());
            this.$form = this.$el.find('form');
            return this;
        },

        /**
         * Validates model and renders second step of registration
         * @returns {boolean}
         */
        onNextStep: function(){
            this.model.set(this.$form.serializeObject());

            if(this.model.isValid(true)){

                Backbone.Validation.unbind(this);
                this.undelegateEvents();

                new Step2View({
                    model: this.model
                }).render();
            }

            return false;
        },

        /**
         * Unbinds event listeners
         * @returns {*}
         */
        remove: function() {
            Backbone.Validation.unbind(this);
            return Backbone.View.prototype.remove.apply(this, arguments);
        }

    });
});