console.log('client.js has been loaded')

$(document).ready(onReady);

function onReady() {
    console.log('jquery has been loaded');
    $('#submitButton').on('click', addNew);
    getAllSongs();    
}

function getAllSongs() {
    $.ajax({
        method: 'GET',
        url: '/record'
    })
    .then(function(records) {
        console.log(records);
        $('#recordsList').empty();
        records.forEach(function(record){
            $('#recordsList').append(
            `<tr>
                <td>${record.title}</td>
                <td>${record.artist}</td>
                <td>${record.year}</td>
                <td>${record.cost}</td>
            </tr>`
            );
        })
    })
}

// this is the start of POST request

function addNew() {
    const newSong = {
        title: $('#titleInput').val(),
        artist: $('#artistInput').val(),
        year: $('#yearInput').val(),
        cost: $('#costInput').val(),
    };
    console.log('new song object', newSong);
    $.ajax({
        method: 'POST',
        url: '/record',
        data: newSong
    })
    .then(function(records) {
        console.log(records);
        getAllSongs();
    });
}
