/**
 *
 */
$(function(){
	$('.top-of-page').each(function() {
        $(this).on('inview', function(event, isInView, visiblePartX, visiblePartY) {
            if (isInView) {
                var nextUrl = $(this).attr('data-url');
                var needUpdateUrl = window.location.href !== nextUrl;
                if (needUpdateUrl) {
                    window.history.pushState(null, null, nextUrl);
                }
            }
        });
    });

    $('.scroll').jscroll({
		nextSelector:'a.next',
		loadingHtml: '<i class="fa fa-spinner">Now Loading...</i>',
		autoTrigger: true, // 次の表示コンテンツの読み込みを自動( true )か、ボタンクリック( false )にする
		contentSelector: '.jscroll' // 読み込む範囲を指定、指定がなければページごと丸っと読み込む
	});
});