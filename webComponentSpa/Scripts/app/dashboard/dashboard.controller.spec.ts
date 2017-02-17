import IDashBoardController = App.Dashboard.IDashBoardController;

describe("component's controller: dashboard", () => {

    var $componentController: ng.IComponentControllerService, $rootScope, scope: any, dashboardService, $q, toaster;

    var mockObject: App.Models.Item;

    beforeEach(() => {

        angular.mock.module('dashboard');

        angular.mock.inject((DashboardService, _$rootScope_: ng.IRootScopeService, _$componentController_: ng.IComponentControllerService, _$q_, _toaster_) => {
            dashboardService = DashboardService;
            $rootScope = _$rootScope_;
            scope = $rootScope.$new();
            $componentController = _$componentController_;
            $q = _$q_;
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
        var controller = $componentController<IDashBoardController, {}>('dashboard', { $scope: scope }, {});
        expect(scope.$ctrl).toBe(controller);
    });

    it('should setup service object on initialisation', () => {
        var controller = $componentController<IDashBoardController, {}>('dashboard', { $scope: scope }, {});
        controller.$onInit();
        expect(controller.dashboardViewModel).toBeDefined();
        expect(controller.dashboardViewModel.Id).toBe(0);
    });


    it('should call photoStreamService getViewModel() on initialization', () => {
        var controller = $componentController<IPhotoStreamController, {}>('dashboard', { $scope: scope }, {});
        controller.$onInit();

        var dashboardServiceSearchSpy = spyOn(dashboardService, 'getViewModel').and.callFake(() => {
            var deferred = $q.defer();
            deferred.resolve({ data: mockObject });
            return deferred.promise;
        });
        controller.getViewModel();
        expect(dashboardServiceSearchSpy).toHaveBeenCalledTimes(1);
    });
});
