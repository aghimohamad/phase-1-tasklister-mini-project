document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("new-task-description")
  const form = document.getElementById("create-task-form")
  const ul = document.getElementById("tasks")
  const color = document.getElementById("color")
    form.addEventListener("submit", (e=>{
    e.preventDefault()
    const li = document.createElement("li")
    li.innerHTML = input.value 
    ul.append(li)
    const del = document.createElement("button")
    const edit = document.createElement("button")
    edit.innerHTML = "E"
    
    del.innerHTML = "X"
    del.style.marginLeft = "10px"
    li.append(del)
    li.append(edit)
    li.style.color = `${color.value}`
    input.value = ""
    del.addEventListener("click", (e)=>{
      li.remove()
    })
    edit.addEventListener("click", (e)=>{
      const inputT = document.createElement("input")
      inputT.value = li.innerText
      li.style.display= "none"
      li.parentNode.append(inputT)
      document.addEventListener("keydown", (e)=>{
        if (e.key === "Enter"){
          li.textContent = inputT.value
          li.style.display= "inline"
          inputT.remove()
          li.append(del)
          li.append(edit)
        }
      })
    })
    

  }))
  
  

});
