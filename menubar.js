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
// ページ読み込み時にダークモードの設定を確認
document.addEventListener("DOMContentLoaded", function () {
  const theme = localStorage.getItem("theme");
  const themeLink = document.getElementById("theme-style");

  if (theme === "dark") {
    themeLink.href = "style-dark.css"; // ダークモードのスタイルシートを適用
  }
});
// システムのテーマに基づいて自動でスタイルシートを適用する関数
function updateTheme() {
  const themeLink = document.getElementById("theme-style");

  // システムのダークモード設定を取得
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    themeLink.href = "style-dark.css"; // ダークモードのスタイルシートを適用
  } else {
    themeLink.href = "style.css"; // ライトモードのスタイルシートを適用
  }
}

// ページ読み込み時にテーマを更新
document.addEventListener("DOMContentLoaded", updateTheme);

// システムのテーマが変更されたときにテーマを更新
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", updateTheme);

document.addEventListener("DOMContentLoaded", () => {
  // URLと対応する名前のマッピング
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

  // パンくずリストのコンテナ
  const breadcrumb = document.getElementById("breadcrumb");

  // URLパスを取得
  const path = currentURL.replace(baseURL, "").split("/").filter(Boolean);

  // 最初のピポアイコン
  const iconHTML = `<a href="${baseURL}"><img src="https://pipocorp-japan.github.io/asset/icon.png?v=1728623402929" alt="ピポのアイコン" style="height: 20px;"></a>`;
  breadcrumb.innerHTML = iconHTML;

  // パンくずリスト生成
  let pathURL = baseURL;
  path.forEach((segment, index) => {
    pathURL += `/${segment}`;
    const name = pages[segment] || segment; // 名前が見つからない場合はそのまま表示
    const isLast = index === path.length - 1; // 最後のアイテム判定

    breadcrumb.innerHTML += isLast
      ? ` > ${name}`
      : ` > <a href="${pathURL}">${name}</a>`;
  });
});
