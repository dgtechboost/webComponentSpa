var App;
(function (App) {
    var ItemEditor;
    (function (ItemEditor) {
        var DashboardService = App.Dashboard.Services.DashboardService;
        ItemEditor.moduleName = 'item.editor';
        angular.module(ItemEditor.moduleName, ['core', 'toaster'])
            .service('DashboardService', DashboardService);
    })(ItemEditor = App.ItemEditor || (App.ItemEditor = {}));
})(App || (App = {}));
//# sourceMappingURL=index.js.map