var App;
(function (App) {
    var PhotoStream;
    (function (PhotoStream) {
        var PhotoStreamController = (function () {
            function PhotoStreamController(photoStreamService, toaster) {
                this.photoStreamService = photoStreamService;
                this.toaster = toaster;
            }
            PhotoStreamController.prototype.$onInit = function () {
                this.photoStreamViewModel = {
                    data: { items: [] }
                };
                this.getViewModel();
            };
            PhotoStreamController.prototype.getViewModel = function () {
                var _this = this;
                this.photoStreamService.getViewModel().then(function (photoStreamViewModel) {
                    _this.photoStreamViewModel = photoStreamViewModel;
                    if (_this.photoStreamViewModel != null && _this.photoStreamViewModel.data != null) {
                        //need to put this onto server side processing of MVC app
                        for (var i = 0; i < _this.photoStreamViewModel.data.items.length; i++) {
                            //remove quotes frome title, a bit excessive
                            var author = _this.photoStreamViewModel.data.items[i].author;
                            var removeQuotes = author.slice(author.indexOf('(') + 1, author.indexOf(')'));
                            _this.photoStreamViewModel.data.items[i].author = removeQuotes.replace(/^"(.*)"$/, '$1');
                            //remove html tags and keywords
                            var description = _this.photoStreamViewModel.data.items[i].description;
                            var mainTitle = description.toString().slice(description.toString().indexOf('" title="') + 1, description.toString().indexOf('"><img'));
                            var result = _this.photoStreamViewModel.data.items[i].description = description.replace(/<[^>]*>/g, '') + mainTitle.replace('title="', '');
                        }
                    }
                    else {
                        if (photoStreamViewModel == null) {
                            _this.toaster.info('Info', 'No data has been returned from the server');
                        }
                    }
                });
            };
            return PhotoStreamController;
        }());
        PhotoStream.PhotoStreamController = PhotoStreamController;
    })(PhotoStream = App.PhotoStream || (App.PhotoStream = {}));
})(App || (App = {}));
//# sourceMappingURL=photo-stream.controller.js.map