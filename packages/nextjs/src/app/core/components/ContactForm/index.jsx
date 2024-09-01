"use client";

import Image from "next/image";
import InputField from "@/app/core/components/Form/Input";
import SelectField from "@/app/core/components/Form/Select";
import TextareaField from "@/app/core/components/Form/Textarea";
import Checkbox from "@/app/core/components/Form/Checkbox";
import Button from "@/app/core/components/Button";

import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

import whatsappSVG from "@/app/assets/icons/social/whatsapp.svg";
import chatSVG from "@/app/assets/icons/chat-white.svg";
import phoneSVG from "@/app/assets/icons/phone.svg";
import clockSvg from "@/app/assets/icons/clock.svg";

import styles from "./styles.module.scss";

export const optionsServices = [
    { value: "1", label: "IT recruitment" },
    { value: "2", label: "Executive Search" },
    { value: "3", label: "Business Consulting" },
    { value: "4", label: "Market Research and Analytics" },
    { value: "5", label: "Startup Development" },
];
export const optionsContactPreferences = [
    { value: "whatsapp", label: "Whatsapp" },
    { value: "telegram", label: "Telegram" },
    { value: "E-mail", label: "E-mail" },
    { value: "phone", label: "Phone" },
];

export const ContactForm = () => {
    const { executeRecaptcha } = useGoogleReCaptcha();

    const handleSelect = (option) => {
        console.log("Selected option:", option);
    };

    const handleSubmitCallback = async (event) => {
        event.preventDefault();

        if (!executeRecaptcha) {
            console.log("Not available to proceed recaptcha");
            return;
        }

        const gRecaptchaToken = await executeRecaptcha("inquirySubmit");

        const responseResult = await fetch("/api/recaptcha", {
            method: "post",
            body: JSON.stringify({
                gRecaptchaToken: gRecaptchaToken,
            }),
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json",
            },
        });
        const responseResultJson = await responseResult.json();

        if (responseResultJson.success) {
            console.log("Success to verify via recaptcha");
        } else {
            console.log("Failed to verify via recaptcha");
        }
    };
    return (
        <div className={styles.formWrapper}>
            <section className={styles.contacts}>
                <header>
                    <h3>Start a conversation</h3>
                    <p>
                        Leave a request and we will contact you within an hour.
                    </p>
                </header>

                <div className="icon">
                    <Image src={chatSVG} alt="Icon" width={226} height={226} />
                </div>

                <ul>
                    <li>
                        <p>Or contact us by phone:</p>
                    </li>
                    <li>
                        <Image
                            src={phoneSVG}
                            alt="Icon"
                            width={38}
                            height={38}
                        />
                        <h4>
                            <a href="#">+ 371-56-548-29</a>
                        </h4>
                    </li>
                    <li>
                        <Image
                            src={whatsappSVG}
                            alt="Icon"
                            width={38}
                            height={38}
                        />
                        <h4>
                            <a href="#">+ 371-xx-xxx-xx</a>
                        </h4>
                    </li>

                    <li>
                        <a href="/">
                            <Image
                                src={clockSvg}
                                alt="Clock icon"
                                width={24}
                                height={24}
                            />
                            <div className={styles.workHours}>
                                9:00 - 20:00 UTS +2
                            </div>
                        </a>
                    </li>
                </ul>
            </section>

            <form className={styles.form} onSubmit={handleSubmitCallback}>
                <InputField type="text" label="Name" />
                <InputField type="text" label="Company" />
                <SelectField
                    options={optionsServices}
                    onSelect={handleSelect}
                    label="Select services"
                />
                <SelectField
                    options={optionsContactPreferences}
                    onSelect={handleSelect}
                    label="Contact preferences"
                />
                <InputField type="text" label="E-mail or nickname" />

                <TextareaField label="Comments (optional)" />

                <Checkbox
                    required
                    label="Yes, I have read and agree to the Data Privacy and Legal Notice."
                />

                <Button content="center" size="lg" type="submit">
                    Send
                </Button>
            </form>
        </div>
    );
};

export default ContactForm;
