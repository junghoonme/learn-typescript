// 문자열 타입 지정

let firstName: string = 'chul-su';

// 배열 타입 지정

let lastName: string[] = ['kim', 'lee']; // 배열 요소는 문자열만 가능하게 타입 지정

// 객체 타입 지정

let fullName: { firstName: string; lastName?: string } =
  // lastName 키 값은 옵션
  { firstName: 'chul-su', lastName: 'kim' }; // 객체 요소 타입 지정

// 다양한 타입 지정가능 => Union type

let random1: string[] | number = 123;

// 타입을 변수에 담아쓸 수 있음 => Type alias

type MyType = string[] | number;
let random2: MyType = 123;

// 함수 파리미터, 리턴 타입 지정 가능

const myFunction1 = (x: number): number => {
  return x * 2;
};

// return하지 않는 함수

const myFunction2 = (x: number): void => {
  console.log(x * 2);
};

// never
// 1. 항상 error를 반환하는 함수

const showError = (): never => {
  throw new Error();
};

// 2. 끝나지 않는 함수

const infLoop = (): never => {
  while (true) {
    // do something...
  }
};

// 배열의 tuple 타입 => 배열의 요소별로 타입 지정 가능

type Member1 = [number, boolean];
let john: Member1 = [123, true];

// 객체에 타입 지정할 속성이 많을 때

type Member2 = {
  [key: string]: string; // 키가 문자열이면 키값도 문자열 타입 지정
};
let johnny: Member2 = { key: 'keyValue' };

// class 타입 지정 가능

class User {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

// enum: 특정 값만 입력할 수 있게 강제하고 싶고 그 값들이 공통점이 있을때 사용

enum Os {
  Window = 'win',
  Ios = 'ios',
  Android = 'and',
}

let myOs: Os;

myOs = Os.Window;

console.log(myOs);

// interface

interface IUser {
  name: string;
  age: number;
}

const me: IUser = {
  name: 'Max',
  age: 27,
};

console.log(me);

type Score = 'A' | 'B' | 'C' | 'D' | 'F';

interface User {
  name: string;
  age: number;
  gender?: string; // ?: optional
  readonly birthYear: number; // readonly: 읽기 전용
  [grade: number]: Score; // 키와 키값 타입 지정
}

let user: User = {
  name: 'hoony',
  age: 30,
  birthYear: 1993,
  1: 'D',
  2: 'B',
};

interface Add {
  (num1: number, num2: number): number;
}

const add: Add = (x, y) => x + y;

interface IsAdult {
  (age: number): boolean;
}

const isAdult: IsAdult = (age) => age > 19;

interface Car {
  color: string;
  wheels: number;
  start(): void;
}

interface Toy {
  name: string;
}

// extends 두개 확장

interface ToyCar extends Car, Toy {
  price: number;
}

// extends

interface Benz extends Car {
  door: number;
  stop(): void;
}

const benz: Benz = {
  color: 'black',
  wheels: 4,
  door: 5,
  start() {
    console.log('Go start');
  },
  stop() {
    console.log('Stop!');
  },
};

// implements

class Bmw implements Car {
  color;
  wheels = 4;

  constructor(color: string) {
    this.color = color;
  }

  start() {
    console.log('Go start');
  }
}

// 함수 타입 지정

const hello = (name?: string) => {
  return `Hello, ${name || 'World'}`;
};

// ===

const hello2 = (name = 'World') => {
  return `Hello, ${name}`;
};

const hello3 = (name: string, age?: number) => {
  if (age !== undefined) {
    return `Hello, ${name}. You are ${age} years old`;
  } else {
    return `Hello, ${name}`;
  }
};

// rest parameter

const sum = (...nums: number[]) => {
  return nums.reduce((acc, cur) => acc + cur, 0);
};

// this

interface User1 {
  name: string;
}

const Hoony: User1 = {
  name: 'Hoony',
};

function showName(this: User1, age: number, gender: 'M' | 'F') {
  console.log(this.name, age, gender);
}

const call = showName.bind(Hoony);
call(30, 'M');

// overload

interface User2 {
  name: string;
  age: number;
}

// 각 리턴 타입 설정

function join(name: string, age: number): User2;
function join(name: string, age: string): string;
function join(name: string, age: number | string): User2 | string {
  if (typeof age === 'number') {
    return {
      name,
      age,
    };
  } else {
    return '나이는 숫자로 입력해주세요';
  }
}

const sam: User2 = join('Sam', 30);
const jane: string = join('Jane', '30');

// Literal Types

const userName1 = 'Bob';
let userName2: string | number = 'Tom';

userName2 = 3;

type Job = 'designer' | 'developer' | 'tester';

interface User3 {
  name: string;
  job: Job;
}

const user3: User3 = {
  name: 'Hoony',
  job: 'developer',
};

// Union Types

interface Car2 {
  name: 'car';
  color: string;
  start(): void;
}

interface Mobile2 {
  name: 'mobile';
  color: string;
  call(): void;
}

const getGift = (gift: Car2 | Mobile2) => {
  console.log(gift.color);

  if (gift.name === 'car') {
    gift.start();
  } else {
    gift.call();
  }
};

// Intersection Types

interface Car3 {
  name: string;
  start(): void;
}

interface Toy3 {
  name: string;
  color: string;
  price: number;
}

// 교차 타입: 여러 개의 타입을 하나로 합칠 때 사용

const toyCar: Toy3 & Car3 = {
  name: '타요',
  start() {
    console.log('Go start');
  },
  color: 'blue',
  price: 10000,
};

// Class Types
// 접근 제한자(Access Modifiers) - private, protected, public

class Car4 {
  color: string;

  // * public 클래스, 자식 클래스, 인스턴스 접근 가능
  name: string = 'car'; // === public name: string = 'car';
  // * readonly 읽기 전용
  // readonly name: string = 'car';
  // * private 클래스에서만 접근 가능
  // private name: string = 'car'; // ===  #name: string = 'car';
  // * 클래스,자식 클래스에서만 접근 가능
  // protected name: string = 'car'; // ===  #name: string = 'car';

  // * static 정적 멤버 변수 (접근할려면 class명 사용, this 사용 불가)
  static wheels = 4;

  constructor(color: string) {
    this.color = color;
  }

  start() {
    console.log('Go start');
    console.log(this.name);
    console.log(Car4.wheels);
  }
}

class Tesla extends Car4 {
  constructor(color: string) {
    super(color);
  }

  showName() {
    console.log(super.name);
  }
}

const m3 = new Tesla('red');
m3.name = 'model3';
console.log(m3.name);
console.log(Car4.wheels);

// 추상 클래스: 상속을 통해서만 사용 가능

abstract class Car5 {
  color: string;

  constructor(color: string) {
    this.color = color;
  }

  start() {
    console.log('Go start');
  }

  // * abstract 메서드는 상속된 곳에서 구현을 해야 함
  abstract showName(): void;
}

class Volvo extends Car5 {
  constructor(color: string) {
    super(color);
  }

  showName() {
    console.log('Volvo');
  }
}

const xc = new Volvo('silver');
console.log(xc);
