import { useState } from 'react';
import {
  BookOpen,
  Mail,
  X,
  ChevronRight,
  Skull,
  Shield,
  Crosshair,
} from 'lucide-react';
import { isSupabaseConfigured, supabase } from './lib/supabase';

export default function App() {
  const characters = [
    {
      name: 'Alec Ashford',
      role: 'O estrategista',
      description:
        'Ex-sargento condecorado que transformou disciplina militar em uma máquina criminosa precisa e silenciosa.',
    },
    {
      name: 'Nora Vale',
      role: 'A informante',
      description:
        'Dona de um salão clandestino que reúne policiais, políticos e apostadores sob o mesmo teto esfumaçado.',
    },
    {
      name: 'Hugh Mercer',
      role: 'O cobrador',
      description:
        'Sobreviveu às trincheiras e agora cobra cada dívida como se ainda estivesse atravessando terra de ninguém.',
    },
  ];

  const dossierBenefits = [
    {
      title: 'Capítulo 1 completo',
      description: 'Receba a abertura do romance em PDF e entre no conflito antes do lançamento oficial.',
    },
    {
      title: 'Dossiê Ashford',
      description: 'Um material extra com contexto da gangue, território e motivações dos veteranos.',
    },
    {
      title: 'Lista VIP de lançamento',
      description: 'Seja avisado primeiro sobre pré-venda, novidades e conteúdo exclusivo do universo.',
    },
  ];

  const intelligenceFiles = [
    {
      code: 'Arquivo #001',
      tag: 'Ameaça urbana',
      title: 'Pânico defensivo nas ruas de Manchester',
      description:
        'A polícia local teme homens que sobreviveram à Somme e agora tratam cada beco como uma trincheira.',
    },
    {
      code: 'Arquivo #002',
      tag: 'Território',
      title: 'Docas, carvão, apostas e rotas de cobrança',
      description:
        'A Melted Cross avança sobre lugares que o império abandonou, onde a lei chega tarde e sangra cedo.',
    },
    {
      code: 'Arquivo #003',
      tag: 'Símbolo',
      title: 'Medalhas derretidas viram armas e juramentos',
      description:
        'Cada lâmina forjada carrega a humilhação de homens descartados depois da guerra.',
    },
  ];

  const faqItems = [
    {
      question: 'O que eu recebo ao entrar na lista?',
      answer:
        'Você recebe o Capítulo 1 em PDF, o Dossiê Ashford e passa a receber os avisos prioritários de lançamento.',
    },
    {
      question: 'O livro já está à venda?',
      answer:
        'Ainda não. A landing está sendo usada para aquecer audiência, validar interesse e preparar a abertura da venda.',
    },
    {
      question: 'Preciso pagar para receber o material?',
      answer:
        'Não. O material inicial é gratuito e serve para apresentar o universo e converter leitores qualificados.',
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [activeTab, setActiveTab] = useState('historia');

  const openLeadModal = () => {
    setIsModalOpen(true);
    setStatus('idle');
    setFeedbackMessage('');
  };

  const closeLeadModal = () => {
    setIsModalOpen(false);
  };

  const handleSubscribe = async (event) => {
    event.preventDefault();
    setStatus('loading');
    setFeedbackMessage('');

    if (!isSupabaseConfigured || !supabase) {
      setStatus('error');
      setFeedbackMessage('A captura de leads não está configurada no ambiente atual.');
      return;
    }

    const normalizedEmail = email.trim().toLowerCase();
    const { error } = await supabase.from('leads').insert([
      {
        email: normalizedEmail,
        origem: 'blog_hero',
      },
    ]);

    if (error) {
      if (error.code === '23505') {
        setStatus('error');
        setFeedbackMessage('Este e-mail já está cadastrado na lista VIP.');
        return;
      }

      setStatus('error');
      setFeedbackMessage('Não foi possível enviar o dossiê agora. Tente novamente em instantes.');
      return;
    }

    setStatus('success');
    setFeedbackMessage('Dossiê enviado! Verifique sua caixa de entrada (e o spam).');
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-300 font-sans selection:bg-amber-900 selection:text-white flex flex-col">
      <nav className="sticky top-0 z-40 border-b border-neutral-800/50 bg-neutral-950/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2 font-serif text-xl font-bold tracking-wider text-white">
            <Crosshair className="text-amber-700" size={24} />
            MELTED CROSS
          </div>
          <div className="hidden gap-6 text-sm font-medium tracking-wide md:flex">
            <a href="#universo" className="transition-colors hover:text-amber-500">O Universo</a>
            <a href="#personagens" className="transition-colors hover:text-amber-500">Personagens</a>
            <a href="#dossie" className="transition-colors hover:text-amber-500">Dossiê VIP</a>
            <a href="#faq" className="transition-colors hover:text-amber-500">FAQ</a>
          </div>
          <button
            type="button"
            onClick={openLeadModal}
            className="rounded-sm bg-amber-800 px-4 py-2 text-sm font-bold uppercase tracking-widest text-white transition-all hover:bg-amber-700"
          >
            Dossiê VIP
          </button>
        </div>
      </nav>

      <header className="relative flex flex-col items-center justify-center overflow-hidden border-b border-neutral-800 px-6 py-32 text-center">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-800/20 via-neutral-950/80 to-neutral-950" />

        <div className="relative z-10 flex max-w-3xl flex-col items-center">
          <span className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-amber-600 md:text-sm">
            Manchester, 1920
          </span>
          <h1 className="mb-6 font-serif text-4xl leading-tight font-bold text-white md:text-5xl">
            Manchester, 1920. Onde o carvão mancha a alma e o sangue sela pactos.
          </h1>
          <p className="mb-10 max-w-2xl text-lg leading-relaxed text-neutral-400 md:text-xl">
            Entre as trincheiras de ferro da fumaça e os segredos dos túneis, Alec e Audrey jogam um jogo de lealdade e traição. Descubra o thriller noir que revela o Exército Fantasma de Manchester.
          </p>

          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <button
              type="button"
              onClick={openLeadModal}
              className="group flex items-center gap-3 rounded-sm bg-amber-800 px-8 py-4 font-bold uppercase tracking-widest text-white shadow-[0_0_20px_rgba(180,83,9,0.3)] transition-all hover:-translate-y-1 hover:bg-amber-700 hover:shadow-[0_0_30px_rgba(180,83,9,0.5)]"
            >
              <BookOpen size={20} />
              Ler o Primeiro Capítulo
              <ChevronRight size={18} className="transition-transform group-hover:translate-x-1" />
            </button>
            <a
              href="#dossie"
              className="rounded-sm border border-neutral-700 px-8 py-4 font-bold uppercase tracking-widest text-neutral-200 transition-colors hover:border-amber-800 hover:text-white"
            >
              Ver o que vem no dossiê
            </a>
          </div>
          <p className="mt-4 flex items-center gap-2 text-xs text-neutral-500">
            <Shield size={12} /> Acesso imediato ao Dossiê Ashford.
          </p>

          <div className="mt-12 grid w-full gap-4 md:grid-cols-3">
            {dossierBenefits.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-sm border border-neutral-800/80 bg-neutral-900/70 p-5 text-left shadow-[0_10px_30px_rgba(0,0,0,0.2)]"
              >
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-amber-700">Lista VIP</span>
                <h3 className="mt-3 font-serif text-xl font-bold text-white">{benefit.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </header>

      <section className="border-b border-neutral-800 bg-neutral-950 px-6 py-8">
        <div className="mx-auto flex max-w-5xl flex-col gap-4 rounded-sm border border-amber-900/30 bg-amber-950/10 p-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-amber-700">Oferta de entrada</p>
            <h2 className="mt-2 font-serif text-2xl font-bold text-white">Uma landing para fisgar leitor qualificado antes do lançamento.</h2>
          </div>
          <button
            type="button"
            onClick={openLeadModal}
            className="flex items-center justify-center gap-2 rounded-sm bg-amber-800 px-6 py-3 text-sm font-bold uppercase tracking-widest text-white transition-colors hover:bg-amber-700"
          >
            Receber o dossiê agora
            <ChevronRight size={16} />
          </button>
        </div>
      </section>

      <section id="detalhes" className="border-b border-neutral-800 bg-neutral-900 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-amber-700">Detalhes do Livro</span>
          <h2 className="mt-3 font-serif text-3xl font-bold text-white md:text-4xl">A profundidade do mundo em três abas</h2>

          <div className="mt-6">
            <div className="md:hidden">
              <label htmlFor="detalhes-select" className="sr-only">Selecionar detalhe</label>
              <select
                id="detalhes-select"
                className="tab-select"
                value={activeTab}
                onChange={(e) => setActiveTab(e.target.value)}
              >
                <option value="historia">A História</option>
                <option value="cenario">O Cenário</option>
                <option value="personagens">Personagens</option>
              </select>
            </div>

            <div className="hidden md:flex items-center gap-4" role="tablist" aria-label="Detalhes do Livro Tabs">
              <button
                type="button"
                role="tab"
                aria-selected={activeTab === 'historia'}
                onClick={() => setActiveTab('historia')}
                className={`tab-btn ${activeTab === 'historia' ? 'tab-active' : ''}`}
              >
                A História
              </button>

              <button
                type="button"
                role="tab"
                aria-selected={activeTab === 'cenario'}
                onClick={() => setActiveTab('cenario')}
                className={`tab-btn ${activeTab === 'cenario' ? 'tab-active' : ''}`}
              >
                O Cenário
              </button>

              <button
                type="button"
                role="tab"
                aria-selected={activeTab === 'personagens'}
                onClick={() => setActiveTab('personagens')}
                className={`tab-btn ${activeTab === 'personagens' ? 'tab-active' : ''}`}
              >
                Personagens
              </button>
            </div>

            <div className="mt-6 rounded-sm border border-neutral-800 bg-neutral-950/5 p-6 text-neutral-300">
              <div className={`tab-panel ${activeTab === 'historia' ? 'active' : ''}`} role="tabpanel">
                <h3 className="font-serif text-xl font-bold text-white">A História</h3>
                <p className="mt-3 text-sm text-neutral-400">A narrativa acompanha o ressurgimento de homens marcados pela guerra que transformam fúria e honra em um código de sobrevivência. Conspirações crescem nas docas; pactos sangrentos selam territórios. Alec e Audrey aparecem no centro desse jogo.</p>
              </div>

              <div className={`tab-panel ${activeTab === 'cenario' ? 'active' : ''}`} role="tabpanel">
                <h3 className="font-serif text-xl font-bold text-white">O Cenário</h3>
                <p className="mt-3 text-sm text-neutral-400">Manchester é ferro e carvão. Fumaça envenena o céu; túneis de carvão acumulam segredos e pistas. Fábricas, trilhos e bares formam o cenário onde a lei e a ambição se cruzam.</p>
              </div>

              <div className={`tab-panel ${activeTab === 'personagens' ? 'active' : ''}`} role="tabpanel">
                <h3 className="font-serif text-xl font-bold text-white">Personagens</h3>
                <p className="mt-3 text-sm text-neutral-400">Alec: veterano com disciplina letal. Audrey: mente fria e ambiciosa. Ao redor deles, informantes, cobradores e agentes jogam suas peças. Cada aliado pode virar inimigo.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="universo" className="border-b border-neutral-800 bg-neutral-900 px-6 py-24">
        <div className="mx-auto grid max-w-4xl items-center gap-12 md:grid-cols-2">
          <div>
            <h2 className="mb-6 flex items-center gap-3 font-serif text-3xl font-bold text-white">
              <Skull className="text-neutral-500" /> A Avenida do Crime
            </h2>
            <p className="mb-4 leading-relaxed text-neutral-400">
              Eles prometeram glória. O Rei pediu sangue, e eles deram. Mas quando a lama de Flandres secou e os canhões silenciaram, o que sobrou para os heróis da Grande Guerra? Nada.
            </p>
            <p className="leading-relaxed text-neutral-400">
              Em 1919, milhares de homens treinados para matar voltaram para o desemprego. A polícia local entrou em pânico defensivo. Como você prende um homem que sobreviveu à Batalha do Somme? Você não prende. Você reza para que ele não olhe para você.
            </p>
          </div>
          <div className="relative rounded-sm border border-neutral-800 bg-neutral-950 p-6 shadow-inner">
            <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-amber-900 to-transparent" />
            <h3 className="mb-2 font-serif text-xl font-bold tracking-wider text-white">Melted Cross (A Gangue)</h3>
            <ul className="space-y-3 text-sm text-neutral-400">
              <li className="flex items-start gap-2">
                <span className="mt-1 text-amber-700">▪</span>
                <span>
                  <strong>Armamento:</strong> Lâminas forjadas com o bronze de medalhas Victoria Cross derretidas.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-amber-700">▪</span>
                <span>
                  <strong>Território:</strong> Moinhos abandonados e zonas de apostas de Manchester.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-amber-700">▪</span>
                <span>
                  <strong>Código:</strong> &quot;Nós não pedimos; nós cobramos o que o Império nos deve.&quot;
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="sobre" className="border-b border-neutral-800 bg-neutral-900 px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-6 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-amber-700">Sobre o Livro</span>
            <h2 className="mt-4 font-serif text-3xl font-bold text-white md:text-4xl">Noir. Industrial. Sem perdão.</h2>
          </div>

          <div className="rounded-sm border border-neutral-800 bg-neutral-950/5 p-6 text-neutral-300">
            <p className="mb-3">Manchester, 1920. A chuva nunca para.</p>
            <p className="mb-3">A cidade respira carvão e aço. Túneis antigos engolem segredos. Segredos enterrados no carvão.</p>
            <p className="mb-3">Alec veio da guerra. Ordem tatuada no corpo. Olhos de soldado. Mãos que sabem dar e tirar vidas.</p>
            <p className="mb-3">Audrey veio do cálculo. Ambição precisa. Sorriso frio. Planos desenhados em papel quadriculado.</p>
            <p className="mb-3">Ele carrega honra e ordens. Ela carrega ambição e mapas de interesse. Colidem. Tudo vira jogo.</p>
            <p className="mb-3">Gangues nas esquinas. Agentes nas fábricas. Espionagem nos becos. Traição nos trilhos.</p>
            <p className="mb-3">O passado militar de Alec bate com a ambição calculista de Audrey. Honra versus poder. Sangue contra estratégia.</p>
            <p className="mt-4">Sinta a chuva. Sinta o peso do carvão. Cada túnel guarda uma escolha. Cada escolha define uma sentença.</p>
          </div>
        </div>
      </section>

      <section id="dossie" className="border-b border-neutral-800 bg-neutral-950 px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-amber-700">Dossiê VIP</span>
            <h2 className="mt-4 font-serif text-3xl font-bold text-white md:text-4xl">
              Tudo o que o leitor precisa para entrar no universo antes da venda abrir.
            </h2>
            <p className="mt-4 leading-relaxed text-neutral-400">
              Em vez de um blog, a página agora precisa vender a experiência. O dossiê funciona como o primeiro gancho: ele introduz o conflito, os personagens e a promessa do livro.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {dossierBenefits.map((benefit, index) => (
              <article
                key={benefit.title}
                className="rounded-sm border border-neutral-800 bg-neutral-900 p-6 transition-colors hover:border-amber-900/50"
              >
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-neutral-500">Item 0{index + 1}</span>
                <h3 className="mt-3 font-serif text-2xl font-bold text-white">{benefit.title}</h3>
                <p className="mt-4 leading-relaxed text-neutral-400">{benefit.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="personagens" className="border-b border-neutral-800 bg-neutral-950 px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-amber-700">Personagens</span>
            <h2 className="mt-4 font-serif text-3xl font-bold text-white md:text-4xl">Veteranos moldados por ferro, lama e dívida.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {characters.map((character) => (
              <article
                key={character.name}
                className="rounded-sm border border-neutral-800 bg-neutral-900 p-6 transition-colors hover:border-amber-900/50"
              >
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-neutral-500">{character.role}</span>
                <h3 className="mt-3 font-serif text-2xl font-bold text-white">{character.name}</h3>
                <p className="mt-4 leading-relaxed text-neutral-400">{character.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="arquivos" className="border-b border-neutral-800 bg-neutral-900 px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 max-w-2xl border-b border-neutral-800 pb-6">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-amber-700">Arquivos Confidenciais</span>
            <h2 className="mt-4 font-serif text-3xl font-bold text-white">Elementos de narrativa para vender o clima antes da compra.</h2>
            <p className="mt-4 leading-relaxed text-neutral-400">
              Esta seção deixa de ser um blog e vira uma vitrine de tensão. Cada bloco funciona como munição de marketing para reforçar o universo e aumentar a curiosidade.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {intelligenceFiles.map((file) => (
              <article
                key={file.code}
                className="group rounded-sm border border-neutral-800 bg-neutral-950 p-6 transition-colors hover:border-amber-900/50"
              >
                <div className="relative mb-6 flex h-36 items-center justify-center overflow-hidden border border-neutral-800/50 bg-neutral-900 text-neutral-600">
                  <div className="absolute inset-0 bg-neutral-800 opacity-20 transition-opacity group-hover:opacity-40" />
                  <div className="relative flex flex-col items-center">
                    <Skull size={42} className="mb-2 opacity-50" />
                    <span className="text-xs font-bold uppercase tracking-widest">{file.code}</span>
                  </div>
                </div>
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-amber-700">{file.tag}</span>
                <h3 className="mt-3 font-serif text-2xl font-bold text-white">{file.title}</h3>
                <p className="mt-4 leading-relaxed text-neutral-400">{file.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-neutral-800 bg-neutral-950 px-6 py-24">
        <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-[1.1fr_0.9fr] md:items-start">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-amber-700">Prévia do Capítulo 1</span>
            <h2 className="mt-4 font-serif text-3xl font-bold text-white md:text-4xl">Um gosto do conflito antes de abrir a venda.</h2>
            <div className="mt-8 rounded-sm border border-neutral-800 bg-neutral-900 p-6 text-lg leading-relaxed text-neutral-300 shadow-inner">
              <p>
                “Ashford não acreditava mais em medalhas. Bronze não alimentava homem nenhum, não pagava aluguel e não enterrava amigo morto. Naquela noite, quando o metal derretido escorreu sobre a oficina, ninguém viu glória. Só viram uma nova promessa: se o Império não pagaria sua dívida, Manchester pagaria.”
              </p>
            </div>
          </div>

          <aside className="rounded-sm border border-amber-900/40 bg-amber-950/10 p-6">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-amber-700">CTA central</span>
            <h3 className="mt-3 font-serif text-3xl font-bold text-white">Receba o dossiê e entre na lista antes da massa.</h3>
            <p className="mt-4 leading-relaxed text-neutral-400">
              Esta etapa não pede compra imediata. Ela pede curiosidade, cadastro e retenção até a abertura oficial das vendas.
            </p>
            <button
              type="button"
              onClick={openLeadModal}
              className="mt-8 flex w-full items-center justify-center gap-2 rounded-sm bg-amber-800 px-5 py-4 text-sm font-bold uppercase tracking-widest text-white transition-colors hover:bg-amber-700"
            >
              Entrar para a lista VIP
              <ChevronRight size={16} />
            </button>
            <p className="mt-4 text-xs text-neutral-500">Capítulo 1 + dossiê + aviso prioritário de lançamento.</p>
          </aside>
        </div>
      </section>

      <section id="faq" className="flex-grow bg-neutral-950 px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-amber-700">FAQ</span>
            <h2 className="mt-4 font-serif text-3xl font-bold text-white md:text-4xl">Perguntas que travam a conversão — respondidas.</h2>
          </div>

          <div className="mt-12 space-y-4">
            {faqItems.map((item) => (
              <article key={item.question} className="rounded-sm border border-neutral-800 bg-neutral-900 p-6">
                <h3 className="font-serif text-2xl font-bold text-white">{item.question}</h3>
                <p className="mt-3 leading-relaxed text-neutral-400">{item.answer}</p>
              </article>
            ))}
          </div>

          <div className="mt-12 rounded-sm border border-amber-900/40 bg-gradient-to-r from-amber-950/20 to-neutral-900 p-8 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-amber-700">Última chamada</p>
            <h3 className="mt-4 font-serif text-3xl font-bold text-white md:text-4xl">Entre na lista antes que a guerra chegue às docas.</h3>
            <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-neutral-400">
              O objetivo da página agora é simples: transformar curiosidade em lead qualificado. O dossiê faz esse trabalho melhor do que um blog inteiro no começo.
            </p>
            <button
              type="button"
              onClick={openLeadModal}
              className="mt-8 inline-flex items-center gap-2 rounded-sm bg-amber-800 px-8 py-4 font-bold uppercase tracking-widest text-white transition-colors hover:bg-amber-700"
            >
              Quero o Capítulo 1
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </section>

      <section id="autor" className="border-t border-neutral-900 bg-neutral-950 px-6 py-20">
        <div className="mx-auto flex max-w-5xl items-center gap-6">
          <div className="shrink-0">
            <div className="h-32 w-32 overflow-hidden rounded-full border border-neutral-800">
              <img
                src="/assets/author.jpg"
                alt="Alex Alves"
                className="h-full w-full object-cover filter grayscale contrast-90"
              />
            </div>
          </div>

          <div className="min-w-0">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-amber-700">O Autor</span>
            <h3 className="mt-2 font-serif text-2xl font-bold text-white">Alex Alves — arquiteto de mundos</h3>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-neutral-400">
              Alex Alves constrói universos onde a Revolução Industrial respira nas sombras. Seus textos exploram
              fábricas, trilhos e túneis — trazendo à tona as forças que moldaram cidades e homens. Histórias com
              densidade histórica e tensão moderna.
            </p>

            <div className="mt-4 flex items-center gap-4">
              <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-amber-600">
                <i className="fa-brands fa-instagram text-lg" aria-hidden="true"></i>
                <span className="sr-only">Instagram</span>
              </a>
              <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-amber-600">
                <i className="fa-brands fa-tiktok text-lg" aria-hidden="true"></i>
                <span className="sr-only">TikTok</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-neutral-900 bg-neutral-950 py-8 text-center text-sm text-neutral-600">
        <div className="mb-2 flex items-center justify-center gap-2">
          <Crosshair size={16} className="text-amber-800" />
          <span className="font-serif font-bold tracking-widest text-neutral-500">THE MELTED CROSS</span>
        </div>
        <p>© 2026 Alex Alves. Todos os direitos reservados.</p>
      </footer>

      {isModalOpen && (
        <div className="animate-in fade-in fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm duration-200">
          <div className="relative w-full max-w-md rounded-sm border border-neutral-800 bg-neutral-900 shadow-2xl">
            <button
              type="button"
              onClick={closeLeadModal}
              className="absolute top-4 right-4 text-neutral-500 transition-colors hover:text-white"
              aria-label="Fechar modal"
            >
              <X size={24} />
            </button>

            <div className="p-8">
              <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-amber-900/30 bg-neutral-950">
                <Mail className="text-amber-600" size={24} />
              </div>

              <h3 className="mb-2 text-center font-serif text-2xl font-bold text-white">
                Acesse o Dossiê Ashford
              </h3>
              <p className="mb-8 text-center text-sm text-neutral-400">
                Insira seu melhor e-mail para receber o PDF com o Capítulo 1 completo e entrar na lista VIP de lançamento.
              </p>

              {status === 'success' ? (
                <div className="animate-in zoom-in-95 rounded border border-amber-800 bg-amber-900/20 p-4 text-center font-bold text-amber-500">
                  {feedbackMessage}
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col gap-4">
                  {status === 'error' && (
                    <div className="rounded border border-red-900/60 bg-red-950/40 p-3 text-center text-sm font-medium text-red-300">
                      {feedbackMessage}
                    </div>
                  )}
                  <div>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(event) => {
                        setEmail(event.target.value);

                        if (status === 'error') {
                          setStatus('idle');
                          setFeedbackMessage('');
                        }
                      }}
                      placeholder="seu.email@exemplo.com"
                      className="w-full border border-neutral-800 bg-neutral-950 px-4 py-3 text-white transition-colors focus:border-amber-700 focus:outline-none"
                      disabled={status === 'loading'}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="flex w-full items-center justify-center bg-amber-800 px-4 py-3 font-bold uppercase tracking-widest text-white transition-all hover:bg-amber-700 disabled:opacity-50"
                  >
                    {status === 'loading' ? 'Enviando...' : 'Receber Acesso Imediato'}
                  </button>
                  <p className="mt-2 text-center text-xs text-neutral-600">
                    Suas informações estão seguras. Sem spam, apenas negócios da gangue.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
