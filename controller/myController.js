$(document).ready(() => {

    //addRow function
    function addRow(data) {
        var tr = $("<tr>", {
            id: data._id,
            item: data.item,
            quantity: data.quantity,
            priority: data.priority
        });
        var btns = $("<div>").append($("<button>", {
            class: "btn btn-info btn-md edit"
        }).text("Edit"),
            $("<button>", {
                class: "btn btn-danger delete btn-md",
            }).text("Delete")
        )
        $(tr).append(
            $("<td>").text(data.item),
            $("<td>").text(data.quantity),
            $("<td>").text(data.priority),
            $("<td>").append(btns)
        ).appendTo($('tbody'));
    }


    //retrieveAllData Function
    function retrieveAllData() {
        $.ajax({
            url: "/ais/retrieveItems",
            crossDomain: true,
            type: "GET",
            success: function (data) {
                $('tbody').empty();
                data.forEach(element => {
                    addRow(element);
                });
            },
            error: function (e) {
                console.log(e)
            }
        })
    }

    //invoking retrieveAllData function
    retrieveAllData();

    $(".btnRetrieveAllData").on('click', function () {
        // $('tbody').empty();
        console.log("click");
        
        retrieveAllData();
    })


})