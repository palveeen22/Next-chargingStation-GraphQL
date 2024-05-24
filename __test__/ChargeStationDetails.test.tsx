import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { useQuery } from '@apollo/client';
import ChargeStationDetails from '@/components/ChargeStationDetails';
import LoadingScreen from '../src/components/Loading';

// Mock necessary modules
jest.mock('@apollo/client', () => ({
    useQuery: jest.fn(),
    gql: jest.fn(), 
}));

jest.mock('../src/components/Loading', () => () => <LoadingScreen />);

describe('ChargeStationDetails', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('renders loading screen initially', () => {
        // Mock useQuery to return loading state
        (useQuery as jest.Mock).mockReturnValue({ loading: true, error: null, data: null });

        // Render the component
        render(<ChargeStationDetails id={1001} setMapData={() => { }} />);

        // Assert that the loading screen is rendered
        expect(screen.getByText('Loading...')).toBeInTheDocument();
    });
});
