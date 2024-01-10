sap.ui.define(['sap/ui/core/mvc/ControllerExtension',"sap/m/Column","sap/m/ColumnListItem"], function (ControllerExtension,Column,ColumnListItem) {
	'use strict';

	return ControllerExtension.extend('PreviewApp.HeaderDisplay.ext.controller.ObjPage', {
		// this section allows to extend lifecycle hooks or hooks provided by Fiori elements
		override: {
			/**
             * Called when a controller is instantiated and its View controls (if available) are already created.
             * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
             * @memberOf PreviewApp.HeaderDisplay.ext.controller.ObjPage
             */
			onInit: function () {
				// you can access the Fiori elements extensionAPI via this.base.getExtensionAPI
				var oModel = this.base.getExtensionAPI().getModel();
			},
			routing: {
                onAfterBinding: async function (oBindingContext) {
					debugger
				    const  oExtensionAPI = this.base.getExtensionAPI(),
							oModel = oExtensionAPI.getModel();
							// sFunctionName = "readSrcEvents";
							// oFunction = oModel.bindContext(`/${sFunctionName}(...)`);
							let oCell
							let event_id = oBindingContext.sPath.replace(/[^0-9]/g, "")
							event_id = "Doc" + event_id;

							sap.ui.core.BusyIndicator.show(0);
							$.ajax({
								url: `https://nfa_app-grateful-duiker-kc.cfapps.us20.hana.ondemand.com/dev/getPreview?event_id=${event_id}`,
								type: "GET",
								success: function(data){
									debugger

									let oTableP = oExtensionAPI.byId('fe::table::vendorpc::LineItem::VendorPriceComparison::Table');
									let oTableDP = oExtensionAPI.byId('fe::table::vendorpc::LineItem::Questions::Table');
									// oTableP.mAggregations.content.mForwardedAggregations.actions[0].setVisible(false);
									// oTableDP.mAggregations.content.mForwardedAggregations.actions[0].setVisible(false);
									oTableP.mAggregations.content.mAggregations._content.mAggregations.headerToolbar.setVisible(false);
									oTableDP.mAggregations.content.mAggregations._content.mAggregations.headerToolbar.setVisible(false);
									let oTable = oTableP.getContent().mAggregations._content;
									let oTableD = oTableDP.getContent().mAggregations._content;
									let detailsColumns = ["Itemname"];
									let questionsColumns = ["question"];
									oTable.destroyItems();
									oTableD.destroyItems();
									oTable.destroyColumns();
									oTableD.destroyColumns();
                                    
									debugger
									let oForm = oExtensionAPI.byId('fe::FacetSection::Comments').mForwardedAggregations.subSections[0]._aAggregationProxy.blocks[0].mAggregations.content.mAggregations.content;
									let oFields = oForm.getFormContainers()[0].getFormElements()[0].getFields();
									oForm.getFormContainers()[0].destroyFormElements()
									oForm.getFormContainers()[0].addFormElement(
										new sap.ui.layout.form.FormElement({
											fields: [
												new sap.m.TextArea({
													cols: 70,
													growing: true
												})
											],
											label: new sap.m.Label({
												text: "Test Label"
											})
										})
									);


									//  Questions table
							let colArray = ['id'];
							let ques = data?.question;
							ques.forEach(quest => {
								let keyval = Object.keys(quest);
								let valVal = Object.values(quest);
								questionsColumns.forEach(col => {
									if(!colArray.includes(col)){
										var oColumn = new Column({
											header: new sap.m.Label({
												text: col
											})
										});
										oTableD.addColumn(oColumn);
										colArray.push(col)
									}
								})
								keyval.forEach(key => {
									if(!colArray.includes(key)){
										var oColumn = new Column({
											header: new sap.m.Label({
												text: key
											})
										});
										oTableD.addColumn(oColumn);
										colArray.push(key)
									}
								})
								
								});

									// Details Table
									colArray = ['id'];
									let verData = data.data;
									verData.forEach(ver => {
										let keyval = Object.keys(ver);
										detailsColumns.forEach(col => {
											if(!colArray.includes(col)){
												var oColumn = new Column({
													header: new sap.m.Label({
														text: col
													}),
													// width: "100px"
												});
												oTable.addColumn(oColumn);
												colArray.push(col)
											}
										})
										keyval.forEach(key => {
											if(!colArray.includes(key)){
												if(key == data.low_flag){
													var oColumn = new Column({
														header: new sap.m.Label({
															text: key
														}),
														styleClass: "columncolor"
													});
												} else {
													var oColumn = new Column({
														header: new sap.m.Label({
															text: key
														})													
													});
												}												
												
												oTable.addColumn(oColumn);
												colArray.push(key)
											}
										})
									});

									



									// Details row insert
									let oCells = [];
									let oRow
									let tempvals
									
									if(data != undefined || data != 'not found'){
										for(let i = 0; i < verData.length; i++){

											
											for(let j = 0; j < detailsColumns.length; j++){
												oCell = new sap.m.Text({
													text: verData[i][detailsColumns[j]]													
												});
												if(verData[i][detailsColumns[j]] == "Tax" || verData[i][detailsColumns[j]]	== "Total"){
													oCell.addStyleClass("cellcolor");
												}
												oCells.push(oCell);
												delete verData[i][detailsColumns[j]]
											}

											let DIcheck = verData[i]?.id;
											if (DIcheck != undefined){
												delete verData[i].id
											}											

										tempvals = Object.values(verData[i]);
										let len = tempvals.length
										tempvals.forEach((val,index) => {
											// if(index != len){
												oCell = new sap.m.Text({
													text: val
												});
												oCells.push(oCell);
											// }
										})
										oRow = new ColumnListItem({
											cells: oCells
										  });
										oTable.addItem(oRow);
										oCells = [];
										}
									}


							// Questions row insert

							oCells = [];
							 		
							 

							if(ques != undefined){
								for(let i = 0; i < ques.length; i++){
									for(let j = 0; j < questionsColumns.length; j++){
										oCell = new sap.m.Text({
											text: ques[i][questionsColumns[j]]
										});
									oCells.push(oCell);
									delete ques[i][questionsColumns[j]]
									}
								let check = ques[i]?.id;
								if (check != undefined){
									delete ques[i].id
								}
								tempvals = Object.values(ques[i]);
								tempvals.forEach(val => {
									oCell = new sap.m.Text({
										text: val
									});
								oCells.push(oCell);
								})

								oRow = new ColumnListItem({
									cells: oCells
								  });
								oTableD.addItem(oRow);
								oCells = [];
								}
							}

									sap.ui.core.BusyIndicator.hide();
								}
							});
						}
			}
		}
	});
});
