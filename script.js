/* =====================================================
   VANTA GLOBE
===================================================== */

let vantaEffect = null;

function initVanta() {
  const dark = document.body.classList.contains("dark-theme");

  if (vantaEffect) {
    vantaEffect.destroy();
  }

  vantaEffect = VANTA.NET({
    el: "#vanta-bg",

    mouseControls: true,
    touchControls: true,
    gyroControls: false,

    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,

    color: dark ? 0x4f83ee : 0x2563eb,
    backgroundColor: dark ? 0x181a1d : 0xf3f4f6,

    points: 12.00,
    maxDistance: 22.00,
    spacing: 18.00
  });
}

/* =====================================================
   СЛОВА
===================================================== */

const allWords = [
  "Алгоритм",
  "Комп'ютер",
  "Процесор",
  "Оперативна пам'ять",
  "Відеокарта",
  "Материнська плата",
  "Монітор",
  "Клавіатура",
  "Миша",
  "Принтер",
  "Равлик",
  "Собачка",
  "Гілка",
  "Ядро",
  "Моноблок",
  "Системний блок",
  "Вінчестер",
  "Жорсткий диск",
  "Діпфейк",
  "Мікрофон",
  "Роутер",
  "Тачпад",
  "Кулер",
  "Ярлик",
  "Кошик",
  "Драйвера",
  "Архіватор",
  "Архів",
  "Буфер обміну",
  "Шрифт",
  "Діаграма",
  "Градієнт",
  "Монтаж",
  "Спрайт",
  "Консоль",
  "Інформатика",
  "Біт",
  "Байт",
  "Мегабайт",
  "Кілобайт",
  "Гігабайт",
  "Терабайт",
  "Фотошоп",
  "Blender",
  "Google",
  "Zoom",
  "Файл",
  "Папка",
  "Операційна система",
  "Windows",
  "Linux",
  "Програма",
  "Додаток",
  "Інтерфейс",
  "Android",
  "Браузер",
  "Google",
  "Вебсайт",
  "Інтернет",
  "Сервер",
  "Клієнт",
  "IP-адреса",
  "Wi-Fi",
  "Bluetooth",
  "Посилання",
  "Домен",
  "Пароль",
  "Логін",
  "Акаунт",
  "Вірус",
  "Антивірус",
  "Хакер",
  "Фішинг",
  "Кібербезпека",
  "Шифрування",
  "CAPTCHA",
  "Двофакторна автентифікація",
  "Програмування",
  "Код",
  "Змінна",
  "Цикл",
  "Умова",
  "Функція",
  "Масив",
  "Python",
  "JavaScript",
  "HTML",
  "CSS",
  "Scratch",
  "Штучний інтелект",
  "Нейромережа",
  "ChatGPT",
  "Чат-бот",
  "Промпт",
  "Машинне навчання",
  "QR-код",
  "Піксель",
  "Скріншот",
  "Презентація",
  "Електронна таблиця",
  "Електронна пошта",
  "Месенджер",
  "Соціальна мережа",
  "Мем",
  "Емодзі",
  "Пуск",
  "Roblox Studio",
  "Персонаж",
  "Аватар",
  "Скрипт",
  "Книга",
  "NPC",
  "BIOS",
  "DDoS-атака",
  "Троянські програми",
  "3D-принтер",
  "VR-окуляри",
  "Віртуальна реальність",
  "Дрон",
  "Робот",
  "Сенсор",
  "Розумний будинок",
  "Хмарне сховище",
  "Резервна копія",
  "USB-флешка",
  "Таблиця",
  "Список",
  "Рендеринг",
  "Колонтитул",
  "Ліцензія",
  "Бекдори",
  "Документ",
  "Електронна пошта",
  "Вікно"
];

const easyWords = [
  "Алгоритм",
  "Комп'ютер",
  "Процесор",
  "Монітор",
  "Клавіатура",
  "Миша",
  "Принтер",
  "Собачка",
  "Равлик",
  "Гілка",
  "Ядро",
  "Моноблок",
  "Системний блок",
  "Жорсткий диск",
  "Мікрофон",
  "Роутер",
  "Тачпад",
  "Кулер",
  "Ярлик",
  "Кошик",
  "Архів",
  "Шрифт",
  "Діаграма",
  "Інформатика",
  "Біт",
  "Байт",
  "Мегабайт",
  "Фотошоп",
  "Google",
  "Zoom",
  "Файл",
  "Папка",
  "Windows",
  "Програма",
  "Додаток",
  "Інтерфейс",
  "Android",
  "Браузер",
  "Вебсайт",
  "Інтернет",
  "Сервер",
  "Wi-Fi",
  "Bluetooth",
  "Посилання",
  "Пароль",
  "Логін",
  "Акаунт",
  "Вірус",
  "Антивірус",
  "Хакер",
  "Код",
  "Змінна",
  "Цикл",
  "Умова",
  "Python",
  "JavaScript",
  "HTML",
  "CSS",
  "Scratch",
  "QR-код",
  "Піксель",
  "Скріншот",
  "Презентація",
  "Електронна таблиця",
  "Електронна пошта",
  "Месенджер",
  "Соціальна мережа",
  "Мем",
  "Емодзі",
  "Пуск",
  "Roblox Studio",
  "Персонаж",
  "Аватар",
  "Скрипт",
  "Книга",
  "3D-принтер",
  "Дрон",
  "Робот",
  "Таблиця",
  "Список",
  "Документ",
  "Вікно"
];


/* =====================================================
   ЗМІННІ
===================================================== */

let teams = [];

let scores = [];

let currentTeam = 0;

let selectedTime = 60;

let selectedDifficulty = "easy";

let skipPenalty = true;

let timeLeft = 60;

let roundScore = 0;

let timer = null;

let deck = [];

let wordIndex = 0;

let actionLocked = false;

let timeExpired = false;


/* =====================================================
   DOM
===================================================== */

const setup =
  document.getElementById("setup");

const game =
  document.getElementById("game");

const roundEnd =
  document.getElementById("roundEnd");

const finish =
  document.getElementById("finish");

const teamsContainer =
  document.getElementById("teams");

const wordElement =
  document.getElementById("word");

const wordCard =
  document.getElementById("wordCard");

const timerElement =
  document.getElementById("timer");

const currentTeamElement =
  document.getElementById("currentTeam");

const roundScoreElement =
  document.getElementById("roundScore");

const errorElement =
  document.getElementById("error");


/* =====================================================
   ПЕРЕМІШУВАННЯ
===================================================== */

function shuffle(array) {

  const result = [...array];

  for (
    let i = result.length - 1;
    i > 0;
    i--
  ) {

    const j =
      Math.floor(
        Math.random() * (i + 1)
      );

    [
      result[i],
      result[j]
    ] =
    [
      result[j],
      result[i]
    ];
  }

  return result;
}


/* =====================================================
   ГЕНЕРАЦІЯ НАЗВ КОМАНД
===================================================== */

const firstNames = [
  "Кібер",
  "Піксельні",
  "Нейро",
  "Діджитал",
  "Робо",
  "Космічні",
  "Супер"
];

const secondNames = [
  "Коти",
  "Ніндзя",
  "Хакери",
  "Майстри",
  "Генії",
  "Дрони",
  "Програмісти",
  "Бобри"
];


function generateTeamName() {

  const available = [];

  for (const first of firstNames) {

    for (const second of secondNames) {

      const name =
        `${first} ${second}`;

      if (!teams.includes(name)) {

        available.push(name);
      }
    }
  }

  if (available.length === 0) {

    return `Команда ${teams.length + 1}`;
  }

  return available[
    Math.floor(
      Math.random() *
      available.length
    )
  ];
}


/* =====================================================
   КОМАНДИ
===================================================== */

function renderTeams() {

  teamsContainer.innerHTML = "";

  teams.forEach(
    (team, index) => {

      const row =
        document.createElement(
          "div"
        );

      row.className =
        "team-row";


      const input =
        document.createElement(
          "input"
        );

      input.type =
        "text";

      input.value =
        team;

      input.placeholder =
        "Назва команди";


      input.addEventListener(
        "input",
        () => {

          teams[index] =
            input.value;

        }
      );


      /* Кнопка оновлення */

      const refreshButton =
        document.createElement(
          "button"
        );

      refreshButton.type =
        "button";

      refreshButton.className =
        "team-refresh";

      refreshButton.textContent =
        "↻";

      refreshButton.title =
        "Згенерувати іншу назву";


      refreshButton.addEventListener(
        "click",
        () => {

          teams[index] =
            generateTeamName();

          renderTeams();

        }
      );


      /* Кнопка видалення */

      const removeButton =
        document.createElement(
          "button"
        );

      removeButton.type =
        "button";

      removeButton.className =
        "danger";

      removeButton.textContent =
        "×";

      removeButton.title =
        "Видалити команду";


      removeButton.addEventListener(
        "click",
        () => {

          teams.splice(
            index,
            1
          );

          renderTeams();

        }
      );


      row.appendChild(input);

      row.appendChild(
        refreshButton
      );

      row.appendChild(
        removeButton
      );

      teamsContainer.appendChild(
        row
      );

    }
  );
}


/* =====================================================
   ДОДАТИ КОМАНДУ
===================================================== */

function addTeam() {

  if (teams.length >= 6) {

    showError(
      "Максимум 6 команд."
    );

    return;
  }


  /*
    ВАЖЛИВО:

    На старті teams = [].

    Перше натискання:
    Команда 1

    Друге:
    Команда 2

    Третє:
    Команда 3
  */

  teams.push(
    `Команда ${teams.length + 1}`
  );

  errorElement.classList.add(
    "hidden"
  );

  renderTeams();
}


/* =====================================================
   ВИБІР ЧАСУ
===================================================== */

document
  .querySelectorAll(
    ".time-buttons button"
  )
  .forEach(
    button => {

      button.addEventListener(
        "click",
        () => {

          selectedTime =
            Number(
              button.dataset.time
            );


          document
            .querySelectorAll(
              ".time-buttons button"
            )
            .forEach(
              btn => {

                btn.classList.remove(
                  "active"
                );

              }
            );


          button.classList.add(
            "active"
          );

        }
      );

    }
  );


/* =====================================================
   ВИБІР СКЛАДНОСТІ
===================================================== */

document
  .querySelectorAll(
    ".difficulty-buttons button"
  )
  .forEach(
    button => {

      button.addEventListener(
        "click",
        () => {

          selectedDifficulty =
            button.dataset.difficulty;

          document
            .querySelectorAll(
              ".difficulty-buttons button"
            )
            .forEach(
              btn => {
                btn.classList.remove("active");
              }
            );

          button.classList.add("active");
        }
      );

    }
  );


/* =====================================================
   ПОКАЗ СЛОВА
===================================================== */

function showWord() {

  if (
    wordIndex >=
    deck.length
  ) {

    const wordPool =
      selectedDifficulty === "easy"
        ? easyWords
        : allWords;

    deck =
      shuffle(wordPool);

    wordIndex = 0;
  }

  wordElement.textContent =
    deck[wordIndex];
}


/* =====================================================
   ОНОВЛЕННЯ ІНТЕРФЕЙСУ
===================================================== */

function updateInterface() {

  timerElement.textContent =
    timeLeft;

  currentTeamElement.textContent =
    teams[currentTeam];

  roundScoreElement.textContent =
    scores[currentTeam];
}


/* =====================================================
   ПОЧАТОК ГРИ
===================================================== */

function startGame() {

  if (teams.length < 2) {

    showError(
      "Додайте щонайменше дві команди."
    );

    return;
  }


  teams =
    teams.map(
      (team, index) =>
        team.trim() ||
        `Команда ${index + 1}`
    );


  errorElement.classList.add(
    "hidden"
  );


  skipPenalty =
    document
      .getElementById(
        "skipPenalty"
      )
      .checked;


  scores =
    teams.map(
      () => 0
    );


  currentTeam = 0;


  beginRound();
}


/* =====================================================
   ПОЧАТОК РАУНДУ
===================================================== */

function beginRound() {

  clearInterval(timer);


  roundScore = 0;

  timeLeft =
    selectedTime;

  timeExpired = false;

  actionLocked = false;


  const wordPool =
    selectedDifficulty === "easy"
      ? easyWords
      : allWords;

  deck =
    shuffle(wordPool);

  wordIndex = 0;


  setup.classList.add(
    "hidden"
  );

  roundEnd.classList.add(
    "hidden"
  );

  finish.classList.add(
    "hidden"
  );

  game.classList.remove(
    "hidden"
  );


  wordCard.classList.remove(
    "correct-flash",
    "skip-flash"
  );


  showWord();

  updateInterface();


  timer =
    setInterval(
      () => {

        if (
          timeLeft > 0
        ) {

          timeLeft--;

          updateInterface();
        }


        if (
          timeLeft <= 0
        ) {

          timeExpired =
            true;

          clearInterval(
            timer
          );

          timerElement.textContent =
            "0";

          /*
            Ніякого напису
            "Час вийшов" на картці.
            Поточне слово залишається.
          */

        }

      },
      1000
    );
}


/* =====================================================
   АНІМАЦІЯ КАРТКИ
===================================================== */

function animateCard(
  type,
  callback
) {

  if (actionLocked) {
    return;
  }


  actionLocked = true;


  const className =
    type === "correct"
      ? "correct-flash"
      : "skip-flash";


  wordCard.classList.remove(
    "correct-flash",
    "skip-flash"
  );


  requestAnimationFrame(
    () => {

      wordCard.classList.add(
        className
      );


      setTimeout(
        () => {

          wordCard.classList.remove(
            className
          );

          actionLocked =
            false;

          callback();

        },
        180
      );

    }
  );
}


/* =====================================================
   ВІДГАДАНО
===================================================== */

function correctWord() {

  if (actionLocked) {
    return;
  }


  animateCard(
    "correct",
    () => {

      scores[currentTeam]++;

      roundScore++;


      updateInterface();


      if (timeExpired) {

        endRound();

      } else {

        nextWord();

      }

    }
  );
}


/* =====================================================
   ПРОПУСТИТИ
===================================================== */

function skipWord() {

  if (actionLocked) {
    return;
  }


  animateCard(
    "skip",
    () => {

      if (skipPenalty) {

        scores[currentTeam]--;

        roundScore--;

      }


      updateInterface();


      if (timeExpired) {

        endRound();

      } else {

        nextWord();

      }

    }
  );
}


/* =====================================================
   НАСТУПНЕ СЛОВО
===================================================== */

function nextWord() {

  wordIndex++;

  showWord();

  updateInterface();
}


/* =====================================================
   КІНЕЦЬ РАУНДУ
===================================================== */

function endRound() {

  clearInterval(timer);

  actionLocked = true;

  timeExpired = false;


  game.classList.add(
    "hidden"
  );

  roundEnd.classList.remove(
    "hidden"
  );


  document
    .getElementById(
      "roundResult"
    )
    .textContent =
      `${teams[currentTeam]} завершила своє коло.`;


  document
    .getElementById(
      "roundScoreInfo"
    )
    .textContent =
      `За це коло: ${
        roundScore >= 0
          ? "+"
          : ""
      }${roundScore} балів`;


  renderScoreboard();
}


/* =====================================================
   СОРТУВАННЯ
===================================================== */

function getSortedScores() {

  return teams

    .map(
      (name, index) => ({

        name,

        score:
          scores[index]

      })
    )

    .sort(
      (a, b) =>
        b.score - a.score
    );
}


/* =====================================================
   ТАБЛИЦЯ
===================================================== */

function renderScoreboard() {

  const scoreboard =
    document.getElementById(
      "scoreboard"
    );


  scoreboard.innerHTML =
    "";


  getSortedScores()
    .forEach(
      (team, index) => {

        const row =
          document.createElement(
            "div"
          );


        row.className =
          "score-row";


        row.innerHTML = `

          <span>
            ${index + 1}.
            ${escapeHTML(
              team.name
            )}
          </span>

          <strong>
            ${team.score}
          </strong>

        `;


        scoreboard.appendChild(
          row
        );

      }
    );
}


/* =====================================================
   НАСТУПНА КОМАНДА
===================================================== */

function continueGame() {

  if (
    currentTeam <
    teams.length - 1
  ) {

    currentTeam++;

  } else {

    currentTeam = 0;
  }


  beginRound();
}


/* =====================================================
   ЗАВЕРШЕННЯ ГРИ
===================================================== */

function finishGame() {

  clearInterval(timer);


  roundEnd.classList.add(
    "hidden"
  );

  finish.classList.remove(
    "hidden"
  );


  renderFinalScores();
}


/* =====================================================
   ФІНАЛЬНІ РЕЗУЛЬТАТИ
===================================================== */

function renderFinalScores() {

  const finalScores =
    document.getElementById(
      "finalScores"
    );


  finalScores.innerHTML =
    "";


  getSortedScores()
    .forEach(
      (team, index) => {

        const row =
          document.createElement(
            "div"
          );


        row.className =
          "score-row";


        row.innerHTML = `

          <span>

            ${
              index === 0
                ? "🏆 "
                : ""
            }

            ${index + 1}.
            ${escapeHTML(
              team.name
            )}

          </span>

          <strong>
            ${team.score} балів
          </strong>

        `;


        finalScores.appendChild(
          row
        );

      }
    );
}


/* =====================================================
   НОВА ГРА
===================================================== */

function newGame() {

  clearInterval(timer);


  finish.classList.add(
    "hidden"
  );

  setup.classList.remove(
    "hidden"
  );


  currentTeam = 0;

  scores = [];

  roundScore = 0;

  actionLocked = false;

  timeExpired = false;

  timeLeft =
    selectedTime;

  renderTeams();
}


/* =====================================================
   ПОМИЛКА
===================================================== */

function showError(message) {

  errorElement.textContent =
    message;

  errorElement.classList.remove(
    "hidden"
  );
}


/* =====================================================
   ЗАХИСТ HTML
===================================================== */

function escapeHTML(text) {

  return String(text)

    .replace(
      /&/g,
      "&amp;"
    )

    .replace(
      /</g,
      "&lt;"
    )

    .replace(
      />/g,
      "&gt;"
    )

    .replace(
      /"/g,
      "&quot;"
    );
}


/* =====================================================
   КЛАВІАТУРА
===================================================== */

document.addEventListener(
  "keydown",
  event => {

    if (
      game.classList.contains(
        "hidden"
      )
    ) {

      return;
    }


    if (
      event.target.tagName ===
      "INPUT"
    ) {

      return;
    }


    /*
      ← = пропустити
      → = відгадано
    */

    if (
      event.key ===
      "ArrowRight"
    ) {

      event.preventDefault();

      correctWord();
    }


    if (
      event.key ===
      "ArrowLeft"
    ) {

      event.preventDefault();

      skipWord();
    }

  }
);


/* =====================================================
   SWIPE
===================================================== */

let startX = 0;

let dragging = false;


wordCard.addEventListener(
  "pointerdown",
  event => {

    if (actionLocked) {
      return;
    }


    startX =
      event.clientX;

    dragging = true;


    wordCard.classList.add(
      "dragging"
    );


    wordCard.setPointerCapture(
      event.pointerId
    );

  }
);


wordCard.addEventListener(
  "pointermove",
  event => {

    if (
      !dragging ||
      actionLocked
    ) {

      return;
    }

    /*
      Картка навмисно
      не рухається.
    */

  }
);


function finishSwipe(event) {

  if (!dragging) {
    return;
  }


  dragging = false;


  wordCard.classList.remove(
    "dragging"
  );


  const distance =
    event.clientX -
    startX;


  if (
    Math.abs(distance) > 80
  ) {

    if (distance > 0) {

      correctWord();

    } else {

      skipWord();

    }

  }
}


wordCard.addEventListener(
  "pointerup",
  finishSwipe
);


wordCard.addEventListener(
  "pointercancel",
  () => {

    dragging = false;

    wordCard.classList.remove(
      "dragging"
    );

  }
);


/* =====================================================
   КНОПКИ
===================================================== */

document
  .getElementById(
    "addTeamButton"
  )
  .addEventListener(
    "click",
    addTeam
  );


document
  .getElementById(
    "startButton"
  )
  .addEventListener(
    "click",
    startGame
  );


document
  .getElementById(
    "skipButton"
  )
  .addEventListener(
    "click",
    skipWord
  );


document
  .getElementById(
    "correctButton"
  )
  .addEventListener(
    "click",
    correctWord
  );


document
  .getElementById(
    "continueButton"
  )
  .addEventListener(
    "click",
    continueGame
  );


document
  .getElementById(
    "finishButton"
  )
  .addEventListener(
    "click",
    finishGame
  );


document
  .getElementById(
    "newGameButton"
  )
  .addEventListener(
    "click",
    newGame
  );


/* =====================================================
   ПРАВИЛА ГРИ
===================================================== */

const rulesButton =
  document.getElementById(
    "rulesButton"
  );

const rulesPopover =
  document.getElementById(
    "rulesPopover"
  );


rulesButton.addEventListener(
  "click",
  event => {

    event.stopPropagation();

    rulesPopover.classList.toggle(
      "hidden"
    );

  }
);


document.addEventListener(
  "click",
  event => {

    if (
      !rulesPopover.contains(
        event.target
      ) &&
      event.target !==
        rulesButton
    ) {

      rulesPopover.classList.add(
        "hidden"
      );

    }

  }
);


/* =====================================================
   ТЕМА ДЕНЬ / НІЧ
===================================================== */

const themeToggle =
  document.getElementById(
    "themeToggle"
  );


function applyTheme(theme) {

  const dark =
    theme === "dark";


  document.body.classList.toggle(
    "dark-theme",
    dark
  );


  themeToggle.textContent =
    dark
      ? "☀"
      : "☾";


  themeToggle.title =
    dark
      ? "Світла тема"
      : "Темна тема";


  localStorage.setItem(
    "alias-theme",
    theme
  );

  initVanta();
   
}


/* Відновлення останньої теми */

const savedTheme =
  localStorage.getItem(
    "alias-theme"
  );


applyTheme(
  savedTheme === "dark"
    ? "dark"
    : "light"
);


themeToggle.addEventListener(
  "click",
  () => {

    const isDark =
      document.body.classList.contains(
        "dark-theme"
      );


    applyTheme(
      isDark
        ? "light"
        : "dark"
    );

  }
);


/* =====================================================
   ПОЧАТКОВИЙ РЕНДЕР
===================================================== */

renderTeams();
