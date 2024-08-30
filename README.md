Maryum Iqbal

Project 8
Test Automation:
 Writing several tests to check the functionality of Urban Route

 Technologies used:
 VS Code, github, cygwin,Devtools


Steps to Starting Up a Project
1.Clone the Repository to Your Computer:

Open a terminal on your computer.
Navigate to the directory where you want to clone the repository.
Use the git clone command followed by the repository URL to clone it.

git clone <repository-url>
Replace <repository-url> with the actual URL of the repository. This command will create a local copy of the repository on your machine.

2.Work with the Project Locally:

After cloning, navigate into the project directory using the cd command.
cd <project-directory>
Replace <project-directory> with the name of the directory that was created when you cloned the repository.

3.Install any dependencies required by the project. This is usually done using a package manager such as npm, yarn, or others depending on the project type.
npm install   # For Node.js projects

3.Set Up a Server URL:




Steps to Writing tests

1.Open the URL: Navigate to the website you want to test using your web browser.

Copy and Paste the URL into wdio.conf.js:

Open the wdio.conf.js file in your project. This file is used to configure the WebdriverIO testing setup.
Find the section where the URL is defined (often under baseUrl in the configuration object) and replace it with the URL you want to test.
javascript
Copy code
baseUrl: 'https://example.com',
Save the Configuration: After making changes to the wdio.conf.js file, save the file to ensure that the new URL is set for your testing environment.

2.Go Back to the URL and Right-Click on the Logo:

In the web browser, go back to the page you intend to test.
Right-click on the logo or any element you want to inspect.
Select "Inspect" to Open DevTools:

This will open the browser's Developer Tools (DevTools), a set of web authoring and debugging tools built into web browsers.
Select the Suitable Locators:

3.In the Elements panel of DevTools, identify the HTML elements and their attributes (such as id, class, or name) that can be used as locators in your test script.
Choose Your Selectors:

Based on the locators identified, decide on the best selectors to use (e.g., CSS selectors, XPath, etc.) to uniquely identify the elements you want to interact with or verify in your tests.

4.Add a Test Script to createAnOrder.e2e.js:

Navigate to the test/specs folder in your project.
Create or open the file named createAnOrder.e2e.js.
Write the test script that simulates creating an order on the website. Use the selectors identified earlier to interact with the web elements.
Save the script once done.
Add Functions to Page.js:

5.Open the Page.js file, typically found in the test/pageobjects directory.
Add functions that encapsulate actions or checks, making your test scripts more modular and reusable.
Save the changes to Page.js.
Add Locators to Page.js:

Within Page.js, define the locators as properties or methods to keep your test scripts organized.
Save these locators to maintain consistency across your tests.
Run the Tests Using npm run wdio:

6. In your terminal, navigate to the root directory of your project.
Execute the command npm run wdio to start the WebdriverIO test runner and execute your test scripts.
Submit Changes with git add -A:

7.Stage all changes made in the project by running git add -A in your terminal.
Commit Changes with git commit -m:

8.Commit the staged changes using the command git commit -m "Add test for creating an order". Replace the message in quotes with a relevant description of the changes.
Push Changes to the Repository with git push:

9.Use the command git push to push your commits to the remote repository, adding your new tests to the project.


Notes
Ensure that WebdriverIO and any necessary dependencies are installed in your project (npm install may be required).
Customize your test scripts according to the specific needs and structure of the website you are testing.
Follow best practices for writing test scripts, such as handling exceptions and cleaning up after tests.
This structured approach will help maintain consistency and reliability in your test automation efforts.









added by 

