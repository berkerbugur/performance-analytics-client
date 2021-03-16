import {render, screen} from '@testing-library/react';
import Header from "./Header";

describe('Header', () => {
    it('should render without crashing', () => {
        render(<Header />);
    });

    it('should contain header label', () => {
        render(<Header />)
        const linkElement = screen.getByText(/Performance Analyzer/i);
        expect(linkElement).toBeInTheDocument();
    });
})