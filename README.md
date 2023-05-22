This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Table of Contents
- [Overview](#overview)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Routing](#routing)
- [Components](#components)
- [Styling](#styling)
- [Data Management](#data-management)
- [Pagination](#pagination)
- [Search Functionality](#search-functionality)
- [Dynamic Routing](#dynamic-routing)
- [Commenting](#commenting)

## Blogs Page 
![image](https://github.com/Alexfp05405/Blog/assets/107488954/3b02462b-aee1-48e5-a8a1-e28d39a3a88d)

  <h3 align="center"><a href="https://blog-weld-eight.vercel.app/"><strong>Want to see live preview »</strong></a></h3>

# Blog App Documentation

## Overview
The Blog App is a web application designed to showcase multiple blogs with an elegant design. It provides features such as pagination, search functionality, dynamic routing for detailed blog views, and the ability to comment on blogs.

## Installation
To install and set up the Blog App locally, follow these steps:
1. Clone the repository from [GitHub](https://github.com/your/repository).
2. Install the required dependencies using the package manager of your choice (e.g., npm or yarn).
3. Configure any environment variables or settings required for the application.

## Usage
To run the Blog App locally, use the following command:
```
npm start
```
This will start the development server and allow you to access the application in your browser.

## Folder Structure
The Blog App follows a specific folder structure to organize the codebase. Here is an overview of the main folders and their purposes:
- `src`: Contains the main source code files for the application.
  - `components`: Includes reusable React components used throughout the app.
  - `pages`: Contains the page components representing different views and routes.
  - `styles`: Holds CSS or styling files for the application.
  - `services`: Includes data fetching and API integration logic.
  - `utils`: Contains utility functions or helper modules used in the app.

## Routing
The Blog App uses client-side routing to navigate between different views without a page refresh. It leverages the routing capabilities provided by the Next.js framework.

## Components
Components play a crucial role in the Blog App's structure and reusability. They are modular pieces of code that encapsulate UI elements and logic. The app uses various components, such as Header, PostCard, Pagination, and CommentForm, to build the user interface.

## Styling
The Blog App uses a CSS-in-JS approach for styling components. It leverages popular libraries like Tailwind CSS or Styled Components to provide a flexible and maintainable styling solution. The styling files are organized within the `styles` folder.

## Data Management
Data management in the Blog App is handled through client-side data fetching. The app retrieves data from an API or external data source using methods like `fetch` or `axios`. The retrieved data is then used to populate the blog posts and comments.

## Pagination
The Blog App includes pagination functionality to display a limited number of blog posts per page. It allows users to navigate through different pages and view additional blog posts. The Pagination component handles the logic for loading posts based on the selected page.

## Search Functionality
The Blog App provides a search feature that allows users to search for blogs based on keywords. When a user enters a search query, the app sends a request to the server or filters the existing blog posts locally to display the relevant results. The Search component handles the search functionality.

## Dynamic Routing
The Blog App utilizes dynamic routing to create dynamic routes for individual blog posts. Each blog post has a unique URL that can be accessed directly. The app dynamically generates routes based on the available blog posts and
