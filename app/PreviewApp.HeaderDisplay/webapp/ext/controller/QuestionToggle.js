sap.ui.define([
    "sap/m/MessageToast"
], function(MessageToast) {
    'use strict';

    return {
        toggleQuestion: function(oEvent) {
            debugger
            let QTab = this.byId('fe::table::vendorpc::LineItem::Questions::Table');
            if(QTab.mAggregations.content.mAggregations._content.mProperties?.visible == false){
                QTab.mAggregations.content.mAggregations._content.setVisible(true);
            } else {
                QTab.mAggregations.content.mAggregations._content.setVisible(false);
            }
            
        }
    };
});
