import React, { useRef, useState } from "react";

import classes from "./Checkout.module.css";

const isEmpty = (value) => value.trim() === "";
const isFiveChars = (value) => value.trim().length === 5;

function Checkout(props) {
  const [formsInputValidity, setFormsInputValidity] = useState({
    name: true,
    street: true,
    postalCode: true,
    city: true,
  });

  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalCodeInputRef = useRef();
  const cityInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostalCode = postalCodeInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredPostalCodeIsValid = isFiveChars(enteredPostalCode);
    const enteredCityIsValid = !isEmpty(enteredCity);

    setFormsInputValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      postalCode: enteredPostalCodeIsValid,
      city: enteredCityIsValid,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredStreetIsValid &&
      enteredPostalCodeIsValid &&
      enteredCityIsValid;

    if (!formIsValid) {
      return;
    }

    // Submit Cart Data
  };

  const nameControlClasses = `${classes.control} ${
    formsInputValidity.name ? "" : classes.invalid
  }`;
  const streetControlClasses = `${classes.control} ${
    formsInputValidity.street ? "" : classes.invalid
  }`;
  const postalCodeControlClasses = `${classes.control} ${
    formsInputValidity.postalCode ? "" : classes.invalid
  }`;
  const cityControlClasses = `${classes.control} ${
    formsInputValidity.city ? "" : classes.invalid
  }`;

  return (
    <form onSubmit={confirmHandler}>
      <div className={nameControlClasses}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef}></input>
        {!formsInputValidity.name && <p>Please enter valid name!</p>}
      </div>

      <div className={streetControlClasses}>
        <label htmlFor="name">Street</label>
        <input type="text" id="street" ref={streetInputRef}></input>
        {!formsInputValidity.street && <p>Please enter valid street!</p>}
      </div>

      <div className={postalCodeControlClasses}>
        <label htmlFor="name">Postal Code</label>
        <input type="text" id="postal" ref={postalCodeInputRef}></input>
        {!formsInputValidity.postalCode && (
          <p>Please enter valid postal code!</p>
        )}
      </div>

      <div className={cityControlClasses}>
        <label htmlFor="name">City</label>
        <input type="text" id="city" ref={cityInputRef}></input>
        {!formsInputValidity.city && <p>Please enter valid city!</p>}
      </div>

      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
}

export default Checkout;
