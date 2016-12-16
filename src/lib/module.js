const module = (function () {

    //chache DOM
    let $el = $("#number-module"),
        $button = $el.find("button"),
        $input = $el.find("input"),
        $reset = $el.find("reset");

    //bind events
    $button.on("click", permutationsSubset($input));


    //methods


    //return
    return {
        getSubset: permutationsSubset,
        reset: reset
    }

} ())