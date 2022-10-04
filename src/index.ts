import add from './double';

const main = async () => {
  // import('./double').then(double => {
  //   console.log(double);
  // });

  console.log(add(10)(10));
};

main();

export { main };
