sap.ui.define(["sap/m/MessageToast"],function(e){"use strict";return{GeneratePdf:function(e){debugger;var n=window.open("print","_page");var t=document.getElementById("PreviewApp.HeaderDisplay::Source_EventsObjectPage--fe::table::vendorpc::LineItem::VendorPriceComparison-innerTable-listUl").innerHTML;var r=document.getElementById("PreviewApp.HeaderDisplay::Source_EventsObjectPage--fe::FormContainer::Comments::FormElement::DataField::Comment::Comments").innerHTML;var o=n.document.write("<!DOCTYPE html><html><br><br><h2 >Vendor Price Comparison</h2><table><tr>"+t+"</tr></table><br><br><h2>Comments</h2><div>"+r+"</div></html>");n.document.close();n.print();console.log(o)}}});
//# sourceMappingURL=GeneratePdf.js.map