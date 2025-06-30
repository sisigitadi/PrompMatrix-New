# PromptMatrix V6.5

![PromptMatrix Banner](https://user-images.githubusercontent.com/12345678/promptmatrix-banner.png) <!-- Ganti dengan URL banner Anda -->

**Your ultimate guide to understanding & crafting effective AI prompts for text, image, video, and music generation.**

PromptMatrix is an educational web application designed to help users learn, understand, and construct well-structured prompts for various AI models. It provides a structured environment with a rich library of established prompt engineering frameworks, enabling users to move from basic commands to sophisticated, effective instructions for any generative AI.

**[Live Demo](https://sisigitadi.github.io/promptmatrix/)**

---

## ✨ Key Features (v6.5)

-   **📚 Extensive Framework Library**: Explore dozens of prompt engineering frameworks like `RTF`, `AIDA`, `CoT`, `CARE`, and many more, categorized for Text, Media (Image/Video), and Music generation.
-   **🖥️ Interactive Prompt Builder**: A guided interface helps you fill in the components of each framework, with examples and tooltips to explain each part.
-   **👁️ Live Preview**: See your prompt being built in real-time as you input your ideas.
-   **🌐 Bilingual Interface**: Fully available in both **English** and **Indonesian**.
-   **📋 Copy & Launch**: Easily copy your final prompt and launch popular AI tools directly from the app.
-   **💾 Prompt Stash (Local Storage)**: Save, load, rename, and manage your favorite prompts directly in your browser using IndexedDB. No backend required.
-   **📥/📤 Import & Export**: Back up your entire prompt stash to a JSON file or import it to another browser.
-   **💡 AI-Powered Assistance (Premium Features)**:
    -   **AI Framework Finder**: Describe your goal and let AI suggest the most relevant frameworks.
    -   **AI Web Researcher**: Research the latest prompt engineering techniques for your specific goal.
    -   **AI Input Suggestions**: Get intelligent autocomplete suggestions for each input field.
    -   **AI Feedback & Analysis**: Receive constructive feedback and a detailed structural analysis of your generated prompt.
-   **📱 Responsive Design**: Fully functional on both desktop and mobile devices.

---

## 🚀 Getting Started

### Prerequisites

-   [Node.js](https://nodejs.org/) (v18.x or higher recommended)
-   [npm](https://www.npmjs.com/) (usually comes with Node.js)

### Installation & Running Locally

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/promptmatrix.git
    cd promptmatrix
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up environment variables:**
    -   Rename the `.env.example` file to `.env`.
    -   Open the `.env` file and add your Google AI Studio API key. This is required to enable the AI-powered "Premium" features.
        ```
        API_KEY="YOUR_GOOGLE_AI_API_KEY"
        ```
    -   You can obtain a key from [Google AI Studio](https://aistudio.google.com/app/apikey).

4.  **Run the development server:**
    ```bash
    npm run dev
    ```
    The application will be available at `http://localhost:5173` (or another port if 5173 is busy).

### Build for Production

To create a production build of the app:

```bash
npm run build
```

This will create a `dist` directory with the optimized, static files for deployment.

### Deploy to GitHub Pages

The project is pre-configured to deploy to GitHub Pages.

1.  Update the `homepage` URL in `package.json` to match your repository.
2.  Run the deployment script:
    ```bash
    npm run deploy
    ```
    This will build the application and push the `dist` folder to the `gh-pages` branch of your repository.

---

## 🛠️ Tech Stack

-   **Framework**: [React](https://reactjs.org/) (with TypeScript)
-   **Build Tool**: [Vite](https://vitejs.dev/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **AI Integration**: [Google Gemini API](https://ai.google.dev/) (`@google/genai`)
-   **Client-side Storage**: [IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API)
-   **Deployment**: [GitHub Pages](https://pages.github.com/)

---

## 🤝 Contributing

Contributions are welcome! If you have ideas for new frameworks, features, or improvements, please follow these steps:

1.  **Fork the repository.**
2.  **Create a new branch:** `git checkout -b feature/YourFeatureName`
3.  **Make your changes.**
    -   To add a new framework, see the structure in `src/frameworks.ts` and add corresponding translations in `src/translations.ts`.
4.  **Commit your changes:** `git commit -m 'Add some feature'`
5.  **Push to the branch:** `git push origin feature/YourFeatureName`
6.  **Open a Pull Request.**

Please ensure your code follows the existing style and conventions.

---

## 📜 License

This project is licensed under the [MIT License](LICENSE.md).

---

## 📧 Contact

Created by **Sigit Adi** - [si.sigitadi@gmail.com](mailto:si.sigitadi@gmail.com)

[GitHub](https://github.com/sisigitadi) | [Medium](https://medium.com/@si.sigitadi)