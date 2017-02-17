module App.ItemEditor {

    import DashboardService = App.Dashboard.Services.DashboardService;

    export var moduleName = 'item.editor';
    angular.module(moduleName, ['core','toaster'])
        .service('DashboardService', DashboardService);
} 