@extends('layouts.app')
@inject('lessons', 'App\Lesson')

@section('content')
<div class="container">
  <h1>Lessons</h1>
    <div class="list-group">
  @foreach($lessons->all() as $lesson)
    <a href="{{ route('lesson.show',$lesson->id) }}" class="list-group-item">
      <h4 class="list-group-item-heading">{{ $lesson->title }}</h4>
      <p class="list-group-item-text">{{ $lesson->description }}</p>
    </a>
  @endforeach
</div>




</div>

@endsection
