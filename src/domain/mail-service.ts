import nodemailer, { TransportOptions } from 'nodemailer';
import { config } from 'dotenv';

config();

class MailService {
    transporter: nodemailer.Transporter;

    constructor() {
        const transportOptions = {
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            secure: false,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD,
            },
        } as TransportOptions;

        this.transporter = nodemailer.createTransport(transportOptions);
    }
    async sendActivationMail(to: string, link: string) {
        await this.transporter.sendMail({
            from: process.env.SMTP_USER,
            to,
            subject: 'Активация аккаунта на' + process.env.API_URL,
            text: '',
            html: `
                <div>
                    <h1>Для активации перейдите по ссылке</h1>
                    <a href"${link}" target="_blank">${link}</a>
                </div>
            `,
        });
    }
}

export const mailService = new MailService();
