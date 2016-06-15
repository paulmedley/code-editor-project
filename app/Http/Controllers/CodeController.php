<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use Storage;
use Auth;
use Carbon\Carbon;
use App\Http\Requests\StoreCodeRequest;


class CodeController extends Controller
{
  public function store(StoreCodeRequest $request)
  {
    $input = $request->data;
    $allowedCommands = [
        'character.move.up',
        'character.move.down',
        'character.move.left',
        'character.move.right',
        'character.speak.{message}',
    ];
    $parsedCommands = [];
    $path = "pythonCode/".Auth::user()->email."/lesson/". $request->lesson_id;
    $fullPath = storage_path("app/{$path}");

    Storage::put("{$path}/input.py", $input);

    exec("python {$fullPath}/input.py", $output);
    Storage::put("{$path}/output.py", serialize($output));
    $outputFile = unserialize(Storage::get("{$path}/output.py"));


    $passed = false;
    switch ($request->lesson_id) {
      case '1':
        $passed = true;
        break;


      case '2':
        $passed = true;
        break;


      case '3':
        $printNum = 0;
        foreach(preg_split("/((\r?\n)|(\r\n?))/", $input) as $line){
          if (preg_match('/print/',$line)){
            $printNum ++;
          }
        }

        if($printNum == 1){
          $passed = true;
        }

        break;

      case '4':
        $passed = true;
        break;
    }


    if($passed){
      foreach ($outputFile as $line) {
        if (in_array($line, $allowedCommands)){
            $parsedCommands[] = $line;
        }
      }
    }


    return json_encode($parsedCommands);
  }
}
