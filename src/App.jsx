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

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');

  const handleSubscribe = async (event) => {
    event.preventDefault();
    setStatus('loading');

    window.setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1500);
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
            <a href="#arquivos" className="transition-colors hover:text-amber-500">Arquivos Confidenciais</a>
          </div>
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
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
            Manchester, 1919
          </span>
          <h1 className="mb-6 font-serif text-5xl leading-tight font-bold text-white md:text-7xl">
            O fogo derrete medalhas. <br />
            <span className="bg-gradient-to-r from-neutral-400 via-neutral-200 to-amber-700 bg-clip-text text-transparent">
              O sangue forja o caos.
            </span>
          </h1>
          <p className="mb-10 max-w-2xl text-lg leading-relaxed text-neutral-400 md:text-xl">
            Alec Ashford, ex-sargento marcado pelas trincheiras, lidera os veteranos esquecidos pela coroa. Um império criminal nasce da fumaça de carvão.
          </p>

          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="group flex items-center gap-3 rounded-sm bg-amber-800 px-8 py-4 font-bold uppercase tracking-widest text-white shadow-[0_0_20px_rgba(180,83,9,0.3)] transition-all hover:-translate-y-1 hover:bg-amber-700 hover:shadow-[0_0_30px_rgba(180,83,9,0.5)]"
          >
            <BookOpen size={20} />
            Ler o Capítulo 1 Grátis
            <ChevronRight size={18} className="transition-transform group-hover:translate-x-1" />
          </button>
          <p className="mt-4 flex items-center gap-2 text-xs text-neutral-500">
            <Shield size={12} /> Acesso imediato ao Dossiê Ashford.
          </p>
        </div>
      </header>

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

      <section id="personagens" className="border-b border-neutral-800 bg-neutral-950 px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-amber-700">Personagens</span>
            <h2 className="mt-4 font-serif text-3xl font-bold text-white md:text-4xl">Veteranos moldados por ferro, lama e dívida.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
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
            ].map((character) => (
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

      <section id="arquivos" className="flex-grow bg-neutral-950 px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 flex items-end justify-between border-b border-neutral-800 pb-4">
            <h2 className="font-serif text-3xl font-bold text-white">Arquivos Confidenciais</h2>
            <a href="#" className="flex items-center gap-1 text-sm font-bold uppercase tracking-wider text-amber-600 transition-colors hover:text-amber-500">
              Ver todos <ChevronRight size={16} />
            </a>
          </div>

          <div className="grid gap-8">
            <article className="group flex cursor-pointer flex-col gap-6 border border-neutral-800 bg-neutral-900 p-6 transition-colors hover:border-amber-900/50 md:flex-row">
              <div className="relative flex h-48 flex-col items-center justify-center overflow-hidden border border-neutral-800/50 bg-neutral-950 text-neutral-600 md:w-1/3">
                <div className="absolute inset-0 bg-neutral-800 opacity-20 transition-opacity group-hover:opacity-40" />
                <Skull size={48} className="mb-2 opacity-50" />
                <span className="text-xs font-bold uppercase tracking-widest">Arquivo #001</span>
              </div>
              <div className="flex flex-col justify-center md:w-2/3">
                <span className="mb-2 text-xs font-bold uppercase tracking-widest text-amber-700">Bastidores • Lore</span>
                <h3 className="mb-3 font-serif text-2xl font-bold text-white transition-colors group-hover:text-amber-500">
                  A Anatomia do Caos: Por que os heróis se tornaram os gângsteres mais perigosos?
                </h3>
                <p className="mb-4 line-clamp-2 text-neutral-400">
                  Uma análise profunda sobre o pânico defensivo da polícia de Manchester ao lidar com veteranos treinados para matar, e como isso pavimentou a avenida perfeita para o crime organizado no pós-guerra.
                </p>
                <div className="mt-auto">
                  <span className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-neutral-500 transition-colors group-hover:text-white">
                    Ler Artigo Completo <ChevronRight size={14} />
                  </span>
                </div>
              </div>
            </article>
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
              onClick={() => setIsModalOpen(false)}
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
                  Dossiê enviado! Verifique sua caixa de entrada (e o spam).
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col gap-4">
                  <div>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
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
