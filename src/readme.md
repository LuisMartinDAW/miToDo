***ESTADO***
<p>Un estado es una variable en react en Vanillajs</p>

<p> Si nosotros queremos guardar un ese valor para eso tenemos una función llamada  useState</p>
<p>Este useState lo tenemos que ejecutar antes que se renderice nuestro componente</p>

***ejemplo***

<p>Esto antes del renderizado del componente</p>
const [newTaskName, setNewTaskName] = useState();

      `<input type="text" placeholder="Enter a new task" onChange={(e) => setNewTaskName(e.target.value)}/>`
      
      `<button onClick={() => alert(newTaskName)}>Save Task</button>`
      


***Form***

<p>onSubmit envía datos al Backend </p>

***preventDefault()***

<p> desde su evento "e" e.preventDefault(). Nos va ha servir para cancelar ese comportamiento por defecto del formulario de enviar los datos a un backend</p>

***useEffect***
<p> Este Hook useEffect se ejecuta cada vez si nosotros le decimos que un dato cambia</p>

***Utilizando Map***

`const a = [{name: 'Joe'}, {name: 'ryan'}]`

<p> arroja: (2) [{...}, {...}]</p>

`a.map(user => user.name == 'ryan' ? {...user, done:true} : user)`

<p> arroja: (2) [{...}, {...}] 0: {name: 'Joe'} 1: {name: 'ryan', done: true} length: 2</p>
