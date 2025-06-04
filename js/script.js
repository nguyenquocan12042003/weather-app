document.getElementById("searchBtn").addEventListener("click", function () {
    const cityInput = document.getElementById("cityInput").value.trim();
    const apiKey = "d46494a02b2c6757f2103a6d89a3ea9e";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=metric&lang=vi`;
  
    if (!cityInput) {
      alert("Vui lòng nhập tên thành phố!");
      return;
    }
  
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Không tìm thấy thành phố!");
        }
        return response.json();
      })
      .then((data) => {
        document.getElementById("result").innerHTML = data.name;
        document.getElementById("humidity").innerHTML = `${data.main.humidity}%`;
        document.getElementById("wind").innerHTML = `${data.wind.speed} m/s`;
        document.getElementById("pressure").innerHTML = `${data.main.pressure} hPa`;
        document.getElementById("errorMsg").innerHTML = ""; // Clear lỗi cũ
      })
      .catch((error) => {
        document.getElementById("errorMsg").innerHTML = `Lỗi: ${error.message}`;
        // Clear dữ liệu cũ khi lỗi
        document.getElementById("result").innerHTML = "";
        document.getElementById("humidity").innerHTML = "";
        document.getElementById("wind").innerHTML = "";
        document.getElementById("pressure").innerHTML = "";
      });
  });
  