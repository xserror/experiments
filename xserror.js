var txt;
var txt1;
var txt2="foo";
var txt3;
var prevBt="undefined";
$(document).ready(function(){


    function loadfail(){
	alert("Fakkapp!");
    }
    
    function parse(xml){
	alert("Parsing "+xml);
	$("#output").append("ya");
	$(this).find("text").each(function(){
	    $("#output").empty();
	    $("#output").append($(this).find('text').text());
	});
	//$("#output").append("yo");
	//$("#output").append($(this).find('text').text());
    }

    $("button").click(function(){


	$(this).fadeTo(1000,0.5);//fades out currently pressed button

	$("#"+prevBt).fadeTo(1000,1);//fade in previous button

	//$("#output").load("tekst.txt");
	
	$.ajax({
	    type: "GET", 
	    URL:"./stuff.xml", 	    
	    dataType:"html", 
	    success: parse,
	    error: loadfail
	    
	});
	prevBt=this.id;//sets previous button
	//$("#output").html(txt);

    });
});
