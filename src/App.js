import React from 'react';
import { ColorSwab } from './colorSwab';

export const App = () => {
    return (
        <main>
            <h1>Color Picker</h1>
            <label for="points">Hue:</label>
            <input type="range" id="points" name="points" min="0" max="10"></input>

            <label for="points">Saturation:</label>
            <input type="range" id="points" name="points" min="0" max="10"></input>

            <label for="points">Brightness:</label>
            <input type="range" id="points" name="points" min="0" max="10"></input>

            <ColorSwab/>
        </main>
    );
};