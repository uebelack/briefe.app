import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import messages from '../../i18n';
import Home from '../../pages/index';

const useRouter = jest.spyOn(require('next/router'), 'useRouter');

useRouter.mockImplementation(() => ({
  pathname: '/',
}));

describe('<Home/>', () => {
  it('should render', async () => {
    const { container } = render(
      <Home />,
    );
    expect(container).toMatchSnapshot();
  });
});
