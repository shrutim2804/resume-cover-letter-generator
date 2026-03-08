# AI Resume & Cover Letter Generator

A professional web application that uses AI to generate tailored resumes and cover letters with multiple template options and PDF export functionality.

## 🌟 Live Demo
**Application URL:** https://resume-cover-letter-generator-ts5i.onrender.com

## 🚀 Features

### 🤖 AI-Powered Generation
- **OpenRouter API Integration**: Uses GPT-3.5-turbo for intelligent content creation
- **Template-Aware Prompts**: AI generates content specific to selected template styles
- **Real-time Generation**: Instant content creation with loading indicators

### 🎨 Professional Templates
**4 Resume Templates:**
- **Modern Professional** - Clean, contemporary design for tech roles
- **Executive** - Bold, authoritative design for leadership positions  
- **Creative** - Designed for designers, artists, and creative professionals
- **Minimalist** - Ultra-clean, focused design with maximum impact

**3 Cover Letter Templates:**
- **Traditional** - Classic formal format for conservative industries
- **Modern** - Contemporary design for tech and creative companies
- **Minimalist** - Direct, concise format that highlights your message

### 💼 Smart Features
- **PDF Export**: Download professionally formatted PDFs with template-specific styling
- **Real-time Preview**: Instant preview of generated content
- **Form Validation**: Comprehensive validation with progress tracking
- **Auto-save**: Automatically saves form data as you type
- **Dark/Light Theme**: Toggle between themes for comfortable viewing
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile

## 🛠️ Technology Stack

### Frontend
- **HTML5** - Semantic markup structure
- **Tailwind CSS** - Utility-first CSS framework
- **JavaScript ES6+** - Interactive functionality
- **Font Awesome** - Professional icons
- **jsPDF** - Client-side PDF generation
- **Google Fonts (Poppins)** - Modern typography

### Backend
- **Python 3.7+** - Server-side logic
- **Flask** - Lightweight web framework
- **OpenRouter API** - AI content generation
- **python-dotenv** - Environment variable management
- **Requests** - HTTP library for API calls

## 📦 Installation & Setup

### Prerequisites
- Python 3.7 or higher
- OpenRouter API account
- Modern web browser (Chrome, Firefox, Safari, Edge)

### Step-by-Step Setup

1. **Clone or Download the Project**

# If using git
git clone <repository-url>
cd ai-resume-generator

# Or simply download and extract the project files

2.Create Virtual Environment
# On Windows
python -m venv venv
venv\Scripts\activate

# On macOS/Linux
python3 -m venv venv
source venv/bin/activate


3.Install Python Dependencies
pip install flask python-dotenv requests

4.Configure Environment Variables
Create a .env file in the root directory:

env
OPENROUTER_API_KEY="your_actual_openrouter_api_key_here"

5.Get OpenRouter API Key

> Visit OpenRouter

> Sign up for a free account

> Go to API Keys section

> Generate a new API key

> Copy the key to your .env file


6.Project Structure Verification
Ensure your project has this structure:

ai-resume-generator/
├── app.py                 # Flask backend server
├── .env                  # Environment variables
├── requirements.txt      # (Optional) Python dependencies
├── venv/                # Virtual environment
└── templates/
    └── index.html       # Main application


 7.Run the Application
python app.py


8.Access the Application
Open your web browser and navigate to:
http://localhost:5000


🎯 Usage Guide
Step 1: Template Selection
Click on "View Templates" to see available options

Select resume and cover letter templates using the edit (✏️) buttons

Use template previews to make informed choices

Step 2: Fill in Your Information
For Resume:

Personal details (Name, Email, Phone, Location)

Professional summary

Skills and technologies

Work experience with achievements

Education background

Portfolio and LinkedIn links (optional)

For Cover Letter:

Personal introduction

Target position and company

Relevant experience highlights

Motivation and cultural fit

Professional closing

Step 3: Generate Content
Click "Generate Resume" or "Generate Cover Letter"

Watch the progress indicator

Preview the AI-generated content in real-time

Step 4: Export Documents
Click "Download PDF" for professional formatting

Use "Print" button for hard copies

Files are automatically named with template information

🔧 API Configuration
Backend API Endpoints
POST /generate - Main AI content generation endpoint

GET / - Serves the main application interface

OpenRouter API Settings
# Default configuration in app.py
model = "openai/gpt-3.5-turbo"  # Reliable and cost-effective
max_tokens = 1500              # Optimal for resume/cover letter length

Customizing AI Behavior
Modify the prompt templates in the frontend JavaScript to adjust AI output:
// Example of template-specific prompting
const prompt = `TEMPLATE: ${templateName}
${template.formatting}

Create a professional resume for ${name} applying for ${role}...
`;
🐛 Troubleshooting
Common Issues & Solutions
❌ "AI Generation Failed" Error

bash
# Check Flask server is running
python app.py

# Verify .env file exists and has correct API key
cat .env

# Check console for detailed error messages
❌ PDF Download Not Working

Ensure content is generated before downloading

Check browser pop-up blockers

Verify JavaScript is enabled

❌ Template Not Applying

Select templates before generating content

Check template selection is saved (green indicators)

Refresh page and reselect templates

❌ Flask Server Issues

bash
# Check Python version
python --version

# Reactivate virtual environment
source venv/bin/activate  # or venv\Scripts\activate on Windows
📊 Project Structure
text
ai-resume-generator/
├── app.py                 # Flask backend server
├── .env                  # Environment variables (create this)
├── .gitignore           # Git ignore file
├── requirements.txt     # Python dependencies
├── venv/               # Virtual environment
└── templates/
    └── index.html      # Main application frontend
🔒 Security Notes
API keys are stored in .env file (never in code)

No user data is stored on the server

All processing happens in real-time

Environment file is excluded from version control

🚀 Deployment
bash
# Local development
python app.py

# Production (recommended to use WSGI server like Gunicorn)
gunicorn app:app
🤝 Contributing
Fork the repository

Create a feature branch

Make your improvements

Test thoroughly

Submit a pull request

📞 Support
For technical support:

Check troubleshooting section above

Verify installation steps are completed correctly

Examine console logs for specific error messages

📄 License
This project is open source and available under the MIT License.

🙏 Acknowledgments
OpenRouter for providing AI API access

Flask team for the lightweight web framework

Tailwind CSS for the utility-first CSS framework
