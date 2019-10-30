import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';


import NavBar from '../NavBar';

it('renders without crashing', () => {
    const testLink = document.createElement('a');
    const navbar = rtl.render(
      <NavBar></NavBar>, testLink
    );
});

it('the navbarshould have signup button', () => {
    rtl.render(<NavBar><a>Sign Up</a></NavBar>);
})

it('signup button should have text "signup"', () => {

    const { queryByText } = rtl.render(<NavBar></NavBar>)
    expect(queryByText("Sign Up")).toBeTruthy(); 

})



