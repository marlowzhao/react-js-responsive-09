import React from "react";

export default function Search(){

  const searchDrama = async(e)=>{
    e.preventDefault();
    console.log('submitting');
  }
  return(
    <form className="form">
      <label className="label" htmlFor="query">name</label>
      <input className="input" type="text" name="query"
      placeholder="sex and city"/>
      <button className="button" type="submit">Search</button>
    </form>
  )
}
