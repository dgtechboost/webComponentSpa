var App;
(function (App) {
    var Dashboard;
    (function (Dashboard) {
        var DashBoardController = (function () {
            function DashBoardController(dashboardService, toaster) {
                this.dashboardService = dashboardService;
                this.toaster = toaster;
            }
            DashBoardController.prototype.$onInit = function () {
                this.dashboardViewModel = {
                    Id: 0,
                    Name: '',
                    Description: '',
                    Price: 0,
                    ImageId: 0,
                    Quantity: 0
                };
                this.getViewModel();
            };
            DashBoardController.prototype.getViewModel = function () {
                var _this = this;
                this.dashboardService.getViewModel().then(function (dashboardViewModel) {
                    if (dashboardViewModel != null) {
                        _this.dashboardViewModel = dashboardViewModel;
                    }
                    else {
                        if (dashboardViewModel == null) {
                            _this.toaster.info('Info', 'No data has been returned from the server');
                        }
                    }
                });
            };
            return DashBoardController;
        }());
        Dashboard.DashBoardController = DashBoardController;
    })(Dashboard = App.Dashboard || (App.Dashboard = {}));
})(App || (App = {}));
//# sourceMappingURL=dashboard.controller.js.map