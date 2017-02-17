module App.Dashboard.Services {

    import Item = App.Models.Item;

    export interface IDashboardService {
        getViewModel(): angular.IPromise<Item> ;
        getById(itemId: number): angular.IPromise<Item> ;
        save(editItemViewModel: Item): ng.IPromise<string>;
    }

    export class DashboardService implements IDashboardService {

        private apiBaseUri = '/Dashboard'

        constructor(private $http: ng.IHttpService) { }

        getViewModel(): angular.IPromise<Item> {
            return this.$http.get(this.apiBaseUri + '/GetProducts')
                .then((response: ng.IHttpPromiseCallbackArg<Item>): any => {
                    return response.data;
                });
        }

        getById(itemId: number): angular.IPromise<Item> {
            return this.$http.get(this.apiBaseUri + '/GetProduct', { params: { id: itemId } })
                .then((response: ng.IHttpPromiseCallbackArg<Item>): any => {
                    return response.data;
                });
        }

        save(editItemViewModel: Item): ng.IPromise<string> {
            return this.$http.post(this.apiBaseUri + '/SaveItem', editItemViewModel)
                .then((response: ng.IHttpPromiseCallbackArg<string>): any => { return response.data; });
        }
    }
}