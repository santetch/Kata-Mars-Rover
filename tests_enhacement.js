const sinon = require("sinon");
const sinonchai = require("sinon-chai")
const {expect, use} = require("chai");

use(sinonchai)

function mock(...methods) {
    const fake = {};
    methods.forEach((method) => {
        fake[method] = sinon.stub();
        fake[method].propName = method;
        fake[method].rootObj = {
            constructor: {
                name: "Mock",
            },
        };
    });
    return fake;
}

Function.prototype.calledAsync = function() {
    return new Promise((resolve, reject) => {
        const methodName = this.propName;
        const objectName = this.rootObj.constructor.name;

        const error = new Error(`expected method ${methodName} to be called over ${objectName}`);

        const timeout = setTimeout(() => {
            reject(error);
        }, 1000);
        const actualReturnValue = this();
        this.callsFake(() => {
            clearTimeout(timeout);
            resolve();

            return actualReturnValue;
        });
    });
};

Function.prototype.neverCalledAsync = function() {
    return new Promise((resolve, reject) => {
        const methodName = this.propName;
        const objectName = this.rootObj.constructor.name;

        const error = new Error(`expected method ${methodName} to be never called over ${objectName}`);

        const timeout = setTimeout(() => {
            resolve();
        }, 1000);
        this.callsFake(() => {
            clearTimeout(timeout);
            reject(error);
        });
    });
};

Function.prototype.calledAsyncWith = function(...expectedArguments) {
    return new Promise((resolve, reject) => {
        const methodName = this.propName;
        const objectName = this.rootObj.constructor.name;

        const neverCalledError = new Error(`expected method ${methodName} to be called over ${objectName}`);

        const timeout = setTimeout(() => {
            reject(neverCalledError);
        }, 1000);
        this.callsFake((...callArguments) => {
            clearTimeout(timeout);
            try {
                expect(callArguments)
                    .be
                    .eql(expectedArguments);
            } catch (err) {
                reject(err);
            }
            resolve();
        });
    });
};

Promise.prototype.expectToReject = function() {
    const expectedToThrowError = new Error("this method should reject Promise");
    return this
        .then(() => {
            throw expectedToThrowError;
        })
        .catch((error) => {
            if (error === expectedToThrowError) {
                throw error;
            }
        });
};

global.mock = mock
