import Link from "../components/Link";
import ronPhoto from "../assets/ron.jpg";
import royPhoto from "../assets/roy.jpg";
import Hero from "../components/Hero";

type PicProps = {
    src: string;
    name: string;
    description: string;
};

function Pic({ name, src, description }: PicProps) {
    return (
        <div class="flex flex-col items-center gap-10">
            <img
                src={src}
                alt={name}
                class="w-70 h-70 rounded-full object-cover border-8 border-primary"
            />
            <div class="flex flex-col gap-4 text-center">
                <h2 class="text-4xl font-900">{name}</h2>
                <p class="text-lg text-neutral-400 leading-relaxed">
                    {description}
                </p>
            </div>
        </div>
    );
}

export default function About() {
    return (
        <div class="w-full h-ful l flex justify-center">
            <div class="w-full flex flex-col items-center gap-24">
                <Hero title="תכיר אותנו קצת">
                    <div class="flex flex-col items-center gap-8">
                        <p class="text-xl">
                            יצרנו את{" "}
                            <span class="text-primary font-bold">
                                פותחים סוגריים
                            </span>{" "}
                            כדי לעזור למפתחים לקבל פרספקרטיבות שונות על נושאים
                            שהם לפעמים שנויים במחלוקת, בכל מה שלא טכנאי בהייטק.
                            אנחנו כאן בשביל להחכים, להצחיק (גם אם לא הולך לנו)
                            ולהעביר לכם את הפקקים. אבל בעיקר בשביל להצחיק.
                        </p>
                        <Link variant="button" href="/ask">
                            שאל אותנו שאלה
                        </Link>
                    </div>
                </Hero>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-12 w-full">
                    <Pic
                        src={royPhoto}
                        name="רועי שביט"
                        description="רועי הוא מפתח תוכנה עם ניסיון של למעלה מ-10 שנים בתעשייה. הוא עבד בחברות הייטק מובילות בארץ ובעולם, וכיום משמש כמנהל טכנולוגי. רועי מתמחה בפיתוח מערכות מבוזרות, ארכיטקטורת תוכנה, ופיתוח צוותים. הוא פעיל בקהילת הקוד הפתוח ומרצה בכנסים מקצועיים."
                    />

                    <Pic
                        src={ronPhoto}
                        name="רון שביט"
                        description="רון הוא מפתח תוכנה עם ניסיון רב בפיתוח אפליקציות ווב ומובייל. הוא עבד במגוון חברות סטארטאפ ועסק בפרויקטים עצמאיים. רון מתמחה בפיתוח frontend, UI/UX, וטכנולוגיות חדשות. הוא אוהב לשתף ידע ולעזור למפתחים אחרים להתקדם בקריירה שלהם."
                    />
                </div>
            </div>
        </div>
    );
}
