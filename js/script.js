$("document").ready(function(){
        $("#send").click(function(){
            var clientName = $("#name").val()
            var clientPhone = $("#number").val()
            var clientText = $("#text").val()
            var clientButton = 2
            $.ajax({
                type: "POST",
                url: "https://www.play.sc/sendsms_railkaru",
                data: "name="+clientName+"&phone="+clientPhone+"&text="+clientText+"",
                success: function(msg){

                    inst.close();
                }
            });
            $('#Modal').modal('hide');
            $('#Modal2').modal('show');
            return false;
            return false;
        });
});

jQuery(function($){
   $("#number").mask("+7 (999) 999-99-99");
});