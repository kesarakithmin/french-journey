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
      translation: [{ prompt: "Translate: I am Ana." }],
      fillInTheBlanks: [{ prompt: "Bonjour, je m'appelle ___." }],
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
      translation: [{ prompt: "Translate: Not bad, and you?" }],
      fillInTheBlanks: [{ prompt: "___ va, merci." }],
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
      translation: [{ prompt: "Translate: twelve" }],
      fillInTheBlanks: [{ prompt: "___ ans." }],
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
      translation: [{ prompt: "Translate: Tomorrow, we have an appointment." }],
      fillInTheBlanks: [{ prompt: "Aujourd'hui, c'est ___." }],
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
      translation: [{ prompt: "Translate: My birthday is in June." }],
      fillInTheBlanks: [{ prompt: "J'ai ___ ans." }],
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
      translation: [{ prompt: "Translate: This is my sister." }],
      fillInTheBlanks: [{ prompt: "C'est ma ___." }],
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
      translation: [{ prompt: "Translate: I would like a coffee." }],
      fillInTheBlanks: [{ prompt: "Je voudrais un ___." }],
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
      translation: [{ prompt: "Translate: I am looking for bread." }],
      fillInTheBlanks: [{ prompt: "Je cherche du ___." }],
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
      translation: [{ prompt: "Translate: I want to pay by card." }],
      fillInTheBlanks: [{ prompt: "C'est ___ ?" }],
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
      translation: [{ prompt: "Translate: I would like the menu, please." }],
      fillInTheBlanks: [{ prompt: "Je voudrais ___ menu." }],
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
    title: "At Home and Rooms",
    level: "A1 Beginner",
    goal: "Learn how to talk about your home, rooms, and basic furniture in French.",
    objective: "You will be able to describe where things are in a house and say what room you are in.",
    whyItMatters: "Talking about your home is one of the most natural ways to introduce yourself and build everyday conversation.",
    description: "Build confidence describing your living space and everyday objects around you.",
    vocabularyGroups: [
      {
        title: "Rooms",
        words: [
          { french: "la cuisine", pronunciation: "kyoo-ZEEN", english: "kitchen" },
          { french: "le salon", pronunciation: "sah-LON", english: "living room" },
          { french: "la chambre", pronunciation: "shahm-BR", english: "bedroom" },
          { french: "la salle de bains", pronunciation: "sahl duh ban", english: "bathroom" },
          { french: "le jardin", pronunciation: "zhar-DAN", english: "garden" }
        ]
      },
      {
        title: "Furniture and objects",
        words: [
          { french: "une table", pronunciation: "tyabl", english: "table" },
          { french: "une chaise", pronunciation: "shehz", english: "chair" },
          { french: "un lit", pronunciation: "lee", english: "bed" },
          { french: "une fenêtre", pronunciation: "fuh-NAYT", english: "window" },
          { french: "une porte", pronunciation: "pohrt", english: "door" }
        ]
      }
    ],
    vocabulary: [],
    phrases: [
      { french: "Il y a une cuisine ici.", english: "There is a kitchen here." },
      { french: "La chambre est petite.", english: "The bedroom is small." },
      { french: "Le lit est devant la fenêtre.", english: "The bed is in front of the window." },
      { french: "Chez moi, il y a un jardin.", english: "At my place, there is a garden." }
    ],
    conversation: [
      { speaker: "Mina", french: "Chez toi, il y a combien de chambres ?", english: "At your place, how many bedrooms are there?" },
      { speaker: "Julien", french: "Il y a deux chambres.", english: "There are two bedrooms." }
    ],
    grammar: [
      {
        title: "Using il y a",
        explanation: "Use il y a to say that something exists or is present.",
        examples: ["Il y a une table.", "Il y a trois pièces."]
      }
    ],
    pronunciation: [
      { rule: "The final 's' in chambres is usually silent, so the word sounds shorter than it looks.", examples: ["chambre", "maison", "maison"] }
    ],
    cultureTip: "French homes are often described with a lot of pride and warmth, so learning these words helps you sound more natural in conversation.",
    practice: {
      multipleChoice: [
        { prompt: "What does il y a mean?", options: ["there is / there are", "because", "to go"], answer: "there is / there are" },
        { prompt: "Which room is the kitchen?", options: ["la cuisine", "la salle de bains", "le jardin"], answer: "la cuisine" }
      ],
      translation: [{ prompt: "Translate: There is a bed in the bedroom." }],
      fillInTheBlanks: [{ prompt: "___ a une porte." }],
      speaking: ["Describe your home in three short sentences."]
    },
    homework: [
      { task: "Draw a simple floor plan and label the rooms.", example: "salon, chambre, cuisine" },
      { task: "Say where your bed, table, and window are.", example: "Le lit est près de la fenêtre." }
    ],
    mission: { title: "Describe your home", description: "Tell a friend what rooms are in your home and where one object is." },
    quiz: [
      { question: "What is the French word for bedroom?", options: ["la cuisine", "la chambre", "le jardin"], answer: "la chambre" },
      { question: "What does il y a mean?", options: ["there is / there are", "to live", "to buy"], answer: "there is / there are" }
    ]
  },
  {
    id: 12,
    title: "Directions and Places in Town",
    level: "A1 Beginner",
    goal: "Learn how to ask for directions and identify common places in town.",
    objective: "You will be able to ask where something is and understand simple location phrases.",
    whyItMatters: "You will use these phrases when moving around a new neighbourhood, finding a bakery, or asking for help in public.",
    description: "Use practical directions and town vocabulary to navigate everyday life.",
    vocabularyGroups: [
      {
        title: "Places in town",
        words: [
          { french: "la gare", pronunciation: "gahr", english: "station" },
          { french: "la boulangerie", pronunciation: "boo-lahn-juh-REE", english: "bakery" },
          { french: "la pharmacie", pronunciation: "fahr-mah-SEE", english: "pharmacy" },
          { french: "l'école", pronunciation: "ay-KOHL", english: "school" },
          { french: "le marché", pronunciation: "mahr-SHAY", english: "market" }
        ]
      },
      {
        title: "Directions",
        words: [
          { french: "à gauche", pronunciation: "ah gohsh", english: "to the left" },
          { french: "à droite", pronunciation: "ah drwaht", english: "to the right" },
          { french: "tout droit", pronunciation: "too drwah", english: "straight ahead" },
          { french: "près de", pronunciation: "preh duh", english: "near" },
          { french: "loin de", pronunciation: "lwan duh", english: "far from" }
        ]
      }
    ],
    vocabulary: [],
    phrases: [
      { french: "Où est la gare ?", english: "Where is the station?" },
      { french: "La boulangerie est à gauche.", english: "The bakery is on the left." },
      { french: "C'est tout droit.", english: "It is straight ahead." },
      { french: "La pharmacie est près de l'école.", english: "The pharmacy is near the school." }
    ],
    conversation: [
      { speaker: "Ari", french: "Excusez-moi, où est le marché ?", english: "Excuse me, where is the market?" },
      { speaker: "Nadia", french: "Le marché est tout droit.", english: "The market is straight ahead." }
    ],
    grammar: [
      {
        title: "Asking where something is",
        explanation: "Use Où est... ? or Où sont... ? to ask where a place or object is.",
        examples: ["Où est la gare ?", "Où sont les toilettes ?"]
      }
    ],
    pronunciation: [
      { rule: "The nasal vowel in 'vin' and 'pain' sounds different from English; say it through the nose.", examples: ["vin", "pain"] }
    ],
    homework: [],
    mission: { title: "", description: "" },
    quiz: []
  }
]
