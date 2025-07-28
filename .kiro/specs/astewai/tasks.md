# Astewai - Implementation Plan

This document breaks down the development of the Astewai platform into logical phases and epics. Each task includes a checkbox for tracking and references the corresponding requirement IDs.

---

## Phase 1: Foundation & Core Features (Weeks 1-4)

This phase focuses on setting up the project, implementing core user functionality, and establishing the content backbone.

### Epic 1.1: Project Setup & CI/CD

- [ ] 1.1.1 Initialize Next.js 14 project with pnpm, TypeScript, Tailwind, and Shadcn/ui
  - Set up project structure with proper TypeScript configuration
  - Configure Tailwind CSS and integrate Shadcn/ui components
  - _Requirements: NFR-1_

- [ ] 1.1.2 Configure Supabase project, database schema (all tables), and environment variables
  - Create Supabase project and configure database connection
  - Implement all database tables with proper relationships and constraints
  - Set up environment variables for secure configuration
  - _Requirements: N/A_

- [ ] 1.1.3 Implement database helper function and triggers for `updated_at`
  - Create the `handle_updated_at()` function
  - Apply triggers to all relevant tables for automatic timestamp updates
  - _Requirements: N/A_

- [ ] 1.1.4 Set up GitHub Actions for CI (linting, type checking, unit tests on PR)
  - Configure automated testing pipeline
  - Set up code quality checks and type validation
  - _Requirements: N/A_

### Epic 1.2: Authentication & User Profiles

- [ ] 1.2.1 Implement Supabase email/password authentication
  - Configure Supabase Auth with email/password provider
  - Set up authentication client and server utilities
  - _Requirements: 1.1, 1.2_

- [ ] 1.2.2 Build `RegisterForm` and `LoginForm` components with validation
  - Create registration form with email/password validation
  - Build login form with proper error handling
  - Implement form validation using Zod or similar
  - _Requirements: 1.1, 1.2_

- [ ] 1.2.3 Create `AuthProvider` and protected routes/role guards
  - Build authentication context provider
  - Implement route protection for authenticated users
  - Create role-based access control for admin features
  - _Requirements: 1.3, 6.1_

- [ ] 1.2.4 Implement profile creation on registration and build a profile editing page
  - Auto-create profile entry when user registers
  - Build profile editing interface for display name and avatar
  - _Requirements: 1.5_

- [ ] 1.2.5 Implement RLS policies for `profiles`, `user_library`, and `purchases`
  - Configure Row Level Security policies for user data protection
  - Test RLS policies to ensure proper access control
  - _Requirements: NFR-3_

- [ ] 1.2.6 Write unit and integration tests for the authentication flow
  - Test registration, login, and logout functionality
  - Verify profile creation and updates work correctly
  - _Requirements: N/A_

### Epic 1.3: Book Catalog & Discovery

- [ ] 1.3.1 Build repository functions (Server Actions or direct queries) for book CRUD
  - Create server actions for book data operations
  - Implement book listing, search, and filtering logic
  - _Requirements: 2.1_

- [ ] 1.3.2 Create the `BookGrid` and `BookCard` components to display books
  - Build responsive book grid layout
  - Design book card component with cover, title, and author
  - _Requirements: 2.1_

- [ ] 1.3.3 Implement the book detail page (`[slug]`)
  - Create dynamic book detail page with full description
  - Display price and purchase options
  - _Requirements: 2.3_

- [ ] 1.3.4 Build the `SearchBar` and filtering logic (client-side first)
  - Implement search functionality for title and author
  - Add category and tag filtering capabilities
  - _Requirements: 2.2_

- [ ] 1.3.5 Implement "Add to Library" functionality for free books
  - Create one-click add to library for free books
  - Update user library when free book is added
  - _Requirements: 2.4_

---

## Phase 2: E-commerce & Content Expansion (Weeks 5-8)

This phase introduces monetization, expands content types, and builds the user's personal library.

### Epic 2.1: Stripe Payment Integration

- [ ] 2.1.1 Set up Stripe account and configure API keys securely
  - Create Stripe account and obtain API keys
  - Configure secure environment variable management
  - _Requirements: 5.1_

- [ ] 2.1.2 Create an Edge Function or Server Action to generate Stripe Payment Intents
  - Build server-side payment intent creation
  - Handle payment amount calculation and validation
  - _Requirements: 5.1_

- [ ] 2.1.3 Build the frontend checkout flow using Stripe Elements
  - Implement Stripe Elements for secure card input
  - Create checkout UI with payment confirmation
  - _Requirements: 5.1, 5.2_

- [ ] 2.1.4 Create a Stripe webhook handler to confirm payments and update the `purchases` table
  - Set up webhook endpoint for payment confirmations
  - Update purchase records when payments succeed
  - _Requirements: 5.3_

- [ ] 2.1.5 Implement logic to grant library access upon successful purchase
  - Automatically add purchased items to user library
  - Update user library status after successful payment
  - _Requirements: 5.3_

### Epic 2.2: Bundle System

- [ ] 2.2.1 Implement database logic for bundles and the `bundle_books` join table
  - Create bundle management server actions
  - Implement bundle-book relationship queries
  - _Requirements: 3.1_

- [ ] 2.2.2 Create `BundleGrid`, `BundleCard`, and `BundleDetail` components
  - Build bundle listing and card components
  - Create bundle detail page showing included books and savings
  - _Requirements: 3.1, 3.2_

- [ ] 2.2.3 Integrate bundle purchases into the Stripe checkout flow
  - Extend payment system to handle bundle purchases
  - Add all bundle books to library upon purchase
  - _Requirements: 3.3_

### Epic 2.3: Personal Library & Reader

- [ ] 2.3.1 Build the `Library` page with tabs/filters for book status
  - Create personal library page layout
  - Implement tabs for "All," "In Progress," and "Completed" books
  - _Requirements: 4.1, 4.2_

- [ ] 2.3.2 Create the basic `BookReader` interface
  - Build clean, distraction-free reading interface
  - Implement basic book content display
  - _Requirements: 4.3_

- [ ] 2.3.3 Implement logic to save and retrieve reading progress (`last_read_position`)
  - Auto-save reading progress as user reads
  - Resume reading from last saved position
  - _Requirements: 4.4, 4.5_

- [ ] 2.3.4 Build the user's `Purchase History` page
  - Create purchase history display
  - Show purchase status and transaction details
  - _Requirements: 5.4_

---

## Phase 3: Admin & Production Readiness (Weeks 9-12)

This phase focuses on building the admin tools and preparing the application for launch.

### Epic 3.1: Admin Dashboard & Content Management

- [ ] 3.1.1 Build the main admin dashboard layout, protected by the `RoleGuard`
  - Create admin dashboard with role-based access
  - Implement navigation for admin features
  - _Requirements: 6.1_

- [ ] 3.1.2 Create the admin book management interface (CRUD) with file uploads to Supabase Storage
  - Build book creation, editing, and deletion interface
  - Implement file upload for book covers and content
  - _Requirements: 6.2_

- [ ] 3.1.3 Create the admin bundle management interface (CRUD)
  - Build bundle creation and management interface
  - Allow associating existing books with bundles
  - _Requirements: 6.3_

- [ ] 3.1.4 Build the admin blog management interface (CRUD)
  - Create blog post creation and editing interface
  - Implement publish/unpublish functionality
  - _Requirements: 6.4_

- [ ] 3.1.5 Build the user management interface (view users, change roles)
  - Create user listing and management interface
  - Allow role changes and user administration
  - _Requirements: 6.5_

### Epic 3.2: Advanced Features & Polish

- [ ] 3.2.1 Implement the manual purchase approval system for admins
  - Create interface for viewing pending manual purchases
  - Allow admins to approve/reject manual purchase requests
  - _Requirements: 5.5, 6.6_

- [ ] 3.2.2 Set up Resend and create transactional email templates (welcome, receipt, password reset)
  - Configure email service integration
  - Create email templates for user communications
  - _Requirements: 1.4_

- [ ] 3.2.3 Implement SEO essentials: `sitemap.xml`, `robots.txt`, and dynamic meta tags
  - Generate sitemap for public pages
  - Create robots.txt and implement meta tag management
  - _Requirements: NFR-4_

- [ ] 3.2.4 Build static pages: Privacy Policy, Terms of Service
  - Create legal pages with proper content
  - Ensure accessibility and proper navigation
  - _Requirements: NFR-5_

- [ ] 3.2.5 Implement cookie consent banner and data export/deletion logic
  - Add cookie consent functionality
  - Implement user data export and deletion features
  - _Requirements: NFR-5_

### Epic 3.3: Testing, Optimization & Deployment

- [ ] 3.3.1 Write E2E tests with Playwright for critical user flows (register, buy, read)
  - Test complete user registration and authentication flow
  - Test book purchase and library access flow
  - Test reading functionality and progress tracking
  - _Requirements: All_

- [ ] 3.3.2 Conduct a full accessibility audit (axe-core) and fix issues
  - Run accessibility testing on all pages
  - Fix WCAG compliance issues
  - _Requirements: NFR-2_

- [ ] 3.3.3 Perform performance profiling and optimization based on Lighthouse reports
  - Run Lighthouse audits on all pages
  - Optimize performance to meet score requirements
  - _Requirements: NFR-1_

- [ ] 3.3.4 Set up production environment on Vercel and Supabase
  - Configure production deployment environment
  - Set up production database and storage

- [ ] 3.3.5 Configure production deployment pipeline in GitHub Actions
  - Set up automated deployment to production
  - Configure environment-specific builds

- [ ] 3.3.6 Final pre-launch review and go-live
  - Conduct final testing and review
  - Deploy to production and monitor launch