/**
 * View for 404 error
 */
define(['backbone',
        'templates/404'
],function (Backbone, error404Tmp) {

    return Backbone.View.extend({

        el: $("#page"),

        template: error404Tmp,

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