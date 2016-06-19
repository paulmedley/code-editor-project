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
				<script src="libs/pixi.js"></script>
				<script src="libs/jshashtable.js"></script>
				<script src="libs/howler.min.js"></script>
				<script src="gd.js"></script>
				<script src="libs/hshg.js"></script>
				<script src="commontools.js"></script>
				<script src="inputmanager.js"></script>
				<script src="timemanager.js"></script>
				<script src="runtimeobject.js"></script>
				<script src="runtimescene.js"></script>
				<script src="scenestack.js"></script>
				<script src="polygon.js"></script>
				<script src="force.js"></script>
				<script src="layer.js"></script>
				<script src="timer.js"></script>
				<script src="imagemanager.js"></script>
				<script src="runtimegame.js"></script>
				<script src="variable.js"></script>
				<script src="variablescontainer.js"></script>
				<script src="eventscontext.js"></script>
				<script src="runtimebehavior.js"></script>
				<script src="spriteruntimeobject.js"></script>
				<script src="soundmanager.js"></script>
				<script src="runtimescenetools.js"></script>
				<script src="inputtools.js"></script>
				<script src="objecttools.js"></script>
				<script src="cameratools.js"></script>
				<script src="soundtools.js"></script>
				<script src="storagetools.js"></script>
				<script src="stringtools.js"></script>
				<script src="windowtools.js"></script>
				<script src="Extensions/TextObject/textruntimeobject.js"></script>
				<script src="code0.js"></script>
				<script src="code1.js"></script>
				<script src="code2.js"></script>
				<script src="code3.js"></script>
				<script src="code4.js"></script>
				<script src="code5.js"></script>
				<script src="code6.js"></script>
				<script src="code7.js"></script>
				<script src="data.js"></script>
				
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
				
        {{-- Here is where the game should go --}}
        <div id="response"></div>
      </div>
    </div>
</div>
