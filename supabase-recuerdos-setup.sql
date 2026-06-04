-- Supabase setup for the "Recuerdos" photo tab.
-- Run this in the Supabase SQL editor for the project used by the site.

create extension if not exists pgcrypto;

create table if not exists public.photo_memories (
  id uuid primary key default gen_random_uuid(),
  image_path text not null,
  description text not null default '',
  frame text not null default 'polaroid',
  created_at timestamptz not null default now(),
  constraint photo_memories_description_len check (char_length(description) <= 240),
  constraint photo_memories_frame_check check (frame in ('polaroid', 'rosa', 'dorado', 'jardin'))
);

alter table public.photo_memories enable row level security;

drop policy if exists "Anyone can read photo memories" on public.photo_memories;
create policy "Anyone can read photo memories"
on public.photo_memories
for select
to anon
using (true);

drop policy if exists "Anyone can add photo memories" on public.photo_memories;
create policy "Anyone can add photo memories"
on public.photo_memories
for insert
to anon
with check (true);

drop policy if exists "Anyone can delete photo memories" on public.photo_memories;
create policy "Anyone can delete photo memories"
on public.photo_memories
for delete
to anon
using (true);

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'ingrid-recuerdos',
  'ingrid-recuerdos',
  true,
  5242880,
  array['image/jpeg', 'image/png', 'image/webp', 'image/heic', 'image/heif']
)
on conflict (id) do update
set
  public = excluded.public,
  file_size_limit = excluded.file_size_limit,
  allowed_mime_types = excluded.allowed_mime_types;

drop policy if exists "Anyone can read memory photos" on storage.objects;
create policy "Anyone can read memory photos"
on storage.objects
for select
to anon
using (bucket_id = 'ingrid-recuerdos');

drop policy if exists "Anyone can upload memory photos" on storage.objects;
create policy "Anyone can upload memory photos"
on storage.objects
for insert
to anon
with check (
  bucket_id = 'ingrid-recuerdos'
  and (storage.foldername(name))[1] = 'uploads'
);

drop policy if exists "Anyone can delete memory photos" on storage.objects;
create policy "Anyone can delete memory photos"
on storage.objects
for delete
to anon
using (
  bucket_id = 'ingrid-recuerdos'
  and (storage.foldername(name))[1] = 'uploads'
);
