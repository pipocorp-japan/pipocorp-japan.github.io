const hbtn = document.getElementById("hbtn");
window.addEventListener("load", () => {
  const hbtn = document.getElementById("hbtn");
  for (const bar of document.getElementsByClassName("menubar")) {
    for (const a of bar.getElementsByTagName("a")) {
      if (a.href == window.location.href) {
        a.className = "active";
      } else if ("https://pipocorp-japan.github.io" == window.location.href) {
        hbtn.className = "active";
      }
    }
  }
});
window.addEventListener("click", (event) => {
  for (const bar of document.getElementsByClassName("menubar")) {
    for (const icon of bar.getElementsByClassName("menuicon")) {
      if (event.target == icon && bar.className == "menubar") {
        bar.className = "menubar open";
      } else {
        bar.className = "menubar";
      }
    }
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".navbar a");

  links.forEach((link) => {
    link.addEventListener("click", () => {
      links.forEach((l) => l.classList.remove("active"));
      link.classList.add("active");
    });
  });
});
// footer.js
fetch('https://pipocorp-japan.github.io/footer.html')
  .then(response => response.text())
  .then(data => {
    const footerContainer = document.getElementById('footer-placeholder');
    footerContainer.innerHTML = data;

    // ここでパンくず生成
    const breadcrumb = document.getElementById("breadcrumb");
    if (!breadcrumb) return; // 念のため存在確認

    const pages = {
      "index.html": "ホーム",
      "pipotext.html": "pipoText",
      "pipochart.html": "pipoChart",
      "dsk.html": "開発者にとっては便利な缶詰め",
      "psk.html": "ピポの便利な缶詰め",
      "pd.html": "ピポ図鑑",
      "Philosophy.html": "企業理念",
      "story.html": "会社のストーリー",
      "form.html": "お問い合わせ",
      "terms.html": "利用規約",
      "memoflow.html": "MemoFlow",
    };

    const baseURL = "https://pipocorp-japan.github.io";
    const currentURL = window.location.href;
    const path = currentURL.replace(baseURL, "").split("/").filter(Boolean);

    const iconHTML = `<a href="${baseURL}"><img src="https://pipocorp-japan.github.io/asset/icon.png?v=1728623402929" alt="ピポのアイコン" style="height: 20px;"></a>`;
    breadcrumb.innerHTML = iconHTML;

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
  .catch(error => console.error('フッター読み込み失敗:', error));