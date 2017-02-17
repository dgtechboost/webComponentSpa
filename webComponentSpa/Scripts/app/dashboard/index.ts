module App.Dashboard {

    import DashboardService = App.Dashboard.Services.DashboardService;

    export var moduleName = 'dashboard';
    angular.module(moduleName, ['core','toaster', App.ItemEditor.moduleName])
        .service('DashboardService', DashboardService);
} 