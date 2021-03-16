import {render} from '@testing-library/react';
import Analytics from "./Analytics";

describe('Analytics', () => {
    it('should load without crashing', () => {
        render(<Analytics />);
    })
});