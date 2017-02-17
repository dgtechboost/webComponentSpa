module App.Container {
    angular.module('container')
        .config([
            '$stateProvider', '$urlRouterProvider', '$locationProvider', ($stateProvider: angular.ui.IStateProvider, $urlRouterProvider: angular.ui.IUrlRouterProvider, $locationProvider: any) => {

                $urlRouterProvider.otherwise('/dashboard');

                var states: Array<{ name: string, config: angular.ui.IState }> = getStates();
                states.forEach(state => {
                    $stateProvider.state(state.name, state.config);
                });
            }
        ]);

    function getStates(): Array<{ name: string, config: angular.ui.IState }> {
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
}  