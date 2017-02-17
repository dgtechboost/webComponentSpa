module App.ItemEditor {

    import DashboardService = App.Dashboard.Services.IDashboardService;

    export class ItemEditorComponent implements ng.IComponentOptions {
        bindings: { [binding: string]: string };
        templateUrl = 'Scripts/app/item-editor/item-editor.component.html';
        controller = ['DashboardService', '$stateParams', 'toaster', ItemEditorController];
      
        constructor() {
            this.bindings = {};
        }
    }

    angular.module(App.ItemEditor.moduleName).component('itemEditor', new ItemEditorComponent());
} 