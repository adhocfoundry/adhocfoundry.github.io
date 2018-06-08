function configState($stateProvider, $urlRouterProvider, $compileProvider) {

    // Optimize load start with remove binding information inside the DOM element
    $compileProvider.debugInfoEnabled(true);

    // Set default state
    $urlRouterProvider.otherwise("/");
    $stateProvider
        // Landing page
        .state('landing', {
            url: "/",
            templateUrl: "views/landing_page.html",
            data: {
                pageTitle: 'Assisting the masses',
                specialClass: 'landing-page'
            }
        });


}

angular
    .module('homer')
    .config(configState)
    .run(function($rootScope, $state, editableOptions) {
        $rootScope.$state = $state;
        editableOptions.theme = 'bs3';
    });