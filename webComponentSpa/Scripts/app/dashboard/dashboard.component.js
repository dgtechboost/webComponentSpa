var App;
(function (App) {
    var Dashboard;
    (function (Dashboard) {
        var DashBoardComponent = (function () {
            function DashBoardComponent() {
                this.templateUrl = 'Scripts/app/dashboard/dashboard.component.html';
                this.controller = ['DashboardService', 'toaster', Dashboard.DashBoardController];
                this.bindings = {};
            }
            return DashBoardComponent;
        }());
        Dashboard.DashBoardComponent = DashBoardComponent;
        angular.module(App.Dashboard.moduleName).component('dashboard', new DashBoardComponent());
    })(Dashboard = App.Dashboard || (App.Dashboard = {}));
})(App || (App = {}));
//# sourceMappingURL=dashboard.component.js.map