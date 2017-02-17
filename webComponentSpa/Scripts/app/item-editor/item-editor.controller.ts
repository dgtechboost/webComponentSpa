module App.ItemEditor {

    import DashboardService = App.Dashboard.Services.IDashboardService;
    import Item = App.Models.Item;

    export interface IItemEditorController extends ng.IComponentController {
        saveItem();
        itemEditorViewModel: Item;
        getById();
        stateParams: IItemEditorStateParams;
    }

    export interface IItemEditorStateParams extends angular.ui.IStateParamsService {
        itemId: number;
    }

    export class ItemEditorController implements IItemEditorController {

        itemEditorViewModel: Item;
        stateParams: IItemEditorStateParams;

        constructor(
            private dashboardService: DashboardService,
            private $stateParams: IItemEditorStateParams,
            private toaster: ngtoaster.IToasterService
        ) {
            this.stateParams = $stateParams;
        }

        $onInit() {

            this.itemEditorViewModel = {
                Id: 0,
                Name: '',
                Description: '',
                Price: 0,
                ImageId: 0,
                Quantity: 0
            }
            this.getById();
        }

        getById() {
            if (this.$stateParams) {
                this.stateParams = this.$stateParams;

                if (this.stateParams.itemId) {

                    this.dashboardService.getById(this.stateParams.itemId).then((itemEditorViewModel: any): void => {
                        this.itemEditorViewModel = itemEditorViewModel;
                    });
                } else {
                    this.toaster.info('Info', 'itemId is not available');
                }

            }
            else {
                this.toaster.info('Info', 'Parameters of state is not available');
            }
        }

        saveItem() {
            this.dashboardService.save(this.itemEditorViewModel).then(
                (saveInfo: string): void => {
                    if (saveInfo != null && saveInfo == "OK") {
                        this.toaster.success('Success', 'Item was succesfully saved to our records. Thank you.');
                    } else {
                        if (saveInfo != "OK") {
                            this.toaster.info('Info', 'Something went wrong. Please try again');
                        }
                    }
                }
            );
        }
    }
}