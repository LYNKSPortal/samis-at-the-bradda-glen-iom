# Email Configuration Setup

## Environment Variables

The application uses SMTP to send emails for form submissions. You need to configure the following environment variables:

### Setup Instructions

1. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Edit `.env.local` and add your SMTP credentials:
   ```
   SMTP_HOST=smtp.stackmail.com
   SMTP_PORT=465
   SMTP_USER=your-email@domain.com
   SMTP_PASSWORD=your-secure-password
   ```

3. **Important**: Never commit `.env.local` to version control. It's already in `.gitignore`.

## Email Forms

The application has two forms that send emails:

### 1. Table Booking Form (`/book-table`)
- Endpoint: `/api/book-table`
- Sends booking requests to the configured email address
- Includes: name, email, phone, date, time, guests, special requests

### 2. Event Enquiry Form (`/contact`)
- Endpoint: `/api/contact`
- Sends event enquiries to the configured email address
- Includes: name, email, phone, event type, date, guests, message

## Testing

After configuration, test the forms by:
1. Starting the development server: `npm run dev`
2. Navigate to `/book-table` or `/contact`
3. Fill out and submit the form
4. Check the configured email inbox for the submission

## Security Notes

- SMTP credentials are stored in `.env.local` which is not committed to git
- API routes run server-side only, keeping credentials secure
- Change default passwords immediately after setup
- Use strong, unique passwords for SMTP accounts
