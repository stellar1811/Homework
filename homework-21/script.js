function Boo() {
    let state = 0;
  
    return {
      next() {
        switch (state) {
          case 0:
            console.log('start');
            state++;
            return { value: 1, done: false };
          case 1:
            state++;
            return { value: 2, done: false };
          case 2:
            state++;
            return { value: 3, done: false };
          case 3:
            console.log('finish');
            state++;
            return { value: undefined, done: true };
          default:
            return { value: undefined, done: true };
        }
      }
    };
  }
  
  const iterator = Boo();
  console.log(iterator.next());
  console.log(iterator.next()); 
  console.log(iterator.next());
  console.log(iterator.next());  