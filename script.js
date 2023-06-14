const form = document.getElementById('json-form');

form.addEventListener('submit', (event) => {
	event.preventDefault(); // フォームのデフォルト動作をキャンセル

	// フォームの入力値を取得
	const title = document.getElementById('title').value || '-';
	const lyricist = document.getElementById('lyricist').value || '-';
	const composer = document.getElementById('composer').value || '-';
	const arranger = document.getElementById('arranger').value || '-';
	const vocal = document.getElementById('vocal').value || '-';
	const chartDesigner = document.getElementById('chart_designer').value || '-';

	// JSONを生成
	const json = {
		title: title,
		lyricist: lyricist,
		composer: composer,
		arranger: arranger,
		vocal: vocal,
		chart_designer: chartDesigner
	};

	// JSONをダウンロード
	const jsonString = JSON.stringify(json, null, 2); // スペース2つ分で整形する

    // ダウンロード処理
    download(jsonString, 'music_info.json', 'text/plain');
});

// ダウンロード処理
function download(text, name, type) {
    const a = document.createElement('a');
    const file = new Blob([text], {type: type});
    a.href = URL.createObjectURL(file);
    a.download = name;
    a.click();

    URL.revokeObjectURL(a.href);
}
