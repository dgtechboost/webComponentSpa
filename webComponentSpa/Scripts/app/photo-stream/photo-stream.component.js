var App;
(function (App) {
    var PhotoStream;
    (function (PhotoStream) {
        var PhotoStreamComponent = (function () {
            function PhotoStreamComponent() {
                this.templateUrl = 'Scripts/app/photo-stream/photo-stream.component.html';
                this.controller = ['PhotoStreamService', 'toaster', PhotoStream.PhotoStreamController];
                this.bindings = {};
            }
            return PhotoStreamComponent;
        }());
        PhotoStream.PhotoStreamComponent = PhotoStreamComponent;
        angular.module(App.PhotoStream.moduleName).component('photoStream', new PhotoStreamComponent());
    })(PhotoStream = App.PhotoStream || (App.PhotoStream = {}));
})(App || (App = {}));
//# sourceMappingURL=photo-stream.component.js.map