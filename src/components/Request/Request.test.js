import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Request from './request';

it('render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
            <Request />
        </BrowserRouter>,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
});