// 페이지 로드 이벤트
window.addEventListener("load", ()=>{
  // 클릭할 모든 버튼 요소와 gnb 요소를 변수에 저장
  const btn = document.querySelector(".menu-toggle-btn");
  const gnb = document.querySelector(".gnb");

  // 버튼에 클릭 이벤트 연결
  btn.addEventListener("click", ()=>{
    // gnb요소의 css 속성인 height값을 구해서 height가 0 이면 gnb를 펼치고 0이 아니면 gnb를 접어줌
    let compStyles = window.getComputedStyle(gnb)
    let height = compStyles.getPropertyValue("height");
    // console.log(height)
    if(height === "0px"){
      gnb.style.maxHeight = gnb.scrollHeight + "px";
    }else{
      gnb.style.maxHeight = "0px"
    }
  })
})
