	// for blog posts

	function setdbBlogLocal() {
		var mem_name = localStorage.getItem('mem_name');
		var mem_email = localStorage.getItem('mem_email');
		var mem_blog = localStorage.getItem('mem_blog');

   		document.getElementById("mem_name").value = memberName;
   		document.getElementById("mem_email").value = memberEmail;
   		document.getElementById("mem_blog").value = memberBlog;

   		htmlElem.