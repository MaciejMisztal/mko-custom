import * as  ko from "knockout";
import {mkoCustom} from "mko-custom";
import templateText from "./element-decorator.html";

@mkoCustom('element-decorator',templateText)
export class elementDecoratorVm {
	public text = ko.observable();
	constructor(params) {
		this.text = params.initialText || '';
	}
};
