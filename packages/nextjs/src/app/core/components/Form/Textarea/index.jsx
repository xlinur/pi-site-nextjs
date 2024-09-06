"use client";
import { useState } from "react";
import styles from "./styles.module.scss";

const TextareaField = ({ label, isEmpty, ...props }) => {
    // const [value, setValue] = useState("");
    // const [isEmpty, setIsEmpty] = useState(true);
    //
    // const onChange = (event) => {
    //     const value = event.target.value;
    //     setIsEmpty(value.length === 0);
    //     setValue(value);
    // };

    return (
        <label
            data-empty={isEmpty}
            className={`${styles.container} ${styles["textarea-container"]}`}
        >
            <textarea className={styles.textarea} rows={6} {...props} />
            <div className={styles.label}>{label}</div>
        </label>
    );
};

export default TextareaField;
