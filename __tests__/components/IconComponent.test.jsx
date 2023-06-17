import React from 'react';
import { render, screen } from '@testing-library/react-native';
import { IconComponent } from '../../components/IconComponent';

describe('Pruebas en el <IconComponent />', () => {

    test('Verificar que el componente se renderice correctamente', () => {
        render(<IconComponent />);
        
        expect(screen.getByTestId('iconComponent')).toBeTruthy();
    });
});