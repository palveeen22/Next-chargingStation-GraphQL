import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { useQuery, gql } from '@apollo/client';
import ChargeStationList from '@/components/ChargeStationList';

// Mock necessary modules
jest.mock('@apollo/client', () => {
    const originalModule = jest.requireActual('@apollo/client');
    return {
        ...originalModule,
        useQuery: jest.fn(),
        gql: jest.fn(),
    };
});



const mockHandleClick = jest.fn();

describe('ChargeStationList', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('renders error message on error', () => {
        const errorMessage = 'An error occurred';
        (useQuery as jest.Mock).mockReturnValue({ loading: false, error: { message: errorMessage }, data: null });

        render(<ChargeStationList handleClick={mockHandleClick} />);

        expect(screen.getByText(`Error: ${errorMessage}`)).toBeInTheDocument();
    });

    it('renders charge stations when data is available', async () => {
        const chargeStations = [
            {
                id: 10002,
                name: 'Station 1',
                coordinates: { coordinates: [0, 0], type: 'Point' },
                address: '123 Main St',
                city: 'Sample City',
                state: 'Sample State',
                postalCode: '12345',
                operatingHours: {
                    alwaysOpen: true,
                    openingDays: [{ active: true, close: '18:00', day: 'Monday', open: '08:00' }],
                },
                chargePoints: [{
                    id: 'cp1',
                    isAvailable: 'true',
                    online: true,
                    chargePointConnectors: [{
                        id: 'cpc1',
                        chargePointId: 'cp1',
                        position: 1,
                        connector: 'Type2',
                        maxPower: 22,
                        available: true,
                        enumConnector: { type: 'Type2' },
                        tariff: {
                            id: 'tariff1',
                            priceKwh: 0.3,
                            adminFee: 0.1,
                            connectionFee: 0.2,
                            currencyId: 'USD',
                            pjnFee: 0.05,
                            priceKwhOriginal: 0.3,
                            connectionFeeOriginal: 0.2,
                            discountPercentageKwh: 10,
                            discountPercentageSurcharge: 5,
                            discountPercentageAdminFee: 2,
                            tax: { id: 'tax1', amount: 0.1 },
                        },
                    }],
                }],
                total: { aggregate: { count: 10 } },
                available: { aggregate: { count: 5 } },
                isAvailable: true,
                type: 'Public',
            },
            {
                id: 10003,
                name: 'Station 2',
                coordinates: { coordinates: [0, 0], type: 'Point' },
                address: '456 Main St',
                city: 'Sample City',
                state: 'Sample State',
                postalCode: '12345',
                operatingHours: {
                    alwaysOpen: false,
                    openingDays: [{ active: true, close: '18:00', day: 'Monday', open: '08:00' }],
                },
                chargePoints: [],
                total: { aggregate: { count: 10 } },
                available: { aggregate: { count: 0 } },
                isAvailable: false,
                type: 'Public',
            },
        ];

        (useQuery as jest.Mock).mockReturnValue({
            loading: false,
            error: null,
            data: { publicChargeStation: chargeStations },
        });

        render(<ChargeStationList handleClick={mockHandleClick} />);

        await waitFor(() => {
            expect(screen.getByText('Station 1')).toBeInTheDocument();
            expect(screen.getByText('123 Main St')).toBeInTheDocument();
            expect(screen.getByText('24 Hours')).toBeInTheDocument();
            expect(screen.getByText('1 Available')).toBeInTheDocument();

            expect(screen.getByText('Station 2')).toBeInTheDocument();
            expect(screen.getByText('456 Main St')).toBeInTheDocument();
            expect(screen.getByText('Coming Soon')).toBeInTheDocument();
        });
    });

    it('calls handleClick when a station is clicked', async () => {
        const chargeStations = [
            {
                id: 10003,
                name: 'Station 1',
                coordinates: { coordinates: [0, 0], type: 'Point' },
                address: '123 Main St',
                city: 'Sample City',
                state: 'Sample State',
                postalCode: '12345',
                operatingHours: {
                    alwaysOpen: true,
                    openingDays: [{ active: true, close: '18:00', day: 'Monday', open: '08:00' }],
                },
                chargePoints: [{
                    id: 'cp1',
                    isAvailable: 'true',
                    online: true,
                    chargePointConnectors: [{
                        id: 'cpc1',
                        chargePointId: 'cp1',
                        position: 1,
                        connector: 'Type2',
                        maxPower: 22,
                        available: true,
                        enumConnector: { type: 'Type2' },
                        tariff: {
                            id: 'tariff1',
                            priceKwh: 0.3,
                            adminFee: 0.1,
                            connectionFee: 0.2,
                            currencyId: 'USD',
                            pjnFee: 0.05,
                            priceKwhOriginal: 0.3,
                            connectionFeeOriginal: 0.2,
                            discountPercentageKwh: 10,
                            discountPercentageSurcharge: 5,
                            discountPercentageAdminFee: 2,
                            tax: { id: 'tax1', amount: 0.1 },
                        },
                    }],
                }],
                total: { aggregate: { count: 10 } },
                available: { aggregate: { count: 5 } },
                isAvailable: true,
                type: 'Public',
            },
        ];

        (useQuery as jest.Mock).mockReturnValue({
            loading: false,
            error: null,
            data: { publicChargeStation: chargeStations },
        });

        render(<ChargeStationList handleClick={mockHandleClick} />);

        await waitFor(() => {
            const stationElement = screen.getByText('Station 1');
            stationElement.click();
            expect(mockHandleClick).toHaveBeenCalledWith(10003);
        });
    });
});
