import toDb from "../member/blog.html";
import store from "../validate/reg.html";

function DatetoStr(DateInput) {
	return DateInput.toString();
}

var outform = toDb();
var BlogDate = DatetoStr(Date()); 
var blogs;
var category = [];
var bloglogs = {};
var follower = [];
var following = [];

bloglogs.blog = BlogDate;

var user = {
	"username": username,
	"fname":fname,
	"lname":lname,
	"email":(email).toString(),
	"password":password,
	"category":CatToString(category),
	"blogs":blogToString(bloglogs),
	"follower":follower,
	"following":following
};

// Stringify Array follower

function folwerToString(follower) {
	var folwerString = localStorage.setItem("follower", JSON.stringify(follower));
	return folwerString;
}
 // Get follower back as Array

function folwerToArray(follower) {
	var werBack = localStorage.getItem("follower");
	return JSON.parse(werBack);
}

// Stringify Array Following

function CatToString(following) {
	var winString = localStorage.setItem("following", JSON.stringify(following));
	return winString;
}
 // Get Following back as Array

function catToArray(following) {
	var winBack = localStorage.getItem("following");
	return JSON.parse(winBack);
}

// Stringify object bloglogs

function blogToString(bloglogs) {
	var blogString = localStorage.setItem("bloglogs", JSON.stringify(bloglogs));
	return blogString;
}
 // Get Blog back as Object

function blogToObj(bloglogs) {
	var blogBack = localStorage.getItem("bloglogs");
	return JSON.parse(blogBack);
}

// Stringify Array Category

function CatToString(category) {
	var catString = localStorage.setItem("category", JSON.stringify(category));
	return catString;
}
 // Get Category back as Array

function catToArray(category) {
	var catBack = localStorage.getItem("category");
	return JSON.parse(catBack);
}

// Stringify Object User

function UserToString(user) {
	var userString = localStorage.setItem("user", JSON.stringify(user));
	return userString;
}
 // Get User back as Object

function userToObj(user) {
	var usrBack = localStorage.getItem("user");
	return JSON.parse(usrBack);
}




// ---------------------------------------------------

function saveData() {
	var storageKey = document.getElementById( 'storageKey' ),
	storageValue = document.getElementById( 'storageValue' );
	if ( storageKey.value ) {
		localStorage.setItem( storageKey.value, storageValue.value );
		alert( "Data successfully stored" );
	} else {
		alert( "Please enter storage KEY item" );
	}
}
function loadData() {
	var storageKey = document.getElementById( 'storageKey' ),
	storageValue = document.getElementById( 'storageValue' );
	if ( storageKey.value ) {
		storageValue.value = localStorage.getItem( storageKey.value );
		alert( 'Data successfully loaded: "' + storageKey.value + ': ' + storageValue.value + '"' );
	} else {
		alert( "Please enter storage KEY item" );
	}
}
window.onload = function() {
	loadData();
	window.onstorage = function( e ) {
		var params = ["key","oldValue","newValue","url","storageArea"];
		var k, s = "";
		while( k = params.shift() ) {
		s += "<b>" + k + "</b>: " + e[ k ] + "<br/>";
		}
		var div = document.createElement('div');
		div.innerHTML = s;
		document.body.appendChild( div );
	}
}