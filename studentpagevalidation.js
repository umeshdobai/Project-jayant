
function validateform() {
        let gender=document.getElementsByName("gender");
        let sid=document.getElementsByName("sid");
        let sname=document.getElementsByName("sname");
        let mobile=document.getElementsByName("mobile");
        let email=document.getElementsByName("email");
        let marr=document.getElementsByName("marr");
       
        if(sid=="")
        {

        }
        else if(sname="")
        {
            
        }
        else if(gender[0].checked==true)
        {
            
        }
        else if(gender[1].checked==true)
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
        $("input[type='date']").css("background-color","#EEF0F9");
        $("input[type='email']").css("background-color","#EEF0F9");
        $("textarea").css("background-color","#EEF0F9");
        $("select").css("background-color","#EEF0F9");

    });

