var wms_layers = [];


        var lyr_ESRISATELLITE_0 = new ol.layer.Tile({
            'title': 'ESRI SATELLITE',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_GOOGLESATELLITE_1 = new ol.layer.Tile({
            'title': 'GOOGLE SATELLITE',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_CITRAWILAYAHDANERASE_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'CITRA WILAYAH DANE RASE<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/CITRAWILAYAHDANERASE_2.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [12966719.307366, -981650.515834, 12968969.851553, -979986.874066]
        })
    });
var format_BATASDESAKELURAHAN_3 = new ol.format.GeoJSON();
var features_BATASDESAKELURAHAN_3 = format_BATASDESAKELURAHAN_3.readFeatures(json_BATASDESAKELURAHAN_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BATASDESAKELURAHAN_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BATASDESAKELURAHAN_3.addFeatures(features_BATASDESAKELURAHAN_3);
var lyr_BATASDESAKELURAHAN_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BATASDESAKELURAHAN_3, 
                style: style_BATASDESAKELURAHAN_3,
                popuplayertitle: 'BATAS DESA/KELURAHAN',
                interactive: false,
                title: '<img src="styles/legend/BATASDESAKELURAHAN_3.png" /> BATAS DESA/KELURAHAN'
            });
var format_BATASKECAMATAN_4 = new ol.format.GeoJSON();
var features_BATASKECAMATAN_4 = format_BATASKECAMATAN_4.readFeatures(json_BATASKECAMATAN_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BATASKECAMATAN_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BATASKECAMATAN_4.addFeatures(features_BATASKECAMATAN_4);
var lyr_BATASKECAMATAN_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BATASKECAMATAN_4, 
                style: style_BATASKECAMATAN_4,
                popuplayertitle: 'BATAS KECAMATAN',
                interactive: true,
                title: '<img src="styles/legend/BATASKECAMATAN_4.png" /> BATAS KECAMATAN'
            });
var format_BATASDESADANERASE_5 = new ol.format.GeoJSON();
var features_BATASDESADANERASE_5 = format_BATASDESADANERASE_5.readFeatures(json_BATASDESADANERASE_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BATASDESADANERASE_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BATASDESADANERASE_5.addFeatures(features_BATASDESADANERASE_5);
var lyr_BATASDESADANERASE_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BATASDESADANERASE_5, 
                style: style_BATASDESADANERASE_5,
                popuplayertitle: 'BATAS DESA DANE RASE',
                interactive: false,
                title: '<img src="styles/legend/BATASDESADANERASE_5.png" /> BATAS DESA DANE RASE'
            });
var format_Irigasi_6 = new ol.format.GeoJSON();
var features_Irigasi_6 = format_Irigasi_6.readFeatures(json_Irigasi_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Irigasi_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Irigasi_6.addFeatures(features_Irigasi_6);
var lyr_Irigasi_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Irigasi_6, 
                style: style_Irigasi_6,
                popuplayertitle: 'Irigasi',
                interactive: false,
                title: '<img src="styles/legend/Irigasi_6.png" /> Irigasi'
            });
var format_JARINGANJALAN_7 = new ol.format.GeoJSON();
var features_JARINGANJALAN_7 = format_JARINGANJALAN_7.readFeatures(json_JARINGANJALAN_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JARINGANJALAN_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JARINGANJALAN_7.addFeatures(features_JARINGANJALAN_7);
var lyr_JARINGANJALAN_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JARINGANJALAN_7, 
                style: style_JARINGANJALAN_7,
                popuplayertitle: 'JARINGAN JALAN',
                interactive: false,
    title: 'JARINGAN JALAN<br />\
    <img src="styles/legend/JARINGANJALAN_7_0.png" /> Jalan Raya<br />\
    <img src="styles/legend/JARINGANJALAN_7_1.png" /> Jalan Desa/Lingkungan<br />' });
var format_FASILITASUMUM_8 = new ol.format.GeoJSON();
var features_FASILITASUMUM_8 = format_FASILITASUMUM_8.readFeatures(json_FASILITASUMUM_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FASILITASUMUM_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FASILITASUMUM_8.addFeatures(features_FASILITASUMUM_8);
var lyr_FASILITASUMUM_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FASILITASUMUM_8, 
                style: style_FASILITASUMUM_8,
                popuplayertitle: 'FASILITAS UMUM',
                interactive: true,
    title: 'FASILITAS UMUM<br />\
    <img src="styles/legend/FASILITASUMUM_8_0.png" /> BUMDES<br />\
    <img src="styles/legend/FASILITASUMUM_8_1.png" /> Kantor Desa<br />\
    <img src="styles/legend/FASILITASUMUM_8_2.png" /> Kesenian<br />\
    <img src="styles/legend/FASILITASUMUM_8_3.png" /> Masjid<br />\
    <img src="styles/legend/FASILITASUMUM_8_4.png" /> Pasar<br />\
    <img src="styles/legend/FASILITASUMUM_8_5.png" /> Sekolah<br />\
    <img src="styles/legend/FASILITASUMUM_8_6.png" /> UMKM<br />\
    <img src="styles/legend/FASILITASUMUM_8_7.png" /> KUBE<br />' });
var group_PERAIRAN = new ol.layer.Group({
                                layers: [lyr_Irigasi_6,],
                                fold: 'close',
                                title: 'PERAIRAN'});

lyr_ESRISATELLITE_0.setVisible(true);lyr_GOOGLESATELLITE_1.setVisible(true);lyr_CITRAWILAYAHDANERASE_2.setVisible(true);lyr_BATASDESAKELURAHAN_3.setVisible(true);lyr_BATASKECAMATAN_4.setVisible(true);lyr_BATASDESADANERASE_5.setVisible(true);lyr_Irigasi_6.setVisible(true);lyr_JARINGANJALAN_7.setVisible(true);lyr_FASILITASUMUM_8.setVisible(true);
var layersList = [lyr_ESRISATELLITE_0,lyr_GOOGLESATELLITE_1,lyr_CITRAWILAYAHDANERASE_2,lyr_BATASDESAKELURAHAN_3,lyr_BATASKECAMATAN_4,lyr_BATASDESADANERASE_5,group_PERAIRAN,lyr_JARINGANJALAN_7,lyr_FASILITASUMUM_8];
lyr_BATASDESAKELURAHAN_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'UUPP': 'UUPP', 'LUAS': 'LUAS', });
lyr_BATASKECAMATAN_4.set('fieldAliases', {'KARKTR': 'KARKTR', 'STSBTS': 'STSBTS', 'FCODE': 'FCODE', 'KELAS': 'KELAS', 'UUPP': 'UUPP', 'LOKASI': 'LOKASI', 'REMARK': 'REMARK', 'NAMOBJ': 'NAMOBJ', 'ADMIN1': 'ADMIN1', 'ADMIN2': 'ADMIN2', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'WAKLD1': 'WAKLD1', 'WAKLD2': 'WAKLD2', 'WADKC1': 'WADKC1', 'WADKC2': 'WADKC2', 'WAKBK1': 'WAKBK1', 'WAKBK2': 'WAKBK2', 'WAPRO1': 'WAPRO1', 'WAPRO2': 'WAPRO2', 'TIPTBT': 'TIPTBT', 'PJGBTS': 'PJGBTS', 'KLBADM': 'KLBADM', 'TIPLOK': 'TIPLOK', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_BATASDESADANERASE_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'UUPP': 'UUPP', 'LUAS': 'LUAS', });
lyr_Irigasi_6.set('fieldAliases', {'fid': 'fid', 'NAMOBJ': 'NAMOBJ', 'TIPSNG': 'TIPSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'STATUS': 'STATUS', 'WMAX': 'WMAX', 'DBTMAX': 'DBTMAX', 'SLPRT': 'SLPRT', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_JARINGANJALAN_7.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'service': 'service', 'import': 'import', 'layer': 'layer', 'bridge': 'bridge', 'highway': 'highway', });
lyr_FASILITASUMUM_8.set('fieldAliases', {'Nama': 'Nama', 'Kategori': 'Kategori', 'Foto': 'Foto', 'Deskripsi': 'Deskripsi', 'Lokasi': 'Lokasi', });
lyr_BATASDESAKELURAHAN_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDPBPS': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'LUASWH': 'TextEdit', 'TIPADM': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADKC': 'TextEdit', 'WIADKK': 'TextEdit', 'WIADPR': 'TextEdit', 'WIADKD': 'TextEdit', 'UUPP': 'TextEdit', 'LUAS': 'TextEdit', });
lyr_BATASKECAMATAN_4.set('fieldImages', {'KARKTR': 'Range', 'STSBTS': 'Range', 'FCODE': 'TextEdit', 'KELAS': 'Range', 'UUPP': 'TextEdit', 'LOKASI': 'Range', 'REMARK': 'TextEdit', 'NAMOBJ': 'TextEdit', 'ADMIN1': 'TextEdit', 'ADMIN2': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'WAKLD1': 'TextEdit', 'WAKLD2': 'TextEdit', 'WADKC1': 'TextEdit', 'WADKC2': 'TextEdit', 'WAKBK1': 'TextEdit', 'WAKBK2': 'TextEdit', 'WAPRO1': 'TextEdit', 'WAPRO2': 'TextEdit', 'TIPTBT': 'Range', 'PJGBTS': 'TextEdit', 'KLBADM': 'Range', 'TIPLOK': 'Range', 'SHAPE_Leng': 'TextEdit', });
lyr_BATASDESADANERASE_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDPBPS': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'LUASWH': 'TextEdit', 'TIPADM': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADKC': 'TextEdit', 'WIADKK': 'TextEdit', 'WIADPR': 'TextEdit', 'WIADKD': 'TextEdit', 'UUPP': 'TextEdit', 'LUAS': 'TextEdit', });
lyr_Irigasi_6.set('fieldImages', {'fid': 'TextEdit', 'NAMOBJ': 'TextEdit', 'TIPSNG': 'Range', 'KLSSNG': 'Range', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'NAMWS': 'TextEdit', 'NAMDAS': 'TextEdit', 'STATUS': 'TextEdit', 'WMAX': 'TextEdit', 'DBTMAX': 'TextEdit', 'SLPRT': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_JARINGANJALAN_7.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'service': 'TextEdit', 'import': 'TextEdit', 'layer': 'TextEdit', 'bridge': 'TextEdit', 'highway': 'TextEdit', });
lyr_FASILITASUMUM_8.set('fieldImages', {'Nama': 'TextEdit', 'Kategori': 'TextEdit', 'Foto': 'ExternalResource', 'Deskripsi': 'TextEdit', 'Lokasi': 'TextEdit', });
lyr_BATASDESAKELURAHAN_3.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'KDBBPS': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDPBPS': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'LUASWH': 'no label', 'TIPADM': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'WIADKC': 'no label', 'WIADKK': 'no label', 'WIADPR': 'no label', 'WIADKD': 'no label', 'UUPP': 'no label', 'LUAS': 'no label', });
lyr_BATASKECAMATAN_4.set('fieldLabels', {'KARKTR': 'no label', 'STSBTS': 'no label', 'FCODE': 'no label', 'KELAS': 'no label', 'UUPP': 'no label', 'LOKASI': 'no label', 'REMARK': 'no label', 'NAMOBJ': 'no label', 'ADMIN1': 'no label', 'ADMIN2': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'WAKLD1': 'no label', 'WAKLD2': 'no label', 'WADKC1': 'no label', 'WADKC2': 'no label', 'WAKBK1': 'no label', 'WAKBK2': 'no label', 'WAPRO1': 'no label', 'WAPRO2': 'no label', 'TIPTBT': 'no label', 'PJGBTS': 'no label', 'KLBADM': 'no label', 'TIPLOK': 'no label', 'SHAPE_Leng': 'no label', });
lyr_BATASDESADANERASE_5.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'KDBBPS': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDPBPS': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'LUASWH': 'no label', 'TIPADM': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'WIADKC': 'no label', 'WIADKK': 'no label', 'WIADPR': 'no label', 'WIADKD': 'no label', 'UUPP': 'no label', 'LUAS': 'no label', });
lyr_Irigasi_6.set('fieldLabels', {'fid': 'no label', 'NAMOBJ': 'no label', 'TIPSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'STATUS': 'no label', 'WMAX': 'no label', 'DBTMAX': 'no label', 'SLPRT': 'no label', 'SHAPE_Leng': 'no label', });
lyr_JARINGANJALAN_7.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'service': 'no label', 'import': 'no label', 'layer': 'no label', 'bridge': 'no label', 'highway': 'no label', });
lyr_FASILITASUMUM_8.set('fieldLabels', {'Nama': 'inline label - always visible', 'Kategori': 'inline label - always visible', 'Foto': 'inline label - always visible', 'Deskripsi': 'inline label - always visible', 'Lokasi': 'inline label - always visible', });
lyr_FASILITASUMUM_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});