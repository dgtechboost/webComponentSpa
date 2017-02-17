module App.PhotoStream {

    import PhotoStreamService = App.PhotoStream.Services.PhotoStreamService;

    export class PhotoStreamComponent implements ng.IComponentOptions {
        bindings: { [binding: string]: string };
        templateUrl = 'Scripts/app/photo-stream/photo-stream.component.html';
        controller = ['PhotoStreamService', 'toaster', PhotoStreamController];

        constructor() {
            this.bindings = {};
        }
    }

    angular.module(App.PhotoStream.moduleName).component('photoStream', new PhotoStreamComponent());
} 