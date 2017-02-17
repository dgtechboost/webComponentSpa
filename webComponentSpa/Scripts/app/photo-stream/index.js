var App;
(function (App) {
    var PhotoStream;
    (function (PhotoStream) {
        var PhotoStreamService = App.PhotoStream.Services.PhotoStreamService;
        PhotoStream.moduleName = 'photo.stream';
        //reference dependencies in square brackets
        angular.module(PhotoStream.moduleName, ['core', 'toaster'])
            .service('PhotoStreamService', PhotoStreamService);
    })(PhotoStream = App.PhotoStream || (App.PhotoStream = {}));
})(App || (App = {}));
//# sourceMappingURL=index.js.map