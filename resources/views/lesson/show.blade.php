@extends('layouts.app')

@section('content')
  <div class="container">
    <input type="hidden" name="lesson_id" value="{{$lesson->id}}">
      @include('partials.lesson', ['lessonTitle' => $lesson->title, 'lessonDescription' => $lesson->description])
      @include('partials.editor')
  </div>
@endsection
