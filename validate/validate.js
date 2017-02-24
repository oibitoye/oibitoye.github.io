// window.onload = function() {

//   // Check for LocalStorage support.
//   if (localStorage) {

//     // Add an event listener for form submissions
//     document.getElementById('contactForm').addEventListener('submit', function() {
//       // Get the value of the name field.
//       var name = document.getElementById('name').value;

//       // Save the name in localStorage.
//       localStorage.setItem('name', name);
//     });

//   }

// }

// window.onload = function() {
//   ...

//   // Retrieve the users name.
//   var name = localStorage.getItem('name');

//   if (name != "undefined" || name != "null") {
//     document.getElementById('welcomeMessage').innerHTML = "Hello " + name + "!";
//   } else
//     document.getElementById('welcomeMessage').innerHTML = "Hello!";
//   }
// }

$().ready(function() {
	$("#reg").validate({
		rules: {
			fname: "required",
			lname: "required",
			username: {
				required: true,
				minlength: 2
			},
			password: {
				required: true,
				minlength: 6
			},
			password_confirmation: {
				required: true,
				minlength: 6,
				equalTo: "#password"
			},
			email: {
				required: true,
				email: true
			},
			topic: {
				required: "#category:checked",
				minlength: 1
			},
			agree: "required"
		},
			messages: {
				fname: "Please enter your firstname",
				lname: "Please enter your lastname",
				username: {
					required: "Please enter a username",
					minlength: "Your username must be at least 2 characters long"
				},
				password: {
					required: "Please enter a password",
					minlength: "Password must be at least 6 characters long"
				},
				password_confirmation: {
					required: "Please enter a password",
					minlength: "Password must be at least 6 characters long",
					equalTo: "Password must be same as above"
				},
				agree: "Please accept our policy to proceed",
				topic: "Please select at least one category"
			}
		});

	$("#username").focus(function() {
		var fname = $("#fname").val();
		var lname = $("#lname").val();
		if (fname && lname && !this.value) {
			this.value = fname + "." + lastname;
		}
	});

	var category = $("#category");

	var x = category.is(":checked");
	var topics = $("#category_topic")[x ? "removeClass" : "addClass"](hide);
	var cat_input = topics.find("input").attr("disabled", !x);

	category.click(function() {
		topics[this.checked ? "removeClass" : "addClass"]("hide");
		cat_input.attr("disabled", !this.checked);
	});
});



