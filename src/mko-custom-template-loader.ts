import ko from "knockout";

/**
* Decorator: Indicates that the decorated class will be a custom element.
* @param selectorName The name of the custom element.
* @param templateUrl URL location of template.
*/

export function mkoCustom(selectorName: string, templateUrl: string) {
	return function(target: Function) {
		ko.components.register(selectorName, {
			template :   {require: (templateUrl+'!text')},
			viewModel: target
		})
	};
};
