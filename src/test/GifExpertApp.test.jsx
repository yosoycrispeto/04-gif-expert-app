import { render, screen } from "@testing-library/react";
import { GifExpertApp } from "../GifExpertApp";

describe('Pruebas en GifExpertApp', () => {

    test('debe de mostrar el titulo de la app', () => {
        render( <GifExpertApp />);
        const input = screen.getAllByText('GifExpertApp');

        expect( input ).toBeTruthy();
    });
});