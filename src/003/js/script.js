
// 「Standard, Premium, Global Scale」プラン 認証キー
var apikey = "xxxxxxxxxx";

// スタイル: normal, gray, bright, blue, warm, MIERUNE
var style = "normal";

// URL設定
var url = "https://tile.cdn.mierune.co.jp/styles/" + style + "/{z}/{x}/{y}.png" + "?key=" + apikey;

// MIERUNE地図 読み込み
var layer = [];
layer[0] = new ol.layer.Tile({
    source: new ol.source.XYZ({
        url: url,
        attributions: "Maptiles by <a href='http://mierune.co.jp/' target='_blank'>MIERUNE</a>, under CC BY. Data by <a href='http://osm.org/copyright' target='_blank'>OpenStreetMap</a> contributors, under ODbL.",
        maxZoom: 18
    })
});

// マーカー設定
var Map_Point = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([139.767, 35.681])),
    name: '東京駅だよ!!'
});
var styles = new ol.style.Style({
        image: new ol.style.Icon({
            anchor: [0.5, 1],
            src: 'https://openlayers.org/en/v4.3.4/examples/data/icon.png'
        })
    });
layer[1] = new ol.layer.Vector({
    source: new ol.source.Vector({
        features: [Map_Point]
    }),
    style: styles
});

// 地図画面表示
var map = new ol.Map({
	target: "map",
    view: new ol.View({
      center: ol.proj.fromLonLat([139.767, 35.681]),
      zoom: 11
    }),
    layers: layer
});

// ポップアップ設定
var element = document.getElementById('popup');
var popup = new ol.Overlay({
    element: element,
    positioning: 'bottom-center',
    stopEvent: false,
    offset: [0, -50]
});
map.addOverlay(popup);
map.on('click', function(evt) {
    var feature = map.forEachFeatureAtPixel(evt.pixel,
        function(feature) {
            return feature;
        });
    if (feature) {
        var coordinates = feature.getGeometry().getCoordinates();
        popup.setPosition(coordinates);
        $(element).popover({
            'placement': 'top',
            'html': true,
            'content': feature.get('name')
        });
        $(element).popover('show');
    } else {
        $(element).popover('destroy');
    }
});
