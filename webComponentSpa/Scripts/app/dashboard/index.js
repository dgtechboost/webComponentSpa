var App;
(function (App) {
    var Dashboard;
    (function (Dashboard) {
        var DashboardService = App.Dashboard.Services.DashboardService;
        Dashboard.moduleName = 'dashboard';
        angular.module(Dashboard.moduleName, ['core', 'toaster', App.ItemEditor.moduleName])
            .service('DashboardService', DashboardService);
    })(Dashboard = App.Dashboard || (App.Dashboard = {}));
})(App || (App = {}));
//# sourceMappingURL=index.js.map