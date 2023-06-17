import React from 'react';
import { render, screen } from '@testing-library/react-native';
import { HomeScreen } from '../../screens/HomeScreen';

describe('Pruebas en el <HomeScreen />', () => {
    
    test('Verificar que el componente se renderice correctamente', () => {
        render(<HomeScreen />);
        
        expect(screen.getByTestId('homeScreen')).toBeTruthy();
    });
});