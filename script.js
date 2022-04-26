let center = [54.706919759140035,20.509742969565142]; 

function init()
{
    let map = new ymaps.Map('map-test', {
        center: center, 
        zoom: 17
    }); 

    let placemark = new ymaps.Placemark(center); 
    map.geoObjects.add(placemark); 
}

ymaps.ready(init); 