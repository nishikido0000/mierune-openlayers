
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

// 地図画面表示
var map = new ol.Map({
	target: "map",
    view: new ol.View({
      center: ol.proj.fromLonLat([139.767, 35.681]),
      zoom: 11
    }),
    layers: layer
});
