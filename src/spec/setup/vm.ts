import ko from "knockout";

export default class Vm {
    message = ko.observable("Hello");
    textValue = ko.observable("Initial text");
    waitSuccessed = true;
    };
