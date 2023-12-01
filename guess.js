 let num = Math.random() * 100;
  num = Number.parseInt(num);
  let a;

  document.getElementById("submit").onclick = function () {
    let user = document.getElementById("guess").value;
      if (user == num) {
        alert("YOUR GUESS IS CORECT!!\n Your Number Was: " + user+ "\n"+ "Random Number Was: " + num);
      } else if (user > num && user < 100) {
        alert("YOUR NUMBER IS GREATER THAN ACTUAL  NUMBER");
      } else if (user < num && user > 0) {
        alert("YOUR  NUMBER IS SMALLER THAN ACTUAAL NUMBER");
      } else {
        alert("PLEASE ENTER THE NUMBER BETWEEN 1 TO 100");
      }
    }

