import { useEffect, useState } from 'react'
import {
  ArrowDownRight, ArrowUpRight, Asterisk, Github, Linkedin,
  Mail, Menu, Moon, Sun, X, ExternalLink, ShieldCheck,
  Database, Network, LockKeyhole, FileCheck2, Radar, Boxes
} from 'lucide-react'
import { motion } from 'motion/react'

const projects = [
  {
    number: '01',
    title: 'RiskForge',
    kicker: 'FLAGSHIP / RISK INTELLIGENCE',
    description:
      'A data-driven risk analysis platform for finance organizations to identify, evaluate, monitor, visualize and predict financial and cybersecurity risk.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Prisma', 'Docker', 'JWT', 'MFA'],
    featured: true,
  },
  {
    number: '02',
    title: 'AshaPlus',
    kicker: 'HEALTH / COMMUNITY',
    description: 'A platform concept designed to connect doctors and ASHA workers through centralized workflows.',
    tags: ['Dashboard', 'Admin', 'Healthcare'],
  },
  {
    number: '03',
    title: 'KAVACH',
    kicker: 'EMERGENCY / CONNECTIVITY',
    description: 'A silent emergency communication concept using Bluetooth and SMS with minimal dependence on internet connectivity.',
    tags: ['Bluetooth', 'SMS', 'Emergency'],
  },
]

const skillGroups = [
  {
    title: 'CYBERSECURITY',
    items: ['Cybersecurity', 'Ethical Hacking', 'Network Security', 'Vulnerability Management', 'Security Operations', 'Threat Detection', 'Incident Response', 'IAM', 'Authentication', 'Authorization', 'Security Controls'],
  },
  {
    title: 'GRC',
    items: ['Governance', 'Risk Management', 'Compliance', 'Risk Assessment', 'Security Controls', 'Audit Concepts', 'Policy', 'Cyber Risk', 'IT Risk', 'Security Governance'],
  },
  {
    title: 'DATA',
    items: ['Data Analytics', 'Data Visualization', 'Risk Analytics', 'Predictive Analytics'],
  },
  {
    title: 'DEVELOPMENT',
    items: ['JavaScript', 'React', 'Vite', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'Prisma', 'REST APIs'],
  },
  {
    title: 'INFRASTRUCTURE',
    items: ['Docker', 'Git', 'GitHub', 'Linux', 'Windows', 'Networking', 'Databases'],
  },
]

function SectionLabel({ number, children }: { number: string; children: React.ReactNode }) {
  return (
    <div className="section-label">
      <span>{number}</span>
      <Asterisk size={17} strokeWidth={2.5} />
      <span>{children}</span>
    </div>
  )
}


type RiskRecord = {
  id: string
  title: string
  category: string
  owner: string
  control: string
  treatment: string
  likelihood: number
  impact: number
  residualLikelihood: number
  residualImpact: number
}

const starterRisks: RiskRecord[] = [
  { id: 'R-01', title: 'Sensitive data exposed through misconfigured sharing', category: 'Data protection', owner: 'Data owner', control: 'Sharing restrictions, DLP rules and access reviews', treatment: 'Mitigate', likelihood: 4, impact: 5, residualLikelihood: 2, residualImpact: 4 },
  { id: 'R-02', title: 'Privileged account compromise', category: 'Identity & access', owner: 'IT security', control: 'MFA, privileged access reviews and sign-in monitoring', treatment: 'Mitigate', likelihood: 3, impact: 5, residualLikelihood: 2, residualImpact: 3 },
  { id: 'R-03', title: 'Critical patching falls behind schedule', category: 'Vulnerability management', owner: 'Infrastructure', control: 'Asset inventory, patch SLAs and exception tracking', treatment: 'Mitigate', likelihood: 4, impact: 4, residualLikelihood: 2, residualImpact: 3 },
  { id: 'R-04', title: 'Third-party service outage affects operations', category: 'Third-party risk', owner: 'Service owner', control: 'Vendor due diligence, SLA review and continuity testing', treatment: 'Mitigate', likelihood: 3, impact: 4, residualLikelihood: 2, residualImpact: 3 },
  { id: 'R-05', title: 'Security awareness gaps lead to phishing exposure', category: 'People & process', owner: 'HR / security', control: 'Awareness training and phishing simulations', treatment: 'Mitigate', likelihood: 4, impact: 3, residualLikelihood: 2, residualImpact: 2 },
]

function scoreBand(score: number) {
  if (score >= 15) return 'critical'
  if (score >= 10) return 'high'
  if (score >= 5) return 'moderate'
  return 'low'
}

function RiskPlayground() {
  const [risks, setRisks] = useState<RiskRecord[]>(starterRisks)
  const [showResidual, setShowResidual] = useState(false)
  const [filter, setFilter] = useState('All')
  const updateRisk = (id: string, field: keyof RiskRecord, value: string | number) => {
    setRisks(current => current.map(risk => risk.id === id ? { ...risk, [field]: value } : risk))
  }
  const score = (likelihood: number, impact: number) => likelihood * impact
  const visibleRisks = risks.filter(risk => filter === 'All' || scoreBand(score(risk.likelihood, risk.impact)) === filter.toLowerCase())
  const total = risks.length
  const critical = risks.filter(risk => score(risk.likelihood, risk.impact) >= 15).length
  const average = Math.round(risks.reduce((sum, risk) => sum + score(risk.likelihood, risk.impact), 0) / total)
  const labels = ['Rare', 'Unlikely', 'Possible', 'Likely', 'Almost certain']
  const impactLabels = ['Negligible', 'Minor', 'Moderate', 'Major', 'Severe']
  return (
    <section id="risk-register" className="risk-playground section paper">
      <SectionLabel number="07A">INTERACTIVE GRC PLAYGROUND</SectionLabel>
      <div className="section-head playground-head">
        <h2 className="display">MAKE RISK<br /><em>VISIBLE.</em></h2>
        <div>
          <p className="section-note">Explore a fictional risk register. Adjust likelihood and impact to see inherent scores and the risk distribution change. This is a learning demo, not an audit or assessment of a real organization.</p>
          <div className="playground-actions">
            <button className="playground-reset" onClick={() => { setRisks(starterRisks); setShowResidual(false); setFilter('All') }}>Reset example</button>
            <button className="playground-toggle" onClick={() => setShowResidual(!showResidual)}>{showResidual ? 'Hide residual view −' : 'Compare residual risk +'}</button>
          </div>
        </div>
      </div>
      <div className="risk-kpis">
        <article><span>EXAMPLE RISKS</span><strong>{total.toString().padStart(2, '0')}</strong><small>Fictional records</small></article>
        <article><span>CRITICAL / INHERENT</span><strong>{critical.toString().padStart(2, '0')}</strong><small>Scores of 15–25</small></article>
        <article><span>AVERAGE SCORE</span><strong>{average}<i>/25</i></strong><small>Likelihood × impact</small></article>
      </div>
      <div className="risk-matrix-layout">
        <div className="risk-matrix-panel">
          <div className="playground-subhead"><h3>INHERENT RISK MATRIX</h3><span>5 × 5 / LIKELIHOOD × IMPACT</span></div>
          <div className="risk-matrix" role="img" aria-label="Risk heatmap showing the count of risks by likelihood and impact">
            <div className="matrix-axis">LIKELIHOOD ↑</div>
            {Array.from({ length: 5 }, (_, row) => {
              const likelihood = 5 - row
              return <div className="matrix-row" key={likelihood}>
                <span className="matrix-y">{likelihood}</span>
                {Array.from({ length: 5 }, (_, col) => {
                  const impact = col + 1
                  const count = risks.filter(risk => risk.likelihood === likelihood && risk.impact === impact).length
                  return <div key={impact} className={`matrix-cell ${scoreBand(likelihood * impact)} ${count ? 'has-risk' : ''}`} title={`Likelihood ${likelihood}, impact ${impact}: ${count} risk(s)`}>
                    {count || ''}
                  </div>
                })}
              </div>
            })}
            <div className="matrix-x"><span>1</span><span>2</span><span>3</span><span>4</span><span>5</span></div>
            <div className="matrix-foot">IMPACT →</div>
          </div>
          <div className="risk-legend"><span><i className="low" />Low 1–4</span><span><i className="moderate" />Moderate 5–9</span><span><i className="high" />High 10–14</span><span><i className="critical" />Critical 15–25</span></div>
        </div>
        <div className="risk-method">
          <span className="mono">SCORING METHOD</span>
          <h3>Simple. Transparent. Repeatable.</h3>
          <p>Inherent score = likelihood × impact, each rated from 1 to 5. Use the score as a prioritization aid, not a substitute for context or professional judgment.</p>
          <div className="method-line"><span>01</span><div><b>Identify</b><small>Describe a plausible risk event.</small></div></div>
          <div className="method-line"><span>02</span><div><b>Evaluate</b><small>Rate likelihood and business impact.</small></div></div>
          <div className="method-line"><span>03</span><div><b>Treat & monitor</b><small>Assign ownership and track controls.</small></div></div>
        </div>
      </div>
      <div className="register-toolbar">
        <div><h3>RISK REGISTER</h3><p>Change the ratings inline; scores and heatmap update immediately.</p></div>
        <label>Filter inherent risk
          <select value={filter} onChange={event => setFilter(event.target.value)}>
            {['All', 'Critical', 'High', 'Moderate', 'Low'].map(option => <option key={option} value={option}>{option}</option>)}
          </select>
        </label>
      </div>
      <div className="register-table-wrap">
        <table className="register-table"><caption className="sr-only">Fictional cybersecurity risk register with editable ratings and treatment options</caption>
          <thead><tr><th>ID / RISK</th><th>OWNER / CATEGORY</th><th>LIKELIHOOD</th><th>IMPACT</th><th>INHERENT</th><th>KEY CONTROL</th><th>TREATMENT</th>{showResidual && <><th>RESIDUAL L × I</th><th>RESIDUAL</th></>}</tr></thead>
          <tbody>
            {visibleRisks.map(risk => {
              const inherent = score(risk.likelihood, risk.impact)
              const residual = score(risk.residualLikelihood, risk.residualImpact)
              return <tr key={risk.id}>
                <td><b className="risk-id">{risk.id}</b><strong className="risk-name">{risk.title}</strong><small>{risk.category}</small></td>
                <td><span className="risk-owner">{risk.owner}</span></td>
                <td><label className="sr-only" htmlFor={`${risk.id}-likelihood`}>Likelihood for {risk.id}</label><select id={`${risk.id}-likelihood`} value={risk.likelihood} onChange={event => updateRisk(risk.id, 'likelihood', Number(event.target.value))}>{labels.map((label, i) => <option key={label} value={i + 1}>{i + 1} · {label}</option>)}</select></td>
                <td><label className="sr-only" htmlFor={`${risk.id}-impact`}>Impact for {risk.id}</label><select id={`${risk.id}-impact`} value={risk.impact} onChange={event => updateRisk(risk.id, 'impact', Number(event.target.value))}>{impactLabels.map((label, i) => <option key={label} value={i + 1}>{i + 1} · {label}</option>)}</select></td>
                <td><span className={`score-pill ${scoreBand(inherent)}`}>{inherent}<small>/25</small></span></td>
                <td className="control-cell">{risk.control}</td>
                <td><label className="sr-only" htmlFor={`${risk.id}-treatment`}>Treatment for {risk.id}</label><select id={`${risk.id}-treatment`} value={risk.treatment} onChange={event => updateRisk(risk.id, 'treatment', event.target.value)}>{['Mitigate', 'Avoid', 'Transfer', 'Accept'].map(option => <option key={option}>{option}</option>)}</select></td>
                {showResidual && <><td><label className="sr-only" htmlFor={`${risk.id}-residual-likelihood`}>Residual likelihood for {risk.id}</label><select id={`${risk.id}-residual-likelihood`} value={risk.residualLikelihood} onChange={event => updateRisk(risk.id, 'residualLikelihood', Number(event.target.value))}>{labels.map((label, i) => <option key={label} value={i + 1}>{i + 1} · {label}</option>)}</select><label className="sr-only" htmlFor={`${risk.id}-residual-impact`}>Residual impact for {risk.id}</label><select id={`${risk.id}-residual-impact`} value={risk.residualImpact} onChange={event => updateRisk(risk.id, 'residualImpact', Number(event.target.value))}>{impactLabels.map((label, i) => <option key={label} value={i + 1}>{i + 1} · {label}</option>)}</select></td><td><span className={`score-pill ${scoreBand(residual)}`}>{residual}<small>/25</small></span></td></>}
              </tr>
            })}
          </tbody>
        </table>
        {visibleRisks.length === 0 && <p className="empty-register">No risks in this band. Try another filter.</p>}
      </div>
      <p className="playground-disclaimer"><ShieldCheck size={16} /> DEMONSTRATION DATA ONLY · Scores are illustrative. Control effectiveness, risk appetite, impact scales and acceptance thresholds should be defined by each organization.</p>
    </section>
  )
}


function App() {
  const [dark, setDark] = useState(false)
  const [menu, setMenu] = useState(false)

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? 'dark' : 'light'
  }, [dark])

  const close = () => setMenu(false)

  return (
    <div className="site">
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <header className="nav">
        <a href="#home" className="brand" onClick={close}>HN<span>.</span></a>

        <nav id="primary-navigation" aria-label="Primary navigation" className={menu ? 'nav-links open' : 'nav-links'}>
          {[
            ['about', 'About'],
            ['experience', 'Experience'],
            ['work', 'Work'],
            ['capabilities', 'Capabilities'],
            ['grc', 'GRC'],
            ['risk-register', 'Risk Lab'],
            ['journey', 'Journey'],
          ].map(([id, label]) => (
            <a key={id} href={`#${id}`} onClick={close}>{label}</a>
          ))}
          <a href="#contact" onClick={close}>Contact</a>
        </nav>

        <div className="nav-actions">
          <button type="button" className="icon-btn" aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'} aria-pressed={dark} onClick={() => setDark(!dark)}>
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a className="resume-btn" href="/hyzam-nazar-portfolio/Hyzam-Nazar-Resume.pdf" target="_blank" rel="noreferrer">Resume ↗</a>
          <button type="button" className="menu-btn" aria-label={menu ? 'Close navigation menu' : 'Open navigation menu'} aria-controls="primary-navigation" aria-expanded={menu} onClick={() => setMenu(!menu)}>
            {menu ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <main id="main-content">
        <section id="home" className="hero">
          <div className="hero-top">
            <p className="eyebrow">CYBERSECURITY / RISK / GRC / DATA</p>
            <p className="edition">PORTFOLIO — 2026</p>
          </div>

          <div className="hero-title">
            <div className="hero-word">HYZAM</div>
            <div className="hero-word offset">NAZAR<span className="dot">.</span></div>
          </div>

          <div className="hero-art">
            <div className="red-orbit orbit-a" />
            <div className="red-orbit orbit-b" />
            <div className="network">
              <span className="node n1" /><span className="node n2" />
              <span className="node n3" /><span className="node n4" />
              <i className="line l1" /><i className="line l2" /><i className="line l3" />
            </div>
            <div className="portrait-placeholder">
              <img
                src="/hyzam-nazar-portfolio/Hyzam.jpeg"
                alt="Hyzam Nazar"
                className="portrait-image"
              />
            </div>
            <div className="hero-symbol"><Asterisk size={68} /></div>
          </div>

          <div className="hero-bottom">
            <div className="hero-copy">
              <p className="mono">01 / PROFILE</p>
              <h2>FROM TECHNICAL<br /><em>SECURITY</em> TO<br />STRATEGIC RISK.</h2>
              <p>
                Cybersecurity graduate focused on security operations, risk management,
                governance and data-driven security.
              </p>
              <a className="text-link" href="#work">Explore selected work <ArrowDownRight size={18} /></a>
            </div>
            <div className="hero-stamp">
              <span>SECURITY</span>
              <span>RISK</span>
              <span>GOVERNANCE</span>
              <span>RESILIENCE</span>
            </div>
          </div>
        </section>

        <section id="about" className="red-section">
          <div className="giant-num">02</div>
          <SectionLabel number="02">ABOUT / PHILOSOPHY</SectionLabel>
          <div className="split">
            <h2 className="display white">SECURITY IS<br /><span>MORE THAN</span><br />TECHNOLOGY.</h2>
            <div className="copy white-copy">
              <p className="lead">
                Cybersecurity exists at the intersection of people, technology, risk and business.
              </p>
              <p>
                Hyzam Nazar is a cybersecurity graduate with a multidisciplinary background in
                cybersecurity, ethical hacking and data analytics. His career direction is centered
                on connecting technical security with risk management, governance and business resilience.
              </p>
              <div className="arrow-chain">
                <span>TECHNICAL SECURITY</span><ArrowUpRight /><span>RISK INTELLIGENCE</span>
                <ArrowUpRight /><span>GOVERNANCE</span><ArrowUpRight /><span>RESILIENCE</span>
              </div>
            </div>
          </div>
          <div className="scribble">01—04</div>
        </section>

        <section id="experience" className="section paper">
          <SectionLabel number="03">EXPERIENCE</SectionLabel>
          <div className="section-head">
            <h2 className="display">FIELD<br /><em>EXPERIENCE</em></h2>
            <p className="section-note">A developing security practice, built through internships, projects and continuous learning.</p>
          </div>

          <article className="experience-card">
            <div className="exp-number">01</div>
            <div className="exp-main">
              <p className="mono">FEB — MAR 2026</p>
              <h3>XENCIA</h3>
              <h4>SecOps Intern / Microsoft Purview Team</h4>
              <p>
                Exposure to security operations and the Microsoft Purview ecosystem, with focus areas
                including information protection, data security, compliance and security controls.
              </p>
              <div className="tag-row">
                {['Security Operations', 'Microsoft Purview', 'Information Protection', 'Data Security', 'Compliance'].map(t => <span key={t}>{t}</span>)}
              </div>
            </div>
            <div className="exp-side">
              <ShieldCheck size={34} />
              <span>SECURITY<br />OPERATIONS</span>
            </div>
          </article>

        </section>

        <section id="work" className="work-section">
          <div className="work-head">
            <SectionLabel number="04">SELECTED WORK</SectionLabel>
            <h2 className="display">BUILT TO<br /><em>UNDERSTAND.</em></h2>
          </div>

          <div className="projects">
            {projects.map((project, i) => (
              <motion.article
                key={project.number}
                className={`project ${project.featured ? 'featured' : ''}`}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: i * 0.04 }}
              >
                <div className="project-visual">
                  <span className="project-no">{project.number}</span>
                  {project.featured ? (
                    <>
                      <div className="risk-word">RISK</div>
                      <div className="forge-word">FORGE</div>
                      <div className="mini-dashboard">
                        <div><span>RISK</span><b>72</b></div>
                        <div><span>CONTROL</span><b>84%</b></div>
                        <div><span>VULN.</span><b>03</b></div>
                      </div>
                    </>
                  ) : (
                    <div className="project-glyph">
                      {project.number === '02' ? <Radar /> :
                       project.number === '03' ? <Database /> :
                       project.number === '04' ? <Boxes /> : <Network />}
                    </div>
                  )}
                </div>
                <div className="project-info">
                  <p className="mono">{project.kicker}</p>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tag-row">
                    {project.tags.map(t => <span key={t}>{t}</span>)}
                  </div>
                  {project.featured && <a href="#riskforge" className="text-link">Open case study <ArrowUpRight size={18} /></a>}
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="riskforge" className="case-study red-section">
          <SectionLabel number="05">RISKFORGE / CASE STUDY</SectionLabel>
          <div className="case-title">
            <h2>FORGING<br /><em>CLARITY</em><br />FROM RISK.</h2>
            <div className="case-meta">
              <p>DATA-DRIVEN RISK INTELLIGENCE PLATFORM</p>
              <p>FINANCE × CYBER × ANALYTICS</p>
            </div>
          </div>

          <div className="risk-grid">
            <div className="risk-card large">
              <span className="mono">THE PROBLEM</span>
              <h3>Complex risk needs a common language.</h3>
              <p>Financial, cyber, compliance and operational signals can become fragmented. RiskForge brings those signals into a centralized intelligence interface.</p>
            </div>
            <div className="risk-card">
              <span className="mono">FINANCIAL RISK</span>
              <h3>CREDIT<br />MARKET<br />LIQUIDITY</h3>
            </div>
            <div className="risk-card">
              <span className="mono">CYBER / IT RISK</span>
              <h3>VULNERABILITIES<br />THREATS<br />COMPLIANCE</h3>
            </div>
          </div>

          <div className="architecture">
            {['USER', 'AUTH + MFA', 'FRONTEND', 'API', 'BUSINESS LOGIC', 'RISK ENGINE', 'POSTGRESQL', 'ANALYTICS'].map((x, i) => (
              <div className="arch-node" key={x}>
                <span>{String(i + 1).padStart(2, '0')}</span>
                <b>{x}</b>
                {i < 7 && <ArrowDownRight />}
              </div>
            ))}
          </div>

          <div className="tech-strip">
            {['React', 'Vite', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'Prisma', 'JWT', 'MFA', 'Docker'].map(x => <span key={x}>{x}</span>)}
          </div>
        </section>

        <section id="capabilities" className="section paper">
          <SectionLabel number="06">CAPABILITIES</SectionLabel>
          <div className="cap-grid">
            {skillGroups.map((group, i) => (
              <article className={`skill-group ${i === 0 ? 'wide' : ''}`} key={group.title}>
                <div className="skill-head"><span>{String(i + 1).padStart(2, '0')}</span><h3>{group.title}</h3></div>
                <div className="skills">{group.items.map(item => <span key={item}>{item}</span>)}</div>
              </article>
            ))}
          </div>
        </section>

        <RiskPlayground />

        <section id="grc" className="grc-section">
          <div className="giant-num">07</div>
          <SectionLabel number="07">GRC / THE DIRECTION</SectionLabel>
          <div className="grc-layout">
            <h2 className="display">WHERE<br /><em>TECHNOLOGY</em><br />MEETS RISK.</h2>
            <div className="grc-flow">
              {['THREATS', 'VULNERABILITIES', 'RISK', 'CONTROLS', 'COMPLIANCE', 'GOVERNANCE', 'RESILIENCE'].map((x, i) => (
                <div key={x} className="flow-row">
                  <span>0{i + 1}</span><b>{x}</b>{i < 6 && <ArrowDownRight size={20} />}
                </div>
              ))}
            </div>
          </div>
          <p className="grc-note">
            Long-term direction: build from technical security and security operations toward
            GRC, security risk, governance and eventually security leadership.
          </p>
        </section>

        <section id="lab" className="section lab-section">
          <SectionLabel number="08">THE LAB</SectionLabel>
          <div className="section-head">
            <h2 className="display">LEARN.<br />BREAK.<br /><em>SECURE.</em></h2>
            <p className="section-note">A conceptual personal security environment for developing hands-on capability across offensive, defensive and governance domains.</p>
          </div>
          <div className="lab-grid">
            <article><LockKeyhole /><span>01 / BLUE TEAM</span><h3>DETECT</h3><p>SIEM · Logs · Detection · Incident Response · Monitoring</p></article>
            <article><Radar /><span>02 / RED TEAM</span><h3>TEST</h3><p>Vulnerability Assessment · Web Security · Network Security · Labs</p></article>
            <article><FileCheck2 /><span>03 / GRC</span><h3>GOVERN</h3><p>Risk Registers · Policies · Control Mapping · Audit Simulations</p></article>
            <article><Network /><span>04 / INFRA</span><h3>BUILD</h3><p>Linux · Windows · Docker · Virtualization · Networking · Databases</p></article>
          </div>
          <p className="disclaimer mono">CONCEPTUAL LEARNING ENVIRONMENT — NOT A CLAIM OF CURRENT PROFESSIONAL INFRASTRUCTURE.</p>
        </section>

        <section id="journey" className="journey-section red-section">
          <SectionLabel number="09">EDUCATION / JOURNEY</SectionLabel>
          <div className="education">
            <p className="mono">BSC / COMPLETED</p>
            <h2>BSc IN<br />CYBERSECURITY,<br /><em>ETHICAL HACKING</em><br />& DATA ANALYTICS</h2>
            <p>Yenepoya Institute of Arts, Science, Commerce and Management · Mangalore</p>
            <div className="education-tags">
              {['Cybersecurity', 'Ethical Hacking', 'Data Analytics', 'Information Security', 'Networking', 'Risk', 'Data-driven Security'].map(x => <span key={x}>{x}</span>)}
            </div>
          </div>

          <div className="career-path">
            {[
              ['01', 'CYBERSECURITY', 'GRADUATE'],
              ['02', 'CYBERSECURITY', 'ENGINEER / SOC'],
              ['03', 'GRC', 'ANALYST'],
              ['04', 'SECURITY RISK /', 'GOVERNANCE'],
              ['05', 'SECURITY', 'LEADERSHIP'],
              ['06', 'CISO /', 'SECURITY EXECUTIVE'],
            ].map(([n, a, b]) => (
              <div key={n} className="career-step"><span>{n}</span><b>{a}</b><em>{b}</em></div>
            ))}
          </div>

          <div className="certs">
            <div><span className="mono">CERTIFICATION / CURRENT</span><h3>COMPTIA SECURITY+</h3><p>Preparation track — status intentionally not represented as completed.</p></div>
            <div><span className="mono">ROADMAP / AREAS OF INTEREST</span><h3>CISA · CRISC · GRC · LEAD AUDITOR</h3><p>Planned / developing interests. Not presented as completed credentials.</p></div>
          </div>
        </section>

        <section className="section notes">
          <SectionLabel number="10">SECURITY NOTES</SectionLabel>
          <div className="notes-layout">
            <h2 className="display">THINK.<br /><em>WRITE.</em><br />SHARE.</h2>
            <div className="note-list">
              {['Cybersecurity Fundamentals', 'Cryptography', 'Security+', 'GRC & Risk Management', 'SOC Operations', 'Microsoft Purview', 'Security Controls', 'Ethical Hacking', 'Data-Driven Risk Analysis'].map((x, i) => (
                <div key={x}><span>0{i + 1}</span><b>{x}</b><ArrowUpRight size={18} /></div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="contact-star"><Asterisk size={110} /></div>
          <SectionLabel number="11">CONTACT</SectionLabel>
          <h2>LET'S<br /><em>TALK.</em></h2>
          <p>Security. Risk. Governance. Technology.</p>
          <div className="contact-actions">
            <a href="mailto:hyzamnazar2013@gmail.com" className="contact-btn">Email <Mail size={18} /></a>
            <a href="https://github.com/Typoss" className="contact-btn" target="_blank" rel="noreferrer">GitHub <Github size={18} /></a>
            <a href="https://www.linkedin.com/in/hyzamnazar" className="contact-btn" target="_blank" rel="noreferrer">LinkedIn <Linkedin size={18} /></a>
            <a href="/hyzam-nazar-portfolio/Hyzam-Nazar-Resume.pdf" className="contact-btn" target="_blank" rel="noreferrer">View Resume <ExternalLink size={18} /></a>
            <a href="/hyzam-nazar-portfolio/Hyzam-Nazar-Resume.pdf" className="contact-btn" download>Download Resume <ArrowDownRight size={18} /></a>
          </div>
          
        </section>
      </main>

      <footer>
        <span>HYZAM NAZAR</span>
        <span>CYBERSECURITY / RISK / GRC</span>
        <span>© 2026</span>
      </footer>
    </div>
  )
}

export default App
