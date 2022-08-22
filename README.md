# Product Overview

![Gatekeeper Sync Wall](https://lh3.googleusercontent.com/pw/AM-JKLVaBzMiQrPfizSwR7JnDHrTw4Xd7dosgLRvgNrkltMbRIb4d5yOVDfdxY9uNbhAsZn2hzUm2IMbBNHFCwvSa8gkbLYNeF3URV9_u4EykVcv8jPQH6PpkQdnSGn_9eFhyaMCLOokS5N16M0dN5d2rJr_=w1585-h711-no?authuser=0)

>The goal of this assignment is to assess your programming skills as well as your way of thinking. You should approach the problem in a critical manner and try to come up with a well-structured solution. It is required for your project to use Angular framework, but you are free to use any other technologies or libraries you feel comfortable with or think is required for the task at hand.

## Once upon a time in Codeshake’s headquarters...

As a fellow Frontend developer (to be) at Codeshake, you are asked to build the frontend of one of our new products within the COOL Platform. COOL Platform is an ecosystem, consisting of a variety of sub-modules, that targets students, teachers and school administrators for especially primary schools.

For this new module, called the “Overview”, we are going to target the school administrators, and provide them with the necessary data in order to make sure that they are using COOL Platform to its fullest potential. The module is asked to consist of two pages (design in Section 2).

In the Overview page, we are planning to show the following information;

- Payment information with the assigned credit card, the active balance on the account as well as available credit and awaiting provisions.
- Billing summary with the information on how much each product costs.
- Locations to show the different branches of the school and their usage with an “add new” button to create a new branch for your organization.
- The total usage of the modules.
- A list of the current administrators who have access to this module with a “send invitation” field to add new administrators.
- A button to contact support.

In the Locations page, we are going to provide a more detailed view of the organization’s different branches. The page is going to consist of a single table that shows the logo, the name, number of total licenses, enrollment date as well as a list of active modules within the branch.

## What needs to be done

The design for the module can be accessed through importing the **DESIGN.fig** to https://figma.com/ as a draft project. There you will have access to all the assets as well as the positioning and styles of the elements.

In addition to implementing the designs, make sure to pay attention to the following as well;

- The left sidebar navigation menu as well as the avatar section (including the inbox and the notification buttons) are global components that are the same in both screens.
- Upon clicking the + button to add a new location in both pages, you are asked to create a modal screen with the following input fields. Unfortunately, our -a bit lazy- designer friend didn’t bother to prepare a design for this screen, so you need to make it as consistent as you can with our design system.
  - The name of the branch,
  - The logo (image upload that only accepts PNG, JPG, JPEG and SVG formats),
  - The number of licenses needed,
  - Enrollment date (non-editable field that brings today’s date by default),
  - Three checkboxes with the options of our modules
- For the “send invitation” field in the Administrators component, only accept text values with email formatting.

Other than the above-mentioned details, feel free to implement anything you think would be helpful in your application process!

## The data

Some mock data are available in the **DATA.json** file for your application to use. We have taken the liberty of deciding the interfaces you need to consume, consider them like responses from API calls.

## Submission

After you are done and satisfied with your work, we ask you to create a pull request from your branch to the master and assign the user Codeshake-Eren as the reviewer.

We will take it from there.

**Good luck!**
