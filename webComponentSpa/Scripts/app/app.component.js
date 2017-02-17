var App;
(function (App) {
    var AppComponent = (function () {
        function AppComponent() {
            this.bindings = {};
            this.template = "\n\n            <toaster-container style=\"top: 50px;\" toaster-options=\"{'position-class': 'toast-top-right', 'close-button':{ 'toast-warning': true, 'toast-error': false, 'time-out': 1500 } }\"></toaster-container>\n            <toaster-container toaster-options=\"{'toaster-id': 1, 'position-class': 'toast-bottom-right', 'close-button':{ 'toast-warning': true, 'toast-error': false, 'time-out': 1500 }, 'tap-to-dismiss': false }\"></toaster-container>\n   \n            <div ui-view></div>";
        }
        return AppComponent;
    }());
    App.AppComponent = AppComponent;
    angular.module('app').component('app', new AppComponent());
})(App || (App = {}));
//# sourceMappingURL=app.component.js.map