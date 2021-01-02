import {expect} from "chai";
import Examples from "./Examples";

const {mock} = global;
/*
describe("this should be list of examples of how to implement different techniques of testing in JS", () => {
    it("should be an classicist approach", () => {
        const examples = new Examples();

        const result = examples.classicist(1);

        expect(result).be.eql(2);
    });

    it("should be an example of how to test a promise rejection", (done) => {
        const examples = new Examples();

        const response = examples.promiseRejection();

        response.expectToReject()
            .then(done, done);
    });

    describe("mockist approaches", () => {
        it("should be an spy assertion", () => {
            const examples = new Examples();
            const fake = mock("someAction");

            examples.spy(fake);

            expect(fake.someAction.callCount).be.eql(1);
            expect(fake.someAction.calledWithExactly(6)).be.true;
        });

        it("should be an spy assertion inside a promise chain", (done) => {
            const examples = new Examples();
            const fake = mock("someAction");

            examples.asyncSpy(fake);

            fake.someAction.calledAsync()
                .then(done, done);
        });

        it("should be an spy assertion inside a promise chain checking that method was not called", (done) => {
            const examples = new Examples();
            const fake = mock("someAction", "otherAction");

            examples.asyncSpy(fake);

            fake.otherAction.neverCalledAsync()
                .then(done, done);
        });

        it("should be an spy assertion inside a promise chain checking arguments", (done) => {
            const examples = new Examples();
            const fake = mock("someAction");

            examples.asyncSpy(fake);

            fake.someAction.calledAsyncWith(22)
                .then(done, done);
        });

        it("should be a stub preparation", () => {
            const examples = new Examples();
            const fake = mock("anotherAction");
            fake.anotherAction.withArgs(25).returns(50);

            const result = examples.stub(fake);

            expect(result).be.eql(125);
        });
    });
});
*/