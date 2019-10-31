import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Apply from './apply';

it('render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
            <Apply />
        </BrowserRouter>,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
});