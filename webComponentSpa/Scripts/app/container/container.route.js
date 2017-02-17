var App;
(function (App) {
    var Container;
    (function (Container) {
        angular.module('container')
            .config([
            '$stateProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, $locationProvider) {
                $urlRouterProvider.otherwise('/dashboard');
                var states = getStates();
                states.forEach(function (state) {
                    $stateProvider.state(state.name, state.config);
                });
            }
        ]);
        function getStates() {
            return [
                {
                    name: 'dashboard',
                    config: {
                        url: '/dashboard',
                        template: '<dashboard></dashboard>'
                    }
                },
                {
                    name: 'itemEditor',
                    config: {
                        url: '/itemEditor/:itemId',
                        template: '<item-editor></item-editor>'
                    }
                },
                {
                    name: 'photoStream',
                    config: {
                        url: '/photoStream',
                        template: '<photo-stream></photo-stream>'
                    }
                }
            ];
        }
    })(Container = App.Container || (App.Container = {}));
})(App || (App = {}));
//# sourceMappingURL=container.route.js.map