console.log('client.js has been loaded')

$(document).ready(onReady);

function onReady() {
    console.log('jquery has been loaded');
    $.ajax({
        type: 'GET',
        url: '/records'
    })
    .then(function(records) {
        console.log(records);
        for(let i = 0; i < records.length; i++){
            $('#recordsList').append(`<li>${records[i].title} by ${records[i].artist}</li>`);
        }
    })
}