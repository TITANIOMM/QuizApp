Quiz App
A simple and elegant quiz application built with React. The app presents a series of multiple-choice questions, tracks the user's score, and displays the final score at the end. The design is modern, responsive, and styled with custom CSS for a sleek user experience.
Features

Displays a series of multiple-choice questions.
Tracks and updates the user's score based on correct answers.
Responsive design for both desktop and mobile devices.
Smooth animations and hover effects for interactive elements.
Clean and modern UI with a dark theme and neon green accents.

Technologies Used

React: JavaScript library for building the user interface.
CSS: Custom styles with no external frameworks (e.g., Bootstrap).
Google Fonts: Poppins font for a modern and readable typography.

Installation

Clone the repository:
git clone <repository-url>
cd quiz-app


Install dependencies:Ensure you have Node.js installed, then run:
npm install


Start the development server:
npm start

The app will be available at http://localhost:3000.


Project Structure

src/Quiz.js: Main React component containing the quiz logic and UI.
src/Quiz.css: Custom CSS styles for the quiz app.
src/index.js: Entry point for the React application.

How to Use

Launch the app using npm start.
The app displays one question at a time with four answer options.
Click an answer to proceed to the next question.
After answering all questions, the final score is displayed.
To modify questions, edit the questions array in Quiz.js.

Customization

Questions: Add or modify questions in the questions array in Quiz.js.
Styling: Adjust colors, fonts, or animations in Quiz.css.
Features: Extend functionality by adding features like a timer, reset button, or question transitions.

Example Question Structure
{
  questionText: "What is the capital of Spain?",
  answerOptions: [
    { answerText: "NYC", isCorrect: false },
    { answerText: "Madrid", isCorrect: true },
    { answerText: "Tokyo", isCorrect: false },
    { answerText: "Baku", isCorrect: false },
  ],
}

Future Improvements

Add a timer for each question.
Implement a "Restart Quiz" button.
Add animations for question transitions.
Support multiple quiz categories.

License
This project is licensed under the MIT License.