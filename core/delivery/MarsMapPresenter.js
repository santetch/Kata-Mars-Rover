class MarsMapPresenter {
    constructor(view) {
        this.view = view;
    }

    showError(message = "There has been an error") {
        this.view.renderError(message);
    }

    showSuccess(message) {

    }
}

export default MarsMapPresenter;