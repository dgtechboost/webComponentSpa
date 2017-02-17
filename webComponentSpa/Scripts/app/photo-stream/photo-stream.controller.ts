module App.PhotoStream {

    import PhotoStreamService = App.PhotoStream.Services.IPhotoStreamService;
    import FlickrJsonp = App.Models.FlickrJsonp;
    import Flickr = App.Models.Flickr;

    export interface IPhotoStreamController extends ng.IComponentController {
        getViewModel();
        photoStreamViewModel: FlickrJsonp;
    }

    export class PhotoStreamController implements IPhotoStreamController {

        photoStreamViewModel: FlickrJsonp;

        constructor(private photoStreamService: PhotoStreamService,
            private toaster: ngtoaster.IToasterService) { }

        $onInit() {
            this.photoStreamViewModel = {
                data: { items: [] }
            }
            this.getViewModel();
        }

        getViewModel() {
            this.photoStreamService.getViewModel().then(
                (photoStreamViewModel: FlickrJsonp): void => {
                    this.photoStreamViewModel = photoStreamViewModel;
                    if (this.photoStreamViewModel != null && this.photoStreamViewModel.data != null) {
                        //need to put this onto server side processing of MVC app
                        for (var i = 0; i < this.photoStreamViewModel.data.items.length; i++) {
                            //remove quotes frome title, a bit excessive
                            var author = this.photoStreamViewModel.data.items[i].author;
                            var removeQuotes = author.slice(author.indexOf('(') + 1, author.indexOf(')'));
                            this.photoStreamViewModel.data.items[i].author = removeQuotes.replace(/^"(.*)"$/, '$1');
                            //remove html tags and keywords
                            var description = this.photoStreamViewModel.data.items[i].description;
                            var mainTitle = description.toString().slice(description.toString().indexOf('" title="') + 1, description.toString().indexOf('"><img'));
                            var result = this.photoStreamViewModel.data.items[i].description = description.replace(/<[^>]*>/g, '') + mainTitle.replace('title="', '');
                        }
                    } else {
                        if (photoStreamViewModel == null) {
                            this.toaster.info('Info', 'No data has been returned from the server');
                        }
                    }
                }
            );
        }
    }
}