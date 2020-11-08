$(document).ready(function () {
    $("form").submit(orderIceCream);
    $("#style").change(styleChosen);

    function styleChosen() {
        var style = $("#style").val();
        $("#flavorGroup").show();

        if (style === "cone") {
            $("#coneGroup").show();
            $("#scoopsGroup").hide();
            $("#toppingGroup").hide();
            $("#maltGroup").hide();
        } else if (style === "dish") {
            $("#coneGroup").hide();
            $("#scoopsGroup").show();
            $("#toppingGroup").hide();
            $("#maltGroup").hide();
        } else if (style === "sundae") {
            $("#coneGroup").hide();
            $("#scoopsGroup").hide();
            $("#toppingGroup").show();
            $("#maltGroup").hide();
        } else if (style === "malt") {
            $("#coneGroup").hide();
            $("#scoopsGroup").hide();
            $("#toppingGroup").hide();
            $("#maltGroup").show();
        }
    }


    function orderIceCream(event) {
        event.preventDefault();

        var style = $("#style").val();
        var flavor = $("#flavor").val();

        if (style === "cone") {
            var cone = $("#cone").val();
            $("#summary").text(`One ${flavor} ${cone} ${style} coming up!`);
        } else if (style === "dish") {
            var scoops = $("#scoops").val();
            $("#summary").text(`One ${scoops}-scoop ${style} of ${flavor} coming up!`);
        } else if (style === "sundae") {
            var topping = $("#topping").val();
            $("#summary").text(`One ${flavor} ${style} with ${topping} coming up!`);
        } else if (style === "malt") {
            var malt = $("#malt").val();
            $("#summary").text(`One ${flavor} ${style} with ${malt} ${style} coming up!`);
        }

    }
});