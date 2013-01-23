var txt;
var txt1;
var txt2="foo";
var txt3;
var prevBt="undefined";
var ajax_xml;
$(document).ready(function(){


    function loadfail(){
	alert("Fakkapp!");
    }
    
    function parse(xml){
	alert("Recieved "+xml);
	ajax_xml=xml; /**
			 Polluting global namespace, but it makes the xml-object 
			 directly available in chrome console
			 Just for debugging
		      */
	$("#output").append("<h3>Received XML: </h3>"
			    +xml.firstChild.textContent);
	$(this).find("text").each(function(){
		$("#output").empty();
		$("#output").append($(this).find('text').text());
	    });
	
    }

    $("button").click(function(){


	$(this).fadeTo(1000,0.5);//fades out currently pressed button

	$("#"+prevBt).fadeTo(1000,1);//fade in previous button

	//$("#output").load("tekst.txt");
	
	$.ajax({
		crossDomain: true,	    
		    url:"stuff.xml", //Typo was here! ("URL" not "url")
		    dataType:"xml", 
		    success: parse,
		    error: loadfail	    
	});
	prevBt=this.id;//sets previous button
	//$("#output").html(txt);

    });
});
