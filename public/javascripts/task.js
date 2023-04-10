const setTagAsDone = async (element, id) => {
 event.preventDefault();
 try {
  let headers = new  Headers({'Content-Type': 'application/json'});
  let body = JSON.stringify({task: {done: element.checked}})
  let responde = await fetch(`/tasks/${id}?_method=put`, {method:'put',headers: headers, body: body})
  let data = await responde.json()
  let tasks = data.task
  let parent = element.parentNode
  if(tasks.done){
    element.checked = true
    parent.classList.add('has-text-success');
    parent.classList.add('is-italic');
  }else{
    element.checked = false
    parent.classList.remove('has-text-success');
    parent.classList.remove('is-italic');
  }
 } catch (error) {
  console.log(error)
  alert('Erro ao atualizar a tarefa')
 }
}