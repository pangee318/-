function twitText() {
  var s = "投稿するテキスト";
  var url = document.location.href;

  if (s.length > 140) {
    alert("テキストが140字を超えています");
  } else {
    var twUrl = "https://twitter.com/share?url=" + encodeURIComponent(url) + "&text=" + encodeURIComponent(s);
    window.open(twUrl, "_blank", "width=600,height=300");
  }
}

function fbText() {
  var url = document.location.href;
  var fbUrl = "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(url);
  window.open(fbUrl, "_blank", "width=600,height=300");
}

function hatebuText() {
  var url = document.location.href;
  var hbUrl = "https://b.hatena.ne.jp/entry/panel/?url=" + encodeURIComponent(url);
  window.open(hbUrl, "_blank", "width=600,height=300");
}