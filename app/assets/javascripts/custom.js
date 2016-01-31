jQuery(document).ready(function(){
    google.maps.event.addDomListener(window, 'load', initialize);

function initialize(){
    if($("#google_map").length) {

    var mapOptions = { //구글 맵 옵션 설정
        zoom : 16, //기본 확대율
        center : new google.maps.LatLng(37.5651, 126.98955), // 지도 중앙 위치
        scrollwheel : false, //마우스 휠로 확대 축소 사용 여부
								mapTypeControl : false //맵 타입 컨트롤 사용 여부
								disableDefaultUI : true, //기본 UI 사용 여부
								disableDoubleClickZoom : true, //더블클릭 중심으로 확대 사용 여부
								draggable : true, //지도 드래그 이동 사용 여부
								keyboardShortcuts : true, //키보드 단축키 사용 여부
								maxZoom : 18, //최대 줌
								minZoom : 1 //최소 줌
    };

    var map = new google.maps.Map(document.getElementById('google_map'), mapOptions); //구글 맵을 사용할 타겟

    var image = 'http://cheolguso.com/img/iconimg.png'; //마커 이미지 설정

    var marker = new google.maps.Marker({ //마커 설정
        map : map,
        position : map.getCenter(), //마커 위치
        icon : image //마커 이미지
    });
    google.maps.event.addDomListener(window, "resize", function() { //리사이즈에 따른 마커 위치
        var center = map.getCenter();
        google.maps.event.trigger(map, "resize");
        map.setCenter(center);
    });

    }//if-end
}//function-end

});//jQuery-end
