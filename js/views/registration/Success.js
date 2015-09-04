/**
 * View for success message
 */
define(['backbone',
        'js/compiledTemplates'
],function (Backbone, templates) {

    return Backbone.View.extend({

        el: $("#page"),

        template: templates['registration/success'],

        /**
         * Renders success message after registration
         * @returns {*}
         */
        render: function(){
            this.$el.html(this.template());
            return this;
        }
    });
});