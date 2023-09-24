var expect = function(val) {
    function toBe(data){
     if(val === data){
       return  true
     }else{
       throw new Error('Not Equal')
     }
   }
   function notToBe(data){
     if(val !== data){
       return  true
     } else{
       throw new Error("Equal")
     }
   }
   return {
     toBe,
     notToBe
   }
};
