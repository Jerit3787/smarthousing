document.addEventListener("DOMContentLoaded", () => {
    M.AutoInit();
    initUser();
    var elemsAutoComplete = document.querySelector('.autocomplete');
    var instances = M.Autocomplete.init(elemsAutoComplete, {
        // specify options here
        minLength: 0, // shows instantly
        data: [
            { id: 12, text: "Shah Alam, Selangor" },
            { id: 13, text: "Johor Bharu, Johor" },
            { id: 42, text: "Semenyih, Selangor" }
        ],
        onAutocomplete: () => {
            var data = [
                "Shah Alam, Selangor",
                "Johor Bharu, Johor",
                "Semenyih, Selangor"
            ]
            const node = document.querySelector("#location-search");
            if (data.indexOf(node.value) != -1)
                search();
        }
    });

    const node = document.querySelector("#location-search");
    node.addEventListener("keyup", function (event) {
        console.log("test")
        if (event.key == "Enter") {
            search();
        }
    });

    load_data(8);
})


function search() {
    const node = document.querySelector("#location-search");
    const queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);
    urlParams.set("location", node.value);
    urlParams.set("type", document.querySelector('#residential-type').textContent);
    urlParams.set("type-icon", document.querySelector('#residential-type-icon').textContent);
    urlParams.set("room", document.querySelector('#room-configuration').textContent);
    urlParams.set("price", document.querySelector('#price-range').textContent)
    var linkRedirect = window.location.origin + "/search/?" + urlParams.toString();
    window.location.href = linkRedirect
}

function updateResidential(data, icon) {
    document.querySelector('#residential-type').textContent = data;
    document.querySelector('#residential-type-icon').textContent = icon;
}

function updateRoom(data, icon) {
    document.querySelector('#room-configuration').textContent = data;
}

function updatePrice(data) {
    document.querySelector('#price-range').textContent = data;
}