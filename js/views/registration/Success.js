/**
 * View for success message
 */
define(['backbone',
        'templates/registration/success'
],function (Backbone, successTmp) {

    return Backbone.View.extend({

        el: $("#page"),

        template: successTmp,

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