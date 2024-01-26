"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="container d-flex align-items-center flex-column py-4">
      <h2 className="text-center">
        Name must be 2 or more characters long, must contain only alphabets, the
        email must be a valid email address, and message must be 12 or more
        characters long.
      </h2>
      <button className="btn btn-primary btn-xl" onClick={() => reset()}>
        Try again
      </button>
    </div>
  );
}
