import * as ko from "knockout";

/**
* Decorator: Indicates that the decorated class will be a custom element.
* @param selectorName The name of the custom element.
* @param templateContet Content (html) of element.
*/
export function mkoCustom(selectorName: string, templateContet: string) {
    return function(target: Function) {
        if (!ko.components.isRegistered(selectorName))
            ko.components.register(selectorName, {
                template: templateContet,
                viewModel: target
            });
    };
};

/**
* Decorator: Indicates that the decorated class will be a custom element.
* @param selectorName The name of the custom element.
* @param templateUrl URL location of template (with required prefix or suffix [requirejs('text!')/systemjs('!text')]).
*/

export function mkoCustomTemplateLoader(selectorName: string, templateUrl: string) {
    if (!ko.components.isRegistered(selectorName))
        return function(target: Function) {
            ko.components.register(selectorName, {
                template: { require: (templateUrl) },
                viewModel: target
            });
        };
};
