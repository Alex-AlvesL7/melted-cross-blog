create extension if not exists pgcrypto;

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  origem text not null default 'blog_hero',
  created_at timestamptz not null default timezone('utc', now())
);

alter table public.leads enable row level security;

create policy "Allow public lead inserts"
on public.leads
for insert
to anon
with check (true);
