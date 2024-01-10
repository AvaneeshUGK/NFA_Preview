sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'PreviewApp.PreviewFinal',
            componentId: 'Source_EventsObjectPage',
            entitySet: 'Source_Events'
        },
        CustomPageDefinitions
    );
});