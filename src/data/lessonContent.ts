import type { Lesson } from "../types/lesson"

export const lessonContent: Lesson[] = [
  {
    id: 1,
    title: "Bonjour! Greetings and Introductions",
    level: "A1 Beginner",
    goal: "Learn the basics of French pronunciation, greetings, and how to introduce yourself confidently in real situations.",
    objective: "You will be able to greet someone, say your name, and use polite words in everyday situations.",
    whyItMatters: "These are the first phrases you will use every time you meet a neighbour, shopkeeper, or classmate in France.",
    description: "Master the first social building blocks of French: polite greetings, introductions, and everyday courtesy.",
    vocabularyGroups: [
      {
        title: "Greetings",
        words: [
          { french: "Bonjour", pronunciation: "bohn-ZHOOR", english: "Hello / Good morning" },
          { french: "Bonsoir", pronunciation: "bohn-SWAHR", english: "Good evening" },
          { french: "Salut", pronunciation: "sah-LU", english: "Hi (informal)" },
          { french: "Au revoir", pronunciation: "oh ruh-VWAHR", english: "Goodbye" }
        ]
      },
      {
        title: "Politeness",
        words: [
          { french: "Merci", pronunciation: "mehr-SEE", english: "Thank you" },
          { french: "S'il vous plaît", pronunciation: "seel voo PLEH", english: "Please" },
          { french: "Pardon", pronunciation: "par-DOHN", english: "Sorry / Excuse me" },
          { french: "Excusez-moi", pronunciation: "ex-kyoo-ZAY mwah", english: "Excuse me" }
        ]
      },
      {
        title: "Introducing yourself",
        words: [
          { french: "Je m'appelle", pronunciation: "zhuh mah-PELL", english: "My name is" },
          { french: "Je suis", pronunciation: "zhuh SWEE", english: "I am" },
          { french: "Enchanté", pronunciation: "ahn-shahn-TAY", english: "Pleased to meet you" },
          { french: "Monsieur", pronunciation: "muh-SYUR", english: "Sir / Mr." },
          { french: "Madame", pronunciation: "mah-DAHM", english: "Madam / Mrs." }
        ]
      }
    ],
    vocabulary: [],
    phrases: [
      { french: "Bonjour, monsieur.", english: "Hello, sir." },
      { french: "Bonsoir, madame.", english: "Good evening, madam." },
      { french: "Comment vous vous appelez ?", english: "What is your name?" },
      { french: "Je m'appelle Ana.", english: "My name is Ana." },
      { french: "Enchanté, merci.", english: "Pleased to meet you, thank you." },
      { french: "S'il vous plaît, où est la sortie ?", english: "Please, where is the exit?" }
    ],
    conversation: [
      { speaker: "Alicia", french: "Bonjour ! Je m'appelle Alicia.", english: "Hello! My name is Alicia." },
      { speaker: "Marc", french: "Bonjour Alicia. Je m'appelle Marc.", english: "Hello Alicia. My name is Marc." },
      { speaker: "Alicia", french: "Enchanté, Marc.", english: "Pleased to meet you, Marc." }
    ],
    grammar: [
      {
        title: "Using je m'appelle",
        explanation: "Use je m'appelle to introduce your name in a natural and common way.",
        examples: ["Je m'appelle Luc.", "Je m'appelle Sofia."]
      }
    ],
    pronunciation: [
      { rule: "The French 'r' is pronounced in the back of the throat, so it sounds softer than the English 'r'.", examples: ["Bonjour", "Merci", "Paris"] }
    ],
    cultureTip: "In France, saying Bonjour before asking for anything is considered polite and expected.",
    practice: {
      multipleChoice: [
        { prompt: "What does Bonjour mean?", options: ["Goodbye", "Hello", "Thank you"], answer: "Hello" },
        { prompt: "Which phrase means 'My name is...'?", options: ["Je suis fatigué", "Je m'appelle", "Merci beaucoup"], answer: "Je m'appelle" }
      ],
      translation: [{ prompt: "Translate: I am Ana.", answer: "" }],
      fillInTheBlanks: [
        {
          prompt: "Write your introduction:",
          answer: "",
          type: "personal"
        }
      ],
      speaking: ["Introduce yourself and say how you are feeling today."]
    },
    homework: [
      { task: "Introduce yourself to a classmate in French using three greeting words.", example: "Bonjour, je m'appelle..." },
      { task: "Practice saying please, sorry, and goodbye politely.", example: "S'il vous plaît, pardon, au revoir" }
    ],
    mission: { title: "Greet a neighbour", description: "Say Bonjour, introduce yourself, and ask for the time or a small item politely." },
    quiz: [
      { question: "What does Bonjour mean?", options: ["Goodbye", "Hello", "Thank you"], answer: "Hello" },
      { question: "Which word means 'please' in French?", options: ["Merci", "Pardon", "S'il vous plaît"], answer: "S'il vous plaît" }
    ]
  },
  {
    id: 2,
    title: "How Are You? Polite Conversation",
    level: "A1 Beginner",
    goal: "Learn how to ask how someone is and answer politely in everyday French.",
    objective: "You will be able to check on someone’s wellbeing and respond naturally in everyday conversation.",
    whyItMatters: "This is one of the most common real-life exchanges in France, whether you are speaking to a neighbour, colleague, or shop assistant.",
    description: "Build practical conversation skills for greetings, check-ins, and small social exchanges.",
    vocabularyGroups: [
      {
        title: "How are you?",
        words: [
          { french: "Comment ça va ?", pronunciation: "koh-MAHN sah VAH", english: "How are you?" },
          { french: "Ça va", pronunciation: "sah VAH", english: "I’m fine" },
          { french: "Très bien", pronunciation: "tray byan", english: "Very well" },
          { french: "Pas mal", pronunciation: "pah mahl", english: "Not bad" },
          { french: "Comme ci, comme ça", pronunciation: "kohm see kohm sah", english: "So-so" }
        ]
      },
      {
        title: "Feelings",
        words: [
          { french: "Fatigué", pronunciation: "fah-gee-GAY", english: "Tired" },
          { french: "Content", pronunciation: "kohn-TAHN", english: "Happy" },
          { french: "Triste", pronunciation: "treest", english: "Sad" },
          { french: "Occupé", pronunciation: "oh-kyoo-PAY", english: "Busy" }
        ]
      },
      {
        title: "Polite replies",
        words: [
          { french: "Merci", pronunciation: "mehr-SEE", english: "Thank you" },
          { french: "De rien", pronunciation: "duh ryan", english: "You’re welcome" },
          { french: "Et toi ?", pronunciation: "ay TWAH", english: "And you?" },
          { french: "Et vous ?", pronunciation: "ay VOO", english: "And you? (formal)" }
        ]
      }
    ],
    vocabulary: [],
    phrases: [
      { french: "Ça va bien, merci.", english: "I’m doing well, thank you." },
      { french: "Pas mal, et toi ?", english: "Not bad, and you?" },
      { french: "Je suis fatigué aujourd'hui.", english: "I am tired today." },
      { french: "Très bien, merci beaucoup.", english: "Very well, thank you very much." }
    ],
    conversation: [
      { speaker: "Sophie", french: "Bonjour ! Comment ça va ?", english: "Hello! How are you?" },
      { speaker: "Pierre", french: "Ça va, merci. Et toi ?", english: "I’m fine, thank you. And you?" },
      { speaker: "Sophie", french: "Très bien, merci.", english: "Very well, thank you." }
    ],
    grammar: [
      {
        title: "Using ça va",
        explanation: "Use ça va to say that everything is fine, or to ask how someone is feeling.",
        examples: ["Ça va ?", "Ça va bien."]
      }
    ],
    pronunciation: [
      { rule: "The 'ou' in vous sounds like a rounded 'oo' sound.", examples: ["vous", "tout", "bonjour"] }
    ],
    cultureTip: "In French-speaking settings, asking how someone is doing is often a warm social habit, not only a literal question.",
    practice: {
      multipleChoice: [
        { prompt: "What does Comment ça va ? mean?", options: ["How are you?", "See you later", "My name is..."], answer: "How are you?" },
        { prompt: "Which response is polite?", options: ["Très bien, merci.", "Au revoir.", "Je suis fatigué."], answer: "Très bien, merci." }
      ],
      translation: [{ prompt: "Translate: Not bad, and you?", answer: "" }],
      fillInTheBlanks: [{ prompt: "___ va, merci.", answer: "" }],
      speaking: ["Ask a friend how they are and answer with your own response."]
    },
    homework: [
      { task: "Practice one short check-in conversation with a friend.", example: "Comment ça va ? Ça va, merci." },
      { task: "Say two different answers about your mood.", example: "Pas mal, merci. Très bien, merci." }
    ],
    mission: { title: "Daily check-in", description: "Ask a shopkeeper or classmate how they are before you leave." },
    quiz: [
      { question: "What does Et toi ? mean?", options: ["And you?", "Goodbye", "Please"], answer: "And you?" },
      { question: "Which answer means 'very well'?", options: ["Pas mal", "Très bien", "Mal"], answer: "Très bien" }
    ]
  },
  {
    id: 3,
    title: "Numbers 0–20",
    level: "A1 Beginner",
    goal: "Learn to count from zero to twenty and use basic numbers in simple everyday sentences.",
    objective: "You will be able to say numbers clearly, count aloud, and use them for prices or ages.",
    whyItMatters: "Numbers help you in shops, on public transport, when giving your age, and when reading addresses or prices.",
    description: "Focus on the core numbers needed for prices, ages, and simple counting in French.",
    vocabularyGroups: [
      {
        title: "Numbers 0–10",
        words: [
          { french: "zéro", pronunciation: "zay-ROH", english: "zero" },
          { french: "un", pronunciation: "uhn", english: "one" },
          { french: "deux", pronunciation: "duh", english: "two" },
          { french: "trois", pronunciation: "twah", english: "three" },
          { french: "quatre", pronunciation: "katr", english: "four" },
          { french: "cinq", pronunciation: "sank", english: "five" },
          { french: "six", pronunciation: "sees", english: "six" },
          { french: "sept", pronunciation: "set", english: "seven" },
          { french: "huit", pronunciation: "weet", english: "eight" },
          { french: "neuf", pronunciation: "nurf", english: "nine" },
          { french: "dix", pronunciation: "dees", english: "ten" }
        ]
      },
      {
        title: "Numbers 11–20",
        words: [
          { french: "onze", pronunciation: "ohnz", english: "eleven" },
          { french: "douze", pronunciation: "dooz", english: "twelve" },
          { french: "treize", pronunciation: "trehz", english: "thirteen" },
          { french: "quatorze", pronunciation: "kah-TORZ", english: "fourteen" },
          { french: "quinze", pronunciation: "kanz", english: "fifteen" },
          { french: "seize", pronunciation: "sehz", english: "sixteen" },
          { french: "dix-sept", pronunciation: "dees-set", english: "seventeen" },
          { french: "dix-huit", pronunciation: "dees-weet", english: "eighteen" },
          { french: "dix-neuf", pronunciation: "dees-nurf", english: "nineteen" },
          { french: "vingt", pronunciation: "van", english: "twenty" }
        ]
      },
      {
        title: "Useful number words",
        words: [
          { french: "combien", pronunciation: "kohm-byan", english: "how many" },
          { french: "nombre", pronunciation: "nohm-bruh", english: "number" },
          { french: "compter", pronunciation: "kohn-TAY", english: "to count" }
        ]
      }
    ],
    vocabulary: [],
    phrases: [
      { french: "Un, deux, trois.", english: "One, two, three." },
      { french: "Combien ?", english: "How many?" },
      { french: "J'ai douze ans.", english: "I am twelve years old." },
      { french: "Je compte jusqu'à vingt.", english: "I count up to twenty." }
    ],
    conversation: [
      { speaker: "Emma", french: "Bonjour ! J'ai vingt ans.", english: "Hello! I am twenty years old." },
      { speaker: "Léo", french: "Je viens de Lyon. Et toi ?", english: "I come from Lyon. And you?" }
    ],
    grammar: [
      {
        title: "Counting in French",
        explanation: "Numbers from zero to twenty are the foundation for prices, ages, and simple quantities.",
        examples: ["un", "dix", "quinze", "vingt"]
      }
    ],
    pronunciation: [
      { rule: "The nasal vowel in un and vingt is a key beginner sound in French.", examples: ["un", "vingt", "cinquante"] }
    ],
    cultureTip: "In everyday French, saying your age is very common, so learning numbers early makes daily conversation much easier.",
    practice: {
      multipleChoice: [
        { prompt: "Which number is 'ten' in French?", options: ["un", "dix", "vingt"], answer: "dix" },
        { prompt: "What does J'ai vingt ans mean?", options: ["I’m twenty years old", "I’m from Paris", "I like coffee"], answer: "I’m twenty years old" }
      ],
      translation: [{ prompt: "Translate: twelve", answer: "" }],
      fillInTheBlanks: [{ prompt: "___ ans.", answer: "" }],
      speaking: ["Count from zero to twenty aloud."]
    },
    homework: [
      { task: "Count from zero to twenty aloud in French.", example: "zéro, un, deux, trois... vingt" },
      { task: "Say three simple quantities in a shop or classroom.", example: "un livre, deux stylos, trois cahiers" }
    ],
    mission: { title: "Count in a shop", description: "Use numbers to ask for or describe small quantities while shopping in France." },
    quiz: [
      { question: "What is 'five' in French?", options: ["cinq", "sept", "neuf"], answer: "cinq" },
      { question: "Which number is 'seventeen'?", options: ["dix-sept", "seize", "dix-neuf"], answer: "dix-sept" }
    ]
  },
  {
    id: 4,
    title: "Days, Dates, and the Calendar",
    level: "A1 Beginner",
    goal: "Learn the days of the week and use them to talk about plans, schedules, and dates.",
    objective: "You will be able to say the days of the week, refer to today or tomorrow, and talk about appointments.",
    whyItMatters: "This helps you organise your week, understand plans, and make simple appointments in France.",
    description: "Practice the days of the week and basic calendar expressions in a clear, focused lesson.",
    vocabularyGroups: [
      {
        title: "Days of the week",
        words: [
          { french: "lundi", pronunciation: "luhn-DEE", english: "Monday" },
          { french: "mardi", pronunciation: "mahr-DEE", english: "Tuesday" },
          { french: "mercredi", pronunciation: "mehr-Kruh-DEE", english: "Wednesday" },
          { french: "jeudi", pronunciation: "zhuh-DEE", english: "Thursday" },
          { french: "vendredi", pronunciation: "vahn-Druh-DEE", english: "Friday" },
          { french: "samedi", pronunciation: "sah-MAH-DEE", english: "Saturday" },
          { french: "dimanche", pronunciation: "dee-MAHNSH", english: "Sunday" }
        ]
      },
      {
        title: "Time words",
        words: [
          { french: "aujourd'hui", pronunciation: "oh-ZHURD-wee", english: "today" },
          { french: "demain", pronunciation: "duh-MAN", english: "tomorrow" },
          { french: "hier", pronunciation: "ee-AIR", english: "yesterday" },
          { french: "semaine", pronunciation: "suh-MEHN", english: "week" },
          { french: "date", pronunciation: "daht", english: "date" }
        ]
      }
    ],
    vocabulary: [],
    phrases: [
      { french: "Aujourd'hui, c'est lundi.", english: "Today is Monday." },
      { french: "Demain, nous avons un rendez-vous.", english: "Tomorrow, we have an appointment." },
      { french: "Je travaille vendredi.", english: "I work on Friday." },
      { french: "Quelle date ?", english: "What date?" }
    ],
    conversation: [
      { speaker: "Claire", french: "Aujourd'hui, c'est mardi.", english: "Today is Tuesday." },
      { speaker: "Nico", french: "Demain, nous allons au musée.", english: "Tomorrow, we are going to the museum." }
    ],
    grammar: [
      {
        title: "Using c'est for the day",
        explanation: "Use c'est to say what day it is.",
        examples: ["C'est lundi.", "C'est mercredi."]
      }
    ],
    pronunciation: [
      { rule: "Final consonants in words like lundi and mardi are often softer in natural speech.", examples: ["lundi", "mardi", "vendredi"] }
    ],
    cultureTip: "Many French people plan their week carefully, so knowing the days and dates makes everyday conversation much smoother.",
    practice: {
      multipleChoice: [
        { prompt: "What is the French word for Friday?", options: ["samedi", "vendredi", "dimanche"], answer: "vendredi" },
        { prompt: "Which phrase means 'Today is Monday'?", options: ["Aujourd'hui, c'est mardi.", "Aujourd'hui, c'est lundi.", "Demain, c'est lundi."], answer: "Aujourd'hui, c'est lundi." }
      ],
      translation: [{ prompt: "Translate: Tomorrow, we have an appointment.", answer: "" }],
      fillInTheBlanks: [{ prompt: "Aujourd'hui, c'est ___.", answer: "" }],
      speaking: ["Tell your teacher what you are doing on two days this week."]
    },
    homework: [
      { task: "Say the days of the week out loud in order.", example: "lundi, mardi, mercredi..." },
      { task: "Describe your weekly plan using two days.", example: "Je travaille lundi et jeudi." }
    ],
    mission: { title: "Plan your week", description: "Tell a friend what you are doing on two different days of the week." },
    quiz: [
      { question: "What is the French word for Sunday?", options: ["samedi", "dimanche", "vendredi"], answer: "dimanche" },
      { question: "What does aujourd'hui mean?", options: ["tomorrow", "today", "yesterday"], answer: "today" }
    ]
  },
  {
    id: 5,
    title: "Age, Birthday, and Personal Information",
    level: "A1 Beginner",
    goal: "Learn how to talk about your age, birthday, and basic personal details.",
    objective: "You will be able to say how old you are, ask about someone else's age, and talk about your birthday.",
    whyItMatters: "These are everyday topics in France when meeting people, filling forms, or talking with classmates.",
    description: "Use simple personal information words in real-life conversation.",
    vocabularyGroups: [
      {
        title: "Age and birthday",
        words: [
          { french: "âge", pronunciation: "ahzh", english: "age" },
          { french: "anniversaire", pronunciation: "ahn-nee-vair-SAIR", english: "birthday" },
          { french: "naissance", pronunciation: "nay-SAHNS", english: "birth" },
          { french: "fête", pronunciation: "feht", english: "party" },
          { french: "quand", pronunciation: "kahn", english: "when" }
        ]
      },
      {
        title: "Personal details",
        words: [
          { french: "nom", pronunciation: "nohn", english: "name" },
          { french: "prénom", pronunciation: "pray-NOM", english: "first name" },
          { french: "nationalité", pronunciation: "nash-yoh-nah-lee-TAY", english: "nationality" },
          { french: "adresse", pronunciation: "ah-dress", english: "address" },
          { french: "ville", pronunciation: "veel", english: "city" }
        ]
      }
    ],
    vocabulary: [],
    phrases: [
      { french: "J'ai vingt ans.", english: "I am twenty years old." },
      { french: "Mon anniversaire est en avril.", english: "My birthday is in April." },
      { french: "Je m'appelle Léa.", english: "My name is Léa." },
      { french: "J'habite à Lyon.", english: "I live in Lyon." }
    ],
    conversation: [
      { speaker: "Mina", french: "Quel âge as-tu ?", english: "How old are you?" },
      { speaker: "Paul", french: "J'ai dix-huit ans.", english: "I am eighteen years old." }
    ],
    grammar: [
      {
        title: "Using J'ai for age",
        explanation: "Use J'ai followed by a number and ans to say your age.",
        examples: ["J'ai quinze ans.", "J'ai vingt ans."]
      }
    ],
    pronunciation: [
      { rule: "The 'ai' in j'ai is pronounced like the 'eh' in 'say'.", examples: ["j'ai", "maison", "très"] }
    ],
    cultureTip: "In France, it is common to ask someone their age in everyday conversation, especially when getting to know them.",
    practice: {
      multipleChoice: [
        { prompt: "How do you say 'I am twenty years old' in French?", options: ["J'ai vingt ans", "Je suis vingt", "J'ai vingt"], answer: "J'ai vingt ans" },
        { prompt: "What does anniversaire mean?", options: ["Birthday", "Address", "City"], answer: "Birthday" }
      ],
      translation: [{ prompt: "Translate: My birthday is in June.", answer: "" }],
      fillInTheBlanks: [{ prompt: "J'ai ___ ans.", answer: "" }],
      speaking: ["Say your age, your name, and where you live."]
    },
    homework: [
      { task: "Write down your name, age, and city.", example: "Je m'appelle..., j'ai..., j'habite à..." },
      { task: "Ask a friend their age and say your own.", example: "Quel âge as-tu ? J'ai..." }
    ],
    mission: { title: "Introduce yourself at school", description: "Say your name, age, and city to someone new in French." },
    quiz: [
      { question: "What does âge mean?", options: ["age", "city", "name"], answer: "age" },
      { question: "Which phrase means 'How old are you?'", options: ["Quel âge as-tu ?", "Comment ça va ?", "Où habites-tu ?"], answer: "Quel âge as-tu ?" }
    ]
  },
  {
    id: 6,
    title: "Family and Relationships",
    level: "A1 Beginner",
    goal: "Learn the names of family members and build simple sentences about your family.",
    objective: "You will be able to talk about your family members and describe basic relationships.",
    whyItMatters: "Family is one of the most common topics in everyday conversation, especially when making friends or settling into a new place.",
    description: "Learn the main family vocabulary and use it in simple, practical sentences.",
    vocabularyGroups: [
      {
        title: "Immediate family",
        words: [
          { french: "mère", pronunciation: "mehr", english: "mother" },
          { french: "père", pronunciation: "pehr", english: "father" },
          { french: "frère", pronunciation: "frehr", english: "brother" },
          { french: "sœur", pronunciation: "sur", english: "sister" },
          { french: "enfant", pronunciation: "ahn-FAHN", english: "child" }
        ]
      },
      {
        title: "Extended family",
        words: [
          { french: "grand-mère", pronunciation: "grahn-mehr", english: "grandmother" },
          { french: "grand-père", pronunciation: "grahn-pehr", english: "grandfather" },
          { french: "oncle", pronunciation: "ohnk-l", english: "uncle" },
          { french: "tante", pronunciation: "tahnt", english: "aunt" },
          { french: "cousin", pronunciation: "koo-ZAN", english: "cousin" }
        ]
      }
    ],
    vocabulary: [],
    phrases: [
      { french: "C'est ma mère.", english: "This is my mother." },
      { french: "Il a un frère.", english: "He has a brother." },
      { french: "Elle s'appelle Marie.", english: "Her name is Marie." },
      { french: "Nous avons une grande famille.", english: "We have a big family." }
    ],
    conversation: [
      { speaker: "Luc", french: "Tu as des frères ou des sœurs ?", english: "Do you have brothers or sisters?" },
      { speaker: "Camille", french: "J'ai une sœur.", english: "I have one sister." }
    ],
    grammar: [
      {
        title: "Using possessive adjectives",
        explanation: "Use mon, ma, and mes to show possession in French.",
        examples: ["mon père", "ma mère", "mes frères"]
      }
    ],
    pronunciation: [
      { rule: "The final consonant in words like frère and sœur is often softened, so they sound shorter than they look.", examples: ["frère", "sœur", "fleur"] }
    ],
    cultureTip: "Family remains a central part of everyday life in France, so these words come up often in conversation.",
    practice: {
      multipleChoice: [
        { prompt: "What is 'mother' in French?", options: ["mère", "père", "sœur"], answer: "mère" },
        { prompt: "Which word means 'brother'?", options: ["frère", "grand-mère", "cousin"], answer: "frère" }
      ],
      translation: [{ prompt: "Translate: This is my sister.", answer: "" }],
      fillInTheBlanks: [{ prompt: "C'est ma ___.", answer: "" }],
      speaking: ["Describe your family in three sentences."]
    },
    homework: [
      { task: "Draw a simple family tree and label the members.", example: "ma mère, mon père, ma sœur" },
      { task: "Say who is in your family.", example: "J'ai une sœur et deux frères." }
    ],
    mission: { title: "Tell someone about your family", description: "Introduce your family members to a classmate or new neighbour in French." },
    quiz: [
      { question: "What does père mean?", options: ["mother", "father", "sister"], answer: "father" },
      { question: "Which word means 'grandmother'?", options: ["grand-père", "grand-mère", "tante"], answer: "grand-mère" }
    ]
  },
  {
    id: 7,
    title: "Food and Drinks",
    level: "A1 Beginner",
    goal: "Learn essential food and drink vocabulary for everyday life in France.",
    objective: "You will be able to name common foods and drinks and talk about what you want to eat or drink.",
    whyItMatters: "Food is central to daily life, from cafés to supermarkets and shared meals.",
    description: "Learn the words you need to order simple meals and talk about eating habits.",
    vocabularyGroups: [
      {
        title: "Food",
        words: [
          { french: "pain", pronunciation: "pan", english: "bread" },
          { french: "eau", pronunciation: "oh", english: "water" },
          { french: "lait", pronunciation: "lay", english: "milk" },
          { french: "café", pronunciation: "kah-FAY", english: "coffee" },
          { french: "thé", pronunciation: "tay", english: "tea" },
          { french: "fromage", pronunciation: "froh-MAZH", english: "cheese" },
          { french: "fruit", pronunciation: "frwee", english: "fruit" }
        ]
      },
      {
        title: "Meals and eating",
        words: [
          { french: "déjeuner", pronunciation: "day-zhuh-NAY", english: "lunch" },
          { french: "dîner", pronunciation: "dee-NAY", english: "dinner" },
          { french: "manger", pronunciation: "mahn-ZHAY", english: "to eat" },
          { french: "boire", pronunciation: "bwahr", english: "to drink" },
          { french: "bon", pronunciation: "bohn", english: "good" }
        ]
      }
    ],
    vocabulary: [],
    phrases: [
      { french: "Je voudrais un café.", english: "I would like a coffee." },
      { french: "Je bois de l'eau.", english: "I drink water." },
      { french: "J'aime le fromage.", english: "I like cheese." },
      { french: "Nous mangeons à midi.", english: "We eat at noon." }
    ],
    conversation: [
      { speaker: "Amina", french: "Qu'est-ce que tu bois ?", english: "What are you drinking?" },
      { speaker: "Omar", french: "Je bois du thé.", english: "I am drinking tea." }
    ],
    grammar: [
      {
        title: "Using je voudrais",
        explanation: "Use je voudrais to politely ask for something.",
        examples: ["Je voudrais un café.", "Je voudrais de l'eau."]
      }
    ],
    pronunciation: [
      { rule: "The letters 'ou' in voudrais are pronounced like the 'oo' in 'food'.", examples: ["voudrais", "vous", "nous"] }
    ],
    cultureTip: "In France, cafés are social places, and ordering a simple drink is one of the easiest ways to begin speaking.",
    practice: {
      multipleChoice: [
        { prompt: "What does boire mean?", options: ["to eat", "to drink", "to sleep"], answer: "to drink" },
        { prompt: "Which word means 'water'?", options: ["lait", "eau", "café"], answer: "eau" }
      ],
      translation: [{ prompt: "Translate: I would like a coffee.", answer: "" }],
      fillInTheBlanks: [{ prompt: "Je voudrais un ___.", answer: "" }],
      speaking: ["Order a drink in a café using one phrase."]
    },
    homework: [
      { task: "Make a list of five foods and drinks you know in French.", example: "pain, eau, café, fromage, thé" },
      { task: "Practice asking for a drink politely.", example: "Je voudrais un café." }
    ],
    mission: { title: "Order a drink", description: "Go to a café and order a simple drink in French." },
    quiz: [
      { question: "What does café mean?", options: ["tea", "coffee", "milk"], answer: "coffee" },
      { question: "What does manger mean?", options: ["to eat", "to drink", "to walk"], answer: "to eat" }
    ]
  },
  {
    id: 8,
    title: "Shopping Basics",
    level: "A1 Beginner",
    goal: "Learn the language needed to shop for everyday items in France.",
    objective: "You will be able to ask for products, mention what you need, and understand simple store questions.",
    whyItMatters: "Shopping is one of the most practical daily situations for newcomers in France.",
    description: "Practice the words and phrases used in supermarkets, bakeries, and small shops.",
    vocabularyGroups: [
      {
        title: "Things to buy",
        words: [
          { french: "magasin", pronunciation: "mah-gah-ZAN", english: "shop" },
          { french: "produit", pronunciation: "proh-DWEE", english: "product" },
          { french: "pain", pronunciation: "pan", english: "bread" },
          { french: "lait", pronunciation: "lay", english: "milk" },
          { french: "beurre", pronunciation: "bur", english: "butter" },
          { french: "oeuf", pronunciation: "uf", english: "egg" }
        ]
      },
      {
        title: "Shopping actions",
        words: [
          { french: "acheter", pronunciation: "ah-shuh-TAY", english: "to buy" },
          { french: "chercher", pronunciation: "sher-SHAY", english: "to look for" },
          { french: "trouver", pronunciation: "troo-VAY", english: "to find" },
          { french: "besoin", pronunciation: "buh-ZWAN", english: "need" },
          { french: "prix", pronunciation: "pree", english: "price" }
        ]
      }
    ],
    vocabulary: [],
    phrases: [
      { french: "Je cherche du pain.", english: "I am looking for bread." },
      { french: "Je voudrais acheter du lait.", english: "I would like to buy some milk." },
      { french: "Où est le fromage ?", english: "Where is the cheese?" },
      { french: "Combien coûte cela ?", english: "How much does that cost?" }
    ],
    conversation: [
      { speaker: "Client", french: "Bonjour, je cherche du pain.", english: "Hello, I am looking for bread." },
      { speaker: "Vendeur", french: "Bien sûr, il est ici.", english: "Of course, it is here." }
    ],
    grammar: [
      {
        title: "Using du, de la, and des",
        explanation: "Use du, de la, and des for partitive or unspecified quantities of something.",
        examples: ["du pain", "de la salade", "des œufs"]
      }
    ],
    pronunciation: [
      { rule: "The 'r' in produit and acheter is often soft and not strongly rolled.", examples: ["produit", "acheter", "prix"] }
    ],
    cultureTip: "French shops often have a friendly but efficient style, so simple, polite requests are appreciated.",
    practice: {
      multipleChoice: [
        { prompt: "What does acheter mean?", options: ["to buy", "to sell", "to look for"], answer: "to buy" },
        { prompt: "Which phrase means 'Where is the cheese?'", options: ["Où est le fromage ?", "Je cherche du pain.", "Combien coûte cela ?"], answer: "Où est le fromage ?" }
      ],
      translation: [{ prompt: "Translate: I am looking for bread.", answer: "" }],
      fillInTheBlanks: [{ prompt: "Je cherche du ___.", answer: "" }],
      speaking: ["Ask for one item in a shop using a polite phrase."]
    },
    homework: [
      { task: "Write down three things you might buy in a shop.", example: "du pain, du lait, des œufs" },
      { task: "Practice asking where something is.", example: "Où est le fromage ?" }
    ],
    mission: { title: "Buy one everyday item", description: "Go to a shop and ask for one common item in French." },
    quiz: [
      { question: "What does magasin mean?", options: ["shop", "bread", "milk"], answer: "shop" },
      { question: "What does prix mean?", options: ["price", "product", "need"], answer: "price" }
    ]
  },
  {
    id: 9,
    title: "Money, Prices, and Paying",
    level: "A1 Beginner",
    goal: "Learn the basic vocabulary for money, prices, and paying in real situations.",
    objective: "You will be able to ask how much something costs and understand simple payment phrases.",
    whyItMatters: "This is essential when buying food, paying for transport, or handling everyday costs in France.",
    description: "Use practical money words to ask about prices and complete a purchase.",
    vocabularyGroups: [
      {
        title: "Money words",
        words: [
          { french: "argent", pronunciation: "ahr-ZHAHN", english: "money" },
          { french: "euro", pronunciation: "OY-roh", english: "euro" },
          { french: "cent", pronunciation: "sahn", english: "hundred" },
          { french: "prix", pronunciation: "pree", english: "price" },
          { french: "payer", pronunciation: "pay-AY", english: "to pay" }
        ]
      },
      {
        title: "Payment phrases",
        words: [
          { french: "combien", pronunciation: "kohm-byan", english: "how much" },
          { french: "coûte", pronunciation: "koot", english: "costs" },
          { french: "carte", pronunciation: "kart", english: "card" },
          { french: "espèces", pronunciation: "ay-SPES", english: "cash" },
          { french: "ticket", pronunciation: "tee-KAY", english: "ticket" }
        ]
      }
    ],
    vocabulary: [],
    phrases: [
      { french: "Combien coûte cela ?", english: "How much does that cost?" },
      { french: "Je veux payer par carte.", english: "I want to pay by card." },
      { french: "Je n'ai pas d'argent.", english: "I do not have any money." },
      { french: "C'est combien ?", english: "How much is it?" }
    ],
    conversation: [
      { speaker: "Client", french: "Combien coûte ce café ?", english: "How much does this coffee cost?" },
      { speaker: "Serveur", french: "Deux euros.", english: "Two euros." }
    ],
    grammar: [
      {
        title: "Using combien and coûte",
        explanation: "Use combien to ask a price and coûte to say that something costs a certain amount.",
        examples: ["Combien coûte le pain ?", "Le pain coûte deux euros."]
      }
    ],
    pronunciation: [
      { rule: "The 'ou' in coûte is pronounced like a short 'oo' sound.", examples: ["coûte", "vous", "tout"] }
    ],
    cultureTip: "In France, cash and card are both common, and asking the price politely is part of everyday life.",
    practice: {
      multipleChoice: [
        { prompt: "What does payer mean?", options: ["to buy", "to pay", "to cost"], answer: "to pay" },
        { prompt: "Which phrase means 'How much does that cost?'", options: ["Combien coûte cela ?", "Je cherche du pain.", "Où est le fromage ?"], answer: "Combien coûte cela ?" }
      ],
      translation: [{ prompt: "Translate: I want to pay by card.", answer: "" }],
      fillInTheBlanks: [{ prompt: "C'est ___ ?", answer: "" }],
      speaking: ["Ask how much an item costs and answer with a price."]
    },
    homework: [
      { task: "Practice asking how much something costs.", example: "Combien coûte cela ?" },
      { task: "Say one price in euros.", example: "Deux euros." }
    ],
    mission: { title: "Pay for a small purchase", description: "Buy something small and say how you want to pay in French." },
    quiz: [
      { question: "What does argent mean?", options: ["money", "price", "card"], answer: "money" },
      { question: "Which word means 'card'?", options: ["carte", "argent", "ticket"], answer: "carte" }
    ]
  },
  {
    id: 10,
    title: "Restaurant Basics and Ordering",
    level: "A1 Beginner",
    goal: "Learn how to order food in a restaurant and ask for the bill politely.",
    objective: "You will be able to order a meal, ask for something, and request the bill in a café or restaurant.",
    whyItMatters: "Eating out is one of the most common everyday situations in France, and these phrases will make you feel more confident.",
    description: "Use simple restaurant vocabulary to order food and handle a basic meal experience.",
    vocabularyGroups: [
      {
        title: "Restaurant words",
        words: [
          { french: "restaurant", pronunciation: "res-tor-AHN", english: "restaurant" },
          { french: "café", pronunciation: "kah-FAY", english: "café" },
          { french: "menu", pronunciation: "muh-NYOO", english: "menu" },
          { french: "plat", pronunciation: "plah", english: "dish" },
          { french: "boisson", pronunciation: "bwah-SOHN", english: "drink" }
        ]
      },
      {
        title: "Ordering and paying",
        words: [
          { french: "commander", pronunciation: "koh-mahn-DAY", english: "to order" },
          { french: "addition", pronunciation: "ah-dee-SYOHN", english: "bill" },
          { french: "s'il vous plaît", pronunciation: "seel voo PLEH", english: "please" },
          { french: "merci", pronunciation: "mehr-SEE", english: "thank you" },
          { french: "voilà", pronunciation: "vwa-LAH", english: "there you go" }
        ]
      }
    ],
    vocabulary: [],
    phrases: [
      { french: "Bonjour, je voudrais un café.", english: "Hello, I would like a coffee." },
      { french: "Je voudrais le menu, s'il vous plaît.", english: "I would like the menu, please." },
      { french: "L'addition, s'il vous plaît.", english: "The bill, please." },
      { french: "Merci, au revoir.", english: "Thank you, goodbye." }
    ],
    conversation: [
      { speaker: "Client", french: "Bonjour, je voudrais le menu, s'il vous plaît.", english: "Hello, I would like the menu, please." },
      { speaker: "Serveur", french: "Bien sûr, voilà le menu.", english: "Of course, here is the menu." }
    ],
    grammar: [
      {
        title: "Using je voudrais to order",
        explanation: "Use je voudrais to make a polite request when ordering food or drink.",
        examples: ["Je voudrais un café.", "Je voudrais le menu."]
      }
    ],
    pronunciation: [
      { rule: "The 'ou' in voudrais is pronounced like a rounded 'oo' sound.", examples: ["voudrais", "vous", "nous"] }
    ],
    cultureTip: "In many French restaurants, it is polite to greet the staff and say please when ordering.",
    practice: {
      multipleChoice: [
        { prompt: "What does addition mean?", options: ["menu", "bill", "drink"], answer: "bill" },
        { prompt: "Which phrase means 'The bill, please'?", options: ["L'addition, s'il vous plaît.", "Je voudrais un café.", "Bonjour, merci."], answer: "L'addition, s'il vous plaît." }
      ],
      translation: [{ prompt: "Translate: I would like the menu, please.", answer: "" }],
      fillInTheBlanks: [{ prompt: "Je voudrais ___ menu.", answer: "" }],
      speaking: ["Order a drink or ask for the bill politely."]
    },
    homework: [
      { task: "Practice ordering a drink and asking for the bill.", example: "Je voudrais un café. L'addition, s'il vous plaît." },
      { task: "Say one polite sentence to a waiter or waitress.", example: "S'il vous plaît." }
    ],
    mission: { title: "Order in a café", description: "Go to a café and order a drink or ask for the menu in French." },
    quiz: [
      { question: "What does menu mean?", options: ["menu", "bill", "drink"], answer: "menu" },
      { question: "What does addition mean?", options: ["drink", "bill", "dish"], answer: "bill" }
    ]
  },
  {
    id: 11,
    title: "Common Verbs: Être, Avoir, Aller, Faire",
    level: "A1 Beginner",
    goal: "Learn the four most useful French verbs and use them in short daily sentences.",
    objective: "You will be able to say who you are, what you have, where you are going, and what you are doing.",
    whyItMatters: "These verbs appear constantly in French. They are the backbone of introductions, plans, needs, and daily actions.",
    description: "A practical introduction to the four core verbs that make simple French sentences possible.",
    vocabularyGroups: [
      { title: "Core verbs", words: [
        { french: "être", pronunciation: "ehtr", english: "to be" },
        { french: "avoir", pronunciation: "ah-vwahr", english: "to have" },
        { french: "aller", pronunciation: "ah-lay", english: "to go" },
        { french: "faire", pronunciation: "fehr", english: "to do / to make" },
        { french: "je suis", pronunciation: "zhuh swee", english: "I am" }
      ] },
      { title: "Useful forms", words: [
        { french: "j'ai", pronunciation: "zhay", english: "I have" },
        { french: "je vais", pronunciation: "zhuh vay", english: "I go / I am going" },
        { french: "je fais", pronunciation: "zhuh feh", english: "I do / I make" },
        { french: "tu es", pronunciation: "tyoo eh", english: "you are" },
        { french: "il a", pronunciation: "eel ah", english: "he has" }
      ] },
      { title: "Daily words", words: [
        { french: "occupé", pronunciation: "oh-kyoo-pay", english: "busy" },
        { french: "prêt", pronunciation: "preh", english: "ready" },
        { french: "à la maison", pronunciation: "ah lah may-zon", english: "at home" },
        { french: "au travail", pronunciation: "oh trah-vahy", english: "at work" },
        { french: "maintenant", pronunciation: "man-tuh-nahn", english: "now" }
      ] }
    ],
    vocabulary: [],
    phrases: [
      { french: "Je suis prêt.", english: "I am ready." },
      { french: "J'ai un rendez-vous.", english: "I have an appointment." },
      { french: "Je vais au marché.", english: "I am going to the market." },
      { french: "Je fais les courses.", english: "I am grocery shopping." },
      { french: "Tu es occupé aujourd'hui ?", english: "Are you busy today?" }
    ],
    conversation: [
      { speaker: "Camille", french: "Salut, tu es prêt ?", english: "Hi, are you ready?" },
      { speaker: "Noah", french: "Oui, je suis prêt. J'ai mon sac.", english: "Yes, I am ready. I have my bag." },
      { speaker: "Camille", french: "On va au marché ?", english: "Are we going to the market?" },
      { speaker: "Noah", french: "Oui, et après je fais le dîner.", english: "Yes, and afterward I am making dinner." }
    ],
    grammar: [
      { title: "Four high-frequency irregular verbs", explanation: "Être, avoir, aller, and faire are irregular, so learn their common forms as whole phrases. Common mistake: do not say je être or je avoir; say je suis and j'ai.", examples: ["Je suis étudiant.", "J'ai vingt ans.", "Je vais à Paris.", "Je fais les courses."] }
    ],
    pronunciation: [
      { rule: "In j'ai, the final sound is a clear 'ay' vowel, not the English word 'jay'.", examples: ["j'ai", "j'ai faim", "j'ai un sac"] }
    ],
    practice: {
      multipleChoice: [
        { prompt: "Which phrase means I am?", options: ["je suis", "j'ai", "je vais"], answer: "je suis" },
        { prompt: "Which verb means to go?", options: ["aller", "avoir", "faire"], answer: "aller" }
      ],
      translation: [{ prompt: "Translate: I am ready.", answer: "" }, { prompt: "Translate: I have a bag.", answer: "" }],
      fillInTheBlanks: [{ prompt: "Je ___ au marché. (am going)", answer: "" }, { prompt: "J'___ un rendez-vous. (have)", answer: "" }],
      speaking: ["Say four sentences about yourself using je suis, j'ai, je vais, and je fais."]
    },
    homework: [
      { task: "Write eight short sentences with the four verbs.", example: "Je suis à la maison. J'ai un sac." },
      { task: "Say the four verbs aloud with one useful phrase for each." }
    ],
    mission: { title: "Four-verb self-check", description: "Tell someone one thing you are, one thing you have, one place you are going, and one thing you are doing." },
    quiz: [
      { question: "What does je vais mean?", options: ["I am going", "I have", "I do"], answer: "I am going" },
      { question: "Which sentence is correct?", options: ["Je suis prêt.", "Je être prêt.", "J'ai prêt."], answer: "Je suis prêt." }
    ]
  },
  {
    id: 12,
    title: "Present Tense Sentence Building",
    level: "A1 Beginner",
    goal: "Build simple present-tense sentences with a subject, verb, and useful extra detail.",
    objective: "You will be able to say what someone does, has, wants, or needs in everyday situations.",
    whyItMatters: "Real conversation is built from small sentence patterns. This lesson helps you move beyond isolated words.",
    description: "Learn the basic French sentence frame and use it for practical daily communication.",
    vocabularyGroups: [
      { title: "Action verbs", words: [
        { french: "parler", pronunciation: "par-lay", english: "to speak" },
        { french: "manger", pronunciation: "mahn-zhay", english: "to eat" },
        { french: "habiter", pronunciation: "ah-bee-tay", english: "to live" },
        { french: "travailler", pronunciation: "trah-vah-yay", english: "to work" },
        { french: "chercher", pronunciation: "shehr-shay", english: "to look for" }
      ] },
      { title: "Sentence builders", words: [
        { french: "ici", pronunciation: "ee-see", english: "here" },
        { french: "là-bas", pronunciation: "lah bah", english: "over there" },
        { french: "souvent", pronunciation: "soo-vahn", english: "often" },
        { french: "aussi", pronunciation: "oh-see", english: "also" },
        { french: "avec", pronunciation: "ah-vek", english: "with" }
      ] },
      { title: "Useful objects", words: [
        { french: "un café", pronunciation: "un kah-fay", english: "a coffee" },
        { french: "un ami", pronunciation: "un ah-mee", english: "a friend" },
        { french: "une question", pronunciation: "oon kes-tyon", english: "a question" },
        { french: "un billet", pronunciation: "un bee-yay", english: "a ticket" },
        { french: "une adresse", pronunciation: "oon ah-dres", english: "an address" }
      ] }
    ],
    vocabulary: [],
    phrases: [
      { french: "Je parle français un peu.", english: "I speak a little French." },
      { french: "Tu travailles ici ?", english: "Do you work here?" },
      { french: "Elle cherche une adresse.", english: "She is looking for an address." },
      { french: "Nous mangeons avec un ami.", english: "We are eating with a friend." },
      { french: "Vous avez une question ?", english: "Do you have a question?" }
    ],
    conversation: [
      { speaker: "Agent", french: "Bonjour, vous cherchez un billet ?", english: "Hello, are you looking for a ticket?" },
      { speaker: "Lina", french: "Oui, je cherche un billet pour Lyon.", english: "Yes, I am looking for a ticket to Lyon." },
      { speaker: "Agent", french: "Vous parlez français ?", english: "Do you speak French?" },
      { speaker: "Lina", french: "Un peu, mais j'ai une question.", english: "A little, but I have a question." }
    ],
    grammar: [
      { title: "Basic present sentence order", explanation: "A simple French sentence usually follows subject + verb + extra detail. Common mistake: do not copy English helper words like do in questions; Tu travailles ici ? already means Do you work here?", examples: ["Je cherche un café.", "Elle habite ici.", "Vous parlez français ?"] }
    ],
    pronunciation: [
      { rule: "Final -er in infinitives sounds like 'ay', so parler and manger end with the same sound.", examples: ["parler", "manger", "chercher"] }
    ],
    practice: {
      multipleChoice: [
        { prompt: "Which sentence means She lives here?", options: ["Elle habite ici.", "Elle cherche ici.", "Elle parle ici."], answer: "Elle habite ici." },
        { prompt: "What does avec mean?", options: ["with", "often", "here"], answer: "with" }
      ],
      translation: [{ prompt: "Translate: I am looking for a ticket.", answer: "" }, { prompt: "Translate: Do you work here?", answer: "" }],
      fillInTheBlanks: [{ prompt: "Je ___ français un peu.", answer: "" }, { prompt: "Elle ___ une adresse.", answer: "" }],
      speaking: ["Make five subject + verb + place sentences about your day."]
    },
    homework: [
      { task: "Write five present-tense sentences using today vocabulary.", example: "Je travaille ici." },
      { task: "Turn two of your sentences into questions by raising your voice." }
    ],
    mission: { title: "Ask one simple question", description: "Use a present-tense question in a real or imagined daily situation, such as Vous travaillez ici ?" },
    quiz: [
      { question: "What is the usual basic French sentence order?", options: ["subject + verb + detail", "verb + subject + detail", "detail + verb + subject"], answer: "subject + verb + detail" },
      { question: "How is final -er usually pronounced?", options: ["ay", "er", "oo"], answer: "ay" }
    ]
  },
  {
    id: 13,
    title: "Subject Pronouns",
    level: "A1 Beginner",
    goal: "Use French subject pronouns to talk about yourself, other people, and groups.",
    objective: "You will choose the right pronoun for everyday people and situations.",
    whyItMatters: "Pronouns let you make sentences quickly without repeating names all the time.",
    description: "Learn je, tu, il, elle, nous, vous, ils, and elles in real spoken contexts.",
    vocabularyGroups: [
      { title: "Subject pronouns", words: [
        { french: "je", pronunciation: "zhuh", english: "I" },
        { french: "tu", pronunciation: "tyoo", english: "you informal singular" },
        { french: "il", pronunciation: "eel", english: "he / it" },
        { french: "elle", pronunciation: "el", english: "she / it" },
        { french: "nous", pronunciation: "noo", english: "we" }
      ] },
      { title: "More pronouns", words: [
        { french: "vous", pronunciation: "voo", english: "you formal / you plural" },
        { french: "ils", pronunciation: "eel", english: "they masculine or mixed" },
        { french: "elles", pronunciation: "el", english: "they feminine" },
        { french: "on", pronunciation: "on", english: "we / people / one" },
        { french: "moi", pronunciation: "mwah", english: "me" }
      ] },
      { title: "People around you", words: [
        { french: "un voisin", pronunciation: "un vwah-zan", english: "a male neighbor" },
        { french: "une voisine", pronunciation: "oon vwah-zeen", english: "a female neighbor" },
        { french: "un collègue", pronunciation: "un koh-leg", english: "a colleague" },
        { french: "des amis", pronunciation: "day zah-mee", english: "friends" },
        { french: "les enfants", pronunciation: "lay zahn-fahn", english: "the children" }
      ] }
    ],
    vocabulary: [],
    phrases: [
      { french: "Je suis à la maison.", english: "I am at home." },
      { french: "Tu vas bien ?", english: "Are you well?" },
      { french: "Elle travaille aujourd'hui.", english: "She is working today." },
      { french: "Nous allons au café.", english: "We are going to the café." },
      { french: "Vous êtes français ?", english: "Are you French?" }
    ],
    conversation: [
      { speaker: "Samir", french: "C'est ta voisine ?", english: "Is that your neighbor?" },
      { speaker: "Emma", french: "Oui, elle s'appelle Claire.", english: "Yes, her name is Claire." },
      { speaker: "Samir", french: "Et les enfants ?", english: "And the children?" },
      { speaker: "Emma", french: "Ils vont à l'école ici.", english: "They go to school here." }
    ],
    grammar: [
      { title: "Choosing the subject pronoun", explanation: "Use tu with friends, family, and children; use vous with strangers, adults you do not know well, or more than one person. Common mistake: vous can mean one formal person or several people.", examples: ["Tu es mon ami.", "Vous êtes la professeure ?", "Ils sont au marché."] }
    ],
    pronunciation: [
      { rule: "The final -s in nous, vous, ils, and elles is usually silent unless there is a liaison before a vowel.", examples: ["nous sommes", "vous êtes", "ils ont"] }
    ],
    practice: {
      multipleChoice: [
        { prompt: "Which pronoun is formal you?", options: ["vous", "tu", "je"], answer: "vous" },
        { prompt: "Which pronoun can mean we in spoken French?", options: ["on", "elle", "ils"], answer: "on" }
      ],
      translation: [{ prompt: "Translate: She works today.", answer: "" }, { prompt: "Translate: We are going to the café.", answer: "" }],
      fillInTheBlanks: [{ prompt: "___ êtes français ?", answer: "" }, { prompt: "___ vont à l'école.", answer: "" }],
      speaking: ["Point to people in a photo and describe them with il, elle, ils, or elles."]
    },
    homework: [
      { task: "Write one sentence for each subject pronoun.", example: "Elle est ici." },
      { task: "Listen to a French greeting and decide whether tu or vous sounds more appropriate." }
    ],
    mission: { title: "Pronoun switch", description: "Introduce two people and then refer to them with il, elle, ils, or elles." },
    quiz: [
      { question: "Which pronoun should you usually use with a shop assistant?", options: ["vous", "tu", "elles"], answer: "vous" },
      { question: "What does elles mean?", options: ["they feminine", "we", "you formal"], answer: "they feminine" }
    ]
  },
  {
    id: 14,
    title: "Family and Relationships",
    level: "A1 Beginner",
    goal: "Talk about family members and close relationships with simple possessive phrases.",
    objective: "You will describe who people are in your family and ask about someone else's family.",
    whyItMatters: "Family comes up naturally when meeting people, chatting with neighbors, and building friendships.",
    description: "A practical family lesson focused on real introductions and simple relationship sentences.",
    vocabularyGroups: [
      { title: "Close family", words: [
        { french: "la mère", pronunciation: "lah mehr", english: "mother" },
        { french: "le père", pronunciation: "luh pehr", english: "father" },
        { french: "les parents", pronunciation: "lay pah-rahn", english: "parents" },
        { french: "la sœur", pronunciation: "lah seur", english: "sister" },
        { french: "le frère", pronunciation: "luh frehr", english: "brother" }
      ] },
      { title: "More family", words: [
        { french: "la fille", pronunciation: "lah fee", english: "daughter / girl" },
        { french: "le fils", pronunciation: "luh fees", english: "son" },
        { french: "la grand-mère", pronunciation: "lah grahn-mehr", english: "grandmother" },
        { french: "le grand-père", pronunciation: "luh grahn-pehr", english: "grandfather" },
        { french: "les grands-parents", pronunciation: "lay grahn-pah-rahn", english: "grandparents" }
      ] },
      { title: "Relationships", words: [
        { french: "mon mari", pronunciation: "mon mah-ree", english: "my husband" },
        { french: "ma femme", pronunciation: "mah fahm", english: "my wife" },
        { french: "mon ami", pronunciation: "mon nah-mee", english: "my male friend" },
        { french: "mon amie", pronunciation: "mon nah-mee", english: "my female friend" },
        { french: "célibataire", pronunciation: "say-lee-bah-tehr", english: "single" }
      ] }
    ],
    vocabulary: [],
    phrases: [
      { french: "Voici ma famille.", english: "Here is my family." },
      { french: "J'ai une sœur et un frère.", english: "I have a sister and a brother." },
      { french: "Mon père habite à Lyon.", english: "My father lives in Lyon." },
      { french: "Tu as des enfants ?", english: "Do you have children?" },
      { french: "Je suis célibataire.", english: "I am single." }
    ],
    conversation: [
      { speaker: "Inès", french: "Tu as de la famille ici ?", english: "Do you have family here?" },
      { speaker: "Alex", french: "Oui, ma sœur habite près de la gare.", english: "Yes, my sister lives near the station." },
      { speaker: "Inès", french: "Et tes parents ?", english: "And your parents?" },
      { speaker: "Alex", french: "Ils habitent à Marseille.", english: "They live in Marseille." }
    ],
    grammar: [
      { title: "Possessive adjectives mon, ma, mes", explanation: "Use mon before a masculine singular noun, ma before a feminine singular noun, and mes before plural nouns. Common mistake: use mon before a feminine word that starts with a vowel, like mon amie.", examples: ["mon père", "ma mère", "mes parents", "mon amie"] }
    ],
    pronunciation: [
      { rule: "The œu sound in sœur is rounded and short; shape your lips as if saying 'uh' with rounded lips.", examples: ["sœur", "jeune", "heure"] }
    ],
    practice: {
      multipleChoice: [
        { prompt: "Which phrase means my mother?", options: ["ma mère", "mon mère", "mes mère"], answer: "ma mère" },
        { prompt: "What does les parents mean?", options: ["parents", "children", "grandparents"], answer: "parents" }
      ],
      translation: [{ prompt: "Translate: I have two brothers.", answer: "" }, { prompt: "Translate: My sister lives here.", answer: "" }],
      fillInTheBlanks: [{ prompt: "Voici ___ famille.", answer: "" }, { prompt: "J'ai ___ frère.", answer: "" }],
      speaking: ["Introduce three family members using mon, ma, or mes."]
    },
    homework: [
      { task: "Draw a small family tree and label five people in French.", example: "ma mère, mon frère" },
      { task: "Write four sentences about real or imaginary family members." }
    ],
    mission: { title: "Family introduction", description: "Tell someone two facts about your family in French, using at least one possessive adjective." },
    quiz: [
      { question: "Which is correct before père?", options: ["mon", "ma", "mes"], answer: "mon" },
      { question: "How do you say I am single?", options: ["Je suis célibataire.", "J'ai célibataire.", "Je vais célibataire."], answer: "Je suis célibataire." }
    ]
  },
  {
    id: 15,
    title: "Describing People",
    level: "A1 Beginner",
    goal: "Describe someone's appearance and personality in simple respectful French.",
    objective: "You will be able to describe yourself and recognize basic descriptions of others.",
    whyItMatters: "Descriptions help when meeting people, identifying someone, and talking about friends or colleagues.",
    description: "Use common adjectives for appearance and personality without overloading grammar.",
    vocabularyGroups: [
      { title: "Appearance", words: [
        { french: "grand", pronunciation: "grahn", english: "tall / big masculine" },
        { french: "grande", pronunciation: "grahnd", english: "tall / big feminine" },
        { french: "petit", pronunciation: "puh-tee", english: "small / short masculine" },
        { french: "petite", pronunciation: "puh-teet", english: "small / short feminine" },
        { french: "jeune", pronunciation: "zhuhn", english: "young" }
      ] },
      { title: "More description", words: [
        { french: "âgé", pronunciation: "ah-zhay", english: "older / elderly masculine" },
        { french: "blond", pronunciation: "blon", english: "blond masculine" },
        { french: "brun", pronunciation: "brun", english: "brown-haired masculine" },
        { french: "les cheveux", pronunciation: "lay shuh-vuh", english: "hair" },
        { french: "les yeux", pronunciation: "lay zyuh", english: "eyes" }
      ] },
      { title: "Personality", words: [
        { french: "sympa", pronunciation: "sam-pah", english: "nice" },
        { french: "calme", pronunciation: "kahlm", english: "calm" },
        { french: "timide", pronunciation: "tee-meed", english: "shy" },
        { french: "drôle", pronunciation: "drohl", english: "funny" },
        { french: "sérieux", pronunciation: "say-ree-uh", english: "serious masculine" }
      ] }
    ],
    vocabulary: [],
    phrases: [
      { french: "Elle est très sympa.", english: "She is very nice." },
      { french: "Il est grand et brun.", english: "He is tall and brown-haired." },
      { french: "J'ai les cheveux courts.", english: "I have short hair." },
      { french: "Tu as les yeux bleus ?", english: "Do you have blue eyes?" },
      { french: "Mon collègue est calme.", english: "My colleague is calm." }
    ],
    conversation: [
      { speaker: "Réceptionniste", french: "Vous cherchez qui ?", english: "Who are you looking for?" },
      { speaker: "Maya", french: "Je cherche Paul. Il est grand et brun.", english: "I am looking for Paul. He is tall and brown-haired." },
      { speaker: "Réceptionniste", french: "Il est avec une femme blonde ?", english: "Is he with a blond woman?" },
      { speaker: "Maya", french: "Oui, elle est très sympa.", english: "Yes, she is very nice." }
    ],
    grammar: [
      { title: "Adjective agreement", explanation: "Many adjectives change for feminine and plural nouns. Add -e for many feminine forms and -s for many plural forms. Common mistake: remember that pronunciation may change when the final consonant becomes audible, as in grand and grande.", examples: ["Il est petit.", "Elle est petite.", "Ils sont calmes."] }
    ],
    pronunciation: [
      { rule: "In grand the final d is silent, but in grande the final d sound is heard before the feminine -e.", examples: ["grand", "grande", "petit", "petite"] }
    ],
    practice: {
      multipleChoice: [
        { prompt: "Which phrase means she is small?", options: ["Elle est petite.", "Il est petit.", "Elle a petite."], answer: "Elle est petite." },
        { prompt: "What does sympa mean?", options: ["nice", "shy", "serious"], answer: "nice" }
      ],
      translation: [{ prompt: "Translate: He is calm.", answer: "" }, { prompt: "Translate: My friend is funny.", answer: "" }],
      fillInTheBlanks: [{ prompt: "Elle est grand___.", answer: "" }, { prompt: "J'ai les ___ courts.", answer: "" }],
      speaking: ["Describe yourself with two appearance words and one personality word."]
    },
    homework: [
      { task: "Write five respectful descriptions of people you know or fictional characters.", example: "Elle est grande et calme." },
      { task: "Practice saying masculine and feminine adjective pairs aloud." }
    ],
    mission: { title: "Identify someone politely", description: "Describe a person in a photo using three short French sentences." },
    quiz: [
      { question: "Which is the feminine form of petit?", options: ["petite", "petits", "petites"], answer: "petite" },
      { question: "Which sentence uses avoir for a body feature?", options: ["J'ai les yeux bleus.", "Je suis les yeux bleus.", "Je vais les yeux bleus."], answer: "J'ai les yeux bleus." }
    ]
  },
  {
    id: 16,
    title: "Home and Rooms",
    level: "A1 Beginner",
    goal: "Describe your home and name the main rooms.",
    objective: "You will say where you live, what rooms you have, and where things are.",
    whyItMatters: "Talking about home is common with friends, hosts, landlords, and neighbors in France.",
    description: "A practical lesson for describing a living space with clear everyday phrases.",
    vocabularyGroups: [
      { title: "Home types", words: [
        { french: "un appartement", pronunciation: "un nah-par-tuh-mahn", english: "an apartment" },
        { french: "une maison", pronunciation: "oon may-zon", english: "a house" },
        { french: "un studio", pronunciation: "un styoo-dyo", english: "a studio apartment" },
        { french: "un immeuble", pronunciation: "un neem-eubl", english: "an apartment building" },
        { french: "chez moi", pronunciation: "shay mwah", english: "at my place" }
      ] },
      { title: "Rooms", words: [
        { french: "la cuisine", pronunciation: "lah kyoo-zeen", english: "kitchen" },
        { french: "le salon", pronunciation: "luh sah-lon", english: "living room" },
        { french: "la chambre", pronunciation: "lah shahm-br", english: "bedroom" },
        { french: "la salle de bains", pronunciation: "lah sahl duh ban", english: "bathroom" },
        { french: "les toilettes", pronunciation: "lay twah-let", english: "toilets / restroom" }
      ] },
      { title: "Home details", words: [
        { french: "l'entrée", pronunciation: "lahn-tray", english: "entryway" },
        { french: "le couloir", pronunciation: "luh koo-lwahr", english: "hallway" },
        { french: "le balcon", pronunciation: "luh bahl-kon", english: "balcony" },
        { french: "le jardin", pronunciation: "luh zhar-dan", english: "garden" },
        { french: "la pièce", pronunciation: "lah pyes", english: "room" }
      ] }
    ],
    vocabulary: [],
    phrases: [
      { french: "J'habite dans un appartement.", english: "I live in an apartment." },
      { french: "Chez moi, il y a deux chambres.", english: "At my place, there are two bedrooms." },
      { french: "La cuisine est petite mais pratique.", english: "The kitchen is small but practical." },
      { french: "Les toilettes sont au fond du couloir.", english: "The restroom is at the end of the hallway." },
      { french: "Tu as un balcon ?", english: "Do you have a balcony?" }
    ],
    conversation: [
      { speaker: "Propriétaire", french: "Voici l'appartement.", english: "Here is the apartment." },
      { speaker: "Nadia", french: "Il y a combien de pièces ?", english: "How many rooms are there?" },
      { speaker: "Propriétaire", french: "Il y a un salon, une cuisine et une chambre.", english: "There is a living room, a kitchen, and a bedroom." },
      { speaker: "Nadia", french: "Très bien. Et les toilettes ?", english: "Very good. And the restroom?" }
    ],
    grammar: [
      { title: "Il y a", explanation: "Use il y a to say there is or there are. It does not change for singular or plural. Common mistake: do not say il sont for there are.", examples: ["Il y a une cuisine.", "Il y a deux chambres.", "Il y a un balcon ?"] }
    ],
    pronunciation: [
      { rule: "The sound oi is pronounced like 'wah' in toilettes and couloir.", examples: ["toilettes", "couloir", "moi"] }
    ],
    practice: {
      multipleChoice: [
        { prompt: "What does il y a mean?", options: ["there is / there are", "I have", "it goes"], answer: "there is / there are" },
        { prompt: "Which word means bedroom?", options: ["la chambre", "le salon", "le balcon"], answer: "la chambre" }
      ],
      translation: [{ prompt: "Translate: I live in a studio apartment.", answer: "" }, { prompt: "Translate: There are two rooms.", answer: "" }],
      fillInTheBlanks: [{ prompt: "Chez moi, il y ___ un salon.", answer: "" }, { prompt: "J'habite dans une ___.", answer: "" }],
      speaking: ["Describe your home or an imaginary home in four short sentences."]
    },
    homework: [
      { task: "Label five rooms or areas in your home in French.", example: "la cuisine, le salon" },
      { task: "Write three il y a sentences about your home." }
    ],
    mission: { title: "Home tour", description: "Give a short spoken tour of your home using il y a and three room names." },
    quiz: [
      { question: "Which phrase means at my place?", options: ["chez moi", "avec moi", "pour moi"], answer: "chez moi" },
      { question: "Which sentence is correct?", options: ["Il y a deux chambres.", "Il sont deux chambres.", "Il a y deux chambres."], answer: "Il y a deux chambres." }
    ]
  },
  {
    id: 17,
    title: "Furniture and Household Objects",
    level: "A1 Beginner",
    goal: "Name everyday furniture and household objects.",
    objective: "You will describe simple objects in a room and say where they are.",
    whyItMatters: "These words are useful when moving in, asking for something, shopping, or explaining a problem at home.",
    description: "Everyday object vocabulary with natural location phrases.",
    vocabularyGroups: [
      { title: "Furniture", words: [
        { french: "une table", pronunciation: "oon tahbl", english: "a table" },
        { french: "une chaise", pronunciation: "oon shehz", english: "a chair" },
        { french: "un lit", pronunciation: "un lee", english: "a bed" },
        { french: "un canapé", pronunciation: "un kah-nah-pay", english: "a sofa" },
        { french: "une armoire", pronunciation: "oon nar-mwahr", english: "a wardrobe" }
      ] },
      { title: "Objects", words: [
        { french: "une lampe", pronunciation: "oon lahmp", english: "a lamp" },
        { french: "une fenêtre", pronunciation: "oon fuh-netr", english: "a window" },
        { french: "une porte", pronunciation: "oon port", english: "a door" },
        { french: "une clé", pronunciation: "oon klay", english: "a key" },
        { french: "un téléphone", pronunciation: "un tay-lay-fon", english: "a phone" }
      ] },
      { title: "Location words", words: [
        { french: "sur", pronunciation: "sewr", english: "on" },
        { french: "sous", pronunciation: "soo", english: "under" },
        { french: "dans", pronunciation: "dahn", english: "in" },
        { french: "devant", pronunciation: "duh-vahn", english: "in front of" },
        { french: "derrière", pronunciation: "deh-ryehr", english: "behind" }
      ] }
    ],
    vocabulary: [],
    phrases: [
      { french: "La clé est sur la table.", english: "The key is on the table." },
      { french: "Le lit est dans la chambre.", english: "The bed is in the bedroom." },
      { french: "La chaise est devant la fenêtre.", english: "The chair is in front of the window." },
      { french: "Mon téléphone est sous le canapé.", english: "My phone is under the sofa." },
      { french: "Il y a une lampe dans le salon.", english: "There is a lamp in the living room." }
    ],
    conversation: [
      { speaker: "Lou", french: "Tu vois ma clé ?", english: "Do you see my key?" },
      { speaker: "Hugo", french: "Oui, elle est sur la table.", english: "Yes, it is on the table." },
      { speaker: "Lou", french: "Et mon téléphone ?", english: "And my phone?" },
      { speaker: "Hugo", french: "Il est sous le canapé.", english: "It is under the sofa." }
    ],
    grammar: [
      { title: "Definite articles le, la, l', les", explanation: "Use le for masculine singular, la for feminine singular, l' before a vowel, and les for plural nouns. Common mistake: English says the for everything, but French article choice depends on the noun.", examples: ["le lit", "la table", "l'armoire", "les clés"] }
    ],
    pronunciation: [
      { rule: "The French u in sur is rounded and forward; it is not the same as ou in sous.", examples: ["sur", "sous", "tu", "vous"] }
    ],
    practice: {
      multipleChoice: [
        { prompt: "Which word means under?", options: ["sous", "sur", "dans"], answer: "sous" },
        { prompt: "Which article goes with table?", options: ["la", "le", "les"], answer: "la" }
      ],
      translation: [{ prompt: "Translate: The phone is on the chair.", answer: "" }, { prompt: "Translate: The lamp is in the bedroom.", answer: "" }],
      fillInTheBlanks: [{ prompt: "La clé est ___ la table.", answer: "" }, { prompt: "Le lit est dans la ___.", answer: "" }],
      speaking: ["Place three objects near you and say where each one is in French."]
    },
    homework: [
      { task: "Write five sentences about objects in your room.", example: "La lampe est sur la table." },
      { task: "Practice sur and sous aloud until they sound different." }
    ],
    mission: { title: "Find the object", description: "Ask and answer where three household objects are." },
    quiz: [
      { question: "What does derrière mean?", options: ["behind", "under", "on"], answer: "behind" },
      { question: "Which is correct?", options: ["la clé", "le clé", "un clé"], answer: "la clé" }
    ]
  },
  {
    id: 18,
    title: "Daily Routine",
    level: "A1 Beginner",
    goal: "Talk about your day from morning to night.",
    objective: "You will describe simple daily actions in order.",
    whyItMatters: "Daily routine language helps you talk with classmates, colleagues, hosts, and new friends.",
    description: "A realistic routine lesson centered on common everyday actions.",
    vocabularyGroups: [
      { title: "Morning", words: [
        { french: "se lever", pronunciation: "suh luh-vay", english: "to get up" },
        { french: "se doucher", pronunciation: "suh doo-shay", english: "to shower" },
        { french: "s'habiller", pronunciation: "sah-bee-yay", english: "to get dressed" },
        { french: "prendre le petit déjeuner", pronunciation: "prahn-dr luh puh-tee day-zhuh-nay", english: "to have breakfast" },
        { french: "partir", pronunciation: "par-teer", english: "to leave" }
      ] },
      { title: "Day", words: [
        { french: "travailler", pronunciation: "trah-vah-yay", english: "to work" },
        { french: "étudier", pronunciation: "ay-too-dyay", english: "to study" },
        { french: "déjeuner", pronunciation: "day-zhuh-nay", english: "to have lunch" },
        { french: "rentrer", pronunciation: "rahn-tray", english: "to come home" },
        { french: "faire les courses", pronunciation: "fehr lay koors", english: "to go grocery shopping" }
      ] },
      { title: "Evening", words: [
        { french: "dîner", pronunciation: "dee-nay", english: "to have dinner" },
        { french: "se reposer", pronunciation: "suh ruh-poh-zay", english: "to rest" },
        { french: "regarder", pronunciation: "ruh-gar-day", english: "to watch" },
        { french: "lire", pronunciation: "leer", english: "to read" },
        { french: "se coucher", pronunciation: "suh koo-shay", english: "to go to bed" }
      ] }
    ],
    vocabulary: [],
    phrases: [
      { french: "Je me lève à sept heures.", english: "I get up at seven o'clock." },
      { french: "Je prends le petit déjeuner à la maison.", english: "I have breakfast at home." },
      { french: "Je travaille le matin.", english: "I work in the morning." },
      { french: "Je rentre après le travail.", english: "I come home after work." },
      { french: "Le soir, je me repose.", english: "In the evening, I rest." }
    ],
    conversation: [
      { speaker: "Zoé", french: "Tu te lèves à quelle heure ?", english: "What time do you get up?" },
      { speaker: "Mehdi", french: "Je me lève à sept heures.", english: "I get up at seven." },
      { speaker: "Zoé", french: "Et le soir ?", english: "And in the evening?" },
      { speaker: "Mehdi", french: "Je dîne, je lis un peu et je me couche.", english: "I have dinner, I read a little, and I go to bed." }
    ],
    grammar: [
      { title: "Reflexive verbs with je", explanation: "Some routine verbs use me with je because the action happens to yourself: je me lève, je me couche. Common mistake: do not drop me in these routine phrases.", examples: ["Je me lève.", "Je me douche.", "Je me couche."] }
    ],
    pronunciation: [
      { rule: "In déjeuner and journée, the letter j sounds like the soft sound in bonjour.", examples: ["déjeuner", "journée", "je"] }
    ],
    practice: {
      multipleChoice: [
        { prompt: "Which phrase means I get up?", options: ["je me lève", "je rentre", "je dîne"], answer: "je me lève" },
        { prompt: "Which action happens in the evening?", options: ["dîner", "prendre le petit déjeuner", "partir"], answer: "dîner" }
      ],
      translation: [{ prompt: "Translate: I come home after work.", answer: "" }, { prompt: "Translate: I go to bed at ten.", answer: "" }],
      fillInTheBlanks: [{ prompt: "Je ___ lève à sept heures.", answer: "" }, { prompt: "Le soir, je me ___.", answer: "" }],
      speaking: ["Describe your routine in five sentences using morning, day, and evening actions."]
    },
    homework: [
      { task: "Write your real weekday routine in six short French sentences.", example: "Je me lève à sept heures." },
      { task: "Record yourself saying the routine in order." }
    ],
    mission: { title: "Routine exchange", description: "Ask someone what time they get up and answer the same question yourself." },
    quiz: [
      { question: "What does je me couche mean?", options: ["I go to bed", "I eat lunch", "I leave"], answer: "I go to bed" },
      { question: "Which word should not be omitted in je me lève?", options: ["me", "le", "à"], answer: "me" }
    ]
  },
  {
    id: 19,
    title: "Time Expressions and Telling Time",
    level: "A1 Beginner",
    goal: "Ask for and tell the time in practical situations.",
    objective: "You will understand appointment times, opening hours, and simple schedule questions.",
    whyItMatters: "Time language is essential for trains, work, appointments, restaurants, and meeting friends.",
    description: "Learn clock time and useful schedule expressions for daily life in France.",
    vocabularyGroups: [
      { title: "Clock words", words: [
        { french: "l'heure", pronunciation: "lehr", english: "the time / hour" },
        { french: "une minute", pronunciation: "oon mee-noot", english: "a minute" },
        { french: "midi", pronunciation: "mee-dee", english: "noon" },
        { french: "minuit", pronunciation: "mee-nwee", english: "midnight" },
        { french: "et demie", pronunciation: "ay duh-mee", english: "half past" }
      ] },
      { title: "Parts of day", words: [
        { french: "le matin", pronunciation: "luh mah-tan", english: "the morning" },
        { french: "l'après-midi", pronunciation: "lah-preh-mee-dee", english: "the afternoon" },
        { french: "le soir", pronunciation: "luh swahr", english: "the evening" },
        { french: "la nuit", pronunciation: "lah nwee", english: "the night" },
        { french: "aujourd'hui", pronunciation: "oh-zhoor-dwee", english: "today" }
      ] },
      { title: "Schedule words", words: [
        { french: "tôt", pronunciation: "toh", english: "early" },
        { french: "tard", pronunciation: "tar", english: "late" },
        { french: "à l'heure", pronunciation: "ah leur", english: "on time" },
        { french: "en retard", pronunciation: "ahn ruh-tar", english: "late / delayed" },
        { french: "maintenant", pronunciation: "man-tuh-nahn", english: "now" }
      ] }
    ],
    vocabulary: [],
    phrases: [
      { french: "Quelle heure est-il ?", english: "What time is it?" },
      { french: "Il est huit heures.", english: "It is eight o'clock." },
      { french: "Il est neuf heures et demie.", english: "It is half past nine." },
      { french: "Le train part à midi.", english: "The train leaves at noon." },
      { french: "Je suis en retard.", english: "I am late." }
    ],
    conversation: [
      { speaker: "Thomas", french: "Quelle heure est-il ?", english: "What time is it?" },
      { speaker: "Awa", french: "Il est huit heures et demie.", english: "It is half past eight." },
      { speaker: "Thomas", french: "Le rendez-vous est à neuf heures ?", english: "Is the appointment at nine?" },
      { speaker: "Awa", french: "Oui, mais on est à l'heure.", english: "Yes, but we are on time." }
    ],
    grammar: [
      { title: "Il est for time", explanation: "Use il est to tell the time, followed by the number and heure or heures. Common mistake: do not use c'est for clock time.", examples: ["Il est une heure.", "Il est deux heures.", "Il est midi."] }
    ],
    pronunciation: [
      { rule: "In huit heures, pronounce the liaison: huit heures sounds like 'weet teur'.", examples: ["huit heures", "neuf heures", "deux heures"] }
    ],
    practice: {
      multipleChoice: [
        { prompt: "Which question asks What time is it?", options: ["Quelle heure est-il ?", "Quel âge as-tu ?", "Où est-il ?"], answer: "Quelle heure est-il ?" },
        { prompt: "What does en retard mean?", options: ["late", "early", "on time"], answer: "late" }
      ],
      translation: [{ prompt: "Translate: It is three o'clock.", answer: "" }, { prompt: "Translate: The appointment is at noon.", answer: "" }],
      fillInTheBlanks: [{ prompt: "Il ___ neuf heures.", answer: "" }, { prompt: "Je suis en ___.", answer: "" }],
      speaking: ["Say the current time and two appointment times in French."]
    },
    homework: [
      { task: "Write five times from your daily schedule in French.", example: "Je pars à huit heures." },
      { task: "Practice asking and answering Quelle heure est-il ?" }
    ],
    mission: { title: "Time check", description: "Ask for the time in French and answer with a complete il est sentence." },
    quiz: [
      { question: "Which phrase means half past?", options: ["et demie", "en retard", "à l'heure"], answer: "et demie" },
      { question: "Which sentence tells time correctly?", options: ["Il est deux heures.", "C'est deux heures.", "Il a deux heures."], answer: "Il est deux heures." }
    ]
  },
  {
    id: 20,
    title: "Work and Occupations",
    level: "A1 Beginner",
    goal: "Talk simply about jobs, workplaces, and what people do.",
    objective: "You will ask about someone's job and describe your own work or study situation.",
    whyItMatters: "Work is a frequent topic in introductions, appointments, housing, and everyday small talk.",
    description: "A clear first step into professional vocabulary and polite work conversations.",
    vocabularyGroups: [
      { title: "Work words", words: [
        { french: "le travail", pronunciation: "luh trah-vahy", english: "work" },
        { french: "un emploi", pronunciation: "un nahn-plwah", english: "a job" },
        { french: "un bureau", pronunciation: "un byoo-roh", english: "an office / desk" },
        { french: "une entreprise", pronunciation: "oon ahn-truh-preez", english: "a company" },
        { french: "un collègue", pronunciation: "un koh-leg", english: "a colleague" }
      ] },
      { title: "Occupations", words: [
        { french: "étudiant", pronunciation: "ay-too-dyahn", english: "student masculine" },
        { french: "étudiante", pronunciation: "ay-too-dyahnt", english: "student feminine" },
        { french: "professeur", pronunciation: "proh-feh-seur", english: "teacher" },
        { french: "serveur", pronunciation: "sehr-veur", english: "waiter" },
        { french: "serveuse", pronunciation: "sehr-veuz", english: "waitress" }
      ] },
      { title: "Work actions", words: [
        { french: "travailler", pronunciation: "trah-vah-yay", english: "to work" },
        { french: "étudier", pronunciation: "ay-too-dyay", english: "to study" },
        { french: "commencer", pronunciation: "koh-mahn-say", english: "to start" },
        { french: "finir", pronunciation: "fee-neer", english: "to finish" },
        { french: "être disponible", pronunciation: "ehtr dees-poh-nee-bl", english: "to be available" }
      ] }
    ],
    vocabulary: [],
    phrases: [
      { french: "Vous faites quoi dans la vie ?", english: "What do you do for a living?" },
      { french: "Je suis étudiant.", english: "I am a student." },
      { french: "Je travaille dans une entreprise.", english: "I work in a company." },
      { french: "Je commence à neuf heures.", english: "I start at nine o'clock." },
      { french: "Mon collègue est disponible.", english: "My colleague is available." }
    ],
    conversation: [
      { speaker: "Claire", french: "Vous faites quoi dans la vie ?", english: "What do you do for a living?" },
      { speaker: "Ibrahim", french: "Je suis professeur. Et vous ?", english: "I am a teacher. And you?" },
      { speaker: "Claire", french: "Je travaille dans une entreprise à Nantes.", english: "I work in a company in Nantes." },
      { speaker: "Ibrahim", french: "Vous commencez tôt ?", english: "Do you start early?" }
    ],
    grammar: [
      { title: "Professions without un or une", explanation: "After être, French often uses professions without an article. Common mistake: say je suis professeur, not je suis un professeur, for a basic job identity.", examples: ["Je suis étudiant.", "Elle est serveuse.", "Il est professeur."] }
    ],
    pronunciation: [
      { rule: "The letter sequence ill in travailler sounds like y, so travailler is pronounced close to trah-vah-yay.", examples: ["travailler", "travail", "famille"] }
    ],
    practice: {
      multipleChoice: [
        { prompt: "Which is the natural job sentence?", options: ["Je suis étudiant.", "Je suis un étudiant.", "J'ai étudiant."], answer: "Je suis étudiant." },
        { prompt: "What does disponible mean?", options: ["available", "busy", "finished"], answer: "available" }
      ],
      translation: [{ prompt: "Translate: I work in an office.", answer: "" }, { prompt: "Translate: She is a waitress.", answer: "" }],
      fillInTheBlanks: [{ prompt: "Je ___ à neuf heures.", answer: "" }, { prompt: "Vous faites quoi dans la ___ ?", answer: "" }],
      speaking: ["Say what you do, where you work or study, and what time you start."]
    },
    homework: [
      { task: "Write a short work introduction in four sentences.", example: "Je suis étudiant. J'étudie à Paris." },
      { task: "Practice the polite question Vous faites quoi dans la vie ?" }
    ],
    mission: { title: "Work small talk", description: "Ask someone what they do and answer the same question politely." },
    quiz: [
      { question: "How do you say I am a student naturally?", options: ["Je suis étudiant.", "J'ai étudiant.", "Je fais étudiant."], answer: "Je suis étudiant." },
      { question: "What does commencer mean?", options: ["to start", "to finish", "to study"], answer: "to start" }
    ]
  },
  {
    id: 21,
    title: "Places in Town",
    level: "A1 Beginner",
    goal: "Recognize and name essential places in a French town.",
    objective: "You will ask where common places are and say where you are going.",
    whyItMatters: "Town vocabulary helps with errands, appointments, meeting people, and finding your way around France.",
    description: "Practical place names for daily life outside the home.",
    vocabularyGroups: [
      { title: "Essential places", words: [
        { french: "la gare", pronunciation: "lah gahr", english: "train station" },
        { french: "la mairie", pronunciation: "lah meh-ree", english: "town hall" },
        { french: "la poste", pronunciation: "lah pohst", english: "post office" },
        { french: "la banque", pronunciation: "lah bahnk", english: "bank" },
        { french: "la pharmacie", pronunciation: "lah far-mah-see", english: "pharmacy" }
      ] },
      { title: "Shops and services", words: [
        { french: "la boulangerie", pronunciation: "lah boo-lahn-zhuh-ree", english: "bakery" },
        { french: "le supermarché", pronunciation: "luh syoo-pehr-mar-shay", english: "supermarket" },
        { french: "le marché", pronunciation: "luh mar-shay", english: "market" },
        { french: "le café", pronunciation: "luh kah-fay", english: "café" },
        { french: "le restaurant", pronunciation: "luh res-toh-rahn", english: "restaurant" }
      ] },
      { title: "Public places", words: [
        { french: "l'école", pronunciation: "lay-kohl", english: "school" },
        { french: "l'hôpital", pronunciation: "loh-pee-tahl", english: "hospital" },
        { french: "le parc", pronunciation: "luh park", english: "park" },
        { french: "la rue", pronunciation: "lah rew", english: "street" },
        { french: "la place", pronunciation: "lah plahs", english: "square" }
      ] }
    ],
    vocabulary: [],
    phrases: [
      { french: "Je vais à la pharmacie.", english: "I am going to the pharmacy." },
      { french: "La gare est près du centre.", english: "The station is near the center." },
      { french: "Il y a une boulangerie dans cette rue.", english: "There is a bakery on this street." },
      { french: "On se retrouve au café ?", english: "Shall we meet at the café?" },
      { french: "La mairie est sur la place.", english: "The town hall is on the square." }
    ],
    conversation: [
      { speaker: "Lucas", french: "Tu vas où maintenant ?", english: "Where are you going now?" },
      { speaker: "Sara", french: "Je vais à la poste, puis à la boulangerie.", english: "I am going to the post office, then to the bakery." },
      { speaker: "Lucas", french: "La poste est loin ?", english: "Is the post office far?" },
      { speaker: "Sara", french: "Non, elle est près de la mairie.", english: "No, it is near the town hall." }
    ],
    grammar: [
      { title: "À + place", explanation: "Use à la before feminine places, au before masculine places, à l' before a vowel, and aux before plural places. Common mistake: do not use à le; it becomes au.", examples: ["à la poste", "au café", "à l'hôpital", "aux toilettes"] }
    ],
    pronunciation: [
      { rule: "In pharmacie and boulangerie, the final -ie is pronounced like 'ee'.", examples: ["pharmacie", "mairie", "boulangerie"] }
    ],
    practice: {
      multipleChoice: [
        { prompt: "Which phrase means to the café?", options: ["au café", "à le café", "à la café"], answer: "au café" },
        { prompt: "What is la poste?", options: ["post office", "station", "bank"], answer: "post office" }
      ],
      translation: [{ prompt: "Translate: I am going to the bank.", answer: "" }, { prompt: "Translate: The bakery is on this street.", answer: "" }],
      fillInTheBlanks: [{ prompt: "Je vais ___ pharmacie.", answer: "" }, { prompt: "La gare est près ___ centre.", answer: "" }],
      speaking: ["Name five places near your home or school and say Je vais..."]
    },
    homework: [
      { task: "Write a short errand route with three places.", example: "Je vais à la poste, puis au marché." },
      { task: "Look at a map and label five places in French." }
    ],
    mission: { title: "Town map", description: "Choose three local places and say where they are in relation to each other." },
    quiz: [
      { question: "Which is correct?", options: ["au café", "à le café", "à du café"], answer: "au café" },
      { question: "What does la mairie mean?", options: ["town hall", "market", "school"], answer: "town hall" }
    ]
  },
  {
    id: 22,
    title: "Directions and Asking for Help",
    level: "A1 Beginner",
    goal: "Ask for help and understand simple directions.",
    objective: "You will ask where something is and follow short direction instructions.",
    whyItMatters: "Getting help politely is a survival skill in stations, streets, offices, and shops.",
    description: "Clear direction language with polite help requests.",
    vocabularyGroups: [
      { title: "Direction words", words: [
        { french: "à gauche", pronunciation: "ah gohsh", english: "to the left" },
        { french: "à droite", pronunciation: "ah drwaht", english: "to the right" },
        { french: "tout droit", pronunciation: "too drwah", english: "straight ahead" },
        { french: "en face", pronunciation: "ahn fahs", english: "opposite / across from" },
        { french: "au coin", pronunciation: "oh kwan", english: "on the corner" }
      ] },
      { title: "Help words", words: [
        { french: "aider", pronunciation: "eh-day", english: "to help" },
        { french: "l'aide", pronunciation: "led", english: "help" },
        { french: "perdu", pronunciation: "pehr-dew", english: "lost masculine" },
        { french: "perdue", pronunciation: "pehr-dew", english: "lost feminine" },
        { french: "un plan", pronunciation: "un plahn", english: "a map" }
      ] },
      { title: "Route words", words: [
        { french: "tourner", pronunciation: "toor-nay", english: "to turn" },
        { french: "continuer", pronunciation: "kon-tee-nway", english: "to continue" },
        { french: "traverser", pronunciation: "trah-vehr-say", english: "to cross" },
        { french: "la rue", pronunciation: "lah rew", english: "street" },
        { french: "le feu", pronunciation: "luh fuh", english: "traffic light" }
      ] }
    ],
    vocabulary: [],
    phrases: [
      { french: "Excusez-moi, vous pouvez m'aider ?", english: "Excuse me, can you help me?" },
      { french: "Je suis perdu.", english: "I am lost." },
      { french: "Où est la gare, s'il vous plaît ?", english: "Where is the station, please?" },
      { french: "Tournez à droite au feu.", english: "Turn right at the traffic light." },
      { french: "Continuez tout droit.", english: "Continue straight ahead." }
    ],
    conversation: [
      { speaker: "Touriste", french: "Excusez-moi, je suis perdu. Où est la gare ?", english: "Excuse me, I am lost. Where is the station?" },
      { speaker: "Passante", french: "Continuez tout droit, puis tournez à gauche.", english: "Continue straight ahead, then turn left." },
      { speaker: "Touriste", french: "C'est loin ?", english: "Is it far?" },
      { speaker: "Passante", french: "Non, c'est à cinq minutes.", english: "No, it is five minutes away." }
    ],
    grammar: [
      { title: "Polite commands with vous", explanation: "For directions to a stranger, use the vous command form: continuez, tournez, traversez. Common mistake: do not use informal tourne with people you do not know.", examples: ["Continuez tout droit.", "Tournez à droite.", "Traversez la rue."] }
    ],
    pronunciation: [
      { rule: "The French r in droite and rue is made in the back of the throat, softer than an English r.", examples: ["droite", "rue", "restaurant"] }
    ],
    practice: {
      multipleChoice: [
        { prompt: "Which phrase means straight ahead?", options: ["tout droit", "à gauche", "en face"], answer: "tout droit" },
        { prompt: "Which is the polite command?", options: ["Tournez", "Tourne", "Tourner"], answer: "Tournez" }
      ],
      translation: [{ prompt: "Translate: Can you help me?", answer: "" }, { prompt: "Translate: Turn left at the corner.", answer: "" }],
      fillInTheBlanks: [{ prompt: "Je suis ___.", answer: "" }, { prompt: "Continuez tout ___.", answer: "" }],
      speaking: ["Give a three-step route from your door to a nearby place."]
    },
    homework: [
      { task: "Write directions from a station to a café.", example: "Tournez à droite, puis continuez tout droit." },
      { task: "Practice asking for help politely three times aloud." }
    ],
    mission: { title: "Ask for help", description: "Politely ask where a place is and thank the person after the answer." },
    quiz: [
      { question: "What does Je suis perdu mean?", options: ["I am lost", "I am ready", "I am late"], answer: "I am lost" },
      { question: "Which phrase means turn right?", options: ["tournez à droite", "tournez à gauche", "continuez tout droit"], answer: "tournez à droite" }
    ]
  },
  {
    id: 23,
    title: "Transport in France",
    level: "A1 Beginner",
    goal: "Use basic transport vocabulary for trains, buses, metro, and tickets.",
    objective: "You will buy or ask about a ticket and understand simple travel information.",
    whyItMatters: "Transport language is essential for moving around French cities and between towns.",
    description: "Survival French for stations, stops, tickets, and departures.",
    vocabularyGroups: [
      { title: "Transport types", words: [
        { french: "le train", pronunciation: "luh tran", english: "train" },
        { french: "le bus", pronunciation: "luh boos", english: "bus" },
        { french: "le métro", pronunciation: "luh may-troh", english: "metro" },
        { french: "le tram", pronunciation: "luh tram", english: "tram" },
        { french: "le taxi", pronunciation: "luh tak-see", english: "taxi" }
      ] },
      { title: "Ticket words", words: [
        { french: "un billet", pronunciation: "un bee-yay", english: "a ticket" },
        { french: "un ticket", pronunciation: "un tee-kay", english: "a local transport ticket" },
        { french: "un aller simple", pronunciation: "un nah-lay sampl", english: "a one-way ticket" },
        { french: "un aller-retour", pronunciation: "un nah-lay ruh-toor", english: "a return ticket" },
        { french: "un quai", pronunciation: "un kay", english: "a platform" }
      ] },
      { title: "Travel actions", words: [
        { french: "partir", pronunciation: "par-teer", english: "to leave" },
        { french: "arriver", pronunciation: "ah-ree-vay", english: "to arrive" },
        { french: "composter", pronunciation: "kom-poh-stay", english: "to validate a ticket" },
        { french: "changer", pronunciation: "shahn-zhay", english: "to change / transfer" },
        { french: "descendre", pronunciation: "day-sahn-dr", english: "to get off" }
      ] }
    ],
    vocabulary: [],
    phrases: [
      { french: "Je voudrais un billet pour Bordeaux.", english: "I would like a ticket to Bordeaux." },
      { french: "C'est quel quai ?", english: "Which platform is it?" },
      { french: "Le train part à dix heures.", english: "The train leaves at ten o'clock." },
      { french: "Il faut changer à Lyon.", english: "You have to change in Lyon." },
      { french: "Je descends au prochain arrêt.", english: "I get off at the next stop." }
    ],
    conversation: [
      { speaker: "Voyageuse", french: "Bonjour, un aller simple pour Lille, s'il vous plaît.", english: "Hello, a one-way ticket to Lille, please." },
      { speaker: "Agent", french: "Oui. Le train part à onze heures, quai trois.", english: "Yes. The train leaves at eleven, platform three." },
      { speaker: "Voyageuse", french: "Il faut changer ?", english: "Do I have to change?" },
      { speaker: "Agent", french: "Non, c'est direct.", english: "No, it is direct." }
    ],
    grammar: [
      { title: "Il faut + infinitive", explanation: "Use il faut plus an infinitive to say it is necessary or you have to. Common mistake: do not conjugate the second verb after il faut.", examples: ["Il faut changer.", "Il faut composter le billet.", "Il faut descendre ici."] }
    ],
    pronunciation: [
      { rule: "The letter combination ai often sounds like eh, as in quai and train.", examples: ["quai", "train", "français"] }
    ],
    practice: {
      multipleChoice: [
        { prompt: "What is un aller simple?", options: ["one-way ticket", "return ticket", "platform"], answer: "one-way ticket" },
        { prompt: "Which phrase means You have to change?", options: ["Il faut changer.", "Il faut partir.", "Il faut descendre."], answer: "Il faut changer." }
      ],
      translation: [{ prompt: "Translate: I would like a return ticket.", answer: "" }, { prompt: "Translate: The bus leaves at eight.", answer: "" }],
      fillInTheBlanks: [{ prompt: "Je voudrais un billet ___ Lyon.", answer: "" }, { prompt: "Le train part à dix ___.", answer: "" }],
      speaking: ["Role-play buying a train ticket with destination, time, and platform."]
    },
    homework: [
      { task: "Write a short station dialogue using billet, quai, and partir.", example: "C'est quel quai ?" },
      { task: "Find a French train route online and say the departure time in French." }
    ],
    mission: { title: "Buy a ticket", description: "Ask for a one-way or return ticket to a French city in a complete sentence." },
    quiz: [
      { question: "What does quai mean?", options: ["platform", "ticket", "stop"], answer: "platform" },
      { question: "What follows il faut?", options: ["an infinitive", "only a noun", "an adjective"], answer: "an infinitive" }
    ]
  },
  {
    id: 24,
    title: "Shopping and Quantities",
    level: "A1 Beginner",
    goal: "Ask for quantities and buy everyday items.",
    objective: "You will use numbers, quantities, and polite requests in shops and markets.",
    whyItMatters: "Shopping in France often means asking for specific amounts at bakeries, markets, and counters.",
    description: "Practical quantity language for buying food and daily items.",
    vocabularyGroups: [
      { title: "Quantities", words: [
        { french: "un kilo", pronunciation: "un kee-loh", english: "one kilo" },
        { french: "cent grammes", pronunciation: "sahn gram", english: "one hundred grams" },
        { french: "une tranche", pronunciation: "oon trahnsh", english: "a slice" },
        { french: "un morceau", pronunciation: "un mor-soh", english: "a piece" },
        { french: "une bouteille", pronunciation: "oon boo-tey", english: "a bottle" }
      ] },
      { title: "Containers", words: [
        { french: "un paquet", pronunciation: "un pah-kay", english: "a packet" },
        { french: "une boîte", pronunciation: "oon bwaht", english: "a box / can" },
        { french: "un sac", pronunciation: "un sak", english: "a bag" },
        { french: "une douzaine", pronunciation: "oon doo-zen", english: "a dozen" },
        { french: "un litre", pronunciation: "un leetr", english: "a liter" }
      ] },
      { title: "Shopping words", words: [
        { french: "je prends", pronunciation: "zhuh prahn", english: "I'll take" },
        { french: "il me faut", pronunciation: "eel muh foh", english: "I need" },
        { french: "combien", pronunciation: "kom-byen", english: "how much / how many" },
        { french: "cher", pronunciation: "shehr", english: "expensive masculine" },
        { french: "bon marché", pronunciation: "bon mar-shay", english: "cheap / inexpensive" }
      ] }
    ],
    vocabulary: [],
    phrases: [
      { french: "Je prends une baguette.", english: "I'll take one baguette." },
      { french: "Il me faut un kilo de pommes.", english: "I need one kilo of apples." },
      { french: "Vous avez des sacs ?", english: "Do you have bags?" },
      { french: "Combien ça coûte ?", english: "How much does it cost?" },
      { french: "C'est un peu cher.", english: "It is a little expensive." }
    ],
    conversation: [
      { speaker: "Client", french: "Bonjour, il me faut un kilo de tomates.", english: "Hello, I need one kilo of tomatoes." },
      { speaker: "Vendeuse", french: "Bien sûr. Et avec ça ?", english: "Of course. Anything else?" },
      { speaker: "Client", french: "Je prends aussi une bouteille d'eau.", english: "I'll also take a bottle of water." },
      { speaker: "Vendeuse", french: "Ça fait quatre euros cinquante.", english: "That comes to four euros fifty." }
    ],
    grammar: [
      { title: "Quantities with de", explanation: "After a quantity, use de before the noun: un kilo de pommes, une bouteille d'eau. Common mistake: do not say un kilo des pommes when giving an amount.", examples: ["un litre de lait", "une tranche de pain", "un paquet de café"] }
    ],
    pronunciation: [
      { rule: "In bouteille, the -ill- sound is like y, similar to bee-y in billet.", examples: ["bouteille", "famille", "billet"] }
    ],
    practice: {
      multipleChoice: [
        { prompt: "Which is correct?", options: ["un kilo de pommes", "un kilo des pommes", "un kilo les pommes"], answer: "un kilo de pommes" },
        { prompt: "What does je prends mean in a shop?", options: ["I'll take", "I understand", "I leave"], answer: "I'll take" }
      ],
      translation: [{ prompt: "Translate: I need a bottle of water.", answer: "" }, { prompt: "Translate: How much does it cost?", answer: "" }],
      fillInTheBlanks: [{ prompt: "Une tranche ___ pain.", answer: "" }, { prompt: "Je ___ une baguette.", answer: "" }],
      speaking: ["Ask for three quantities at a market counter."]
    },
    homework: [
      { task: "Write a shopping list with five quantities in French.", example: "un kilo de pommes" },
      { task: "Practice saying prices from one to twenty euros." }
    ],
    mission: { title: "Market order", description: "Order three items with quantities and ask the price." },
    quiz: [
      { question: "Which word means a slice?", options: ["une tranche", "un sac", "un litre"], answer: "une tranche" },
      { question: "What comes after a quantity?", options: ["de", "le", "avec"], answer: "de" }
    ]
  },
  {
    id: 25,
    title: "Food Vocabulary Expansion",
    level: "A1 Beginner",
    goal: "Expand everyday food vocabulary for meals, shops, and simple preferences.",
    objective: "You will identify common foods and talk about what you eat during the day.",
    whyItMatters: "Food vocabulary is central to daily life in France, from supermarkets to shared meals.",
    description: "A practical expansion of common food words without rare restaurant vocabulary.",
    vocabularyGroups: [
      { title: "Staples", words: [
        { french: "le pain", pronunciation: "luh pan", english: "bread" },
        { french: "le riz", pronunciation: "luh ree", english: "rice" },
        { french: "les pâtes", pronunciation: "lay paht", english: "pasta" },
        { french: "les pommes de terre", pronunciation: "lay pom duh tehr", english: "potatoes" },
        { french: "le fromage", pronunciation: "luh froh-mazh", english: "cheese" }
      ] },
      { title: "Proteins", words: [
        { french: "le poulet", pronunciation: "luh poo-lay", english: "chicken" },
        { french: "le poisson", pronunciation: "luh pwah-son", english: "fish" },
        { french: "la viande", pronunciation: "lah vee-ahnd", english: "meat" },
        { french: "les œufs", pronunciation: "lay zuh", english: "eggs" },
        { french: "les haricots", pronunciation: "lay ah-ree-koh", english: "beans" }
      ] },
      { title: "Fruit and vegetables", words: [
        { french: "une pomme", pronunciation: "oon pom", english: "an apple" },
        { french: "une banane", pronunciation: "oon bah-nahn", english: "a banana" },
        { french: "une tomate", pronunciation: "oon toh-maht", english: "a tomato" },
        { french: "une salade", pronunciation: "oon sah-lahd", english: "a salad / lettuce" },
        { french: "une carotte", pronunciation: "oon kah-rot", english: "a carrot" }
      ] }
    ],
    vocabulary: [],
    phrases: [
      { french: "Je mange du pain le matin.", english: "I eat bread in the morning." },
      { french: "Je prends une salade à midi.", english: "I have a salad at noon." },
      { french: "Vous avez du poulet ?", english: "Do you have chicken?" },
      { french: "Je voudrais du fromage.", english: "I would like some cheese." },
      { french: "Je ne mange pas de viande.", english: "I do not eat meat." }
    ],
    conversation: [
      { speaker: "Hôte", french: "Tu manges du poisson ?", english: "Do you eat fish?" },
      { speaker: "Nina", french: "Oui, mais je ne mange pas de viande.", english: "Yes, but I do not eat meat." },
      { speaker: "Hôte", french: "Pas de problème. Il y a une salade et des œufs.", english: "No problem. There is a salad and eggs." },
      { speaker: "Nina", french: "Parfait, merci beaucoup.", english: "Perfect, thank you very much." }
    ],
    grammar: [
      { title: "Partitive articles du, de la, des", explanation: "Use du, de la, de l', or des for an unspecified amount of food. In a negative sentence, it often becomes de. Common mistake: je ne mange pas de viande, not pas de la viande.", examples: ["Je mange du pain.", "Je bois de l'eau.", "Je ne mange pas de viande."] }
    ],
    pronunciation: [
      { rule: "The nasal sound in pain is made through the nose and is different from the clear vowel in pâtes.", examples: ["pain", "vin", "matin"] }
    ],
    practice: {
      multipleChoice: [
        { prompt: "Which sentence is negative and correct?", options: ["Je ne mange pas de viande.", "Je ne mange pas du viande.", "Je mange pas la viande."], answer: "Je ne mange pas de viande." },
        { prompt: "What does le fromage mean?", options: ["cheese", "bread", "fish"], answer: "cheese" }
      ],
      translation: [{ prompt: "Translate: I would like some cheese.", answer: "" }, { prompt: "Translate: I do not eat fish.", answer: "" }],
      fillInTheBlanks: [{ prompt: "Je mange ___ pain.", answer: "" }, { prompt: "Je ne mange pas ___ viande.", answer: "" }],
      speaking: ["Say what you eat for breakfast, lunch, and dinner."]
    },
    homework: [
      { task: "Write a simple menu for one day in French.", example: "Le matin: du pain et un café." },
      { task: "Practice three food sentences with du, de la, and des." }
    ],
    mission: { title: "Food preference", description: "Tell someone two foods you eat and one food you do not eat." },
    quiz: [
      { question: "What happens to partitives after many negatives?", options: ["They become de", "They become le", "They disappear always"], answer: "They become de" },
      { question: "Which word means fish?", options: ["le poisson", "le poulet", "le pain"], answer: "le poisson" }
    ]
  },
  {
    id: 26,
    title: "Restaurant Conversations",
    level: "A1 Beginner",
    goal: "Handle a simple restaurant or café interaction from arrival to payment.",
    objective: "You will ask for a table, order politely, mention simple needs, and ask for the bill.",
    whyItMatters: "Restaurants and cafés are part of everyday social life in France, and polite formulas matter.",
    description: "A practical restaurant lesson using realistic spoken French.",
    vocabularyGroups: [
      { title: "Restaurant basics", words: [
        { french: "une table", pronunciation: "oon tahbl", english: "a table" },
        { french: "la carte", pronunciation: "lah kart", english: "menu" },
        { french: "le menu", pronunciation: "luh muh-new", english: "set menu" },
        { french: "le serveur", pronunciation: "luh sehr-veur", english: "waiter" },
        { french: "la serveuse", pronunciation: "lah sehr-veuz", english: "waitress" }
      ] },
      { title: "Meal words", words: [
        { french: "une entrée", pronunciation: "oon nahn-tray", english: "starter" },
        { french: "un plat", pronunciation: "un plah", english: "main dish" },
        { french: "un dessert", pronunciation: "un day-sehr", english: "dessert" },
        { french: "une boisson", pronunciation: "oon bwah-son", english: "a drink" },
        { french: "de l'eau", pronunciation: "duh loh", english: "some water" }
      ] },
      { title: "Service words", words: [
        { french: "commander", pronunciation: "koh-mahn-day", english: "to order" },
        { french: "réserver", pronunciation: "ray-zehr-vay", english: "to reserve" },
        { french: "l'addition", pronunciation: "lah-dee-syon", english: "the bill" },
        { french: "compris", pronunciation: "kom-pree", english: "included" },
        { french: "sans", pronunciation: "sahn", english: "without" }
      ] }
    ],
    vocabulary: [],
    phrases: [
      { french: "Une table pour deux, s'il vous plaît.", english: "A table for two, please." },
      { french: "Je voudrais la carte.", english: "I would like the menu." },
      { french: "Je prends le plat du jour.", english: "I'll have the dish of the day." },
      { french: "Sans fromage, s'il vous plaît.", english: "Without cheese, please." },
      { french: "L'addition, s'il vous plaît.", english: "The bill, please." }
    ],
    conversation: [
      { speaker: "Serveuse", french: "Bonjour, vous avez réservé ?", english: "Hello, did you reserve?" },
      { speaker: "Client", french: "Non, une table pour deux, s'il vous plaît.", english: "No, a table for two, please." },
      { speaker: "Serveuse", french: "Bien sûr. Vous voulez la carte ?", english: "Of course. Would you like the menu?" },
      { speaker: "Client", french: "Oui, et de l'eau, s'il vous plaît.", english: "Yes, and some water, please." }
    ],
    grammar: [
      { title: "Polite ordering with je voudrais and je prends", explanation: "Use je voudrais for a polite request and je prends when choosing from a menu. Common mistake: je veux can sound too direct in restaurants.", examples: ["Je voudrais la carte.", "Je prends une entrée.", "Je voudrais de l'eau."] }
    ],
    pronunciation: [
      { rule: "The ending -tion sounds like 'syon' in addition and réservation.", examples: ["addition", "réservation", "question"] }
    ],
    practice: {
      multipleChoice: [
        { prompt: "Which phrase asks for the bill?", options: ["L'addition, s'il vous plaît.", "La carte, s'il vous plaît.", "Une table, s'il vous plaît."], answer: "L'addition, s'il vous plaît." },
        { prompt: "Which is softer for ordering?", options: ["Je voudrais", "Je veux", "Donne-moi"], answer: "Je voudrais" }
      ],
      translation: [{ prompt: "Translate: I would like water.", answer: "" }, { prompt: "Translate: A table for four, please.", answer: "" }],
      fillInTheBlanks: [{ prompt: "Je ___ le plat du jour.", answer: "" }, { prompt: "___ fromage, s'il vous plaît.", answer: "" }],
      speaking: ["Role-play arriving at a restaurant, ordering one item, and asking for the bill."]
    },
    homework: [
      { task: "Write a café dialogue with a server and a customer.", example: "Je voudrais un café, s'il vous plaît." },
      { task: "Practice ordering with je voudrais three different ways." }
    ],
    mission: { title: "Café order", description: "Order a drink or snack politely and ask for the bill in French." },
    quiz: [
      { question: "What does l'addition mean?", options: ["the bill", "the menu", "the starter"], answer: "the bill" },
      { question: "What does sans mean?", options: ["without", "with", "included"], answer: "without" }
    ]
  },
  {
    id: 27,
    title: "Weather and Seasons",
    level: "A1 Beginner",
    goal: "Talk about the weather and the seasons in simple French.",
    objective: "You will understand basic weather comments and make small talk about the day.",
    whyItMatters: "Weather is one of the easiest and most common ways to start a small conversation in France.",
    description: "Everyday weather language for plans, clothes, and small talk.",
    vocabularyGroups: [
      { title: "Weather", words: [
        { french: "il fait beau", pronunciation: "eel fay boh", english: "the weather is nice" },
        { french: "il fait froid", pronunciation: "eel fay frwah", english: "it is cold" },
        { french: "il fait chaud", pronunciation: "eel fay shoh", english: "it is hot" },
        { french: "il pleut", pronunciation: "eel pluh", english: "it is raining" },
        { french: "il neige", pronunciation: "eel nezh", english: "it is snowing" }
      ] },
      { title: "Sky and conditions", words: [
        { french: "le soleil", pronunciation: "luh soh-lehy", english: "sun" },
        { french: "la pluie", pronunciation: "lah plwee", english: "rain" },
        { french: "le vent", pronunciation: "luh vahn", english: "wind" },
        { french: "un nuage", pronunciation: "un nwyazh", english: "a cloud" },
        { french: "couvert", pronunciation: "koo-vehr", english: "overcast" }
      ] },
      { title: "Seasons", words: [
        { french: "le printemps", pronunciation: "luh pran-tahn", english: "spring" },
        { french: "l'été", pronunciation: "lay-tay", english: "summer" },
        { french: "l'automne", pronunciation: "loh-ton", english: "autumn" },
        { french: "l'hiver", pronunciation: "lee-vehr", english: "winter" },
        { french: "la saison", pronunciation: "lah seh-zon", english: "season" }
      ] }
    ],
    vocabulary: [],
    phrases: [
      { french: "Il fait beau aujourd'hui.", english: "The weather is nice today." },
      { french: "Il pleut ce matin.", english: "It is raining this morning." },
      { french: "En hiver, il fait froid.", english: "In winter, it is cold." },
      { french: "Je prends un manteau.", english: "I am taking a coat." },
      { french: "On va au parc s'il fait beau.", english: "We are going to the park if the weather is nice." }
    ],
    conversation: [
      { speaker: "Manon", french: "Il fait beau aujourd'hui !", english: "The weather is nice today!" },
      { speaker: "Yanis", french: "Oui, on va au parc ?", english: "Yes, shall we go to the park?" },
      { speaker: "Manon", french: "D'accord, mais il y a du vent.", english: "Okay, but it is windy." },
      { speaker: "Yanis", french: "Je prends une veste.", english: "I am taking a jacket." }
    ],
    grammar: [
      { title: "Weather with il fait and il pleut", explanation: "Use il fait with temperature and general weather, but use il pleut for it is raining and il neige for it is snowing. Common mistake: do not say il fait pluie.", examples: ["Il fait froid.", "Il fait beau.", "Il pleut."] }
    ],
    pronunciation: [
      { rule: "The vowel combination eau is pronounced like a closed 'oh' in beau and chaud.", examples: ["beau", "chaud", "eau"] }
    ],
    practice: {
      multipleChoice: [
        { prompt: "Which phrase means it is raining?", options: ["Il pleut.", "Il fait pluie.", "Il neige."], answer: "Il pleut." },
        { prompt: "What does l'hiver mean?", options: ["winter", "summer", "spring"], answer: "winter" }
      ],
      translation: [{ prompt: "Translate: It is cold today.", answer: "" }, { prompt: "Translate: In summer, it is hot.", answer: "" }],
      fillInTheBlanks: [{ prompt: "Il fait ___ aujourd'hui.", answer: "" }, { prompt: "En hiver, il fait ___.", answer: "" }],
      speaking: ["Describe today's weather and say what season it is."]
    },
    homework: [
      { task: "Write a five-day weather diary in simple French.", example: "Lundi, il pleut." },
      { task: "Practice beau, chaud, and eau aloud." }
    ],
    mission: { title: "Weather small talk", description: "Start a short conversation by commenting on the weather in French." },
    quiz: [
      { question: "Which sentence is correct?", options: ["Il pleut.", "Il fait pluie.", "Il est pluie."], answer: "Il pleut." },
      { question: "How is eau pronounced?", options: ["oh", "ay", "ee"], answer: "oh" }
    ]
  },
  {
    id: 28,
    title: "Hobbies and Free Time",
    level: "A1 Beginner",
    goal: "Talk about simple hobbies and weekend activities.",
    objective: "You will say what you do in your free time and ask others about their activities.",
    whyItMatters: "Hobbies create friendly conversations and help you make plans with people.",
    description: "A friendly lesson for leisure, weekends, and low-pressure social talk.",
    vocabularyGroups: [
      { title: "Activities", words: [
        { french: "lire", pronunciation: "leer", english: "to read" },
        { french: "écouter de la musique", pronunciation: "ay-koo-tay duh lah mew-zeek", english: "to listen to music" },
        { french: "regarder un film", pronunciation: "ruh-gar-day un feelm", english: "to watch a film" },
        { french: "faire du sport", pronunciation: "fehr dew spor", english: "to play sports / exercise" },
        { french: "cuisiner", pronunciation: "kwee-zee-nay", english: "to cook" }
      ] },
      { title: "Going out", words: [
        { french: "sortir", pronunciation: "sor-teer", english: "to go out" },
        { french: "se promener", pronunciation: "suh prohm-nay", english: "to take a walk" },
        { french: "visiter", pronunciation: "vee-zee-tay", english: "to visit" },
        { french: "danser", pronunciation: "dahn-say", english: "to dance" },
        { french: "jouer", pronunciation: "zhoo-ay", english: "to play" }
      ] },
      { title: "Free time words", words: [
        { french: "le week-end", pronunciation: "luh week-end", english: "weekend" },
        { french: "le temps libre", pronunciation: "luh tahn lee-br", english: "free time" },
        { french: "un loisir", pronunciation: "un lwah-zeer", english: "a hobby" },
        { french: "souvent", pronunciation: "soo-vahn", english: "often" },
        { french: "parfois", pronunciation: "par-fwah", english: "sometimes" }
      ] }
    ],
    vocabulary: [],
    phrases: [
      { french: "Qu'est-ce que tu fais le week-end ?", english: "What do you do on the weekend?" },
      { french: "J'écoute de la musique.", english: "I listen to music." },
      { french: "Je fais du sport parfois.", english: "I exercise sometimes." },
      { french: "On va se promener ?", english: "Shall we go for a walk?" },
      { french: "J'aime cuisiner avec des amis.", english: "I like cooking with friends." }
    ],
    conversation: [
      { speaker: "Élise", french: "Qu'est-ce que tu fais le week-end ?", english: "What do you do on the weekend?" },
      { speaker: "Romain", french: "Souvent, je fais du sport et je cuisine.", english: "Often, I exercise and I cook." },
      { speaker: "Élise", french: "Tu veux te promener samedi ?", english: "Do you want to take a walk on Saturday?" },
      { speaker: "Romain", french: "Oui, bonne idée.", english: "Yes, good idea." }
    ],
    grammar: [
      { title: "Faire de with activities", explanation: "Use faire du, de la, de l', or des with many sports and activities. Common mistake: the form changes with the noun gender, so say faire du sport but faire de la danse.", examples: ["Je fais du sport.", "Elle fait de la danse.", "Nous faisons de la musique."] }
    ],
    pronunciation: [
      { rule: "The sound ou in jouer and souvent is the same as English 'oo', not the French u.", examples: ["jouer", "souvent", "vous"] }
    ],
    practice: {
      multipleChoice: [
        { prompt: "Which phrase means free time?", options: ["le temps libre", "le travail", "le matin"], answer: "le temps libre" },
        { prompt: "Which is correct?", options: ["faire du sport", "faire de sport", "faire le sport"], answer: "faire du sport" }
      ],
      translation: [{ prompt: "Translate: I often read.", answer: "" }, { prompt: "Translate: Shall we go out Saturday?", answer: "" }],
      fillInTheBlanks: [{ prompt: "Je fais ___ sport.", answer: "" }, { prompt: "J'écoute de la ___.", answer: "" }],
      speaking: ["Say three things you do in your free time and one thing you do not do."]
    },
    homework: [
      { task: "Write a weekend plan in five sentences.", example: "Samedi, je vais me promener." },
      { task: "Ask a friend or classmate about one hobby in French." }
    ],
    mission: { title: "Make a simple plan", description: "Invite someone to do a free-time activity using On va... ?" },
    quiz: [
      { question: "What does parfois mean?", options: ["sometimes", "always", "never"], answer: "sometimes" },
      { question: "Which phrase means to take a walk?", options: ["se promener", "travailler", "commander"], answer: "se promener" }
    ]
  },
  {
    id: 29,
    title: "Likes, Dislikes, and Opinions",
    level: "A1 Beginner",
    goal: "Express simple likes, dislikes, and opinions politely.",
    objective: "You will say what you like, what you do not like, and ask others for their opinion.",
    whyItMatters: "Opinions make conversation personal and help you choose food, plans, and activities with others.",
    description: "A confidence-building lesson for preferences and everyday opinions.",
    vocabularyGroups: [
      { title: "Preference verbs", words: [
        { french: "aimer", pronunciation: "eh-may", english: "to like / to love" },
        { french: "adorer", pronunciation: "ah-doh-ray", english: "to love / adore" },
        { french: "préférer", pronunciation: "pray-fay-ray", english: "to prefer" },
        { french: "détester", pronunciation: "day-tes-tay", english: "to hate" },
        { french: "choisir", pronunciation: "shwah-zeer", english: "to choose" }
      ] },
      { title: "Opinion words", words: [
        { french: "bien", pronunciation: "byen", english: "good / well" },
        { french: "très bien", pronunciation: "treh byen", english: "very good / very well" },
        { french: "pas mal", pronunciation: "pah mahl", english: "not bad" },
        { french: "intéressant", pronunciation: "an-tay-ray-sahn", english: "interesting masculine" },
        { french: "ennuyeux", pronunciation: "ahn-nwee-yuh", english: "boring masculine" }
      ] },
      { title: "Conversation words", words: [
        { french: "à mon avis", pronunciation: "ah mon nah-vee", english: "in my opinion" },
        { french: "je pense que", pronunciation: "zhuh pahns kuh", english: "I think that" },
        { french: "d'accord", pronunciation: "dah-kor", english: "okay / agreed" },
        { french: "moi aussi", pronunciation: "mwah oh-see", english: "me too" },
        { french: "moi non plus", pronunciation: "mwah non plew", english: "me neither" }
      ] }
    ],
    vocabulary: [],
    phrases: [
      { french: "J'aime le café.", english: "I like coffee." },
      { french: "Je n'aime pas attendre.", english: "I do not like waiting." },
      { french: "Je préfère le train.", english: "I prefer the train." },
      { french: "À mon avis, c'est très bien.", english: "In my opinion, it is very good." },
      { french: "Tu aimes ce restaurant ?", english: "Do you like this restaurant?" }
    ],
    conversation: [
      { speaker: "Mila", french: "Tu aimes ce café ?", english: "Do you like this café?" },
      { speaker: "Adam", french: "Oui, j'aime beaucoup. Le service est sympa.", english: "Yes, I like it a lot. The service is nice." },
      { speaker: "Mila", french: "Moi aussi. Je préfère la terrasse.", english: "Me too. I prefer the terrace." },
      { speaker: "Adam", french: "D'accord, on s'assoit dehors.", english: "Okay, let's sit outside." }
    ],
    grammar: [
      { title: "Aimer + noun or infinitive", explanation: "Use aimer before a noun to say you like something, or before an infinitive to say you like doing something. Common mistake: keep the second verb in the infinitive, as in j'aime cuisiner.", examples: ["J'aime le thé.", "J'aime cuisiner.", "Je n'aime pas attendre."] }
    ],
    pronunciation: [
      { rule: "The é sound in préférer is a clear 'ay' sound; the è sound is more open like 'eh'.", examples: ["préférer", "café", "très"] }
    ],
    practice: {
      multipleChoice: [
        { prompt: "Which phrase means me too?", options: ["moi aussi", "moi non plus", "à mon avis"], answer: "moi aussi" },
        { prompt: "What stays after j'aime when it is an action?", options: ["the infinitive", "a past form", "only a noun"], answer: "the infinitive" }
      ],
      translation: [{ prompt: "Translate: I do not like fish.", answer: "" }, { prompt: "Translate: I prefer the train.", answer: "" }],
      fillInTheBlanks: [{ prompt: "J'aime ___.", answer: "" }, { prompt: "Je n'aime pas ___.", answer: "" }],
      speaking: ["Give three opinions about food, transport, and hobbies."]
    },
    homework: [
      { task: "Write five preference sentences, including two negatives.", example: "Je préfère le bus." },
      { task: "Ask someone Tu aimes...? and answer with moi aussi or moi non plus." }
    ],
    mission: { title: "Share an opinion", description: "Tell someone your opinion about a café, food, film, or activity in French." },
    quiz: [
      { question: "What does je préfère mean?", options: ["I prefer", "I hate", "I choose"], answer: "I prefer" },
      { question: "Which is correct?", options: ["J'aime cuisiner.", "J'aime cuisine.", "J'aime cuisiné."], answer: "J'aime cuisiner." }
    ]
  },
  {
    id: 30,
    title: "A1 Review: A Day in France",
    level: "A1 Beginner",
    goal: "Combine the first 30 days into realistic everyday communication.",
    objective: "You will introduce yourself, ask questions, handle errands, make plans, and express simple opinions.",
    whyItMatters: "Real life does not separate grammar by lesson. This review helps you connect everything into usable French.",
    description: "A practical A1 review built around a full day of survival communication in France.",
    vocabularyGroups: [
      { title: "Review actions", words: [
        { french: "se présenter", pronunciation: "suh pray-zahn-tay", english: "to introduce oneself" },
        { french: "demander", pronunciation: "duh-mahn-day", english: "to ask" },
        { french: "acheter", pronunciation: "ahsh-tay", english: "to buy" },
        { french: "commander", pronunciation: "koh-mahn-day", english: "to order" },
        { french: "rentrer", pronunciation: "rahn-tray", english: "to come home" }
      ] },
      { title: "Review situations", words: [
        { french: "un rendez-vous", pronunciation: "un rahn-day-voo", english: "an appointment" },
        { french: "une course", pronunciation: "oon koors", english: "an errand" },
        { french: "un trajet", pronunciation: "un trah-zhay", english: "a journey / route" },
        { french: "une conversation", pronunciation: "oon kon-vehr-sah-syon", english: "a conversation" },
        { french: "une question", pronunciation: "oon kes-tyon", english: "a question" }
      ] },
      { title: "Review connectors", words: [
        { french: "d'abord", pronunciation: "dah-bor", english: "first" },
        { french: "puis", pronunciation: "pwee", english: "then" },
        { french: "après", pronunciation: "ah-preh", english: "afterward" },
        { french: "parce que", pronunciation: "par-suh kuh", english: "because" },
        { french: "mais", pronunciation: "meh", english: "but" }
      ] }
    ],
    vocabulary: [],
    phrases: [
      { french: "Bonjour, je m'appelle Ana et j'habite à Paris.", english: "Hello, my name is Ana and I live in Paris." },
      { french: "D'abord, je vais à la gare.", english: "First, I am going to the station." },
      { french: "Puis, je fais les courses au marché.", english: "Then, I grocery shop at the market." },
      { french: "Je voudrais un café et une salade.", english: "I would like a coffee and a salad." },
      { french: "À mon avis, cette journée est très bien.", english: "In my opinion, this day is very good." }
    ],
    conversation: [
      { speaker: "Ana", french: "Bonjour, je m'appelle Ana. Je suis nouvelle ici.", english: "Hello, my name is Ana. I am new here." },
      { speaker: "Voisin", french: "Enchanté. Vous cherchez quelque chose ?", english: "Nice to meet you. Are you looking for something?" },
      { speaker: "Ana", french: "Oui, où est la boulangerie, s'il vous plaît ?", english: "Yes, where is the bakery, please?" },
      { speaker: "Voisin", french: "Continuez tout droit, puis tournez à gauche.", english: "Continue straight ahead, then turn left." },
      { speaker: "Ana", french: "Merci. Après, je vais prendre le bus pour un rendez-vous.", english: "Thank you. Afterward, I am going to take the bus for an appointment." },
      { speaker: "Voisin", french: "Très bien. Bonne journée !", english: "Very good. Have a nice day!" }
    ],
    grammar: [
      { title: "Connecting simple sentences", explanation: "Use small connectors like puis, après, mais, and parce que to link ideas without making grammar too heavy. Common mistake: long sentences become confusing; keep each idea simple.", examples: ["Je vais au marché, puis je rentre.", "Je prends le bus parce que la gare est loin.", "J'aime le café, mais je préfère le thé."] }
    ],
    pronunciation: [
      { rule: "Review liaison: when a word ending in a silent consonant comes before a vowel, French may link the sounds, as in vous avez and les amis.", examples: ["vous avez", "les amis", "deux heures"] }
    ],
    practice: {
      multipleChoice: [
        { prompt: "Which connector means then?", options: ["puis", "mais", "parce que"], answer: "puis" },
        { prompt: "Which phrase politely asks where the bakery is?", options: ["Où est la boulangerie, s'il vous plaît ?", "Donne la boulangerie.", "Je suis boulangerie."], answer: "Où est la boulangerie, s'il vous plaît ?" }
      ],
      translation: [{ prompt: "Translate: First, I go to the market, then I come home.", answer: "" }, { prompt: "Translate: I would like a ticket for Lyon.", answer: "" }],
      fillInTheBlanks: [{ prompt: "Je vais à la gare, ___ je prends le train.", answer: "" }, { prompt: "Je prends le bus ___ la gare est loin.", answer: "" }],
      speaking: ["Tell the story of a simple day in France using at least six sentences and three connectors."]
    },
    homework: [
      { task: "Write a ten-sentence A1 self-introduction and daily plan.", example: "Je m'appelle Leo. J'habite à Lille. D'abord, je vais au travail." },
      { task: "Record a one-minute spoken review using greetings, time, places, food, and opinions." }
    ],
    mission: { title: "A1 real-life simulation", description: "Perform a complete mini-scenario: introduce yourself, ask for directions, buy something, order at a café, and give one opinion." },
    quiz: [
      { question: "Which phrase links two actions in order?", options: ["puis", "très", "sans"], answer: "puis" },
      { question: "Which sentence combines reason correctly?", options: ["Je prends le bus parce que la gare est loin.", "Je prends le bus mais la gare est loin because.", "Parce que je prends le bus la gare."], answer: "Je prends le bus parce que la gare est loin." }
    ]
  }
]
