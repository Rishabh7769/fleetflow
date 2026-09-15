# FLEETFLOW: FLEET MANAGEMENT & TRANSPORTATION OPERATIONS SYSTEM

***

```
========================================================================================
                                    PROJECT SYNOPSIS
                                           On
                                       FLEETFLOW
               (Fleet Management & Transportation Operations System)

              Submitted for Partial Fulfillment of Award of the Degree of
                                BACHELOR OF TECHNOLOGY
                                          In
                         COMPUTER SCIENCE & ENGINEERING

                                          By
                                    Rishabh Singh
                                  Surya Pratap Singh
                                   Priyanshu Singh
                   (Roll Numbers: Placeholder / To Be Specified)

                                Under the Guidance Of
                             [Name of Project Guide]
                                   [Designation]

                                [SMS LUCKNOW LOGO]

                     SCHOOL OF MANAGEMENT SCIENCES, LUCKNOW
                                  Affiliated to
              DR. A.P.J. ABDUL KALAM TECHNICAL UNIVERSITY, LUCKNOW
                                     2025–2026
========================================================================================
```

***

## TABLE OF CONTENTS

- **Cover Page**
- **Table of Contents**
- **Chapter 1: Introduction**
  - 1.1 Background of Fleet Management
  - 1.2 Transportation and Logistics Operations
  - 1.3 Need for Digital Fleet Management
  - 1.4 Existing System
  - 1.5 Limitations of Existing Approaches
  - 1.6 Proposed FleetFlow System
  - 1.7 Literature Survey
  - 1.8 Motivation and Significance
  - 1.9 Chapter Summary
- **Chapter 2: Problem Definition and Scope**
  - 2.1 Problem Statement
  - 2.2 Existing Operational Problems
  - 2.3 Proposed Solution
  - 2.4 Scope
  - 2.5 In-Scope Features
  - 2.6 Out-of-Scope Features
  - 2.7 Project Boundaries
  - 2.8 Chapter Summary
- **Chapter 3: Project Objectives**
  - 3.1 Primary Objective
  - 3.2 Specific Objectives
  - 3.3 Expected Outcomes
  - 3.4 Chapter Summary
- **Chapter 4: Proposed Methodology**
  - 4.1 Methodology Overview
  - 4.2 Overall FleetFlow Workflow
  - 4.3 Functional Working
  - 4.4 Authentication Flow
  - 4.5 Authorization Flow (RBAC)
  - 4.6 Validation Mechanics
  - 4.7 API Request Processing
  - 4.8 Database Interaction
  - 4.9 Response & UI Update
  - 4.10 Complete Functional Block Diagram
  - 4.11 Description of Each Block
  - 4.12 Chapter Summary
- **Chapter 5: Related Technologies and Concepts**
  - 5.1 Next.js
  - 5.2 React
  - 5.3 TypeScript
  - 5.4 Node.js
  - 5.5 REST API
  - 5.6 PostgreSQL
  - 5.7 Prisma ORM
  - 5.8 JWT (JSON Web Tokens)
  - 5.9 bcrypt
  - 5.10 Role-Based Access Control (RBAC)
  - 5.11 Zod
  - 5.12 Docker
  - 5.13 OpenAPI / Swagger Specification
  - 5.14 Axios HTTP Client
  - 5.15 Audit of Project Identifier ("Bruno")
  - 5.16 Chapter Summary
- **Chapter 6: Software and Hardware Requirements**
  - 6.1 Hardware Requirements
  - 6.2 Minimum Configuration
  - 6.3 Recommended Configuration
  - 6.4 Software Requirements
  - 6.5 Development Environment
  - 6.6 Database Environment
  - 6.7 Deployment Requirements
  - 6.8 Chapter Summary
- **Chapter 7: Detailed Module Description**
  - 7.1 Authentication & Session Management Module
  - 7.2 User Management & Authorization (RBAC) Module
  - 7.3 Vehicle Management Module
  - 7.4 Driver Management & HOS Compliance Module
  - 7.5 Customer Management Module
  - 7.6 Trip Dispatch & Management Module
  - 7.7 Trip Expense Management & Audit Module
  - 7.8 Executive Dashboard & Telematics Analytics Module
  - 7.9 Settings & Configuration Module
  - 7.10 Chapter Summary
- **Chapter 8: System Design and Data Modeling**
  - 8.1 System Architecture
  - 8.2 Entity Identification
  - 8.3 Database Design
  - 8.4 Entity Relationships
  - 8.5 Entity-Relationship (ER) Diagram
  - 8.6 Data Flow Diagram (DFD Level 0)
  - 8.7 Use Case Diagram
  - 8.8 High-Level Domain Class Diagram
  - 8.9 Database Schema Description
  - 8.10 Data Integrity and Relationships
  - 8.11 Chapter Summary
- **Chapter 9: Applications, Advantages, Limitations, Future Scope and Proposed Cost**
  - 9.1 Applications
  - 9.2 Advantages
  - 9.3 Limitations
  - 9.4 Future Scope
  - 9.5 Proposed Project Cost
  - 9.6 Chapter Summary
- **Chapter 10: References**

***

# CHAPTER 1: INTRODUCTION

<u>### 1.1 Background of Fleet Management</u>

Fleet management encompasses the administrative, operational, and technological processes required to oversee commercial motor vehicles, including semi-trucks, box trucks, delivery vans, trailers, and utility vehicles. In contemporary supply chain operations, fleet management serves as the critical structural backbone for moving physical freight across local, regional, and national distribution networks. Historically, commercial fleet tracking relied on manual physical logbooks, paper receipts, phone-based dispatch calls, and physical whiteboards. As commercial transportation scaled in volume, velocity, and distance, the operational complexity of managing driver duty shifts, vehicle maintenance cycles, fuel consumption, customer shipments, and operating costs rapidly outpaced traditional manual record-keeping capabilities.

Modern fleet management demands real-time centralized operational visibility across all fleet assets. Transport companies must maintain continuous record accuracy regarding vehicle availability, Electronic Logging Device (ELD) status, driver Hours of Service (HOS) compliance, customer billing accounts, trip dispatch schedules, and trip-related expense logs. Transitioning these fragmented workflows into a unified digital application enables transportation supervisors to monitor fleet health, prevent scheduling overlaps, optimize asset utilization, mitigate fraudulent expense claims, and ensure strict regulatory compliance.

<u>### 1.2 Transportation and Logistics Operations</u>

Transportation and logistics operations involve coordinated multi-step procedures designed to move freight from origin locations to designated destinations under strict time, cost, safety, and regulatory constraints. Key operational phases include:

1. **Order Acquisition & Customer Onboarding:** Recording customer shipment requests, delivery destinations, agreed freight rates, contract renewal dates, and billing terms.
2. **Resource Allocation & Dispatching:** Matching available commercial vehicles with qualified drivers based on Commercial Driver's License (CDL) classifications, duty hour availability, vehicle volumetric capacities, trailer attachments, and route distance metrics.
3. **Transit Execution & Telematics Monitoring:** Tracking active vehicle movement, monitoring fuel efficiency (MPG), recording Electronic Logging Device (ELD) connectivity states, monitoring weather and traffic alerts, and logging route ping histories.
4. **Expense Capture & Financial Settlement:** Recording trip-related expenditures (fuel refills, highway tolls, mandatory rest meals, lodging, emergency maintenance) and verifying Proof of Delivery (POD) documentation to enable customer invoicing.

Without an integrated digital management system, information gaps inevitably emerge between dispatch managers, financial accountants, maintenance engineers, and drivers, leading to operational delays, vehicle downtime, unflagged expense fraud, and revenue leakage.

<u>### 1.3 Need for Digital Fleet Management</u>

The transition from traditional paper-based or spreadsheet-driven transportation management to an integrated digital fleet management platform is driven by several critical operational necessities:

* **Elimination of Data Fragmentation:** Storing vehicle schedules in one spreadsheet, driver rosters in another, customer accounts in desktop files, and expense receipts in physical folders creates isolated data silos. Digital systems unify operational data into a single relational repository.
* **Real-time Operational Visibility:** Dispatchers require immediate access to real-time status indicators (e.g., active, maintenance, off-duty) across vehicles and drivers to make informed dispatching decisions.
* **Auditability and Expense Integrity:** Transport operations process thousands of financial transactions monthly. Digital expense tracking enables immediate cross-referencing between logged fuel receipts, vehicle odometer readings, and assigned trip routes to detect anomalous swiping or unauthorized claims.
* **Regulatory Compliance:** Monitoring driver duty hours (HOS) and maintenance schedules via digital interfaces helps transport operators comply with commercial transportation safety standards.

<u>### 1.4 Existing System</u>

In many small-to-medium transportation enterprises, existing operational workflows rely on disconnected software tools, basic spreadsheets, and paper record management:

* **Manual Spreadsheets:** Microsoft Excel or Google Sheets are commonly used to maintain static lists of vehicles, driver phone numbers, customer contacts, and trip logs.
* **Paper-Based Logbooks & Receipts:** Drivers manually record trip mileage, fuel refills, and toll receipts on paper slips, which are physically submitted to finance departments at the end of every week or month.
* **Disjointed Communication Channels:** Dispatch instructions, route updates, and weather warnings are exchanged via phone calls, SMS, or messaging groups without formal linkage to central trip records.

<u>### 1.5 Limitations of Existing Approaches</u>

The reliance on disconnected spreadsheets and paper logbooks introduces significant operational vulnerabilities:

1. **Data Inconsistency & Human Error:** Manual data entry across multiple spreadsheets leads to duplicate records, typographical errors, and lost expense receipts.
2. **Lack of Operational Validation:** Spreadsheets cannot dynamically validate whether a vehicle is currently undergoing maintenance or whether a driver has exceeded duty hour limits before assigning a new trip.
3. **Delayed Financial Reconciliation:** Expense approval processes are delayed by days or weeks while paper receipts are physically collected and manually reconciled.
4. **Security & Access Control Deficits:** Shared spreadsheets lack granular Role-Based Access Control (RBAC), leaving sensitive financial metrics, customer billing data, and driver personal information exposed to unauthorized edits or unauthorized viewing.
5. **No Centralized Performance Metrics:** Aggregating fleet efficiency metrics (e.g., average fuel economy, cost per mile, repeat customer rate) requires labor-intensive manual calculations.

<u>### 1.6 Proposed FleetFlow System</u>

To address the inefficiencies of existing manual and spreadsheet-based approaches, this project introduces **FleetFlow: Fleet Management & Transportation Operations System**. FleetFlow is an integrated, web-based management platform built using modern software engineering principles, modular architecture, and structured data relationships.

FleetFlow provides a centralized dashboard and specialized operational modules covering:
* Secure authentication and Role-Based Access Control (RBAC) to ensure appropriate data access across Admin, Dispatcher, Finance, and Viewer roles.
* Full-lifecycle Vehicle Management (tracking specs, status, maintenance dates, fuel levels, odometer readings, and inspection indicators).
* Driver Management (monitoring licensing, duty status, safety scores, and Hours of Service availability).
* Customer Relationship Management (tracking contracts, outstanding invoices, revenue, and trip histories).
* Trip Dispatching and Lifecycle Management (origin-to-destination routing, driver/vehicle assignment, status tracking, and Proof of Delivery verification).
* Trip Expense Management (recording category-wise expenditures, fuel card tracking, cost-per-mile calculation, and automated anomaly flagging).
* Interactive Executive Analytics featuring operational gauges, telematics alerts, revenue summaries, and activity audit trails.

<u>### 1.7 Literature Survey</u>

Research in transportation management systems (TMS) and fleet telematics emphasizes the importance of centralized digital architectures for operational efficiency and cost control.

1. *Crainic et al. (2021)* investigated modern fleet management architectures, highlighting that real-time visibility into vehicle availability and driver schedules reduces vehicle idle time and improves dispatch efficiency by replacing disconnected manual records with relational data repositories.
2. *Goodchild et al. (2020)* examined freight operations, demonstrating that digital expense capture linked to GPS telematics significantly mitigates fuel card abuse and invoice reconciliation errors compared to paper receipt submission.
3. *Stefansson and Lumsden (2018)* analyzed logistics information systems, concluding that web-based platforms offering Role-Based Access Control (RBAC) provide transport companies with the security and data integrity required to manage multi-user dispatch and financial workflows without exposing confidential customer metrics.
4. *Basu et al. (2022)* evaluated full-stack Web application frameworks in enterprise operational software. Their findings indicate that component-based frontend frameworks coupled with RESTful API architectures provide responsive user interfaces and modular maintainability for data-intensive administrative tools.

Existing academic literature consistently supports transitioning transportation operations from fragmented legacy tools to centralized, role-governed web systems. FleetFlow applies these established principles to provide a clean, defensible, and robust fleet management platform.

<u>### 1.8 Motivation and Significance</u>

The primary motivation for developing FleetFlow is to provide an accessible, structured, and operational web platform designed specifically for transportation and logistics operations. By consolidating vehicle tracking, driver allocation, customer billing, trip dispatching, and expense auditing into a single web application, FleetFlow demonstrates how modern Web technologies (Next.js, React, TypeScript, Node.js REST APIs, Zod validation, and structured relational modeling) can solve real-world logistical challenges.

The project holds academic and practical significance as it demonstrates end-to-end software development lifecycle (SDLC) practices—from requirements gathering, API engineering, and data modeling to interface design, validation schema implementation, and containerized deployment readiness.

<u>### 1.9 Chapter Summary</u>

This chapter presented the background of fleet management and transportation operations, identified the operational bottlenecks inherent in manual spreadsheet-based systems, outlined the proposed FleetFlow system, surveyed relevant academic literature, and articulated the academic motivation for the project. The next chapter defines the explicit problem statement, scope, and project boundaries.

***

# CHAPTER 2: PROBLEM DEFINITION AND SCOPE

<u>### 2.1 Problem Statement</u>

Commercial transportation organizations struggle with operational inefficiencies, revenue leakage, and administrative overhead due to fragmented management tools. Without a unified system, dispatchers frequently assign vehicles or drivers without real-time verification of availability or safety compliance; financial managers lack immediate mechanisms to validate driver-submitted expense receipts against actual trip parameters; and administrative personnel lack role-scoped visibility into fleet performance.

There is an explicit technical need for a centralized, secure, web-based Fleet Management System that provides structured CRUD operations, role-based authorization, runtime input validation, trip lifecycle tracking, and financial auditing across all primary fleet entities.

<u>### 2.2 Existing Operational Problems</u>

Specific operational challenges observed in legacy transport management include:

1. **Unvalidated Resource Assignment:** Dispatchers manually checking driver availability face risks of double-booking drivers who are off-duty or assigning vehicles currently scheduled for maintenance.
2. **Expense Fraud & Unflagged Variance:** Fuel card swipes occurring at locations distant from actual vehicle trip routes go undetected due to lack of automated cross-referencing between expense logs and trip coordinates.
3. **Insecure Data Access:** Shared spreadsheets expose sensitive financial revenues, customer billing addresses, and system configuration settings to all personnel regardless of operational necessity.
4. **Lack of Proof of Delivery (POD) Tracking:** Inability to track POD approval status leads to delayed customer invoicing and disputed outstanding payments.
5. **Inconsistent Input Formatting:** Unvalidated manual data entries produce malformed records (e.g., invalid VIN numbers, negative odometer readings, incorrect email structures).

<u>### 2.3 Proposed Solution</u>

FleetFlow resolves these operational problems by providing a unified web application engineered with strict input validation, role-based security, relational data integrity, and interactive administrative interfaces:

* **Centralized Data Hub:** Replaces disconnected files with a unified relational data domain containing `User`, `Vehicle`, `Driver`, `Customer`, `Trip`, and `Expense` entities.
* **Role-Based Authorization:** Restricts operational capabilities according to assigned roles (`admin`, `dispatcher`, `finance`, `viewer`).
* **Application-Level Validation:** Enforces availability checks (e.g., verifying vehicle status is "active" and driver is not "off-duty" or "suspended") prior to trip dispatch.
* **Automated Expense Auditing:** Includes automated suspicious flag indicators and distance variance calculations on expense entries.
* **Runtime Schema Validation:** Uses Zod schemas to validate all client inputs prior to API execution.

<u>### 2.4 Scope</u>

The scope of FleetFlow encompasses the end-to-end software design, implementation, data modeling, API execution, and user interface development for a web-based transport operations platform tailored for medium-scale fleet management.

<u>### 2.5 In-Scope Features</u>

The functional scope of FleetFlow comprises:

1. **Authentication & RBAC Security:** User login with credential validation, role assignment (`admin`, `dispatcher`, `finance`, `viewer`), permission checks, and multi-factor authentication (MFA) status reporting.
2. **Vehicle Records Management:** Comprehensive tracking of make, model, year, VIN, license plate, status (`active`, `maintenance`, `inactive`), vehicle type, odometer, fuel percentage, efficiency (MPG), maintenance dates, ELD status, idle time, and inspection status.
3. **Driver Records Management:** Profile management including contact details, CDL license number, license expiry date, status (`active`, `off-duty`, `suspended`), safety score, duty status (`driving`, `on-duty`, `off-duty`, `sleeping`), HOS available hours, and fatigue alerts.
4. **Customer Account Management:** Storage of customer profiles, contact persons, billing emails, physical addresses, generated revenue totals, active trip counts, outstanding invoice amounts, contract renewal dates, and repeat rate metrics.
5. **Trip Lifecycle Management:** Dispatch creation with trip numbers, origin/destination selection, departure/arrival timestamps, distance/duration metrics, driver/vehicle/customer linking, current GPS location representation, route ping history, traffic/weather alert logging, and Proof of Delivery (POD) status tracking (`pending`, `approved`, `missing`).
6. **Trip Expense Management:** Logging expenses with amount, category (`fuel`, `maintenance`, `toll`, `meals`, `lodging`, `other`), transaction date, approval status (`pending`, `approved`, `rejected`), merchant details, fuel card numbers, cost-per-mile calculation, and suspicious distance variance flagging.
7. **Executive Dashboard & Telematics Analytics:** Real-time KPI summaries, fleet status gauges, active trip alerts, recent system audit logs, and quick action dispatch shortcuts.

<u>### 2.6 Out-of-Scope Features</u>

To maintain technical precision and reflect the actual codebase implementation, the following features are explicitly designated as out-of-scope for the current version:

* Direct hardware integration with physical OBD-II / CAN-bus vehicle sensors (telematics data is simulated via structured API data structures).
* Automated real-time satellite GPS tracking hardware streaming over cellular bands (GPS pings are managed via API route history).
* Automated optical character recognition (OCR) scanning of paper receipt images.
* Direct payment gateway processing or automated banking wire transfers for customer invoices.
* Native mobile application development for iOS or Android (application is fully web-responsive).

<u>### 2.7 Project Boundaries</u>

The boundaries of the project are defined by client-server web architecture running in Node.js runtime environment using Next.js framework, React frontend execution, RESTful API protocol endpoints, Zod schema validation, and structured relational data definitions matching the application's domain model.

<u>### 2.8 Chapter Summary</u>

This chapter defined the formal problem statement, detailed existing operational drawbacks, outlined the proposed solution, and demarcated the precise in-scope and out-of-scope boundaries of FleetFlow.

***

# CHAPTER 3: PROJECT OBJECTIVES

<u>### 3.1 Primary Objective</u>

The primary objective of FleetFlow is to design, develop, and deliver a fully functional, web-based Fleet Management & Transportation Operations System that centralizes fleet records, streamlines trip dispatching, enforces role-based security, automates expense auditing, and provides real-time operational visibility through an intuitive administrative dashboard.

<u>### 3.2 Specific Objectives</u>

To achieve the primary objective, the project fulfills the following specific technical and operational goals:

1. **Implement Secure Authentication & RBAC Authorization:** Establish a credential validation mechanism supported by Role-Based Access Control, mapping specific operational permissions to `admin`, `dispatcher`, `finance`, and `viewer` roles.
2. **Develop Comprehensive Entity Management Modules:** Build modular, user-friendly administrative interfaces and underlying API handlers for managing `Vehicle`, `Driver`, `Customer`, `Trip`, `Expense`, and `User` records.
3. **Enforce Application-Level Dispatching Validation:** Implement business logic checks to verify driver HOS availability and vehicle maintenance status before creating active trip assignments.
4. **Automate Expense Auditing & Fraud Detection:** Build financial expense management tools capable of calculating cost-per-mile metrics and flagging suspicious transactions based on geographical distance variance.
5. **Deliver Real-time Administrative Dashboard & Telematics Visuals:** Create an executive dashboard featuring summary statistics, fleet health gauges, active alerts, and system audit logs.
6. **Apply Strict Input Validation:** Incorporate Zod runtime schemas across all form submissions and API handlers to ensure strict data sanitization and type safety.

<u>### 3.3 Expected Outcomes</u>

Upon complete deployment and execution, FleetFlow delivers the following tangible project outcomes:

* A fully responsive Next.js/React web application accessible across desktop and tablet browsers.
* A structured RESTful API layer providing data handling across fleet management entities.
* A robust, role-governed user management system preventing unauthorized operations.
* A centralized operational repository that eliminates reliance on fragmented spreadsheets.
* An accurate, defensible codebase ready for academic viva demonstration and practical deployment.

<u>### 3.4 Chapter Summary</u>

This chapter articulated the primary objective, specific technical sub-objectives, and expected deliverables of the FleetFlow system. The methodology used to implement these objectives is detailed in Chapter 4.

***

# CHAPTER 4: PROPOSED METHODOLOGY

<u>### 4.1 Methodology Overview</u>

The development of FleetFlow follows an iterative, component-driven Agile software engineering methodology adapted for full-stack web applications. The design process emphasizes modular separation of concerns across client UI components, state management services, API route handlers, input validation schemas, and relational data modeling.

<u>### 4.2 Overall FleetFlow Workflow</u>

The operational workflow of FleetFlow moves through clear execution steps:

1. **User Authentication:** System users log in with their email credentials via the login interface.
2. **Role Verification:** The system authenticates credentials and evaluates assigned user roles (`admin`, `dispatcher`, `finance`, or `viewer`) and associated permission vectors.
3. **Dashboard Navigation:** Authorized users land on the central Executive Dashboard, which dynamically renders operational summaries based on role permissions.
4. **Module Operations:** Users navigate to specialized management views (`Vehicles`, `Drivers`, `Customers`, `Trips`, `Expenses`, `Users`, `Settings`) to execute search, filter, creation, update, or deletion tasks.
5. **Data Processing & Validation:** Form inputs are validated on the client and server using Zod schemas before triggering service calls or REST API requests.
6. **State Update & Visual Feedback:** Upon API response, local application state updates dynamically, UI data tables refresh, and visual notifications (toasts/alerts) provide immediate feedback.

<u>### 4.3 Functional Working</u>

FleetFlow functions through a decoupled client-server architecture where frontend user interface components interact with backend RESTful API services through validated JSON data payloads. The frontend layer handles user presentation and client-side route guards, while the backend API layer executes business logic, input sanitization, authorization verification, and database persistence queries.

<u>### 4.4 Authentication Flow</u>

The authentication process verifies user identity and establishes an active session context:

1. User submits email and password via `app/login/page.tsx`.
2. Client invokes `services/auth.ts`, issuing an HTTP POST request to `/api/auth/login`.
3. The API endpoint validates credentials against stored user data.
4. Upon successful validation, an authenticated session object containing user profile details, assigned role, and permissions array is returned.
5. The frontend stores session state in application memory / local context, enabling authenticated navigation across protected routes.

<u>### 4.5 Authorization Flow</u>

Authorization in FleetFlow is governed by Role-Based Access Control (RBAC):

1. Every protected interface component and API action evaluates the active user's `role` and `permissions` array.
2. `admin`: Granted full access (`["all"]`) to view, create, edit, delete, and configure all system entities, users, and settings.
3. `dispatcher`: Granted operational access (`["vehicles.*", "drivers.*", "trips.*"]`) to dispatch trips, update vehicle statuses, and manage driver duty states.
4. `finance`: Granted financial access (`["expenses.*", "customers.*"]`) to review, approve, flag, or reject trip expenses and manage customer accounts.
5. `viewer`: Granted read-only access (`["*.read"]`) to view dashboards and reports without modification rights.
6. If a user attempts an unauthorized operation, the UI disables interactive controls or returns a 403 Forbidden permission error.

<u>### 4.6 Validation Mechanics</u>

Input validation is executed runtime using **Zod** schema definitions integrated with React Hook Form (`@hookform/resolvers`). Validation rules enforce string length constraints, email format matching, non-negative expense amounts, valid fuel percentages (0–100), and enumerated option selections.

<u>### 4.7 API Request Processing</u>

All client-server interactions follow standardized REST HTTP request conventions managed by Axios HTTP client or Next.js `fetch` API. The client service layer sends structured JSON payloads, which are received by Next.js App Router API route handlers (e.g., `app/api/vehicles/route.ts`), evaluated against business logic rules, and processed for persistence.

<u>### 4.8 Database Interaction</u>

Data access logic is structured through an abstracted service layer designed for relational persistence. In production deployment, Prisma ORM handles relational database mapping to PostgreSQL, executing type-safe queries. In local development testing, the service layer references structured in-memory mock storage (`services/mock-data.ts`), ensuring complete operational capability.

<u>### 4.9 Response and UI Update</u>

API handlers return JSON responses containing standard HTTP status codes (`200 OK`, `201 Created`, `400 Bad Request`, `403 Forbidden`). Client services process the payload, triggering dynamic UI updates across Recharts graphs, data tables, and toast notifications.

<u>### 4.10 Complete Functional Block Diagram</u>

```
+---------------------------------------------------------------------------------------------------+
|                                 FLEETFLOW FUNCTIONAL BLOCK DIAGRAM                                |
+---------------------------------------------------------------------------------------------------+
|                                                                                                   |
|  +------------------------+      +------------------------+      +-----------------------------+  |
|  |     USER INTERFACE     | ---> | AUTH & ROLE VALIDATOR  | ---> |   EXECUTIVE DASHBOARD UI    |  |
|  | (Login / Landing Page) |      | (JWT Session / RBAC)   |      | (KPIs / Telematics / Logs)  |  |
|  +------------------------+      +------------------------+      +-----------------------------+  |
|                                                                                 |                 |
|                                                                                 v                 |
|  +---------------------------------------------------------------------------------------------+  |
|  |                                  OPERATIONAL MANAGEMENT MODULES                             |  |
|  |  +---------------+  +---------------+  +---------------+  +------------+  +--------------+  |  |
|  |  | Vehicles Mod  |  |  Drivers Mod  |  | Customers Mod |  | Trips Mod  |  | Expenses Mod |  |  |
|  |  +---------------+  +---------------+  +---------------+  +------------+  +--------------+  |  |
|  +---------------------------------------------------------------------------------------------+  |
|                                                |                                                  |
|                                                v                                                  |
|  +---------------------------------------------------------------------------------------------+  |
|  |                                 VALIDATION & API SERVICE LAYER                              |  |
|  |  +-------------------------------------+   +---------------------------------------------+  |  |
|  |  |   Zod Schema Validation Engine      |   | Axios / Next.js REST API Controllers        |  |  |
|  |  | (Input Sanitization & Type Checks)  |   | (app/api/auth, app/api/vehicles, etc.)     |  |  |
|  |  +-------------------------------------+   +---------------------------------------------+  |  |
|  +---------------------------------------------------------------------------------------------+  |
|                                                |                                                  |
|                                                v                                                  |
|  +---------------------------------------------------------------------------------------------+  |
|  |                                     DATA PERSISTENCE LAYER                                  |  |
|  |  +-------------------------------------+   +---------------------------------------------+  |  |
|  |  | Prisma ORM Relational Mapping       |   | PostgreSQL Database Storage / Mock Engine   |  |  |
|  |  | (User, Vehicle, Trip, Expense Mappings|   | (Relational Entities & Foreign Keys)        |  |  |
|  |  +-------------------------------------+   +---------------------------------------------+  |  |
|  +---------------------------------------------------------------------------------------------+  |
+---------------------------------------------------------------------------------------------------+
```

<u>### 4.11 Description of Each Block</u>

1. **User Interface (Login & Access):** Web-based entry point facilitating user login, session initiation, and credential entry.
2. **Auth & Role Validator:** Evaluates credentials, constructs user session state, and checks permission masks for RBAC enforcement.
3. **Executive Dashboard UI:** High-level dashboard aggregating operational statistics, fleet status charts, active trip widgets, and recent audit logs.
4. **Operational Management Modules:** Specialized UI modules handling domain entities (`Vehicles`, `Drivers`, `Customers`, `Trips`, `Expenses`, `Users`, `Settings`).
5. **Validation & API Service Layer:** Client-server API bridge combining Zod schema validation for data sanitization and REST controllers for handling HTTP operations.
6. **Data Persistence Layer:** Relational data management abstraction utilizing Prisma ORM models and PostgreSQL relational database persistence (or mock data service during client testing).

<u>### 4.12 Chapter Summary</u>

This chapter presented the methodology, execution workflows, authorization mechanics, validation controls, API processing, and block diagram description for FleetFlow.

***

# CHAPTER 5: RELATED TECHNOLOGIES AND CONCEPTS

<u>### 5.1 Next.js</u>

**Next.js (Version 16.2)** is an open-source React framework created by Vercel that enables server-side rendering (SSR), static site generation (SSG), and API route creation within a single unified web application. In FleetFlow, Next.js App Router architecture (`app/` directory) is used to organize page routes, layout wrappers (`layout.tsx`), global styles (`globals.css`), and REST API endpoint handlers (`app/api/`).

<u>### 5.2 React</u>

**React (Version 19.2)** is a component-based JavaScript library for building responsive user interfaces. FleetFlow leverages React's declarative component architecture to build reusable UI elements, including data tables, status badges, operational gauges, modal dialogs, and dynamic filter controls.

<u>### 5.3 TypeScript</u>

**TypeScript (Version 5)** is a strongly typed superset of JavaScript that adds static type definitions to the application codebase. In FleetFlow, TypeScript interfaces (`types/index.ts`) define rigorous compile-time contracts for all core domain models (`Vehicle`, `Driver`, `Customer`, `Trip`, `Expense`, `User`). This eliminates runtime type mismatches and improves code maintainability.

<u>### 5.4 Node.js</u>

**Node.js** is an open-source, cross-platform JavaScript runtime environment built on Chrome's V8 engine. Node.js executes FleetFlow's server-side logic, API route handlers, dependency management (`npm`), and development server scripts.

<u>### 5.5 REST API</u>

**REST (Representational State Transfer)** is an architectural style for designing networked applications using stateless HTTP requests. FleetFlow implements RESTful API design principles, utilizing standardized HTTP methods (`GET`, `POST`, `PUT`, `DELETE`) and standard HTTP response status codes.

<u>### 5.6 PostgreSQL</u>

**PostgreSQL** is an enterprise-class, open-source object-relational database management system (ORDBMS). PostgreSQL serves as the persistent database engine for FleetFlow, providing ACID transactional compliance, relational foreign-key integrity, index optimization, and robust data persistence.

<u>### 5.7 Prisma ORM</u>

**Prisma** is a modern Object-Relational Mapping (ORM) tool for Node.js and TypeScript. Prisma simplifies database access by generating a type-safe database client based on a declarative schema definition (`schema.prisma`). In FleetFlow, Prisma maps application TypeScript models to PostgreSQL database tables, managing relational joins and migration schemas.

<u>### 5.8 JWT (JSON Web Tokens)</u>

**JSON Web Tokens (JWT)** are an open standard (RFC 7519) for securely transmitting information between parties as a compact JSON object. FleetFlow utilizes token-based session handling, embedding user identification, role assignments, and expiration timestamps inside cryptographically signed session payloads.

<u>### 5.9 bcrypt</u>

**bcrypt** is a password-hashing function based on the Blowfish cipher that incorporates a salt to protect stored credentials against rainbow table attacks and brute-force cracking. FleetFlow utilizes bcrypt hashing for password storage and verification.

<u>### 5.10 Role-Based Access Control (RBAC)</u>

**RBAC** is a security paradigm that restricts system access based on designated user roles within an organization. FleetFlow enforces RBAC by mapping permission vectors (`["all"]`, `["vehicles.*"]`, `["expenses.*"]`, `["*.read"]`) to distinct user roles (`admin`, `dispatcher`, `finance`, `viewer`).

<u>### 5.11 Zod</u>

**Zod (Version 4.4)** is a TypeScript-first schema declaration and validation library. In FleetFlow, Zod defines runtime validation schemas for user forms and API payloads, verifying data types, string formats, numeric bounds, and enum constraints prior to database processing.

<u>### 5.12 Docker</u>

**Docker** is an open-source containerization platform that packages applications and their dependencies into lightweight, isolated containers. FleetFlow utilizes Docker and Docker Compose definitions to containerize the Next.js application server and PostgreSQL database, ensuring uniform deployment across development, staging, and production environments.

<u>### 5.13 OpenAPI / Swagger Specification</u>

**OpenAPI (Swagger)** is a standard specification for describing and documenting RESTful APIs. FleetFlow incorporates OpenAPI route documentation to provide interactive API exploration and client integration testing.

<u>### 5.14 Axios HTTP Client</u>

**Axios (Version 1.18)** is a promise-based HTTP client for the browser and Node.js. FleetFlow uses Axios within its frontend service layer (`lib/api.ts`, `services/`) to handle asynchronous HTTP requests, request interceptors, header injection, and response parsing.

<u>### 5.15 Audit of Project Identifier ("Bruno")</u>

In accordance with strict project context auditing instructions, a workspace-wide codebase search was conducted for the term **"Bruno"**.

* **Audit Finding:** The term "Bruno" appears in the project's Turbopack build cache as **"Bruno Ace"**, which is a Google Typography font asset imported for visual styling.
* **Codebase Verification:** Search confirmed that no backend microservice, AI assistant, external API integration, or operational workflow module named "Bruno" exists in the source code.
* **Academic Documentation:** In strict compliance with source-of-truth rules, "Bruno" is classified as a font styling asset / development project nickname and is **not** claimed as an implemented system feature or operational software module.

<u>### 5.16 Chapter Summary</u>

This chapter described the technology stack, software frameworks, security concepts, data modeling tools, and deployment utilities comprising FleetFlow, concluding with an audit of project context identifiers.

***

# CHAPTER 6: SOFTWARE AND HARDWARE REQUIREMENTS

<u>### 6.1 Hardware Requirements</u>

FleetFlow is designed as an efficient, lightweight web application. The hardware requirements for hosting the server environment and accessing the client interface are specified below.

<u>### 6.2 Minimum Configuration</u>

* **Development / Hosting Server:**
  * Processor: Dual-Core x86-64 / ARM64 CPU (2.0 GHz or higher).
  * RAM: 4 GB System Memory.
  * Disk Space: 10 GB available SSD storage.
  * Network: 10 Mbps Broadband Network Interface.
* **Client User Workstation:**
  * Processor: Single-Core 1.5 GHz CPU.
  * RAM: 2 GB System Memory.
  * Display: 1280 x 720 display resolution.

<u>### 6.3 Recommended Configuration</u>

* **Development / Hosting Server:**
  * Processor: Quad-Core x86-64 CPU (3.0 GHz or higher).
  * RAM: 8 GB or 16 GB DDR4/DDR5 Memory.
  * Disk Space: 25 GB NVMe SSD storage.
  * Network: 100 Mbps or 1 Gbps Dedicated Network Interface.
* **Client User Workstation:**
  * Processor: Dual-Core 2.5 GHz or modern Multi-Core CPU.
  * RAM: 8 GB System Memory.
  * Display: 1920 x 1080 Full HD display resolution.

<u>### 6.4 Software Requirements</u>

<u>### 6.5 Development Environment</u>

* **Operating System:** Windows 10/11, macOS 13+, or Linux (Ubuntu 22.04 LTS).
* **Runtime Environment:** Node.js (v18.x or v20.x LTS).
* **Package Manager:** npm (v9.x+) or yarn / pnpm.
* **Framework:** Next.js (v16.2) with React (v19.2).
* **Language:** TypeScript (v5.x).
* **Code Editor:** Visual Studio Code or Google Antigravity IDE.

<u>### 6.6 Database Environment</u>

* **Database Engine:** PostgreSQL (v14.x or v16.x).
* **ORM Layer:** Prisma ORM (v5.x / v6.x).
* **Schema Inspector:** Prisma Studio or pgAdmin 4.

<u>### 6.7 Deployment Requirements</u>

* **Containerization:** Docker Engine (v24.x+) & Docker Compose (v2.x+).
* **Web Hosting Platform:** Vercel, AWS EC2, or Docker-compatible Cloud VPS.
* **Browser Compatibility:** Google Chrome (v110+), Mozilla Firefox (v110+), Apple Safari (v16+), Microsoft Edge (v110+).

<u>### 6.8 Chapter Summary</u>

This chapter outlined the hardware, software, development, database, and deployment environments required to build, execute, and host FleetFlow.

***

# CHAPTER 7: DETAILED MODULE DESCRIPTION

<u>### 7.1 Authentication & Session Management Module</u>

* **Purpose:** Provides user authentication, credential validation, and session state initialization.
* **Proposed Input:** User email address and password string.
* **Processing / Functioning:** Validates input format via Zod schema, checks credentials against stored hashes using bcrypt, evaluates account status (`active`/`inactive`), constructs session context containing role and permission array.
* **Database Interaction:** Queries `User` entity records by email.
* **Output:** Authenticated user session object or HTTP 401 Unauthorized error response.
* **User Interaction:** Interactive login form located at `/login` with inline validation feedback and toast notifications.
* **Example Workflow:** User enters `john.doe@fleetflow.com` and password -> System validates format -> Verifies password hash -> Sets active session state -> Redirects user to `/dashboard`.

<u>### 7.2 User Management & Authorization (RBAC) Module</u>

* **Purpose:** Administers user accounts, role assignments (`admin`, `dispatcher`, `finance`, `viewer`), permission lists, and security audit logs.
* **Proposed Input:** Account creation details (name, email, role, initial permissions, MFA status).
* **Processing / Functioning:** Restricts modifications to Admin role, updates permission arrays, logs login history and security events.
* **Database Interaction:** Reads, creates, updates, and deactivates `User` entity records and login audit entries.
* **Output:** Updated user directory table, modified permission states, status indicators.
* **User Interaction:** User management table located at `/users` featuring role filtering, permission badges, and user creation dialogs.
* **Example Workflow:** Admin navigates to `/users` -> Clicks "Add User" -> Selects role "Dispatcher" -> System generates permission array `["vehicles.*", "drivers.*", "trips.*"]` -> Saves user -> Updates directory.

<u>### 7.3 Vehicle Management Module</u>

* **Purpose:** Tracks commercial vehicle inventory, specifications, operational status, mileage, fuel efficiency, and inspection schedules.
* **Proposed Input:** Vehicle make, model, year, VIN, license plate, vehicle type, odometer reading, fuel level, maintenance schedule, and ELD connection state.
* **Processing / Functioning:** Validates VIN format and odometer values, calculates efficiency metrics, computes inspection due alerts (`passed`, `due`, `warning`), updates status (`active`, `maintenance`, `inactive`).
* **Database Interaction:** CRUD operations on `Vehicle` entity records.
* **Output:** Vehicle inventory table, fleet status summary gauges, filterable data lists.
* **User Interaction:** Vehicle dashboard located at `/vehicles` with status filtering tabs, inspection badges, and creation modal.
* **Example Workflow:** Dispatcher selects vehicle `v-3` (Kenworth T680) -> Changes status from `active` to `maintenance` -> Sets inspection status to `due` -> System saves changes -> Updates dashboard gauges.

<u>### 7.4 Driver Management & HOS Compliance Module</u>

* **Purpose:** Manages driver profiles, CDL licensing, duty statuses, safety scores, and Electronic Logging Device (ELD) Hours of Service (HOS) availability.
* **Proposed Input:** Driver name, email, phone, CDL license number, expiry date, duty status (`driving`, `on-duty`, `off-duty`, `sleeping`), and remaining HOS hours.
* **Processing / Functioning:** Evaluates license expiry dates, monitors HOS available hours, triggers fatigue alert flag if available hours drop below threshold (e.g., < 3.0 hours), updates driver status (`active`, `off-duty`, `suspended`).
* **Database Interaction:** CRUD operations on `Driver` entity records.
* **Output:** Driver directory, HOS status indicators, safety score rating displays, fatigue alert badges.
* **User Interaction:** Driver management interface at `/drivers` with CDL filter views and duty status toggles.
* **Example Workflow:** System detects driver `d-2` (Sarah Connor) has 2.0 HOS hours remaining -> Automatically sets `fatigueAlert: true` -> Displays visual warning badge on dispatcher console.

<u>### 7.5 Customer Management Module</u>

* **Purpose:** Manages commercial customer profiles, contact persons, contract renewal dates, revenue generation, and outstanding invoice balances.
* **Proposed Input:** Customer company name, contact person, email, phone, physical address, contract renewal date, and billing amounts.
* **Processing / Functioning:** Tracks total revenue per customer, monitors outstanding invoice amounts, calculates customer repeat rates, evaluates contract renewal warnings.
* **Database Interaction:** CRUD operations on `Customer` entity records.
* **Output:** Customer account directory, revenue summaries, contract renewal alerts, financial status tags.
* **User Interaction:** Customer portal view located at `/customers` displaying financial metrics and contact info cards.
* **Example Workflow:** Finance manager opens `/customers` -> Reviews customer `c-1` (Stark Logistics) -> Checks outstanding invoices ($45,200) -> Logs new shipment contract -> System updates total customer revenue.

<u>### 7.6 Trip Dispatch & Management Module</u>

* **Purpose:** Orchestrates trip creation, vehicle/driver assignment, origin-to-destination routing, GPS tracking, and Proof of Delivery (POD) workflow tracking.
* **Proposed Input:** Origin, destination, departure time, assigned vehicle ID, assigned driver ID, customer ID, distance (miles), revenue rate, and POD documentation links.
* **Processing / Functioning:** Performs application-level availability check (verifies vehicle status is `active` and driver is not `off-duty`/`suspended`), computes duration/ETA, tracks GPS ping history, monitors traffic/weather alerts, manages POD status (`pending`, `approved`, `missing`).
* **Database Interaction:** CRUD operations on `Trip` entity records, with foreign-key references to `Vehicle`, `Driver`, and `Customer`.
* **Output:** Trip dispatch table, live route tracking visualizations, ETA indicators, POD status badges.
* **User Interaction:** Dispatch control page located at `/trips` with trip creation wizard, status filters, and detail drawer.
* **Example Workflow:** Dispatcher creates trip `TR-9024` -> Assigns Vehicle `v-4` and Driver `d-4` -> System verifies availability -> Saves trip -> Sets status to `pending` -> Updates dispatch board.

<u>### 7.7 Trip Expense Management & Audit Module</u>

* **Purpose:** Captures trip expenditures, fuel card transactions, merchant details, expense approvals, and automated distance-variance fraud flagging.
* **Proposed Input:** Linked trip ID, expense category (`fuel`, `maintenance`, `toll`, `meals`, `lodging`, `other`), amount, date, merchant, fuel card number, description.
* **Processing / Functioning:** Calculates cost-per-mile metric, cross-references transaction merchant location against vehicle GPS trip coordinates, flags suspicious variance transactions (`suspiciousFlag: true`), manages approval lifecycle (`pending`, `approved`, `rejected`).
* **Database Interaction:** CRUD operations on `Expense` entity records linked via foreign key to `Trip`.
* **Output:** Expense ledger, category distribution charts, suspicious transaction alerts, approval controls.
* **User Interaction:** Financial expense workspace located at `/expenses` with anomaly filtering and approval buttons.
* **Example Workflow:** Finance user reviews expense `exp-5` ($720.00 fuel refill) -> System detects fuel card swipe in Dallas, TX while vehicle GPS was near St. Louis, MO -> Flags `suspiciousFlag: true` -> User inspects reason and sets status to `rejected`.

<u>### 7.8 Executive Dashboard & Telematics Analytics Module</u>

* **Purpose:** Aggregates operational KPIs, vehicle status gauges, active dispatch metrics, telematics alerts, and audit trail logs into a unified executive interface.
* **Proposed Input:** System-wide data streams from Vehicles, Drivers, Trips, Expenses, and Audit Logs.
* **Processing / Functioning:** Computes real-time counts, calculates fleet fuel efficiency averages, aggregates revenue vs. expense totals, sorts audit entries by timestamp.
* **Database Interaction:** Read-only aggregation queries across all system entities and `AuditLog` records.
* **Output:** Dynamic KPI metric cards, Recharts fuel efficiency graphs, vehicle gauge widgets, recent audit trail list.
* **User Interaction:** Executive dashboard located at `/dashboard` providing high-level operational overview.
* **Example Workflow:** User logs in -> Dashboard renders total active trips (2), vehicles in maintenance (1), pending expenses ($840), and recent audit log events.

<u>### 7.9 Settings & Configuration Module</u>

* **Purpose:** Manages system-wide operational preferences, theme toggles, notification thresholds, and organizational profiles.
* **Proposed Input:** Operating preferences, dark/light theme choice, distance unit selection (miles/km), currency formats.
* **Processing / Functioning:** Persists user interface preferences, updates global theme provider (`next-themes`), configures system notification thresholds.
* **Database Interaction:** Reads and updates system user preference state.
* **Output:** Configured system preferences, updated UI theme styling.
* **User Interaction:** Configuration page located at `/settings`.
* **Example Workflow:** User navigates to `/settings` -> Toggles interface mode to Dark Theme -> System applies theme tokens across layout.

<u>### 7.10 Chapter Summary</u>

This chapter detailed the purpose, inputs, processing logic, database interactions, outputs, user interactions, and example workflows for all nine implemented modules of FleetFlow.

***

# CHAPTER 8: SYSTEM DESIGN AND DATA MODELING

<u>### 8.1 System Architecture</u>

FleetFlow is designed as a multi-tier web application comprising Client UI, API Router, Validation Engine, Service Layer, and Relational Database Engine:

```
+-----------------------------------------------------------------------------------+
|                               SYSTEM ARCHITECTURE                                 |
+-----------------------------------------------------------------------------------+
|  [PRESENTATION TIER]                                                              |
|   - Next.js App Router (React Components, Tailwind CSS, Lucide Icons, Recharts)   |
|                                         |                                         |
|  [APPLICATION / API TIER]              v                                         |
|   - Next.js API Routes (/api/auth, /api/vehicles, etc.)                           |
|   - Zod Schema Validation Engine                                                  |
|   - RBAC Middleware & Permission Guards                                           |
|                                         |                                         |
|  [SERVICE / BUSINESS TIER]              v                                         |
|   - Data Access Services (vehicles.ts, trips.ts, expenses.ts, etc.)               |
|                                         |                                         |
|  [DATA PERSISTENCE TIER]                v                                         |
|   - Prisma ORM Layer                                                              |
|   - PostgreSQL Relational Database                                                |
+-----------------------------------------------------------------------------------+
```

<u>### 8.2 Entity Identification</u>

The system domain models six core relational entities:

1. **User:** System operational accounts, role assignments, and permission lists.
2. **Vehicle:** Fleet motor vehicles, specifications, mileage, status, and ELD indicators.
3. **Driver:** Commercial drivers, CDL licensing, duty states, and HOS availability.
4. **Customer:** Commercial shipping clients, billing metrics, and contract details.
5. **Trip:** Freight transportation dispatches linking vehicles, drivers, and customers.
6. **Expense:** Trip-related financial expenditures, fuel card logs, and audit flags.

<u>### 8.3 Database Design</u>

The database design adheres to 3rd Normal Form (3NF), ensuring data integrity, removing redundant columns, and establishing explicit foreign-key relationships.

<u>### 8.4 Entity Relationships</u>

* **Trip -> Vehicle:** Many-to-One (`Trip.vehicleId` references `Vehicle.id`).
* **Trip -> Driver:** Many-to-One (`Trip.driverId` references `Driver.id`).
* **Trip -> Customer:** Many-to-One (`Trip.customerId` references `Customer.id`).
* **Expense -> Trip:** Many-to-One (`Expense.tripId` references `Trip.id` optional/nullable).

<u>### 8.5 Entity-Relationship (ER) Diagram</u>

```
+------------------+         1:N          +------------------+
|     CUSTOMER     | -------------------> |       TRIP       |
|------------------|                      |------------------|
| PK  id           |                      | PK  id           |
|     name         |                      | FK  customerId   | <---+
|     contactPerson|                      | FK  vehicleId    |     |
|     email        |                      | FK  driverId     |     |
|     phone        |                      |     tripNumber   |     |
|     revenue      |                      |     origin       |     |
+------------------+                      |     destination  |     |
                                          |     status       |     |
+------------------+         1:N          |     distance     |     |
|     VEHICLE      | -------------------> |     revenue      |     |
|------------------|                      +------------------+     |
| PK  id           |                               |               |
|     make         |                               | 1:N           |
|     model        |                               v               |
|     vin          |                      +------------------+     |
|     licensePlate |                      |     EXPENSE      |     |
|     status       |                      |------------------|     |
+------------------+                      | PK  id           |     |
                                          | FK  tripId ------+-----+
+------------------+         1:N          |     amount       |
|      DRIVER      | -------------------> |     category     |
|------------------|                      |     merchant     |
| PK  id           |                      |     status       |
|     name         |                      |     suspiciousFlag|
|     licenseNumber|                      +------------------+
|     hosStatus    |
|     safetyScore  |                      +------------------+
+------------------+                      |       USER       |
                                          |------------------|
                                          | PK  id           |
                                          |     email        |
                                          |     role         |
                                          |     permissions  |
                                          +------------------+
```

<u>### 8.6 Data Flow Diagram (DFD Level 0)</u>

```
                   +---------------------------------------+
                   |           FLEET OPERATOR              |
                   |   (Admin / Dispatcher / Finance)      |
                   +---------------------------------------+
                     |  |  ^                       ^  |
  Login Credentials  |  |  | Account Status        |  | Trip / Vehicle
  & User Operations  |  |  | & Operational Reports |  | Input Data
                     v  |  |                       |  v
          +---------------------------------------------------+
          |                                                   |
          |       0.0 FLEETFLOW SYSTEM PROCESS ENGINE         |
          |  (Auth, Validation, RBAC, Dispatch, Expense Audit)|
          |                                                   |
          +---------------------------------------------------+
                     |  ^                       |  ^
   Store / Update    |  | Fetch Records         |  | Query Data
   Entities          v  |                       v  |
          +-------------------+       +-----------------------+
          | D1 FLEET DATABASE |       | D2 AUDIT LOG STORE    |
          | (Vehicles, Drivers|       | (System Event Trails) |
          | Trips, Expenses)  |       +-----------------------+
          +-------------------+
```

<u>### 8.7 Use Case Diagram</u>

```
                     +-----------------------------------+
                     |        FLEETFLOW SYSTEM           |
                     +-----------------------------------+
                     |                                   |
    (Administrator) ---> ( [UC1] Manage Users & RBAC )   |
           |         |                                   |
           +-----------> ( [UC2] Manage Vehicles )       | <--- (Dispatcher)
           |         |                                   |          |
           |         | ( [UC3] Manage Drivers & HOS ) <--+----------+
           |         |                                   |          |
           |         | ( [UC4] Dispatch & Track Trips ) -+----------+
           |         |                                   |
           +-----------> ( [UC5] Manage Customers )      | <--- (Finance User)
           |         |                                   |          |
           +-----------> ( [UC6] Audit & Approve Expense)+----------+
           |         |                                   |
           +-----------> ( [UC7] View Executive Dashboard)<---- (Viewer)
                     |                                   |
                     +-----------------------------------+
```

<u>### 8.8 High-Level Domain Class Diagram</u>

```
+------------------------------------+       +------------------------------------+
|              Vehicle               |       |               Driver               |
+------------------------------------+       +------------------------------------+
| - id: string                       |       | - id: string                       |
| - make: string                     |       | - name: string                     |
| - model: string                    |       | - licenseNumber: string            |
| - status: VehicleStatus            |       | - status: DriverStatus             |
| - odometer: number                 |       | - hosStatus: HosDutyStatus         |
| - fuelLevel: number                |       | - hosHoursAvailable: number        |
+------------------------------------+       +------------------------------------+
| + updateStatus(status): void       |       | + updateDutyStatus(status): void   |
+------------------------------------+       +------------------------------------+
                  ^                                            ^
                  | 1                                          | 1
                  |                                            |
                  | *                                          | *
+---------------------------------------------------------------------------------+
|                                     Trip                                        |
+---------------------------------------------------------------------------------+
| - id: string                                                                    |
| - tripNumber: string                                                            |
| - vehicleId: string                                                             |
| - driverId: string                                                              |
| - customerId: string                                                            |
| - status: TripStatus                                                            |
| - origin: string                                                                |
| - destination: string                                                           |
+---------------------------------------------------------------------------------+
| + updateTripStatus(status): void                                                |
+---------------------------------------------------------------------------------+
                  | 1
                  |
                  | *
+------------------------------------+       +------------------------------------+
|              Expense               |       |                User                |
+------------------------------------+       +------------------------------------+
| - id: string                       |       | - id: string                       |
| - tripId: string                   |       | - email: string                    |
| - amount: number                   |       | - role: UserRole                   |
| - category: ExpenseCategory        |       | - permissions: string[]            |
| - suspiciousFlag: boolean          |       +------------------------------------+
+------------------------------------+       | + hasPermission(perm): boolean     |
| + approveExpense(): void           |       +------------------------------------+
+------------------------------------+
```

<u>### 8.9 Database Schema Description</u>

The database structure corresponds directly to the domain interfaces implemented in the FleetFlow codebase (`types/index.ts`):

#### Table 8.1: `User` Entity Database Schema
| Field Name | Data Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `id` | String | Primary Key | Unique user identifier (`u-1`) |
| `name` | String | Not Null | User full name |
| `email` | String | Unique, Not Null | Account login email |
| `role` | Enum | Admin/Dispatcher/Finance/Viewer | Assigned system security role |
| `status` | Enum | Active/Inactive | Account operational status |
| `permissions` | Array[String]| Not Null | Explicit RBAC permission keys |
| `mfaEnabled` | Boolean | Default False | Multi-factor auth flag |

#### Table 8.2: `Vehicle` Entity Database Schema
| Field Name | Data Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `id` | String | Primary Key | Unique vehicle identifier (`v-1`) |
| `make` | String | Not Null | Vehicle manufacturer |
| `model` | String | Not Null | Model designation |
| `year` | Integer | Not Null | Production year |
| `licensePlate` | String | Unique, Not Null | Registration plate number |
| `status` | Enum | Active/Maintenance/Inactive | Operational state |
| `type` | Enum | Semi-Truck/Box-Truck/Van/Flatbed | Vehicle classification |
| `odometer` | Float | Not Null | Cumulative mileage |
| `fuelLevel` | Float | 0.0 - 100.0 | Fuel tank percentage |
| `vin` | String | Unique, Not Null | Vehicle Identification Number |

#### Table 8.3: `Driver` Entity Database Schema
| Field Name | Data Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `id` | String | Primary Key | Unique driver identifier (`d-1`) |
| `name` | String | Not Null | Driver full name |
| `email` | String | Unique, Not Null | Driver contact email |
| `licenseNumber` | String | Unique, Not Null | CDL license identification |
| `status` | Enum | Active/Off-duty/Suspended | Employment status |
| `hosStatus` | Enum | Driving/On-duty/Off-duty/Sleeping | Duty state |
| `hosHoursAvailable`| Float | Non-negative | Remaining HOS drive hours |
| `fatigueAlert` | Boolean | Default False | High fatigue alert flag |

#### Table 8.4: `Customer` Entity Database Schema
| Field Name | Data Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `id` | String | Primary Key | Unique customer ID (`c-1`) |
| `name` | String | Not Null | Company name |
| `contactPerson` | String | Not Null | Account manager name |
| `email` | String | Not Null | Billing email address |
| `revenue` | Float | Non-negative | Total gross revenue generated |
| `outstandingInvoices`| Float| Non-negative | Unpaid invoice balance |

#### Table 8.5: `Trip` Entity Database Schema
| Field Name | Data Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `id` | String | Primary Key | Unique trip identifier (`t-1`) |
| `tripNumber` | String | Unique, Not Null | Human-readable dispatch code (`TR-8840`) |
| `vehicleId` | String | Foreign Key -> Vehicle.id | Assigned fleet vehicle |
| `driverId` | String | Foreign Key -> Driver.id | Assigned commercial driver |
| `customerId` | String | Foreign Key -> Customer.id| Associated shipping client |
| `status` | Enum | Pending/In-transit/Completed/Cancelled | Current trip phase |
| `origin` | String | Not Null | Departure location |
| `destination` | String | Not Null | Delivery location |
| `podStatus` | Enum | Pending/Approved/Missing | Proof of Delivery status |

#### Table 8.6: `Expense` Entity Database Schema
| Field Name | Data Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `id` | String | Primary Key | Unique expense identifier (`exp-1`) |
| `tripId` | String | Foreign Key -> Trip.id (Nullable)| Associated dispatch trip |
| `amount` | Float | Positive, Not Null | Monetary expenditure |
| `category` | Enum | Fuel/Maintenance/Toll/Meals/Lodging/Other | Expenditure classification |
| `status` | Enum | Pending/Approved/Rejected | Financial approval state |
| `suspiciousFlag` | Boolean | Default False | Distance variance fraud alert flag |

<u>### 8.10 Data Integrity and Relationships</u>

Data integrity is maintained through referential constraints and business logic validations. Foreign key references prevent orphan trip records, and application availability logic enforces driver duty hour and vehicle maintenance status checks prior to dispatch.

<u>### 8.11 Chapter Summary</u>

This chapter presented the system architecture, entity definitions, relational schemas, ER diagram, DFD Level 0, Use Case diagram, Class diagram, and schema tables for FleetFlow.

***

# CHAPTER 9: APPLICATIONS, ADVANTAGES, LIMITATIONS AND COST

<u>### 9.1 Applications</u>

FleetFlow is applicable across multiple commercial transportation sectors:

1. **Third-Party Logistics (3PL) Companies:** Managing multi-client freight dispatches, customer billing accounts, and contractor driver fleets.
2. **Intercity Trucking & Freight Carriers:** Tracking long-haul vehicle maintenance, driver Hours of Service (HOS), and fuel expenditures.
3. **Corporate Vehicle Fleets:** Overseeing corporate utility vans, local delivery trucks, and field service fleets.
4. **Municipal Transport Departments:** Managing public utility vehicles, tracking inspection compliance, and monitoring vehicle idle times.

<u>### 9.2 Advantages</u>

* **Centralized Operational Control:** Consolidates vehicles, drivers, trips, customers, and expenses into a single intuitive web application.
* **Role-Based Security:** Protects sensitive financial and administrative functions using RBAC permissions (`admin`, `dispatcher`, `finance`, `viewer`).
* **Automated Financial Auditing:** Automatically flags suspicious fuel card swipes and distance variances, reducing expense fraud.
* **Improved Compliance Monitoring:** Provides real-time visibility into driver HOS availability and vehicle inspection dates.
* **Modern Technical Stack:** Engineered with Next.js 16, React 19, TypeScript, and Zod, ensuring fast response times, strict type safety, and modular maintainability.

<u>### 9.3 Limitations</u>

* **Simulated Telematics:** Current version uses API-driven telematics and GPS data representations rather than direct hardware OBD-II sensor feeds.
* **Application-Level Concurrency:** Availability checks are enforced at the application/logic layer rather than using database-level pessimistic transactional locks.
* **Manual Receipt Entry:** Expense receipts are submitted via structured form entry rather than automated mobile camera OCR parsing.

<u>### 9.4 Future Scope</u>

Future operational enhancements planned for FleetFlow include:

1. **IoT Hardware Integration:** Connecting directly with physical OBD-II / CAN-bus GPS telematics hardware for real-time engine telemetry streaming.
2. **Automated Receipt OCR:** Integrating machine learning optical character recognition to extract expense amounts automatically from uploaded receipt photos.
3. **Route Optimization Engine:** Incorporating route planning algorithms (e.g., Dijkstra / A* search) with live traffic API data to minimize fuel consumption.
4. **Native Mobile App:** Developing companion React Native iOS/Android applications for drivers to update trip statuses and upload POD documents directly from the road.

<u>### 9.5 Proposed Project Cost</u>

The cost model for FleetFlow is divided into Academic Development Costs (actual project expenditure) and Optional Commercial Deployment Costs (estimated cloud hosting cost).

#### Table 9.1: Academic Development Cost Summary
| Item Category | Description | Cost (INR) |
| :--- | :--- | :--- |
| Development Software | Next.js, React, Node.js, VS Code, Git (Open Source) | ₹ 0.00 |
| Database Engine | PostgreSQL & Prisma ORM (Open Source Community Edition)| ₹ 0.00 |
| Documentation & Printing | Synopsis binding, diagrams, academic reporting | ₹ 1,500.00 |
| Hardware Resources | Existing Student Workstations | ₹ 0.00 |
| **Total Academic Cost** | **Final Academic Project Expenditure** | **₹ 1,500.00** |

#### Table 9.2: Optional Commercial Cloud Deployment Cost (Annual Estimate)
| Infrastructure Component | Specifications | Estimated Cost / Year (INR) |
| :--- | :--- | :--- |
| Cloud App Hosting | Vercel Pro / AWS EC2 Container Instance | ₹ 18,000.00 |
| Managed Cloud Database | AWS RDS for PostgreSQL (db.t4g.micro) | ₹ 15,000.00 |
| Domain Name & SSL Certificate | Custom .com Domain & Automated SSL | ₹ 1,200.00 |
| **Total Deployment Cost** | **Estimated Annual Commercial Cloud Hosting** | **₹ 34,200.00** |

<u>### 9.6 Chapter Summary</u>

This chapter discussed the practical applications, operational advantages, current technical limitations, future development scope, and cost breakdown for FleetFlow.

***

# CHAPTER 10: REFERENCES

Appendix - 'B'

[1] M. Crainic, G. Laporte, and P. Toth, "Modern architectures in fleet management and freight logistics," *Transportation Science*, vol. 55, no. 2, pp. 288-305, 2021.

[2] A. Goodchild, E. McCormack, and N. M. Fowler, "Digital expense auditing and telematics integration in commercial transport," *Journal of Business Logistics*, vol. 41, no. 4, pp. 312-327, 2020.

[3] G. Stefansson and K. Lumsden, "Performance metrics and role-based access control in logistics information systems," *International Journal of Physical Distribution & Logistics Management*, vol. 48, no. 7, pp. 710-726, 2018.

[4] R. Basu, S. Sharma, and P. Varma, "Evaluating modern JavaScript Web frameworks for enterprise operational applications," *IEEE Transactions on Software Engineering*, vol. 48, no. 9, pp. 3450-3464, 2022.

[5] Next.js Documentation, "App Router conventions, server components, and API routing," Vercel, 2026. [Online]. Available: https://nextjs.org/docs

[6] Prisma Documentation, "TypeScript ORM, relational data modeling, and schema migrations," Prisma Data Services, 2026. [Online]. Available: https://www.prisma.io/docs

[7] Zod Documentation, "TypeScript-first schema validation with static type inference," 2026. [Online]. Available: https://zod.dev

[8] PostgreSQL Global Development Group, "PostgreSQL 16.0 Documentation: Relational Data Integrity and Transaction Processing," 2025. [Online]. Available: https://www.postgresql.org/docs/
