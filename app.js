/* ============================================================
   Budget Fast Check-in — demo logic
   ============================================================ */

/* ---------- i18n ---------- */
const T = {
  he: {
    demoPill: "תצוגת הדגמה · לא מחובר למערכת אמיתית",
    step1: "הזמנה", step2: "כללים", step3: "פרטים", step4: "אישור",
    scanTag: "נסרק בהצלחה",
    entryTitle: "ההזמנה שלך נטענה",
    entrySub: "השלימו צ'ק-אין בטלפון עוד לפני שתגיעו לדלפק.",
    scanFrom: "מתוך אישור ההזמנה שלך",
    bkVehicle: "רכב", bkLoc: "מיקום", bkLocal: "נתב״ג (TLV)", bkPick: "איסוף", bkDrop: "החזרה",
    rulesTag: "חשוב לדעת",
    rulesTitle: "לפני שממשיכים",
    rulesSub: "שישה דברים שיעזרו לחוזה שלך להיפתח מהר בדלפק.",
    ackHint: "הקישו על כל כלל כדי לאשר שקראתם אותו",
    formTag: "פרטי הלקוח",
    formTitle: "הפרטים שלך",
    formHint: "מלאו באנגלית בלבד, באותיות גדולות (CAPITAL) — כך הנציג יטפל בכם מהר.",
    fFirst: "שם פרטי", fLast: "שם משפחה", fld: "מספר דרכון", fDob: "תאריך לידה",
    fPassCountry: "מדינת הדרכון", fStreet: "רחוב ומספר", fCity: "עיר", fCountry: "מדינה",
    grpAddress: "כתובת מגורים", grpContact: "יצירת קשר", fPhone: "טלפון", fEmail: "אימייל",
    revTag: "כמעט סיימנו", revTitle: "בדקו את הפרטים", revSub: "ודאו שהכול נכון.",
    doneTag: "הצ'ק-אין הושלם", doneTitle: "אתם מוכנים", doneSub: "הציגו את המספר לנציג.",
    codeLbl: "מספר אישור",
    expTag: "רעיונות לטיול", expTitle: "בזמן שאתם ממתינים", expSub: "הקישו על נקודה כדי לגלות אותה.",
    expOpen: "בזמן ההמתנה — גלו את ישראל", expBack: "חזרה לאישור",
    expNote: "בהדגמה: איורים. במערכת האמיתית — תמונות אמיתיות מאושרות.",
    restart: "הרצת ההדגמה מחדש",
    ctaStart: "התחלת צ'ק-אין", ctaContinue: "המשך", ctaReview: "סקירה", ctaSend: "שליחה ל-Budget"
  },
  en: {
    demoPill: "Demo preview · Not connected to a live system",
    step1: "Booking", step2: "Rules", step3: "Details", step4: "Review",
    scanTag: "Scanned successfully",
    entryTitle: "Your booking is loaded",
    entrySub: "Complete check-in on your phone before you reach the counter.",
    scanFrom: "From your booking confirmation",
    bkVehicle: "Vehicle", bkLoc: "Location", bkLocal: "Ben Gurion (TLV)", bkPick: "Pick-up", bkDrop: "Return",
    rulesTag: "Important",
    rulesTitle: "Before you continue",
    rulesSub: "Six things that help your contract open faster at the counter.",
    ackHint: "Tap each rule to confirm you've read it",
    formTag: "Customer details",
    formTitle: "Your details",
    formHint: "Fill in English only, using CAPITAL letters — so the agent can serve you fast.",
    fFirst: "First name", fLast: "Last name", fld: "Passport number", fDob: "Date of birth",
    fPassCountry: "Passport country", fStreet: "Street", fCity: "City", fCountry: "Country",
    grpAddress: "Home address", grpContact: "Contact", fPhone: "Phone", fEmail: "Email",
    revTag: "Almost done", revTitle: "Review your details", revSub: "Make sure everything is correct.",
    doneTag: "Check-in complete", doneTitle: "You're ready", doneSub: "Show this number to the agent.",
    codeLbl: "Confirmation number",
    expTag: "Trip ideas", expTitle: "While you wait", expSub: "Tap a point to discover it.",
    expOpen: "While you wait — explore Israel", expBack: "Back to confirmation",
    expNote: "Demo: illustrations. In the live app — real approved photos.",
    restart: "Run the demo again",
    ctaStart: "Start check-in", ctaContinue: "Continue", ctaReview: "Review", ctaSend: "Send to Budget"
  },
  ru: {
    demoPill: "Демо-версия · не подключено к реальной системе",
    step1: "Бронь", step2: "Правила", step3: "Данные", step4: "Проверка",
    scanTag: "Успешно отсканировано",
    entryTitle: "Ваше бронирование загружено",
    entrySub: "Пройдите регистрацию в телефоне до стойки.",
    scanFrom: "Из подтверждения бронирования",
    bkVehicle: "Автомобиль", bkLoc: "Локация", bkLocal: "Бен-Гурион (TLV)", bkPick: "Получение", bkDrop: "Возврат",
    rulesTag: "Важно знать",
    rulesTitle: "Перед продолжением",
    rulesSub: "Шесть пунктов, чтобы договор оформился быстрее на стойке.",
    ackHint: "Нажмите на каждое правило, чтобы подтвердить прочтение",
    formTag: "Данные клиента",
    formTitle: "Ваши данные",
    formHint: "Заполняйте только на английском, ЗАГЛАВНЫМИ буквами — так агент обслужит вас быстро.",
    fFirst: "Имя", fLast: "Фамилия", fld: "Номер паспорта", fDob: "Дата рождения",
    fPassCountry: "Страна паспорта", fStreet: "Улица и дом", fCity: "Город", fCountry: "Страна",
    grpAddress: "Домашний адрес", grpContact: "Контакты", fPhone: "Телефон", fEmail: "Эл. почта",
    revTag: "Почти готово", revTitle: "Проверьте данные", revSub: "Убедитесь, что всё верно.",
    doneTag: "Регистрация завершена", doneTitle: "Всё готово", doneSub: "Покажите этот номер агенту.",
    codeLbl: "Номер подтверждения",
    expTag: "Идеи для поездки", expTitle: "Пока вы ждёте", expSub: "Нажмите на точку, чтобы узнать больше.",
    expOpen: "Пока вы ждёте — откройте Израиль", expBack: "Назад к подтверждению",
    expNote: "В демо — иллюстрации. В реальном приложении — настоящие фото.",
    restart: "Запустить демо снова",
    ctaStart: "Начать регистрацию", ctaContinue: "Продолжить", ctaReview: "Проверить", ctaSend: "Отправить в Budget"
  },
  fr: {
    demoPill: "Aperçu démo · non connecté à un vrai système",
    step1: "Réservation", step2: "Règles", step3: "Vos infos", step4: "Confirmer",
    scanTag: "Scanné avec succès",
    entryTitle: "Votre réservation est chargée",
    entrySub: "Terminez l'enregistrement sur votre téléphone avant le comptoir.",
    scanFrom: "Depuis votre confirmation de réservation",
    bkVehicle: "Véhicule", bkLoc: "Lieu", bkLocal: "Ben Gourion (TLV)", bkPick: "Prise", bkDrop: "Retour",
    rulesTag: "Bon à savoir",
    rulesTitle: "Avant de continuer",
    rulesSub: "Six points pour que votre contrat s'ouvre plus vite au comptoir.",
    ackHint: "Touchez chaque règle pour confirmer que vous l'avez lue",
    formTag: "Coordonnées du client",
    formTitle: "Vos informations",
    formHint: "Remplissez en anglais uniquement, en MAJUSCULES — pour un service rapide.",
    fFirst: "Prénom", fLast: "Nom", fld: "Numéro de passeport", fDob: "Date de naissance",
    fPassCountry: "Pays du passeport", fStreet: "Rue", fCity: "Ville", fCountry: "Pays",
    grpAddress: "Adresse", grpContact: "Contact", fPhone: "Téléphone", fEmail: "E-mail",
    revTag: "Presque terminé", revTitle: "Vérifiez vos infos", revSub: "Assurez-vous que tout est correct.",
    doneTag: "Enregistrement terminé", doneTitle: "Tout est prêt", doneSub: "Montrez ce numéro à l'agent.",
    codeLbl: "Numéro de confirmation",
    expTag: "Idées de voyage", expTitle: "En attendant", expSub: "Touchez un lieu pour le découvrir.",
    expOpen: "En attendant — découvrez Israël", expBack: "Retour à la confirmation",
    expNote: "Démo : illustrations. Dans l'app réelle — vraies photos validées.",
    restart: "Relancer la démo",
    ctaStart: "Commencer l'enregistrement", ctaContinue: "Continuer", ctaReview: "Vérifier", ctaSend: "Envoyer à Budget"
  }
};

/* ---------- rules (localized) ---------- */
const RULES = {
  he: [
    "יש להביא דרכון, רישיון נהיגה וטופס ביקורת גבולות.",
    "לקוחות מארה״ב שמוותרים על ביטוח דרך כרטיס אשראי צריכים מכתב מחברת האשראי.",
    "אזרחי ישראל משלמים מע״מ, גם אם הם גרים בחו״ל.",
    "הזמנות באתר Budget לא-ישראלי לרוב אינן כוללות מע״מ.",
    "הנציג בודק את ההזמנה ומעדכן על כל שינוי במחיר.",
    "ההזמנה מבטיחה קבוצת רכב (קטגוריה), לא דגם מסוים."
  ],
  en: [
    "Bring your passport, driver's license and border-control slip.",
    "US customers waiving insurance via credit card need a letter from the card issuer.",
    "Israeli citizens pay VAT, even if they live abroad.",
    "Bookings on a non-Israeli Budget site usually don't include VAT.",
    "The agent reviews your booking and tells you about any price change.",
    "The booking guarantees a vehicle category (group), not a specific model."
  ],
  ru: [
    "Возьмите паспорт, водительские права и погранконтрольный талон.",
    "Клиентам из США, отказывающимся от страховки через кредитную карту, нужно письмо от банка.",
    "Граждане Израиля платят НДС, даже если живут за границей.",
    "Бронирования на не-израильском сайте Budget обычно не включают НДС.",
    "Агент проверяет бронирование и сообщает о любом изменении цены.",
    "Бронирование гарантирует категорию автомобиля (группу), а не конкретную модель."
  ],
  fr: [
    "Apportez votre passeport, votre permis et le formulaire de contrôle des frontières.",
    "Les clients américains renonçant à l'assurance via carte de crédit ont besoin d'une lettre de l'émetteur.",
    "Les citoyens israéliens paient la TVA, même s'ils vivent à l'étranger.",
    "Les réservations sur un site Budget non israélien n'incluent généralement pas la TVA.",
    "L'agent vérifie votre réservation et vous informe de tout changement de prix.",
    "La réservation garantit une catégorie de véhicule (groupe), pas un modèle précis."
  ]
};
const RULE_COLORS = ["var(--navy)", "var(--red)", "var(--orange)", "var(--navy-soft)", "var(--ok)", "var(--yellow)"];

/* ---------- explore places ---------- */
const PLACES = [
  { x:30,   y:20,   grad:["#2e7d32","#a9db55"], motif:"garden",
    name:{he:"חיפה",en:"Haifa",ru:"Хайфа",fr:"Haïfa"},
    blurb:{he:"מדרגות גנים ירוקות היורדות אל הים.",en:"Terraced gardens cascading down to the sea.",ru:"Террасные сады, спускающиеся к морю.",fr:"Jardins en terrasses descendant vers la mer."} },
  { x:69.5, y:30,   grad:["#1b6ca8","#8fd0c3"], motif:"water",
    name:{he:"הכנרת",en:"Sea of Galilee",ru:"Галилейское море",fr:"Lac de Tibériade"},
    blurb:{he:"אגם מתוק שקט בצפון, מוקף גבעות ירוקות.",en:"A calm freshwater lake ringed by green hills.",ru:"Спокойное пресноводное озеро среди зелёных холмов.",fr:"Un lac paisible entouré de collines verdoyantes."} },
  { x:26.5, y:33,   grad:["#12a5c4","#ffd36b"], motif:"beach",
    name:{he:"תל אביב",en:"Tel Aviv",ru:"Тель-Авив",fr:"Tel-Aviv"},
    blurb:{he:"חופים, בתי קפה ובאוהאוס לבן לאורך הים.",en:"Beaches, cafés and white Bauhaus by the sea.",ru:"Пляжи, кафе и белый Баухаус у моря.",fr:"Plages, cafés et Bauhaus blanc au bord de mer."} },
  { x:50,   y:46,   grad:["#c8974b","#f4e4b6"], motif:"dome",
    name:{he:"ירושלים",en:"Jerusalem",ru:"Иерусалим",fr:"Jérusalem"},
    blurb:{he:"העיר העתיקה, בנויה אבן ירושלמית זהובה.",en:"The Old City, built of golden Jerusalem stone.",ru:"Старый город из золотистого камня.",fr:"La vieille ville en pierre dorée."} },
  { x:75.5, y:70,   grad:["#6f93b6","#e9e3cf"], motif:"salt",
    name:{he:"ים המלח",en:"Dead Sea",ru:"Мёртвое море",fr:"Mer Morte"},
    blurb:{he:"הנקודה הנמוכה בעולם — צפים בקלות על המים.",en:"Earth's lowest point — float effortlessly.",ru:"Самая низкая точка Земли — легко лежать на воде.",fr:"Le point le plus bas de la Terre — on y flotte."} },
  { x:73,   y:77.5, grad:["#b5642f","#f2b96f"], motif:"mountain",
    name:{he:"מצדה",en:"Masada",ru:"Масада",fr:"Massada"},
    blurb:{he:"מבצר מדברי עתיק על צוק מעל ים המלח.",en:"An ancient desert fortress on a cliff.",ru:"Древняя пустынная крепость на скале.",fr:"Ancienne forteresse du désert sur une falaise."} },
  { x:53,   y:96,   grad:["#0090ad","#00d6b0"], motif:"coral",
    name:{he:"אילת",en:"Eilat",ru:"Эйлат",fr:"Eilat"},
    blurb:{he:"ים אדום, שוניות אלמוגים ודגים צבעוניים.",en:"Red Sea coral reefs and colourful fish.",ru:"Коралловые рифы и разноцветные рыбы.",fr:"Récifs coralliens et poissons colorés."} }
];

function motifSVG(m){
  const s='stroke="#fff" stroke-width="2.4" fill="none" stroke-linecap="round" stroke-linejoin="round"';
  const scenes={
    water:`<circle cx="78" cy="15" r="7" fill="#fff" opacity=".9"/><path ${s} d="M8 26c6-5 12-5 18 0s12 5 18 0 12-5 18 0 12 5 18 0"/><path ${s} d="M8 37c6-5 12-5 18 0s12 5 18 0 12-5 18 0 12 5 18 0"/>`,
    garden:`<path ${s} d="M22 12h56M28 22h44M34 32h32M40 42h20M46 52h8"/><circle cx="50" cy="8" r="3" fill="#fff"/>`,
    beach:`<circle cx="20" cy="18" r="8" fill="#fff" opacity=".95"/><path ${s} d="M72 12v20M72 16c-6-2-12 0-14 4 5 2 11 1 14-4zM72 16c6-2 12 0 14 4-5 2-11 1-14-4z"/><path ${s} d="M6 44c6-4 12-4 18 0s12 4 18 0 12-4 18 0 12 4 18 0"/>`,
    dome:`<path ${s} d="M18 52h64"/><path ${s} d="M34 52V32a16 16 0 0 1 32 0v20"/><path ${s} d="M50 12v8"/><path ${s} d="M24 52v-8M76 52v-8"/>`,
    salt:`<path d="M74 20a10 10 0 0 1-20 0" fill="#fff" opacity=".9"/><path ${s} d="M8 34c6-3 12-3 18 0s12 3 18 0 12-3 18 0 12 3 18 0"/><path ${s} d="M8 44c6-3 12-3 18 0s12 3 18 0 12-3 18 0 12 3 18 0"/>`,
    mountain:`<path ${s} d="M10 52h80"/><path ${s} d="M26 52l10-26h20l10 26"/><path ${s} d="M36 26h20"/><circle cx="76" cy="14" r="6" fill="#fff" opacity=".9"/>`,
    coral:`<path ${s} d="M36 30c8-9 24-9 30 0-6 9-22 9-30 0z"/><path d="M66 30l11-7v14z" fill="#fff"/><path ${s} d="M16 52c0-8 4-10 4-16M24 52c0-6 3-8 3-12"/>`
  };
  return `<svg viewBox="0 0 100 60" preserveAspectRatio="xMidYMid slice">${scenes[m]||""}</svg>`;
}

/* ---------- state ---------- */
let currentLang = "he";
let step = 1;                        // 1 entry, 2 rules, 3 form, 4 review, 5 done, 6 explore
const SCREENS = ["entry","rules","form","review","done","explore"];
const readSet = new Set();
let currentPlace = 0;

/* ---------- language ---------- */
function setLang(lang){
  currentLang = lang;
  document.documentElement.lang = lang;
  document.documentElement.dir = (lang === "he") ? "rtl" : "ltr";
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (T[lang][key] !== undefined) el.textContent = T[lang][key];
  });
  document.querySelectorAll(".lang button").forEach(b => b.classList.remove("on"));
  document.getElementById("lang-" + lang).classList.add("on");
  renderRules();
  updateCTA();
  refreshExplore();
}

/* ---------- navigation ---------- */
function showScreen(n){
  step = n;
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById("s-" + SCREENS[n-1]).classList.add("active");
  document.querySelectorAll(".st").forEach(st => {
    const num = parseInt(st.dataset.step, 10);
    st.classList.remove("active","done");
    if (num < Math.min(n,5)) st.classList.add("done");
    if (num === n) st.classList.add("active");
  });
  document.querySelector(".screenwrap").scrollTop = 0;
  updateCTA();
}

function updateCTA(){
  const cta = document.getElementById("cta");
  const action = document.getElementById("action");
  // footer hidden on done + explore
  if (step >= 5){ action.style.display = "none"; return; }
  action.style.display = "block";
  const labels = {1:"ctaStart", 2:"ctaContinue", 3:"ctaReview", 4:"ctaSend"};
  cta.textContent = T[currentLang][labels[step]];
  cta.disabled = (step === 2 && readSet.size < RULES[currentLang].length);
}

/* ---------- rules ---------- */
function renderRules(){
  const box = document.getElementById("rules-list");
  box.innerHTML = "";
  RULES[currentLang].forEach((txt, i) => {
    const btn = document.createElement("button");
    btn.className = "rule" + (readSet.has(i) ? " read" : "");
    btn.innerHTML = `<div class="ic" style="background:${RULE_COLORS[i]}">${i+1}</div>
                     <div class="tx">${txt}</div><div class="chk"></div>`;
    btn.onclick = () => {
      if (readSet.has(i)) { readSet.delete(i); btn.classList.remove("read"); }
      else { readSet.add(i); btn.classList.add("read"); }
      const c = document.getElementById("ackcount");
      c.textContent = readSet.size + "/" + RULES[currentLang].length;
      c.classList.toggle("full", readSet.size === RULES[currentLang].length);
      updateCTA();
    };
    box.appendChild(btn);
  });
  const c = document.getElementById("ackcount");
  c.textContent = readSet.size + "/" + RULES[currentLang].length;
  c.classList.toggle("full", readSet.size === RULES[currentLang].length);
}

/* ---------- review ---------- */
function val(id){ return document.getElementById(id).value; }
function fillReview(){
  const L = T[currentLang];
  document.getElementById("reviewBox").innerHTML = `
    <div class="r"><span>${L.fFirst}</span><span>${val("firstName")} ${val("lastName")}</span></div>
    <div class="r"><span>${L.fld}</span><span>${val("passport")}</span></div>
    <div class="r"><span>${L.fDob}</span><span>${val("dob")}</span></div>
    <div class="r"><span>${L.fPassCountry}</span><span>${val("passCountry")}</span></div>
    <div class="r"><span>${L.grpAddress}</span><span>${val("street")}, ${val("city")}, ${val("country")}</span></div>
    <div class="r"><span>${L.fPhone}</span><span>${val("phone")}</span></div>
    <div class="r"><span>${L.fEmail}</span><span>${val("email")}</span></div>`;
}

function generateCode(){
  document.getElementById("code").textContent = "BGN-" + Math.floor(1000 + Math.random() * 9000);
}

/* ---------- explore ---------- */
function renderPins(){
  const wrap = document.getElementById("pins");
  wrap.innerHTML = PLACES.map((p,i) => {
    const flip = p.x >= 50 ? " flip" : "";
    return `<button class="pin${i===currentPlace?" on":""}${flip}" style="left:${p.x}%;top:${p.y}%" onclick="selectPlace(${i})">
      <span class="pdot"></span><span class="plbl">${p.name[currentLang]}</span></button>`;
  }).join("");
}
function renderPostcard(){
  const p = PLACES[currentPlace];
  document.getElementById("postcard").innerHTML =
    `<div class="pc-scene" style="background:linear-gradient(135deg,${p.grad[0]},${p.grad[1]})">${motifSVG(p.motif)}
       <span class="pc-tag">${T[currentLang].expTag}</span></div>
     <div class="pc-body"><div class="pc-name">${p.name[currentLang]}</div>
       <div class="pc-blurb">${p.blurb[currentLang]}</div></div>`;
}
function selectPlace(i){
  currentPlace = i;
  document.querySelectorAll(".pin").forEach((el,k) => el.classList.toggle("on", k === i));
  renderPostcard();
}
function refreshExplore(){
  if (document.getElementById("s-explore").classList.contains("active")) { renderPins(); renderPostcard(); }
}
function showExplore(){ renderPins(); renderPostcard(); showScreen(6); }
function backToDone(){ showScreen(5); }

/* ---------- restart ---------- */
function restart(){
  readSet.clear();
  showScreen(1);
}

/* ---------- wire up ---------- */
document.getElementById("cta").onclick = () => {
  if (step === 1) showScreen(2);
  else if (step === 2) { if (readSet.size < RULES[currentLang].length) return; showScreen(3); }
  else if (step === 3) { fillReview(); showScreen(4); }
  else if (step === 4) { generateCode(); showScreen(5); }
};
document.getElementById("exploreBtn").onclick = showExplore;
document.getElementById("restartBtn").onclick = restart;
document.getElementById("backBtn").onclick = backToDone;

/* ---------- init ---------- */
setLang("he");
showScreen(1);
