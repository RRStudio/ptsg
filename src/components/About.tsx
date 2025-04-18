import royPhoto from "../assets/roy.png";
import ronPhoto from "../assets/ron.png";

export default function About() {
  return (
    <div class="w-full h-full flex justify-center">
      <div class="flex flex-col items-center gap-12 w-full max-w-4xl">
        <h1 class="text-4xl font-900 text-center">אודות</h1>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 w-full">
          <div class="flex flex-col items-center gap-6">
            <img
              src={royPhoto}
              alt="Roy Shavit"
              class="w-48 h-48 rounded-full object-cover"
            />
            <div class="text-center">
              <h2 class="text-2xl font-bold mb-4">רועי שביט</h2>
              <p class="text-lg text-gray-700 leading-relaxed">
                רועי הוא מפתח תוכנה עם ניסיון של למעלה מ-10 שנים בתעשייה. הוא
                עבד בחברות הייטק מובילות בארץ ובעולם, וכיום משמש כמנהל טכנולוגי.
                רועי מתמחה בפיתוח מערכות מבוזרות, ארכיטקטורת תוכנה, ופיתוח
                צוותים. הוא פעיל בקהילת הקוד הפתוח ומרצה בכנסים מקצועיים.
              </p>
            </div>
          </div>

          <div class="flex flex-col items-center gap-6">
            <img
              src={ronPhoto}
              alt="Ron Shavit"
              class="w-48 h-48 rounded-full object-cover"
            />
            <div class="text-center">
              <h2 class="text-2xl font-bold mb-4">רון שביט</h2>
              <p class="text-lg text-gray-700 leading-relaxed">
                רון הוא מפתח תוכנה עם ניסיון רב בפיתוח אפליקציות ווב ומובייל.
                הוא עבד במגוון חברות סטארטאפ ועסק בפרויקטים עצמאיים. רון מתמחה
                בפיתוח frontend, UI/UX, וטכנולוגיות חדשות. הוא אוהב לשתף ידע
                ולעזור למפתחים אחרים להתקדם בקריירה שלהם.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
