module App.Sidebar {

   // import PhotoStreamService = App.Flickr.PhotoStream.Services.PhotoStreamService;

    export class SidebarComponent implements ng.IComponentOptions {
        bindings: { [binding: string]: string };
        templateUrl = 'Scripts/app/sidebar/sidebar.component.html';
      //  controller = ['PhotoStreamService', DashBoardController];
        controller = SidebarController;

        constructor() {
            this.bindings = {};
        }
    }
    //shows that moduleName is udefined for Sidebar
   // angular.module(App.Dashboard.moduleName).component('sidebar', new SidebarComponent());
    angular.module(App.Sidebar.moduleName).component('sidebar', new SidebarComponent());
} 