//Ham mui ten voi nhieu tham so
let print = (name, age) => {
  console.log(`Name: ${name}, Age: ${age}`); // `` : chuỗi nội suy
};

//Gọi Hàm
print("HieuNN", "21");

//Hàn mũi tên có 1 tham số
let area = (size) => size * size;
//Tính diện tích hình vuông
console.log(`Area: ${area(10)}`);

//Hàm mũi tên không tham số
let display = () => console.log("Hello HieuNN");
display();

//Hàm trong một Object literal
let student = {
  name: "HieuNN",
  age: 21,
  showInfo: function () {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
}
student.showInfo();


function fetchDataFromServer() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let dataResponse = "This data return from DB";
      resolve(dataResponse);
    }, 2000)
  });
}

fetchDataFromServer()
  .then(result => console.log(result))
  .catch(error => console.error(`Error: ${error.message}`))
  .finally(() => console.log("Fetched data from server"))

//