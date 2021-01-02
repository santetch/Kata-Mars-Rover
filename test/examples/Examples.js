class Examples {
    classicist() {
        return 2;
    }

    spy(fake) {
        fake.someAction(6);
    }

    asyncSpy(fake) {
        new Promise((resolve) => {
            setTimeout(resolve, 200);
        }).then(() => {
            fake.someAction(22);
        })
    }

    stub(fake) {
        return fake.anotherAction(25) + 75;
    }

    promiseRejection() {
        return Promise.reject();
    }
}

export default Examples
