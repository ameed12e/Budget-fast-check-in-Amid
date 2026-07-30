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
  ]
};
const RULE_COLORS = ["var(--navy)", "var(--red)", "var(--orange)", "var(--navy-soft)", "var(--ok)", "var(--yellow)"];

/* ---------- explore places ---------- */
const PLACES = [
  { x:30,   y:20,   grad:["#2e7d32","#a9db55"], motif:"garden",
    name:{he:"חיפה",en:"Haifa"}, blurb:{he:"מדרגות גנים ירוקות היורדות אל הים.",en:"Terraced gardens cascading down to the sea."} },
  { x:69.5, y:30,   grad:["#1b6ca8","#8fd0c3"], motif:"water",
    name:{he:"הכנרת",en:"Sea of Galilee"}, blurb:{he:"אגם מתוק שקט בצפון, מוקף גבעות ירוקות.",en:"A calm freshwater lake ringed by green hills."} },
  { x:26.5, y:33,   grad:["#12a5c4","#ffd36b"], motif:"beach",
    name:{he:"תל אביב",en:"Tel Aviv"}, blurb:{he:"חופים, בתי קפה ובאוהאוס לבן לאורך הים.",en:"Beaches, cafés and white Bauhaus by the sea."} },
  { x:50,   y:46,   grad:["#c8974b","#f4e4b6"], motif:"dome",
    name:{he:"ירושלים",en:"Jerusalem"}, blurb:{he:"העיר העתיקה, בנויה אבן ירושלמית זהובה.",en:"The Old City, built of golden Jerusalem stone."} },
  { x:75.5, y:70,   grad:["#6f93b6","#e9e3cf"], motif:"salt",
    name:{he:"ים המלח",en:"Dead Sea"}, blurb:{he:"הנקודה הנמוכה בעולם — צפים בקלות על המים.",en:"Earth's lowest point — float effortlessly."} },
  { x:73,   y:77.5, grad:["#b5642f","#f2b96f"], motif:"mountain",
    name:{he:"מצדה",en:"Masada"}, blurb:{he:"מבצר מדברי עתיק על צוק מעל ים המלח.",en:"An ancient desert fortress on a cliff."} },
  { x:53,   y:96,   grad:["#0090ad","#00d6b0"], motif:"coral",
    name:{he:"אילת",en:"Eilat"}, blurb:{he:"ים אדום, שוניות אלמוגים ודגים צבעוניים.",en:"Red Sea coral reefs and colourful fish."} }
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
        fCity: "עיר",
        fCountry: "מדינה",
        grpAddress: "כתובת מגורים",
        grpContact: "יצירת קשר",
        fPhone: "טלפון",
        fEmail: "אימייל",

        revTag: "כמעט סיימנו",
        revTitle: "בדקו את הפרטים",
        revSub: "ודאו שהכול נכון.",

        doneTag: "הצ'ק‑אין הושלם",
        doneTitle: "אתם מוכנים",
        doneSub: "הציגו את המספר לנציג.",
        codeLbl: "מספר אישור",

        expTag: "רעיונות לטיול",
        expTitle: "בזמן שאתם ממתינים",
        expSub: "הקישו על נקודה כדי לגלות אותה."
    },

    en: {
        demoPill: "Demo preview · Not connected to live system",
        step1: "Booking",
        step2: "Rules",
        step3: "Details",
        step4: "Review",

        scanTag: "Scanned successfully",
        entryTitle: "Your booking is loaded",
        entrySub: "Complete check‑in on your phone before arriving.",
        scanFrom: "From your booking confirmation",

        bkVehicle: "Vehicle",
        bkLoc: "Location",
        bkLocal: "Ben Gurion (TLV)",
        bkPick: "Pick‑up",
        bkDrop: "Return",

        rulesTag: "Important",
        rulesTitle: "Before continuing",
        rulesSub: "Six things that help your contract open faster.",
        ackHint: "Tap each rule to confirm you read it",

        formTag: "Customer details",
        formTitle: "Your details",
        fFirst: "First name",
        fLast: "Last name",
        fld: "Passport number",
        fDob: "Date of birth",
        fPassCountry: "Passport country",
        fStreet: "Street",
        fCity: "City",
        fCountry: "Country",
        grpAddress: "Address",
        grpContact: "Contact",
        fPhone: "Phone",
        fEmail: "Email",

        revTag: "Almost done",
        revTitle: "Review your details",
        revSub: "Make sure everything is correct.",

        doneTag: "Check‑in complete",
        doneTitle: "You're ready",
        doneSub: "Show this number to the representative.",
        codeLbl: "Confirmation number",

        expTag: "Explore Israel",
        expTitle: "While you wait",
        expSub: "Tap a point to discover it."
    }
};

/* ============================
   MAP PINS
============================ */

const pins = [
    { name: "תל אביב", x: 135, y: 95, img: "tlv.png", desc: "עיר החוף המרכזית של ישראל." },
    { name: "ירושלים", x: 150, y: 110, img: "jerusalem.png", desc: "העיר העתיקה והקדושה." },
    { name: "חיפה", x: 130, y: 70, img: "haifa.png", desc: "עיר נמל עם נופים מרהיבים." },
    { name: "אילת", x: 150, y: 200, img: "eilat.png", desc: "עיר נופש בדרום עם ים צלול." }
];

function renderPins() {
    const box = document.getElementById("pins");
    box.innerHTML = "";

    pins.forEach(p => {
        const btn = document.createElement("button");
        btn.className = "pin";
        btn.style.left = p.x + "px";
        btn.style.top = p.y + "px";
        btn.innerHTML = `
            <div class="dot"></div>
            <div class="plbl">${p.name}</div>
        `;
        btn.onclick = () => showPostcard(p);
        box.appendChild(btn);
    });
}

function showPostcard(p) {
    const box = document.getElementById("postcard");
    box.innerHTML = `
        <div class="postcard">
            <div class="pc-scene">
                <img src="${p.img}" style="width:100%; height:100%; object-fit:cover;">
            </div>
            <div class="pc-body">
                <div class="pc-name">${p.name}</div>
                <div class="pc-blurb">${p.desc}</div>
            </div>
        </div>
    `;
}

/* ============================
   LANGUAGE SWITCHING
============================ */

let currentLang = "he";

function setLang(lang) {
    currentLang = lang;

    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (T[lang][key]) el.textContent = T[lang][key];
    });

    document.querySelectorAll(".lang button").forEach(btn => btn.classList.remove("on"));
    document.getElementById("lang-" + lang).classList.add("on");
}

/* ============================
   SCREEN NAVIGATION
============================ */

let step = 1;

function showScreen(n) {
    step = n;

    document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
    document.getElementById("s-" + ["entry","rules","form","review","done","explore"][n-1]).classList.add("active");

    document.querySelectorAll(".st").forEach(st => {
        const num = parseInt(st.dataset.step);
        st.classList.remove("active","done");
        if (num < n) st.classList.add("done");
        if (num === n) st.classList.add("active");
    });
}

document.getElementById("cta").onclick = () => {
    if (step === 1) showScreen(2);
    else if (step === 2) {
        if (ackCount < 6) return;
        showScreen(3);
    }
    else if (step === 3) {
        fillReview();
        showScreen(4);
    }
    else if (step === 4) {
        generateCode();
        showScreen(5);
    }
};

/* ============================
   RULES SYSTEM
============================ */

const rules = [
    "יש להביא דרכון ורישיון נהיגה.",
    "לקוחות מארה״ב צריכים מכתב מחברת האשראי.",
    "אזרחי ישראל משלמים מע״מ.",
    "הזמנות באתר לא‑ישראלי לרוב אינן כוללות מע״מ.",
    "הנציג יעדכן על כל שינוי במחיר.",
    "ההזמנה מבטיחה קבוצת רכב, לא דגם."
];

let ackCount = 0;

function renderRules() {
    const box = document.getElementById("rules-list");
    box.innerHTML = "";

    rules.forEach((txt, i) => {
        const btn = document.createElement("button");
        btn.className = "rule";
        btn.innerHTML = `
            <div class="ic" style="background: var(--navy-soft)">${i+1}</div>
            <div class="tx">${txt}</div>
            <div class="chk"></div>
        `;
        btn.onclick = () => {
            if (!btn.classList.contains("read")) {
                btn.classList.add("read");
                ackCount++;
                document.getElementById("ackcount").textContent = ackCount + "/6";
            }
        };
        box.appendChild(btn);
    });
}

renderRules();

/* ============================
   REVIEW SCREEN
============================ */

function fillReview() {
    const data = {
        name: document.getElementById("firstName").value + " " + document.getElementById("lastName").value,
        passport: document.getElementById("passport").value,
        dob: document.getElementById("dob").value,
        passCountry: document.getElementById("passCountry").value,
        street: document.getElementById("street").value,
        city: document.getElementById("city").value,
        country: document.getElementById("country").value,
        phone: document.getElementById("phone").value,
        email: document.getElementById("email").value
    };

    const box = document.getElementById("reviewBox");
    box.innerHTML = `
        <div class="r"><span>${T[currentLang].fFirst}</span><span>${data.name}</span></div>
        <div class="r"><span>${T[currentLang].fld}</span><span>${data.passport}</span></div>
        <div class="r"><span>${T[currentLang].fDob}</span><span>${data.dob}</span></div>
        <div class="r"><span>${T[currentLang].fPassCountry}</span><span>${data.passCountry}</span></div>
        <div class="r"><span>${T[currentLang].grpAddress}</span><span>${data.street}, ${data.city}, ${data.country}</span></div>
        <div class="r"><span>${T[currentLang].fPhone}</span><span>${data.phone}</span></div>
        <div class="r"><span>${T[currentLang].fEmail}</span><span>${data.email}</span></div>
    `;
}

/* ============================
   CONFIRMATION CODE
============================ */

function generateCode() {
    const code = "BGN-" + Math.floor(1000 + Math.random() * 9000);
    document.getElementById("code").textContent = code;
}

/* ============================
   INITIALIZE
============================ */

setLang("he");
showScreen(1);
renderPins();        fLast: "שם משפחה",
        fld: "מספר דרכון",
        fDob: "תאריך לידה",
        fPassCountry: "מדינת הדרכון",
        fStreet: "רחוב ומספר",
        fCity: "עיר",
        fCountry: "מדינה",
        grpAddress: "כתובת מגורים",
        grpContact: "יצירת קשר",
        fPhone: "טלפון",
        fEmail: "אימייל",

        revTag: "כמעט סיימנו",
        revTitle: "בדקו את הפרטים",
        revSub: "ודאו שהכול נכון.",

        doneTag: "הצ'ק‑אין הושלם",
        doneTitle: "אתם מוכנים",
        doneSub: "הציגו את המספר לנציג.",
        codeLbl: "מספר אישור",

        expTag: "רעיונות לטיול",
        expTitle: "בזמן שאתם ממתינים",
        expSub: "הקישו על נקודה כדי לגלות אותה."
    },

    en: {
        demoPill: "Demo preview · Not connected to live system",
        step1: "Booking",
        step2: "Rules",
        step3: "Details",
        step4: "Review",

        scanTag: "Scanned successfully",
        entryTitle: "Your booking is loaded",
        entrySub: "Complete check‑in on your phone before arriving.",
        scanFrom: "From your booking confirmation",

        bkVehicle: "Vehicle",
        bkLoc: "Location",
        bkLocal: "Ben Gurion (TLV)",
        bkPick: "Pick‑up",
        bkDrop: "Return",

        rulesTag: "Important",
        rulesTitle: "Before continuing",
        rulesSub: "Six things that help your contract open faster.",
        ackHint: "Tap each rule to confirm you read it",

        formTag: "Customer details",
        formTitle: "Your details",
        fFirst: "First name",
        fLast: "Last name",
        fld: "Passport number",
        fDob: "Date of birth",
        fPassCountry: "Passport country",
        fStreet: "Street",
        fCity: "City",
        fCountry: "Country",
        grpAddress: "Address",
        grpContact: "Contact",
        fPhone: "Phone",
        fEmail: "Email",

        revTag: "Almost done",
        revTitle: "Review your details",
        revSub: "Make sure everything is correct.",

        doneTag: "Check‑in complete",
        doneTitle: "You're ready",
        doneSub: "Show this number to the representative.",
        codeLbl: "Confirmation number",

        expTag: "Explore Israel",
        expTitle: "While you wait",
        expSub: "Tap a point to discover it."
    }
};

/* ============================
   LANGUAGE SWITCHING
============================ */

let currentLang = "he";

function setLang(lang) {
    currentLang = lang;

    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (T[lang][key]) el.textContent = T[lang][key];
    });

    document.querySelectorAll(".lang button").forEach(btn => btn.classList.remove("on"));
    document.getElementById("lang-" + lang).classList.add("on");
}

/* ============================
   SCREEN NAVIGATION
============================ */

let step = 1;

function showScreen(n) {
    step = n;

    document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
    document.getElementById("s-" + ["entry","rules","form","review","done","explore"][n-1]).classList.add("active");

    document.querySelectorAll(".st").forEach(st => {
        const num = parseInt(st.dataset.step);
        st.classList.remove("active","done");
        if (num < n) st.classList.add("done");
        if (num === n) st.classList.add("active");
    });
}

document.getElementById("cta").onclick = () => {
    if (step === 1) showScreen(2);
    else if (step === 2) {
        if (ackCount < 6) return;
        showScreen(3);
    }
    else if (step === 3) {
        fillReview();
        showScreen(4);
    }
    else if (step === 4) {
        generateCode();
        showScreen(5);
    }
};

/* ============================
   RULES SYSTEM
============================ */

const rules = [
    "יש להביא דרכון ורישיון נהיגה.",
    "לקוחות מארה״ב צריכים מכתב מחברת האשראי.",
    "אזרחי ישראל משלמים מע״מ.",
    "הזמנות באתר לא‑ישראלי לרוב אינן כוללות מע״מ.",
    "הנציג יעדכן על כל שינוי במחיר.",
    "ההזמנה מבטיחה קבוצת רכב, לא דגם."
];

let ackCount = 0;

function renderRules() {
    const box = document.getElementById("rules-list");
    box.innerHTML = "";

    rules.forEach((txt, i) => {
        const btn = document.createElement("button");
        btn.className = "rule";
        btn.innerHTML = `
            <div class="ic" style="background: var(--navy-soft)">${i+1}</div>
            <div class="tx">${txt}</div>
            <div class="chk"></div>
        `;
        btn.onclick = () => {
            if (!btn.classList.contains("read")) {
                btn.classList.add("read");
                ackCount++;
                document.getElementById("ackcount").textContent = ackCount + "/6";
            }
        };
        box.appendChild(btn);
    });
}

renderRules();

/* ============================
   REVIEW SCREEN
============================ */

function fillReview() {
    const data = {
        name: document.getElementById("firstName").value + " " + document.getElementById("lastName").value,
        passport: document.getElementById("passport").value,
        dob: document.getElementById("dob").value,
        passCountry: document.getElementById("passCountry").value,
        street: document.getElementById("street").value,
        city: document.getElementById("city").value,
        country: document.getElementById("country").value,
        phone: document.getElementById("phone").value,
        email: document.getElementById("email").value
    };

    const box = document.getElementById("reviewBox");
    box.innerHTML = `
        <div class="r"><span>${T[currentLang].fFirst}</span><span>${data.name}</span></div>
        <div class="r"><span>${T[currentLang].fld}</span><span>${data.passport}</span></div>
        <div class="r"><span>${T[currentLang].fDob}</span><span>${data.dob}</span></div>
        <div class="r"><span>${T[currentLang].fPassCountry}</span><span>${data.passCountry}</span></div>
        <div class="r"><span>${T[currentLang].grpAddress}</span><span>${data.street}, ${data.city}, ${data.country}</span></div>
        <div class="r"><span>${T[currentLang].fPhone}</span><span>${data.phone}</span></div>
        <div class="r"><span>${T[currentLang].fEmail}</span><span>${data.email}</span></div>
    `;
}

/* ============================
   CONFIRMATION CODE
============================ */

function generateCode() {
    const code = "BGN-" + Math.floor(1000 + Math.random() * 9000);
    document.getElementById("code").textContent = code;
}

/* ============================
   INITIALIZE
============================ */

setLang("he");
showScreen(1);
renderPins();
<script src="app.js"></script>
