import React from "react";
import { motion } from "framer-motion";
import { Play, Mail, ArrowRight, Youtube, Instagram } from "lucide-react";

const heroVideo = "/video/Hero.mp4";

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
    logo: "/images/platforms/yandex-music.png",
  },
  {
    title: "VK Музыка",
    text: "Треки МИРЭИ на платформе VK Музыка.",
    link: artist.vkMusicUrl,
    logo: "/images/platforms/vk-music.png",
  },
  {
    title: "Звук",
    text: "Страница артистки МИРЭЯ на платформе Звук.",
    link: artist.zvukUrl,
    logo: "/images/platforms/zvuk.png",
  },
  {
    title: "Apple Music",
    text: "Каталог релизов МИРЭИ в Apple Music.",
    link: artist.appleMusicUrl,
    logo: "/images/platforms/apple-music.png",
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
  { src: "/images/4.png", alt: "МИРЭЯ 4" },
  { src: "/images/5.png", alt: "МИРЭЯ 5" },
  { src: "/images/6.jpg", alt: "МИРЭЯ 6" },
];

function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>;
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
    <div className="mb-7 md:mb-12">
      <div className="mb-2 text-[10px] tracking-[0.32em] text-white/45 sm:text-xs sm:tracking-[0.35em]">
        {kicker}
      </div>
      <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl md:text-5xl">
        {title}
      </h2>
      {text ? (
        <p className="mt-3 max-w-2xl text-sm leading-6 text-white/65 md:mt-4 md:text-base md:leading-7">
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
  return (
    <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-[#0B0B0B] p-2 shadow-[0_8px_30px_rgba(0,0,0,0.25)] sm:h-14 sm:w-14 sm:p-2.5">
      <img src={src} alt={title} className="h-full w-full object-contain" />
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] pb-24 text-white md:pb-0">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/35 backdrop-blur-xl">
        <Container>
          <div className="flex items-center justify-between py-3.5 md:py-4">
            <div>
              <div className="text-base font-semibold uppercase tracking-[0.18em] sm:text-lg md:text-xl md:tracking-[0.22em]">
                {artist.name}
              </div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-white/45 md:text-[11px] md:tracking-[0.25em]">
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
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white px-3.5 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-black transition hover:scale-[1.02] sm:px-4 md:text-xs md:tracking-[0.2em]"
            >
              Букинг
            </a>
          </div>
        </Container>
      </header>

      <main>
        <section className="relative min-h-[88vh] overflow-hidden border-b border-white/10 md:min-h-[100vh]">
          <video
            className="absolute inset-0 h-full w-full object-cover"
            src={heroVideo}
            autoPlay
            muted
            loop
            playsInline
          />

          <div className="absolute inset-0 bg-black/45" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.20)_0%,rgba(0,0,0,0.44)_45%,rgba(0,0,0,0.85)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.14),transparent_24%)]" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(5,5,5,0.92)_100%)] md:hidden" />

          <Container>
            <div className="relative z-10 flex min-h-[88vh] items-end py-10 md:min-h-[100vh] md:py-20">
              <motion.div
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75 }}
                className="max-w-4xl pb-2 sm:pb-4 md:pb-10"
              >
                <div className="mb-3 text-[10px] uppercase tracking-[0.34em] text-white/55 sm:text-xs md:mb-4 md:tracking-[0.4em]">
                  {artist.premiereLabel}
                </div>

                <h1 className="text-4xl font-semibold uppercase leading-[0.92] tracking-tight sm:text-5xl md:text-7xl xl:text-[112px]">
                  {artist.name}
                </h1>

                <div className="mt-4 text-xl font-medium text-white/90 sm:text-2xl md:mt-5 md:text-4xl">
                  {artist.premiereTitle}
                </div>

                <p className="mt-4 max-w-xl text-sm leading-6 text-white/75 sm:text-[15px] md:mt-5 md:text-base md:leading-7">
                  {artist.premiereText}
                </p>

                <div className="mt-7 flex flex-wrap gap-3 md:mt-8">
                  <a
                    href={artist.mainTrackUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-[48px] items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-black transition hover:scale-[1.02] md:min-h-0"
                  >
                    <Play className="h-4 w-4" />
                    Слушать
                  </a>
                </div>

                <div className="mt-6 flex flex-wrap gap-2.5 text-sm text-white/80 md:mt-8 md:gap-3">
                  <a
                    href={artist.yandexMusicUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-white/15 bg-black/20 px-3.5 py-2 transition hover:bg-white/10 md:px-4"
                  >
                    Яндекс Музыка
                  </a>
                  <a
                    href={artist.youtubeUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-white/15 bg-black/20 px-3.5 py-2 transition hover:bg-white/10 md:px-4"
                  >
                    YouTube
                  </a>
                  <a
                    href={artist.instagramUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-white/15 bg-black/20 px-3.5 py-2 transition hover:bg-white/10 md:px-4"
                  >
                    Instagram
                  </a>
                  <a
                    href={artist.vkUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-white/15 bg-black/20 px-3.5 py-2 transition hover:bg-white/10 md:px-4"
                  >
                    VK
                  </a>
                </div>
              </motion.div>
            </div>
          </Container>
        </section>

        <section id="releases" className="border-b border-white/10 py-10 md:py-24">
          <Container>
            <SectionHeading
              kicker="РЕЛИЗЫ"
              title="Дискография"
              text="Песни МИРЭИ — искренние, вдохновлённые и эмоциональные. В каждом треке — личная история, настроение и желание оставить после себя настоящее чувство."
            />

            <div className="grid gap-4 sm:gap-5 md:grid-cols-2 md:gap-6 xl:grid-cols-3">
              {releases.map((item) => (
                <div
                  key={item.title}
                  className="group overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.03] sm:rounded-[28px]"
                >
                  <div className="aspect-square overflow-hidden bg-[linear-gradient(180deg,rgba(255,255,255,0.10),rgba(255,255,255,0.02))]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                    />
                  </div>

                  <div className="p-4 sm:p-5">
                    <div className="text-[11px] uppercase tracking-[0.22em] text-white/40 sm:text-xs sm:tracking-[0.25em]">
                      {item.year} | {item.type}
                    </div>

                    <div className="mt-3 text-lg font-semibold sm:text-xl">{item.title}</div>

                    <p className="mt-2 text-sm leading-6 text-white/60 sm:mt-3">
                      {item.text}
                    </p>

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

        <section id="platforms" className="border-b border-white/10 py-10 md:py-24">
          <Container>
            <SectionHeading
              kicker="СЛУШАТЬ"
              title="Площадки"
              text="Слушайте треки МИРЭИ на всех музыкальных платформах."
            />

            <div className="grid gap-4 sm:gap-5 md:grid-cols-2 md:gap-6 xl:grid-cols-4">
              {platforms.map((platform) => (
                <a
                  key={platform.title}
                  href={platform.link}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-[24px] border border-white/10 bg-white/[0.03] p-4 transition hover:bg-white/[0.06] sm:rounded-[28px] sm:p-5 md:p-6"
                >
                  <div className="flex items-center gap-3.5 sm:gap-4">
                    <PlatformLogo src={platform.logo} title={platform.title} />
                    <div className="min-w-0 text-xl font-semibold leading-tight text-white sm:text-2xl">
                      {platform.title}
                    </div>
                  </div>

                  <p className="mt-3 text-sm leading-6 text-white/60 sm:mt-4">
                    {platform.text}
                  </p>

                  <div className="mt-5 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.12em] text-white sm:mt-6">
                    Открыть <ArrowRight className="h-4 w-4" />
                  </div>
                </a>
              ))}
            </div>
          </Container>
        </section>

        <section id="socials" className="border-b border-white/10 py-10 md:py-24">
          <Container>
            <SectionHeading
              kicker="СОЦСЕТИ"
              title="Официальные страницы"
              text="Основные официальные площадки МИРЭИ, где выходят клипы, фото, новые публикации и анонсы."
            />

            <div className="grid gap-4 sm:gap-5 lg:grid-cols-3 lg:gap-6">
              {socials.map((social) => (
                <a
                  key={social.title}
                  href={social.link}
                  target="_blank"
                  rel="noreferrer"
                  className="overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.03] transition hover:bg-white/[0.06] sm:rounded-[28px]"
                >
                  <div className="relative flex aspect-[16/9] items-center justify-center bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))]">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-black shadow-lg shadow-black/20 sm:h-16 sm:w-16">
                      {social.title === "YouTube" ? (
                        <Youtube className="h-5 w-5 sm:h-6 sm:w-6" />
                      ) : social.title === "Instagram" ? (
                        <Instagram className="h-5 w-5 sm:h-6 sm:w-6" />
                      ) : (
                        <span className="text-xs font-bold uppercase sm:text-sm">VK</span>
                      )}
                    </div>
                  </div>

                  <div className="p-4 sm:p-5">
                    <div className="text-lg font-semibold sm:text-xl">{social.title}</div>
                    <p className="mt-2 text-sm leading-6 text-white/60 sm:mt-3">
                      {social.text}
                    </p>
                    <div className="mt-5 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.12em] text-white">
                      Открыть <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </Container>
        </section>

        <section id="gallery" className="border-b border-white/10 py-10 md:py-24">
          <Container>
            <SectionHeading
              kicker="ФОТО"
              title="Галерея"
              text="Актуальные фотографии МИРЭИ: сценические, портретные и lifestyle-кадры."
            />

            <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
              {gallery.map((item) => (
                <div
                  key={item.src}
                  className="overflow-hidden rounded-[20px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.10),rgba(255,255,255,0.02))] sm:rounded-[24px]"
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

        <section id="contacts" className="py-10 md:py-24">
          <Container>
            <SectionHeading
              kicker="КОНТАКТЫ"
              title="Букинг и связь"
              text="Главное здесь — быстро найти почту для букинга и перейти на официальные страницы артистки."
            />

            <div className="grid gap-4 sm:gap-5 md:grid-cols-2 md:gap-6 xl:grid-cols-3">
              <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-4 sm:rounded-[28px] sm:p-6">
                <div className="text-[11px] uppercase tracking-[0.22em] text-white/40 sm:text-xs sm:tracking-[0.25em]">
                  Букинг
                </div>
                <div className="mt-4 flex items-start gap-3 text-sm text-white/85">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0" />
                  {artist.bookingEmail}
                </div>
              </div>

              <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-4 sm:rounded-[28px] sm:p-6">
                <div className="text-[11px] uppercase tracking-[0.22em] text-white/40 sm:text-xs sm:tracking-[0.25em]">
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

              <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-4 sm:rounded-[28px] sm:p-6">
                <div className="text-[11px] uppercase tracking-[0.22em] text-white/40 sm:text-xs sm:tracking-[0.25em]">
                  Официальный сайт
                </div>
                <p className="mt-4 text-sm leading-6 text-white/70 md:leading-7">
                  Официальный сайт певицы МИРЭЯ. Здесь собраны актуальные релизы,
                  ссылки на площадки, фото и информация для связи по выступлениям.
                </p>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <div className="fixed bottom-4 left-4 right-4 z-50 md:hidden">
        <a
          href={artist.mainTrackUrl}
          target="_blank"
          rel="noreferrer"
          className="flex min-h-[54px] items-center justify-center rounded-full bg-white px-5 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-black shadow-[0_20px_50px_rgba(0,0,0,0.35)]"
        >
          Слушать
        </a>
      </div>
    </div>
  );
}
