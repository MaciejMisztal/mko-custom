import * as  ko from "knockout";
import   "./element/element-decorator";
import Vm from "./vm";

var vm = new Vm();
ko.applyBindings(vm);
