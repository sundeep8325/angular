angular.module('angularApp').provider('frenchTranslations', function frenchTranslationsProvider(){

	'use strict';
	this.labels = {
		common: {
			form: {
				firstName : {
					required: 'This field is required',
					placeholder: 'fisrt name'
				},
				lastName : {
					required: 'This field is required',
					placeholder: 'lastss Name'
				}
			}
		}
	};

	this.$get = function(){
		return this.labels;
	};

	return;
});
