

$(document).ready(function () { 
	size=0;
	$("#bud").dblclick(function () {	
		if (size==0) {
			$(this).animate({width: "140%" });
		}
		if (size==1) {
			$(this).animate({width: "70%" });
			size=-1;
		}
		size++;
		return;
	});

    $("#signup").click(function () {
        var inputboxname=$("#inputboxname").val();
        var inputboxemail=$("#inputboxemail").val();

        if(inputboxname==""){
            alert("A nev mező kitöltése kötelező!");
            $("#inputboxname").css({'border':'2px solid #d34017','background-color':'#fde9e1'});
            return;
        }
        if(inputboxemail==""){
            alert("Az email mező kitöltése kötelező!");
            $("#inputboxemail").css({'border':'2px solid #d34017','background-color':'#fde9e1'});
            return;
        }

		if(!$("#contract1").is(":checked")) {
			alert("A szerzodesi feltetelek elfogadása kötelező!");
			return;
		}
		
		if(!$("#contract2").is(":checked")) {
			alert("A beleegyezésed nélkül nem tudunk neked lefelet küldeni!");
			return;
		}       
    });
   
});