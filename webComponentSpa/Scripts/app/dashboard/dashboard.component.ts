module App.Dashboard {

    import DashboardService = App.Dashboard.Services.IDashboardService;

    export class DashBoardComponent implements ng.IComponentOptions {
        bindings: { [binding: string]: string };
        templateUrl = 'Scripts/app/dashboard/dashboard.component.html';
        controller = ['DashboardService', 'toaster', DashBoardController];

        constructor() {
            this.bindings = {};
        }
    }

    angular.module(App.Dashboard.moduleName).component('dashboard', new DashBoardComponent());
} 