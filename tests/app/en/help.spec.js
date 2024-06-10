import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Page from '../../../app/en/help/page';

jest.mock('next/image', () => function Image() {
  return <div />;
});

describe('<Help/>', () => {
  it('should render', async () => {
    const { container } = render(
      <Page />,
    );
    expect(container).toMatchSnapshot();
  });
});
