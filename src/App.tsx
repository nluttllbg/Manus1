import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

type IconName = 'arrow' | 'check' | 'spark' | 'clock' | 'layers' | 'wave' | 'play' | 'plus';

const icons: Record<IconName, string> = {
  arrow: 'M5 12h14M13 6l6 6-6 6',
  check: 'M5 12.5 9.2 17 19 7',
  spark: 'M12 3v4M12 17v4M3 12h4M17 12h4M5.64 5.64l2.83 2.83M15.53 15.53l2.83 2.83M18.36 5.64l-2.83 2.83M8.47 15.53l-2.83 2.83',
  clock: 'M12 7v5l3 2M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z',
  layers: 'm12 3 8 4.5-8 4.5-8-4.5L12 3Zm-8 9 8 4.5 8-4.5M4 16.5l8 4.5 8-4.5',
  wave: 'M3 12c2-7 4-7 6 0s4 7 6 0 4-7 6 0',
  play: 'm9 6 8 6-8 6V6Z',
  plus: 'M12 5v14M5 12h14',
};

function Icon({ name, size = 18 }: { name: IconName; size?: number }) {
  return (
    <svg aria-hidden="true" className="icon" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d={icons[name]} />
    </svg>
  );
}

const ease = [0.22, 1, 0.36, 1] as const;
const rise = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '-80px' }, transition: { duration: 0.7, ease } };

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activePlan, setActivePlan] = useState<'weekly' | 'daily'>('weekly');

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <nav className="nav shell">
        <a className="brand" href="#top" aria-label="Lumina, início" onClick={closeMenu}>
          <span className="brand-mark"><span /></span>
          <span>Lumina</span>
        </a>
        <button className="menu-toggle" aria-label="Abrir menu" aria-expanded={menuOpen} onClick={() => setMenuOpen((value) => !value)}>
          <span /><span />
        </button>
        <div className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
          <a href="#produto" onClick={closeMenu}>Produto</a>
          <a href="#metodo" onClick={closeMenu}>Método</a>
          <a href="#historias" onClick={closeMenu}>Histórias</a>
          <a href="#precos" onClick={closeMenu}>Preços</a>
          <a className="nav-login" href="#precos" onClick={closeMenu}>Entrar</a>
          <a className="button button-small button-light" href="#precos" onClick={closeMenu}>Começar agora <Icon name="arrow" size={15} /></a>
        </div>
      </nav>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <motion.div {...rise} className="eyebrow"><span className="eyebrow-dot" /> O espaço entre intenção e ação</motion.div>
          <motion.h1 {...rise} transition={{ ...rise.transition, delay: 0.08 }}>Seu melhor trabalho começa <em>antes</em> da primeira tarefa.</motion.h1>
          <motion.p {...rise} transition={{ ...rise.transition, delay: 0.16 }}>Lumina organiza o que importa, protege seu foco e transforma planos soltos em progresso que dá para sentir.</motion.p>
          <motion.div {...rise} transition={{ ...rise.transition, delay: 0.24 }} className="hero-actions">
            <a className="button button-primary" href="#precos">Encontrar meu ritmo <Icon name="arrow" size={16} /></a>
            <a className="text-link" href="#produto"><span className="play-icon"><Icon name="play" size={13} /></span> Ver como funciona</a>
          </motion.div>
          <motion.div {...rise} transition={{ ...rise.transition, delay: 0.32 }} className="hero-note"><span className="avatar-stack"><i>AM</i><i>LS</i><i>JP</i></span><span>Mais de 12 mil pessoas encontraram seu ritmo</span></motion.div>
        </div>

        <motion.div className="hero-art" initial={{ opacity: 0, scale: 0.96, y: 22 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 1, delay: 0.2, ease }}>
          <div className="ambient-orb orb-one" /><div className="ambient-orb orb-two" />
          <div className="dashboard-card">
            <div className="dash-topline"><div className="mini-brand"><span className="brand-mark small"><span /></span> lumina</div><span className="dash-date">terça, 24 set <span className="online-dot" /></span></div>
            <div className="dash-heading"><div><span className="dash-kicker">Seu foco de hoje</span><h2>Uma coisa de cada vez.</h2></div><button className="icon-button" aria-label="Adicionar tarefa"><Icon name="plus" size={17} /></button></div>
            <div className="focus-progress"><div className="progress-line"><span style={{ width: '68%' }} /></div><div className="progress-meta"><span>68% do seu dia protegido</span><strong>4h 06m</strong></div></div>
            <div className="task-list">
              <div className="task task-done"><span className="task-check"><Icon name="check" size={13} /></span><span>Rascunhar a apresentação</span><small>09:00</small></div>
              <div className="task task-active"><span className="task-check active"><span /></span><span><b>Bloco de criação</b><small>Em foco agora</small></span><small>02:14</small></div>
              <div className="task"><span className="task-check" /><span>Revisar e compartilhar</span><small>14:30</small></div>
            </div>
            <div className="dash-footer"><span><Icon name="wave" size={17} /> modo profundo</span><span className="dash-footer-value">sem notificações <i /></span></div>
          </div>
          <div className="floating-card floating-streak"><span className="streak-icon"><Icon name="spark" size={16} /></span><span><b>7 dias</b><small>no seu ritmo</small></span></div>
          <div className="floating-card floating-time"><span className="time-icon"><Icon name="clock" size={16} /></span><span><b>+ 1h 24m</b><small>de foco recuperado</small></span></div>
        </motion.div>
      </section>

      <section className="trust-row shell"><span>Feito para quem faz</span><div className="trust-logos"><strong>paper<span>plane</span></strong><strong>MONO<span>type</span></strong><strong className="trust-serif">nordic.</strong><strong className="trust-mono">studio/one</strong></div></section>

      <section className="section section-product shell" id="produto">
        <motion.div {...rise} className="section-heading"><div><span className="eyebrow">Menos ruído. Mais presença.</span><h2>Planejamento que <em>respeita</em> seu cérebro.</h2></div><p>Em vez de cobrar mais disciplina, Lumina cria as condições para que o trabalho bom aconteça — com clareza, contexto e espaço.</p></motion.div>
        <div className="feature-grid">
          <motion.article {...rise} transition={{ ...rise.transition, delay: 0.05 }} className="feature-card feature-highlight"><span className="feature-number">01</span><div className="feature-visual feature-focus"><div className="focus-ring"><span>42</span><small>min</small></div><span className="visual-label">foco profundo</span></div><h3>Encontre seu estado de fluxo</h3><p>Blocos que se adaptam à sua energia, não o contrário. Comece pequeno. Vá longe.</p><a href="#metodo" className="feature-link">Descobrir o foco <Icon name="arrow" size={15} /></a></motion.article>
          <motion.article {...rise} transition={{ ...rise.transition, delay: 0.12 }} className="feature-card"><span className="feature-number">02</span><div className="feature-visual feature-map"><span className="map-line line-one" /><span className="map-line line-two" /><span className="map-node node-one">hoje</span><span className="map-node node-two">depois</span><span className="map-node node-three">feito</span></div><h3>Veja o caminho, não só a lista</h3><p>Conecte tarefas ao que está tentando construir e deixe o próximo passo evidente.</p><a href="#metodo" className="feature-link">Ver meu caminho <Icon name="arrow" size={15} /></a></motion.article>
          <motion.article {...rise} transition={{ ...rise.transition, delay: 0.19 }} className="feature-card"><span className="feature-number">03</span><div className="feature-visual feature-breathe"><div className="breathe-ring ring-outer" /><div className="breathe-ring ring-mid" /><div className="breathe-core"><Icon name="wave" size={25} /></div></div><h3>Termine o dia inteiro</h3><p>Feche ciclos com leveza. O que não coube hoje já sabe onde esperar por você.</p><a href="#metodo" className="feature-link">Conhecer o ritual <Icon name="arrow" size={15} /></a></motion.article>
        </div>
      </section>

      <section className="section method-section" id="metodo">
        <div className="shell method-wrap"><motion.div {...rise} className="method-intro"><span className="eyebrow">Um método que cabe na vida real</span><h2>Do primeiro café ao último <em>check.</em></h2><p>Três gestos simples para transformar intenção em uma semana que parece sua.</p><a className="button button-ghost" href="#precos">Experimentar o método <Icon name="arrow" size={16} /></a></motion.div><div className="method-steps"><motion.div {...rise} transition={{ ...rise.transition, delay: 0.08 }} className="method-step"><span className="step-count">1</span><div><h3>Escolha o essencial</h3><p>Uma prioridade que dá direção ao resto, sem transformar seu dia em uma planilha.</p></div><span className="step-icon"><Icon name="spark" size={19} /></span></motion.div><motion.div {...rise} transition={{ ...rise.transition, delay: 0.16 }} className="method-step"><span className="step-count">2</span><div><h3>Dê um começo ao tempo</h3><p>Defina um bloco possível e deixe o ambiente cuidar do que tenta te interromper.</p></div><span className="step-icon"><Icon name="clock" size={19} /></span></motion.div><motion.div {...rise} transition={{ ...rise.transition, delay: 0.24 }} className="method-step"><span className="step-count">3</span><div><h3>Deixe o progresso falar</h3><p>Termine sabendo o que andou — e sem carregar para amanhã o peso de hoje.</p></div><span className="step-icon"><Icon name="check" size={19} /></span></motion.div></div></div>
      </section>

      <section className="section story-section shell" id="historias"><motion.div {...rise} className="quote-mark">“</motion.div><motion.blockquote {...rise} transition={{ ...rise.transition, delay: 0.08 }}>Eu parei de tentar vencer o dia. Comecei a <em>habitar</em> melhor cada parte dele.</motion.blockquote><motion.div {...rise} transition={{ ...rise.transition, delay: 0.16 }} className="quote-author"><span className="author-avatar">MR</span><span><strong>Marina Rios</strong><small>Diretora criativa, São Paulo</small></span><span className="quote-rule" /><span className="quote-result"><strong>+ 31%</strong><small>mais projetos terminados</small></span></motion.div></section>

      <section className="pricing-section" id="precos"><div className="shell pricing-wrap"><motion.div {...rise} className="pricing-copy"><span className="eyebrow">Comece no seu tempo</span><h2>O próximo passo pode ser <em>leve.</em></h2><p>Sete dias para experimentar o que muda quando o foco deixa de ser cobrança e vira espaço.</p><div className="pricing-tabs"><button className={activePlan === 'weekly' ? 'active' : ''} onClick={() => setActivePlan('weekly')}>Plano anual <span>economize 30%</span></button><button className={activePlan === 'daily' ? 'active' : ''} onClick={() => setActivePlan('daily')}>Plano mensal</button></div><div className="price-row"><span className="price">{activePlan === 'weekly' ? 'R$ 19' : 'R$ 29'}<small>/mês</small></span><span className="price-note">7 dias grátis<br />cancele quando quiser</span></div><a className="button button-primary" href="#top">Começar meus 7 dias <Icon name="arrow" size={16} /></a></motion.div><motion.div {...rise} transition={{ ...rise.transition, delay: 0.12 }} className="pricing-side"><div className="side-orbit orbit-a" /><div className="side-orbit orbit-b" /><div className="side-glow" /><div className="side-card"><span className="side-card-icon"><Icon name="layers" size={20} /></span><span><strong>Seu espaço, do seu jeito.</strong><small>Funciona com a sua rotina — não contra ela.</small></span></div><div className="side-word">lumina<span>.</span></div></motion.div></div></section>

      <footer className="footer shell"><a className="brand" href="#top"><span className="brand-mark"><span /></span><span>Lumina</span></a><span>Feito para fazer melhor.</span><div className="footer-links"><a href="#produto">Produto</a><a href="#metodo">Método</a><a href="#precos">Privacidade</a></div></footer>
      <AnimatePresence>{menuOpen && <motion.div className="mobile-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={closeMenu} />}</AnimatePresence>
    </main>
  );
}

export default App;
