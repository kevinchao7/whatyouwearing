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
  database.ref('users/').child($(this).parent().attr('id')).child('color').set($(this).html());
  database.ref('users/').child($(this).parent().attr('id')).child('date').set(moment().format("dddd, MMMM Do YYYY, h:mm a"));
})

// Listener
database.ref().on('value',function(snapshot){
  var snap = snapshot.val();
  var user1color = snap.users.user1.color;
  var user1date  = snap.users.user1.date;
  var user2color = snap.users.user2.color;
  var user2date  = snap.users.user2.date;

  $('#user1shirt').css('background-color', user1color.toLowerCase());
  $('#user2shirt').css('background-color', user2color.toLowerCase());
  $('#user1shirt').text('Shirt Color: '+user1color);
  $('#user2shirt').text('Shirt Color: '+user2color);
  $('#user1date').text('Last Updated: '+user1date);
  $('#user2date').text('Last Updated: '+user2date);
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
