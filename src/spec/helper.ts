import * as ko from "knockout";

export class Helper {
    public static isElementRegistered(elementName: string): boolean {
        return ko.components.isRegistered(elementName);
    };
};
