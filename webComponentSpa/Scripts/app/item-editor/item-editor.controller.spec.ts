import IItemEditorController = App.ItemEditor.IItemEditorController;

describe("component's controller: itemEditor", () => {

    var $componentController: ng.IComponentControllerService, $rootScope, scope: any, dashboardService, $q, $stateParams, toaster;

    var mockObject: App.Models.Item;

    beforeEach(() => {

        angular.mock.module('item.editor');

        angular.mock.inject((DashboardService, _$rootScope_: ng.IRootScopeService, _$componentController_: ng.IComponentControllerService, _$q_, _$stateParams_, _toaster_) => {
            dashboardService = DashboardService;
            $rootScope = _$rootScope_;
            scope = $rootScope.$new();
            $componentController = _$componentController_;
            $q = _$q_;
            $stateParams = _$stateParams_;
            toaster = _toaster_;
        });

        mockObject = {
            Id: 123,
            Name: 'Test',
            Description: 'TestDescription',
            Price: 49,
            ImageId: 2,
            Quantity: 0
    };
    });

    it('controller should be attached to the scope', () => {
        var controller = $componentController<IItemEditorController, {}>('itemEditor', { $scope: scope }, {});
        expect(scope.$ctrl).toBe(controller);
    });

    it('should setup service object on initialisation', () => {
        var controller = $componentController<IItemEditorController, {}>('itemEditor', { $scope: scope }, {});
        controller.$onInit();
        expect(controller.itemEditorViewModel).toBeDefined();
        expect(controller.itemEditorViewModel.Id).toBe(0);
    });

    it('should call dashboardService getById() on initialization', () => {
        var controller = $componentController<IItemEditorController, {}>('itemEditor', { $scope: scope }, {});
        controller.$onInit();
  
        var dashboardServiceSearchSpy = spyOn(dashboardService, 'getById').and.callFake(() => {
            var deferred = $q.defer();
            deferred.resolve({ data: mockObject });
            return deferred.promise;
        });

        controller.stateParams.itemId = 1;
        controller.getById();
        expect(dashboardServiceSearchSpy).toHaveBeenCalledTimes(1);
    });
});
