document.addEventListener('DOMContentLoaded', function() {
  const openBtns = document.querySelectorAll('.openLightbox'); // クラスで複数取得
  const lightbox = document.getElementById('lightbox');
  const closeBtn = document.getElementById('closeLightbox');

  // 開くボタンをすべてループしてクリックイベント付与
  openBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      lightbox.style.display = 'flex';
    });
  });

  // 背景クリックで閉じる
  lightbox.addEventListener('click', function(e) {
    if (e.target === lightbox) {
      lightbox.style.display = 'none';
    }
  });

  // クローズボタンクリックで閉じる
  closeBtn.addEventListener('click', function() {
    lightbox.style.display = 'none';
  });
	
  // --- タブ切り替え処理 ---
  const tabs = document.querySelectorAll('.tab');
  const contents = document.querySelectorAll('.tab-content');

  // 初期状態：全部非表示 & tab1だけ表示
  contents.forEach(c => c.style.display = 'none');
  document.getElementById('tab1').style.display = 'block';

  // 初期状態で tab1 のボタンに active 付与
  tabs.forEach(t => t.classList.remove('active'));
  document.querySelector('[data-target="tab1"]').classList.add('active');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetId = tab.dataset.target;

      // コンテンツ切り替え
      contents.forEach(c => c.style.display = 'none');
      document.getElementById(targetId).style.display = 'block';

      // ボタンの active 切り替え
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
    });
  });
	
  // topへ移動
　const pageTopBtn = document.querySelector('.pagetop');
  if (pageTopBtn) {
    pageTopBtn.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
	
});

// --- ローディング処理（最低1.5秒表示） ---
window.addEventListener('load', function() {
  const loading = document.getElementById('loading');
  if (!loading) return;

  const minTime = 1000; // 最低表示時間3秒
  const startTime = performance.now();

  function hideLoading() {
    const elapsed = performance.now() - startTime;
    const remaining = minTime - elapsed;

    setTimeout(() => {
      loading.style.opacity = 0; // フェードアウト開始
      setTimeout(() => {
        loading.style.display = 'none'; // 完全に非表示
      }, 500); // CSS transitionの時間と同じ
    }, remaining > 0 ? remaining : 0);
  }

  hideLoading();
});
