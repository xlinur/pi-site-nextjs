import { NextResponse } from "next/server";
import { sendEmail } from "../../../lib/sendEmail";

export async function POST(req, _) {
    try {
        /**
         * typedef {Object} FormData
         * @property {string} email
         * @property {string} name
         * @property {string} company
         * @property {string} services
         * @property {string} contactPreference
         * @property {string} comment
         */
        const jsonPostData = await req.json();
        console.log({ jsonPostData: jsonPostData });

        await sendEmail({
            to: jsonPostData.email,
            templateName: "ContactSubmission",
            dynamicTemplateData: {
                name: jsonPostData.name,
                email: jsonPostData.email,
                message: jsonPostData.comment,
            },
        });

        return NextResponse.json({
            success: true,
        });
    } catch (error) {
        console.log(error);

        return NextResponse.json({
            success: false,
        });
    }
}
