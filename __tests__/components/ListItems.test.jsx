import React from 'react';
import { render, screen } from '@testing-library/react-native';
import { ListItems } from '../../components/ListItems';

describe('Pruebas en el <ListItems />', () => {

    test('Verificar que el componente se renderice correctamente', () => {
        render(<ListItems />);
        
        expect(screen.getByTestId('listItems')).toBeTruthy();
    });
});