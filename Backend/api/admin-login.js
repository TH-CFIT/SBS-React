
import { sql } from '@vercel/postgres';
import bcrypt from 'bcrypt';

const ALLOWED_ORIGINS = [
    'http://localhost:5173',
    'https://viruzjoke.github.io',
    'https://thcfit.vercel.app',
    'https://thcfit-admin.vercel.app',
    'https://sbs-react.vercel.app',
    'https://sbs-react-admin.vercel.app'
];

export default async function handler(req, res) {
    const origin = req.headers.origin;
    if (ALLOWED_ORIGINS.includes(origin)) {
        res.setHeader('Access-Control-Allow-Origin', origin);
    }

    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({ message: 'Username and password are required.' });
        }

        const { rows } = await sql`SELECT * FROM dbs_users WHERE username = ${username};`;

        if (rows.length === 0) {
            return res.status(401).json({ message: 'Invalid username or password.' });
        }

        const user = rows[0];
        const passwordMatch = await bcrypt.compare(password, user.password_hash);

        if (!passwordMatch) {
            return res.status(401).json({ message: 'Invalid username or password.' });
        }

        res.status(200).json({ message: 'Login successful.' });

    } catch (error) {
        console.error('Login API error:', error);
        res.status(500).json({ message: 'An internal server error occurred.' });
    }
}

