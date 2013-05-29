require(['durandal/system','durandal/app', 'durandal/viewLocator'],
    function (system, app, viewLocator) {
        system.debug(false);
        app.start().then(function () {
            viewLocator.useConvention();
            app.adaptToDevice();
            app.setRoot('viewmodels/shell');
        });
    }
);

