# Admin Dashboard System Documentation

## Overview
Your secure admin system provides complete CRUD (Create, Read, Update, Delete) operations for managing contact submissions and newsletter subscriptions.

## Features

### 1. **Secure Admin Authentication**
- Email/password login at `/admin/login`
- Automatic admin role verification via `admin_users` table
- Protected routes with middleware-based authorization
- Automatic session refresh via cookies

### 2. **Contact Submissions Management**
- **Read**: View all contact submissions with detailed information
- **Search**: Filter by name, email, or message content
- **Filter**: Filter by service interest category
- **Delete**: Individual or bulk delete submissions
- **Export**: View full submission details in expandable interface

### 3. **Newsletter Subscribers Management**
- **Read**: View all newsletter subscribers
- **Search**: Find subscribers by email
- **Copy**: Bulk copy all filtered emails to clipboard
- **Export**: Download subscribers as CSV file
- **Delete**: Individual or bulk delete subscriptions

### 4. **Admin Dashboard Stats**
- Total contacts submitted
- Total newsletter subscribers
- Visual metrics with color-coded indicators
- Real-time data refresh

## Database Schema

### contact_submissions
\`\`\`sql
- id (UUID, primary key)
- first_name (text)
- last_name (text)
- email (text)
- phone (text)
- service_interest (text)
- message (text)
- created_at (timestamp)
- updated_at (timestamp)
\`\`\`

### newsletter_subscriptions
\`\`\`sql
- id (UUID, primary key)
- email (text, unique)
- created_at (timestamp)
\`\`\`

### admin_users
\`\`\`sql
- id (UUID, foreign key to auth.users)
- created_at (timestamp)
\`\`\`

## Security

### Row Level Security (RLS) Policies
- Contact submissions: Only admins can view/update/delete
- Newsletter subscriptions: Only admins can view/delete, public can insert
- Admin users: Only verified admins can access

### Authentication
- Supabase Auth with email/password
- Admin status verified on every request
- Middleware protects all `/admin/*` routes
- Session tokens stored in HTTP-only cookies

## Creating Admin Users

1. Create a new user in Supabase Auth (email + password)
2. Insert the user ID into the `admin_users` table:
   \`\`\`sql
   INSERT INTO admin_users (id) 
   VALUES ('user-uuid-here')
   \`\`\`

## API Routes

### Contact Submissions
- `PUT /api/admin/contact/[id]` - Update submission
- `DELETE /api/admin/contact/[id]` - Delete submission

### Newsletter Subscriptions
- `DELETE /api/admin/newsletter/[id]` - Delete subscription

## Singleton Pattern Implementation

The Supabase client uses a singleton pattern to prevent multiple GoTrueClient instances:
- Browser client cached at module level
- Single instance shared across all components
- Prevents auth state conflicts and memory leaks

## Troubleshooting

### Login Issues
- Verify email and password are correct
- Ensure user exists in `admin_users` table
- Check Supabase Auth settings

### Data Not Loading
- Verify RLS policies are enabled
- Check admin user authorization in `admin_users` table
- Ensure middleware is properly configured

### Multiple Client Warnings
- Should not appear with singleton pattern
- Clear browser cache if issues persist
- Verify `/lib/supabase/client.ts` is using singleton

## Next Steps
- Add edit functionality with modals
- Implement email notifications on new submissions
- Add analytics and reporting
- Create admin user management interface
