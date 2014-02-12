var app = {

  findByName: function() {
    console.log('findByName');
    this.store.findByName($('.search-key').val(), function(employees) {
      var l = employees.length;
      var e;
      $('.employee-list').empty();
      for (var i=0; i<l; i++) {
        e = employees[i];
        $('.employee-list').append('<li><a href="#employees/' + e.id + '">' + e.firstName + ' ' + e.lastName + '</a></li>');
      }
    });
  },

  initialize: function() {
    this.store = new LocalStorageStore();
    $('.search-key').on('keyup', $.proxy(this.findByName, this));
  },

  initializeMap: function(position) {
    var myLatLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    var friendLatLng = new google.maps.LatLng(position.coords.latitude + 0.005, position.coords.longitude);
    var mapOptions = {
        center: myLatLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        disableDefaultUI: true
    };
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);

    var marker = new google.maps.Marker({
      position: myLatLng,
      icon: '_img/marker-me.png',
      animation: google.maps.Animation.DROP,
      map: map
    });

    var friendMarker = new google.maps.Marker({
      position: friendLatLng,
      icon: '_img/marker-me.png',
      animation: google.maps.Animation.DROP,
      map: map
    });
  }

};

function errorHandler(err) {
  if(err.code == 1) {
    alert("Error: Access is denied!");
  }else if( err.code == 2) {
    alert("Error: Position is unavailable!");
  }
}
function getUserLocation(){
  var options = {timeout:60000};
  navigator.geolocation.getCurrentPosition(app.initializeMap, errorHandler, options);
}

app.initialize();
getUserLocation();