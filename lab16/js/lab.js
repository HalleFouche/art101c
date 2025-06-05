/*
 * Author: Halle
 * Created: June 3, 2025
 * Lab 16: JSON and APIs 
 */

function getComic() {
    $.ajax({
        url: "https://xkcd.com/info.0.json", // latest comic
        type: "GET",
        dataType: "json",
        success: function (comicObj) {
            console.log(comicObj); // for debugging

            // Construct HTML content
            let comicHTML = `
                <h3>${comicObj.title}</h3>
                <img src="${comicObj.img}" alt="${comicObj.alt}" title="${comicObj.alt}">
                <p>${comicObj.alt}</p>
            `;

            // Inject into the output div
            $("#output").html(comicHTML);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log("Error:", textStatus, errorThrown);
        }
    });
}

// Run function when page is ready
$(document).ready(function () {
    getComic();
});