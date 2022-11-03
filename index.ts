import { faker } from "@faker-js/faker";
import * as fs from "fs";
import { createRandomBook } from "./book";
import { createRandomUser } from "./user";
// import { faker } from '@faker-js/faker/locale/de';

const users = Array.from({ length: 10 }).map(() => createRandomUser());

const books = Array.from({ length: 20 }).map(() => createRandomBook());

const data = {
  users,
  books,
};

// console.log(USERS);

fs.writeFileSync("db.json", JSON.stringify(data));
