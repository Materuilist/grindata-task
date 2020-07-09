import React, { useState, useEffect } from "react";

import { concatClasses } from "../../../utils/concatClasses";
import styles from "./styles.module.scss";

interface IProps {
  value: any;
  valueChangedHandler: any;
  pattern?: string;
  validate?: any;
  rusNaming: string;
  type: string;
  required: boolean;
  name?:string;
}

export function Input({
  validate,
  value,
  valueChangedHandler,
  pattern,
  rusNaming,
  type,
  required,
  name,
}: IProps) {
  const [rawValue, setRawValue] = useState(value);
  const [isValid, setIsValid] = useState(true);

  useEffect(()=>{
    setRawValue(value)
  }, [value]);

  function inputHandler() {
    valueChangedHandler(rawValue);
  }

  return (
    <div className="form-group">
      <label className="mb-0 pb-1 mr-2">{rusNaming}</label>
      <input
        className={concatClasses(
          styles.Input,
          `form-control${isValid ? "" : " " + styles.InValid}`
        )}
        required={required}
        pattern={pattern}
        value={rawValue}
        onChange={(event) => setRawValue(event.target.value)}
        onBlur={inputHandler}
        type={type}
        name={name}
      ></input>
    </div>
  );
}
