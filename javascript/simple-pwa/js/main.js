/* eslint-disable no-undef */
/* eslint-disable indent */
/* eslint-disable no-tabs */
$(document).ready(() => {
  const _url = 'https://my-json-server.typicode.com/ilham76c/belajar/product';
	let dataResults = '';
	let catResults = '';
	let categories = [];

	function renderPage(data) {		
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
	}

	// fresh data from online
	let networkDataReceived = false;
	let networkUpdate = fetch(_url).then(function(response) {
		return response.json();
	}).then(function(data) {
		networkDataReceived = true;
		renderPage(data);
	});

	caches.match(_url).then(function(response) {
		if (!response) {
			throw Error('no data on cache');
		}
		return response.json();
	}).then(function(data) {
		if (!networkDataReceived) {
			renderPage(data);
			console.log('render data from caches');
		}
	}).catch(function() {
		return networkUpdate
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
}); // end of document ready jquery

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/javascript/simple-pwa/service-worker.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}
