import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Services from './Services';

it('render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
            <Services />
        </BrowserRouter>,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
});