@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-6">
            <div class="panel panel-default">
                <div class="panel-heading">Code Editor</div>

                <pre id="editor">print(5)</pre>
                <meta name="csrf-token" content="{{ csrf_token() }}">
                <button class="btn btn-primary" id="button-save" type="button" name="button" value="{{ csrf_token() }}">Save</button>

            </div>
        </div>
        <div class="col-md-6">
          <div class="panel panel-default">
            <div class="panel-heading">Output</div>
            <div id="response"></div>
          </div>
        </div>
    </div>
</div>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.3/jquery.min.js"></script>
<script src="js/scripts.js" type="text/javascript" charset="utf-8"></script>
<script src="js/src-noconflict/ace.js" type="text/javascript" charset="utf-8"></script>
@endsection
