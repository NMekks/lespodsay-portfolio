# Lespodsay - Art Portfolio

This is the official art portfolio website for Lespodsay. The website showcases a collection of illustrations and provides contact information for commissions and collaborations.
You can access Lespodsay's art portfolio on this link [here](https://nmekks.github.io/lespodsay-portfolio/#/)

## Features

*   **Homepage:** A welcoming gallery of featured artwork.
*   **About Page:** An introduction to the artist, their journey, and inspirations.
*   **Illustrations Gallery:** A comprehensive collection of illustrations with a live search functionality to filter artwork by title, caption, or keywords.
*   **Contact Form:** A functional contact form for business inquiries and messages, powered by EmailJS.
*   **Responsive Design:** The website is designed to be accessible and user-friendly across various devices, including desktops, tablets, and mobile phones.
*   **Interactive Lightbox:** An elegant lightbox feature to view high-resolution images with captions.

## Technologies Used

*   **Frontend:** ReactJS, HTML5, CSS3, JavaScript (ES6+)
*   **Routing:** React Router
*   **Styling:** [Bootstrap](https://getbootstrap.com/docs/5.3/getting-started/introduction/), Custom CSS
*   **Email Services:** [EmailJS](https://www.emailjs.com/docs/tutorial/overview/)
*   **Image Lightbox:** [yet-another-react-lightbox](https://yet-another-react-lightbox.com/)
*   **Deployment:** GitHub Pages

## Setup and Installation

To run this project locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone <your-repository-url>
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd lespodsay-portfolio
    ```
3.  **Install dependencies:**
    ```bash
    npm install
    ```
4.  **Create a `.env` file** in the root of your project and add your EmailJS credentials:
    ```
    REACT_APP_SERVICE_ID=your_service_id
    REACT_APP_TEMPLATE_ID_CONTACT_FORM=your_template_id
    REACT_APP_PUBLIC_KEY=your_public_key
    ```
5.  **Start the development server:**
    ```bash
    npm start
    ```
    The application will be available at `http://localhost:3000`.

## Available Scripts

In the project directory, you can run:

*   `npm start`: Runs the app in development mode.
*   `npm run build`: Builds the app for production to the `build` folder.
*   `npm test`: Launches the test runner in interactive watch mode.
*   `npm run predeploy`: Automatically runs before the `deploy` script to ensure the project is built.
*   `npm run deploy`: Deploys the application to GitHub Pages.

## Deployment

This project is set up for easy deployment to GitHub Pages.

To deploy the application, run the following command:
```bash
npm run deploy
```

