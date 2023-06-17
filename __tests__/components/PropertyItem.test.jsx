import React from 'react';
import { render, screen } from '@testing-library/react-native';
import { PropertyItem } from '../../components/PropertyItem';

describe('Pruebas en el <PropertyItem />', () => {

    const item = {
        "id": 1,
        "name": "Casa Caleta",
        "address": "Puerto Vallarta, Jal.",
        "numOfRooms": "6",
        "numOfBaths": "6.5",
        "surface": "1000 m2",
        "rentalCost": "34,399",
        "qualification": "5.0",
        "like": "false",
        "image": "https://a0.muscache.com/im/pictures/56dcaa0e-d256-4c37-a71e-ea9a4f4a7e95.jpg?im_w=1200"
    };

    test('Verificar que el componente se renderice correctamente', () => {
        render(<PropertyItem property={item} />);
        
        expect(screen.getByTestId('propertyItem')).toBeTruthy();
    });
});