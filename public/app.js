/* =========================================================
   ТЕОРА — Уровни участия. Логика страницы.

   ▸▸▸ РЕДАКТИРОВАНИЕ ЦЕН И ОПИСАНИЙ ◂◂◂
   Всё содержимое уровней хранится ниже, в массиве LEVELS.
   Меняйте здесь цену (price), короткую фразу (phrase),
   идею (idea), описание (desc) и список возможностей (features) —
   карта, карточки, таблица сравнения и блок стоимости обновятся сами.

   Ссылки на оплату/вступление задаются в поле `link` каждого уровня
   (например, ссылка на Stripe/форму). Сейчас стоят якоря/placeholder.
   ========================================================= */

const LEVELS = [
  {
    id: 'znakomstvo',
    num: '01',
    name: 'Знакомство',
    price: 'Бесплатно',
    priceShort: '0 €',
    per: '',
    color: 'var(--l1)',
    phrase: 'Я вхожу.',
    idea: 'Я вхожу в пространство.',
    short: 'Первое соприкосновение с Сообществом.',
    desc: 'Первое соприкосновение с Сообществом ТЕОРА. Здесь можно присмотреться, познакомиться с атмосферой, людьми и принципами взаимодействия — и понять, хочется ли идти глубже. Пока не нужно активно проявляться: вам даётся пространство для наблюдения и собственного ощущения.',
    features: [
      'Курс «Фразы дня»',
      'Библиотека',
      'Видеоматериалы',
      'Блог Алунайя',
      'Блог Лувайи',
      'Блоги учеников',
      'Чат знакомства',
      'Новостной канал Сообщества'
    ],
    cta: 'Начать знакомство',
    link: '#join'
  },
  {
    id: 'prisutstvie',
    num: '02',
    name: 'Присутствие',
    price: '30 €',
    priceShort: '30 €',
    per: '/ месяц',
    color: 'var(--l2)',
    phrase: 'Я участвую.',
    idea: 'Я становлюсь частью пространства.',
    short: 'Регулярное присутствие и ритм Сообщества.',
    desc: 'Переход от знакомства к регулярному присутствию. Вы уже не просто наблюдаете за жизнью Сообщества, а входите в его ритм. Присутствие становится практикой само по себе: человек учится быть в пространстве осознанно, слышать происходящее и замечать собственные внутренние процессы.',
    features: [
      'Тематические видеоматериалы',
      'Закрытый чат для общения',
      'Обсуждение и исследование обучающих материалов',
      'Участие в жизни Сообщества',
      'Ведение Дневников',
      'Онлайн-пространство для работы в сессиях коммуникации'
    ],
    cta: 'Выбрать Присутствие',
    link: '#join'
  },
  {
    id: 'proyavlenie',
    num: '03',
    name: 'Проявление',
    price: '70 €',
    priceShort: '70 €',
    per: '/ месяц',
    color: 'var(--l3)',
    phrase: 'Я становлюсь видимым.',
    idea: 'Я позволяю себе быть увиденным.',
    short: 'Сообщество встречается с вашей индивидуальностью.',
    desc: 'Здесь пространство начинает двигаться в обратную сторону: если раньше вы преимущественно входили в Сообщество и воспринимали происходящее, то теперь Сообщество встречается с вашей индивидуальностью. Вы получаете пространство для собственной проявленности — делиться, задавать темы, показывать своё, формировать своё пространство внутри Сообщества.',
    features: [
      'Тематические видеоматериалы',
      'Закрытый чат для общения',
      'Обсуждение и исследование обучающих материалов',
      'Практические задания',
      'Инициирование проектов индивидуального проявления',
      'Живая встреча с Учителями Алунайем и Лувайей, разбор индивидуальных кейсов',
      'Малые круги — пространство глубокого взаимодействия учеников',
      'Ведение личного Блога',
      'Участие в мероприятиях Сообщества'
    ],
    personalSpace: true,
    cta: 'Перейти к Проявлению',
    link: '#join'
  },
  {
    id: 'ya-i-drugoy',
    num: '04',
    name: 'Я и Другой',
    price: '150 €',
    priceShort: '150 €',
    per: '/ месяц',
    color: 'var(--l4)',
    phrase: 'Я встречаю.',
    idea: 'Я встречаю Другого.',
    short: 'Пространством исследования становятся отношения.',
    desc: 'Основным пространством исследования становятся отношения. Другой человек неизбежно вызывает чувства, ожидания, симпатию, сопротивление, близость и дистанцию, согласие и конфликт. Вместо того чтобы избегать этих процессов, участники учатся их замечать и исследовать. Встреча с Другим становится возможностью глубже увидеть самого себя.',
    features: [
      'Тематические видеоматериалы',
      'Закрытый чат для общения',
      'Обсуждение и исследование обучающих материалов',
      'Практические задания для реализации в группах',
      'Инициирование проектов совместного проявления',
      'Лаборатория взаимодействий — живая встреча с Учителями Алунайем и Лувайей, разбор кейсов взаимодействия',
      'Малые круги — пространство глубокого взаимодействия учеников',
      'Ведение личного Блога',
      'Участие в мероприятиях Сообщества'
    ],
    cta: 'Исследовать уровень',
    link: '#join'
  }
];

// Пятый уровень — существует в описаниях, но без цены и не как тариф.
const COCREATION = {
  id: 'cocreation',
  name: 'Сотворчество',
  color: 'var(--l5)',
  phrase: 'Я создаю вместе.',
  idea: 'Я участвую в создании пространства.'
};

// ---- FAQ ----
const FAQ = [
  ['С какого уровня лучше начинать?',
   'С того, что соответствует вашей нынешней готовности. Многие начинают со «Знакомства», чтобы почувствовать атмосферу, но вы можете войти сразу на тот уровень, который откликается.'],
  ['Обязательно ли проходить уровни последовательно?',
   'Нет. Уровни — это не ступени, которые нужно «пройти». Каждый следующий включает предыдущий, но вы выбираете глубину участия сами.'],
  ['Можно ли изменить уровень участия?',
   'Да, в любой момент — как углубиться, так и вернуться к более лёгкому участию. Переход происходит тогда, когда появляется естественная потребность в другой глубине.'],
  ['Нужно ли присутствовать на всех встречах?',
   'Нет. Вы участвуете настолько, насколько это имеет смысл для вас сейчас. Присутствие — это практика, а не обязательство по посещаемости.'],
  ['Что происходит, если я некоторое время не могу участвовать?',
   'Ничего страшного. Пространство остаётся открытым для вас, и вы возвращаетесь тогда, когда готовы. При необходимости членство можно поставить на паузу.'],
  ['Можно ли отменить членство?',
   'Да. Членство можно отменить в любой момент, без объяснения причин.'],
  ['Как происходит переход на следующий уровень?',
   'Достаточно выбрать нужный уровень при оплате или написать нам. Доступ к новым возможностям открывается сразу.'],
  ['Можно ли сразу войти в «Проявление» или «Я и Другой»?',
   'Да. Если вы чувствуете готовность к более глубокому участию, можно начать с этих уровней, минуя предыдущие.'],
  ['Как попасть в Сотворчество?',
   'Сотворчество — индивидуальный путь с индивидуальным подходом. Вход в него предполагает предварительную встречу и согласование, поэтому здесь не покупка, а заявка.'],
  ['Есть ли минимальный срок участия?',
   'Минимального срока нет. Вы остаётесь на выбранном уровне столько, сколько это имеет смысл для вас.']
];

// ---- «Где я сейчас» ----
const CHOOSE = [
  ['Я хочу сначала познакомиться с пространством', 'znakomstvo', 'Знакомство', 'var(--l1)'],
  ['Мне важно регулярно быть частью Сообщества', 'prisutstvie', 'Присутствие', 'var(--l2)'],
  ['Я хочу проявляться и делиться собой', 'proyavlenie', 'Проявление', 'var(--l3)'],
  ['Я хочу глубже исследовать себя через отношения', 'ya-i-drugoy', 'Я и Другой', 'var(--l4)'],
  ['Я готов участвовать в создании общего пространства', 'cocreation', 'Сотворчество', 'var(--l5)']
];

// ---- Сравнительная таблица (значения: true / false / текст) ----
// Колонки соответствуют 4 уровням участия.
const COMPARE_ROWS = [
  ['Открытые материалы: библиотека, видео, блоги, «Фразы дня»', true, true, true, true],
  ['Чат знакомства и новостной канал', true, true, true, true],
  ['Закрытый чат для общения', false, true, true, true],
  ['Обсуждение обучающих материалов', false, true, true, true],
  ['Ведение Дневников', false, true, true, true],
  ['Сессии коммуникации (онлайн-пространство)', false, true, true, true],
  ['Практические задания', false, false, 'индивид.', 'в группах'],
  ['Малые круги', false, false, true, true],
  ['Живые встречи с Учителями', false, false, true, 'Лаборатория'],
  ['Ведение личного Блога', false, false, true, true],
  ['Инициирование проектов', false, false, 'индивид.', 'совместные'],
  ['Работа с отношениями', false, false, false, true]
];

/* =========================================================
   Ниже — рендер и интерактив. Обычно менять не нужно.
   ========================================================= */

const $ = (sel, root = document) => root.querySelector(sel);
const el = (tag, cls, html) => {
  const node = document.createElement(tag);
  if (cls) node.className = cls;
  if (html != null) node.innerHTML = html;
  return node;
};
const ALL_LEVELS = [...LEVELS, COCREATION];

// ---- Мини-аналитика: хук для кликов по CTA и уровням ----
function track(event, payload) {
  const data = Object.assign({ event, ts: Date.now() }, payload || {});
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(data);
  // Здесь можно вызвать gtag/Plausible/Matomo и т.п.
  if (window.DEBUG_ANALYTICS) console.log('[track]', data);
}

document.addEventListener('click', (e) => {
  const cta = e.target.closest('[data-cta]');
  if (cta) track('cta_click', { cta: cta.getAttribute('data-cta') });
});

// ---- Плавный скролл по якорям ----
document.addEventListener('click', (e) => {
  const a = e.target.closest('a[href^="#"]');
  if (!a) return;
  const id = a.getAttribute('href').slice(1);
  if (!id) return;
  const target = document.getElementById(id);
  if (!target) return;
  e.preventDefault();
  target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  history.replaceState(null, '', '#' + id);
});

// ---- 1. Поток в hero ----
function renderFlow() {
  const flow = $('#flow');
  ALL_LEVELS.forEach((lvl, i) => {
    if (i > 0) {
      const arrow = el('span', 'flow__arrow', '→');
      flow.appendChild(arrow);
    }
    const item = el('li', 'flow__item');
    item.style.animationDelay = (0.15 * i + 0.2) + 's';
    const dot = el('span', 'flow__dot');
    dot.style.background = lvl.color;
    item.appendChild(dot);
    item.appendChild(document.createTextNode(lvl.name));
    flow.appendChild(item);
  });
}

// ---- 2. Карта колец + легенда ----
function renderMap() {
  const rings = $('#rings');
  const legend = $('#mapLegend');

  // Кольца: от внутреннего (Знакомство) к внешнему; + внешнее поле Сотворчества.
  const total = LEVELS.length; // 4 интерактивных кольца
  LEVELS.forEach((lvl, i) => {
    const size = 150 + i * 82; // px, расширяется наружу
    const ring = el('div', 'map__ring');
    ring.style.setProperty('--ring-color', lvl.color);
    ring.style.width = size + 'px';
    ring.style.height = size + 'px';
    ring.style.zIndex = String(total - i);
    ring.dataset.target = lvl.id;
    ring.setAttribute('role', 'button');
    ring.setAttribute('tabindex', '0');
    ring.setAttribute('aria-label', lvl.name);
    const label = el('span', 'map__ring-label', lvl.name);
    ring.appendChild(label);
    rings.appendChild(ring);
  });

  // Внешнее поле — Сотворчество (особое, без клика к тарифу)
  const field = el('div', 'map__ring map__ring--field');
  field.style.setProperty('--ring-color', COCREATION.color);
  const fsize = 150 + total * 82;
  field.style.width = fsize + 'px';
  field.style.height = fsize + 'px';
  field.style.zIndex = '0';
  const flabel = el('span', 'map__ring-label', 'Сотворчество');
  field.appendChild(flabel);
  rings.appendChild(field);

  // Легенда — 4 уровня
  LEVELS.forEach((lvl) => {
    const item = el('button', 'legend__item');
    item.style.setProperty('--legend-color', lvl.color);
    item.dataset.target = lvl.id;
    item.innerHTML =
      '<span class="legend__num">' + lvl.num + '</span>' +
      '<span class="legend__body"><h3>' + lvl.name + '</h3><p>' + lvl.short + '</p></span>' +
      '<span class="legend__more">→</span>';
    legend.appendChild(item);
  });
  // Сотворчество в легенде — особая строка
  const co = el('button', 'legend__item');
  co.style.setProperty('--legend-color', COCREATION.color);
  co.dataset.target = 'cocreation';
  co.innerHTML =
    '<span class="legend__num">◇</span>' +
    '<span class="legend__body"><h3>Сотворчество</h3><p>Индивидуальный уровень — по заявке.</p></span>' +
    '<span class="legend__more">→</span>';
  legend.appendChild(co);

  // Связка: наведение на легенду подсвечивает кольцо
  function activate(id, on) {
    const ring = rings.querySelector('[data-target="' + id + '"]');
    if (ring) ring.classList.toggle('is-active', on);
  }
  legend.querySelectorAll('.legend__item').forEach((btn) => {
    const id = btn.dataset.target;
    btn.addEventListener('mouseenter', () => activate(id, true));
    btn.addEventListener('mouseleave', () => activate(id, false));
    btn.addEventListener('click', () => goToLevel(id));
  });
  rings.querySelectorAll('.map__ring[data-target]').forEach((ring) => {
    const id = ring.dataset.target;
    ring.addEventListener('click', () => goToLevel(id));
    ring.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); goToLevel(id); }
    });
  });
}

function goToLevel(id) {
  track('level_open', { level: id });
  const target = document.getElementById('level-' + id) || document.getElementById(id);
  if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ---- 4. Подробные карточки уровней ----
function personalSpaceMarkup() {
  return (
    '<div class="personal-space" aria-hidden="true">' +
      '<div class="personal-space__bar">' +
        '<span class="personal-space__dot"></span>' +
        '<span class="personal-space__dot"></span>' +
        '<span class="personal-space__dot"></span>' +
        '<span style="margin-left:8px">Личное пространство участника</span>' +
      '</div>' +
      '<div class="personal-space__body">' +
        '<div class="personal-space__row">' +
          '<span class="personal-space__avatar"></span>' +
          '<span class="personal-space__lines">' +
            '<span class="personal-space__line w1"></span>' +
            '<span class="personal-space__line w2"></span>' +
          '</span>' +
        '</div>' +
        '<div class="personal-space__tags">' +
          '<span class="personal-space__tag">Мои темы</span>' +
          '<span class="personal-space__tag">Исследования</span>' +
          '<span class="personal-space__tag">Инициативы</span>' +
          '<span class="personal-space__tag">Творчество</span>' +
        '</div>' +
      '</div>' +
    '</div>'
  );
}

function renderLevels() {
  const wrap = $('#levels');
  LEVELS.forEach((lvl) => {
    const card = el('article', 'level-card reveal');
    card.id = 'level-' + lvl.id;
    card.style.setProperty('--lvl', lvl.color);

    const features = lvl.features.map((f) => '<li>' + f + '</li>').join('');
    const price = lvl.price === 'Бесплатно'
      ? 'Бесплатно'
      : lvl.price + (lvl.per ? ' <span style="font-weight:400;color:var(--muted-2)">' + lvl.per + '</span>' : '');

    card.innerHTML =
      '<div class="level-card__top">' +
        '<span class="level-card__num">' + lvl.num + '</span>' +
        '<h3 class="level-card__name">' + lvl.name + '</h3>' +
        '<span class="level-card__price">' + price + '</span>' +
      '</div>' +
      '<p class="level-card__idea">«' + lvl.idea + '»</p>' +
      '<p class="level-card__desc">' + lvl.desc + '</p>' +
      (lvl.personalSpace ? personalSpaceMarkup() : '') +
      '<ul class="level-card__list">' + features + '</ul>' +
      '<a href="' + lvl.link + '" class="btn btn--primary" data-cta="level-' + lvl.id + '">' + lvl.cta + '</a>';

    wrap.appendChild(card);
  });
}

// ---- 5. Сравнение ----
function cell(val) {
  if (val === true) return '<td><span class="compare__yes">✓</span></td>';
  if (val === false) return '<td><span class="compare__no">—</span></td>';
  return '<td>' + val + '</td>';
}
function renderCompare() {
  const table = $('#compareTable');
  const head =
    '<thead><tr><th>Возможности</th>' +
    LEVELS.map((l) =>
      '<th>' + l.name + '<span>' + (l.price === 'Бесплатно' ? 'бесплатно' : l.priceShort + (l.per ? l.per : '')) + '</span></th>'
    ).join('') +
    '</tr></thead>';

  const body =
    '<tbody>' +
    COMPARE_ROWS.map((row) =>
      '<tr><td>' + row[0] + '</td>' + row.slice(1).map(cell).join('') + '</tr>'
    ).join('') +
    '<tr class="compare__price"><td>Стоимость</td>' +
    LEVELS.map((l) => '<td>' + (l.price === 'Бесплатно' ? 'Бесплатно' : l.price + (l.per || '')) + '</td>').join('') +
    '</tr>' +
    '</tbody>';

  table.innerHTML = head + body;
}

// ---- 6. Где я сейчас ----
function renderChoose() {
  const list = $('#chooseList');
  CHOOSE.forEach(([phrase, id, name, color]) => {
    const item = el('button', 'choose__item');
    item.style.setProperty('--pick-color', color);
    item.dataset.target = id;
    item.innerHTML =
      '<span class="choose__phrase">' + phrase + '</span>' +
      '<span class="choose__target">' + name + ' →</span>';
    item.addEventListener('click', () => goToLevel(id === 'cocreation' ? 'cocreation' : id));
    list.appendChild(item);
  });
}

// ---- 8. Стоимость ----
function renderPricing() {
  const grid = $('#pricingGrid');
  LEVELS.forEach((lvl) => {
    const card = el('div', 'price-card reveal');
    card.style.setProperty('--lvl', lvl.color);
    const priceBlock = lvl.price === 'Бесплатно'
      ? '<div class="price-card__price">Бесплатно</div>'
      : '<div class="price-card__price">' + lvl.price + ' <span class="price-card__per">' + lvl.per + '</span></div>';
    const features = lvl.features.slice(0, 5).map((f) => '<li>' + f + '</li>').join('');

    card.innerHTML =
      '<h3 class="price-card__name">' + lvl.name + '</h3>' +
      '<p class="price-card__phrase">' + lvl.phrase + '</p>' +
      priceBlock +
      '<ul class="price-card__list">' + features + '</ul>' +
      '<a href="' + lvl.link + '" class="btn btn--primary" data-cta="pricing-' + lvl.id + '">' + lvl.cta + '</a>';
    grid.appendChild(card);
  });
}

// ---- 9. FAQ ----
function renderFaq() {
  const list = $('#faqList');
  FAQ.forEach(([q, a], i) => {
    const item = el('div', 'faq__item');
    const btnId = 'faq-q-' + i;
    const panelId = 'faq-a-' + i;
    item.innerHTML =
      '<button class="faq__q" id="' + btnId + '" aria-expanded="false" aria-controls="' + panelId + '">' +
        '<span>' + q + '</span><span class="faq__icon">+</span>' +
      '</button>' +
      '<div class="faq__a" id="' + panelId + '" role="region" aria-labelledby="' + btnId + '"><p>' + a + '</p></div>';
    list.appendChild(item);

    const btn = $('.faq__q', item);
    const panel = $('.faq__a', item);
    btn.addEventListener('click', () => {
      const open = item.classList.toggle('is-open');
      btn.setAttribute('aria-expanded', String(open));
      panel.style.maxHeight = open ? panel.scrollHeight + 'px' : '0';
      if (open) track('faq_open', { q: i });
    });
  });
}

// ---- 10. Финальные слова ----
function renderFinalWords() {
  const wrap = $('#finalWords');
  ALL_LEVELS.forEach((lvl) => {
    const w = el('div', 'final__word', lvl.name);
    w.style.setProperty('--word-color', lvl.color);
    wrap.appendChild(w);
  });
}

// ---- Reveal on scroll ----
function initReveal() {
  const items = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    items.forEach((i) => i.classList.add('is-visible'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  items.forEach((i) => io.observe(i));
}

// ---- Финальные слова: последовательное появление ----
function initFinalWords() {
  const words = document.querySelectorAll('.final__word');
  if (!words.length) return;
  if (!('IntersectionObserver' in window)) {
    words.forEach((w) => w.classList.add('is-visible'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        words.forEach((w, i) => setTimeout(() => w.classList.add('is-visible'), i * 550));
        io.disconnect();
      }
    });
  }, { threshold: 0.4 });
  io.observe($('#final'));
}

// ---- Cookie consent ----
function initCookie() {
  const bar = $('#cookie');
  let stored = null;
  try { stored = localStorage.getItem('teora_cookie'); } catch (e) {}
  if (stored) return;
  bar.hidden = false;
  function decide(value) {
    try { localStorage.setItem('teora_cookie', value); } catch (e) {}
    bar.hidden = true;
    track('cookie_consent', { choice: value });
  }
  $('#cookieAccept').addEventListener('click', () => decide('all'));
  $('#cookieDecline').addEventListener('click', () => decide('necessary'));
}

// ---- Год в футере ----
function initYear() {
  const y = $('#year');
  if (y) y.textContent = new Date().getFullYear();
}

// ---- Живой слой звёзд поверх изображения героя ----
function initStars() {
  var hero = document.querySelector('.hero');
  var cv = document.getElementById('stars');
  if (!hero || !cv) return;
  var ctx = cv.getContext('2d');
  if (!ctx) return;
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var W=0,H=0,dpr=Math.min(window.devicePixelRatio||1,2),stars=[];
  var palette=['255,255,255','255,255,255','255,255,255','255,242,230','221,198,236'];
  function build(){
    var count=Math.round(Math.min(360,Math.max(130,(W*H)/5200)));
    stars=[];
    for(var i=0;i<count;i++){
      var y=Math.pow(Math.random(),1.7)*0.82;
      stars.push({x:Math.random(),y:y,r:0.4+Math.random()*1.5,base:0.25+Math.random()*0.75,
        tw:0.4+Math.random()*1.6,ph:Math.random()*6.283,depth:0.25+Math.random()*0.9,
        col:palette[(Math.random()*palette.length)|0]});
    }
  }
  function resize(){
    W=hero.clientWidth;H=hero.clientHeight;
    cv.width=W*dpr;cv.height=H*dpr;cv.style.width=W+'px';cv.style.height=H+'px';
    ctx.setTransform(dpr,0,0,dpr,0,0);build();
  }
  var mx=0,my=0,tx=0,ty=0,mInside=false,mpx=-1,mpy=-1;
  hero.addEventListener('mousemove',function(e){var b=hero.getBoundingClientRect();
    mpx=e.clientX-b.left;mpy=e.clientY-b.top;tx=((mpx/W)-0.5);ty=((mpy/H)-0.5);mInside=true;});
  hero.addEventListener('mouseleave',function(){tx=0;ty=0;mInside=false;mpx=-1;mpy=-1;});
  var t0=performance.now();
  function frame(now){
    var t=(now-t0)/1000;
    mx+=(tx-mx)*0.05;my+=(ty-my)*0.05;
    var amp=28,driftx=Math.sin(t*0.06)*5,drifty=Math.cos(t*0.045)*4;
    ctx.clearRect(0,0,W,H);
    for(var i=0;i<stars.length;i++){
      var s=stars[i];
      var ox=(-mx*amp+driftx)*s.depth,oy=(-my*amp+drifty)*s.depth;
      var sx=s.x*W+ox,sy=s.y*H+oy;
      var a=s.base*(0.55+0.45*Math.sin(t*s.tw+s.ph)),rr=s.r;
      if(mInside){var dx=sx-mpx,dy=sy-mpy,d2=dx*dx+dy*dy,R=200;
        if(d2<R*R){var k=1-Math.sqrt(d2)/R;a=Math.min(1,a+k*0.95);rr=s.r*(1+k*1.6);}}
      var g=ctx.createRadialGradient(sx,sy,0,sx,sy,rr*3.2);
      g.addColorStop(0,'rgba('+s.col+','+a+')');g.addColorStop(1,'rgba('+s.col+',0)');
      ctx.fillStyle=g;ctx.beginPath();ctx.arc(sx,sy,rr*3.2,0,6.283);ctx.fill();
      ctx.fillStyle='rgba('+s.col+','+Math.min(1,a*1.2)+')';
      ctx.beginPath();ctx.arc(sx,sy,rr*0.7,0,6.283);ctx.fill();
    }
    if(!reduce) requestAnimationFrame(frame);
  }
  if(window.ResizeObserver){ new ResizeObserver(resize).observe(hero); }
  window.addEventListener('resize',resize);
  var img=hero.querySelector('.hero__img');
  function start(){ resize(); requestAnimationFrame(frame); }
  if(img && !img.complete){ img.addEventListener('load',start); } else { start(); }
}

// ---- Инициализация ----
function init() {
  renderMap();
  renderLevels();
  renderCompare();
  renderChoose();
  renderPricing();
  renderFaq();
  renderFinalWords();
  initReveal();
  initFinalWords();
  initStars();
  initCookie();
  initYear();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
