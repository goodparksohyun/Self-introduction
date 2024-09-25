document.addEventListener("DOMContentLoaded", function () {
  // 모든 메뉴 아이템 가져오기
  const menuItems = document.querySelectorAll(".menu-item");
  // 모든 섹션 가져오기
  const sections = document.querySelectorAll(".section");

  // 스크롤 이벤트 감지
  window.addEventListener("scroll", () => {
    let current = "";

    // 현재 스크롤 위치를 기준으로 활성화할 섹션 선택
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      // 스크롤 위치가 섹션의 상단과 하단 사이일 때 활성화
      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        current = section.getAttribute("id");
      }
    });

    // 모든 메뉴 아이템에 대해 활성화 상태 업데이트
    menuItems.forEach((item) => {
      item.classList.remove("active"); // 기존 활성화 상태 제거
      if (item.getAttribute("href").includes(current)) {
        item.classList.add("active"); // 현재 활성화할 항목에 클래스 추가
      }
    });
  });

  // 메뉴 항목 클릭 시 부드럽게 스크롤 이동
  menuItems.forEach((item) => {
    item.addEventListener("click", function (e) {
      e.preventDefault(); // 기본 링크 이동 막기

      // href 속성에서 타겟 ID 추출
      const targetId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      // 타겟 섹션의 위치 계산
      const offsetPosition = targetSection.offsetTop;

      // 부드러운 스크롤 동작
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    });
  });
});
