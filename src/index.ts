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
