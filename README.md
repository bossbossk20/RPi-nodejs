# Smart-Fridge-RPi-NodeJS

### Using NodeJS call python-shell
```
PythonShell.run('YourPythonCode.py', function (err) {
  if (err) throw err;
  console.log('finished');
});
console.log("test");
```
#### How to run
```
 $ npm install
 $ node index.js
localhost:3000
```
#### How to install python-shell
```
$ npm install python-shell
```




#### Pin 22 (GPIO 25)
#### Pin 39 (GND)
#### Resister 222 Ohm

![ screenshot](img/model.png)
