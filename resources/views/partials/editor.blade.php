<div class="row">
    <div class="col-md-6">
        <div class="panel panel-default">
            <div class="panel-heading">Code Editor</div>

            <pre id="editor">{{ Storage::exists("pythonCode/".Auth::user()->email."/lesson/". $lesson->id. "/input.py") ? Storage::get("pythonCode/".Auth::user()->email."/lesson/". $lesson->id. "/input.py") : ""}}</pre>
            <button class="btn btn-primary" id="button-save" type="button" name="button">Save</button>

        </div>
    </div>
    <div class="col-md-6">
      <div class="panel panel-default">
        <div class="panel-heading">Output</div>
        {{-- Here is where the game should go --}}
        <div id="response"></div>
      </div>
    </div>
</div>
