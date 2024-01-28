"use client";

import React from "react";
import { useFormStatus, useFormState } from "react-dom";
import { createMessenger } from "@/app/lib/actions";

const initialState = {
  message: "",
};

export function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      className="btn btn-primary btn-xl"
      id="submitButton"
      type="submit"
      name="submit"
      aria-disabled={pending}
    >
      Send
    </button>
  );
}

export default function Form() {
  const [state, formAction] = useFormState(createMessenger, initialState);

  return (
    <form action={formAction} id="contactForm">
      {/*<!-- Name input-->*/}
      <div className="form-floating mb-3">
        <input
          className="form-control"
          id="name"
          type="text"
          name="name"
          required
        />
        <label htmlFor="name">Full name</label>
      </div>
      {/*<!-- Email address input-->*/}
      <div className="form-floating mb-3">
        <input
          className="form-control"
          id="email"
          type="email"
          name="email"
          required
        />
        <label htmlFor="email">Email address</label>
      </div>

      {/*<!-- Message input-->*/}
      <div className="form-floating mb-3">
        <textarea
          className="form-control"
          id="message"
          name="message"
          required
        ></textarea>
        <label htmlFor="message">Message</label>
      </div>
      {/*<!-- Submit message-->*/}
      {/*<!-- Submit Button-->*/}
      <SubmitButton></SubmitButton>
      <p aria-live="polite" className="sr-only" role="status">
        {state?.message}
      </p>
    </form>
  );
}
