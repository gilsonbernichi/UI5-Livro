sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function(Controller, JSONModel) {
	"use strict";

	return Controller.extend("com.privatetraining.model.xml.controller.S0", {

		_data: {
			first: "Fabio",
			last: "Pagoti",
			taBloqueado: false
		},

		_viewModel: {
			busy: true
		},

		onInit: function() {
			var oModel = new JSONModel(this._data);
			this.getView().setModel(oModel);

			var oViewModel = new JSONModel(this._viewModel);
			this.getView().setModel(oViewModel, "view");

		},

		onPress: function(oEvent) {

			this.byId("input_a").bindValue({
				path: '/last'
			});

			this.byId("input_b").bindProperty("value", {
				path: '/first'
			});
			
			this.byId("input_b").bindProperty("tooltip", {
				path: '/first'
			});
			
			

		},

		onMudaBusy: function(oEvent) {
			var bBusy = this.getView().getModel("view").getProperty("/busy");

			if (bBusy) {
				this.getView().getModel("view").setProperty("/busy", false);
			} else {
				this.getView().getModel("view").setProperty("/busy", true);
			}

		}

	});
});