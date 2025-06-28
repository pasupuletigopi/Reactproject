export {mobileNumber , validemail}
 
 
 function mobileNumber(Mobilevalid){

               if (Mobilevalid.toString.length <= 10){

                return true
               }
               else{

               return false
               }
            }
function validemail(email){


    if (email.length <10 ){

       return true
    }
    else {
        return false
    }
}


