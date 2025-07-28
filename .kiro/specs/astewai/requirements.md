# Astewai - Requirements Document

## Introduction

This document outlines the functional and non-functional requirements for the Astewai digital bookstore. It defines the scope of the platform, user expectations, and the criteria for successful implementation.

---

## A. Functional Requirements

### 1.0 User Authentication & Profile Management (Req-Auth)

**User Story:** As a user, I want to create an account, log in securely, and manage my profile so I can have a personalized experience.

#### Acceptance Criteria

1. WHEN a user provides valid email and password THEN the system SHALL create a new account and automatically create a profile entry
2. WHEN a registered user provides correct credentials THEN the system SHALL authenticate them and grant access to personalized features
3. WHEN a user is authenticated THEN the system SHALL maintain a secure session and provide logout functionality
4. WHEN a user requests password reset THEN the system SHALL send a secure reset link via email
5. WHEN an authenticated user updates their profile THEN the system SHALL save changes to display name and avatar

### 2.0 Book Catalog & Discovery (Req-Catalog)

**User Story:** As a user, I want to easily browse, search, and discover books that interest me.

#### Acceptance Criteria

1. WHEN a user visits the catalog THEN the system SHALL display a grid of all available books with cover, title, and author
2. WHEN a user searches by title or author THEN the system SHALL return matching results
3. WHEN a user applies category or tag filters THEN the system SHALL show filtered results
4. WHEN a user clicks on a book THEN the system SHALL display a detail page with description, price, and purchase options
5. WHEN a book is free THEN the system SHALL display a prominent "Add to Library" button for one-click access

### 3.0 Bundle System (Req-Bundle)

**User Story:** As a user, I want to discover and purchase curated book bundles to get value and explore related content.

#### Acceptance Criteria

1. WHEN a user views bundles THEN the system SHALL display available bundles with title, price, and description
2. WHEN a user views bundle details THEN the system SHALL list all included books and show value savings
3. WHEN a user purchases a bundle THEN the system SHALL add all constituent books to their library upon successful payment

### 4.0 Personal Library & Reading (Req-Library)

**User Story:** As a user, I want a personal library to access my purchased books and track my reading progress.

#### Acceptance Criteria

1. WHEN an authenticated user accesses their library THEN the system SHALL display their personal library page
2. WHEN a user views their library THEN the system SHALL provide tabs/filters for "All," "In Progress," and "Completed" books
3. WHEN a user clicks a book in their library THEN the system SHALL open a clean, distraction-free reading interface
4. WHEN a user reads a book THEN the system SHALL automatically save their reading progress
5. WHEN a user reopens a book THEN the system SHALL take them to their last saved position

### 5.0 Payment & Purchase System (Req-Payment)

**User Story:** As a user, I want to securely purchase paid books and bundles using my credit card.

#### Acceptance Criteria

1. WHEN a user initiates purchase THEN the system SHALL integrate with Stripe for secure, PCI-compliant payment processing
2. WHEN a user wants to buy an item THEN the system SHALL provide "Buy Now" button to initiate checkout
3. WHEN payment is confirmed THEN the system SHALL immediately grant access to purchased items in user's library
4. WHEN a user views purchase history THEN the system SHALL display past purchases and their status
5. WHEN an admin approves manual purchase THEN the system SHALL grant access to the user

### 6.0 Content Management (Req-Admin)

**User Story:** As an admin, I need a dashboard to manage all platform content, users, and transactions.

#### Acceptance Criteria

1. WHEN a user has admin role THEN the system SHALL provide access to dedicated admin dashboard
2. WHEN an admin manages books THEN the system SHALL allow create, update, delete operations with file uploads
3. WHEN an admin manages bundles THEN the system SHALL allow creating bundles by associating existing books
4. WHEN an admin manages blog THEN the system SHALL provide interface to write, publish, and manage blog posts
5. WHEN an admin manages users THEN the system SHALL allow viewing user lists and managing roles
6. WHEN manual purchases are pending THEN the system SHALL allow admins to approve/reject requests

---

## B. Non-Functional Requirements (NFRs)

**NFR-1 Performance:**
- Pages must achieve a Lighthouse Performance score of 90+ on desktop and 80+ on mobile
- Server response time for API calls (e.g., search) should be under 500ms
- The book reader interface must load in under 2 seconds

**NFR-2 Accessibility:**
- The platform must comply with WCAG 2.1 Level AA standards
- All functionality must be navigable via keyboard
- All images and interactive elements must have appropriate ARIA labels and alt text

**NFR-3 Security:**
- User passwords must be securely hashed by Supabase Auth
- Row Level Security (RLS) must be enforced on all sensitive database tables
- All external payment processing must be handled by a PCI-compliant provider (Stripe)
- Environment variables and secrets must be securely managed

**NFR-4 SEO:**
- Public pages (books, bundles, blog posts) must have unique, descriptive meta titles and descriptions
- The system must generate sitemap.xml and robots.txt files
- Structured data (JSON-LD) for books and articles should be implemented

**NFR-5 Legal & Privacy:**
- The platform must display a cookie consent banner
- Users must be able to request an export of their data
- Users must be able to request account deletion
- A clear Privacy Policy and Terms of Service must be accessible to all users