import {render} from '@testing-library/react';
import Loader from "./Loader";

describe('Loader', () => {
    it('should load without crashing', () => {
        render(<Loader />);
    })
});