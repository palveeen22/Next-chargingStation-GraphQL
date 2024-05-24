import HomePage from '@/app/page';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

test('it renders home page', () => {
    // Render the component
    render(<HomePage />);

    // Find the button element
    const button = screen.getByRole('button');

    // Assert that the button is present in the document
    expect(button).toBeInTheDocument();
});
