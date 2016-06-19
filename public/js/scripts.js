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
        covertOutputToAPI(JSON.parse(data));
      }
    });
  });

  function covertOutputToAPI (data) {
    for(var i = 0; i < data.length; i++) {
      var currentCommand = data[i];
      switch (currentCommand) {
        case "character.move.up":
          characterMoveUp();
          break;
        case "character.move.down":
          characterMoveDown();
          break;
        case "character.move.left":
          characterMoveLeft();
          break;
        case "character.move.right":
          characterMoveRight();
          break;
      }
    }
    $("#response").html(data);
  }

  function characterMoveUp() {
    console.log("Move the character up");
  }

  function characterMoveDown() {
    console.log("Move the character down");
  }

  function characterMoveLeft() {
    console.log("Move the character left");
  }

  function characterMoveRight() {
    console.log("Move the character right");
  }


});
