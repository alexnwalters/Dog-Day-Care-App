import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Details from './Details';


it('render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
            <Details />
        </BrowserRouter>,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
});