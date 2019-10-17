import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import MapContainer from './map';

it('render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
            <MapContainer />
        </BrowserRouter>,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
});