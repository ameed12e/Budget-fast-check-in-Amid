/* ============================
   SIMPLE I18N SYSTEM
============================ */

const T = {
    he: {
        demoPill: "תצוגת הדגמה · לא מחובר למערכת אמיתית",
        step1: "הזמנה",
        step2: "כללים",
        step3: "פרטים",
        step4: "אישור",

        scanTag: "נסרק בהצלחה",
        entryTitle: "ההזמנה שלך נטענה",
        entrySub: "השלימו צ'ק‑אין בטלפון עוד לפני שתגיעו לדלפק.",
        scanFrom: "מתוך אישור ההזמנה שלך",

        bkVehicle: "רכב",
        bkLoc: "מיקום",
        bkLocal: "נתב״ג (TLV)",
        bkPick: "איסוף",
        bkDrop: "החזרה",

        rulesTag: "חשוב לדעת",
        rulesTitle: "לפני שממשיכים",
        rulesSub: "שישה דברים שיעזרו לחוזה שלך להיפתח מהר בדלפק.",
        ackHint: "הקישו על כל כלל כדי לאשר שקראתם אותו",
const pins = [
    { name: "תל אביב", x: 135, y: 95, img: "tlv.jpg", desc: "עיר החוף המרכזית של ישראל." },
    { name: "ירושלים", x: 150, y: 110, img: "jerusalem.jpg", desc: "העיר העתיקה והקדושה." },
    { name: "חיפה", x: 130, y: 70, img: "haifa.jpg", desc: "עיר נמל עם נופים מרהיבים." },
    { name: "אילת", x: 150, y: 200, img: "eilat.jpg", desc: "עיר נופש בדרום עם ים צלול." }
];
        formTag: "פרטי הלקוח",
        formTitle: "הפרטים שלך",
        fFirst: "שם פרטי",
        fLast: "שם משפחה",
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
