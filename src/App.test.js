import React from 'react';
import App from './App';
import {render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

test("Title", () => {
    render(<App />)
    const title = screen.getByText("React Template")
    expect(title).toBeInTheDocument();
});