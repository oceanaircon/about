"use client";

import { useFormStatus } from "react-dom";

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
