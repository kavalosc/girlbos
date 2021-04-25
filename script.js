
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyCbOOM9od3X-4qitPncJrZg3dEpJ6Bvt-s",
  authDomain: "uceo-819ce.firebaseapp.com",
  projectId: "uceo-819ce",
  storageBucket: "uceo-819ce.appspot.com",
  messagingSenderId: "931845704435",
  appId: "1:931845704435:web:e370106d35b54e69140586",
  measurementId: "G-KRFDR51P4N"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();


var loc=-1;
function locateme() {

  navigator.geolocation.getCurrentPosition(
    (position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      console.log(position.coords)
      loc = {
        Latitude: latitude, Longitude: longitude,

      };
      //   return lLocData;
    },
    () => {
      status.textContent = "Unable to retrieve your location";
    }
  );
}
const btn = document.querySelector(".btn")
btn.addEventListener("click", () => {
  locateme();
  console.log(loc);
  if (loc === "undefined") {
    document.querySelector(".res").innerHtml = "Click again";
  } else {
    var myloc = JSON.stringify(loc).split(",");
    document.querySelector(".res").innerHTML = myloc[0] + "<br>" + myloc[1];
    document.queryselector(".response").innerHTML = "location registered";
    location.querySelector(".btn").style.backgroundColor = "green";
  }
})
const Name = document.getElementById('name');
const email = document.getElementById('email');

const addBtn = document.getElementById('addBtn');
const updateBtn = document.getElementById('updateBtn');
const removeBtn = document.getElementById('removeBtn');

const db = firebase.database().ref('/users').child("object");


addBtn.addEventListener('click', () => {
 
  db.set({
    first_name: Name.value,
    your_email: email.value,
    Register_location: loc
  });

});



