// ============================
// DOMContentLoaded時の処理
// ============================
document.addEventListener("DOMContentLoaded", () => {

  // ナビリンクのアクティブ切替
  const links = document.querySelectorAll(".navbar a");
  links.forEach(link => {
    link.addEventListener("click", () => {
      links.forEach(l => l.classList.remove("active"));
      link.classList.add("active");
    });
  });

  // ---------- ヘッダー読み込み ----------
  const pattern = document.body.dataset.headerPattern || "home";
  fetch('header.json')
    .then(response => response.json())
    .then(data => {
      const header = data[pattern];
      const commonHeader = document.getElementById("common-header");
      if (!commonHeader) return;
      commonHeader.innerHTML = `
        <h1>${header.title}</h1>
        ${header.desc ? `<p>${header.desc}</p>` : ""}
      `;
    })
    .catch(err => console.error("header.json 読み込み失敗:", err));

  // ---------- フッター & パンくず ----------
  fetch('https://pipocorp-japan.github.io/footer.html')
    .then(response => response.text())
    .then(data => {
      const footerContainer = document.getElementById('footer-placeholder');
      if (!footerContainer) return;
      footerContainer.innerHTML = data;

      // パンくず生成
      const breadcrumb = document.getElementById("breadcrumb");
      if (!breadcrumb) return;

      // pages.json を読み込む
      fetch('pages.json')
        .then(res => res.json())
        .then(pages => {
          const baseURL = "https://pipocorp-japan.github.io";
          const currentURL = window.location.href;
          const path = currentURL.replace(baseURL, "").split("/").filter(Boolean);

          // アイコン
          breadcrumb.innerHTML = `<a href="${baseURL}"><img src="https://pipocorp-japan.github.io/asset/icon.png?v=1728623402929" alt="ピポのアイコン" style="height: 20px;"></a>`;

          let pathURL = baseURL;
          path.forEach((segment, index) => {
            pathURL += `/${segment}`;
            const name = pages[segment] || segment;
            const isLast = index === path.length - 1;
            breadcrumb.innerHTML += isLast
              ? ` > ${name}`
              : ` > <a href="${pathURL}">${name}</a>`;
          });
        })
        .catch(err => console.error("pages.json 読み込み失敗:", err));
    })
    .catch(error => console.error('footer読み込み失敗:', error));
});
