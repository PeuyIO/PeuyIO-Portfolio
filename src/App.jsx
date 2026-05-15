import {
  FaPython,
  FaReact,
  FaJava,
  FaDocker,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaJs,
} from 'react-icons/fa';

import {
  SiFlask,
  SiPostgresql,
  SiMysql,
  SiTensorflow,
  SiKeras,
} from 'react-icons/si';

export default function PortfolioSite() {
  const projects = [
    {
      title: 'Финансовая панель',
      description:
        'Современная аналитическая платформа для мониторинга финансовых показателей и бизнес‑метрик.',
      image:
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1400&auto=format&fit=crop',
      stack: ['React', 'PostgreSQL', 'Docker'],
    },
    {
      title: 'AI аналитика',
      description:
        'Платформа с интеграцией AI‑инструментов для обработки данных и визуализации аналитики.',
      image:
        'https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1400&auto=format&fit=crop',
      stack: ['Python', 'TensorFlow', 'Flask'],
    },
    {
      title: 'CRM система',
      description:
        'CRM система для автоматизации бизнес‑процессов и управления клиентской базой.',
      image:
        'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1400&auto=format&fit=crop',
      stack: ['JavaScript', 'MySQL', 'Docker'],
    },
    {
      title: 'Telegram бот',
      description:
        'Telegram бот для автоматизации обработки заказов, управления клиентами и уведомлений в реальном времени.',
      image:
        'https://images.unsplash.com/photo-1611746872915-64382b5c76da?q=80&w=1400&auto=format&fit=crop',
      stack: ['Python', 'Telegram API', 'PostgreSQL'],
    },
    {
      title: 'Интернет-магазин',
      description:
        'Полноценная платформа интернет‑магазина с системой заказов и аналитикой.',
      image:
        'https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1400&auto=format&fit=crop',
      stack: ['React', 'Java', 'MySQL'],
    },
    {
      title: 'Админ панель',
      description:
        'Современная административная панель для управления пользователями, аналитикой и внутренними сервисами.',
      image:
        'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1400&auto=format&fit=crop',
      stack: ['Flask', 'Docker', 'PostgreSQL'],
    },
  ];

  const skills = [
    { name: 'Python', icon: FaPython, color: '#3776AB' },
    { name: 'Flask', icon: SiFlask, color: '#FFFFFF' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
    { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
    { name: 'HTML', icon: FaHtml5, color: '#E34F26' },
    { name: 'CSS', icon: FaCss3Alt, color: '#1572B6' },
    { name: 'JavaScript', icon: FaJs, color: '#F7DF1E' },
    { name: 'Java', icon: FaJava, color: '#ED8B00' },
    { name: 'React', icon: FaReact, color: '#61DAFB' },
    { name: 'Git', icon: FaGitAlt, color: '#F05032' },
    { name: 'Docker', icon: FaDocker, color: '#2496ED' },
    { name: 'TensorFlow', icon: SiTensorflow, color: '#FF6F00' },
    { name: 'Keras', icon: SiKeras, color: '#D00000' },
  ];

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <div
      className="min-h-screen text-white font-sans overflow-hidden bg-[radial-gradient(circle_at_top,_#1a1f35_0%,_#0d111d_45%,_#090b12_100%)]"
      style={{ scrollBehavior: 'smooth' }}
    >
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.08),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(139,92,246,0.08),_transparent_30%)]" />

        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.15)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <header className="fixed top-0 left-0 w-full z-50 bg-[#0f1729]/90 border-b border-white/5 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between gap-4">
          <h1 className="text-lg sm:text-2xl font-black tracking-[0.15em] sm:tracking-[0.2em] uppercase bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
            PeuyIO Portfolio
          </h1>

          <nav className="hidden md:flex gap-4 text-sm text-zinc-400">
            {[
              ['about', 'Обо мне'],
              ['projects', 'Проекты'],
              ['skills', 'Навыки'],
              ['contacts', 'Контакты'],
            ].map(([id, label]) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="px-4 py-2 rounded-2xl hover:text-cyan-400 hover:bg-white/5 transition duration-300 cursor-pointer"
              >
                {label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main className="pt-20 sm:pt-24">
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 grid lg:grid-cols-2 gap-8 lg:gap-10 items-center min-h-[90vh]">
          <div>
            <p className="text-cyan-400 uppercase tracking-[0.35em] text-sm mb-4 font-medium">
              Full Stack Developer
            </p>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight mb-6">
              Создаю современные
              <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
                {' '}веб-приложения
              </span>
            </h2>

            <p className="text-zinc-300 text-base sm:text-lg leading-relaxed mb-6 max-w-xl">
              Разрабатываю адаптивные интерфейсы, backend‑системы и современные
              веб‑решения с упором на производительность, стабильность и UX.
            </p>

            <div className="flex gap-5 flex-wrap">
              <button
                onClick={() => scrollToSection('contacts')}
                className="inline-flex items-center justify-center min-w-[160px] px-7 py-3 rounded-2xl bg-gradient-to-r from-cyan-400 to-violet-500 text-black font-semibold hover:scale-105 transition duration-300 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-400/40 cursor-pointer"
              >
                Связаться
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-violet-500/20 blur-3xl opacity-40 rounded-full" />

            <div className="relative bg-[#121826] border border-white/5 rounded-[24px] sm:rounded-[32px] p-5 sm:p-8 shadow-xl">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>

              <div className="space-y-4 text-sm text-zinc-300 font-mono">
                <p>const developer = &#123;</p>
                <p className="pl-4">name: 'Pavel Bulyk',</p>
                <p className="pl-4">experience: '3+ years',</p>
                <p className="pl-4">specialization: 'Full Stack',</p>
                <p className="pl-4">status: 'Open for work'</p>
                <p>&#125;</p>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
          <div className="bg-[#121826] border border-white/5 rounded-[28px] sm:rounded-[40px] p-6 sm:p-10 md:p-14 shadow-xl">
            <div className="relative grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <p className="text-cyan-400 mb-4 uppercase text-sm tracking-[0.3em] font-medium">
                  Обо мне
                </p>

                <h3 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight mb-6">
                  Создаю быстрые,
                  <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
                    {' '}масштабируемые решения
                  </span>
                </h3>

                <div className="w-24 h-1 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500" />
              </div>

              <div className="space-y-5 text-zinc-300 text-base sm:text-lg leading-relaxed">
                <p>
                  Я занимаюсь разработкой современных веб-приложений и backend‑систем,
                  уделяя внимание производительности, безопасности и удобству использования.
                </p>

                <p>
                  Работаю с Python, Flask, Java и SQL‑базами данных,
                  создавая проекты от небольших сервисов до полноценных платформ.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
          <div className="mb-10">
            <p className="text-zinc-500 uppercase text-sm tracking-[0.25em] mb-3">
              Портфолио
            </p>

            <h3 className="text-3xl sm:text-4xl font-bold">Избранные проекты</h3>
          </div>

          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-[#121826] border border-white/5 rounded-[24px] sm:rounded-[30px] p-5 sm:p-6 hover:-translate-y-2 hover:border-cyan-400/20 transition duration-500 group"
              >
                <div className="h-44 sm:h-52 rounded-[20px] sm:rounded-3xl overflow-hidden mb-6 border border-white/10">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />
                </div>

                <h4 className="text-xl sm:text-2xl font-semibold mb-4">
                  {project.title}
                </h4>

                <p className="text-zinc-400 leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.stack.map((item, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full text-sm bg-cyan-500/10 border border-cyan-400/20 text-cyan-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="skills" className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
          <p className="text-zinc-500 uppercase text-sm tracking-[0.25em] mb-3">
            Навыки
          </p>

          <h3 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-10">
            Технологии и инструменты
          </h3>

          <div className="flex flex-wrap gap-3 sm:gap-4">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              const iconColor = skill.color;

              return (
                <div
                  key={index}
                  className="flex items-center gap-3 px-4 sm:px-5 py-2.5 sm:py-3 text-sm sm:text-base rounded-2xl border border-white/5 bg-[#121826] hover:border-cyan-400/20 hover:bg-[#1d2840] transition duration-300"
                >
                  <Icon className="text-lg" style={{ color: iconColor }} />
                  <span>{skill.name}</span>
                </div>
              );
            })}
          </div>
        </section>

        <section id="contacts" className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
          <div className="bg-[#121826] border border-white/5 rounded-[28px] sm:rounded-[36px] p-6 sm:p-10 text-center shadow-xl">
            <p className="text-zinc-500 uppercase text-sm tracking-[0.25em] mb-3">
              Контакты
            </p>

            <h3 className="text-3xl sm:text-4xl font-bold mb-6">
              Готов к новым проектам
            </h3>

            <p className="text-zinc-400 max-w-2xl mx-auto mb-8 text-base sm:text-lg leading-relaxed">
              Если вам нужен современный интерфейс, корпоративная система или
              веб‑приложение — свяжитесь со мной.
            </p>

            <div className="flex flex-wrap justify-center gap-4 text-zinc-300">
              <a
                href="https://t.me/PeuyIO"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center min-w-[220px] px-5 py-3 rounded-2xl bg-[#1a2235] border border-white/5 hover:border-cyan-400/20 hover:bg-[#1d2840] transition duration-300 cursor-pointer"
              >
                Telegram: @PeuyIO
              </a>

              <div className="w-full sm:w-auto px-5 py-3 rounded-2xl bg-[#1a2235] border border-white/5">
                Email: peuyio@gmail.com
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5 py-8 text-center text-zinc-500 text-sm bg-[#0f1729]">
        © 2026 PeuyIO Portfolio. All rights reserved.
      </footer>
    </div>
  );
}
