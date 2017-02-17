module App.Dashboard {

    import DashboardService = App.Dashboard.Services.IDashboardService;
    import Item = App.Models.Item;

    export interface IDashBoardController extends ng.IComponentController {
        getViewModel();
        dashboardViewModel: Item;
    }

    export class DashBoardController implements IDashBoardController {

        dashboardViewModel: Item;

        constructor(private dashboardService: DashboardService, private toaster: ngtoaster.IToasterService) { }

        $onInit() {
            this.dashboardViewModel = {
                Id: 0,
                Name: '',
                Description: '',
                Price: 0,
                ImageId: 0,
                Quantity: 0
            }
            this.getViewModel();
        }

        getViewModel() {
            this.dashboardService.getViewModel().then(
                (dashboardViewModel: Item): void => {
                    if (dashboardViewModel != null) {
                        this.dashboardViewModel = dashboardViewModel;
                    } else {
                        if (dashboardViewModel == null) {
                            this.toaster.info('Info', 'No data has been returned from the server');
                        }
                    }
                }
            );
        }
    }
}