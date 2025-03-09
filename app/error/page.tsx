"use client";

import { redirectBack } from "../lib/actions";

export default function Error() {
  return (
    <div className="container d-flex align-items-center flex-column py-4">
      <h2 className="text-center">
        Email is not valid or there is a Resend error.
      </h2>
      <button className="btn btn-primary btn-xl" onClick={() => redirectBack()}>
        Try again
      </button>
    </div>
  );
}
