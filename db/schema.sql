create table users (
  id serial primary key,
  username text not null,
  email text unique not null,
  password_hash text not null,
  country text
);

create table games (
  id serial primary key,
  name text unique not null
);

create table user_games (
  user_id int references users(id) on delete cascade,
  game_id int references games(id) on delete cascade,
  primary key (user_id, game_id)
);
