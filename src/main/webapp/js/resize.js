// contentのサイズ変更処理
// id="attendanceTbl"が設定されているtableから幅を取得し、
// リサイズ対象(id="resizeTarget"の設定してあるタグ)の幅を変更する
// 変更後、リサイズした幅とメニューの幅を考慮してフッターの幅も変更する
//
function contentResize(){
	var mainwidth = $("#resizeChecker").width();
	//alert(mainwidth);
	if(mainwidth > 730) {
		var targetWidth = mainwidth + 60;
		$("#resizeTarget").css("min-width", targetWidth);
//		$("#resizeTarget").css("width", targetWidth);
		// フッターのサイズも変更
		var footerWidth = mainwidth + 80 + ( $("#resizeMenu").width() + 40 );
		$("#footer").css("min-width", footerWidth );
//		$("#footer").css("width", footerWidth );
	}
}
