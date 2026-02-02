/* ===========================
   LusoPanda — Shared JS
   =========================== */

/* --- Speech (pt-PT) --- */
export function sayPT(text){
  if(!("speechSynthesis" in window)){
    alert("Audio is not supported in this browser.");
    return;
  }
  const u = new SpeechSynthesisUtterance(text);
  u.lang = "pt-PT";
  speechSynthesis.cancel();
  speechSynthesis.speak(u);
}

/* --- Data: 3 levels for EXERCISES, 3 levels for LEARN --- */
export const LEVELS = {
  /* =======================
     LEVEL 1 — START FROM ZERO
     ======================= */
  L1: [
    { id:"ola", pt:"Olá!", en:"Hi!" },
    { id:"bomdia", pt:"Bom dia!", en:"Good morning!" },
    { id:"boatarde", pt:"Boa tarde!", en:"Good afternoon!" },
    { id:"boanoite", pt:"Boa noite!", en:"Good evening / Good night!" },
    { id:"tchau", pt:"Tchau!", en:"Bye!" },
    { id:"ateamanha", pt:"Até amanhã!", en:"See you tomorrow!" },

    { id:"porfavor", pt:"Por favor.", en:"Please." },
    { id:"obrigado", pt:"Obrigado / Obrigada.", en:"Thank you." },
    { id:"desculpe", pt:"Desculpe.", en:"Sorry / Excuse me." },
    { id:"naomalf", pt:"Não faz mal.", en:"It’s okay / No problem." },

    { id:"nomeq", pt:"Como te chamas?", en:"What is your name?" },
    { id:"nomer", pt:"Chamo-me…", en:"My name is…" },
    { id:"comoestas", pt:"Como estás?", en:"How are you?" },
    { id:"bem", pt:"Estou bem.", en:"I’m fine." },
    { id:"assimassim", pt:"Assim-assim.", en:"So-so." },

    { id:"naopercebo", pt:"Não percebo.", en:"I don’t understand." },
    { id:"repete", pt:"Podes repetir, por favor?", en:"Can you repeat, please?" },
    { id:"devagar", pt:"Fala mais devagar, por favor.", en:"Speak more slowly, please." },
    { id:"como", pt:"Como se diz… em Português?", en:"How do you say… in Portuguese?" },

    { id:"sim", pt:"Sim.", en:"Yes." },
    { id:"nao", pt:"Não.", en:"No." },
    { id:"talvez", pt:"Talvez.", en:"Maybe." },

    { id:"agua", pt:"Água, por favor.", en:"Water, please." },
    { id:"quero", pt:"Eu quero…", en:"I want…" }
  ],

  /* =======================
     LEVEL 2 — SCHOOL PORTUGUESE
     ======================= */
  L2: [
    { id:"bathroom", pt:"Posso ir à casa de banho, por favor?", en:"Can I go to the bathroom, please?" },
    { id:"help", pt:"Podes ajudar-me?", en:"Can you help me?" },
    { id:"page", pt:"Em que página?", en:"On which page?" },
    { id:"pen", pt:"Podes emprestar-me uma caneta?", en:"Can you lend me a pen?" },
    { id:"pencil", pt:"Não tenho lápis.", en:"I don’t have a pencil." },
    { id:"eraser", pt:"Tens uma borracha?", en:"Do you have an eraser?" },
    { id:"notebook", pt:"Não tenho caderno.", en:"I don’t have a notebook." },

    { id:"homework", pt:"Qual é o trabalho de casa?", en:"What is the homework?" },
    { id:"test", pt:"Hoje tenho teste.", en:"Today I have a test." },
    { id:"tomorrowtest", pt:"Amanhã tenho teste.", en:"Tomorrow I have a test." },

    { id:"enter", pt:"Posso entrar?", en:"Can I come in?" },
    { id:"leave", pt:"Posso sair?", en:"Can I leave?" },
    { id:"late", pt:"Cheguei atrasado / atrasada.", en:"I arrived late." },

    { id:"again", pt:"Podes repetir, por favor?", en:"Can you repeat, please?" },
    { id:"understand", pt:"Não percebi.", en:"I didn’t understand." },
    { id:"slow", pt:"Mais devagar, por favor.", en:"More slowly, please." },

    { id:"teacher", pt:"Professora / Professor", en:"Teacher" },
    { id:"classroom", pt:"Onde é a sala?", en:"Where is the classroom?" },
    { id:"office", pt:"Onde é a secretaria?", en:"Where is the office?" },
    { id:"library", pt:"Onde é a biblioteca?", en:"Where is the library?" },
    { id:"canteen", pt:"Onde é o refeitório?", en:"Where is the cafeteria?" },

    { id:"copy", pt:"Posso copiar?", en:"Can I copy?" },
    { id:"read", pt:"Podes ler, por favor?", en:"Can you read, please?" },
    { id:"write", pt:"Escreve no caderno.", en:"Write in the notebook." },
    { id:"listen", pt:"Ouve, por favor.", en:"Listen, please." }
  ],

  /* =======================
     LEVEL 3 — FOOD + SPORTS + FREE TIME (MORE CONTENT)
     ======================= */
  L3: [
    /* --- Food / cafeteria --- */
    { id:"hungry", pt:"Tenho fome.", en:"I am hungry." },
    { id:"thirsty", pt:"Tenho sede.", en:"I am thirsty." },
    { id:"whatmenu", pt:"Qual é o menu de hoje?", en:"What is today’s menu?" },
    { id:"i_want", pt:"Eu queria…", en:"I would like…" },
    { id:"i_take", pt:"Eu vou levar…", en:"I will take…" },
    { id:"howmuch", pt:"Quanto custa?", en:"How much is it?" },
    { id:"paycard", pt:"Posso pagar com cartão?", en:"Can I pay by card?" },
    { id:"waterplease", pt:"Água, por favor.", en:"Water, please." },
    { id:"juice", pt:"Um sumo, por favor.", en:"A juice, please." },
    { id:"sandwich", pt:"Uma sandes, por favor.", en:"A sandwich, please." },
    { id:"vegetarian", pt:"Eu sou vegetariano / vegetariana.", en:"I am vegetarian." },
    { id:"allergy", pt:"Eu tenho alergia a…", en:"I am allergic to…" },
    { id:"like", pt:"Eu gosto de…", en:"I like…" },
    { id:"dontlike", pt:"Eu não gosto de…", en:"I don’t like…" },
    { id:"prefer", pt:"Eu prefiro…", en:"I prefer…" },
    { id:"more", pt:"Mais, por favor.", en:"More, please." },
    { id:"less", pt:"Menos, por favor.", en:"Less, please." },
    { id:"done", pt:"Já terminei.", en:"I’m finished." },

    /* --- Free time / hobbies --- */
    { id:"hobby", pt:"O meu hobby é…", en:"My hobby is…" },
    { id:"music", pt:"Eu gosto de música.", en:"I like music." },
    { id:"movies", pt:"Eu gosto de filmes.", en:"I like movies." },
    { id:"games", pt:"Eu gosto de videojogos.", en:"I like video games." },
    { id:"reading", pt:"Eu gosto de ler.", en:"I like reading." },
    { id:"drawing", pt:"Eu gosto de desenhar.", en:"I like drawing." },
    { id:"dance", pt:"Eu gosto de dançar.", en:"I like dancing." },
    { id:"sing", pt:"Eu gosto de cantar.", en:"I like singing." },

    /* --- Invitations / friends --- */
    { id:"inviteplay", pt:"Queres jogar comigo?", en:"Do you want to play with me?" },
    { id:"letsgo", pt:"Vamos?", en:"Shall we go?" },
    { id:"afterclass", pt:"Depois da aula…", en:"After class…" },
    { id:"meet", pt:"Encontramo-nos às…", en:"We meet at…" },
    { id:"where_meet", pt:"Onde nos encontramos?", en:"Where do we meet?" },
    { id:"ok", pt:"Ok!", en:"Ok!" },
    { id:"goodidea", pt:"Boa ideia!", en:"Good idea!" },
    { id:"maybe_later", pt:"Talvez mais tarde.", en:"Maybe later." },

    /* --- Sports vocabulary --- */
    { id:"sports", pt:"Eu gosto de desporto.", en:"I like sports." },
    { id:"football", pt:"Eu jogo futebol.", en:"I play football/soccer." },
    { id:"basketball", pt:"Eu jogo basquetebol.", en:"I play basketball." },
    { id:"volleyball", pt:"Eu jogo voleibol.", en:"I play volleyball." },
    { id:"swim", pt:"Eu nado.", en:"I swim." },
    { id:"run", pt:"Eu corro.", en:"I run." },
    { id:"gym", pt:"Eu vou ao ginásio.", en:"I go to the gym." },
    { id:"training", pt:"Hoje tenho treino.", en:"Today I have training." },
    { id:"match", pt:"Hoje tenho jogo.", en:"Today I have a match/game." },
    { id:"team", pt:"A minha equipa é…", en:"My team is…" },
    { id:"coach", pt:"O treinador / a treinadora", en:"Coach" },
    { id:"practice", pt:"Vamos treinar.", en:"Let’s practice." },
    { id:"playoutside", pt:"Vamos jogar lá fora.", en:"Let’s play outside." },
    { id:"goal", pt:"Golo!", en:"Goal!" },
    { id:"pass", pt:"Passa a bola!", en:"Pass the ball!" },
    { id:"shoot", pt:"Chuta!", en:"Shoot!" },
    { id:"defend", pt:"Defende!", en:"Defend!" },
    { id:"win", pt:"Nós ganhámos!", en:"We won!" },
    { id:"lose", pt:"Nós perdemos.", en:"We lost." },
    { id:"tired", pt:"Estou cansado / cansada.", en:"I am tired." },
    { id:"injury", pt:"Tenho uma lesão.", en:"I have an injury." },
    { id:"water_break", pt:"Pausa para água.", en:"Water break." },

    /* --- Small talk --- */
    { id:"age", pt:"Eu tenho 12 anos.", en:"I am 12 years old." },
    { id:"from", pt:"Eu sou de…", en:"I am from…" },
    { id:"today", pt:"Hoje estou contente.", en:"Today I’m happy." },
    { id:"thanks", pt:"Obrigado pela tua ajuda.", en:"Thank you for your help." }
  ]
};

/* --- Modules (titles from your notes) --- */
export const MODULES = [
  {
    id: "m1",
    title: "Módulo 1 — “Olá, amigos!”",
    subtitle: "Greetings, names, first conversation.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1600&q=70",
    levelKey: "L1",
    descriptionPT: "Aprender cumprimentos, apresentar-se e começar a comunicar.",
  },
  {
    id: "m2",
    title: "Módulo 2 — “A Minha Escola”",
    subtitle: "Classroom, help, routines.",
    image: "https://images.unsplash.com/photo-1588072432836-7fb78b0b6fce?auto=format&fit=crop&w=1600&q=70",
    levelKey: "L2",
    descriptionPT: "Tudo sobre a sala de aula, horários e a vida escolar.",
  },
  {
    id: "m3",
    title: "Módulo 3 — “Hora de Comer!”",
    subtitle: "Cafeteria, simple orders.",
    image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=1600&q=70",
    levelKey: "L3",
    descriptionPT: "Comida, refeitório, pedidos simples e falar de preferências.",
  },
  {
    id: "m4",
    title: "Módulo 4 — “Desporto e tempo livre”",
    subtitle: "Sports, hobbies, invitations.",
    image: "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=1600&q=70",
    levelKey: "L3",
    descriptionPT: "Desportos, atividades de lazer e hobbies.",
  }
];
