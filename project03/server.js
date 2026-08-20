const express = require('express');
const path = require('path');
const Fuse = require('fuse.js');
const faqData = require('./faq.json');
const dotenv=require('dotenv')

dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Multi-Key Weighted Fuzzy Search Config
const fuseOptions = {
  keys: [
    { name: 'question', weight: 0.7 },
    { name: 'category', weight: 0.2 }, // Evaluates the structural concept cluster
    { name: 'answer', weight: 0.1 }
  ],
  threshold: 0.45,      
  includeScore: true,
  distance: 120,        
  ignoreLocation: true  
};

const fuse = new Fuse(faqData, fuseOptions);

// Conversational Interceptor for Small Talk
function handleConversationalSmallTalk(input) {
  const cleanInput = input.toLowerCase().trim();

  const greetingRegex = /^(hi|hello|hey|hola|good morning|good afternoon|good evening|hii+)/i;
  if (greetingRegex.test(cleanInput)) {
    return "Hello! 😊 How can I help you today? You can ask me anything about QorZen courses, internships, or technology projects!";
  }

  const thanksRegex = /^(thanks|thank you|ok thanks|okay thanks|thx)/i;
  if (thanksRegex.test(cleanInput)) {
    return "You're very welcome! 👍 Let me know if you need help with anything else regarding QorZen Technologies.";
  }

  const casualRegex = /^(ok|okay|cool|awesome|great|got it|perfect)/i;
  if (casualRegex.test(cleanInput) && cleanInput.length <= 5) {
    return "Awesome! Let me know what you'd like to explore next. 🚀";
  }

  const personalRegex = /(gf|girlfriend|bf|boyfriend|marry|single|human|robot|are you real)/i;
  if (personalRegex.test(cleanInput)) {
    return "Haha, I'm just an AI assistant built to help you with QorZen Technologies! 🤖 So no relationships for me—just pure code and helping you find the right paths!";
  }

  return null; 
}

// Chat API Route Handler
app.post('/chat', (req, res) => {
  try {
    const { question } = req.body;

    if (!question || typeof question !== 'string' || !question.trim()) {
      return res.status(400).json({ error: "A valid textual question is required." });
    }

    const rawQuestion = question.trim();

    // 1. Check for small talk
    const smallTalkReply = handleConversationalSmallTalk(rawQuestion);
    if (smallTalkReply) {
      return res.status(200).json({ answer: smallTalkReply });
    }

    // 2. Perform advanced multi-key fuzzy search
    const searchResults = fuse.search(rawQuestion);

    if (searchResults.length > 0) {
      const topMatch = searchResults[0].item; // Tightly accesses index zero safely
      return res.status(200).json({ answer: topMatch.answer });
    }

    // 3. Fallback Reply
    return res.status(200).json({ 
      answer: "Sorry, I can only answer questions related to QorZen Technologies." 
    });

  } catch (error) {
    console.error("Application Execution Fault:", error);
    return res.status(500).json({ error: "Internal service process breakdown." });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Categorically indexed FAQ engine running on http://localhost:${PORT}`);
});