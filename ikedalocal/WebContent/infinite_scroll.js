/**
 *
 */
$(document).on("turbolinks:load", function() {
  if ($("nav.pagination a[rel=next]").length){
	$(".user_list").infiniteScroll({  // コンテナ(スコープとなるセレクタ)に対し無限スクロールを実行
		path: "nav.pagination a[rel=next]",  // 次ページへのページネーションリンクを指定
		append: ".user_list ul",  // コンテナに追加する要素の指定 ※コンテテナの指定とappendする要素の指定が上手くいかないとレイアウトが崩れるなどの問題が起こる
		elementScroll: true,  // 無限スクロールを適用する範囲の指定。trueだとコンテナを無限スクロール範囲とする。デフォルトでは`window`全体が適用範囲となる。
		history: true,  // 読み込むたびにURLを書き換えるかどうかの指定
		prefill: false,  // 一番下までスクロールする前に読み込むかどうかの指定
		status: ".page-load-status",  // 読み込み中や読み込み終了時に表示するものを指定
		hideNav: ".pagination"  // ページネーションリンクを表示するかどうかを指定(display: noneと同じ)
	})
  }
});