# PROJECT SYNOPSIS
## On FLEETFLOW
### Fleet Management & Transportation Operations System

**Submitted for Partial Fulfillment of Award of**
**BACHELOR OF TECHNOLOGY In Computer Science & Engineering**

**By:**
- Rishabh Singh (Roll Number: [To Be Filled])
- Surya Pratap Singh (Roll Number: [To Be Filled])
- Priyanshu Singh (Roll Number: [To Be Filled])

**Under the Guidance Of:**
- [Name of Project Guide]
- [Designation]

**SCHOOL OF MANAGEMENT SCIENCES, LUCKNOW**
Affiliated to **Dr. APJ ABDUL KALAM TECHNICAL UNIVERSITY, LUCKNOW**
Academic Year 2025–2026

---

# Table of Content

- **1. Introduction**
- **2. Problem Definition**
- **3. Project Objective**
- **4. Proposed Methodology**
- **5. System Architecture and Related Concepts**
- **6. Software/Hardware Requirements and Specifications**
- **7. Module Description**
- **8. Data Flow Diagram (DFD) & Use Case Diagram**
- **9. Applications / Advantages / Limitations / Cost**
- **10. References**

---

# 1. Introduction

Commercial fleet management encompasses the administrative, operational, and software engineering processes required to oversee commercial motor vehicles—including trucks, delivery vans, trailers, and utility vehicles—within small to medium transport enterprises. In contemporary logistics operations, fleet management serves as the structural backbone for moving physical freight across regional distribution networks. Traditionally, small transport businesses relied on manual physical logbooks, paper slips, phone calls, and disconnected spreadsheets to track vehicle availability, driver allocations, and trip expenses. As commercial freight operations expand, managing driver availability, vehicle maintenance schedules, fuel consumption, customer accounts, and trip expenses manually creates severe operational friction.

Modern software-driven fleet management provides centralized record accuracy and operational transparency. By digitalizing these processes into a structured web application, transport managers gain aggregated operational visibility into vehicle statuses (AVAILABLE, ON_TRIP, MAINTENANCE, OUT_OF_SERVICE), driver availability (ACTIVE, ON_TRIP, ON_LEAVE, INACTIVE), customer freight dispatches, and categorized trip expenditures.

Existing commercial transportation solutions are typically either enterprise-grade platforms that are prohibitively expensive for small transport companies and regional fleet operators, or rudimentary tools that rely heavily on static, unlinked spreadsheets. These disconnected manual systems fail when confronted with expanding fleet sizes, multi-role staff access requirements, or complex trip expense reconciliations.

This project proposes FleetFlow—a functional, web-based fleet management and transportation operations system specifically designed to address these technical and operational shortcomings. FleetFlow provides a unified, role-governed web application built using modern Web technologies including Next.js 16, React 19, TypeScript, Node.js REST APIs, Zod runtime schema validation, Prisma ORM 7.8, and PostgreSQL 16 containerized via Docker Compose. The system centralizes company onboarding, staff account administration, vehicle inventory tracking, driver licensing logs, customer accounts, transactional trip state management, and financial trip expense ledgers.

# 2. Problem Definition

Small and medium transportation businesses (operating 5 to 50 vehicles) encounter severe operational friction, administrative delays, and financial record fragmentation due to reliance on manual spreadsheets and paper slips. Dispatchers face risks of assigning vehicles or drivers that are already on active trips or undergoing maintenance, while management lacks a centralized platform to track trip freight revenues, advance payments, and categorized trip expenses.

Current traditional management approaches fail to address these operational problems comprehensively due to the following critical limitations:

1. **Fragmented Record Keeping in Disconnected Spreadsheets:** Vehicle specifications, driver contact rosters, customer accounts, and trip logs are maintained in separate, unlinked files. This creates data silos and prevents real-time cross-verification.

2. **Lack of Real-Time Resource Availability Verification:** Dispatchers manually checking driver rosters face risks of double-booking drivers who are already assigned to active trips or assigning vehicles that are marked for maintenance.

3. **Absence of Role-Based Security & Access Controls:** Shared desktop spreadsheets lack granular role-based authorization, exposing sensitive company revenues, customer billing data, and administrative passwords to all users without role restrictions.

4. **Difficulty in Tracking Advance Payments & Trip Expenditures:** Recording trip-related expenses (FUEL, TOLL, REPAIR, FOOD, PARKING) is delayed until paper slips are manually collected, leading to delayed financial reconciliation.

5. **Input Data Formatting & Corruption Risks:** Unvalidated manual spreadsheet data entries produce malformed records (e.g., negative freight amounts, invalid email structures, or missing registration numbers).

FleetFlow is proposed as a direct, structured response to these operational gaps. By combining role-governed user access, Zod runtime schema validation, relational database modeling, and transactional trip state execution, FleetFlow provides an accessible, robust management platform.

# 3. Project Objective

The project is driven by a set of primary and secondary objectives designed to ensure the system is both technically robust and highly usable for transport operators.

## 3.1 Primary Objectives

1. **Develop a Centralized Relational Data Core:** To design and implement a structured PostgreSQL database schema mapped via Prisma ORM 7.8 to manage Company, User, Vehicle, Driver, Customer, Trip, and TripExpense entities within a single relational domain.

2. **Implement Role-Based Access Control (RBAC):** To establish a secure authentication and authorization mechanism using bcrypt password hashing and signed JWT tokens, enforcing role permissions across OWNER, MANAGER, DISPATCHER, and DRIVER roles.

3. **Build Full-Lifecycle Entity Management Modules:** To develop modular RESTful API endpoints and React user interfaces for managing vehicles, driver profiles, customer accounts, and operational company settings.

4. **Implement Transactional Trip Workflow:** To execute atomic database transactions ($transaction) during trip startup and completion, ensuring vehicle and driver statuses automatically update between AVAILABLE/ACTIVE and ON_TRIP.

5. **Incorporate Runtime Schema Validation:** To integrate Zod runtime validation schemas across all API endpoints and form inputs, ensuring incoming payloads satisfy strict data types and allowed enum constraints.

6. **Containerize Database Infrastructure:** To configure a reproducible Docker Compose environment running PostgreSQL 16 with environment-based database credentials.

## 3.2 Secondary Objectives & Expected Outcomes

1. **Deliver Executive Dashboard Aggregation:** To provide aggregated summaries displaying total trips, active dispatches, completed dispatches, available/running vehicles, active drivers, gross freight revenue, and total trip expenses.

2. **Financial Trip Expense Ledger Tracking:** To record category-wise trip expenditures (FUEL, TOLL, DRIVER, REPAIR, FOOD, PARKING, OTHER) linked directly to individual trip orders.

3. **System Validation Against Operational Scenarios:** To validate system stability, transactional state updates, and RBAC authorization guards against documented operational workflows.

# 4. Proposed Methodology

The development of FleetFlow strictly follows a phase-based engineering methodology spanning eight distinct phases. Each phase builds directly on the validated output of the previous one, forming a sequential pipeline from requirements analysis to a deployed web application.

- **Phase 1 — System Analysis and Database Modeling:** Analyzing transportation domain workflows and designing a 3rd Normal Form relational schema in schema.prisma modeling Organization/Company, User, Vehicle, Driver, Customer, Trip, and TripExpense entities.

- **Phase 2 — Authentication and Security Architecture:** Engineering user signup and login services in services/auth.service.ts, implementing bcrypt password hashing, 7-day signed JWT generation in lib/jwt.ts, and defining RBAC permission matrices in lib/permissions.ts.

- **Phase 3 — API Route and Controller Development:** Building Next.js App Router API route handlers under app/api/ for handling HTTP requests across vehicles, drivers, customers, trips, expenses, company settings, and dashboard queries.

- **Phase 4 — Validation Schema Engineering:** Constructing Zod runtime validation schemas in validators/ (signupSchema, createVehicleSchema, createDriverSchema, createTripSchema, createTripExpenseSchema) to validate incoming request bodies.

- **Phase 5 — Transactional Business Logic Implementation:** Implementing atomic database transactions (prisma.$transaction) in services/trip.service.ts to execute synchronized status updates across Trip, Vehicle, and Driver records upon trip start and completion.

- **Phase 6 — Dashboard and Analytics Aggregation:** Building backend data aggregation logic in services/dashboard.service.ts to query total trip counts, status distributions, active vehicle counts, total freight revenue, and trip expense totals.

- **Phase 7 — Containerization and Setup:** Defining docker-compose.yml to containerize the PostgreSQL 16 database service on port 5432 with isolated persistent data volumes.

- **Phase 8 — System Testing and Verification:** Testing system workflows, API endpoints, Zod schema edge cases, and RBAC permission guards against functional operational scenarios.

# 5. System Architecture and Related Concepts

The FleetFlow system is grounded in several core computer science and software engineering principles spanning web architecture, relational modeling, security, and validation.

## 5.1 Full-Stack Web Application Architecture

FleetFlow follows a client-server application architecture where Next.js App Router serves as the unified framework for rendering React UI pages and handling backend REST API route requests.

## 5.2 Relational Data Modeling with PostgreSQL and Prisma ORM

The system utilizes PostgreSQL 16 as its relational database engine, managed via Prisma ORM 7.8. Prisma provides a type-safe database client generated from schema.prisma, managing foreign-key relationships and transactional queries.

## 5.3 Password Hashing with bcrypt and JWT Authentication

User security is implemented via bcryptjs password hashing (utilizing Blowfish cipher salting) during registration and login credential verification. Authenticated sessions are managed via 7-day signed JSON Web Tokens (JWT) containing userId, companyId, and role payloads.

## 5.4 Role-Based Access Control (RBAC) Paradigm

Access control is governed by UserRole enum (OWNER, MANAGER, DISPATCHER, DRIVER) and permission maps in lib/permissions.ts, ensuring staff members can only access endpoints authorized for their assigned role.

## 5.5 Runtime Schema Validation using Zod

Incoming API request bodies are validated at runtime using Zod schemas in validators/. Schemas enforce strict type rules, string format patterns, positive number coercions, and allowed enum values.

## 5.6 Containerization with Docker Compose

The PostgreSQL 16 database environment is containerized via docker-compose.yml, establishing a reproducible database service with environment-based credentials.

## 5.7 Audit of Project Context Identifier ('Bruno')

- **Audit Search Result:** A workspace-wide search confirmed that 'Bruno' appears only in Turbopack build cache files as 'Bruno Ace' (a Google typography font asset).

- **Verification:** No backend microservice, API endpoint, or AI module named 'Bruno' exists in the source code.

- **Documentation:** Classified as an internal font asset reference / project nickname and excluded from operational system claims.

# 6. Software/Hardware Requirements and Specifications

## 6.1 Software Requirements

- **Core Environment & Language:** Node.js (v18.x / v20.x LTS) runtime, TypeScript (v5.x), npm package manager.

- **Framework & Frontend:** Next.js (v16.2), React (v19.2), Tailwind CSS (v4), Lucide React icons, Recharts.

- **Database & ORM:** PostgreSQL 16 (Docker container), Prisma ORM (v7.8), @prisma/adapter-pg, pg client.

- **Security & Validation:** bcryptjs (v3.0), jsonwebtoken (v9.0), Zod (v4.4).

- **API Specification & Tooling:** swagger-jsdoc (v6.3), swagger-ui-react (v5.32).

## 6.2 Hardware Requirements

- **Minimum Development Specifications:** Dual-Core 2.0 GHz x86-64 / ARM64 processor, 4 GB RAM, 10 GB available storage.

- **Recommended Specifications:** Quad-Core 3.0 GHz processor, 8 GB or 16 GB RAM, 25 GB SSD storage.

- **Client User Workstation:** Single-Core 1.5 GHz processor, 2 GB RAM, modern web browser (Chrome, Firefox, Edge, Safari).

## 6.3 Infrastructure and Deployment Specifications

PostgreSQL 16 is deployed via Docker Compose (docker-compose.yml) running on port 5432 with isolated volume storage. Environment configuration is managed via environment variables.

# 7. Module Description

The FleetFlow architecture is highly modularized, ensuring clean separation of concerns, testability, and maintainability. The system is divided into eight primary software modules.

### Module Summary Overview

| Module | Primary Responsibility | Inputs | Outputs |
| --- | --- | --- | --- |
| Module 1: Auth & Registration | Company registration, owner signup, login, bcrypt hashing & JWT token issuance | Company info, user credentials | JWT token, company & user objects |
| Module 2: User & RBAC Management | Staff account creation, role assignment (OWNER, MANAGER, DISPATCHER, DRIVER) & permission checks | Employee details, assigned role | User directory, updated role permissions |
| Module 3: Vehicle Management | Commercial vehicle inventory CRUD, technical specs, fuel types & status tracking | Registration plate, VIN, specs, status | Vehicle directory, status indicators |
| Module 4: Driver Management | Driver profiles, license numbers, expiry dates, emergency contacts & duty status tracking | Driver details, license info, status | Driver directory list, duty status |
| Module 5: Customer Management | Customer account CRUD, billing details, GST numbers & contact management | Customer name, company, tax info | Customer account records |
| Module 6: Trip Dispatch & Transactions | Trip creation, vehicle/driver linking, pricing & atomic status updates via $transaction | Route info, freight pricing, IDs | Dispatch board, synchronized statuses |
| Module 7: Trip Expense Management | Category-wise expense recording (FUEL, TOLL, REPAIR, etc.) linked to trips | Expense category, amount, date | Trip expense ledger |
| Module 8: Dashboard Analytics | Parallel Prisma query aggregation for total trips, active vehicles, revenue & expenses | Company ID context | Executive metrics & recent trip lists |

## Module 1: Authentication & Company Registration Module

- **Responsibility:** Handles company registration and staff authentication. Validates signup payloads, hashes passwords using bcrypt, creates Company and User records, and generates 7-day signed JWT tokens.

- **Detailed Inputs:** Company name, phone, email, password, owner name, address, and GST number.

- **Detailed Outputs:** Authenticated session object containing JWT bearer token, company profile, and sanitized user object.

- **Core Operations Executed:** signup() in auth.service.ts validates signupSchema (Zod), hashes password via bcrypt.hash, creates Company and User records, and generates JWT via generateToken().

## Module 2: User Management & Authorization (RBAC) Module

- **Responsibility:** Administers employee accounts and enforces Role-Based Access Control (RBAC) across OWNER, MANAGER, DISPATCHER, and DRIVER roles.

- **Detailed Inputs:** Staff member name, email, password, and assigned UserRole enum.

- **Detailed Outputs:** Created employee user record, updated user directory list, and role permission guards.

- **Core Operations Executed:** createUser() checks PERMISSIONS.MANAGE_USERS in permissions.ts, hashes password, and creates user linked to companyId.

## Module 3: Vehicle Inventory Management Module

- **Responsibility:** Tracks fleet motor vehicles, technical specifications, fuel types, mileage, and operational statuses.

- **Detailed Inputs:** Registration number, manufacturer, model, year, vehicleType, fuelType (DIESEL, PETROL, CNG, LNG, ELECTRIC), capacity, currentOdometer, and expiry dates.

- **Detailed Outputs:** Vehicle records, inventory table, and VehicleStatus indicators (AVAILABLE, ON_TRIP, MAINTENANCE, OUT_OF_SERVICE).

- **Core Operations Executed:** createVehicle() in vehicle.service.ts validates createVehicleSchema (Zod) and manages CRUD persistence.

## Module 4: Driver Management Module

- **Responsibility:** Manages driver profiles, driving license numbers, license expiry dates, emergency contacts, and duty states.

- **Detailed Inputs:** Driver name, email, phone, licenseNumber, licenseExpiry, address, emergency contact, and bloodGroup.

- **Detailed Outputs:** Driver directory, licensing records, and DriverStatus indicators (ACTIVE, ON_TRIP, ON_LEAVE, INACTIVE).

- **Core Operations Executed:** createDriver() in driver.service.ts validates createDriverSchema (Zod) and updates driver records.

## Module 5: Customer Management Module

- **Responsibility:** Manages customer company profiles, billing emails, phone numbers, addresses, and GST tax numbers.

- **Detailed Inputs:** Customer contact name, company name, phone, email, gstNumber, and address.

- **Detailed Outputs:** Customer directory list and account profile records.

- **Core Operations Executed:** createCustomer() in customer.service.ts validates createCustomerSchema (Zod) and links customer to companyId.

## Module 6: Trip Dispatch & Transactional Management Module

- **Responsibility:** Orchestrates trip creation, vehicle/driver allocation, pickup/delivery routing, freight pricing, and atomic status updates.

- **Detailed Inputs:** customerId, driverId, vehicleId, pickupAddress, deliveryAddress, freightAmount, advanceReceived, and expectedDeliveryDate.

- **Detailed Outputs:** Trip order records, dispatch board data, and TripStatus indicators (CREATED, ASSIGNED, STARTED, IN_TRANSIT, DELIVERED, COMPLETED, CANCELLED).

- **Core Operations Executed:** startTrip() and completeTrip() in trip.service.ts execute prisma.$transaction to atomically update Trip status, Vehicle status (AVAILABLE <-> ON_TRIP), and Driver status (ACTIVE <-> ON_TRIP).

## Module 7: Trip Expense Management Module

- **Responsibility:** Records and categorizes trip-related expenditures linked directly to individual trip orders.

- **Detailed Inputs:** tripId, ExpenseType enum (FUEL, TOLL, DRIVER, REPAIR, FOOD, PARKING, OTHER), amount, title, and expenseDate.

- **Detailed Outputs:** Categorized trip expense records and trip expense totals.

- **Core Operations Executed:** createTripExpense() in trip-expense.service.ts validates createTripExpenseSchema (Zod) and creates TripExpense records.

## Module 8: Executive Dashboard & Analytics Module

- **Responsibility:** Aggregates operational fleet counts, vehicle statuses, driver availability, completed trips, total freight revenue, total trip expenses, and recent dispatches.

- **Detailed Inputs:** Authenticated user companyId context.

- **Detailed Outputs:** Aggregated dashboard metrics JSON object and recent trip lists.

- **Core Operations Executed:** getDashboard() in dashboard.service.ts executes parallel Prisma count, sum, and findMany queries.

# 8. Data Flow Diagram (DFD) & Use Case Diagram

## 8.1 Data Flow Diagrams

Level 0 Context Diagram: Illustrates FleetFlow as a unified process engine interacting with external entities and persistent database storage.

```
                   +---------------------------------------+
                   |           FLEET OPERATOR              |
                   | (Owner / Manager / Dispatcher / Driver)|
                   +---------------------------------------+
                     |  |  ^                       ^  |
  Login Credentials  |  |  | Auth Token            |  | Operational
  & Entity Inputs    |  |  | & Dashboard Summaries |  | Data Queries
                     v  |  |                       |  v
          +---------------------------------------------------+
          |                                                   |
          |       0.0 FLEETFLOW SYSTEM PROCESS ENGINE         |
          |   (Auth, JWT, RBAC, Zod Validation, Transactions) |
          |                                                   |
          +---------------------------------------------------+
                     |  ^                       |  ^
   Create / Update   |  | Fetch Records         |  | Read Analytics
   Operational Data  v  |                       v  |
          +---------------------------------------------------+
          | D1 POSTGRESQL DATABASE                            |
          | (Vehicles, Drivers, Trips, Expenses, Users)       |
          +---------------------------------------------------+
```

*Figure 8.1: Level 0 Context Data Flow Diagram (DFD)*

- **External Entity 1: Fleet Operator (User):** Sends login credentials and operational inputs (vehicle details, driver info, trip orders, expenses) into FleetFlow. Receives authentication tokens, dashboard summaries, and query results.

- **Process 0.0: FleetFlow System Process Engine:** Handles JWT authentication, RBAC permission checks, Zod input validation, business logic, and transactional state execution.

- **Data Store D1: PostgreSQL Database:** Stores persistent relational data for Company, User, Vehicle, Driver, Customer, Trip, and TripExpense entities.

## 8.2 Use Case Diagram

The system architecture defines four primary roles interacting with system use cases.

```
                     +-----------------------------------+
                     |        FLEETFLOW SYSTEM           |
                     +-----------------------------------+
                     |                                   |
         (Owner) ----> ( [UC1] Register Company & Users) |
           |         |                                   |
           +---------> ( [UC2] Manage Vehicles )         | <--- (Manager)
           |         |                                   |         |
           |         | ( [UC3] Manage Drivers ) ---------+---------+
           |         |                                   |         |
           |         | ( [UC4] Dispatch & Start Trips ) -+---------+ <--- (Dispatcher)
           |         |                                   |                      |
           +---------> ( [UC5] Manage Customers ) -------+----------------------+
           |         |                                   |
           +---------> ( [UC6] Record Trip Expenses ) ---+ <--- (Driver)
           |         |                                   |         |
           +---------> ( [UC7] View Dashboard Analytics) +---------+
                     |                                   |
                     +-----------------------------------+
```

*Figure 8.2: Use Case Diagram for FleetFlow System*

- **System Actors:** Owner (Full admin access), Manager (Vehicle/Driver/Trip management), Dispatcher (Customer/Trip dispatch management), Driver (Trip execution & expense logging).

- **UC-01: Register Company & Users:** Owner registers transport company profile and adds employee accounts.

- **UC-02: Manage Vehicles:** Owner and Manager add, update, and monitor fleet motor vehicles.

- **UC-03: Manage Drivers:** Owner and Manager add driver profiles and track driving license expirations.

- **UC-04: Dispatch & Start Trips:** Dispatcher creates trips and triggers startTrip transactions.

- **UC-05: Manage Customers:** Dispatcher and Manager maintain customer accounts.

- **UC-06: Record Trip Expenses:** Driver and staff record category-wise trip expenses.

- **UC-07: View Dashboard Analytics:** Authorized users view aggregated fleet counts, revenue, and expense summaries.

## 8.3 High-Level Domain Class Diagram & ER Diagram

Entity-Relationship (ER) Diagram: Mapped directly from schema.prisma showing Company as the organizational root linked to all entities.

```
                 +------------------+
                 |     COMPANY      |
                 |------------------|
                 | PK  id           |
                 |     name         |
                 |     phone        |
                 +------------------+
                   |  |  |  |  |  |
      +------------+  |  |  |  |  +------------+
      |               |  |  |  |               |
      v               v  |  v  v               v
+------------+  +--------+  +--------+  +--------------+
|    USER    |  |VEHICLE |  | DRIVER |  |   CUSTOMER   |
|------------|  |--------|  |--------|  |--------------|
|PK id       |  |PK id   |  |PK id   |  |PK id         |
|FK companyId|  |status  |  |status  |  |   companyName|
+------------+  +--------+  +--------+  +--------------+
                    |           |            |
                    +-----+     |     +------+
                          |     |     |
                          v     v     v
                       +------------------+
                       |       TRIP       |
                       |------------------|
                       | PK  id           |
                       | FK  customerId   | <---+
                       | FK  vehicleId    |     |
                       | FK  driverId     |     |
                       | FK  companyId    |     |
                       |     freightAmount|     |
                       |     status       |     |
                       +------------------+     |
                                |               |
                                | 1:N           |
                                v               |
                       +------------------+     |
                       |   TRIP EXPENSE   |     |
                       |------------------|     |
                       | PK  id           |     |
                       | FK  tripId ------+-----+
                       | FK  companyId    |
                       |     type         |
                       |     amount       |
                       +------------------+
```

*Figure 8.3: High-Level Entity-Relationship (ER) Diagram*

## 8.4 Database Schema Description

### Table 8.1: User Entity Database Schema

| Field Name | Data Type | Constraints | Description |
| --- | --- | --- | --- |
| id | String (CUID) | Primary Key | Unique user identifier |
| name | String | Not Null | User full name |
| email | String | Unique, Not Null | Account login email |
| password | String | Not Null | bcrypt hashed password |
| role | UserRole Enum | Default OWNER | OWNER / MANAGER / DISPATCHER / DRIVER |
| companyId | String | FK -> Company.id | Associated company reference |
| createdAt | DateTime | Default now() | Record creation timestamp |
| updatedAt | DateTime | Updated automatically | Record modification timestamp |

### Table 8.2: Vehicle Entity Database Schema

| Field Name | Data Type | Constraints | Description |
| --- | --- | --- | --- |
| id | String (CUID) | Primary Key | Unique vehicle identifier |
| registrationNumber | String | Unique, Not Null | Plate registration number |
| manufacturer | String | Not Null | Vehicle maker (e.g. Tata, Leyland) |
| model | String | Not Null | Model name |
| year | Int | Not Null | Manufacturing year |
| vehicleType | String | Not Null | Vehicle type description |
| fuelType | FuelType Enum | Not Null | DIESEL/PETROL/CNG/LNG/ELECTRIC |
| capacity | Float | Not Null | Payload weight capacity |
| currentOdometer | Int | Default 0 | Odometer mileage reading |
| vin | String | Nullable | Vehicle Identification Number |
| status | VehicleStatus Enum | Default AVAILABLE | AVAILABLE/ON_TRIP/MAINTENANCE/OUT_OF_SERVICE |
| companyId | String | FK -> Company.id | Associated company reference |

### Table 8.3: Driver Entity Database Schema

| Field Name | Data Type | Constraints | Description |
| --- | --- | --- | --- |
| id | String (CUID) | Primary Key | Unique driver identifier |
| name | String | Not Null | Driver full name |
| email | String | Unique, Nullable | Driver email address |
| phone | String | Not Null | Contact phone number |
| licenseNumber | String | Unique, Not Null | Driving license identifier |
| licenseExpiry | DateTime | Not Null | License expiration date |
| status | DriverStatus Enum | Default ACTIVE | ACTIVE/ON_TRIP/ON_LEAVE/INACTIVE |
| companyId | String | FK -> Company.id | Associated company reference |

### Table 8.4: Customer Entity Database Schema

| Field Name | Data Type | Constraints | Description |
| --- | --- | --- | --- |
| id | String (CUID) | Primary Key | Unique customer identifier |
| name | String | Not Null | Customer contact name |
| companyName | String | Nullable | Customer company name |
| phone | String | Not Null | Contact phone number |
| email | String | Nullable | Customer email address |
| gstNumber | String | Nullable | Tax registration GST number |
| companyId | String | FK -> Company.id | Associated company reference |

### Table 8.5: Trip Entity Database Schema

| Field Name | Data Type | Constraints | Description |
| --- | --- | --- | --- |
| id | String (CUID) | Primary Key | Unique trip identifier |
| tripNumber | String | Unique, Not Null | Generated trip code (e.g. TRIP-172630) |
| customerId | String | FK -> Customer.id | Associated customer reference |
| driverId | String | FK -> Driver.id | Assigned driver reference |
| vehicleId | String | FK -> Vehicle.id | Assigned vehicle reference |
| pickupAddress | String | Not Null | Pickup origin location |
| deliveryAddress | String | Not Null | Delivery destination location |
| freightAmount | Decimal | Not Null | Total freight revenue amount |
| advanceReceived | Decimal | Default 0 | Advance payment received |
| status | TripStatus Enum | Default CREATED | CREATED/ASSIGNED/STARTED/IN_TRANSIT/DELIVERED/COMPLETED/CANCELLED |
| companyId | String | FK -> Company.id | Associated company reference |

### Table 8.6: TripExpense Entity Database Schema

| Field Name | Data Type | Constraints | Description |
| --- | --- | --- | --- |
| id | String (CUID) | Primary Key | Unique expense identifier |
| tripId | String | FK -> Trip.id | Associated trip reference |
| companyId | String | FK -> Company.id | Associated company reference |
| type | ExpenseType Enum | Not Null | FUEL/TOLL/DRIVER/REPAIR/FOOD/PARKING/OTHER |
| amount | Decimal | Not Null | Expense monetary amount |
| title | String | Nullable | Expense description/title |
| expenseDate | DateTime | Not Null | Expense date |

# 9. Applications / Advantages / Limitations / Cost

## 9.1 Applications

- **Small & Medium Transport Businesses:** Centralizing vehicle, driver, customer, and trip operations for fleets operating 5 to 50 vehicles.

- **Regional Freight & Goods Carriers:** Coordinating freight dispatches, pickup/delivery addresses, advance payments, and trip expense ledgers.

- **Logistics Operators:** Maintaining role-governed staff access, tracking vehicle statuses, and managing driver license expirations.

- **Academic Demonstration:** Providing an exemplar full-stack Next.js/PostgreSQL web application for software engineering coursework.

## 9.2 Advantages of the Proposed System

- **Centralized Operations without Data Silos:** Replaces fragmented Excel workbooks with a single relational database store.

- **Role-Based Security & Access Control:** Restricts administrative actions across OWNER, MANAGER, DISPATCHER, and DRIVER roles.

- **Transactional State Integrity:** Automatically synchronizes vehicle and driver statuses during trip execution using Prisma transactions.

- **Strict Runtime Input Validation:** Utilizes Zod schemas to validate incoming data against type and enum rules.

- **Zero-License Open-Source Stack:** Built entirely upon open-source software tools (Next.js, React, Node.js, Prisma, PostgreSQL, Docker).

## 9.3 Limitations

- **External Telematics Hardware Dependency:** External telematics and GPS hardware integration is not included in the current version.

- **Manual Expense Slips:** Automated optical character recognition (OCR) scanning for paper receipts is not included in the current version.

- **Scope Bound to Web Platform:** Application operates as a responsive web platform; native mobile apps are designated for future work.

## 9.4 Proposed Cost Estimation

The project cost is separated into actual Academic Development Expenditure and optional Commercial Cloud Hosting Estimates.

### Table 9.1: Academic Development Cost Summary

| Item Category | Description | Cost (INR) |
| --- | --- | --- |
| Software Frameworks | Next.js, React, Node.js, Prisma, PostgreSQL (Open Source) | ₹ 0.00 |
| Database Engine | Docker Desktop & PostgreSQL 16 (Open Source) | ₹ 0.00 |
| Documentation & Printing | Synopsis printouts, binding, academic reporting | ₹ 1,500.00 |
| Development Hardware | Existing Student Workstations | ₹ 0.00 |
| Total Academic Cost | Final Academic Expenditure | ₹ 1,500.00 |

### Table 9.2: Optional Commercial Cloud Deployment Cost (Annual Estimate)

| Infrastructure Component | Specifications | Estimated Cost / Year (INR) |
| --- | --- | --- |
| Cloud App Hosting | Vercel / AWS EC2 App Server | ₹ 18,000.00 |
| Managed Database | AWS RDS for PostgreSQL (db.t4g.micro) | ₹ 15,000.00 |
| Domain & SSL Certificate | Custom Domain Name & Automated SSL | ₹ 1,200.00 |
| Total Deployment Cost | Estimated Annual Commercial Cloud Hosting | ₹ 34,200.00 |

# 10. References

The technical concepts, relational database design, security architecture, and evaluation criteria for the FleetFlow project are informed by formal academic research papers, standardized software specifications, and authoritative documentation:

## Academic and Technical Sources:

[1] Crainic, T.G., Laporte, G., and Toth, P. (2021). Modern architectures in fleet management and freight logistics. Transportation Science, 55(2), 288-305.

[2] Stefansson, G. and Lumsden, K. (2018). Performance metrics and role-based access control in logistics information systems. International Journal of Physical Distribution & Logistics Management, 48(7), 710-726.

[3] Basu, R., Sharma, S., and Varma, P. (2022). Evaluating modern JavaScript Web frameworks for enterprise operational applications. IEEE Transactions on Software Engineering, 48(9), 3450-3464.

[4] Goodchild, A., McCormack, E., and Fowler, N.M. (2020). Digital expense auditing and telematics integration in commercial transport. Journal of Business Logistics, 41(4), 312-327.

## Frameworks and Technical Specifications:

[5] Next.js Documentation (2026). App Router conventions, server components, and API routing. Vercel. Available Online: https://nextjs.org/docs

[6] Prisma Documentation (2026). TypeScript ORM, relational data modeling, and schema migrations. Prisma Data Services. Available Online: https://www.prisma.io/docs

[7] Zod Documentation (2026). TypeScript-first schema validation with static type inference. Available Online: https://zod.dev

[8] PostgreSQL Global Development Group (2025). PostgreSQL 16.0 Documentation: Relational Data Integrity and Transaction Processing. Available Online: https://www.postgresql.org/docs/

## Tooling and Security Specifications:

[9] bcryptjs Specification (2025). Password hashing library based on Blowfish cipher salting. Available Online: https://github.com/dcodeIO/bcrypt.js

[10] JSON Web Token (JWT) Specification (RFC 7519). Compact, URL-safe means of representing claims to be transferred between two parties. IETF.

[11] Docker Documentation (2025). Docker Compose Specification for multi-container application deployment. Available Online: https://docs.docker.com/compose/
