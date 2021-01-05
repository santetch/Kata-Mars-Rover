import MarsMapPresenter from "../../core/delivery/MarsMapPresenter";
import {expect} from "chai";

describe('Mars Map Presenter Should', () => {
    let marsMapView;
    let marsMapPresenter;

    const errorMessage = "There has been an error";

    beforeEach(() => {
        marsMapView = mock('renderError');
    });

    it('call the view once with an error message', () => {
        marsMapPresenter = new MarsMapPresenter(marsMapView);

        marsMapPresenter.showError();

        expect(marsMapView.renderError).calledWith(errorMessage);
    });
});