import React from "react";
import { createMessenger } from "@/app/lib/actions";

export default function Form() {
  return (
    <form action={createMessenger} id="contactForm">
      {/*<!-- Name input-->*/}
      <div className="form-floating mb-3">
        <input className="form-control" id="name" type="text" name="name" />
        <label htmlFor="name">Full name</label>
      </div>
      {/*<!-- Email address input-->*/}
      <div className="form-floating mb-3">
        <input className="form-control" id="email" type="email" name="email" />
        <label htmlFor="email">Email address</label>
      </div>

      {/*<!-- Message input-->*/}
      <div className="form-floating mb-3">
        <textarea
          className="form-control"
          id="message"
          name="message"
        ></textarea>
        <label htmlFor="message">Message</label>
      </div>
      {/*<!-- Submit message-->*/}

      {/*<!-- Submit Button-->*/}
      <input
        className="btn btn-primary btn-xl"
        id="submitButton"
        type="submit"
        name="submit"
        value="Send"
      ></input>
    </form>
  );
}
