//import 'jasmine'
import {mkoCustom} from "../mko-custom";
import * as ko from "knockout";
import {Helper} from "./helper";

describe("mko-custom decorator", () => {
    describe("with inline template", () => {
        it("should register element", () => {
            @mkoCustom("test-element", "<div></div>")
            class TestElement {
                constructor() {
                };
            };
            
            expect(Helper.isElementRegistered("test-element")).toEqual(true);
        });
        
        it("should register element once only", () => {
            spyOn(ko.components, 'register').and.callThrough();

            @mkoCustom("test-element-once", "<div></div>")
            class TestElementInitial {
                constructor() {
                };
            };

            @mkoCustom("test-element-once", "<div></div>")
            class TestElementDuplicate {
                constructor() {
                };
            };
            
            expect(ko.components.register).toHaveBeenCalledTimes(1);
        });

    });
});
