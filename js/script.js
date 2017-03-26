var url = 'https://restcountries.eu/rest/v2/name/';
var countriesList = $('#countries');

$('#search').click(searchCountries);
$('#country-name').keyup(function(event) { 
	if(event.keyCode == 13) { 
		searchCountries();
	} 
});

function searchCountries() {
  	var countryName = $('#country-name').val();
	if(!countryName.length) countryName = 'Poland';
	$.ajax({
		url: url + countryName,
		method: 'GET',
		success: showCountriesList
	});
}

function showCountriesList(resp) {
  countriesList.empty();
  resp.forEach(function(item) {
	var kraj = '<ul class="kraj"><li class="name">' + item.name + '</li><li><img src="' + item.flag + '" class="flag"></li><li class="capital">Capital: <span>' + item.capital + '</span></li><li class="population">Population: <span>' + item.population + '</span></li></ul>';
	$('<li>').html(kraj).appendTo(countriesList);
});
}
