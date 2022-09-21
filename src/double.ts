import { curry } from 'ramda';

const add = curry((first: number, second: number) => first + second);

export default add;
