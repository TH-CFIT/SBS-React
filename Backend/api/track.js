
const DHL_API_ENDPOINT = process.env.DHL_API_ENDPOINT || 'https://express.api.dhl.com/mydhlapi/tracking';
const DHL_USERNAME = process.env.DHL_USERNAME;
const DHL_PASSWORD = process.env.DHL_PASSWORD;

export default async function handler(req, res) {
    const ALLOWED_ORIGINS = [
        'http://localhost:5173',
        'https://viruzjoke.github.io',
        'https://thcfit.vercel.app',
        'https://thcfit-admin.vercel.app',
        'https://sbs-react.vercel.app',
        'https://sbs-react-admin.vercel.app'
    ];

const origin = req.headers.origin;
    if (ALLOWED_ORIGINS.includes(origin)) {
        res.setHeader('Access-Control-Allow-Origin', origin);
    }

    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Control-Max-Age', '86400');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    const { trackingNumber } = req.query;

    if (!trackingNumber) {
        return res.status(400).json({ error: 'Bad Request', message: 'Tracking number is required.' });
    }

    if (!DHL_USERNAME || !DHL_PASSWORD) {
        console.error('Environment variables for DHL_USERNAME or DHL_PASSWORD are not set.');
        return res.status(500).json({ title: 'Internal Server Error', detail: 'API credentials are not configured on the server.' });
    }

    const base64Credentials = Buffer.from(`${DHL_USERNAME}:${DHL_PASSWORD}`).toString('base64');

    try {
        const dhlApiUrl = `${DHL_API_ENDPOINT}?shipmentTrackingNumber=${encodeURIComponent(trackingNumber)}&trackingView=all-checkpoints`;

        const apiResponse = await fetch(dhlApiUrl, {
            method: 'GET',
            headers: {
                'Authorization': `Basic ${base64Credentials}`,
                'Accept': 'application/json'
            }
        });
        
        const responseBody = await apiResponse.text();

        if (!apiResponse.ok) {
            console.error('DHL API Error:', apiResponse.status, responseBody);
            let errorJson;
            try {
                errorJson = JSON.parse(responseBody);
            } catch (e) {
                errorJson = { 
                    title: `Error ${apiResponse.status}`, 
                    detail: responseBody || 'An error occurred while fetching from DHL API.' 
                };
            }
            return res.status(apiResponse.status).json(errorJson);
        }

        const data = JSON.parse(responseBody);

        res.status(200).json(data);

    } catch (error) {
        console.error('Serverless Function Error:', error);
        res.status(500).json({ title: 'Internal Server Error', detail: 'An unexpected error occurred on the server.' });
    }
}


