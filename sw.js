var cacheName = 'notedmais-v1';
var filesToCache = [
    './',
    './index.html',
    './plugins/css/styles.css',
    './bootstrap/css/bootstrap.min.css',
    './bootstrap/font-awesome/css/font-awesome.min.css',
    './plugins/dist/css/AdminLTE.min.css',
    './plugins/dist/css/skins/_all-skins.min.css',
    './plugins/pace/pace.min.css',
    'https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,300italic,400italic,600italic',
    './plugins/jQuery/jquery-3.1.1.min.js',
    './bootstrap/js/bootstrap.min.js',
    './plugins/pace/pace.min.js',
    './plugins/dist/js/adminlte.min.js',
    './plugins/mtpdf/jspdf.debug.js',
    './plugins/mtpdf/main.js',
    './manifest.json'
];
self.addEventListener('install', function (e) {
    e.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.addAll(filesToCache);
        })
    );
});
self.addEventListener('fetch', function (e) {
    e.respondWith(
        caches.match(e.request).then(function (response) {
            return response || fetch(e.request);
        })
    );
});
