const USERS_API =
  "https://my-json-server.typicode.com/Jeck99/fake-server/users";
let user_Table = document.getElementById("user_Table");
async function getUsers() {
  try {
    return await fetch(USERS_API).then((res) => res.json());
  } catch (error) {
    console.log("error");
  } finally {
  }
}
let counter = 1
// let alertSign = 
function usersTable() {
  user_spiner.innerHTML = `<div class="d-flex justify-content-center" id="spiner">
<div class="spinner-border" role="status"></div>
</div>`;
  setTimeout(() => {
    getUsers().then((result) => {
      result.forEach((item) => {
        user_Table.innerHTML += ` 
                <tr class="bg-primary bg-gradient text-light">
                <td>${item.age}</td>
                <td>${item.name.first}</td>
                <td>${item.name.last}</td>
                <td>${item.email}</td>
                <td>${item.index}</td>
                <td>${item.phone}</td>
                <td><img src="https://randomuser.me/api/portraits/med/men/${counter++}.jpg"></td>
                <td><button onclick="deleteId()" style="background:red; color:white;">Delete</button></td>
                </tr>
                `;
      });
    });
    document.getElementById("spiner").remove();
  }, 850);
}
usersTable();


async function deleteId() {
  try {
    return await fetch(USERS_API)
    .then((res) => {return res.json()}
    );
  } catch (error) {
    console.log("error");
  } finally {
    alert("The item was deleted!")
  }
}

async function sendObject() {
  const data = {
      age: Inputage.value,
      name: {
          last: "",
          first: ""
      },
      email: InputLastName.value,
      index: Inputemail.value,
      phone: Inputindex.value,
      picture: Inputphone.value
  }
  try {
      await fetch(USERS_API, {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
              'Content-Type': 'application/json'
          }
      }
      )

  }
  catch (error) {
      console.log("error");
  }
  finally {
      alert("sended to us :)")
   }
}