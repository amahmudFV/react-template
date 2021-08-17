import React from 'react';
import App from './App';
import {render, screen } from '@testing-library/react';

test("Test", () => {
    render(<App />)
    const title = document.querySelector('#title');
    expect(title.innerHTML).toEqual("React Template");
});