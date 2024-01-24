import React from "react";
import { redirectBack } from "../lib/actions";

const Success = () => {
  return (
    <header className="text-center">
      <div className="container d-flex align-items-center flex-column py-4">
        <h1>Message has been sent successfully.</h1>
        <br />
        <br />
        <form action={redirectBack}>
          <input
            className="btn btn-primary btn-xl"
            id="submitButton"
            type="submit"
            value="OK"
          ></input>
        </form>
      </div>
    </header>
  );
};

export default Success;
