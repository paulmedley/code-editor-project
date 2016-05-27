<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use Storage;
use Auth;
use Carbon\Carbon;



class CodeController extends Controller
{
    public function store(Request $request)
    {
      $allowedCommands = [
          'character.move.up',
          'character.move.down',
          'character.move.left',
          'character.move.right',
          'character.speak.{message}',
      ];
      $parsedCommands = [];

      $code = $request->data;
      $path = "pythonCode/".Auth::user()->email."/".Carbon::now()->timestamp;
      $fullPath = storage_path("app/{$path}");

      Storage::put("{$path}/input.py", $code);

      exec("python {$fullPath}/input.py", $output);
      Storage::put("{$path}/output.py", serialize($output));
      $outputFile = unserialize(Storage::get("{$path}/output.py"));

      foreach ($outputFile as $line) {
        if (in_array($line, $allowedCommands)){
          $parsedCommands[] = $line;
        }
      }

      return json_encode($parsedCommands);
    }
}
