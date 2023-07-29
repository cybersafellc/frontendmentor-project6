//input add => .wrong
//label eror => .d-block

const button = document.querySelector("#button-gradiant");
const input = document.querySelector("input");
const lableWrong = document.querySelector("#label-wrong");

button.addEventListener("click", function () {
  var valueInputan = input.value;
  // pengecekan value kosong
  if (!valueInputan) {
    return lasValidation(false);
  }
  // Pengecekan kedua: menggunakan ekspresi reguler untuk validasi email
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailPattern.test(valueInputan)) {
    return lasValidation(true);
  } else {
    return lasValidation(false);
  }
});

function lasValidation(status) {
  if (status == false) {
    input.classList.add("wrong");
    lableWrong.classList.remove("d-none");
    lableWrong.classList.add("d-blcok");
  } else if (status == true) {
    input.classList.remove("wrong");
    lableWrong.classList.add("d-none");
    lableWrong.classList.remove("d-blcok");
    redirect("/thankyou.html");
  }
}

function redirect(url) {
  window.location.href = url;
  +encodeURIComponent(alert(valueInputan));
}
