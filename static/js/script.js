// Template selection variables
let selectedResumeTemplate = null;
let selectedCoverTemplate = null;
let currentTemplateType = null;

// Template data
const resumeTemplates = [
    {
        id: 'modern',
        name: 'Modern Professional',
        description: 'Clean, contemporary design perfect for tech roles',
        preview: `
          <div class="h-full border-2 border-gray-200 rounded-lg p-3 flex flex-col">
            <div class="border-b-2 border-blue-500 pb-2 mb-2">
              <h3 class="text-lg font-bold text-blue-600">John Doe</h3>
              <p class="text-gray-600 text-sm">Software Engineer</p>
            </div>
            <div class="flex-1 grid grid-cols-3 gap-2 text-xs">
              <div class="col-span-1">
                <h4 class="font-semibold text-blue-500">Contact</h4>
                <p class="mt-1">email@example.com</p>
              </div>
              <div class="col-span-2">
                <h4 class="font-semibold text-blue-500">Experience</h4>
                <p class="mt-1">Senior Developer at TechCo</p>
              </div>
            </div>
          </div>
        `,
        formatting: 'MODERN PROFESSIONAL TEMPLATE: Use clear section headers, bullet points for achievements, focus on measurable results, modern terminology, and concise scannable content.'
    },
    {
        id: 'executive',
        name: 'Executive',
        description: 'Bold, authoritative design for leadership roles',
        preview: `
          <div class="h-full border-2 border-gray-200 rounded-lg p-3 flex flex-col">
            <div class="text-center mb-2">
              <h3 class="text-lg font-bold text-gray-800">JANE DOE</h3>
              <p class="text-gray-600 uppercase text-xs">Product Manager</p>
            </div>
            <div class="flex-1 flex text-xs">
              <div class="w-1/3 border-r border-gray-300 pr-1">
                <h4 class="font-semibold">SKILLS</h4>
                <ul class="mt-1">
                  <li>Product Strategy</li>
                  <li>User Research</li>
                </ul>
              </div>
              <div class="w-2/3 pl-1">
                <h4 class="font-semibold">EXPERIENCE</h4>
                <p class="mt-1">Product Manager at Startup</p>
              </div>
            </div>
          </div>
        `,
        formatting: 'EXECUTIVE TEMPLATE: Start with powerful executive summary, emphasize leadership achievements, use formal authoritative language, highlight budget management and business impact.'
    },
    {
        id: 'creative',
        name: 'Creative',
        description: 'For designers, artists, and creative professionals',
        preview: `
          <div class="h-full border-2 border-gray-200 rounded-lg p-3 flex flex-col">
            <div class="flex items-center mb-2">
              <div class="w-1/3">
                <h3 class="text-md font-bold text-green-600">Alex Johnson</h3>
                <p class="text-xs text-gray-600">UX Designer</p>
              </div>
              <div class="w-2/3 text-right">
                <p class="text-xs">portfolio.com</p>
              </div>
            </div>
            <div class="flex-1 grid grid-cols-2 gap-2 text-xs">
              <div>
                <h4 class="font-semibold text-green-500">Education</h4>
                <p class="mt-1">BS in Design, University</p>
              </div>
              <div>
                <h4 class="font-semibold text-green-500">Projects</h4>
                <p class="mt-1">Redesigned payment flow</p>
              </div>
            </div>
          </div>
        `,
        formatting: 'CREATIVE TEMPLATE: Showcase portfolio projects, use creative language and storytelling, highlight design thinking, emphasize collaboration and creative process.'
    },
    {
        id: 'minimal',
        name: 'Minimalist',
        description: 'Clean, focused design with maximum impact',
        preview: `
          <div class="h-full border-2 border-gray-200 rounded-lg p-3 flex flex-col">
            <div class="mb-2">
              <h3 class="text-lg font-bold text-gray-800">Michael Chen</h3>
              <p class="text-gray-600 text-sm">Data Scientist</p>
            </div>
            <div class="flex-1 text-xs">
              <h4 class="font-semibold text-gray-700">SUMMARY</h4>
              <p class="mt-1">Data scientist with 5+ years experience in machine learning and analytics.</p>
            </div>
          </div>
        `,
        formatting: 'MINIMALIST TEMPLATE: Ultra-concise content, single page focus, essential information only, clean sparse formatting, remove unnecessary details.'
    }
];

const coverLetterTemplates = [
    {
        id: 'traditional',
        name: 'Traditional',
        description: 'Classic format for formal industries',
        preview: `
          <div class="h-full border-2 border-gray-200 rounded-lg p-3 flex flex-col">
            <div class="mb-3">
              <p class="text-sm font-semibold">[Your Name]</p>
              <p class="text-xs">[Your Address]</p>
            </div>
            <div class="mb-3">
              <p class="text-xs">[Date]</p>
              <p class="text-xs">[Hiring Manager Name]</p>
            </div>
            <div class="flex-1">
              <p class="text-sm font-semibold">Dear [Mr./Ms. Last Name],</p>
              <p class="text-xs mt-1">I am writing to apply for...</p>
            </div>
          </div>
        `,
        formatting: 'TRADITIONAL COVER LETTER: Formal business letter structure, conservative professional tone, standard business formatting, focus on qualifications and experience.'
    },
    {
        id: 'modern',
        name: 'Modern',
        description: 'Contemporary design for tech and creative industries',
        preview: `
          <div class="h-full border-2 border-gray-200 rounded-lg p-3 flex flex-col">
            <div class="text-center mb-3">
              <h3 class="text-md font-bold">YOUR NAME</h3>
              <p class="text-xs">Email | Phone | Portfolio</p>
            </div>
            <div class="flex-1">
              <p class="text-xs uppercase font-semibold">To the team at [Company],</p>
              <p class="text-xs mt-1">When I saw your opening for...</p>
            </div>
          </div>
        `,
        formatting: 'MODERN COVER LETTER: Conversational but professional tone, focus on cultural fit and passion, modern formatting, emphasize innovation and adaptability.'
    },
    {
        id: 'minimalist',
        name: 'Minimalist',
        description: 'Clean, focused design that highlights your message',
        preview: `
          <div class="h-full border-2 border-gray-200 rounded-lg p-3 flex flex-col">
            <div class="flex justify-between items-start mb-3">
              <div>
                <h3 class="text-sm font-bold">Your Name</h3>
                <p class="text-xs">Position Applying For</p>
              </div>
            </div>
            <div class="flex-1">
              <p class="text-xs font-semibold">Dear Hiring Team,</p>
              <p class="text-xs mt-1">I\'m writing to express my interest...</p>
            </div>
          </div>
        `,
        formatting: 'MINIMALIST COVER LETTER: Very concise and direct, focus on key value proposition, minimal formatting, remove unnecessary formalities.'
    }
];

// Initialize page with light theme as default
window.addEventListener('load', function() {
    // Ensure light theme is set as default
    document.documentElement.classList.remove('dark');
    document.documentElement.classList.add('light');
    document.getElementById('toggle-icon').textContent = '🌜';
    
    // Load selected templates if any
    loadSelectedTemplates();
    
    // Initialize form validation
    initFormValidation();
    
    // Set up template gallery
    showTemplates('resume');
    
    // Initialize auto-save
    autoSaveForms();
});

function loadSelectedTemplates() {
    // Load from localStorage if available
    const savedResumeTemplate = localStorage.getItem('selectedResumeTemplate');
    const savedCoverTemplate = localStorage.getItem('selectedCoverTemplate');
    
    if (savedResumeTemplate) {
        selectedResumeTemplate = savedResumeTemplate;
        document.getElementById('selected-resume-template').textContent = savedResumeTemplate;
    }
    
    if (savedCoverTemplate) {
        selectedCoverTemplate = savedCoverTemplate;
        document.getElementById('selected-cover-template').textContent = savedCoverTemplate;
    }
}

function showTemplates(type) {
    const resumeBtn = document.getElementById('resume-templates-btn');
    const coverBtn = document.getElementById('cover-templates-btn');
    const resumeSection = document.getElementById('resume-templates');
    const coverSection = document.getElementById('cover-templates');
    
    if (type === 'resume') {
        resumeBtn.classList.add('active');
        coverBtn.classList.remove('active');
        resumeSection.classList.remove('hidden');
        coverSection.classList.add('hidden');
    } else {
        resumeBtn.classList.remove('active');
        coverBtn.classList.add('active');
        resumeSection.classList.add('hidden');
        coverSection.classList.remove('hidden');
    }
}

function showForm(type) {
    const resumeTab = document.getElementById('resume-tab');
    const coverTab = document.getElementById('cover-tab');
    const resumeForm = document.getElementById('resume-form');
    const coverForm = document.getElementById('cover-form');
    const resumeOutput = document.getElementById('resume-output');
    const coverOutput = document.getElementById('cover-output');
    const noOutput = document.getElementById('no-output');
    const downloadResumeBtn = document.getElementById('download-resume-btn');
    const downloadCoverBtn = document.getElementById('download-cover-btn');
    document.getElementById('output-type').textContent = `(${type === 'resume' ? 'Resume' : 'Cover Letter'})`;
    if (type === 'resume') {
        resumeTab.classList.add('active');
        coverTab.classList.remove('active');
        resumeForm.classList.remove('hidden');
        coverForm.classList.add('hidden');
        resumeOutput.classList.remove('hidden');
        coverOutput.classList.add('hidden');
        downloadResumeBtn.classList.remove('hidden');
        downloadCoverBtn.classList.add('hidden');
        
        if (resumeOutput.innerText.trim() === '') {
            noOutput.classList.remove('hidden');
        } else {
            noOutput.classList.add('hidden');
        }
    } else {
        resumeTab.classList.remove('active');
        coverTab.classList.add('active');
        resumeForm.classList.add('hidden');
        coverForm.classList.remove('hidden');
        resumeOutput.classList.add('hidden');
        coverOutput.classList.remove('hidden');
        downloadResumeBtn.classList.add('hidden');
        downloadCoverBtn.classList.remove('hidden');
        
        if (coverOutput.innerText.trim() === '') {
            noOutput.classList.remove('hidden');
        } else {
            noOutput.classList.add('hidden');
        }
    }
    
    // Update progress bar for the active form
    setTimeout(updateProgressBar, 100);
}

function toggleTheme() {
    const isDark = document.documentElement.classList.contains('dark');
    const icon = document.getElementById('toggle-icon');
    
    if (isDark) {
        // Switch to improved light theme
        document.documentElement.classList.remove('dark');
        document.documentElement.classList.add('light');
        icon.textContent = '🌜';
        
        // Additional light theme enhancements
        document.body.style.backgroundColor = '#f8fafc';
    } else {
        // Switch to dark theme
        document.documentElement.classList.remove('light');
        document.documentElement.classList.add('dark');
        icon.textContent = '🌞';
        
        document.body.style.backgroundColor = '#111827';
    }
}

function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ 
        behavior: 'smooth' 
    });
}

function openTemplateModal(type) {
    currentTemplateType = type;
    const modal = document.getElementById('template-modal');
    const title = document.getElementById('modal-title');
    const subtitle = document.getElementById('modal-subtitle');
    const templatesContainer = document.getElementById('modal-templates');
    
    // Clear previous content
    templatesContainer.innerHTML = '';
    
    // Set title and subtitle
    if (type === 'resume') {
        title.textContent = 'Select Resume Template';
        subtitle.textContent = 'Choose a design that highlights your professional experience';
        
        // Add resume templates
        resumeTemplates.forEach(template => {
            const isSelected = selectedResumeTemplate === template.id;
            templatesContainer.innerHTML += `
            <div class="template-card section-card ${isSelected ? 'template-selected' : ''}" onclick="selectTemplateInModal('${template.id}')">
                <div class="template-preview p-3">
                ${template.preview}
                <div class="template-overlay rounded-lg">
                    <span class="text-white font-semibold bg-primary px-4 py-2 rounded-lg">Select ${template.name}</span>
                </div>
                </div>
                <div class="p-4">
                <h3 class="font-semibold text-lg text-gray-800 dark:text-white">${template.name}</h3>
                <p class="text-gray-600 dark:text-gray-400 text-sm mt-1">${template.description}</p>
                </div>
            </div>
            `;
        });
    } else {
        title.textContent = 'Select Cover Letter Template';
        subtitle.textContent = 'Choose a design that matches your communication style';
        
        // Add cover letter templates
        coverLetterTemplates.forEach(template => {
            const isSelected = selectedCoverTemplate === template.id;
            templatesContainer.innerHTML += `
            <div class="template-card section-card ${isSelected ? 'template-selected' : ''}" onclick="selectTemplateInModal('${template.id}')">
                <div class="template-preview p-3">
                ${template.preview}
                <div class="template-overlay rounded-lg">
                    <span class="text-white font-semibold bg-primary px-4 py-2 rounded-lg">Select ${template.name}</span>
                </div>
                </div>
                <div class="p-4">
                <h3 class="font-semibold text-lg text-gray-800 dark:text-white">${template.name}</h3>
                <p class="text-gray-600 dark:text-gray-400 text-sm mt-1">${template.description}</p>
                </div>
            </div>
            `;
        });
    }
    
    modal.style.display = 'flex';
}

function selectTemplateInModal(templateId) {
    // Remove selection from all templates
    const templates = document.querySelectorAll('#modal-templates .template-card');
    templates.forEach(template => {
        template.classList.remove('template-selected');
    });
    
    // Add selection to clicked template
    event.currentTarget.classList.add('template-selected');
    
    if (currentTemplateType === 'resume') {
        selectedResumeTemplate = templateId;
    } else {
        selectedCoverTemplate = templateId;
    }
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

function confirmTemplateSelection() {
    if (currentTemplateType === 'resume' && selectedResumeTemplate) {
        document.getElementById('selected-resume-template').textContent = 
            resumeTemplates.find(t => t.id === selectedResumeTemplate).name;
        localStorage.setItem('selectedResumeTemplate', selectedResumeTemplate);
    } else if (currentTemplateType === 'cover' && selectedCoverTemplate) {
        document.getElementById('selected-cover-template').textContent = 
            coverLetterTemplates.find(t => t.id === selectedCoverTemplate).name;
        localStorage.setItem('selectedCoverTemplate', selectedCoverTemplate);
    }
    
    closeModal('template-modal');
    showNotification('Template selected successfully!', 'success');
}

function initFormValidation() {
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        const inputs = form.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('input', updateProgressBar);
        });
    });
}

function updateProgressBar() {
    const activeForm = document.getElementById('resume-form').classList.contains('hidden') ? 
                        document.getElementById('cover-form') : document.getElementById('resume-form');
    
    if (!activeForm) return;
    
    const inputs = activeForm.querySelectorAll('input[required], textarea[required]');
    let filledCount = 0;
    
    inputs.forEach(input => {
        if (input.value.trim() !== '') {
            filledCount++;
        }
    });
    
    const progress = (filledCount / inputs.length) * 100;
    document.getElementById('form-progress').style.width = `${progress}%`;
    document.getElementById('progress-percentage').textContent = `${Math.round(progress)}%`;
    
    // Update step indicator
    updateStepIndicator(progress);
}

function updateStepIndicator(progress) {
    const steps = document.querySelectorAll('.step');
    const stepLines = document.querySelectorAll('.step-line');
    
    if (progress < 33) {
        steps[0].classList.add('active');
        steps[1].classList.remove('active', 'completed');
        steps[2].classList.remove('active', 'completed');
        stepLines[0].classList.remove('completed');
        stepLines[1].classList.remove('completed');
    } else if (progress < 66) {
        steps[0].classList.remove('active');
        steps[0].classList.add('completed');
        steps[1].classList.add('active');
        steps[2].classList.remove('active', 'completed');
        stepLines[0].classList.add('completed');
        stepLines[1].classList.remove('completed');
    } else {
        steps[0].classList.remove('active');
        steps[0].classList.add('completed');
        steps[1].classList.remove('active');
        steps[1].classList.add('completed');
        steps[2].classList.add('active');
        stepLines[0].classList.add('completed');
        stepLines[1].classList.add('completed');
    }
}

// Auto-save form data
function autoSaveForms() {
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        const inputs = form.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            // Load saved data
            const savedValue = localStorage.getItem(input.id);
            if (savedValue) {
                input.value = savedValue;
            }
            
            // Save on input
            input.addEventListener('input', () => {
                localStorage.setItem(input.id, input.value);
            });
        });
    });
}

// Sample data filler for testing
function fillSampleData() {
    if (confirm('Fill with sample data for testing?')) {
        // Resume sample data
        document.getElementById('res-name').value = 'Shruti Mishra';
        document.getElementById('res-role').value = 'Senior Software Engineer';
        document.getElementById('res-email').value = 'shrutimishra@gmail.com';
        document.getElementById('res-phone').value = '8934688456';
        document.getElementById('res-location').value = 'Prayagraj, U.P';
        document.getElementById('res-summary').value = 'Experienced software engineer with 8+ years in full-stack development. Specialized in JavaScript, React, and Node.js. Proven track record of delivering scalable solutions for tech companies.';
        document.getElementById('res-skills').value = 'JavaScript, React, Node.js, Python, AWS, Docker, Agile Methodology, Team Leadership, Project Management';
        document.getElementById('res-experience').value = 'Senior Developer at Tech Innovations (2019-Present)\n- Led a team of 5 developers\n- Improved application performance by 40%\n\nSoftware Engineer at WebSolutions Inc. (2015-2019)\n- Developed customer-facing web applications\n- Implemented CI/CD pipelines';
        document.getElementById('res-education').value = 'BS in Computer Science, Stanford University (2011-2015)\n- Graduated Magna Cum Laude\n- Relevant coursework: Algorithms, Data Structures, Web Development';
        document.getElementById('res-linkedin').value = 'https://linkedin.com/in/alexjohnson';
        document.getElementById('res-portfolio').value = 'https://alexjohnson.dev';
        
        // Cover letter sample data
        document.getElementById('cov-name').value = 'Shruti Mishra';
        document.getElementById('cov-role').value = 'Senior Software Engineer';
        document.getElementById('cov-company').value = 'InnovateTech Solutions';
        document.getElementById('cov-location').value = 'Prayagraj, U.P';
        document.getElementById('cov-experience').value = '8+ years in software development with focus on scalable web applications';
        document.getElementById('cov-skills').value = 'Full-stack JavaScript development, cloud architecture, team leadership, agile methodologies';
        document.getElementById('cov-motivation').value = 'I am particularly drawn to InnovateTech Solutions because of your innovative approach to solving complex problems and your commitment to cutting-edge technology. My experience aligns perfectly with the challenges your team is tackling.';
        document.getElementById('cov-summary').value = 'As a seasoned software engineer with extensive experience in building scalable applications, I have successfully led teams and delivered projects that resulted in significant business growth. I am excited about the opportunity to bring my technical expertise and leadership skills to your organization.';
        
        // Update progress bar
        updateProgressBar();
        
        // Auto-select templates if not already selected
        if (!selectedResumeTemplate) {
            selectedResumeTemplate = 'modern';
            document.getElementById('selected-resume-template').textContent = 'Modern Professional';
            localStorage.setItem('selectedResumeTemplate', 'modern');
        }
        
        if (!selectedCoverTemplate) {
            selectedCoverTemplate = 'modern';
            document.getElementById('selected-cover-template').textContent = 'Modern';
            localStorage.setItem('selectedCoverTemplate', 'modern');
        }
        
        showNotification('Sample data filled successfully!', 'success');
    }
}

// Print functionality
function printDocument(type) {
    const contentElement = type === 'resume' ? document.getElementById('resume-output') : document.getElementById('cover-output');
    const content = contentElement.innerText;
    
    if (!content || content.includes("simulated response")) {
        alert(`Please generate a ${type} first`);
        return;
    }
    
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
        <html>
        <head>
            <title>${type === 'resume' ? 'Resume' : 'Cover Letter'}</title>
            <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; margin: 40px; }
            h1 { color: #3B82F6; border-bottom: 2px solid #3B82F6; padding-bottom: 10px; }
            pre { white-space: pre-wrap; font-size: 14px; }
            </style>
        </head>
        <body>
            <h1>${type === 'resume' ? 'Professional Resume' : 'Cover Letter'}</h1>
            <pre>${content}</pre>
        </body>
        </html>
    `);
    printWindow.document.close();
    printWindow.print();
}

// Preview template function
function previewTemplate(type, templateId) {
    const templates = type === 'resume' ? resumeTemplates : coverLetterTemplates;
    const template = templates.find(t => t.id === templateId);
    
    const previewModal = document.createElement('div');
    previewModal.className = 'modal';
    previewModal.innerHTML = `
        <div class="modal-content" style="max-width: 600px;">
        <span class="close-modal" onclick="this.parentElement.parentElement.remove()">&times;</span>
        <h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-4">${template.name} Preview</h2>
        <div class="bg-white p-6 rounded-lg border-2 border-gray-200">
            ${template.preview}
        </div>
        <div class="mt-6 flex justify-end">
            <button onclick="selectTemplate('${type}', '${templateId}'); this.parentElement.parentElement.parentElement.remove(); showNotification('${template.name} template selected!', 'success')" class="btn-primary">
            Select This Template
            </button>
        </div>
        </div>
    `;
    
    document.body.appendChild(previewModal);
    previewModal.style.display = 'flex';
}

// Select template function
function selectTemplate(type, templateId) {
    if (type === 'resume') {
        selectedResumeTemplate = templateId;
        document.getElementById('selected-resume-template').textContent = 
            resumeTemplates.find(t => t.id === templateId).name;
        localStorage.setItem('selectedResumeTemplate', templateId);
    } else {
        selectedCoverTemplate = templateId;
        document.getElementById('selected-cover-template').textContent = 
            coverLetterTemplates.find(t => t.id === templateId).name;
        localStorage.setItem('selectedCoverTemplate', templateId);
    }
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 p-4 rounded-lg shadow-lg z-50 transform translate-x-full transition-transform duration-300 ${
        type === 'success' ? 'bg-green-500 text-white' : 
        type === 'error' ? 'bg-red-500 text-white' : 
        'bg-blue-500 text-white'
    }`;
    notification.innerHTML = `
        <div class="flex items-center">
        <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'} mr-2"></i>
        <span>${message}</span>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.classList.remove('translate-x-full');
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.classList.add('translate-x-full');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// AI Generation Functions - UPDATED FOR YOUR FLASK BACKEND
async function callAI(prompt, outputId) {
    const loadingElement = document.getElementById('resume-loading');
    const noOutput = document.getElementById('no-output');
    const downloadResumeBtn = document.getElementById('download-resume-btn');
    const downloadCoverBtn = document.getElementById('download-cover-btn');
    
    // Show loading state
    loadingElement.classList.remove('hidden');
    noOutput.classList.add('hidden');
    
    // Show the correct output area
    if (outputId === 'resume-output') {
        document.getElementById('resume-output').classList.remove('hidden');
        document.getElementById('cover-output').classList.add('hidden');
        downloadResumeBtn.classList.remove('hidden');
        downloadCoverBtn.classList.add('hidden');
    } else {
        document.getElementById('cover-output').classList.remove('hidden');
        document.getElementById('resume-output').classList.add('hidden');
        downloadCoverBtn.classList.remove('hidden');
        downloadResumeBtn.classList.add('hidden');
    }
    
        try {
        // ONLY use real AI backend - no fallback
        const response = await generateWithBackend(prompt);
        
        if (response) {
            const formattedResponse = formatAIResponse(response, outputId.includes('resume') ? 'resume' : 'cover');
            document.getElementById(outputId).innerText = formattedResponse;
            showNotification('AI-generated content created successfully!', 'success');
        } else {
            throw new Error('No content received from AI API');
        }
    } catch (error) {
        console.error('AI Generation Failed:', error);
        
        // Show clear error message
        document.getElementById(outputId).innerText = 
            `🚫 AI GENERATION FAILED\n\nError: ${error.message}\n\nPlease ensure:\n• Flask server is running (python app.py)\n• OpenRouter API key is valid\n• Backend is accessible\n\nCheck browser console for details.`;
        
        showNotification('AI generation failed. Check console.', 'error');
    } finally {
        loadingElement.classList.add('hidden');
        noOutput.classList.add('hidden');
    }
}

// Updated to work with your Flask backend
async function generateWithBackend(prompt) {
    try {
        const response = await fetch('/generate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 
                prompt: prompt 
            })
        });
        
        if (!response.ok) {
            throw new Error(`Backend error: ${response.status} ${response.statusText}`);
        }
        
        const data = await response.json();
        console.log('Backend response:', data);
        
        // Extract content based on OpenRouter response structure
        if (data.choices && data.choices[0] && data.choices[0].message) {
            return data.choices[0].message.content;
        } else if (data.error) {
            throw new Error(`API Error: ${data.error.message || 'Unknown error'}`);
        } else {
            throw new Error('Unexpected response format from API');
        }
    } catch (error) {
        console.error('Backend API error:', error);
        throw error;
    }
}

async function generateResume() {
    if (!selectedResumeTemplate) {
        showNotification('Please select a resume template first', 'error');
        openTemplateModal('resume');
        return;
    }
    
    // Enhanced form validation
    const requiredFields = document.querySelectorAll('#resume-form [required]');
    let valid = true;
    let emptyFields = [];
    
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            field.classList.add('border-red-500');
            valid = false;
            emptyFields.push(field.previousElementSibling?.textContent || field.placeholder);
        } else {
            field.classList.remove('border-red-500');
        }
    });
    
    if (!valid) {
        showNotification(`Please fill in required fields: ${emptyFields.join(', ')}`, 'error');
        return;
    }

    const name = document.getElementById("res-name").value;
    const role = document.getElementById("res-role").value;
    const email = document.getElementById("res-email").value;
    const phone = document.getElementById("res-phone").value;
    const location = document.getElementById("res-location").value;
    const summary = document.getElementById("res-summary").value;
    const skills = document.getElementById("res-skills").value;
    const experience = document.getElementById("res-experience").value;
    const education = document.getElementById("res-education").value;
    const linkedin = document.getElementById("res-linkedin").value;
    const portfolio = document.getElementById("res-portfolio").value;

    const template = resumeTemplates.find(t => t.id === selectedResumeTemplate);
    const templateName = template.name;
    const formattingRules = template.formatting;

    const prompt = `TEMPLATE FORMATTING RULES: ${formattingRules}

Create a professional resume for ${name}, applying for ${role}.

CONTACT INFORMATION:
- Email: ${email}
- Phone: ${phone} 
- Location: ${location}
- LinkedIn: ${linkedin}
- Portfolio: ${portfolio}

PROFESSIONAL SUMMARY:
${summary}

SKILLS & TECHNOLOGIES:
${skills}

WORK EXPERIENCE:
${experience}

EDUCATION:
${education}

IMPORTANT: Follow the ${templateName} template formatting rules exactly. Structure the resume according to this template style.`;

    await callAI(prompt, "resume-output");
}

async function generateCover() {
    if (!selectedCoverTemplate) {
        showNotification('Please select a cover letter template first', 'error');
        openTemplateModal('cover');
        return;
    }
    
    // Enhanced form validation
    const requiredFields = document.querySelectorAll('#cover-form [required]');
    let valid = true;
    let emptyFields = [];
    
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            field.classList.add('border-red-500');
            valid = false;
            emptyFields.push(field.previousElementSibling?.textContent || field.placeholder);
        } else {
            field.classList.remove('border-red-500');
        }
    });
    
    if (!valid) {
        showNotification(`Please fill in required fields: ${emptyFields.join(', ')}`, 'error');
        return;
    }

    const name = document.getElementById("cov-name").value;
    const role = document.getElementById("cov-role").value;
    const company = document.getElementById("cov-company").value;
    const location = document.getElementById("cov-location").value;
    const experience = document.getElementById("cov-experience").value;
    const skills = document.getElementById("cov-skills").value;
    const motivation = document.getElementById("cov-motivation").value;
    const summary = document.getElementById("cov-summary").value;

    const template = coverLetterTemplates.find(t => t.id === selectedCoverTemplate);
    const templateName = template.name;
    const formattingRules = template.formatting;

    const prompt = `TEMPLATE FORMATTING RULES: ${formattingRules}

Write a professional cover letter with the following details:

APPLICANT: ${name}
POSITION: ${role} 
COMPANY: ${company}
LOCATION: ${location}

EXPERIENCE: ${experience}
SKILLS: ${skills}
MOTIVATION: ${motivation}
SUMMARY: ${summary}

IMPORTANT: Follow the ${templateName} template formatting rules exactly. Structure the cover letter according to this template style.`;

    await callAI(prompt, "cover-output");
}

function downloadPDF(type) {
    const contentElement = type === 'resume' ? document.getElementById('resume-output') : document.getElementById('cover-output');
    const content = contentElement.innerText;
    
    if (!content || content.includes("🚫 AI GENERATION FAILED") || content.includes("Your generated document will appear here")) {
        alert(`Please generate a valid ${type} first`);
        return;
    }
    
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    
    // Get template info
    const template = type === 'resume' ? 
        resumeTemplates.find(t => t.id === selectedResumeTemplate) : 
        coverLetterTemplates.find(t => t.id === selectedCoverTemplate);
    
    const templateName = template?.name || 'Standard';
    const templateId = template?.id || 'standard';
    
    // Set initial positions
    let yPosition = 30;
    const leftMargin = 20;
    const rightMargin = 190;
    const lineHeight = 7;
    const sectionSpacing = 10;
    
    // Apply professional styling
    doc.setFont('helvetica');
    
    // Add header
    doc.setFillColor(59, 130, 246);
    doc.rect(0, 0, 210, 15, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(16);
    doc.setFont(undefined, 'bold');
    doc.text(type === 'resume' ? 'PROFESSIONAL RESUME' : 'COVER LETTER', 105, 10, { align: 'center' });
    
    // Reset text color for content
    doc.setTextColor(0, 0, 0);
    yPosition = 30;
    
    if (type === 'resume') {
        // Parse resume content with proper formatting
        const sections = content.split(/\n\s*\n/);
        
        sections.forEach(section => {
            if (section.trim() === '') return;
            
            // Check if this is a section header (all caps or ends with colon)
            if (section.match(/^[A-Z\s]+:$/) || section.match(/^[A-Z\s]{3,}$/) || section.includes('===')) {
                // Section header
                if (yPosition > 250) {
                    doc.addPage();
                    yPosition = 30;
                }
                
                const header = section.replace(/=+/g, '').trim();
                doc.setFontSize(14);
                doc.setFont(undefined, 'bold');
                doc.setTextColor(59, 130, 246);
                doc.text(header.toUpperCase(), leftMargin, yPosition);
                yPosition += lineHeight + 2;
                
                // Add underline
                doc.setDrawColor(59, 130, 246);
                doc.setLineWidth(0.5);
                doc.line(leftMargin, yPosition - 1, rightMargin, yPosition - 1);
                yPosition += sectionSpacing;
            } else {
                // Regular content
                doc.setFontSize(10);
                doc.setFont(undefined, 'normal');
                doc.setTextColor(0, 0, 0);
                
                // Split long lines
                const lines = doc.splitTextToSize(section, 170);
                
                lines.forEach(line => {
                    if (yPosition > 270) {
                        doc.addPage();
                        yPosition = 30;
                    }
                    
                    // Check for bullet points or list items
                    if (line.trim().match(/^[•\-]\s/) || line.trim().match(/^\d+\./)) {
                        doc.text('• ' + line.replace(/^[•\-]\s/, '').replace(/^\d+\.\s/, ''), leftMargin + 5, yPosition);
                    } else {
                        doc.text(line, leftMargin, yPosition);
                    }
                    yPosition += lineHeight;
                });
                yPosition += 2;
            }
        });
    } else {
        // Cover letter formatting
        doc.setFontSize(12);
        doc.setFont(undefined, 'normal');
        
        const lines = content.split('\n');
        let isFirstParagraph = true;
        
        lines.forEach(line => {
            if (line.trim() === '') {
                yPosition += 5; // Extra space for paragraph breaks
                return;
            }
            
            if (yPosition > 270) {
                doc.addPage();
                yPosition = 30;
            }
            
            // Format salutation and signature
            if (line.match(/^(Dear|To the|Sincerely|Best regards|Yours truly)/i)) {
                doc.setFont(undefined, 'bold');
                doc.setFontSize(12);
            } else if (isFirstParagraph) {
                doc.setFontSize(12);
                isFirstParagraph = false;
            } else {
                doc.setFontSize(11);
                doc.setFont(undefined, 'normal');
            }
            
            const formattedLines = doc.splitTextToSize(line, 170);
            formattedLines.forEach(formattedLine => {
                if (yPosition > 270) {
                    doc.addPage();
                    yPosition = 30;
                }
                doc.text(formattedLine, leftMargin, yPosition);
                yPosition += lineHeight;
            });
        });
    }
    
    // Add professional footer
    const pageCount = doc.internal.getNumberOfPages();
    for(let i = 1; i <= pageCount; i++) {
        doc.setPage(i);
        doc.setFontSize(8);
        doc.setTextColor(150, 150, 150);
        doc.setFont(undefined, 'normal');
        
        // Footer line
        doc.setDrawColor(200, 200, 200);
        doc.setLineWidth(0.3);
        doc.line(leftMargin, 280, rightMargin, 280);
        
        // Footer text
        doc.text(`Generated with Shruti Mishra's AI Resume Generator - Page ${i} of ${pageCount}`, 105, 285, { align: 'center' });
    }
    
    // Generate filename with timestamp
    const timestamp = new Date().toISOString().slice(0, 10);
    const filename = type === 'resume' ? 
        `Resume_${templateName}_${timestamp}.pdf` : 
        `CoverLetter_${templateName}_${timestamp}.pdf`;
    
    doc.save(filename);
    showNotification('PDF downloaded successfully with professional formatting!', 'success');
}

function applyTemplateStyling(doc, type, templateId) {
    // Reset to default styling
    doc.setFillColor(255, 255, 255);
    doc.rect(0, 0, 210, 297, 'F');
    
    // Different styling based on template
    switch(templateId) {
        case 'modern':
            doc.setFillColor(248, 250, 252);
            doc.rect(0, 0, 210, 297, 'F');
            break;
            
        case 'executive':
            doc.setDrawColor(30, 30, 30);
            doc.setLineWidth(1);
            doc.line(20, 25, 190, 25);
            break;
            
        case 'creative':
            doc.setFillColor(255, 250, 245);
            doc.rect(0, 0, 210, 297, 'F');
            break;
            
        case 'minimalist':
            // Minimal styling - clean white background
            break;
            
        default:
            // Default professional styling
            break;
    }
}
// ===== ENHANCED OUTPUT FUNCTIONALITY =====
// Add this after the existing downloadPDF and applyTemplateStyling functions

// Edit Mode functionality
let isEditMode = false;
let currentEditedType = null;

function toggleEditMode() {
    const viewMode = document.getElementById('view-mode');
    const editMode = document.getElementById('edit-mode');
    const editToggle = document.getElementById('edit-toggle');
    const editTextarea = document.getElementById('edit-textarea');
    
    if (!isEditMode) {
        // Enter edit mode
        const activeOutput = document.querySelector('#resume-output:not(.hidden), #cover-output:not(.hidden)');
        if (!activeOutput || activeOutput.id === 'no-output') {
            showNotification('Please generate content first', 'error');
            return;
        }
        
        currentEditedType = activeOutput.id.includes('resume') ? 'resume' : 'cover';
        editTextarea.value = activeOutput.innerText;
        
        viewMode.classList.add('hidden');
        editMode.classList.remove('hidden');
        editToggle.innerHTML = '<i class="fas fa-eye mr-1"></i> View Mode';
        
        isEditMode = true;
    } else {
        // Exit edit mode
        viewMode.classList.remove('hidden');
        editMode.classList.add('hidden');
        editToggle.innerHTML = '<i class="fas fa-edit mr-1"></i> Edit Output';
        
        isEditMode = false;
    }
}

function saveEditedContent() {
    const editTextarea = document.getElementById('edit-textarea');
    const content = editTextarea.value.trim();
    
    if (!content) {
        showNotification('Content cannot be empty', 'error');
        return;
    }
    
    if (currentEditedType === 'resume') {
        document.getElementById('resume-output').innerText = content;
    } else {
        document.getElementById('cover-output').innerText = content;
    }
    
    toggleEditMode();
    showNotification('Changes saved successfully!', 'success');
}

function copyToClipboard() {
    const activeOutput = document.querySelector('#resume-output:not(.hidden), #cover-output:not(.hidden)');
    
    if (!activeOutput || activeOutput.id === 'no-output') {
        showNotification('No content to copy', 'error');
        return;
    }
    
    const content = activeOutput.innerText;
    navigator.clipboard.writeText(content).then(() => {
        showNotification('Content copied to clipboard!', 'success');
    }).catch(err => {
        console.error('Failed to copy: ', err);
        showNotification('Failed to copy content', 'error');
    });
}

// Enhanced AI response formatting
function formatAIResponse(content, type) {
    // Clean up the response and format it professionally
    let formattedContent = content
        .replace(/```/g, '') // Remove code blocks
        .replace(/\*\*(.*?)\*\*/g, '$1') // Remove bold markers but keep text
        .replace(/\*(.*?)\*/g, '$1') // Remove italic markers but keep text
        .replace(/^#+\s*/gm, '') // Remove markdown headers
        .trim();
    
    // Add professional spacing and formatting
    const lines = formattedContent.split('\n');
    formattedContent = lines.map(line => {
        // Clean up each line
        line = line.trim();
        
        // Add proper spacing for sections
        if (line.match(/^[A-Z][A-Za-z\s]+:$/) || line.match(/^[A-Z\s]{3,}$/)) {
            return '\n' + line.toUpperCase() + '\n' + '='.repeat(line.length) + '\n';
        }
        
        return line;
    }).join('\n');
    
    return formattedContent;
}

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Ctrl+S to save (prevent default and show message)
    if (e.ctrlKey && e.key === 's') {
        e.preventDefault();
        showNotification('Form data is automatically saved as you type!', 'success');
    }
    
    // Ctrl+P to print current document
    if (e.ctrlKey && e.key === 'p') {
        e.preventDefault();
        const activeTab = document.querySelector('.tab-button.active').textContent.trim();
        if (activeTab === 'RESUME') {
            printDocument('resume');
        } else {
            printDocument('cover');
        }
    }
});