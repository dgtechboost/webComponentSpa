var App;
(function (App) {
    var Dashboard;
    (function (Dashboard) {
        var Services;
        (function (Services) {
            var DashboardService = (function () {
                function DashboardService($http) {
                    this.$http = $http;
                    this.apiBaseUri = '/Dashboard';
                }
                DashboardService.prototype.getViewModel = function () {
                    return this.$http.get(this.apiBaseUri + '/GetProducts')
                        .then(function (response) {
                        return response.data;
                    });
                };
                DashboardService.prototype.getById = function (itemId) {
                    return this.$http.get(this.apiBaseUri + '/GetProduct', { params: { id: itemId } })
                        .then(function (response) {
                        return response.data;
                    });
                };
                DashboardService.prototype.save = function (editItemViewModel) {
                    return this.$http.post(this.apiBaseUri + '/SaveItem', editItemViewModel)
                        .then(function (response) { return response.data; });
                };
                return DashboardService;
            }());
            Services.DashboardService = DashboardService;
        })(Services = Dashboard.Services || (Dashboard.Services = {}));
    })(Dashboard = App.Dashboard || (App.Dashboard = {}));
})(App || (App = {}));
//# sourceMappingURL=dashboard.service.js.map