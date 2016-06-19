//Check the document is loaded and the DOM is ready to be manipulated.
$(function() {

  $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
        
});



  //Initialise Ace editor
  var editor = ace.edit("editor");

  //Change block scrolling behavior to remove console warning.
  editor.$blockScrolling = Infinity;

  //Set the ace theme
  editor.setTheme("ace/theme/twilight");

  //Set the mode of ace
  editor.session.setMode("ace/mode/python");

  $("#button-save").click(function(){
    $.ajax({
      url: '/code',
      type: "post",
      data: {
        lesson_id: $("input[name='lesson_id']").val(),
        data: editor.getValue()
      },
      success: function(data){
        //This code runs after the python code has been validated. Data is the list of commands.
        $("#response").html(data);
      }
    });
  });

});
