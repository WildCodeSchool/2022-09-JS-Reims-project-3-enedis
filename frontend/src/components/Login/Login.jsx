import React, { useState, useEffect, useReducer } from "react";

import PropTypes from "prop-types";

import Modal from "../../UI/Modal";

import Card from "../../UI/Card";
import Button from "../../UI/Button";
import classes from "./Login.module.css";
import { emailReducer, passwordReducer } from "./loginHelpers";

export default function Login({ setIsLogged }) {
  const [token, setToken] = useState(null);
  const [error, setError] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: null,
  });

  useEffect(() => {
    const identifier = setTimeout(() => {
      setFormIsValid(emailState.isValid && passwordState.isValid);
    }, 500);

    return () => {
      clearTimeout(identifier);
    };
  }, [emailState.isValid, passwordState.isValid]);

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: "USER_INPUT", val: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: "USER_INPUT", val: event.target.value });
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: "INPUT_BLUR" });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: "INPUT_BLUR" });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    fetch("http://localhost:5000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: emailState.value,
        password: passwordState.value,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.token) {
          setToken(data.token);
          setIsLogged(true);
        }
      });
    if (!token) {
      setTimeout(() => {
        setError(true);
      }, 500);
    }
  };

  const hideErrorMessage = () => {
    setError(false);
  };

  return (
    <Card classNames={classes.login}>
      {error && (
        <Modal onClose={hideErrorMessage}>
          <h1>Erreur</h1>
          <p>
            Une erreur est survenue. Votre email ou mot de passe n'est pas
            correct. Veuillez r??essayer plus tard
          </p>
          <button
            className="buttonlogin"
            type="button"
            onClick={hideErrorMessage}
          >
            Annuler
          </button>
        </Modal>
      )}
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordState.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Mot de passe</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Valider
          </Button>
        </div>
      </form>
    </Card>
  );
}

Login.propTypes = {
  setIsLogged: PropTypes.func.isRequired,
};
