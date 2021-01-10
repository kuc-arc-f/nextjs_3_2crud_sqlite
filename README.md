# nextjs_3_2crud_sqlite

 Version: 0.9.1

 Author  : Kouji Nakashima / kuc-arc-f.com

 date    : 2021/01/09

 update  : 2021/01/10

***
### Summary

Next.js + sqlite, CRUD sample

***
### Setup

npx create-next-app app1 --use-npm --example "https://github.com/vercel/next-learn-starter/tree/master/learn-starter"

* npm

https://www.npmjs.com/package/sqlite

yarn add sqlite

yarn add sqlite3

***
* Table

CREATE TABLE tasks(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title VARCHAR(255) NOT NULL,
  content TEXT,
  uid INTEGER,
  up_date TIMESTAMP
);

***
### start server
* Start :

yarn dev

* build:

yarn deploy


***
### Blog :

https://note.com/knaka0209/n/ne672c26f5638

***

