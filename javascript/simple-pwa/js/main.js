/* eslint-disable no-undef */
/* eslint-disable indent */
/* eslint-disable no-tabs */
$(document).ready(() => {
  const _url = 'https://my-json-server.typicode.com/ilham76c/belajar/product';
	let dataResults = '';
	let catResults = '';
	let categories = [];

	$.get(_url, (data) => {
		$.each(data, (key, items) => {
			dataResults += `
				<div>
					<h3>${items.name}</h3>
					<p>${items.category}</p>
				</div>
			`;

			if ($.inArray(items.category, categories) === -1) {
				categories.push(items.category);
				catResults += `<option value='${items.category}'>${items.category}</option>`;
			}
		});

		$('#products').html(dataResults);
		$('#cat_select').html('<option value="all">Semua</option>' + catResults);
	});

	$('#cat_select').on('change', function() {
		updateProduct($(this).val());
	});

	function updateProduct(cat) {
		let _newUrl = _url;
		dataResults = '';

		if (cat !== 'all') {
			_newUrl = _url + '?category=' + cat;
		}
		$.get(_newUrl, (data) => {
			$.each(data, (key, items) => {
				dataResults += `
					<div>
						<h3>${items.name}</h3>
						<p>${items.category}</p>
					</div>
				`;
			});

			$('#products').html(dataResults);
		});
	}
});
