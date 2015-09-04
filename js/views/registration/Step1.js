/**
 * View for step 1 of registration
 */
define(['backbone',
        'js/compiledTemplates',
        'js/views/registration/Step2'
],function (Backbone, templates, Step2View) {

    return Backbone.View.extend({

        el: $("#page"),

        template: templates['registration/step1'],

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
        onNextStep: function(e){
            e.preventDefault();
            this.model.set(this.$form.serializeObject());

            if(this.model.isValid(true)){

                Backbone.Validation.unbind(this);
                this.undelegateEvents();

                new Step2View({
                    model: this.model
                }).render();
            }
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