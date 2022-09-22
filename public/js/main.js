const cityName = document.getElementById('cityName');
const submitbtn = document.getElementById("submitbtn");
const city_name = document.getElementById('city_name');
const temp = document.getElementById('temp_real_val');
const temp_status = document.getElementById('temp_status');
const datahide = document.querySelector('.middle_layer');

const getinfo = async (event) => {
    event.preventDefault()
    let cityval = cityName.value;
    if (cityval === "") {
        city_name.innerText = `Please Write The Name Before Search`;
        datahide.classList.add('data_hide')
    }
    else {
        try {
            let url = `https://api.openweathermap.org//data/2.5/weather?q=${cityval}&units=metric&appid=387a193e2a678a8bc5a789c190e02e92`
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];

            city_name.innerText = `${arrData[0].name},${arrData[0].sys.country}`;
            temp.innerText = arrData[0].main.temp;
            const tempMood = arrData[0].weather[0].main;
            if (tempMood == "clear") {
                temp_status.innerHTML = "<i class='fa-solid fa-sun' style='color: #eccc68;'></i>"
            }
            else if (tempMood == "Clouds") {
                temp_status.innerHTML = "<i class='fa-solid fa-cloud' style='color: #f1f2f6;'></i>"
            }
            else if (tempMood == "rain") {

                temp_status.innerHTML = "<i class='fa-duotone fa-cloud-rain' style='color: #f1f2f6;'></i>"
            }
             else {
                temp_status.innerHTML = "<i class='fa-solid fa-sun' style='color: #eccc68;'></i>"
            }
            datahide.classList.remove('data_hide')
        }
        catch {
            city_name.innerText = `Plz enter the city name properly`;
            datahide.classList.add('data_hide')
        }
    }
}

submitbtn.addEventListener('click', getinfo);