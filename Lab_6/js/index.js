//
// index.js
//

$(".agregar").on("click", function(e) {

    e.preventDefault();

    var name = $("#newText").val();

    $(".Lista").append(

	    `<div class="element">
	        <h2>${name}</h2>
	        <button class="agregar" id="checkButton">check</button>
	        <button class="agregar" id="deleteButton">delete</button>
	    </div>`

    );
})

$(".Lista").on("click", "#checkButton", function() { 

  	$(this).parent().toggleClass('strike');

})

$(".Lista").on("click", "#deleteButton", function() {

    $(this).parent().remove();

})