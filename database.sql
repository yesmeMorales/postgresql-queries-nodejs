create database library;

/*Use database library*/
\c library

/**/
create table books {
  section int,
  title text,
  author text
}

/*list tables*/
\dt

insert into books values
(1, 'Foundation', 'Issac Asimov');

insert into books values
(1, 'Foundation', 'Issac Asimov'),
(2, 'Digital Fortress', 'Dan Brown');

/**/
select * from books

create table users(username text, password text);

insert into users values
('joe', 'joe123'),('ryan', 'ryan123'),('cameron', 'cameron123');
