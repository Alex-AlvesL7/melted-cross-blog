# Melted Cross

Landing page em React + Vite para divulgação do livro `Melted Cross`, com visual sombrio, foco em captação de leads e conteúdo em português.

## Stack

- React
- Vite
- Tailwind CSS
- lucide-react
- Supabase

## Variáveis de ambiente

Crie um arquivo `.env.local` a partir de [.env.example](.env.example) com:

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`

Use apenas a `anon key` no front-end.

## Supabase

- Cliente configurado em [src/lib/supabase.js](src/lib/supabase.js)
- Script da tabela de leads em [supabase/leads.sql](supabase/leads.sql)

Depois de executar o SQL, o formulário da landing page passa a gravar e-mails na tabela `leads`.

## Scripts

- `npm install`
- `npm run dev`
- `npm run build`
- `npm run preview`

## Próximos passos

- Conectar os cards de arquivos a um CMS ou blog.
- Adicionar analytics e automação de e-mail.
