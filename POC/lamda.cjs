const https = require('https');

// Assuming you're using environment variables for Supabase URL and Key
const SUPABASE_URL = "https://enjxjdwbnxqnqjdolxpp.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVuanhqZHdibnhxbnFqZG9seHBwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI1MzcwNDksImV4cCI6MjAxODExMzA0OX0.VVc7MPvvOKSmViP0GZgrePz1Ae_WrqBInkrWSgC26RI";

const lambdaHandler = async (event, context) => {
    try {
        const emailData = JSON.parse(event.Records[0].Sns.Message);
        const messageId = emailData.mail.messageId;
        const eventType = emailData.eventType;

        let columnToUpdate = '';
        switch (eventType) {
            case 'Send':
                columnToUpdate = 'send_datetime';
                break;
            case 'Open':
                columnToUpdate = 'open_datetime';
                break;
            case 'Click':
                columnToUpdate = 'click_datetime';
                break;
            // Add more cases as needed
        }

        columnToUpdate = 'status';

        if (columnToUpdate && messageId) {
            const data = JSON.stringify({ [columnToUpdate]: "clicked" });
            const options = {
                hostname: new URL(SUPABASE_URL).hostname,
                path: `/rest/v1/email_logs?id=eq.${messageId}`,
                method: 'PUT',
                headers: {
                    'apikey': SUPABASE_KEY,
                    'Authorization': `Bearer ${SUPABASE_KEY}`,
                    'Content-Type': 'application/json',
                }
            };

            console.log("options", options);

            const req = https.request(options, res => {
                let responseBody = '';

                res.on('data', d => {
                    responseBody += d;
                });

                res.on('end', () => {
                    console.log('Status Code:', res.statusCode);
                    if (res.statusCode >= 200 && res.statusCode < 300) {
                        console.log('Email processed successfully:', responseBody);
                    } else {
                        console.error('Failed to process email:', responseBody);
                    }
                });
            });

            req.on('error', error => {
                console.error('Error processing the request:', error);
            });

            req.write(data);
            req.end();
        }
    } catch (e) {
        console.error('Error processing the request:', e);
        return {
            statusCode: 500,
            body: JSON.stringify('An error occurred while processing the request')
        };
    }
};

event = {
    "Records": [
        {
            "Sns": {
                "Message": "{\"mail\":{\"messageId\":\"\"},\"eventType\":\"Send\"}"
            }
        }
    ]
}

lambdaHandler(event, null)


