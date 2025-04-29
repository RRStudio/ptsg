import ronPhoto from "../assets/ron.jpg";
import royPhoto from "../assets/roy.jpg";
import Hero from "../components/Hero";
import Link from "../components/Link";

type PicProps = {
    src: string;
    name: string;
    description: string;
};

function Pic(props: PicProps) {
    return (
        <div class="flex flex-col items-center gap-10">
            <img
                src={props.src}
                alt={props.name}
                class="max-h-70 w-full max-w-70 rounded-full border-8 border-primary object-cover"
            />
            <div class="flex w-full max-w-120 tablet:max-w-none flex-col gap-2 tablet:gap-4 text-center">
                <h2 class="font-900 tablet:text-4xl text-3xl">{props.name}</h2>
                <p class="tablet:text-lg text-md text-neutral-400 leading-relaxed">
                    {props.description}
                </p>
            </div>
        </div>
    );
}

export default function About() {
    return (
        <div class="l flex h-ful w-full justify-center">
            <div class="flex w-full flex-col items-center gap-24">
                <Hero title="קצת עלינו">
                    <div class="flex flex-col items-center gap-8">
                        <p>
                            <span class="font-bold text-primary">
                                פותחים סוגריים
                            </span>{" "}
                            נולד מתוך רצון לעזור לאנשים בהייטק (וגם לאלה שבדרך
                            לשם) לקבל פרספקטיבות שונות על כל מה שלא תמיד מדובר
                            בשיחות היום-יום. אנחנו כאן כדי לשתף, להקשיב, ללמוד –
                            ובעיקר לפתוח את הראש. אם גם לכם יש שאלות, תהיות או
                            סתם מחשבות על החיים בתוך ובסביבת ההייטק – הגעתם
                            למקום הנכון.
                        </p>
                        <Link variant="button" href="/ask">
                            תשאלו אותנו שאלה
                        </Link>
                    </div>
                </Hero>

                <div class="grid w-full grid-cols-1 tablet:grid-cols-2 gap-12">
                    <Pic
                        src={royPhoto}
                        name="רועי שביט"
                        description="אני מתכנת בעל 8 שנות ניסיון, זה אומר שאני כותב קוד בלי באגים בכלל ושאם יש באג קרוב - הוא בורח ממני הכי מהר שאפשר. יצא לי לעבוד בצוותים מאוד קטנים, גדולים וגם בינוניים."
                    />

                    <Pic
                        src={ronPhoto}
                        name="רון שביט"
                        description="אני מתכנת עם 7 שנות ניסיון. אני מהמוזרים האלה שכותבים ב-Vim ומשתמשים במקלדות מפוצלות. אני אוהב ללמוד שפות חדשות ולשנות את הקונפיג שלי כל יומיים."
                    />
                </div>
            </div>
        </div>
    );
}
