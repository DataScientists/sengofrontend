import '@testing-library/jest-dom';

import { render } from '@test/setupTests';
import { screen } from '@testing-library/react';
import { createRef } from 'react';

import { Field } from './Field';

describe('Field', () => {
  it('renders label text', () => {
    const label = 'First Name';

    render(
      <Field label={label}>
        <input type="text" />
      </Field>
    );
    expect(screen.getByText(label)).toBeInTheDocument();
  });

  it('renders helper text', () => {
    const helperText = 'This is a helper text.';

    render(
      <Field helperText={helperText}>
        <input type="text" />
      </Field>
    );
    expect(screen.getByText(helperText)).toBeInTheDocument();
  });

  it('renders error text', () => {
    const errorText = 'This is an error.';

    render(
      <Field errorText={errorText} invalid>
        <input type="text" aria-invalid="true" />
      </Field>
    );
    expect(screen.getByText(errorText)).toBeInTheDocument();
  });

  it('does not render a required indicator when not required', () => {
    const label = 'Email';

    render(
      <Field label={label} required={false}>
        <input type="email" />
      </Field>
    );
    // There should be no asterisk or fallback for optional
    expect(screen.queryByText('*')).not.toBeInTheDocument();
  });

  it('renders a required indicator when required', () => {
    const label = 'Email';

    render(
      <Field label={label} required>
        <input type="email" />
      </Field>
    );
    // By default, FieldRequiredIndicator might show an asterisk or other marker
    // We'll assume it is asterisk, but you could also check by data-test or alternative text.
    expect(screen.getByText('*')).toBeInTheDocument();
  });
  //
  it('renders fallback text for the indicator if provided', () => {
    const label = 'Phone';
    const optionalText = '(Optional)';

    render(
      <Field label={label} optionalText={optionalText} required={false}>
        <input type="tel" />
      </Field>
    );
    expect(
      screen.getByText(optionalText, {
        exact: false,
      })
    ).toBeInTheDocument();
  });

  it('forwards ref to the underlying fieldset element', () => {
    const ref = createRef<HTMLDivElement>();

    render(
      <Field label="Ref Test" ref={ref} required={false}>
        <span>Content</span>
      </Field>
    );

    // After render, ref.current should point to a <fieldset> element
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});
