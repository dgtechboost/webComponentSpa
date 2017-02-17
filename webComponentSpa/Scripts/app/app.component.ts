
module App {

    export class AppComponent implements ng.IComponentOptions {
        bindings: { [binding: string]: string };
        template: string;
        templateUrl: string;

        constructor() {
            this.bindings = {};
            this.template = `

            <toaster-container style="top: 50px;" toaster-options="{'position-class': 'toast-top-right', 'close-button':{ 'toast-warning': true, 'toast-error': false, 'time-out': 1500 } }"></toaster-container>
            <toaster-container toaster-options="{'toaster-id': 1, 'position-class': 'toast-bottom-right', 'close-button':{ 'toast-warning': true, 'toast-error': false, 'time-out': 1500 }, 'tap-to-dismiss': false }"></toaster-container>
   
            <div ui-view></div>`;
        }
    }

    angular.module('app').component('app', new AppComponent());
}