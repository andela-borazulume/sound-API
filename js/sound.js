var sound = {
  init: function(){
  sound.submitButton();
  },

  submitButton: function(){
    $('#btn').click(function(){
      var getInput = $('#get').val();
      $('#clear').html('');
      sound.apiRequest(getInput);
    });
  },

  apiRequest: function(getInput){
    var url = "http://api.soundcloud.com/comments.json?client_id=91a5146d773bfd35cb350a18518e54a6&q="+getInput+"&limit=10";
    $.getJSON(url, function(data){
      $.each(data, function(i){
        var show = data[i].body;
        $('#display').append("<li>"+show+"</li>");
      });
    });
  }
};
$(document).ready(function(){
  sound.init();
});