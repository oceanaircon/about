"use client";

import React from "react";
import { createMessenger } from "@/app/lib/actions";
import useServerAction from "./useServerActions";

export default function Form() {
  const [runAction, isRunning] = useServerAction(createMessenger);

  return (
    <form action={runAction} id="contactForm">
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
      <button
        className="btn btn-primary btn-xl"
        id="submitButton"
        type="submit"
        name="submit"
      >
        {isRunning ? "Sending..." : "Send"}
      </button>
    </form>
  );
}
