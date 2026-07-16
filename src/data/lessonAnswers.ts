
// French Journey Answer Database

type AnswerValue = string[] | { type: string }

type LessonAnswerMap = {
  [lessonId: string]: {
    [prompt: string]: AnswerValue
  }
}

export const lessonAnswers: LessonAnswerMap = {

"1": {
  "Complete: Bonjour, je m'appelle ______.": {
    type: "personal"
  }
},

"2": {
  "Complete: ___ va, merci.": [
    "Ça",
    "Ca"
  ]
},

"3": {
  "Complete: ___ ans.": [
    "J'ai vingt",
    "J'ai"
  ]
},

"4": {
  "Complete: Aujourd'hui, c'est ___.": {
    type: "personal"
  }
},

"5": {
  "Complete: J'ai ___ ans.": {
    type: "personal"
  }
},

"6": {
  "Complete: C'est ma ___.": [
    "famille",
    "mère",
    "soeur"
  ]
},

"7": {
  "Complete: Je voudrais un ___.": [
    "café",
    "menu",
    "sandwich"
  ]
},

"8": {
  "Complete: Je cherche du ___.": [
    "pain",
    "lait",
    "sucre"
  ]
},

"9": {
  "Complete: C'est ___ ?": [
    "quoi",
    "qui"
  ]
},

"10": {
  "Complete: Je voudrais ___ menu.": [
    "un"
  ]
},

"11": {
  "Complete: Je ___ au marché. (am going)": [
    "vais"
  ],
  "Complete: J'___ un rendez-vous. (have)": [
    "ai"
  ]
},

"12": {
  "Complete: Je ___ français un peu.": [
    "parle"
  ],
  "Complete: Elle ___ une adresse.": [
    "a"
  ]
},

"13": {
  "Complete: ___ êtes français ?": [
    "Vous"
  ],
  "Complete: ___ vont à l'école.": [
    "Ils",
    "Elles"
  ]
},

"14": {
  "Complete: Voici ___ famille.": [
    "ma"
  ],
  "Complete: J'ai ___ frère.": [
    "un"
  ]
},

"15": {
  "Complete: Elle est grand___.": [
    "e"
  ],
  "Complete: J'ai les ___ courts.": [
    "cheveux"
  ]
},

"16": {
  "Complete: Chez moi, il y ___ un salon.": [
    "a"
  ],
  "Complete: J'habite dans une ___.": [
    "maison",
    "appartement"
  ]
},

"17": {
  "Complete: La clé est ___ la table.": [
    "sur"
  ],
  "Complete: Le lit est dans la ___.": [
    "chambre"
  ]
},

"18": {
  "Complete: Je ___ lève à sept heures.": [
    "me"
  ],
  "Complete: Le soir, je me ___.": [
    "couche"
  ]
},

"19": {
  "Complete: Il ___ neuf heures.": [
    "est"
  ],
  "Complete: Je suis en ___.": [
    "retard"
  ]
}

}
