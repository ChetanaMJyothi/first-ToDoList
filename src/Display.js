import classes from './DisplayCss.module.css';

function Display(props){ 
function DoneHandler(event){
  props.onDone(event.target.value);
}
function DeleteHandler(event){
  props.onDel(event.target.value);
}
  return(
    props.value.map((item)=>{
    return (
      <>
      <p>{item.itemN}</p>
      <button onClick={DoneHandler} value={item.itemN}>Done</button>
      <button onClick={DeleteHandler} value={item.itemN}>Delete</button>
      <div className={(item.isComplete === true) && (classes.withLine)}></div>    
      </>
    )}
  )
  ) 
}
export default Display;