
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyDugUZh1BLgrwUFJpuGKFt--tVHyYw2vsE",
      authDomain: "kwitter-cfa90.firebaseapp.com",
      databaseURL: "https://kwitter-cfa90-default-rtdb.firebaseio.com",
      projectId: "kwitter-cfa90",
      storageBucket: "kwitter-cfa90.appspot.com",
      messagingSenderId: "371312300282",
      appId: "1:371312300282:web:1a51f6eb8f8c4455603943"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    username=localStorage.getItem("User name");
    document.getElementById("user_name").innerHTML="Welcome" + username + "!";

    function addRoom()
{
      room_name=document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name",room_name);

      window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redictToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function redictToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("User name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}
