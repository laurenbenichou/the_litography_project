app.factory('MarkersService', ["$http", "$q", function($http, $q) {
    return {
        getMarkers: function(){
             var defaultIcon =  {
                        iconUrl: 'assets/dot-grey.png',
                        iconSize:     [15, 15],
                        iconAnchor:   [15, 15],
                        popupAnchor:  [-7, -20]
                    }

            return $http.get("/api/v1/stories.json").then(
                function(results){
                    var data_stories = results.data.stories
                    debugger
                    var markers = []
                    for (i=0 ; i < data_stories.length; i++){
                        for (j=0; j < data_stories[i].locations.length; j++){
                            var lat = data_stories[i].locations[j].latitude
                            var lng = data_stories[i].locations[j].longitude
                            var title = data_stories[i].title
                            var layer = "allStories"
                            markers.push({layer: layer, lat:lat, lng:lng, message: title, icon: defaultIcon})
                         }
                    }
                    return markers
                },
                function(error){
                    console.log(error)
                })
            }
        }

}]);

app.factory('navOffCanvas', ["cnOffCanvas", function (cnOffCanvas) {
  return cnOffCanvas({
    controller: 'MenuCtrl',
    templateUrl: 'nav.html'
  })
}])