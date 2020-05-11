$(document).ready(()=>{
    var made = false;
    $(document).keypress(function(event){
        if(event.keyCode == 13)
        {
            var text = $("#text").val();
            $("#text").val("");
            $(".not-comp").append("<div class='ncard'><p>"+text+"</p><button class='done'>DONE</button><BUtton class='delete'>DELETE</BUtton></div>");
            made = true;
            $(".done").click(function(event) {
                event.stopImmediatePropagation();
                
                var data = $(this).parent().find("p").text();

                // $(this).parent().slideDown(500);
                $(this).parent().remove();
                // setTimeout(function(){
                   
                // },500);
                
                $(".comp").append("<div class='ncard'><p>"+data+"</p>");
            });
            $('.delete').click(function()
            {
                    $(this).parent().remove();
            })
        }
    });
    
    
  
    
})