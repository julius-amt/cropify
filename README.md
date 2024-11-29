# Cropify - Empowering Farmers with AI Solutions

**Cropify** is a forward-thinking agricultural platform that aims to revolutionize the farming industry through innovative artificial intelligence tools. By leveraging AI technology, Cropify assists farmers in enhancing their productivity and decision-making processes. This platform features two primary tools: **AgroAssist** and **AgroAdvisor**. These tools provide personalized, real-time support for farmers worldwide—whether they are managing small local farms or operating on a global scale.

## Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
    - [AgroAssist](#agroassist)
    - [AgroAdvisor](#agroadvisor)
3. [Project Structure](#project-structure)
4. [Installation](#installation)
5. [Usage](#usage)
6. [Contributing](#contributing)
7. [License](#license)

## Introduction

**Cropify** is designed to empower farmers by providing them with the knowledge and tools necessary to make informed decisions at every stage of the farming process. The platform is tailored to help both local and global farmers improve their practices, ultimately leading to higher crop yields, sustainable agricultural methods, and greater profitability.

The core of the Cropify platform consists of two powerful AI-driven features:

-   **AgroAssist**: A smart AI chatbot that helps farmers by answering questions, providing advice, and offering support on a wide range of agricultural topics.
-   **AgroAdvisor**: An AI model that gives tailored, actionable recommendations during cultivation periods, integrating real-time weather forecasts, crop growth insights, and advice on pest control, irrigation, and fertilization.

Both features are built with the understanding that farming can be a difficult and complex task, and Cropify seeks to alleviate this burden through automation, machine learning, and personalized support.

**Placeholder for Screenshot: Cropify Overview**

---

## Features

### AgroAssist - AI-Powered Chatbot for Farmers

**AgroAssist** is a highly interactive, AI-powered chatbot that is at the core of Cropify's service. It serves as a virtual assistant for farmers, capable of providing quick responses and in-depth advice on agricultural issues. Whether it’s a question about crop rotation, pest management, or irrigation techniques, AgroAssist is designed to make farming knowledge more accessible.

**Key Features of AgroAssist**:

-   **Real-Time Conversational AI**: Farmers can engage in interactive chats with the AI, asking questions and receiving advice in real-time.
-   **Personalized Farming Advice**: AgroAssist uses location and crop-specific data to offer tailored solutions for farming challenges.
-   **Local and Global Agricultural Knowledge**: The chatbot has access to a vast knowledge database, covering both local farming practices and global agricultural trends.
-   **Quick Responses to Common Queries**: Frequently asked questions (FAQs) and general farming advice are provided instantly, saving farmers time and effort.
-   **User-Friendly Interface**: Designed for ease of use, AgroAssist provides an intuitive conversational interface that can be accessed by farmers of all technological backgrounds.

**Placeholder for Screenshot: AgroAssist Chat Interface**

---

### AgroAdvisor - AI Model for Agricultural Cultivation Support

**AgroAdvisor** is a sophisticated AI model designed to assist farmers during the crucial cultivation periods. It integrates data such as weather forecasts, pest control insights, and optimal crop management practices to offer tailored guidance at different stages of crop growth.

**Key Features of AgroAdvisor**:

-   **AI-Powered Insights**: Based on the crop’s growth stage and local conditions, AgroAdvisor offers actionable advice on the best practices for crop care, including fertilization, irrigation, and pest management.
-   **Localized Weather Forecasts**: AgroAdvisor integrates up-to-date weather forecasts, providing farmers with the crucial weather information they need to make informed decisions about irrigation, planting, and harvest.
-   **Pest Control Guidance**: The model helps farmers identify potential threats from pests or diseases, offering guidance on effective control methods.
-   **Optimal Harvesting Times**: AgroAdvisor can help farmers determine the best times to harvest based on environmental conditions and crop growth, ensuring maximum yield and quality.
-   **Tailored Recommendations**: Every piece of advice is tailored to the farmer’s specific location, crops, and growing conditions, allowing for a more precise and effective farming strategy.

Together, AgroAssist and AgroAdvisor form the heart of Cropify’s mission: to empower farmers with intelligent, data-driven tools that enable them to grow smarter today, securing better yields for tomorrow.

**Placeholder for Screenshot: AgroAdvisor Interface**

---

## Project Structure

The project follows a well-structured directory layout, designed to organize various components and functionalities efficiently. Below is an overview of the project structure:

```
├── app
│   ├── (advisor)                    # Contains pages and layout for AgroAdvisor
│   │   ├── agro-advisor
│   │   │   └── page.jsx             # AgroAdvisor feature page (AI model page)
│   │   └── layout.tsx               # Layout for AgroAdvisor section
│   ├── agro-scan                    # AgroScan feature page
│   │   └── page.jsx
│   ├── api
│   │   ├── agro-advisor             # API routes for AgroAdvisor (Data and recommendations)
│   │   ├── auth                     # Authentication-related API routes
│   │   ├── chat                     # Chat-related API routes (AgroAssist)
│   │   ├── _lib                     # Helper functions for API (authentication, DB, etc.)
│   │   ├── _models                  # Database models for user and chat data
│   │   └── weather                  # Weather data API route
│   ├── (auth)                       # Authentication pages for login, signup, password reset
│   ├── _components                  # Reusable components (buttons, chat widgets, weather widgets)
│   ├── _context                     # React context for state management
│   ├── favicon.ico                  # Favicon
│   ├── globals.css                  # Global styles for the application
│   ├── layout.tsx                   # Main layout for the application
│   └── page.tsx                     # Homepage
├── middleware.ts                    # Middleware for user authentication and routing
├── next.config.ts                   # Configuration for the Next.js framework
├── package.json                     # Contains project dependencies and NPM scripts
├── tailwind.config.ts               # Tailwind CSS configuration
└── tsconfig.json                    # TypeScript configuration
```

**Placeholder for Screenshot: Project Structure Overview**

---

## Installation

To get started with **Cropify**, follow the instructions below to set up the project on your local machine.

### Prerequisites

Ensure that you have the following installed before proceeding:

-   **Node.js**: Version 16.x or higher is recommended.
-   **npm** or **yarn**: For managing project dependencies.
-   **MongoDB**: Cropify uses MongoDB for database management, so ensure you have an instance of MongoDB running locally or use a cloud-based solution.

### Steps to Install

1. **Clone the repository**:

    ```bash
    git clone https://github.com/julius-amt/cropify.git
    cd cropify
    ```

2. **Install project dependencies**:

    ```bash
    npm install
    # or if you use yarn
    yarn install
    ```

3. **Set up environment variables**:
   Create a `.env.local` file and add the following variables:

    ```env
    MONGODB_URI=your-mongodb-uri
    NEXT_PUBLIC_API_URL=http://localhost:3000/api
    ```

4. **Run the development server**:

    ```bash
    npm run dev
    # or if you use yarn
    yarn dev
    ```

    Once the server is running, the application will be accessible at `http://localhost:3000`.

**Placeholder for Screenshot: Local Development Server Running**

---

## Usage

Once the app is up and running, you can begin exploring its core features.

### AgroAssist (Chatbot)

To interact with **AgroAssist**, click on the chatbot interface and start a conversation. You can ask questions related to farming, pest control, irrigation, or crop management, and AgroAssist will respond with relevant, AI-driven advice.

**Placeholder for Screenshot: AgroAssist Chat in Action**

---

### AgroAdvisor (Cultivation Support)

For tailored agricultural advice during the growing season, navigate to the **AgroAdvisor** section. The platform will provide specific recommendations based on your crop type, local weather conditions, and growth stage. This includes insights on the best time for planting, irrigation practices, pest control, and more.

**Placeholder for Screenshot: AgroAdvisor Recommendations**

---

### Authentication

Users can sign up, log in, and reset their passwords through the authentication pages. Once logged in, users gain access to personalized farming assistance through **AgroAssist** and **AgroAdvisor**.

**Placeholder for Screenshot: Authentication Page**

---

## Contributing

We welcome contributions to the **Cropify** project! If you’d like to help improve the platform, follow these steps:

1. **Fork the repository**.
2. **Create a new branch**: `git checkout -b feature/your-feature`
3. **Make your changes** and commit them: `git commit -am 'Add new feature'`
4. **Push your changes**: `git push origin feature/your-feature`
5. **Create a pull request**.

We appreciate all contributions, whether large or small!

---

## License

**Cropify** is open-source and available under the [MIT License](LICENSE). You are free to use, modify, and distribute the code, subject to the terms outlined in the license.
