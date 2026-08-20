# QorZen Technologies - Categorical Fuzzy Match Chatbot

An enterprise-grade, lightweight, privacy-first FAQ chatbot built with Vanilla JavaScript, Node.js, Express, and Fuse.js. The engine utilizes weighted fuzzy string matching combined with a Regex conversational interceptor layer to deliver natural, robust human-like responses without the latency or costs of external LLM API dependencies.

---

## 🤖 System Instruction Content

This chatbot operates under a strict behavioral execution matrix. Below is the precise operational blueprint hardcoded into the backend processing routing:

### 1. Persona & Boundary Identity
*   **Identity:** Act as an elite, polite, and highly supportive AI assistant exclusively representing **QorZen Technologies**.
*   **Domain Restriction:** You are strictly limited to information containing QorZen Technologies courses, internships, corporate training, pricing structures, and software engineering project lead intakes. 
*   **Out-of-Scope Fallback:** For any query completely unrelated to QorZen Technologies that passes the conversational filters, you must respond *exactly* with: `"Sorry, I can only answer questions related to QorZen Technologies."`

### 2. Conversational Pre-Processor Layer (Human Behavior Alignment)
Before executing database algorithmic similarity calculations, intercept human social traits explicitly to optimize conversational flow:
*   **Greetings:** Match triggers like `hi`, `hello`, `hey`, `hii+`, `good morning`. Safely answer with a welcoming gesture listing out the operational domains.
*   **Gratitude:** Match triggers like `thanks`, `thank you`, `ok thanks`. Return an appreciative closing response encouraging further technical exploration.
*   **Off-Topic/Personal Queries:** Match queries targeting relationships, artificial nature, or personal inquiries (e.g., `do you have gf`, `are you a robot`). Deflect gracefully using humor, reinforcing your digital identity as an AI built specifically for QorZen Technologies.

### 3. Search Execution & Algorithmic Parameters
*   **Data Format:** Query against a strictly structured, categorically indexed schema document (`faq.json`).
*   **Weighted Processing:** Prioritize string variations using multi-key structural weight distribution (`question: 0.7`, `category: 0.2`, `answer: 0.1`).
*   **Fuzzy Threshold Rules:** Enforce a tight sensitivity limit (`threshold: 0.45`). Anything scoring worse must be rejected to prevent mismatched cross-contamination answers (e.g., mapping casual phrases to random course fee entries).

---

## 🛠️ Tech Stack Architecture
*   **Runtime Environment:** Node.js
*   **Backend Server Framework:** Express.js
*   **Algorithmic Engine:** Fuse.js (Weighted Approximate String Matching)
*   **Interception Infrastructure:** Native JavaScript Regular Expressions (RegEx)
*   **User Interface:** Semantic HTML5, Modular CSS3 (Custom Properties/Variables), and Asynchronous Vanilla JavaScript (Fetch API)

---

## 📦 Project Structure
```text
├── public/
│   ├── index.html    # Semantic chatbot layout structure
│   ├── style.css     # Production-grade UI theme & web animations
│   └── script.js     # DOM manipulation, UI streaming states & Fetch calls
├── faq.json          # Categorized knowledge-base vector dictionary 
├── server.js         # Express core, Small-talk interceptors & Fuse engine
├── .gitignore        # Dependency tracking exclusions
└── README.md         # Documentation & System Instructions
```

---

## 🚀 Step-by-Step Deployment Setup

### 1. Initialize and Install Project Dependencies
Open your development console inside the root folder structure and execute:
```bash
npm init -y
npm install express fuse.js
```

### 2. Local Environment Execution
Fire up the local engine server instances by running:
```bash
node server.js
```
The server will boot up instantly. Open your browser and navigate directly to: `http://localhost:3000`

---

## 🧪 Production Test Log Verified

| Intent / Test Question Input | Expected Engine Behavior Strategy | Resolved Answer Routing Output |
| :--- | :--- | :--- |
| `"hii"` | Conversational Interceptor Match (Greetings) | `"Hello! 😊 How can I help you today?..."` |
| `"what courses you offers"` | Fuse.js String Match (Weight: 0.7) | `"We offer courses in IT, AI, programming..."` |
| `"how much you take costs"` | Fuzzy Typo Match (Threshold check pass) | `"Course fees vary by program..."` |
| `"do you have gf"` | Conversational Interceptor Match (Personal boundary) | `"Haha, I'm just an AI assistant... no relationships..."` |
| `"ok thanks"` | Conversational Interceptor Match (Gratitude) | `"You're very welcome! 👍 ..."` |
| `"what is the capital of India"` | Absolute Core Database Failure (No matching index) | `"Sorry, I can only answer questions related to QorZen Technologies."` |

---

## 🖥️ Git Flow Cloud Integration Commands

Execute these commands in sequence to record this implementation into your remote GitHub code preservation cloud branch:

```bash
# Initializing local code architecture tracking
git init

# Stage all production assets and json data sheets
git add .

# Create a clean semantic snapshot version record
git commit -m "docs: add structural README documentation containing explicit system instruction matrix"

# Assign primary branch pointer
git branch -M main

# Link local machine path securely to your GitHub cloud registry
# (Note: Substitute your actual deployment paths into the template line below)
git remote add origin https://github.com/Videsh123695/chat_boat.git

# Stream changes directly into remote repository cloud architecture
git push -u origin main
```
