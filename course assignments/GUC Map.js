var GUC = {lat: 29.986606, lng: 31.441415};

function myMap() {
	var mapProp= {
		center: GUC,
		zoom:16,
	};
	var map=new google.maps.Map(document.getElementById("map"),mapProp);

	//creating a marker
	var myCenter = new google.maps.LatLng(29.986606,31.441415);
	var mapCanvas = document.getElementById("map");
	var mapOptions = {center: myCenter, zoom: 16};
	var map = new google.maps.Map(mapCanvas, mapOptions);
	var marker = new google.maps.Marker({position:myCenter});
	marker.setMap(map);

	//event listener for clicking on the marker
	google.maps.event.addListener(map, 'click', function(event) {
		placeMarker(map, event.latLng);
	});
	function placeMarker(map, location) {
		var marker = new google.maps.Marker({
			position: location,
			map: map
		});
		var infowindow = new google.maps.InfoWindow({
			content: 'Latitude: ' + location.lat() +
			'<br>Longitude: ' + location.lng()
		});
		marker.setVisible(false);
		infowindow.open(map,marker);
		// alert("Latitude: " + location.lat() + "\nLongitude: " + location.lng());
	}	

	var div1 = document.createElement('div');
	var ctrl1 = new ReCenterMe(div1, map);
	div1.index = 1;
	
	map.controls[google.maps.ControlPosition.TOP_RIGHT].push(div1);

	var div2 = document.createElement('div');
	var ctrl2 = new ChooseLocation(div2, map);
	div2.index = 2;

	map.controls[google.maps.ControlPosition.TOP_RIGHT].push(div2);

	var div3 = document.createElement('div');
	var ctrl3 = new MakePath(div3, map);
	div3.index = 3;

	map.controls[google.maps.ControlPosition.TOP_RIGHT].push(div3);

	var div4 = document.createElement('div');
	var ctrl4 = new CalculateDistance(div4, map);
	div4.index = 4;

	map.controls[google.maps.ControlPosition.TOP_RIGHT].push(div4);



	function ReCenterMe(controlDiv, map) {

        // Set CSS for the control border.
        var controlUI = document.createElement('div');
        controlUI.style.backgroundColor = '#fff';
        controlUI.style.border = '2px solid #fff';
        controlUI.style.borderRadius = '3px';
        controlUI.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
        controlUI.style.cursor = 'pointer';
        controlUI.style.marginBottom = '22px';
        controlUI.style.textAlign = 'center';
        controlUI.title = 'Click to recenter the map';
        controlDiv.appendChild(controlUI);

        // Set CSS for the control interior.
        var controlText = document.createElement('div');
        controlText.style.color = 'rgb(25,25,25)';
        controlText.style.fontFamily = 'Roboto,Arial,sans-serif';
        controlText.style.fontSize = '16px';
        controlText.style.lineHeight = '38px';
        controlText.style.paddingLeft = '5px';
        controlText.style.paddingRight = '5px';
        controlText.innerHTML = 'Re-center';
        controlUI.appendChild(controlText);

        // Setup the click event listeners.
        controlUI.addEventListener('click', function() {
        	map.setCenter(GUC);
            map.setZoom(16);
        });

    }

    //taking lat & lang from user and showing them on map
    function ChooseLocation(controlDiv, map) {

        // Set CSS for the control border.
        var controlUI = document.createElement('div');
        controlUI.style.backgroundColor = '#fff';
        controlUI.style.border = '2px solid #fff';
        controlUI.style.borderRadius = '3px';
        controlUI.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
        controlUI.style.cursor = 'pointer';
        controlUI.style.marginBottom = '22px';
        controlUI.style.textAlign = 'center';
        controlUI.title = 'Click to choose a location';
        controlDiv.appendChild(controlUI);

        // Set CSS for the control interior.
        var controlText = document.createElement('div');
        controlText.style.color = 'rgb(25,25,25)';
        controlText.style.fontFamily = 'Roboto,Arial,sans-serif';
        controlText.style.fontSize = '16px';
        controlText.style.lineHeight = '38px';
        controlText.style.paddingLeft = '5px';
        controlText.style.paddingRight = '5px';
        controlText.innerHTML = 'Go To';
        controlUI.appendChild(controlText);

        // Setup the click event listeners.
        controlUI.addEventListener('click', function() {
        	lat = prompt("Please enter latitude:");
        	long = prompt("Please enter longitude:");
        	var loc = new google.maps.LatLng(lat,long);
        	var marker = new google.maps.Marker({
        		position: loc,
        		map: map
        	});
        	map.setCenter(loc);
        });

    }

   	//creating polylines (straight line between two given points)	
   	function MakePath(controlDiv, map) {

        // Set CSS for the control border.
        var controlUI = document.createElement('div');
        controlUI.style.backgroundColor = '#fff';
        controlUI.style.border = '2px solid #fff';
        controlUI.style.borderRadius = '3px';
        controlUI.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
        controlUI.style.cursor = 'pointer';
        controlUI.style.marginBottom = '22px';
        controlUI.style.textAlign = 'center';
        controlUI.title = 'Click to show path';
        controlDiv.appendChild(controlUI);

        // Set CSS for the control interior.
        var controlText = document.createElement('div');
        controlText.style.color = 'rgb(25,25,25)';
        controlText.style.fontFamily = 'Roboto,Arial,sans-serif';
        controlText.style.fontSize = '16px';
        controlText.style.lineHeight = '38px';
        controlText.style.paddingLeft = '5px';
        controlText.style.paddingRight = '5px';
        controlText.innerHTML = 'Path';
        controlUI.appendChild(controlText);

        // Setup the click event listeners.
        controlUI.addEventListener('click', function() {
        	lat1 = prompt("Please enter the latitude of the 1st point:");
        	long1 = prompt("Please enter the longitude of the first point:");
        	lat2 = prompt("Please enter the latitude of the second point:");
        	long2 = prompt("Please enter the longitude of the second point:");
        	loc1 = new google.maps.LatLng(lat1,long1);
        	loc2 = new google.maps.LatLng(lat2,long2);
        	var pathCoordinates = [loc1,loc2];

        	var marker1 = new google.maps.Marker({
        		position: loc1,
        		map: map
        	});

        	var marker2 = new google.maps.Marker({
        		position: loc2,
        		map: map
        	});

        	var path = new google.maps.Polyline({
        		path: pathCoordinates,
        		strokeColor: "red",
        		strokeOpacity: 1.0,
        		strokeWeight: 2
        	});
        	path.setMap(map);

        	map.setCenter(loc1);
        });

    }

    function CalculateDistance(controlDiv, map) {

        // Set CSS for the control border.
        var controlUI = document.createElement('div');
        controlUI.style.backgroundColor = '#fff';
        controlUI.style.border = '2px solid #fff';
        controlUI.style.borderRadius = '3px';
        controlUI.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
        controlUI.style.cursor = 'pointer';
        controlUI.style.marginBottom = '22px';
        controlUI.style.textAlign = 'center';
        controlUI.title = 'Click to calculate distance between two points';
        controlDiv.appendChild(controlUI);

        // Set CSS for the control interior.
        var controlText = document.createElement('div');
        controlText.style.color = 'rgb(25,25,25)';
        controlText.style.fontFamily = 'Roboto,Arial,sans-serif';
        controlText.style.fontSize = '16px';
        controlText.style.lineHeight = '38px';
        controlText.style.paddingLeft = '5px';
        controlText.style.paddingRight = '5px';
        controlText.innerHTML = 'Distance';
        controlUI.appendChild(controlText);

        // Setup the click event listeners.
        controlUI.addEventListener('click', function() {
        	lat1 = prompt("Please enter the latitude of the 1st point:");
        	long1 = prompt("Please enter the longitude of the first point:");
        	lat2 = prompt("Please enter the latitude of the second point:");
        	long2 = prompt("Please enter the longitude of the second point:");
        	loc1 = new google.maps.LatLng(lat1,long1);
        	loc2 = new google.maps.LatLng(lat2,long2);

        	var marker1 = new google.maps.Marker({
        		position: loc1,
        		map: map
        	});

        	var marker2 = new google.maps.Marker({
        		position: loc2,
        		map: map
        	});

        	map.setCenter(loc1);

        	var distance = google.maps.geometry.spherical.computeDistanceBetween (loc1,loc2);
        	alert("This is exactly "+distance.toFixed(2)+" meters.");
        });

    }
}