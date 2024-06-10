import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Page from '../../../app/en/page';

jest.mock('next/image', () => function Image() {
  return <div />;
});
jest.mock('../../../components/Teaser', () => function Teaser() {
  return <div />;
});

describe('<Home/>', () => {
  it('should render', async () => {
    const { container } = render(
      <Page />,
    );
    expect(container).toMatchSnapshot();
  });
});
