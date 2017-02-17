var App;
(function (App) {
    var ItemEditor;
    (function (ItemEditor) {
        var ItemEditorController = (function () {
            function ItemEditorController(dashboardService, $stateParams, toaster) {
                this.dashboardService = dashboardService;
                this.$stateParams = $stateParams;
                this.toaster = toaster;
                this.stateParams = $stateParams;
            }
            ItemEditorController.prototype.$onInit = function () {
                this.itemEditorViewModel = {
                    Id: 0,
                    Name: '',
                    Description: '',
                    Price: 0,
                    ImageId: 0,
                    Quantity: 0
                };
                this.getById();
            };
            ItemEditorController.prototype.getById = function () {
                var _this = this;
                if (this.$stateParams) {
                    this.stateParams = this.$stateParams;
                    if (this.stateParams.itemId) {
                        this.dashboardService.getById(this.stateParams.itemId).then(function (itemEditorViewModel) {
                            _this.itemEditorViewModel = itemEditorViewModel;
                        });
                    }
                    else {
                        this.toaster.info('Info', 'itemId is not available');
                    }
                }
                else {
                    this.toaster.info('Info', 'Parameters of state is not available');
                }
            };
            ItemEditorController.prototype.saveItem = function () {
                var _this = this;
                this.dashboardService.save(this.itemEditorViewModel).then(function (saveInfo) {
                    if (saveInfo != null && saveInfo == "OK") {
                        _this.toaster.success('Success', 'Item was succesfully saved to our records. Thank you.');
                    }
                    else {
                        if (saveInfo != "OK") {
                            _this.toaster.info('Info', 'Something went wrong. Please try again');
                        }
                    }
                });
            };
            return ItemEditorController;
        }());
        ItemEditor.ItemEditorController = ItemEditorController;
    })(ItemEditor = App.ItemEditor || (App.ItemEditor = {}));
})(App || (App = {}));
//# sourceMappingURL=item-editor.controller.js.map