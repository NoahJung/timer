
let arr = process.argv;
arr = arr.splice(2);


for (const item of arr) {
  if (item >= 1) {
    time = item * 1000;
    setTimeout(() => {
      process.stdout.write('\x07')
    }, time)
  } else {
    process.stdout.write('')
  }

}

