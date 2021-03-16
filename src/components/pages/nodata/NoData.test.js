import {render, screen} from '@testing-library/react';

import NoData from "./NoData";

describe('NoData', () => {
    it('should render without crashing', () => {
        render(<NoData />);
    });

    it('should contain text', () => {
        render(<NoData />);
        const linkElement = screen.getByText(/No metrics found/i);
        expect(linkElement).toBeInTheDocument();
    });
});
