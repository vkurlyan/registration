require.config({
    baseUrl: '',
    paths: {
        "jquery" : "bower_components/jquery/dist/jquery",
        "underscore" : "bower_components/underscore-amd/underscore",
        "backbone" : "bower_components/backbone-amd/backbone",
        "backbone-validation" : "bower_components/backbone-validation/dist/backbone-validation-amd",
        "handlebars.runtime": "bower_components/handlebars/handlebars.runtime.amd",
        "serializeObject": "bower_components/jQuery.serializeObject/dist/jquery.serializeObject.min"
    },
    shim: {
        'serializeObject': {
            deps: ['jquery'],
            exports: 'jQuery.fn.serializeObject'
        }
    }
});

require(['js/App'], function(App){
    App.initialize();
});