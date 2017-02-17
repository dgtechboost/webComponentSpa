describe("component's controller: dashboard", function () {
    var $componentController, $rootScope, scope, dashboardService, $q, toaster;
    var mockObject;
    beforeEach(function () {
        angular.mock.module('dashboard');
        angular.mock.inject(function (DashboardService, _$rootScope_, _$componentController_, _$q_, _toaster_) {
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
    it('controller should be attached to the scope', function () {
        var controller = $componentController('dashboard', { $scope: scope }, {});
        expect(scope.$ctrl).toBe(controller);
    });
    it('should setup service object on initialisation', function () {
        var controller = $componentController('dashboard', { $scope: scope }, {});
        controller.$onInit();
        expect(controller.dashboardViewModel).toBeDefined();
        expect(controller.dashboardViewModel.Id).toBe(0);
    });
    it('should call photoStreamService getViewModel() on initialization', function () {
        var controller = $componentController('dashboard', { $scope: scope }, {});
        controller.$onInit();
        var dashboardServiceSearchSpy = spyOn(dashboardService, 'getViewModel').and.callFake(function () {
            var deferred = $q.defer();
            deferred.resolve({ data: mockObject });
            return deferred.promise;
        });
        controller.getViewModel();
        expect(dashboardServiceSearchSpy).toHaveBeenCalledTimes(1);
    });
});
//# sourceMappingURL=dashboard.controller.spec.js.map