-- Migration: Add payment_status column to bookings
-- Run this against your database (psql or supabase CLI)

ALTER TABLE bookings
ADD COLUMN IF NOT EXISTS payment_status VARCHAR(16) NOT NULL DEFAULT 'pending';

-- Optional: add a check constraint to restrict allowed values
ALTER TABLE bookings
ADD CONSTRAINT IF NOT EXISTS bookings_payment_status_check CHECK (payment_status IN ('pending', 'paid', 'failed'));
