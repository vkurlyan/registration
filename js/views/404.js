/**
 * View for 404 error
 */
define(['backbone',
        'compiledTemplates'
],function (Backbone, templates) {

    return Backbone.View.extend({

        el: $("#page"),

        template: templates['404'],

        /**
         * It renders message "Page not found"
         * @returns {*}
         */
        render: function(){
            this.$el.html(this.template());
            return this;
        }
    });
});