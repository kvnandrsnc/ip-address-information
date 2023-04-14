const container = document.getElementById('container');
const ipUser = document.getElementById('ip');
const networkUser = document.getElementById('network');
const cityUser = document.getElementById('city');
const versionUser = document.getElementById('version');
const asn_orgUser = document.getElementById('asn-org');
const city_region_regionCodeUser = document.getElementById('city-region-region_code');
const country_countryCodeUser = document.getElementById('country-country-code');
const latidude_longitudeUser = document.getElementById('latidude-longitude');
const languageUser = document.getElementById('language');
const timezone_utcOffsetUser = document.getElementById('timezone-utc_offset');
const loader_div = document.getElementById('loader');
const data_div = document.getElementById('data');
const loadBtn = document.getElementById('load-btn');

function loadData() {
    loadBtn.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Cargando...'
    getData();
}

// function showLoader() {
//     loader_div.classList.add('show');
// }

function hideLoader() {
    loader_div.classList.add('hide');
    data_div.classList.add('show')
}

function getData() {
    // showLoader();
    fetch('https://ipapi.co/json/')
        .then((response) => response.json())
        .then(data => {
            hideLoader()
            console.log(data)
            showData(data)
        })
}

function showData(data) {
    ipUser.textContent = data.ip;
    networkUser.textContent = data.network;
    versionUser.textContent = data.version;
    asn_orgUser.textContent = data.asn + ' ' + data.org;
    city_region_regionCodeUser.textContent = data.city + ', ' + data.region + ', ' + data.region_code;
    country_countryCodeUser.textContent = data.country_name + ', ' + data.country_code;
    latidude_longitudeUser.textContent = data.latitude + ', ' + data.longitude;
    languageUser.textContent = data.languages;
    timezone_utcOffsetUser.textContent = data.timezone;
}

// Change theme
function changeTheme() {
    const themeBtn = document.getElementById('themeBtn');
    const themeIcon = document.getElementById('themeIcon');

    if (themeBtn.classList.contains('active')) {
        // Light mode active
        document.body.classList.toggle('dark-theme')
        themeBtn.classList.toggle('active');
        themeBtn.classList.remove('btn-light');
        themeBtn.classList.add('btn-dark');
        themeIcon.textContent = 'light_mode';
    } else {
        // Dark mode active
        document.body.classList.toggle('dark-theme')
        themeBtn.classList.toggle('active');
        themeBtn.classList.remove('btn-dark');
        themeBtn.classList.add('btn-light');
        themeIcon.textContent = 'dark_mode';
    }
}