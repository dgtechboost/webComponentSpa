
module App {

    var moduleDepenciesToCheck: Array<string> = ['core', 'container', 'dashboard', 'item.editor','photo.stream'];
    var appModuleDependencies: Array<string> = [];

    moduleDepenciesToCheck.forEach(moduleName => {
        try {
            if (angular.module(moduleName)) {
                appModuleDependencies.push(moduleName);
            }
        }
        catch (e) {
        }
    });

    angular.module('app', appModuleDependencies)
        .config([
            '$logProvider', '$httpProvider', '$provide', ($logProvider: ng.ILogProvider, $httpProvider: ng.IHttpProvider, $provide: ng.IModule) => {
            }
        ]);

}