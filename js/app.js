$(document).foundation();


// Initialize Firebase
var config = {
  apiKey: "AIzaSyBhwGSOd22ieHAR2xeoWzwR0EtBsfh_ivE",
  authDomain: "wtfyouwearing.firebaseapp.com",
  databaseURL: "https://wtfyouwearing.firebaseio.com",
  projectId: "wtfyouwearing",
  storageBucket: "wtfyouwearing.appspot.com",
  messagingSenderId: "717676276520"
};
firebase.initializeApp(config);

var database = firebase.database();

$('.button').on('click',function(){
  database.ref('users/').child($(this).parent().attr('id')).set($(this).html());
})

// Listener
database.ref().on('value',function(snapshot){
  var snap = snapshot.val();
  var user1color = snap.users.user1;
  var user2color = snap.users.user2;
  $('#user1shirt').css('background-color', user1color.toLowerCase());
  $('#user2shirt').css('background-color',user2color.toLowerCase());
  $('#user1shirt').text('Shirt Color: '+user1color);
  $('#user2shirt').text('Shirt Color: '+user2color);
  if(user1color === 'White'){
    $('#user1shirt').css('color', 'black');
  }
  else{
    $('#user1shirt').css('color', 'white');
  }
  if(user2color === 'White'){
    $('#user2shirt').css('color', 'black');
  }
  else{
    $('#user2shirt').css('color', 'white');
  }
})

// $('.button').each(function(index,elem){
//   var color = $(this).html().toLowerCase();
//   $(this).css('background-color',color);
//   if(color === 'white'){
//     $(this).css('color','black');
//   }
// })
