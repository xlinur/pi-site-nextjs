"use client";

import { useState } from "react";
import styles from "./styles.module.scss";
import clsx from "clsx";

const SelectField = ({ options, label, onSelect }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
        onSelect(option);
    };

    const classesLabel = clsx(
        styles.label,
        isOpen || (selectedOption && styles.active),
    );
    const clsxSelectOption = (v) => {
        return clsx(
            styles.selectOption,
            selectedOption && selectedOption.value === v && styles.selected,
        );
    };

    return (
        <div
            className={styles.container}
            data-empty={selectedOption ? "false" : "true"}
            onClick={() => setIsOpen(!isOpen)}
        >
            <div className={classesLabel}>{label}</div>
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
                            className={clsxSelectOption(option.value)}
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
