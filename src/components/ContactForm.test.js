import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ContactForm from './ContactForm';

//initial test
test('renders with no errors', () => {
  render(<ContactForm />);
});

test('Contact form add new contact to the list', () => {
  const { getByLabelText, getByText, getByTestId } = render(<ContactForm />);

  const firstName = getByLabelText(/First Name*/i);
  const lastName = getByLabelText(/Last Name*/i);
  const email = getByLabelText(/Email*/i);

  fireEvent.change(firstName, {
    target: { name: 'firstName', value: 'Edd' },
  });
  fireEvent.change(lastName, {
    target: { name: 'lastName', value: 'Burke' },
  });
  fireEvent.change(email, {
    target: { name: 'email', value: 'bluebill1049@hotmail.com' },
  });

  const submitButton = getByTestId('submit');

  fireEvent.click(submitButton);
});

test('testing form submit', () => {
  const { getByLabelText } = render(<ContactForm />);
  const firstNameInput = getByLabelText(/First Name*/i);
  const lastNameInput = getByLabelText(/Last Name*/i);
  const emailInput = getByLabelText(/email/i);

  expect(firstNameInput).toBeVisible();
  expect(lastNameInput).toBeVisible();
  expect(emailInput).toBeVisible();
});
