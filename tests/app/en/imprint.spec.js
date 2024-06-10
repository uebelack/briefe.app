import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Page from '../../../app/en/imprint/page';

describe('<Imprint/>', () => {
  it('should render', async () => {
    const { container } = render(
      <Page />,
    );
    expect(container).toMatchSnapshot();
  });
});
