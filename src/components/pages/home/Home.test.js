import {render} from '@testing-library/react';

import Home from "./Home";

describe('Home', () => {
    it('should render without crashing', () => {
        render(<Home />)
    })
})