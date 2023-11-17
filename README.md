# React + Vite
React Component: NewComp
This React component, NewComp, is designed to demonstrate a simple interface with interactive elements using React states and event handling. It features a message, a button, and an image that change dynamically upon user interaction.

Table of Contents
Overview
Usage
Methods
Styling
Example
Overview
The NewComp component is built using React and extends the Component class. It includes state management to control and display dynamic content based on user actions.

Upon initialization, the component sets default values for the following state variables:

message: Displays a default message encouraging users to subscribe.
sub: Represents the text displayed on the button, initially set to "Subscribe".
imgSrc: Refers to the image source (bellB.jpg) displayed initially.

Usage
To use this component in your React application:

Import the component into your desired React file:

javascript
Copy code
import NewComp from './NewComp';
Include the <NewComp /> tag within your JSX to render the component within your application.

Methods

ButtonChange()
Updates the message and sub state variables when the button is clicked. It changes the message to encourage subscription and updates the button text to "Subscribed".

ImageChange()
Modifies the message and imgSrc state variables when the image is clicked. It changes the message to a thank-you note and updates the displayed image (bellA.jpg).

Styling
The component includes basic inline styling for elements:
The message (h3) is styled with an italic font and purple color.
The image (img) is set to a fixed width and height of 30px.

Example
Here's an example of how to incorporate NewComp within your React application:

javascript
Copy code
import React from 'react';
import NewComp from './NewComp';

function App() {
  return (
    <div className="App">
      <NewComp />
    </div>
  );
}

export default App;
Feel free to adjust and expand this README to provide more details, usage examples, or any additional information relevant to your project or codebase.

Hope this helps!

Best regards,
JOSEPH - eeaglEyee@gmail.com 
[Your Name]
