const Software_Development_Project = (props) => {
  return (
    <>
    <div className="software-project">
      <img src ={props.img} />
      <strong className='software-project-name'>{props.title}</strong>
      <p className='software-project-description'>{props.description}</p>
      <div className='software-button-container'>
        <a target='_blank' href={props.gitHub}>Github</a>
        <a target='_blank' href={props.website}>Website</a>  
      </div>   
    </div>     
    </>
  )
}

export default Software_Development_Project