const numberModule = (function () {

    //chache DOM
    let $el = $("#number-module"),
        $button = $el.find("button"),
        $input = $el.find("input");

    //bind events
    $button.on("click", getResult($input));

    render();
    
    //methods
    function getResult(center){

    }
    
    //return
    return {
        
    }

} ())