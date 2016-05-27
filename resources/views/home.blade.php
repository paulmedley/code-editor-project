@extends('layouts.app')

@section('content')
<div class="container">
    @include('partials.lesson', ['lessonTitle' => 'Lesson One', 'lessonDescription' => 'Example'])
    @include('partials.editor')
</div>
@endsection
