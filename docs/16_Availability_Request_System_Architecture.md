# Availability Request System

## Purpose

The Availability Request System manages all enquiries submitted through the Milan Red Line website.

Its primary objective is to provide a simple, reliable and privacy-conscious communication channel between potential guests and the property owner.

Unlike a booking engine, the system does not confirm reservations or process payments.

Its purpose is solely to collect structured availability requests and deliver them by email.

---

# System Overview

The Availability Request System is designed around three fundamental principles:

- minimise friction for visitors;
- collect sufficient information to evaluate availability;
- remain simple to maintain over the long term.

The system intentionally avoids unnecessary complexity such as user accounts, booking management or online payments.

---



## Functional Scope

The system allows visitors to:

- request availability;
- specify the desired stay period;
- indicate the number of guests;
- optionally provide personal information;
- send additional notes.

The system does not:

- calculate prices;
- verify calendar availability;
- reserve apartments;
- process payments;
- create customer accounts.

These responsibilities remain outside the scope of the platform.

---



## Apartment Awareness

The same contact form serves both apartment-specific pages and generic website pages.

When the request originates from an apartment page, the system automatically associates the enquiry with the selected apartment.

When the request originates from a generic page, the enquiry is treated as a general availability request.

This behaviour is automatic and requires no additional action from the visitor.

---



# Design Principles

The Availability Request System follows a small number of permanent architectural principles.

---



## Simplicity

Visitors should be able to complete the form quickly without unnecessary fields.

Only information required to evaluate availability should be mandatory.

---



## Progressive Disclosure

The form should initially request only essential information.

Optional fields allow visitors to provide additional context without increasing the minimum effort required to submit a request.

---



## Future Scalability

The system should automatically support additional apartments without requiring structural changes.

Apartment-specific behaviour should be generated from apartment metadata rather than hardcoded logic.

Adding a new apartment should require only configuration updates.

---



## Privacy by Design

Only information required to respond to an enquiry should be collected.

The platform intentionally avoids collecting unnecessary personal information.

All communication remains direct between the visitor and the property owner.

---



# User Flow

The system follows a simple and predictable interaction flow.

Visitor

↓

Contact Form

↓

Validation

↓

Availability Request

↓

Email Generation

↓

Owner Notification

↓

Visitor Confirmation

No intermediate booking workflow exists.

The owner remains responsible for evaluating availability and responding directly to the visitor.

---



# Request Types

The system currently supports two request types.

---



## Apartment Request

Triggered when the visitor opens the contact form from an apartment page.

The generated email automatically includes:

- apartment identifier;
- apartment name;
- requested stay period;
- number of guests.

This allows the owner to immediately identify which apartment generated the enquiry.

---



## General Availability Request

Triggered when the visitor accesses the contact page directly or from any non-apartment section of the website.

The request contains:

- requested stay period;
- number of guests;
- visitor information;
- optional message.

No apartment is automatically associated with the enquiry.

# Validation



## Purpose

Validation ensures that every submitted request contains the minimum information required to evaluate availability while maintaining a simple user experience.

The validation process should prevent incomplete requests without introducing unnecessary friction.

---



## Required Fields

The following fields are mandatory.

- Email address
- Requested stay period
- Number of guests

A request cannot be submitted if any required field is missing or invalid.

---



## Optional Fields

The following information may be provided by the visitor but is not required.

- First name
- Last name
- Telephone number
- Free-text message

Optional information should enrich the request without increasing the minimum effort required to contact the property owner.

---



## Email Validation

Email addresses should be validated before the request is processed.

The objective is to reduce obvious typing errors while accepting legitimate email formats.

Validation should remain permissive rather than overly restrictive.

---



## Stay Period

The requested stay period should always include:

- arrival date;
- departure date.

The system validates that both values are present before processing the request.

The Availability Request System intentionally does not verify real apartment availability.

---



## Guest Count

The visitor must specify the number of guests.

The system records this value exactly as submitted.

Availability decisions remain the responsibility of the property owner.

---



# Email Architecture



## Purpose

Every valid request generates a structured email sent directly to the property owner.

Email delivery is the primary responsibility of the system.

No requests should remain stored on the website awaiting manual processing.

---



## Email Structure

Every generated email contains three categories of information.

### Request Information

- apartment (when available);
- arrival date;
- departure date;
- number of guests.

---



### Visitor Information

- email address;
- first name (optional);
- last name (optional);
- telephone number (optional).

---



### Additional Notes

The visitor may include a free-text message describing the request.

The system should preserve the original message without modification.

---



# Email Subject Strategy

Email subjects should allow immediate identification of the request type.

Apartment requests automatically include the apartment name.

Example:

Availability Request — Arco

Generic requests identify themselves as general enquiries.

Example:

General Availability Request

This distinction allows the owner to prioritise replies without opening the email.

---



# Processing Model

The Availability Request System processes requests synchronously.

The workflow is intentionally simple.

Form Submission

↓

Validation

↓

Email Generation

↓

Email Delivery

↓

Confirmation Response

No background processing or asynchronous queue currently exists.

This architecture reduces operational complexity while remaining fully adequate for the expected request volume.

---



# Owner Workflow

After successful delivery the responsibility moves from the platform to the property owner.

The owner evaluates:

- apartment availability;
- suitability for the requested number of guests;
- any additional visitor requirements.

The website intentionally remains outside the booking negotiation process.

# Security



## Purpose

The Availability Request System is designed to minimise security risks while maintaining a simple submission workflow.

The platform intentionally limits the amount of personal information processed and avoids storing sensitive visitor data.

---



## Input Validation

Every submitted field should be validated before processing.

Validation should reject:

- missing required fields;
- invalid email addresses;
- malformed requests.

No email should be generated from invalid input.

---



## Server-Side Processing

Availability requests should always be processed server-side.

Email generation must never rely exclusively on client-side logic.

Sensitive configuration values remain inaccessible to visitors.

---



## Environment Variables

Credentials and API keys must never be hardcoded.

All sensitive configuration should be managed through environment variables.

Typical examples include:

- email provider API keys;
- destination email addresses.

---



## Data Persistence

The current architecture intentionally does not persist availability requests.

The website acts as a communication gateway rather than a reservation management platform.

This approach minimises operational complexity and reduces long-term maintenance.

---



# Error Handling



## Purpose

The system should always provide predictable behaviour regardless of the outcome of the submission.

Visitors should receive clear feedback without exposing internal implementation details.

---



## Validation Errors

Validation failures should clearly identify the information that requires correction.

The visitor should be able to correct the request without re-entering unaffected fields whenever practical.

---



## Delivery Errors

If email delivery fails, the system should:

- prevent silent failures;
- log the error;
- return a generic message to the visitor.

Internal error details should remain visible only for development and operational diagnostics.

---



## Unexpected Errors

Unexpected exceptions should never expose:

- API keys;
- server configuration;
- implementation details;
- stack traces.

The public interface should always fail gracefully.

---



# Future Evolution

The Availability Request System has intentionally been designed to support future improvements without requiring architectural redesign.

Future enhancements should preserve the current principles of simplicity, maintainability and direct communication.

Potential future improvements may include:

- automatic acknowledgement emails;
- spam protection enhancements;
- request persistence;
- administration dashboard;
- CRM integration;
- multilingual email templates.

These improvements should remain optional and should not increase complexity unless they provide clear long-term value.

---



# Permanent Decisions

The following architectural decisions are considered stable.

---



## Availability Requests Are Not Bookings

The website collects enquiries only.

Availability confirmation remains a manual process performed by the property owner.

---



## Email Is the Primary Communication Channel

Every request is delivered directly by email.

No internal messaging system is planned.

---



## One Form, Multiple Contexts

A single form serves both apartment-specific enquiries and generic availability requests.

Context is determined automatically.

---



## Apartment Metadata Drives Behaviour

Apartment-specific behaviour should always derive from apartment metadata.

The application should never rely on hardcoded apartment-specific logic.

This allows the platform to support additional apartments without architectural changes.

---



## Minimal Required Information

Only information required to evaluate availability should be mandatory.

Additional visitor information remains optional.

This principle reduces friction while preserving the quality of incoming enquiries.

---



## Server-Side Email Delivery

Email generation and delivery remain server-side responsibilities.

Client-side code should never communicate directly with the email provider.

# Technical Reference

The following information complements the architectural documentation presented in this document.

Unlike the previous sections, the Technical Reference is intended to support day-to-day development, maintenance and onboarding.

The information contained here may evolve more frequently than the architectural sections above.

---



# Source Files

The Availability Request System is primarily implemented through the following files.

## Contact Page

app/contact/page.tsx

Responsibilities:

- renders the availability request form;
- determines the request context;
- passes apartment information to the form.

---



## Server Action

app/contact/actions.ts

Responsibilities:

- receives form submissions;
- validates input;
- generates email payloads;
- communicates with the email provider;
- returns the submission result.

---



## Contact Form Components

components/contact/

Responsibilities:

- user interface;
- field rendering;
- client-side interaction;
- submission state.

---



## Apartment Data

lib/apartments.ts

Responsibilities:

- apartment metadata;
- apartment identifiers;
- apartment names;
- apartment-specific context.

Apartment behaviour should always derive from this data source.

---



# Runtime Flow

The Availability Request System executes the following workflow.

Visitor

↓

Contact Form

↓

Server Action

↓

Validation

↓

Email Payload

↓

Email Provider

↓

Owner Inbox

↓

Success / Error Response

The workflow is intentionally synchronous.

---



# Main Dependencies

| Dependency | Purpose |

|-----------|---------|

| Next.js Server Actions | Form processing |

| React | User interface |

| TypeScript | Type safety |

| Resend | Email delivery |

---



# Environment Variables

Sensitive configuration should be managed exclusively through environment variables.

Typical configuration includes:

- Resend API Key
- Destination email address
- Sender email address

Environment variable names may evolve without affecting the system architecture.

---



# Common Development Tasks



## Add a New Apartment

Verify:

- apartment metadata;
- apartment identifier;
- apartment display name;
- automatic subject generation.

No Availability Request logic should require modification.

---



## Add a New Form Field

Verify:

- validation;
- email template;
- server action;
- user interface;
- QA checklist.

New mandatory fields should only be introduced when clearly justified.

---



## Change the Email Provider

The email provider may change without affecting:

- user flow;
- validation logic;
- request architecture.

Provider-specific implementation should remain isolated inside the email delivery layer.

---



## Modify Email Templates

Verify:

- apartment context;
- generic requests;
- optional fields;
- localisation;
- formatting.

---



# Change Impact

The following table summarises the expected verification scope.

| If you modify... | Verify... |

|------------------|-----------|

| Contact form | Validation, accessibility, responsive layout |

| Server Action | Validation, email delivery, error handling |

| Apartment metadata | Automatic apartment detection |

| Email template | Subject, formatting, optional fields |

| Email provider | Delivery, authentication, production configuration |

---



# QA Checklist

Every Availability Request modification should verify:

□ Apartment request

□ Generic request

□ Required field validation

□ Optional fields

□ Apartment subject generation

□ Generic subject generation

□ Successful email delivery

□ Error handling

□ Mobile layout

□ Desktop layout

□ Accessibility

□ Build success

□ Production environment variables

---



# Common Pitfalls



## Hardcoded Apartment Logic

Apartment-specific behaviour should never be hardcoded.

Always derive behaviour from apartment metadata.

---



## Mandatory Field Expansion

Avoid increasing the number of required fields unless there is a clear operational benefit.

Keeping the form lightweight is a permanent project objective.

---



## Client-Side Email Delivery

Email delivery must remain server-side.

API keys should never be exposed to the browser.

---



## Silent Failures

Email delivery failures should never appear successful to the visitor.

Unexpected failures must always be logged for operational diagnostics.

---



## Provider-Specific Logic

Avoid spreading provider-specific code throughout the application.

The email delivery implementation should remain isolated so that providers can be replaced with minimal impact.

---



# Warm-up Checklist

Before modifying the Availability Request System:

1. Read the architectural sections of this document.
2. Review the source files listed above.
3. Understand the request lifecycle.
4. Identify which layer will be modified.
5. Review the Change Impact table.
6. Execute the QA checklist before completing the sprint.

