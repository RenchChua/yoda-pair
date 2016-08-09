$(function(){

  var $input = $('#input-text');
  var $btn = $('#yod-btn');
  var $result = $('#result');
  var $result_container = $('.result-container');
  var $loader  = $('.loader');


  $btn.on('click', function(e) {
    var convert = $('#input-text').val(); //getting text in text field
    var converted_text = convert.split(" ").join('+');
    var url = "https://yoda.p.mashape.com/yoda?sentence="+ converted_text;

    // prevent the default behavior of the link
    e.preventDefault();

    // execute the AJAX request
    $.ajax({
      url: url,
      headers: {'X-Mashape-Key': '8o4A3dkLOgmshJz2fUkqgTnicMssp1KObfKjsn0zzakfS5UGHc',
                'Accept': 'text/plain'},
      // // show the loader before making the request
      beforeSend: function() {
        $loader.show();
      }
    }).done(successFunction)
      .fail(failFunction)
      .always(alwaysFunction);
  });

  function successFunction(responseText, textStatus, request) {
    console.log(responseText, textStatus, request);
    $result.text(responseText);
    responsiveVoice.speak(responseText, "UK English Male");
    $result_container.css('display', 'block');
    $loader.hide();
  }

  // fail function
  function failFunction(request, textStatus, errorThrown) {
    $result.text('An error occurred during your request: ' + request.status + ' ' + textStatus + ' ' + errorThrown);
  }


  // always function
  function alwaysFunction() {
  }

});
