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
        <div id="canvasArea"></div>
      </div>
    </div>
</div>

<script src="{{ asset('js/game/libs/pixi.js') }}"></script>
<script src="{{ asset('js/game/libs/jshashtable.js') }}"></script>
<script src="{{ asset('js/game/libs/howler.min.js') }}"></script>
<script src="{{ asset('js/game/gd.js') }}"></script>
<script src="{{ asset('js/game/libs/hshg.js') }}"></script>
<script src="{{ asset('js/game/commontools.js') }}"></script>
<script src="{{ asset('js/game/inputmanager.js') }}"></script>
<script src="{{ asset('js/game/timemanager.js') }}"></script>
<script src="{{ asset('js/game/runtimeobject.js') }}"></script>
<script src="{{ asset('js/game/runtimescene.js') }}"></script>
<script src="{{ asset('js/game/scenestack.js') }}"></script>
<script src="{{ asset('js/game/polygon.js') }}"></script>
<script src="{{ asset('js/game/force.js') }}"></script>
<script src="{{ asset('js/game/layer.js') }}"></script>
<script src="{{ asset('js/game/timer.js') }}"></script>
<script src="{{ asset('js/game/imagemanager.js') }}"></script>
<script src="{{ asset('js/game/runtimegame.js') }}"></script>
<script src="{{ asset('js/game/variable.js') }}"></script>
<script src="{{ asset('js/game/variablescontainer.js') }}"></script>
<script src="{{ asset('js/game/eventscontext.js') }}"></script>
<script src="{{ asset('js/game/runtimebehavior.js') }}"></script>
<script src="{{ asset('js/game/spriteruntimeobject.js') }}"></script>
<script src="{{ asset('js/game/soundmanager.js') }}"></script>
<script src="{{ asset('js/game/runtimescenetools.js') }}"></script>
<script src="{{ asset('js/game/inputtools.js') }}"></script>
<script src="{{ asset('js/game/objecttools.js') }}"></script>
<script src="{{ asset('js/game/cameratools.js') }}"></script>
<script src="{{ asset('js/game/soundtools.js') }}"></script>
<script src="{{ asset('js/game/storagetools.js') }}"></script>
<script src="{{ asset('js/game/stringtools.js') }}"></script>
<script src="{{ asset('js/game/windowtools.js') }}"></script>
<script src="{{ asset('js/game/Extensions/TextObject/textruntimeobject.js') }}"></script>
<script src="{{ asset('js/game/code0.js') }}"></script>
<script src="{{ asset('js/game/code1.js') }}"></script>
<script src="{{ asset('js/game/code2.js') }}"></script>
<script src="{{ asset('js/game/code3.js') }}"></script>
<script src="{{ asset('js/game/code4.js') }}"></script>
<script src="{{ asset('js/game/code5.js') }}"></script>
<script src="{{ asset('js/game/code6.js') }}"></script>
<script src="{{ asset('js/game/code7.js') }}"></script>
<script src="{{ asset('js/game/data.js') }}"></script>
<script>

  (function() {
    //Initialization
    gdjs.registerObjects();
    gdjs.registerBehaviors();
    gdjs.registerGlobalCallbacks();

    var game = new gdjs.RuntimeGame(gdjs.projectData, {});

    //Create a renderer
    var canvasArea = document.getElementById("canvasArea");
    game.createStandardCanvas(canvasArea);

    //Bind keyboards/mouse/touch events
    game.bindStandardEvents(window, document);

    //Load all assets and start the game
    game.loadAllAssets(onAssetsLoaded);
    function onAssetsLoaded() {
      game.startStandardGameLoop();
    }
  })();

</script>
