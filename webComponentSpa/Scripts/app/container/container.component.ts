module App.Container {

   // import PhotoStreamService = App.Flickr.PhotoStream.Services.PhotoStreamService;

    export class ContainerComponent implements ng.IComponentOptions {
        bindings: { [binding: string]: string };
        templateUrl = 'Scripts/app/container/container.component.html';
      //  controller = ['PhotoStreamService', DashBoardController];
        controller = ContainerController;

        constructor() {
            this.bindings = {};
        }
    }

    angular.module(App.Container.moduleName).component('container', new ContainerComponent());
} 