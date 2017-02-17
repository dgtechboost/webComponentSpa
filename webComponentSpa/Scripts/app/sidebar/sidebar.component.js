var App;
(function (App) {
    var Sidebar;
    (function (Sidebar) {
        // import PhotoStreamService = App.Flickr.PhotoStream.Services.PhotoStreamService;
        var SidebarComponent = (function () {
            function SidebarComponent() {
                this.templateUrl = 'Scripts/app/sidebar/sidebar.component.html';
                //  controller = ['PhotoStreamService', DashBoardController];
                this.controller = Sidebar.SidebarController;
                this.bindings = {};
            }
            return SidebarComponent;
        }());
        Sidebar.SidebarComponent = SidebarComponent;
        //shows that moduleName is udefined for Sidebar
        // angular.module(App.Dashboard.moduleName).component('sidebar', new SidebarComponent());
        angular.module(App.Sidebar.moduleName).component('sidebar', new SidebarComponent());
    })(Sidebar = App.Sidebar || (App.Sidebar = {}));
})(App || (App = {}));
//# sourceMappingURL=sidebar.component.js.map