# RPi-nodejs
## I use python-shell
### using nodejs call Python for GPIO on RPi
### Raspberry Pi 2 Model B

#### How to run
> $ npm install


> $ node index.js

>run localhost:3000

***
#### Example Program
```
$ npm install python-shell
```
```
var PythonShell = require(python-shell)
```

#### Use Node.js call python  
```
PythonShell.run('YourPythonCode.py', function (err) {
  if (err) throw err;
  console.log('finished');
});
console.log("test");
```




#### Pin 22 (GPIO 25)
#### Pin 39 (GND)
#### Resister 222 Ohm

![ screenshot](img/model.png)
