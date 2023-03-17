for (let i = 1; i <= 5; i++) {
    let sequence = "";
  
    for (let j = 1; j <= 4; j++) {
      let num;
  
      if (i === 1) {
        num = j;
      } else if (i === 2) {
        num = j + 20;
      } else if (i === 3) {
        num = j + 30;
      } else if (i === 4) {
        if (j === 3) {
          num = "1.4.3";
        } else if (j === 4) {
          num = "1.4.4";
        } else {
          num = "1.4" + j;
        }
      } else if (i === 5) {
        num = "1.5." + j;
      }
  
      sequence += num;
  
      if (j < 4) {
        sequence += "-";
      }
    }
  
    console.log(sequence);
  }
  