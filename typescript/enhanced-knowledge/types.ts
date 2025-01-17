// types.ts

type Meter = number;
type UserInput = string;
type Maybe = boolean;

type LoginInput = {
  email: string | undefined;
  username: string;
  id: number;
};

type LoginInputShort = {
  email?: string;
  username: string;
  id: number;
};
