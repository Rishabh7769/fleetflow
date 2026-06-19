# FleetFlow Database Design

## Company

- id
- name
- gstNumber
- email
- phone
- address
- createdAt

---

## User

- id
- companyId
- name
- email
- password
- role

---

## Vehicle

- id
- companyId
- vehicleNumber
- manufacturer
- model
- fuelType
- purchaseYear
- insuranceExpiry
- fitnessExpiry
- status

---

## Driver

- id
- companyId
- name
- phone
- licenseNumber
- joiningDate
- status

---

## Trip

- id
- companyId
- vehicleId
- driverId
- source
- destination
- loadDescription
- distance
- departureTime
- arrivalTime
- status

---

## FuelLog

- id
- tripId
- vehicleId
- litres
- amount
- odometer
- fuelStation
- createdAt

---

## Maintenance

- id
- vehicleId
- serviceType
- cost
- workshop
- serviceDate
- nextServiceDate
