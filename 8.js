var arr = ['Hola','un shah','esta','beacoup','si esta','beacoup'];
 
    function removeDuplicates(arr) {
        return arr.filter((item,index) => 
            arr.indexOf(item) === index);
    }
 
    console.log(removeDuplicates(arr));