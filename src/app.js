import React,{Component} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './main'
import Home from './home'
import Course from './course';
import Form from './form';
import Enquires from './enquires';
import Header from './header';
import Footer from './footer'

class App extends Component{
    constructor(){
     super()
     this.state={

     }
    }
    render(){
        return(
            <BrowserRouter>
             <div className='container'>
                 <Header/> 
                <Routes>
                    <Route exact path='/' element={<Main/>}/>
                    <Route index element={<Home/>}/>
                    <Route path='/course' element={<Course/>}/>
                    <Route path={`/course/:topic`} element={<Form/>}/>
                    <Route path= '/enquires' element={<Enquires/>}/>
                    <Route/>
                </Routes>
                <Footer/> 
             </div> 
    
            </BrowserRouter>
            
            
        )
    }
}
export default App;