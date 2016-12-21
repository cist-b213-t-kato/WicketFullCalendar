/**
 * 文字数をカウントし、idが<code>"inputLength"</code>のタグの中身を書き換える.
 * 
 * @param str
 *            テキストフィールドなどの文字数
 */
function showLength(str) {
	document.getElementById("inputlength").innerHTML = str.length;
}
