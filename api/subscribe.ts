import type { VercelRequest, VercelResponse } from '@vercel/node';

// List of free/personal email domains to reject
const FREE_EMAIL_DOMAINS = [
  'gmail.com',
  'yahoo.com',
  'yahoo.co.in',
  'yahoo.co.uk',
  'hotmail.com',
  'outlook.com',
  'live.com',
  'msn.com',
  'aol.com',
  'icloud.com',
  'me.com',
  'mac.com',
  'protonmail.com',
  'proton.me',
  'zoho.com',
  'mail.com',
  'gmx.com',
  'gmx.net',
  'yandex.com',
  'yandex.ru',
  'rediffmail.com',
  'inbox.com',
  'fastmail.com',
  'tutanota.com',
  'hey.com',
];

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function isCorporateEmail(email: string): boolean {
  const domain = email.toLowerCase().split('@')[1];
  return !FREE_EMAIL_DOMAINS.includes(domain);
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ 
      success: false, 
      error: 'Email is required' 
    });
  }

  if (!isValidEmail(email)) {
    return res.status(400).json({ 
      success: false, 
      error: 'Please enter a valid email address' 
    });
  }

  if (!isCorporateEmail(email)) {
    return res.status(400).json({ 
      success: false, 
      error: 'Please use your corporate email address. Personal email addresses (Gmail, Yahoo, etc.) are not accepted.' 
    });
  }

  // Send confirmation email via Resend
  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Prateek Karn <newsletter@prateekkarn.com>',
        to: [email],
        subject: 'Welcome to Strategic Intelligence Newsletter',
        html: `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
          </head>
          <body style="font-family: 'Georgia', serif; background-color: #F9F8F6; margin: 0; padding: 40px 20px;">
            <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #E8E5DF;">
              <div style="padding: 40px;">
                <h1 style="font-family: 'Playfair Display', Georgia, serif; font-size: 28px; color: #111111; margin: 0 0 24px 0; font-weight: 400;">
                  Welcome to Strategic Intelligence
                </h1>
                <p style="font-size: 16px; line-height: 1.7; color: #333333; margin: 0 0 20px 0;">
                  Thank you for subscribing to the Strategic Intelligence Newsletter.
                </p>
                <p style="font-size: 16px; line-height: 1.7; color: #333333; margin: 0 0 20px 0;">
                  You'll receive curated frameworks and lessons learned from building AI and MarTech systems — insights designed to help you architect your competitive advantage.
                </p>
                <p style="font-size: 16px; line-height: 1.7; color: #333333; margin: 0 0 30px 0;">
                  Expect thoughtful analysis, not noise.
                </p>
                <div style="border-top: 1px solid #E8E5DF; padding-top: 30px; margin-top: 30px;">
                  <p style="font-size: 14px; color: #8b7355; margin: 0;">
                    Prateek Karn<br>
                    <span style="color: #666666;">Growth Architect & Digital Marketing Strategist</span>
                  </p>
                </div>
              </div>
              <div style="background-color: #1a1a1a; padding: 20px 40px; text-align: center;">
                <p style="font-size: 12px; color: #888888; margin: 0;">
                  © 2025 Prateek Karn. All rights reserved.<br>
                  <a href="https://prateekkarn.com" style="color: #8b7355; text-decoration: none;">prateekkarn.com</a>
                </p>
              </div>
            </div>
          </body>
          </html>
        `,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Resend API error:', errorData);
      return res.status(500).json({ 
        success: false, 
        error: 'Failed to send confirmation email. Please try again later.' 
      });
    }

    // Also send notification to Prateek
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Newsletter System <newsletter@prateekkarn.com>',
        to: ['prateek.karn@prateekkarn.com'],
        subject: `New Newsletter Subscriber: ${email}`,
        html: `
          <div style="font-family: Arial, sans-serif; padding: 20px;">
            <h2>New Newsletter Subscription</h2>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Time:</strong> ${new Date().toISOString()}</p>
          </div>
        `,
      }),
    });

    return res.status(200).json({ 
      success: true, 
      message: 'Thank you for subscribing! Please check your email for confirmation.' 
    });

  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ 
      success: false, 
      error: 'An unexpected error occurred. Please try again later.' 
    });
  }
}
