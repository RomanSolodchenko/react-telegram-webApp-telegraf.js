import React from 'react'
import './Button.css'


function Button({type, title, disable, onClick}) {
  return (

<button className={`btn ${                  // добавленеи класса к кнопки от его действия если тип равен адд = то класс найм бтн адд  
    (type === "add" && "add") ||
    (type === "remove" && "remove") ||
    (type === "checkout" && "checkout")
}`}

disabled = {disable}
onClick = {onClick}
>
{title}
</button>

  )
}

export default Button