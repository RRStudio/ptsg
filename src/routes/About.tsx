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
        <p class="text-lg text-neutral-400 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <div class="w-full h-ful l flex justify-center">
      <div class="w-full flex flex-col items-center gap-24">
        <Hero title="קצת עלינו">
          <div class="flex flex-col items-center gap-8">
            <p class="text-xl">
              יצרנו את{" "}
              <span class="text-primary font-bold">פותחים סוגריים</span> כדי
              לעזור למפתחים לקבל פרספקרטיבות שונות על נושאים שהם לפעמים שנויים
              במחלוקת, בכל מה שלא טכנאי בהייטק. אנחנו כאן בשביל להחכים, להצחיק
              (גם אם לא הולך לנו) ולהעביר לכם את הפקקים. אבל בעיקר בשביל להצחיק.
            </p>
            <Link variant="button" href="/ask">
              תשאלו אותנו שאלה
            </Link>
          </div>
        </Hero>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 w-full">
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
