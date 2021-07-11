import nodemailer, { Transporter } from 'nodemailer';
export const sendWelcomeMail = async (transporter: Transporter, to: string) => {
    try {
        let response = await transporter.sendMail({
            from: "Catalog",
            to,
            subject: "Welcome to catalog",
            text: "Welcome to catalog"
        })
        return response;
    } catch (e) {
        return { error: e }
    }
}
export const sendTestMail = async (transporter: Transporter, to: string) => {
    try {
        let response = await transporter.sendMail({
            from: "Catalog",
            to,
            subject: "test from catalog",
            text: "test from catalog"
        })
        console.log(response);
        return response;
    } catch (e) {
        return { error: e }
    }
}
const mailerConnect = async () => {
    return nodemailer.createTransport({
        service: "gmail", // true for 465, false for other ports
        auth: {
            user: "catalogappservice@gmail.com", // generated ethereal user
            pass: "catalogservice", // generated ethereal password
        },
    });
}
export default mailerConnect();