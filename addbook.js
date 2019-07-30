
function validateform() {
        let isbn=document.getElementsByName("isbn");
        let catagory=document.getElementsByName("catagory");
        if(isbn=="")
        {
            
        }
        else
        {
            alert("* mark fields are required");
            return false;
        }
}
$(function(){
        $("input[type='text']").css("background-color","#EEF0F9");
        $("input[type='number']").css("background-color","#EEF0F9");
        $("select").css("background-color","#EEF0F9");

    });

