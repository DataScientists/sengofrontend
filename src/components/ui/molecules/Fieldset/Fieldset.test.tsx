import '@testing-library/jest-dom';

import { render } from '@test/setupTests';
import { screen } from '@testing-library/react';
import { createRef } from 'react';

import { Fieldset } from '../Fieldset';

describe('<Fieldset />', () => {
  it('renders legend, helper text, children, and error text', () => {
    render(
      <Fieldset legend="My Legend" helperText="Some helpful info" data-testid="my-fieldset">
        <div data-testid="child">Child Content</div>
      </Fieldset>
    );

    // Legend
    expect(screen.getByText('My Legend')).toBeInTheDocument();

    // Helper text
    expect(screen.getByText('Some helpful info')).toBeInTheDocument();

    // Child content
    expect(screen.getByTestId('child')).toHaveTextContent('Child Content');

    // Fieldset container exists
    expect(screen.getByTestId('my-fieldset')).toBeInTheDocument();
  });
  it('renders error text when its invalid', () => {
    render(
      <Fieldset
        legend="My Legend"
        errorText="This field is required"
        data-testid="my-fieldset"
        invalid
      >
        <div data-testid="child">Child Content</div>
      </Fieldset>
    );

    // Error text
    expect(screen.getByText(/This field is required/i)).toBeInTheDocument();

    // Fieldset container exists
    expect(screen.getByTestId('my-fieldset')).toBeInTheDocument();
  });

  it('forwards ref to the underlying fieldset element', () => {
    const ref = createRef<HTMLFieldSetElement>();

    render(
      <Fieldset legend="Ref Test" ref={ref}>
        <span>Content</span>
      </Fieldset>
    );

    // After render, ref.current should point to a <fieldset> element
    expect(ref.current).toBeInstanceOf(HTMLFieldSetElement);
  });
});
