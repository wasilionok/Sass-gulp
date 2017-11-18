

//$.getJSON('../package.json', function (data){
//       $('span').append(data.author);
//    
//    });

$.getJSON('../package.json', function(data) {
        wstaw(data.author);
});

function wstaw(autor) {
        $('span').append(autor);
}