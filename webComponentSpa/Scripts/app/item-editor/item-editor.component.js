var App;
(function (App) {
    var ItemEditor;
    (function (ItemEditor) {
        var ItemEditorComponent = (function () {
            function ItemEditorComponent() {
                this.templateUrl = 'Scripts/app/item-editor/item-editor.component.html';
                this.controller = ['DashboardService', '$stateParams', 'toaster', ItemEditor.ItemEditorController];
                this.bindings = {};
            }
            return ItemEditorComponent;
        }());
        ItemEditor.ItemEditorComponent = ItemEditorComponent;
        angular.module(App.ItemEditor.moduleName).component('itemEditor', new ItemEditorComponent());
    })(ItemEditor = App.ItemEditor || (App.ItemEditor = {}));
})(App || (App = {}));
//# sourceMappingURL=item-editor.component.js.map