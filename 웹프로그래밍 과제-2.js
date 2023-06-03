//방문 환영 함수
function showGreeting() {
  var nameInput = document.getElementById('name');
  var nameValue = nameInput.value.trim();

  if (nameValue !== '') {
    alert(nameValue + '님 방문해주셔서 감사합니다.');
  }
}

//이메일 검증 함수
function validateEmail(event) {
  var emailInput = document.getElementById('email');
  var emailPattern = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,}$/;

  if (!emailPattern.test(emailInput.value)) {
    alert("이메일 형식을 제대로 입력해주세요");
    event.preventDefault(); //submit 버튼의 동작을 막음
  }else{
    showGreeting();
  }
}

window.onload = function() {
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");

  var texts = [
    "긴 글 읽어주셔서 감사합니다 :)",
    "앞으로도 인공지능 개발자가 되기 위해 더욱 노력하겠습니다"
  ];
  var x = canvas.width / 2; // 캔버스의 가운데 x 좌표
  var y = canvas.height / 2; // 캔버스의 가운데 y 좌표
  var speed = 100; // 텍스트 출력 간격 (ms)
  var delay = 1500; // 출력 완료 후 멈추는 시간 (ms)
  var index = 0; // 현재 텍스트의 순서
  var progress = 0; // 현재 텍스트까지의 인덱스

  ctx.font = "24px Arial";
  ctx.fillStyle = "#6A75CA";
  ctx.textAlign = "center";
    

  //텍스트를 하나씩 출력하는 함수
  function animateText() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // 이전 텍스트 출력
    if (index > 0) {
      ctx.fillText(texts[index - 1], x, y - 30);
    }

    // 현재 텍스트 출력
    ctx.fillText(texts[index].substring(0, progress), x, y);

    progress++; // 다음 글자로 이동

    if (progress <= texts[index].length) {
      // 텍스트가 끝까지 출력되지 않았으면 다음 글자 출력을 위해 setTimeout 호출
      setTimeout(animateText, speed);
    } else {
      // 텍스트가 끝까지 출력되었으면 인덱스를 초기화하여 다시 시작
      setTimeout(function() {
        index = (index + 1) % texts.length;
        progress = 0;
        animateText();
      }, delay);
    }
  }
  animateText();
};