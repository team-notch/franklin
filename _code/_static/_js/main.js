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
    var friend2LagLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude + 0.005);

    var friends = [
      {
        image: '_img/profile-image-2.png',
        position: friendLatLng
      },
      {
        image: '_img/profile-image-1.png',
        position: friend2LagLng
      }
    ];

    var mapOptions = {
        center: myLatLng,
        zoom: 17,
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

    $.each(friends, function(index, friend){
      var friendMarker = new google.maps.Marker({
        position: friend.position,
        icon: '_img/marker.png',
        animation: google.maps.Animation.DROP,
        map: map
      });

      var image = {
        url: friend.image,
        anchor: new google.maps.Point(24,72)
      };

      var friendImage = new google.maps.Marker({
        position: friend.position,
        icon: image,
        animation: google.maps.Animation.DROP,
        map: map
      });

      var infowindow = new google.maps.InfoWindow({
        content: 'contentString'
      });

      google.maps.event.addListener(friendImage, 'click', function() {
        infowindow.open(map,friendImage);
      });
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