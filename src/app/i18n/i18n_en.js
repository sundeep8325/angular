angular.module('angularApp').provider('englishTranslations', function englishTranslationsProvider(){

	'use strict';
	this.labels = {
		common: {
			form: {
				firstName : {
					required: 'This field is required',
					placeholder: 'First Name'
				},
				lastName : {
					required: 'This field is required',
					placeholder: 'Last Name'
				}
			}
		}
	};

	this.$get = function(){
		return this.labels;
	};

	return;
});
