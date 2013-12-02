define('jquery', [], function () { return jQuery; });
define('knockout', [], function () { return ko; });

require(['durandal/system', 'durandal/app', 'durandal/viewLocator'],
    function (system, app, viewLocator) {
        system.debug(false);
        app.start().then(function () {
            viewLocator.useConvention();
            app.setRoot('viewmodels/shell');
        });
    }
);

