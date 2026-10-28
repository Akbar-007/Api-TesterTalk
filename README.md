# Playwright JavaScript API Automation Testing

## Project Overview
This project contains API automation tests built using **Playwright and JavaScript**. It demonstrates how to test REST APIs by sending HTTP requests and validating responses.

## Technologies Used
- JavaScript
- Playwright
- Node.js
- REST API Testing

## API Test Scenarios
- **POST:** Create a new booking.
- **GET:** Retrieve booking details.
- **GET with Query Parameters:** Search bookings using parameters.
- **PUT:** Update complete booking details.
- **PATCH:** Update selected booking fields.
- **DELETE:** Delete a booking.
- **Authentication:** Generate and use an authentication token.

## Project Structure
- `tests/` — API automation test scripts.
- `test-data/` — Request body JSON files.
- `utils/` — Reusable utility functions.
- `playwright.config.js` — Playwright configuration.
- `.github/workflows/` — GitHub Actions workflow.

## How to Run the Tests

### 1. Clone the repository
```bash
git clone https://github.com/Akbar-007/Api-TesterTalk.git
```

### 2. Open the project directory
```bash
cd Api-TesterTalk
```

### 3. Install dependencies
```bash
npm ci
```

### 4. Run all tests
```bash
npx playwright test
```

### 5. View the HTML report
```bash
npx playwright show-report
```

## Learning Objectives
- Understand REST API automation using Playwright.
- Practice HTTP methods and authentication.
- Validate API responses and status codes.
- Organize API tests using reusable utilities and test data.

## Author
**Akbar**

GitHub: [Akbar-007](https://github.com/Akbar-007)
