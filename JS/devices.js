let devicesApi =
  "https://my-json-server.typicode.com/Jeck99/fake-server/devices";
async function getDevices() {
  try {
    return await fetch(`${devicesApi}`).then((response) => response.json());
  } catch (error) {
  } finally {
  }
}

let devicesImg = [
  "0.jpg",
  "1.jpg",
  "2.webp",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.webp",
  "7.webp",
  "8.webp",
  "9.webp",
  "10.webp",
  "11.jpg",
  "12.jpg",
  "13.webp",
  "14.webp",
];

function printDeviceToScreen() {
  device_id.innerHTML = `<div class="d-flex justify-content-center" id="spiner">
    <div class="spinner-border" role="status">
    </div>
  </div>`;
  setTimeout(() => {
    getDevices().then((soultion) => {
      soultion.forEach((item, index) => {
        device_id.innerHTML += `<div class="card col-4">
                <img src="/Gallery/Devieces/${devicesImg[index]}" class="card-img-top"/>
                <div class="card-body d-flex flex-column align-items-center bg-dark text-light">
                <h1>${item.brand}</h1>
                 <p>Phone ID: ${item.id}</p>
                 <p>Phone Price: ${item.price}$</p>
                 <p>Stock: ${item.isAvailable}</p>
                 <p>Phone Date: ${item.createdAt}</p>
                 <p>Color: ${item.color}</p>
                 <p>Ram: ${item.ram}</p>
               </div>
            </div>`;
      });
    });
    document.getElementById("spiner").remove();
  }, 850);
}
printDeviceToScreen();