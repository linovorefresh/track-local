
const style = `
    background: #eee;
    padding: 20px;
    border-radius: 20px;
`


export const emailTemplate = (email, content, replyTo, subject) => {
    return {
        Source: process.env.EMAIL_FROM,
        Destination: {
            ToAddresses: [ email] //req.body.email if not in test mode for sandbox mode
        },
        Message: {
            Body: {
                Html: {
                    Charset: "UTF-8",
                    Data: `
                            <html>
                                <div style="${style}">
                                    <h1> WELCOME TO AWS SES DEMO RUN</h1>
                                    ${content}
                                    <p>&copy; ${new Date().getFullYear()}</p>
                                </div>
                            </html>
                        `
                }
            },
            Subject: {
                Charset: "UTF-8",
                Data: "Thank You for SES demo"
            }
        }
    }
}