"use client";

import { useState } from "react";
import styles from "./styles.module.scss";

const SelectField = ({ options, label, onSelect }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
        onSelect(option);
    };

    return (
        <div
            className={styles.container}
            data-empty={selectedOption ? "false" : "true"}
            onClick={() => setIsOpen(!isOpen)}
        >
            <div
                className={`${styles.label} ${isOpen || selectedOption ? styles.active : ""}`}
            >
                {label}
            </div>
            <input
                className={styles.input}
                readOnly
                value={selectedOption ? selectedOption.label : ""}
            />
            {isOpen && (
                <ul className={styles.selectOptions}>
                    {options.map((option) => (
                        <li
                            key={option.value}
                            className={`${styles.selectOption} ${
                                selectedOption &&
                                selectedOption.value === option.value
                                    ? styles.selected
                                    : ""
                            }`}
                            onClick={() => handleOptionClick(option)}
                        >
                            {option.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SelectField;
