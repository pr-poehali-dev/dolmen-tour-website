import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const IMG_HERO = "https://cdn.poehali.dev/projects/8315ab8d-383f-4cb9-bc24-0056370d6459/files/01bfb1f9-8e2a-4ea8-b555-36eafedc9056.jpg";
const IMG_PANORAMA = "https://cdn.poehali.dev/projects/8315ab8d-383f-4cb9-bc24-0056370d6459/files/02e90ef6-70fb-4c8b-9546-42afb96b33bb.jpg";
const IMG_PORTAL = "https://cdn.poehali.dev/projects/8315ab8d-383f-4cb9-bc24-0056370d6459/files/c5645d5f-f26b-4d0a-9b63-25282ac4f4e4.jpg";

const ROUTES = [
  {
    num: "01",
    title: "Душа Каменного Леса",
    location: "Хаджох (Каменномостский)",
    level: "Начинающий",
    levelIcon: "Leaf",
    points: [
      "Хаджох-1 «Одинокий Воин» — легенда о молнии",
      "Круглое отверстие-лаз диаметром 40 см",
      "Хаджох-3/4 — руинированные дольмены",
    ],
    desc: "Идеальный первый маршрут. Лесная тропа, доступность для всей семьи, прямой контакт с 5000-летней историей.",
  },
  {
    num: "02",
    title: "Тайна Горного Духа",
    location: "Хамышки",
    level: "Мистический",
    levelIcon: "Sparkles",
    points: [
      "Корытообразный полумонолит",
      "Петроглифы: круги, спирали, линии",
      "Менгиры и кромлех",
      "Культ бога Тлепша (адыгская мифология)",
    ],
    desc: "Энергетические места силы. Для тех, кто ищет глубину — исторический, духовный и археологический опыт.",
  },
  {
    num: "03",
    title: "В Сердце Заповедника",
    location: "Гузерипль",
    level: "Экспертный",
    levelIcon: "Mountain",
    points: [
      "Гузерипльский дольмен — высота 2.5 м",
      "Самый крупный известный объект региона",
      "Территория Кавказского заповедника",
      "Панорамные виды на горный хребет",
    ],
    desc: "Флагманский маршрут. Заповедная природа, масштаб мегалитической архитектуры и нетронутый горный ландшафт.",
  },
];

const DOLMEN_TYPES = [
  { icon: "Square", label: "Плиточные", desc: "Собраны из 5 каменных плит: пол, крыша, 3 стены. Наиболее распространённый тип на Западном Кавказе." },
  { icon: "Circle", label: "Монолитные", desc: "Высечены целиком в скальном массиве. Редчайший вариант — пример: Волконский монолит." },
  { icon: "Layers", label: "Составные", desc: "Стены сложены из нескольких блоков. Сложная инженерия без цемента — только точная подгонка." },
  { icon: "Droplets", label: "Корытообразные", desc: "Полость выдолблена в монолитном блоке. Верхняя плита — съёмная. Переходный тип." },
];

const GALLERY = [
  { src: IMG_HERO, caption: "Гузерипльский дольмен, утренний туман" },
  { src: IMG_PANORAMA, caption: "Дольменное поле, Богатырская поляна" },
  { src: IMG_PORTAL, caption: "Круглое отверстие-лаз, Хаджох" },
];

export default function Index() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenu(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen" style={{ background: "var(--brand-dark)" }}>

      {/* HEADER */}
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled ? "rgba(26,54,54,0.97)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(201,168,76,0.15)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollTo("hero")}>
            <div className="w-9 h-9 flex items-center justify-center rounded-sm" style={{ background: "var(--brand-gold)", color: "var(--brand-dark)" }}>
              <span className="font-display font-bold text-lg leading-none">◈</span>
            </div>
            <div>
              <div className="font-display font-bold text-white text-lg leading-tight tracking-widest uppercase">Dolmen</div>
              <div className="text-xs tracking-[0.3em] uppercase leading-none" style={{ color: "var(--brand-gold)" }}>Adygea</div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {[
              { label: "О нас", id: "about" },
              { label: "Справочник гида", id: "guide" },
              { label: "Маршруты", id: "routes" },
              { label: "Галерея", id: "gallery" },
              { label: "Контакты", id: "contacts" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-sm font-body tracking-wide transition-colors duration-200 hover:text-white"
                style={{ color: "rgba(232,229,215,0.7)" }}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("routes")}
              className="px-5 py-2 text-sm font-body font-medium tracking-wide transition-all duration-200 hover:opacity-90"
              style={{ background: "var(--brand-gold)", color: "var(--brand-dark)", borderRadius: "2px" }}
            >
              Выбрать маршрут
            </button>
          </nav>

          <button className="md:hidden text-white" onClick={() => setMobileMenu(!mobileMenu)}>
            <Icon name={mobileMenu ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {mobileMenu && (
          <div className="md:hidden px-6 pb-6 flex flex-col gap-4" style={{ background: "rgba(26,54,54,0.98)" }}>
            {[
              { label: "О нас", id: "about" },
              { label: "Справочник гида", id: "guide" },
              { label: "Маршруты", id: "routes" },
              { label: "Галерея", id: "gallery" },
              { label: "Контакты", id: "contacts" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-left text-base font-body py-1"
                style={{ color: "var(--brand-light)" }}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="hero" className="relative min-h-screen flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${IMG_HERO})` }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, rgba(26,54,54,0.97) 0%, rgba(26,54,54,0.5) 50%, rgba(26,54,54,0.2) 100%)" }}
        />

        <div className="absolute top-32 right-12 hidden lg:block" style={{ opacity: 0.1 }}>
          <div className="font-display text-[14rem] leading-none font-light text-white select-none">◈</div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20 w-full">
          <div className="max-w-3xl animate-fade-up">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12" style={{ background: "var(--brand-gold)" }} />
              <span className="text-xs tracking-[0.4em] uppercase font-body" style={{ color: "var(--brand-gold)" }}>
                Цивилизационный туризм · Адыгея
              </span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-light text-white leading-none mb-6">
              Душа<br />
              <em className="font-light" style={{ color: "var(--brand-gold)" }}>Каменного</em><br />
              Леса
            </h1>
            <p className="font-body text-lg md:text-xl mb-3 leading-relaxed" style={{ color: "rgba(232,229,215,0.8)" }}>
              Дольмены Адыгеи
            </p>
            <p className="font-display italic text-base md:text-lg mb-10 max-w-xl" style={{ color: "rgba(232,229,215,0.55)" }}>
              «Мегалитические памятники — такая же тайна планеты, как пирамиды или Стоунхендж»
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollTo("routes")}
                className="px-8 py-4 text-base font-body font-medium tracking-wide transition-all duration-300 hover:opacity-90 hover:scale-[1.02]"
                style={{ background: "var(--brand-gold)", color: "var(--brand-dark)", borderRadius: "2px" }}
              >
                Выбрать маршрут
              </button>
              <button
                onClick={() => scrollTo("about")}
                className="px-8 py-4 text-base font-body tracking-wide transition-all duration-300 hover:bg-white/10 border"
                style={{ borderColor: "rgba(232,229,215,0.3)", color: "var(--brand-light)", borderRadius: "2px" }}
              >
                Узнать историю
              </button>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px" style={{ borderTop: "1px solid rgba(201,168,76,0.2)" }}>
            {[
              { num: "2 500+", label: "известных дольменов" },
              { num: "5 000", label: "лет истории" },
              { num: "3", label: "авторских маршрута" },
              { num: "IV–II", label: "тыс. до н.э." },
            ].map((stat) => (
              <div key={stat.label} className="pt-6 pr-6">
                <div className="font-display text-3xl md:text-4xl font-light" style={{ color: "var(--brand-gold)" }}>
                  {stat.num}
                </div>
                <div className="text-xs font-body uppercase tracking-wider mt-1" style={{ color: "rgba(232,229,215,0.45)" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 md:py-32" style={{ background: "var(--brand-dark)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-12" style={{ background: "var(--brand-gold)" }} />
                <span className="text-xs tracking-[0.4em] uppercase font-body" style={{ color: "var(--brand-gold)" }}>
                  Наследие дольменной цивилизации
                </span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-light text-white leading-tight mb-8">
                Тайна, которой<br /><em style={{ color: "var(--brand-gold)" }}>пять тысяч лет</em>
              </h2>
              <div className="space-y-4 font-body text-base leading-relaxed" style={{ color: "rgba(232,229,215,0.75)" }}>
                <p>
                  Дольмены Западного Кавказа — мегалитические сооружения IV–II тысячелетия до н.э. На территории от Таманского полуострова до Абхазии обнаружено более 2500 объектов, значительная часть которых сосредоточена в Адыгее.
                </p>
                <p>
                  Эти монументальные постройки возводила Майкопская культура, связанная торговыми путями с Месопотамией и ранними ближневосточными цивилизациями. Дольменные поля стоят рядом с Великим шёлковым путём — перекрёстком цивилизаций.
                </p>
                <p>
                  Богатырская поляна близ Даховской насчитывает более 400 дольменов — одна из крупнейших концентраций мегалитов в мире.
                </p>
              </div>
            </div>

            <div className="relative">
              <img
                src={IMG_PANORAMA}
                alt="Дольмены Адыгеи"
                className="w-full object-cover"
                style={{ height: "480px", borderRadius: "2px" }}
              />
              <div
                className="absolute -bottom-6 -left-6 p-6 max-w-xs hidden md:block"
                style={{ background: "var(--brand-mid)", borderLeft: "3px solid var(--brand-gold)" }}
              >
                <p className="font-display italic text-lg text-white leading-snug">
                  «Такая же тайна планеты, как пирамиды или Стоунхендж»
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GUIDE */}
      <section id="guide" style={{ background: "#111f1f" }} className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-12" style={{ background: "var(--brand-gold)" }} />
              <span className="text-xs tracking-[0.4em] uppercase font-body" style={{ color: "var(--brand-gold)" }}>
                Справочник гида
              </span>
              <div className="h-px w-12" style={{ background: "var(--brand-gold)" }} />
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-light text-white">
              Типология дольменов
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {DOLMEN_TYPES.map((type) => (
              <div
                key={type.label}
                className="p-6 transition-all duration-300 hover:-translate-y-1"
                style={{ background: "rgba(64,83,76,0.2)", border: "1px solid rgba(201,168,76,0.15)", borderRadius: "2px" }}
              >
                <div
                  className="w-10 h-10 flex items-center justify-center mb-4"
                  style={{ background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.3)" }}
                >
                  <Icon name={type.icon} size={20} style={{ color: "var(--brand-gold)" }} />
                </div>
                <h3 className="font-display text-xl text-white mb-3">{type.label}</h3>
                <p className="font-body text-sm leading-relaxed" style={{ color: "rgba(232,229,215,0.6)" }}>
                  {type.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8" style={{ background: "rgba(64,83,76,0.15)", border: "1px solid rgba(201,168,76,0.1)", borderRadius: "2px" }}>
              <h3 className="font-display text-2xl text-white mb-4">Ключевые объекты</h3>
              <ul className="space-y-3">
                {[
                  "Волконский дольмен-монолит — уникальный высеченный объект",
                  "Гузерипльский дольмен — высота 2.5 м, крупнейший в регионе",
                  "Дольменное поле на реке Жане — составные конструкции",
                  "Богатырская поляна — более 400 сооружений",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 font-body text-sm" style={{ color: "rgba(232,229,215,0.75)" }}>
                    <span style={{ color: "var(--brand-gold)", marginTop: "2px" }}>—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-8" style={{ background: "rgba(64,83,76,0.15)", border: "1px solid rgba(201,168,76,0.1)", borderRadius: "2px" }}>
              <h3 className="font-display text-2xl text-white mb-4">Исторический контекст</h3>
              <ul className="space-y-3">
                {[
                  "Майкопская культура — строители мегалитов",
                  "Связь с Великим шёлковым путём",
                  "Майкопский курган — эталонный памятник эпохи",
                  "Программа охраны памятников 1999 г.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 font-body text-sm" style={{ color: "rgba(232,229,215,0.75)" }}>
                    <span style={{ color: "var(--brand-gold)", marginTop: "2px" }}>—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ROUTES */}
      <section id="routes" className="py-24 md:py-32" style={{ background: "var(--brand-dark)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12" style={{ background: "var(--brand-gold)" }} />
            <span className="text-xs tracking-[0.4em] uppercase font-body" style={{ color: "var(--brand-gold)" }}>
              Авторские маршруты
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-light text-white mb-16">
            Три пути к мегалитам
          </h2>

          <div className="grid lg:grid-cols-3 gap-8">
            {ROUTES.map((route, i) => (
              <div
                key={route.num}
                className="flex flex-col transition-all duration-300 hover:-translate-y-2"
                style={{
                  background: "rgba(64,83,76,0.12)",
                  border: "1px solid rgba(201,168,76,0.12)",
                  borderRadius: "2px",
                }}
              >
                <div className="px-8 py-6 flex items-start justify-between" style={{ borderBottom: "1px solid rgba(201,168,76,0.1)" }}>
                  <span className="font-display text-6xl font-light leading-none" style={{ color: "rgba(201,168,76,0.2)" }}>
                    {route.num}
                  </span>
                  <div
                    className="flex items-center gap-2 px-3 py-1 text-xs font-body uppercase tracking-widest"
                    style={{ background: "rgba(201,168,76,0.1)", color: "var(--brand-gold)", borderRadius: "2px" }}
                  >
                    <Icon name={route.levelIcon} size={12} />
                    {route.level}
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-1">
                  <h3 className="font-display text-2xl text-white mb-2 leading-tight">{route.title}</h3>
                  <div className="flex items-center gap-2 mb-6" style={{ color: "rgba(232,229,215,0.5)" }}>
                    <Icon name="MapPin" size={14} />
                    <span className="font-body text-sm">{route.location}</span>
                  </div>
                  <p className="font-body text-sm leading-relaxed mb-6" style={{ color: "rgba(232,229,215,0.65)" }}>
                    {route.desc}
                  </p>
                  <ul className="space-y-2 mb-8 flex-1">
                    {route.points.map((point) => (
                      <li key={point} className="flex items-start gap-3 font-body text-sm" style={{ color: "rgba(232,229,215,0.7)" }}>
                        <span style={{ color: "var(--brand-gold)", marginTop: "1px", flexShrink: 0 }}>◆</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                  <button
                    className="w-full py-3 text-sm font-body font-medium tracking-wide transition-all duration-300 hover:opacity-90"
                    style={{ background: "var(--brand-gold)", color: "var(--brand-dark)", borderRadius: "2px" }}
                    onClick={() => scrollTo("contacts")}
                  >
                    Записаться на маршрут
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MAP */}
      <section style={{ background: "#0e1a1a" }} className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-12" style={{ background: "var(--brand-gold)" }} />
                <span className="text-xs tracking-[0.4em] uppercase font-body" style={{ color: "var(--brand-gold)" }}>
                  Ареал мегалитов
                </span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-light text-white leading-tight mb-8">
                Карта<br /><em style={{ color: "var(--brand-gold)" }}>дольменных полей</em>
              </h2>
              <p className="font-body text-base leading-relaxed mb-8" style={{ color: "rgba(232,229,215,0.7)" }}>
                Ареал распространения мегалитов охватывает побережье от Таманского полуострова до Абхазии. Наибольшая концентрация — в горных долинах Адыгеи и районе Новороссийска.
              </p>
              <div className="space-y-4">
                {[
                  { icon: "MapPin", label: "Хаджох (Каменномостский)", sub: "Маршрут №1 · Начинающий" },
                  { icon: "MapPin", label: "Хамышки", sub: "Маршрут №2 · Мистический" },
                  { icon: "MapPin", label: "Гузерипль", sub: "Маршрут №3 · Экспертный" },
                ].map((loc) => (
                  <div key={loc.label} className="flex items-center gap-4">
                    <div className="w-8 h-8 flex items-center justify-center flex-shrink-0" style={{ background: "rgba(201,168,76,0.15)", color: "var(--brand-gold)" }}>
                      <Icon name={loc.icon} size={16} />
                    </div>
                    <div>
                      <div className="font-body text-sm text-white">{loc.label}</div>
                      <div className="font-body text-xs" style={{ color: "rgba(232,229,215,0.45)" }}>{loc.sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden" style={{ height: "480px", background: "rgba(64,83,76,0.15)", border: "1px solid rgba(201,168,76,0.12)", borderRadius: "2px" }}>
              <img src={IMG_PANORAMA} alt="Панорама Адыгеи" className="w-full h-full object-cover opacity-40" />
              <div className="absolute inset-0">
                {[
                  { x: "35%", y: "42%", label: "Хаджох", n: "01" },
                  { x: "55%", y: "55%", label: "Хамышки", n: "02" },
                  { x: "68%", y: "45%", label: "Гузерипль", n: "03" },
                ].map((dot) => (
                  <div
                    key={dot.n}
                    className="absolute flex flex-col items-center gap-1"
                    style={{ left: dot.x, top: dot.y, transform: "translate(-50%,-50%)" }}
                  >
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-body font-bold border-2"
                      style={{ background: "var(--brand-gold)", borderColor: "white", color: "var(--brand-dark)" }}
                    >
                      {dot.n}
                    </div>
                    <span
                      className="text-xs font-body whitespace-nowrap px-2 py-0.5"
                      style={{ background: "rgba(26,54,54,0.9)", color: "white", borderRadius: "2px" }}
                    >
                      {dot.label}
                    </span>
                  </div>
                ))}
              </div>
              <div className="absolute bottom-4 right-4 text-xs font-body uppercase tracking-widest" style={{ color: "rgba(201,168,76,0.6)" }}>
                Западный Кавказ · Адыгея
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-24 md:py-32" style={{ background: "var(--brand-dark)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12" style={{ background: "var(--brand-gold)" }} />
            <span className="text-xs tracking-[0.4em] uppercase font-body" style={{ color: "var(--brand-gold)" }}>
              Галерея
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-light text-white mb-16">
            Облик мегалитов
          </h2>

          <div className="grid md:grid-cols-3 gap-4">
            {GALLERY.map((item, i) => (
              <div
                key={i}
                className="relative overflow-hidden group cursor-pointer"
                style={{ borderRadius: "2px", height: "420px" }}
              >
                <img
                  src={item.src}
                  alt={item.caption}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "linear-gradient(to top, rgba(26,54,54,0.9) 0%, transparent 50%)" }}
                >
                  <p className="p-5 font-body text-sm text-white">{item.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRESERVATION */}
      <section style={{ background: "#0e1a1a" }} className="py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="p-10" style={{ border: "1px solid rgba(201,168,76,0.2)", borderRadius: "2px", background: "rgba(64,83,76,0.1)" }}>
            <div className="flex justify-center mb-6">
              <Icon name="Shield" size={32} style={{ color: "var(--brand-gold)" }} />
            </div>
            <h3 className="font-display text-3xl text-white mb-4">Бережный туризм</h3>
            <p className="font-body text-base leading-relaxed mb-4" style={{ color: "rgba(232,229,215,0.7)" }}>
              Дольмены Адыгеи — объекты культурного и исторического наследия под защитой государства. С 1999 года действует программа «Сохранение древних мегалитических сооружений». Потенциал региона как туристического направления реализован лишь частично — это наша ответственность.
            </p>
            <p className="font-body text-sm" style={{ color: "rgba(232,229,215,0.5)" }}>
              Все объекты посещаются только по установленным тропам. Запрещены любые физические воздействия на камень.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-24 md:py-32" style={{ background: "var(--brand-dark)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12" style={{ background: "var(--brand-gold)" }} />
            <span className="text-xs tracking-[0.4em] uppercase font-body" style={{ color: "var(--brand-gold)" }}>
              Контакты
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-light text-white mb-16">
            Запишитесь на экскурсию
          </h2>

          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-body uppercase tracking-widest mb-2" style={{ color: "rgba(232,229,215,0.5)" }}>
                    Ваше имя
                  </label>
                  <input
                    type="text"
                    placeholder="Александр"
                    className="w-full px-4 py-3 font-body text-sm outline-none"
                    style={{ background: "rgba(64,83,76,0.2)", border: "1px solid rgba(201,168,76,0.2)", borderRadius: "2px", color: "var(--brand-light)" }}
                  />
                </div>
                <div>
                  <label className="block text-xs font-body uppercase tracking-widest mb-2" style={{ color: "rgba(232,229,215,0.5)" }}>
                    Телефон
                  </label>
                  <input
                    type="tel"
                    placeholder="+7 (900) 000-00-00"
                    className="w-full px-4 py-3 font-body text-sm outline-none"
                    style={{ background: "rgba(64,83,76,0.2)", border: "1px solid rgba(201,168,76,0.2)", borderRadius: "2px", color: "var(--brand-light)" }}
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-body uppercase tracking-widest mb-2" style={{ color: "rgba(232,229,215,0.5)" }}>
                  Выберите маршрут
                </label>
                <select
                  className="w-full px-4 py-3 font-body text-sm outline-none"
                  style={{ background: "rgba(64,83,76,0.2)", border: "1px solid rgba(201,168,76,0.2)", borderRadius: "2px", color: "var(--brand-light)" }}
                >
                  <option value="" style={{ background: "var(--brand-dark)" }}>— Выберите маршрут —</option>
                  <option style={{ background: "var(--brand-dark)" }}>Маршрут 01: Душа Каменного Леса</option>
                  <option style={{ background: "var(--brand-dark)" }}>Маршрут 02: Тайна Горного Духа</option>
                  <option style={{ background: "var(--brand-dark)" }}>Маршрут 03: В Сердце Заповедника</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-body uppercase tracking-widest mb-2" style={{ color: "rgba(232,229,215,0.5)" }}>
                  Комментарий
                </label>
                <textarea
                  rows={4}
                  placeholder="Количество человек, пожелания..."
                  className="w-full px-4 py-3 font-body text-sm outline-none resize-none"
                  style={{ background: "rgba(64,83,76,0.2)", border: "1px solid rgba(201,168,76,0.2)", borderRadius: "2px", color: "var(--brand-light)" }}
                />
              </div>
              <button
                className="w-full py-4 font-body font-medium text-base tracking-wide transition-all duration-300 hover:opacity-90"
                style={{ background: "var(--brand-gold)", color: "var(--brand-dark)", borderRadius: "2px" }}
              >
                Отправить заявку
              </button>
            </div>

            <div>
              <h3 className="font-display text-2xl text-white mb-8">Туроператоры партнёры</h3>
              <div className="space-y-4">
                {[
                  { name: "ТЕТИС", desc: "Специализированные экскурсии к дольменам, исторические программы", icon: "Building2" },
                  { name: "Энек Тур", desc: "Горный туризм, этнографические маршруты Адыгеи", icon: "TreePine" },
                  { name: "Формула Отдыха", desc: "Комплексные туры: природа, история, активный отдых", icon: "Compass" },
                ].map((op) => (
                  <div
                    key={op.name}
                    className="flex items-start gap-4 p-5 transition-all duration-200 cursor-pointer hover:-translate-y-0.5"
                    style={{ background: "rgba(64,83,76,0.15)", border: "1px solid rgba(201,168,76,0.1)", borderRadius: "2px" }}
                  >
                    <div className="w-10 h-10 flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: "rgba(201,168,76,0.1)", color: "var(--brand-gold)" }}>
                      <Icon name={op.icon} size={18} />
                    </div>
                    <div>
                      <div className="font-display text-lg text-white mb-1">{op.name}</div>
                      <div className="font-body text-sm" style={{ color: "rgba(232,229,215,0.6)" }}>{op.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#0a1515", borderTop: "1px solid rgba(201,168,76,0.1)" }} className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 flex items-center justify-center" style={{ background: "var(--brand-gold)", color: "var(--brand-dark)" }}>
                <span className="font-display font-bold text-base leading-none">◈</span>
              </div>
              <div>
                <span className="font-display font-bold text-white tracking-widest uppercase">Dolmen Adygea</span>
                <span className="ml-2 font-body text-xs" style={{ color: "rgba(232,229,215,0.4)" }}>Цивилизационный туризм</span>
              </div>
            </div>

            <div className="flex gap-8">
              {[
                { label: "О нас", id: "about" },
                { label: "Маршруты", id: "routes" },
                { label: "Галерея", id: "gallery" },
                { label: "Контакты", id: "contacts" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="font-body text-xs uppercase tracking-widest transition-colors hover:text-white"
                  style={{ color: "rgba(232,229,215,0.4)" }}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="font-body text-xs text-center md:text-right" style={{ color: "rgba(232,229,215,0.35)" }}>
              <div>Все объекты — культурное наследие РФ</div>
              <div>© 2024 Dolmen Adygea</div>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}