sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'PreviewApp/HeaderDisplay/test/integration/FirstJourney',
		'PreviewApp/HeaderDisplay/test/integration/pages/Source_EventsList',
		'PreviewApp/HeaderDisplay/test/integration/pages/Source_EventsObjectPage',
		'PreviewApp/HeaderDisplay/test/integration/pages/VendorPriceCompObjectPage'
    ],
    function(JourneyRunner, opaJourney, Source_EventsList, Source_EventsObjectPage, VendorPriceCompObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('PreviewApp/HeaderDisplay') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheSource_EventsList: Source_EventsList,
					onTheSource_EventsObjectPage: Source_EventsObjectPage,
					onTheVendorPriceCompObjectPage: VendorPriceCompObjectPage
                }
            },
            opaJourney.run
        );
    }
);