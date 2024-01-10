sap.ui.define([
    "sap/m/MessageToast"
], function(MessageToast) {
    'use strict';

    return {
        GeneratePdf: function(oEvent) {debugger
            // MessageToast.show("Custom handler invoked.");
            var printWindow = window.open('print','_page');
            var hdrs = document.getElementById('PreviewApp.HeaderDisplay::Source_EventsObjectPage--fe::table::vendorpc::LineItem::VendorPriceComparison-innerTable-listUl').innerHTML;
           
            var cmtbody = document.getElementById('PreviewApp.HeaderDisplay::Source_EventsObjectPage--fe::FormContainer::Comments::FormElement::DataField::Comment::Comments').innerHTML;
            
             var print = printWindow.document.write('<!DOCTYPE html><html><br><br><h2 >Vendor Price Comparison</h2><table><tr>' +  hdrs + '</tr></table><br><br><h2>Comments</h2><div>'+ cmtbody +'</div></html>');
             printWindow.document.close();
             printWindow.print();
             console.log(print);
        }
    };
});
