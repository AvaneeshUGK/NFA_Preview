sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'PreviewApp.PreviewFinal',
            componentId: 'Source_EventsList',
            entitySet: 'Source_Events'
        },
        CustomPageDefinitions
    );
});