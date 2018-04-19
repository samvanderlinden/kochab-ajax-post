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
        // for(let i = 0; i < records.length; i++){
        //     $('#recordsList').append(``)
        //     $('#recordsList').append(`<li>${records[i].title} by ${records[i].artist}</li>`);
        // }
        records.forEach(function(record){
            $('#recordsList').append(
            `<tr>
                <td>${record.title}</td>
                <td>${record.artist}</td>
                <td>${record.year}</td>
                <td>${record.cost.toLocaleString('en', { style: 'currency', currency: 'USD' }).slice(0, -3)}</td>
            </tr>`
            );
        })
    })
}