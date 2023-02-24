import React, { useState } from 'react'
import './Search.css'
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';


function Search({ placeholder, data }) {
     const [filterdata, setFilterdata] = useState([])
     const [wordEntered, setWordEntered] = useState("")

     const handleChange = (e) => {
          console.log(e.target.value)
          const searchWord = e.target.value
          setWordEntered(searchWord)
          const newFilter = data.filter((value) => {
               return value.title.toLowerCase().includes(searchWord.toLowerCase())
          })
          if (searchWord === "") {
               setFilterdata([])
          } else {
               setFilterdata(newFilter)
          }
     }
     const closebtn = () => {
          setFilterdata([])
          setWordEntered("")
     }
     return (
          <div className='search'>
               <div className='searchInputs'>
                    <input type="text" placeholder={placeholder} onChange={handleChange} value={wordEntered} />
                    <div className='searchIcon'>
                         {filterdata.length === 0 ? <SearchIcon /> : <CloseIcon id="clearBtn" onClick={closebtn} />}
                    </div>
               </div>

               {filterdata.length != 0 && (
                    <div className='dataResult'>
                         {filterdata.slice(0, 15).map((value, key) => {
                              return (
                                   <a className='dataItem' href={value.link} target="_blank">
                                        <p>
                                             {value.title}
                                        </p>
                                   </a>
                              )
                         })}
                    </div>
               )
               }
          </div>
     )
}




export default Search