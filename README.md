# StealJS
A scaffolding project with StealJS

* To setup the application, download/clone the master and run "npm install" in the root folder. 

Here is the transcript from the gitter chat showing what I am trying to achieve and the error I am facing. Hopefully you will see the same errors at your end when you run the app.

==========================================================================================
* georgesunil81 17:26
Is there a "base-url" equivalent for my own app modules? As such, if I mention a base-url and point to a directory that hosts my own app modules I have a problem where it tries to load modules like jquery, canjs, etc that are in the node_modules directory!?

* georgesunil81 17:27
So, I am trying to figure out if there is a "base-url" kind of functionality that will point to my own app modules, but will allow jquery, canjs, etc to be in the node_modules.

* <> 17:27
yep, there is directories.lib
in your package.json

* <> 17:27
"system": { "directories": { "lib": "src" } }

* <> 17:27
will load everything from your-package/foo from the src/ folder

* georgesunil81 17:27
Oh, ok, let me try that....

* georgesunil81 17:41
The "system": { "directories": { "lib": "src" } }works fine to load my index.js file which is the initial file that StealJS loads, but fails for for modules I have in the define functions in the rest of the application. I am trying to see how I can send you a directory structure I have for my app and see if you can then help me.
Can I send you an attachment/picture of my app directory structure through gitter?

* <> 17:42
can you push your project to github?

* georgesunil81 17:54
Will do shortly...will let you know...

