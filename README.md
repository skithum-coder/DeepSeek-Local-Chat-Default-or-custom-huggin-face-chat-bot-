OpenDeepSeek is a modern, open-source AI chatbot interface built with React and TypeScript, powered by the DeepSeek model from Hugging Face, running through a secure local API backend.
DEMO - https://funny-beijinho-d7ad18.netlify.app/
It focuses on a clean, polished UI, privacy-first architecture, and developer-friendly setup, making it ideal for learning, experimentation, and open-source collaboration.

✨ Features

💬 Chat-style AI interface with a polished UI

⚛️ Built with React + TypeScript

🎨 Modern styling (Tailwind CSS–ready)

🧠 Uses DeepSeek model from Hugging Face

🔐 Local backend API (no API keys exposed to frontend)

🌙 Light / Dark mode support (optional / planned)

📦 Fully open-source

🧩 Easy to extend with new models or features

🏗️ Architecture Overview
Frontend (React + TypeScript)
        |
        |  HTTP Requests (fetch)
        v
Local Backend API (Node.js / Python)
        |
        v
Hugging Face DeepSeek Model


⚠️ The frontend never directly communicates with Hugging Face.
All model requests go through a local backend for security and flexibility.

🛠️ Tech Stack
Frontend

React

TypeScript

Tailwind CSS (recommended)

Framer Motion (optional, for animations)

Backend

Node.js + Express or Python + FastAPI

Hugging Face Inference API

Environment variables for secrets

🚀 Getting Started
1️⃣ Clone the Repository
git clone https://github.com/your-username/OpenDeepSeek.git
cd OpenDeepSeek

2️⃣ Frontend Setup
cd frontend
npm install
npm run dev


The frontend will usually run on:

http://localhost:5173

3️⃣ Backend Setup
cd backend
npm install
npm start


Or (Python version):

pip install -r requirements.txt
uvicorn main:app --reload


Backend runs on:

http://localhost:3000

🔑 Environment Variables

Create a .env file in the backend directory:

HF_API_KEY=your_huggingface_api_key
MODEL_NAME=deepseek-ai/deepseek-chat


⚠️ Never commit your .env file
✔️ Use .env.example for contributors

📡 API Example
Request
POST /api/chat

{
  "message": "Explain TCP/IP in simple terms"
}

Response
{
  "reply": "TCP/IP is the basic communication system of the internet..."
}

📸 Screenshots

(Add screenshots or GIFs here once UI is ready)

/assets/screenshots/

📂 Project Structure
OpenDeepSeek/
│
├── frontend/        # React + TypeScript UI
├── backend/         # Local API server
├── assets/          # Screenshots / logos
├── .gitignore
├── LICENSE
├── README.md
└── CONTRIBUTING.md

🤝 Contributing

Contributions are welcome! 🎉

You can help by:

Improving UI/UX

Fixing bugs

Adding new features

Improving documentation

Supporting additional models

Please read CONTRIBUTING.md before submitting a pull request.

📜 License

This project is licensed under the MIT License.
You are free to use, modify, and distribute this project.

⚠️ Disclaimer

This project is created for educational and research purposes.
Users are responsible for complying with Hugging Face model licenses and usage policies.

🌟 Acknowledgements

Hugging Face

DeepSeek AI team

Open-source community ❤️

📬 Contact

Created by Sithum Kaveesha
If you find this project useful, consider ⭐ starring the repository!
