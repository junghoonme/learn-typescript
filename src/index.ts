interface IUser {
  name: string;
  age: number;
}

const me: IUser = {
  name: 'Max',
  age: 27,
};

console.log(me);