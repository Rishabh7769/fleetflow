# FleetFlow Database Design

# ==========================================
# CORE
# ==========================================

## Company

Purpose:
Represents one transport company using FleetFlow.

Fields

- id
- name
- phone
- email
- website

- address
- city
- state
- country
- postalCode

- gstNumber
- panNumber

- logoUrl

- timezone
- currency

- subscriptionPlan
- subscriptionStatus

- maxUsers
- maxVehicles

- isActive

- createdAt
- updatedAt

Relationships

Company
├── Users
├── Vehicles
├── Drivers
├── Customers
├── Trips
├── Expenses
├── Fuel Logs
├── Maintenance
├── Invoices
├── Payments
├── Notifications
├── Audit Logs
└── Attachments

--------------------------------------------

## User

Purpose:
Employees of the company.

Roles

- OWNER
- ADMIN
- MANAGER
- DISPATCHER
- ACCOUNTANT
- DRIVER

Fields

- id
- employeeId

- firstName
- lastName

- email
- password

- phone

- avatar

- role

- lastLogin

- isActive

- companyId

- createdAt
- updatedAt

--------------------------------------------

# ==========================================
# VEHICLES
# ==========================================

## Vehicle

Basic

- id

- registrationNumber

- manufacturer

- model

- year

- vehicleType

- bodyType

- axleCount

Technical

- engineNumber

- chassisNumber

- vin

Fuel

- fuelType

- fuelTankCapacity

- averageMileage

- expectedMileage

- currentOdometer

Insurance

- insuranceCompany

- insuranceNumber

- insuranceExpiry

Permit

- permitNumber

- permitExpiry

Fitness

- fitnessExpiry

PUC

- pucExpiry

GPS

- gpsDeviceId

- lastLatitude

- lastLongitude

- lastLocation

AI Ready

- healthScore

- efficiencyScore

- riskScore

- idleHours

- runningHours

- totalTrips

- totalDistance

- totalFuelConsumed

Status

- AVAILABLE

- ON_TRIP

- MAINTENANCE

- OUT_OF_SERVICE

Relationships

Vehicle

├── Trips

├── Fuel Logs

├── Maintenance

├── Documents

└── Company

--------------------------------------------

## VehicleDocument

Fields

- id

- vehicleId

- type

- number

- issueDate

- expiryDate

- issuingAuthority

- fileUrl

- uploadedBy

- uploadedAt

--------------------------------------------

## Maintenance

Fields

- id

- vehicleId

- maintenanceType

- workshop

- serviceDate

- nextServiceDate

- currentOdometer

- nextServiceOdometer

- cost

- notes

AI

- predictedFailure

- predictedServiceDate

--------------------------------------------

## Fuel Log

Fields

- id

- vehicleId

- driverId

- tripId

- pumpName

- latitude

- longitude

- odometer

- liters

- pricePerLiter

- totalCost

- receiptNumber

- receiptImage

AI

- expectedMileage

- actualMileage

- fuelEfficiency

- theftProbability

--------------------------------------------

# ==========================================
# DRIVERS
# ==========================================

## Driver

Personal

- id

- employeeId

- firstName

- lastName

- gender

- bloodGroup

- profilePhoto

Contact

- phone

- email

- emergencyContactName

- emergencyContactPhone

Address

- address

- city

- state

- country

Employment

- joiningDate

- designation

- salary

- salaryType

Driving License

- licenseNumber

- licenseClass

- issueDate

- expiryDate

Medical

- medicalCertificate

- medicalExpiry

Verification

- aadhaarNumber

- panNumber

- policeVerification

Performance

- totalTrips

- totalDistance

- totalDrivingHours

- averageMileage

- averageSpeed

- harshBraking

- harshAcceleration

- overspeed

- accidentCount

AI

- driverScore

- fatigueScore

- safetyScore

- riskScore

Relationships

Driver

├── Trips

├── Fuel Logs

├── Documents

└── Company

--------------------------------------------

# ==========================================
# CUSTOMERS
# ==========================================

## Customer

Fields

- id

- companyName

- contactPerson

- phone

- email

- website

Address

- address

- city

- state

- country

Business

- gstNumber

- panNumber

Finance

- creditLimit

- outstandingBalance

- paymentTerms

Analytics

- totalTrips

- totalRevenue

- averagePaymentDays

Relationships

Customer

├── Trips

├── Invoices

└── Company

--------------------------------------------

# ==========================================
# TRIPS
# ==========================================

## Trip

Basic

- id

- tripNumber

Assignment

- company

- customer

- vehicle

- driver

Route

- pickupAddress

- pickupLatitude

- pickupLongitude

- dropAddress

- dropLatitude

- dropLongitude

Distance

- plannedDistance

- actualDistance

Cargo

- loadType

- cargoWeight

- cargoValue

Schedule

- scheduledStart

- actualStart

- scheduledEnd

- actualEnd

Finance

- revenue

- estimatedFuelCost

- actualFuelCost

- estimatedToll

- actualToll

- estimatedExpense

- actualExpense

- estimatedProfit

- actualProfit

Status

- CREATED

- ASSIGNED

- IN_PROGRESS

- COMPLETED

- CANCELLED

GPS

- currentLatitude

- currentLongitude

AI

- delayPrediction

- routeEfficiency

- fuelEfficiency

- riskScore

Relationships

Trip

├── Vehicle

├── Driver

├── Customer

├── Fuel Logs

├── Expenses

├── Invoice

├── Attachments

└── Company

--------------------------------------------

# ==========================================
# FINANCE
# ==========================================

## Expense

Fields

- id

- type

- amount

- description

- tripId

- createdBy

--------------------------------------------

## Invoice

Fields

- id

- invoiceNumber

- customer

- trip

- amount

- tax

- total

- dueDate

- status

--------------------------------------------

## Payment

Fields

- id

- invoice

- amount

- method

- referenceNumber

- paymentDate

- status

--------------------------------------------

# ==========================================
# FILES
# ==========================================

## Attachment

Fields

- id

- fileName

- fileType

- fileSize

- fileUrl

- uploadedBy

- tripId

- vehicleId

- driverId

--------------------------------------------

# ==========================================
# SYSTEM
# ==========================================

## Notification

Fields

- id

- title

- message

- type

- userId

- isRead

--------------------------------------------

## Audit Log

Fields

- id

- userId

- action

- module

- recordId

- ipAddress

- userAgent

- createdAt

--------------------------------------------

# ==========================================
# AI
# ==========================================

## Fleet Intelligence

Future AI Features

- Fuel Theft Detection

- Predictive Maintenance

- Driver Risk Analysis

- Fleet Health Score

- Profit Prediction

- Delay Prediction

- Route Optimization

- Revenue Forecast

- Fleet Assistant (LLM)

- OCR Fuel Receipt

- OCR POD

- OCR Invoice

- AI Chat