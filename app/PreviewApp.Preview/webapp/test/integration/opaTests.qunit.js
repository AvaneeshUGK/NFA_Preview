sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'PreviewApp/Preview/test/integration/FirstJourney',
		'PreviewApp/Preview/test/integration/pages/VendorPriceCompList',
		'PreviewApp/Preview/test/integration/pages/VendorPriceCompObjectPage'
    ],
    function(JourneyRunner, opaJourney, VendorPriceCompList, VendorPriceCompObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('PreviewApp/Preview') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheVendorPriceCompList: VendorPriceCompList,
					onTheVendorPriceCompObjectPage: VendorPriceCompObjectPage
                }
            },
            opaJourney.run
        );
    }
);