var App;
(function (App) {
    var Container;
    (function (Container) {
        // import PhotoStreamService = App.Flickr.PhotoStream.Services.PhotoStreamService;
        var ContainerComponent = (function () {
            function ContainerComponent() {
                this.templateUrl = 'Scripts/app/container/container.component.html';
                //  controller = ['PhotoStreamService', DashBoardController];
                this.controller = Container.ContainerController;
                this.bindings = {};
            }
            return ContainerComponent;
        }());
        Container.ContainerComponent = ContainerComponent;
        angular.module(App.Container.moduleName).component('container', new ContainerComponent());
    })(Container = App.Container || (App.Container = {}));
})(App || (App = {}));
//# sourceMappingURL=container.component.js.map