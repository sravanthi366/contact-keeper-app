import React, {useContext,useEffect} from 'react'
import Contacts from '../contacts/Contacts'
import ContactForm from '../contacts/ContactForm'
import {ContactFilter} from '../contacts/ContactFilter'
import AuthContext from '../../context/auth/AuthContext'



const Home = () => {
    const authContext = useContext(AuthContext)
    useEffect(() => {
        authContext.loadUser()
        //eslint-disable-next-line
    },[])

    return (
        <div className='grid-2 '>
            <div>
            <ContactForm/>
            </div>
             <span>
             <div>
               
               <ContactFilter/></div>
               < div className='scrollbar scrollbar-morpheus-den'>
               <Contacts />
                              
                </div>
                 </span>      
           
         
          
        </div>
    )
}
export default Home;