function rating(num) {
  for (var i = 1; i <= 5; i++) {
    if (num == i) {
      target = document.getElementById("rate" + i);
      target.style.backgroundColor = "red";
      target.style.color = "white";
    } else {
      test = document.getElementById("rate" + i);
      test.style.backgroundColor = "white";
      test.style.color = "black";
    }
  }
}
var clickedElement;
function handleClick(event) {
  const clickedElementId = event.target.id;
  clickedElement = document.getElementById(clickedElementId).innerHTML;
}

function submit() {
  if (clickedElement > 0) {
    target = document.getElementById("content1");
    target.innerHTML = `
  <div class="row">
          <div class="col-md-8 offset-md-2 content1" id="content1">
            <div class="row mb-3">
              <div class="col text-center"><img src='5star.png' style='width:100%'/></div>
            </div>
            <div class='row mb-3'>
                <div class="col text-center" style='background-color:black;color:white;padding:10px;border-radius:10px'>You Selected ${clickedElement} out of 5</div>
            </div>
            <div class='row mb-3'>
                <div class="col text-center"><h3>Thank You!</h3></div>
            </div>
            <div class='row'>
                <div class="col text-center">
                    <p>We appreciate you taking the time to give a rating.If you ever need your more support,don't hesitate to get in touch!  </p>
                </div>
            </div>
  `;
  }
}

document.getElementById("rate1").addEventListener("click", handleClick);
document.getElementById("rate2").addEventListener("click", handleClick);
document.getElementById("rate3").addEventListener("click", handleClick);
document.getElementById("rate4").addEventListener("click", handleClick);
document.getElementById("rate5").addEventListener("click", handleClick);
