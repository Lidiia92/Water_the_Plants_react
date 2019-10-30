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