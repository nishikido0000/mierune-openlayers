
// スタイル: mierune, mierune_mono
var style = "mierune_mono";

// URL設定
var url = "https://tile.mierune.co.jp/" + style + "/{z}/{x}/{y}.png";

// MIERUNE地図 読み込み
var layer = [];
layer[0] = new ol.layer.Tile({
    source: new ol.source.XYZ({
        url: url,
        attributions: "Maptiles by <a href='http://mierune.co.jp/' target='_blank'>MIERUNE</a>, under CC BY. Data by <a href='http://osm.org/copyright' target='_blank'>OpenStreetMap</a> contributors, under ODbL.",
        maxZoom: 18
    })
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
