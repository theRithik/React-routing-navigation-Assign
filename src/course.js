import React from 'react';
import './course.css'
import {Link} from 'react-router-dom'

const Course =()=>{
    return(
        <>
        <div className='container'>
       <div className="card" style={{width: '18rem'}}>
  <img src="https://www.patterns.dev/img/reactjs/react-logo@3x.svg" class="card-img-top courimg" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">React Js</h5>
    <p className="card-text"> These  courses are specialy thought by the professionals and these are the best in ethe industry</p>
       <Link to ={`/course/React`} class="btn btn-primary">Details</Link>
  </div>
</div>


<div className="card" style={{width: '18rem'}}>
  <img src="https://www.freecodecamp.org/news/content/images/2020/04/Copy-of-Copy-of-Travel-Photography-1.png" class="card-img-top courimg" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Angular</h5>
    <p className="card-text"> These  courses are specialy thought by the professionals and these are the best in ethe industry</p>
       <Link to ={`/course/Angular`} class="btn btn-primary">Details</Link>
  </div>
</div>


<div className="card" style={{width: '18rem'}}>
  <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--e_rqeB7o--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://cdn-images-1.medium.com/max/2400/1%2AFPtQLT2Zk-baHficCz_mXQ.png" class="card-img-top courimg" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Node Js</h5>
    <p className="card-text"> These  courses are specialy thought by the professionals and these are the best in ethe industry</p>
       <Link to ={`/course/Nodejs`} class="btn btn-primary">Details</Link>
  </div>
</div>



<div className="card" style={{width: '18rem'}}>
  <img src="https://webimages.mongodb.com/_com_assets/cms/kuzt9r42or1fxvlq2-Meta_Generic.png" class="card-img-top courimg" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">MongoDB</h5>
    <p className="card-text"> These  courses are specialy thought by the professionals and these are the best in ethe industry</p>
       <Link to ={`/course/MongoDB`} class="btn btn-primary">Details</Link>
  </div>
</div>



<div className="card" style={{width: '18rem'}}>
  <img src="https://miro.medium.com/max/1160/0*skYUWg3ZvcY8xRf5" class="card-img-top courimg" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Express Js</h5>
    <p className="card-text"> These  courses are specialy thought by the professionals and these are the best in ethe industry</p>
       <Link to ={`/course/ExpressJs`} class="btn btn-primary">Details</Link>
  </div>
</div>


<div className="card" style={{width: '18rem'}}>
  <img src="https://cdn.logicaldoc.com/images/blog/cloud_images_of_technology.webp" class="card-img-top courimg" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Could Computing</h5>
    <p className="card-text"> These  courses are specialy thought by the professionals and these are the best in ethe industry</p>
       <Link to ={`/course/ColudComputing`} class="btn btn-primary">Details</Link>
  </div>
</div>
{/* 
<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top courimg" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">React Js</h5>
    <p class="card-text"></p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top courimg" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">React Js</h5>
    <p class="card-text"></p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>


<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top courimg" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">React Js</h5>
    <p class="card-text"></p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>


<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top courimg" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">React Js</h5>
    <p class="card-text"></p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top courimg" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">React Js</h5>
    <p class="card-text"></p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> */}
       </div>
        </>
    )
}
export default Course;