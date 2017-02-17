module App.PhotoStream {

    import PhotoStreamService = App.PhotoStream.Services.PhotoStreamService;

    export var moduleName = 'photo.stream';
    //reference dependencies in square brackets
    angular.module(moduleName, ['core','toaster'])
        .service('PhotoStreamService', PhotoStreamService);
} 