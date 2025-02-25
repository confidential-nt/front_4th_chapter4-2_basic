function showTopBar() {
  let country = 'France';
  let vat = 20;
  setTimeout(() => {
    document.querySelector(
      'section.country-bar'
    ).innerHTML = `<p>Orders to <b>${country}</b> are subject to <b>${vat}%</b> VAT</p>`;
    document.querySelector('section.country-bar').classList.remove('hidden');
  }, 1000);
}

showTopBar();

document.addEventListener('DOMContentLoaded', () => {
  const heroImage = document.getElementById('hero-image');

  function setClassBasedOnWidth() {
    const width = window.innerWidth;

    // 기존 클래스 제거
    heroImage.classList.remove('mobile', 'tablet', 'desktop');

    // 화면 크기에 맞춰 클래스 추가
    if (width <= 576) {
      heroImage.classList.add('mobile');
    } else if (width <= 960) {
      heroImage.classList.add('tablet');
    } else {
      heroImage.classList.add('desktop');
    }
  }

  // 페이지 로드 시 한번 실행
  setClassBasedOnWidth();

  // 화면 크기 변경시마다 클래스 업데이트
  window.addEventListener('resize', setClassBasedOnWidth);
});
