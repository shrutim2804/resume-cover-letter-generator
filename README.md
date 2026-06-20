# 🚀 AI Resume & Cover Letter Generator

Create professional, ATS-friendly resumes and cover letters in minutes — powered by AI.

🔗 **Live Demo:** [ https://resume-cover-letter-generator-ts5i.onrender.com/ ]

---

## ✨ Features

- ⚡ **AI-Powered Generation** — Auto-generate tailored resumes and cover letters using the OpenRouter API (GPT)
- 🎨 **Multiple Templates** — Choose from professional, ATS-friendly templates for both resumes and cover letters
- 📝 **Live Editing** — Edit generated output instantly before exporting
- 📄 **PDF Export** — Download polished resumes and cover letters as PDFs using jsPDF
- 🌗 **Light/Dark Theme** — Toggle between themes for comfortable viewing
- 🧪 **Sample Data Fill** — Test the generator instantly with one click
- 📊 **Step-by-Step Flow** — Guided 3-step process from template selection to final document

---

## 🖥️ Screenshots

### Home Page
![Home]<img width="1918" height="918" alt="Screenshot 2026-06-20 145639" src="https://github.com/user-attachments/assets/4bef09d4-c569-4c4a-bf16-1e623c5bb28e" />


### Resume Templates
![Resume Templates]<img width="1918" height="916" alt="Screenshot 2026-06-20 145658" src="https://github.com/user-attachments/assets/6c8b0e6b-3fc1-4a7d-81a8-da1675d9845c" />


### Cover Letter Templates
![Cover Letter Templates]<img width="1906" height="910" alt="Screenshot 2026-06-20 145713" src="https://github.com/user-attachments/assets/d231dfb9-27f7-478e-b8c1-9f9e4dc8484f" />


### Resume Generator
![Resume Form]<img width="623" height="922" alt="Screenshot 2026-06-20 145856" src="https://github.com/user-attachments/assets/0bbde0b9-2e37-41d3-8ed0-7dde216428fb" />


### Cover Letter Generator
![Cover Letter Form]<img width="592" height="897" alt="Screenshot 2026-06-20 145840" src="https://github.com/user-attachments/assets/e7909094-214b-4172-96dc-0ad40670933d" />

---

## 🛠️ Tech Stack

| Layer            | Technology              |
|-------------------|--------------------------|
| Frontend          | HTML, CSS, JavaScript    |
| Backend           | Flask (Python)           |
| AI Integration    | OpenRouter API (GPT)     |
| PDF Generation    | jsPDF                    |
| Deployment        | Render                   |

---

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/shrutim2804/resume-cover-letter-generator.git
   cd ai-resume-cover-letter-generator
   ```

2. **Set up a virtual environment**
   ```bash
   python -m venv venv
   source venv/bin/activate   # On Windows: venv\Scripts\activate
   ```

3. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

4. **Configure environment variables**

   Create a `.env` file in the root directory:
   ```env
   OPENROUTER_API_KEY=your_api_key_here
   ```

5. **Run the app**
   ```bash
   python app.py
   ```

6. Open `http://localhost:5000` in your browser.

---

## 🚀 Usage

1. Select a resume and cover letter template from the **Templates** page.
2. Fill in your details — name, experience, skills, and job target — or click **Fill Sample Data** to try it instantly.
3. Click **Generate** to let the AI craft your tailored document.
4. Edit the output if needed, then **Download as PDF**.

---

## 📁 Project Structure

```
ai-resume-cover-letter-generator/
├── app.py                 # Flask backend & API routes
├── templates/              # HTML templates
├── static/
│   ├── css/                 # Stylesheets
│   ├── js/                  # Frontend logic (form handling, jsPDF export)
│   └── assets/               # Images, icons
├── requirements.txt
└── README.md
```

---

## 🌐 Deployment

This project is deployed on **Render**. To deploy your own instance:

1. Push your repo to GitHub.
2. Create a new **Web Service** on [Render](https://render.com).
3. Set the build command: `pip install -r requirements.txt`
4. Set the start command: `python app.py` (or `gunicorn app:app` for production)
5. Add `OPENROUTER_API_KEY` under environment variables.

---

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

1. Fork the repo
2. Create a feature branch 
3. Commit your changes
4. Push and open a PR

---

## 📬 Contact

**Shruti Mishra**
- 📧 shrutimishra5020@gmail.com
- 💼 [LinkedIn](https://www.linkedin.com/in/shruti-mishra-5020s)
- 🐙 [GitHub](https://github.com/shrutim2804)

---

## 📄 License

This project is licensed under the MIT License.
