# Infrastructure

## Purpose

This document defines the infrastructure architecture of the Milan Red Line platform.

Its purpose is to describe how the project's production services interact, how responsibilities are distributed across providers and which architectural decisions are considered permanent.

The document intentionally focuses on long-term infrastructure design rather than provider-specific configuration steps.

Implementation details that may evolve over time are documented separately in the Technical Reference.

---

# Infrastructure Overview

The Milan Red Line infrastructure follows a modular architecture.

Each external service has a clearly defined responsibility.

This separation improves maintainability, simplifies future migrations and reduces coupling between infrastructure components.

The platform intentionally avoids assigning multiple unrelated responsibilities to the same provider whenever practical.

---

## Core Principles

The infrastructure has been designed around the following permanent principles.

---

### Separation of Responsibilities

Every infrastructure provider should have one primary responsibility.

Examples include:

- domain registration;

- DNS management;

- application hosting;

- transactional email;

- analytics.

This separation allows individual services to evolve independently.

---

### Replaceable Providers

Infrastructure components should be replaceable without requiring architectural redesign.

Changing a provider should affect only the integration layer associated with that service.

Business logic should remain independent from infrastructure vendors whenever possible.

---

### Managed Services First

Whenever practical, the project prefers managed cloud services over self-hosted infrastructure.

Managed services reduce operational complexity and allow development effort to focus on the application rather than infrastructure maintenance.

---

### Infrastructure as Configuration

Infrastructure should be defined through configuration rather than manual operational procedures.

Configuration should remain reproducible and documented.

Provider dashboards should not become the only source of operational knowledge.

---

# Infrastructure Architecture

The platform is organised into independent infrastructure layers.

Each layer has a clearly defined responsibility.

Domain Registration

↓

DNS Management

↓

Application Hosting

↓

Transactional Email

↓

Analytics & Monitoring

This layered architecture minimises dependencies between providers and simplifies future maintenance.

---

# Infrastructure Boundaries

Each provider owns one well-defined area of responsibility.

---

## Domain Registration

Responsible for:

- domain ownership;

- domain renewal;

- registrar-level administration.

The registrar should not manage production DNS unless there is a clear operational reason to do so.

---

## DNS Management

Responsible for:

- DNS zones;

- record management;

- traffic routing;

- DNS-related security.

DNS management remains independent from both the registrar and the hosting platform.

---

## Application Hosting

Responsible for:

- application deployment;

- server-side execution;

- build pipeline;

- production runtime.

Hosting should remain independent from DNS management whenever practical.

---

## Transactional Email

Responsible for:

- outgoing availability requests;

- email authentication;

- delivery reliability.

Transactional email is intentionally separated from website hosting.

---

## Analytics and Monitoring

Responsible for:

- traffic measurement;

- search performance;

- visitor behaviour analysis.

Analytics services should never participate in application logic.



# DNS Architecture

## Purpose

The DNS layer provides the connection between the public domain and the infrastructure services that power the platform.

The DNS architecture has been intentionally designed to remain independent from both the domain registrar and the hosting provider.

This separation improves flexibility and allows infrastructure providers to evolve independently.

---

## Domain Resolution

Visitors access the platform through the public domain.

DNS is responsible for directing incoming requests towards the correct infrastructure services.

The application itself should remain completely independent from DNS implementation details.

---

## Record Management

DNS records should remain organised according to their functional purpose.

Typical categories include:

- website routing;

- subdomains;

- email authentication;

- service verification.

Whenever possible, DNS records should remain self-contained and avoid unnecessary dependencies between services.

---

## Email Authentication

Transactional email infrastructure requires dedicated DNS records.

These records are part of the infrastructure rather than the application.

Typical authentication mechanisms include:

- SPF;

- DKIM;

- MX records for transactional services.

Authentication should always be completed before enabling production email delivery.

---

## Verification Records

Some infrastructure providers require DNS verification before activating services.

Verification records should remain documented while they are operational.

Temporary verification records should be removed when no longer required.

---

# Deployment

## Purpose

Deployment publishes a validated application build into the production environment.

Deployment should remain predictable, reproducible and independent from local development environments.

---

## Deployment Workflow

The platform follows a straightforward deployment pipeline.

Local Development

↓

Source Control

↓

Production Build

↓

Hosting Platform

↓

Production Website

Each deployment should produce a fully operational version of the application.

---

## Production Environment

Production configuration should remain isolated from development.

Configuration differences should be managed through environment variables rather than code changes.

This allows identical application code to operate correctly across multiple environments.

---

## Rollback Strategy

Whenever practical, deployments should allow rapid rollback to the previous stable version.

Rollback procedures should prioritise service continuity over introducing new functionality.

---

## Build Validation

Every production deployment should verify:

- successful build;

- type checking;

- application startup;

- environment configuration;

- production routing.

Deployment should never bypass the normal quality assurance process.

---

# Email Infrastructure

## Purpose

Transactional email forms part of the platform infrastructure rather than the application itself.

The application generates requests.

The email infrastructure is responsible for authentication, delivery and reliability.

---

## Responsibilities

The email layer is responsible for:

- authenticated email delivery;

- sender identity;

- delivery reliability;

- infrastructure-level error reporting.

Application logic should remain independent from provider-specific implementation.

---

## Sender Identity

Every production email should originate from a verified sender identity.

Verified domains improve delivery reliability and reduce the likelihood of messages being rejected or classified as spam.

Sender verification is considered part of infrastructure configuration rather than application development.

---

## Delivery Reliability

Reliable delivery depends upon the correct interaction between:

- DNS configuration;

- sender authentication;

- provider configuration;

- application integration.

No single layer should be considered sufficient on its own.

Successful delivery requires all infrastructure layers to operate correctly together.



# Security

## Purpose

Infrastructure security is achieved primarily through architectural separation rather than application complexity.

Each infrastructure layer should expose only the functionality required for its own responsibility.

Security should remain a property of the overall infrastructure rather than being delegated to individual services.

---

## Provider Isolation

Infrastructure providers should remain isolated whenever practical.

Each provider should receive only the permissions required for its own responsibilities.

Compromise or replacement of one provider should have minimal impact on the remaining infrastructure.

---

## Secrets Management

Sensitive information should never be stored inside the application source code.

Examples include:

- API keys;

- authentication tokens;

- service credentials.

Secrets should be managed exclusively through secure environment configuration.

---

## DNS Integrity

DNS configuration should remain simple, well documented and regularly reviewed.

Unused records should be removed.

Temporary verification records should not remain indefinitely once their purpose has been fulfilled.

---

## Email Authentication

Transactional email should always use authenticated domains.

DNS authentication is considered part of the infrastructure.

The application should assume that authenticated delivery has already been configured correctly.

---

## Operational Simplicity

Operational simplicity is considered a security objective.

Reducing unnecessary infrastructure complexity reduces the probability of configuration mistakes.

---

# Future Evolution

The infrastructure has intentionally been designed to support future growth without requiring architectural redesign.

Future improvements should strengthen existing infrastructure layers rather than introducing unnecessary additional services.

Potential future improvements include:

- staging environment;

- automated backups where applicable;

- uptime monitoring;

- infrastructure observability;

- additional transactional email capabilities;

- automated deployment verification.

Future services should integrate into the existing architecture without changing its overall principles.

---

# Permanent Decisions

The following infrastructure decisions are considered stable.

---

## Separation of Registrar and DNS

Domain registration and DNS management remain independent responsibilities.

This separation improves flexibility and simplifies future infrastructure migrations.

---

## Independent Hosting

Application hosting remains independent from DNS management.

Changing the hosting provider should require minimal changes outside the hosting layer.

---

## Dedicated Transactional Email

Transactional email is treated as an independent infrastructure service.

Website hosting should not be responsible for email delivery.

---

## Managed Cloud Services

The project prefers managed cloud infrastructure whenever practical.

This reduces operational maintenance and allows development effort to focus on the application.

---

## Configuration over Manual Operations

Infrastructure should be reproducible through documented configuration.

Knowledge should not exist exclusively inside provider dashboards.

---

## Replaceable Infrastructure Components

Infrastructure providers are implementation choices rather than architectural dependencies.

Whenever practical, providers should be replaceable without modifying business logic.

---

## Environment-Based Configuration

Infrastructure configuration belongs in environment variables.

Application behaviour should remain independent from production credentials.

---

## Infrastructure Documentation

Permanent infrastructure knowledge belongs in this document.

Provider-specific operational procedures belong in the Technical Reference.

Temporary migration notes belong only in Sprint Handovers.



# Technical Reference

The following information complements the architectural documentation presented in this document.

Unlike the previous sections, the Technical Reference is intended to support day-to-day development, infrastructure maintenance and onboarding.

The information contained here may evolve more frequently than the architectural sections above.

---

# Production Services

The production infrastructure currently consists of the following service categories.

## Domain Registrar

Responsibilities:

- domain ownership;

- domain renewal;

- registrar administration.

The registrar should remain independent from DNS management.

---

## DNS Provider

Responsibilities:

- DNS zones;

- DNS records;

- domain routing;

- infrastructure verification records.

DNS configuration represents the authoritative routing layer of the platform.

---

## Application Hosting

Responsibilities:

- application deployment;

- production runtime;

- server-side execution;

- build management.

Hosting should remain independent from domain registration.

---

## Transactional Email

Responsibilities:

- availability request delivery;

- sender authentication;

- delivery reliability.

Transactional email infrastructure should remain isolated from application logic.

---

## Analytics Services

Responsibilities:

- website analytics;

- search performance monitoring;

- visitor behaviour analysis.

Analytics platforms should remain observational only.

---

# Current Provider Mapping

The current production infrastructure uses the following providers.

| Responsibility | Current Provider |

|----------------|------------------|

| Domain Registration | Aruba |

| DNS Management | Cloudflare |

| Application Hosting | Vercel |

| Transactional Email | Resend |

| Web Analytics | Google Analytics 4 |

| Search Performance | Google Search Console |

| Behaviour Analytics | Microsoft Clarity |

Changing providers should not require architectural redesign.

---

# Environment Variables

Infrastructure secrets should be managed through environment variables.

Typical configuration includes:

- email provider API keys;

- sender email address;

- recipient email address;

- analytics identifiers;

- application configuration.

Variable names may evolve without affecting the architecture.

---

# Deployment Flow

The production deployment pipeline follows the sequence below.

Developer

↓

Git Repository

↓

Hosting Platform

↓

Production Build

↓

Production Deployment

↓

Production Verification

Only validated builds should reach production.

---

# Operational Procedures

Typical operational activities include:

- updating DNS records;

- verifying email authentication;

- rotating API keys;

- updating environment variables;

- deploying new application versions;

- verifying production services.

Operational procedures should preserve the architectural principles defined in this document.

---

# Common Development Tasks

## Configure a New Domain

Verify:

- registrar configuration;

- DNS delegation;

- production routing;

- SSL availability.

---

## Add a New Infrastructure Service

Verify:

- architectural responsibility;

- provider isolation;

- configuration documentation;

- operational impact.

Every new service should have one clearly defined responsibility.

---

## Change a Provider

Verify:

- provider boundaries;

- environment variables;

- DNS dependencies;

- production deployment;

- operational documentation.

Provider replacement should not modify application architecture.

---

## Configure Transactional Email

Verify:

- authenticated sender domain;

- DNS authentication records;

- provider verification;

- successful production delivery.

---

# Change Impact

The following table summarises the expected verification scope.

| If you modify... | Verify... |

|------------------|-----------|

| DNS configuration | Routing, SSL, email authentication |

| Hosting platform | Deployment, runtime, environment variables |

| Email provider | Delivery, authentication, production configuration |

| Environment variables | Production functionality, secret management |

| Analytics services | Data collection only |

---

# QA Checklist

Every infrastructure modification should verify:

□ Website accessibility

□ DNS resolution

□ HTTPS availability

□ Production deployment

□ Environment variables

□ Transactional email delivery

□ Email authentication

□ Analytics collection

□ Search Console connectivity

□ Production build

□ Rollback availability

□ Documentation update

---

# Common Pitfalls

## Mixing Responsibilities

Avoid assigning multiple unrelated responsibilities to the same infrastructure provider.

Clear boundaries improve maintainability.

---

## Manual Configuration Without Documentation

Provider dashboards should never become the only source of operational knowledge.

Permanent configuration should always be documented.

---

## Hardcoded Secrets

Infrastructure credentials must never appear inside the application source code.

Environment variables remain the only supported approach.

---

## Tight Provider Coupling

Application logic should never depend directly on provider-specific behaviour.

Infrastructure providers are implementation choices, not architectural dependencies.

---

## Leaving Temporary Configuration Behind

Temporary verification records, migration notes and transitional configuration should be removed once they are no longer required.

Only permanent infrastructure knowledge belongs in this document.

---

# Warm-up Checklist

Before modifying the infrastructure:

1. Read the architectural sections of this document.

2. Review the current provider responsibilities.

3. Identify which infrastructure layer will be affected.

4. Review the Change Impact table.

5. Verify production configuration.

6. Execute the QA checklist before completing the sprint.



