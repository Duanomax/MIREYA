import React from "react";
import { motion } from "framer-motion";
import { Play, Mail, ArrowRight, Youtube, Instagram } from "lucide-react";

const heroVideo = "/video/hero.mp4";

const artist = {
  name: "МИРЭЯ",
  subtitle: "Официальный сайт",
  premiereLabel: "СИНГЛ",
  premiereTitle: "«Ты есть у себя»",
  premiereText:
    "Лиричная, светлая и внутренняя работа о точке опоры, которую человек находит в самом себе.",
  bookingEmail: "mireya.singer@gmail.com",
  mainTrackUrl: "https://music.yandex.ru/album/37869756/track/142057261",
  youtubeUrl: "https://www.youtube.com/@mireya_music",
  instagramUrl: "https://instagram.com/mireya_music",
  vkUrl: "https://vk.com/mireya_music",
  yandexMusicUrl: "https://music.yandex.ru/artist/19133028",
  vkMusicUrl: "https://vk.ru/artist/2048612992403381538",
  zvukUrl: "https://zvuk.com/artist/212474713",
  appleMusicUrl:
    "https://music.apple.com/ru/artist/%D0%BC%D0%B8%D1%80%D1%8D%D1%8F/1680419658",
};

const releases = [
  {
    year: "2025",
    type: "сингл",
    title: "Ты есть у себя",
    text: "Светлая и внутренняя песня о личной опоре и возвращении к себе.",
    link: "https://music.yandex.ru/album/37869756/track/142057261",
    image: "/images/ty-est-u-sebya.jpg",
  },
  {
    year: "2025",
    type: "сингл",
    title: "Смелой",
    text: "Песня о решимости, свободе и внутренней силе идти своим путём.",
    link: "https://music.yandex.ru/album/34159668/track/133312778",
    image: "/images/smeloy.jpg",
  },
  {
    year: "2024",
    type: "сингл",
    title: "Антигерой",
    text: "Драматичное и эмоциональное звучание с ярким характером.",
    link: "https://music.yandex.ru/album/33679565/track/132110980",
    image: "/images/antigeroi.jpg",
  },
  {
    year: "2024",
    type: "сингл",
    title: "Не жаль",
    text: "Личная история про отпускание, принятие и движение дальше.",
    link: "https://music.yandex.ru/album/28438140/track/119786558",
    image: "/images/ne-zhal.jpg",
  },
  {
    year: "2025",
    type: "сингл",
    title: "Стала сильней",
    text: "Песня о внутреннем росте, выдержке и силе пройти свой путь до конца.",
    link: "https://music.yandex.ru/album/36510533/track/138889131",
    image: "/images/stala-silney.jpg",
  },
  {
    year: "2024",
    type: "сингл",
    title: "Секрет",
    text: "Загадочная и чувственная работа с напряжённой атмосферой и характером.",
    link: "https://music.yandex.ru/album/28667421/track/120309113",
    image: "/images/sekret.jpg",
  },
];

const platforms = [
  {
    title: "Яндекс Музыка",
    text: "Профиль артиста и релизы МИРЭИ в Яндекс Музыке.",
    link: artist.yandexMusicUrl,
  },
  {
    title: "VK Музыка",
    text: "Треки МИРЭИ на платформе VK Музыка.",
    link: artist.vkMusicUrl,
  },
  {
    title: "Звук",
    text: "Страница артистки МИРЭЯ на платформе Звук.",
    link: artist.zvukUrl,
  },
  {
    title: "Apple Music",
    text: "Каталог релизов МИРЭИ в Apple Music.",
    link: artist.appleMusicUrl,
  },
];

const socials = [
  {
    title: "YouTube",
    text: "Клипы, live-видео и новые публикации на официальном канале МИРЭИ.",
    link: artist.youtubeUrl,
  },
  {
    title: "Instagram",
    text: "Фото, короткие видео, backstage и визуальный образ артистки.",
    link: artist.instagramUrl,
  },
  {
    title: "VK",
    text: "Новости, релизы и общение с аудиторией на официальной странице МИРЭИ.",
    link: artist.vkUrl,
  },
];

const gallery = [
  { src: "/images/1.jpg", alt: "МИРЭЯ 1" },
  { src: "/images/2.jpg", alt: "МИРЭЯ 2" },
  { src: "/images/3.jpg", alt: "МИРЭЯ 3" },
  { src: "/images/4.jpg", alt: "МИРЭЯ 4" },
  { src: "/images/5.jpg", alt: "МИРЭЯ 5" },
  { src: "/images/6.jpg", alt: "МИРЭЯ 6" },
];

function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto max-w-7xl px-6 lg:px-8">{children}</div>;
}

function SectionHeading({
  kicker,
  title,
  text,
}: {
  kicker: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="mb-8 md:mb-12">
      <div className="mb-3 text-xs tracking-[0.35em] text-white/45">{kicker}</div>
      <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
        {title}
      </h2>
      {text ? (
        <p className="mt-4 max-w-2xl text-sm leading-7 text-white/65 md:text-base">
          {text}
        </p>
      ) : null}
    </div>
  );
}

function PlatformLogo({
  src,
  title,
}: {
  src: string;
  title: string;
}) {
  const [failed, setFailed] = React.useState(false);

  const fallbackLabel =
    title === "Яндекс Музыка"
      ? "Я"
      : title === "VK Музыка"
        ? "VK"
        : title === "Звук"
          ? "Z"
          : "";

  const fallbackClass =
    title === "Яндекс Музыка"
      ? "bg-[#FC3F1D] text-white"
      : title === "VK Музыка"
        ? "bg-[#2787F5] text-white"
        : title === "Звук"
          ? "bg-[#19E27D] text-black"
          : "bg-white text-black";

  return (
    <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-[#0B0B0B] p-2 shadow-[0_8px_30px_rgba(0,0,0,0.25)]">
      {!failed ? (
        <img
          src={src}
          alt={title}
          className="h-full w-full object-contain"
          onError={() => setFailed(true)}
        />
      ) : (
        <div className={`flex h-full w-full items-center justify-center rounded-xl text-sm font-bold ${fallbackClass}`}>
          {fallbackLabel}
        </div>
      )}
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur-xl">
        <Container>
          <div className="flex items-center justify-between py-4">
            <div>
              <div className="text-xl font-semibold uppercase tracking-[0.22em]">
                {artist.name}
              </div>
              <div className="text-[11px] uppercase tracking-[0.25em] text-white/45">
                {artist.subtitle}
              </div>
            </div>

            <nav className="hidden items-center gap-7 text-sm uppercase tracking-[0.2em] text-white/60 md:flex">
              <a href="#releases" className="transition hover:text-white">
                Дискография
              </a>
              <a href="#platforms" className="transition hover:text-white">
                Площадки
              </a>
              <a href="#socials" className="transition hover:text-white">
                Соцсети
              </a>
              <a href="#gallery" className="transition hover:text-white">
                Фото
              </a>
              <a href="#contacts" className="transition hover:text-white">
                Букинг
              </a>
            </nav>

            <a
              href="#contacts"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-black transition hover:scale-[1.02]"
            >
              Букинг
            </a>
          </div>
        </Container>
      </header>

      <main>
        <section className="relative min-h-[100vh] overflow-hidden border-b border-white/10">
          <video
            className="absolute inset-0 h-full w-full object-cover"
            src={heroVideo}
            autoPlay
            muted
            loop
            playsInline
          />

          <div className="absolute inset-0 bg-black/45" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.18)_0%,rgba(0,0,0,0.48)_55%,rgba(0,0,0,0.82)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_25%)]" />

          <Container>
            <div className="relative z-10 flex min-h-[100vh] items-end py-14 md:py-20">
              <motion.div
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75 }}
                className="max-w-4xl pb-4 md:pb-10"
              >
                <div className="mb-4 text-xs uppercase tracking-[0.4em] text-white/55">
                  {artist.premiereLabel}
                </div>

                <h1 className="text-5xl font-semibold uppercase leading-[0.9] tracking-tight md:text-7xl xl:text-[112px]">
                  {artist.name}
                </h1>

                <div className="mt-5 text-2xl font-medium text-white/90 md:text-4xl">
                  {artist.premiereTitle}
                </div>

                <p className="mt-5 max-w-xl text-sm leading-7 text-white/75 md:text-base">
                  {artist.premiereText}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={artist.mainTrackUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-black transition hover:scale-[1.02]"
                  >
                    <Play className="h-4 w-4" />
                    Слушать
                  </a>
                </div>

                <div className="mt-8 flex flex-wrap gap-3 text-sm text-white/80">
                  <a
                    href={artist.yandexMusicUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-white/15 bg-black/20 px-4 py-2 transition hover:bg-white/10"
                  >
                    Яндекс Музыка
                  </a>
                  <a
                    href={artist.youtubeUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-white/15 bg-black/20 px-4 py-2 transition hover:bg-white/10"
                  >
                    YouTube
                  </a>
                  <a
                    href={artist.instagramUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-white/15 bg-black/20 px-4 py-2 transition hover:bg-white/10"
                  >
                    Instagram
                  </a>
                  <a
                    href={artist.vkUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-white/15 bg-black/20 px-4 py-2 transition hover:bg-white/10"
                  >
                    VK
                  </a>
                </div>
              </motion.div>
            </div>
          </Container>
        </section>

        <section id="releases" className="border-b border-white/10 py-16 md:py-24">
          <Container>
            <SectionHeading
              kicker="РЕЛИЗЫ"
              title="Дискография"
              text="Песни МИРЭИ — искренние, вдохновлённые и эмоциональные. В каждом треке — личная история, настроение и желание оставить после себя настоящее чувство."
            />

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {releases.map((item) => (
                <div
                  key={item.title}
                  className="group overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03]"
                >
                  <div className="aspect-square overflow-hidden bg-[linear-gradient(180deg,rgba(255,255,255,0.10),rgba(255,255,255,0.02))]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                    />
                  </div>

                  <div className="p-5">
                    <div className="text-xs uppercase tracking-[0.25em] text-white/40">
                      {item.year} | {item.type}
                    </div>

                    <div className="mt-3 text-xl font-semibold">{item.title}</div>

                    <p className="mt-3 text-sm leading-7 text-white/60">{item.text}</p>

                    <a
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-5 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.12em] text-white transition group-hover:text-white/75"
                    >
                      Слушать <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section id="platforms" className="border-b border-white/10 py-16 md:py-24">
          <Container>
            <SectionHeading
              kicker="СЛУШАТЬ"
              title="Площадки"
              text="Слушайте треки МИРЭИ на всех музыкальных платформах."
            />

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {platforms.map((platform) => (
                <a
                  key={platform.title}
                  href={platform.link}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6 transition hover:bg-white/[0.06]"
                >
                  <div className="flex items-center gap-4">
                    <PlatformLogo src={platform.logo} title={platform.title} />
                    <div className="min-w-0">
                      <div className="text-[26px] font-semibold leading-tight text-white">
                        {platform.title}
                      </div>
                    </div>
                  </div>

                  <p className="mt-5 text-sm leading-8 text-white/60">
                    {platform.text}
                  </p>

                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.12em] text-white">
                    Открыть <ArrowRight className="h-4 w-4" />
                  </div>
                </a>
              ))}
            </div>
          </Container>
        </section>

        <section id="socials" className="border-b border-white/10 py-16 md:py-24">
          <Container>
            <SectionHeading
              kicker="СОЦСЕТИ"
              title="Официальные страницы"
              text="Основные официальные площадки МИРЭИ, где выходят клипы, фото, новые публикации и анонсы."
            />

            <div className="grid gap-6 lg:grid-cols-3">
              {socials.map((social) => (
                <a
                  key={social.title}
                  href={social.link}
                  target="_blank"
                  rel="noreferrer"
                  className="overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] transition hover:bg-white/[0.06]"
                >
                  <div className="relative flex aspect-video items-center justify-center bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))]">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-black shadow-lg shadow-black/20">
                      {social.title === "YouTube" ? (
                        <Youtube className="h-6 w-6" />
                      ) : social.title === "Instagram" ? (
                        <Instagram className="h-6 w-6" />
                      ) : (
                        <span className="text-sm font-bold uppercase">VK</span>
                      )}
                    </div>
                  </div>

                  <div className="p-5">
                    <div className="text-lg font-semibold">{social.title}</div>
                    <p className="mt-3 text-sm leading-7 text-white/60">{social.text}</p>
                    <div className="mt-5 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.12em] text-white">
                      Открыть <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </Container>
        </section>

        <section id="gallery" className="border-b border-white/10 py-16 md:py-24">
          <Container>
            <SectionHeading
              kicker="ФОТО"
              title="Галерея"
              text="Актуальные фотографии МИРЭИ: сценические, портретные и lifestyle-кадры."
            />

            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
              {gallery.map((item) => (
                <div
                  key={item.src}
                  className="overflow-hidden rounded-[24px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.10),rgba(255,255,255,0.02))]"
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="aspect-[4/5] h-full w-full object-cover transition duration-500 hover:scale-[1.03]"
                  />
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section id="contacts" className="py-16 md:py-24">
          <Container>
            <SectionHeading
              kicker="КОНТАКТЫ"
              title="Букинг и связь"
              text="Главное здесь — быстро найти почту для букинга и перейти на официальные страницы артистки."
            />

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6">
                <div className="text-xs uppercase tracking-[0.25em] text-white/40">Букинг</div>
                <div className="mt-4 flex items-start gap-3 text-sm text-white/85">
                  <Mail className="mt-0.5 h-4 w-4" />
                  {artist.bookingEmail}
                </div>
              </div>

              <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6">
                <div className="text-xs uppercase tracking-[0.25em] text-white/40">
                  Основные площадки
                </div>
                <div className="mt-4 flex flex-wrap gap-3 text-sm text-white/85">
                  <a
                    href={artist.yandexMusicUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-white/12 px-3 py-2 transition hover:bg-white/10"
                  >
                    Яндекс Музыка
                  </a>
                  <a
                    href={artist.youtubeUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-white/12 px-3 py-2 transition hover:bg-white/10"
                  >
                    YouTube
                  </a>
                  <a
                    href={artist.instagramUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-white/12 px-3 py-2 transition hover:bg-white/10"
                  >
                    Instagram
                  </a>
                  <a
                    href={artist.vkUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-white/12 px-3 py-2 transition hover:bg-white/10"
                  >
                    VK
                  </a>
                </div>
              </div>

              <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6">
                <div className="text-xs uppercase tracking-[0.25em] text-white/40">
                  Официальный сайт
                </div>
                <p className="mt-4 text-sm leading-7 text-white/70">
                  Официальный сайт певицы МИРЭЯ. Здесь собраны актуальные релизы,
                  ссылки на площадки, фото и информация для связи по выступлениям.
                </p>
              </div>
            </div>
          </Container>
        </section>
      </main>
    </div>
  );
}
