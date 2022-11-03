import { faker } from "@faker-js/faker";

type Book = {
  id: string;
  title: string;
  description: string;
  pages: number;
};

export const createRandomBook = () => ({
  id: faker.datatype.uuid(),
  title: `${faker.word.verb()} ${faker.word.noun()}`,
  description: `${faker.word.verb()} ${faker.word.noun()}. There is ${faker.word.noun()}`,
  pages: Math.floor(Math.random() * 1000),
});
