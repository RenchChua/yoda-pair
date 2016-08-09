$(function(){

  var $input = $('#input-text');
  var convert = $('#input-text').val(); //getting text in text field
  var converted_text = convert.split(" ").join('+');
  var $btn = $('#yod-btn');
  var $result = $('#result');
  var url = "https://yoda.p.mashape.com/yoda?sentence="+converted_text;

  $btn.on('click', function() {

    $(this).hide();

    $result.load(url, completeFunction);
  });

  function completeFunction(responseText, textStatus, request) {
    // 6. see the return $.load();
    console.log(responseText, textStatus, request);

    // 7. implement changes as per first lab
    $result.css('border', '1px solid #e8e8e8');

    // 8. check if the callback can detect error by changing the url
    if(textStatus == 'error') {
        $result.text('An error occurred during your request: ' +  request.status + ' ' + request.statusText);
    }
  }
});
