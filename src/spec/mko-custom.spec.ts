//import 'jasmine'
import {mkoCustom,mkoCustomTemplateLoader} from "../mko-custom";
import * as ko from "knockout";
import {Helper} from "./helper";

describe("mko-custom decorator", () => {
    describe("with inline template", () => {
        it("should register element", () => {
            @mkoCustom("test-element", "<div></div>")
            class TestElement {};

            expect(Helper.isElementRegistered("test-element")).toEqual(true);
        });

        it("should register element once only", () => {
            spyOn(ko.components, 'register').and.callThrough();

            @mkoCustom("test-element-once", "<div></div>")
            class TestElementInitial {};

            @mkoCustom("test-element-once", "<div></div>")
            class TestElementDuplicate {};

            expect(ko.components.register).toHaveBeenCalledTimes(1);
        });
    });

    describe("with external template", () => {
      let templateUrl =  "./template.html";
      it("should register element", () => {
          @mkoCustomTemplateLoader("test-element-remote", templateUrl)
          class TestElement {};

          expect(Helper.isElementRegistered("test-element-remote")).toEqual(true);
      });

      it("should register element once only", () => {
          spyOn(ko.components, 'register').and.callThrough();

          @mkoCustomTemplateLoader("test-element-remote-once", templateUrl)
          class TestElementRemoteInitial {};

          @mkoCustomTemplateLoader("test-element-remote-once", templateUrl)
          class TestElementRemoteDuplicate {};

          expect(ko.components.register).toHaveBeenCalledTimes(1);
      });
  });

});
