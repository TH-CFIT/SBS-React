import type { VercelRequest, VercelResponse } from '@vercel/node';

const DHL_CLIENT_ID = process.env.DHL_API_KEY;
const DHL_CLIENT_SECRET = process.env.DHL_API_SECRET;
const DHL_BASE_URL = process.env.DHL_API_URL || 'https://express.api.dhl.com/mydhlapi/test';

// Helper to get OAuth token
async function getAccessToken() {
    const auth = Buffer.from(`${DHL_CLIENT_ID}:${DHL_CLIENT_SECRET}`).toString('base64');
    // Note: Some legacy DHL endpoints use Basic Auth on every request, 
    // but the modern MyDHL API often uses it directly.
    return auth;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    try {
        const payload = req.body;
        const auth = await getAccessToken();

        const response = await fetch(`${DHL_BASE_URL}/shipments`, {
            method: 'POST',
            headers: {
                'Authorization': `Basic ${auth}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(payload)
        });

        const data = await response.json();

        if (!response.ok) {
            console.error('DHL API Error:', data);
            return res.status(response.status).json(data);
        }

        return res.status(200).json(data);
    } catch (error: any) {
        console.error('Vercel Function Error:', error);
        return res.status(500).json({ message: error.message || 'Internal Server Error' });
    }
}
