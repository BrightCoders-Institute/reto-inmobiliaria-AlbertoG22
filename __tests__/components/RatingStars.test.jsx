import React from 'react';
import { render, screen } from '@testing-library/react-native';
import { RatingStars } from '../../components/RatingStars';

describe('Pruebas en el <RatingStars />', () => {

    test('Verificar que el componente se renderice correctamente', () => {
        render(<RatingStars data={'5.0'} />);
        
        expect(screen.getByTestId('ratingStars')).toBeTruthy();
    });
});