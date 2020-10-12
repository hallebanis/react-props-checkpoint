import React, { Children } from 'react';
import PropTypes from 'prop-types';


let Profile=(props)=>{
return(
<div>
    <div>{props.children}</div>
    <div style={{display:"flex", justifyContent:"space-between", width:"400px"}}>
       <div>
           {/* <>{props.handlName(props.fullName)}</> */}
           <h2>Full Name</h2>
           <div onLoad={props.handleName(props.fullName)}>{props.fullName}</div>
           <h2>Age</h2>
           <div>{props.age}</div>
           <h2>Is he Dead?</h2>
           <div>{props.isDead.toString()}</div>
       </div>
       <div>
           <h2>Profession</h2>
           <div>{props.profession}</div>
       </div>
    </div>
    <div>
       <h2>BIO</h2>
       <div style={{width:"300px",border:"solid 2px",padding:"5px"}}>{props.bio}</div>
    </div>
</div>
);
}
Profile.defaultProps ={
  age:75,
  isDead:true
};
Profile.propTypes={
    fullName:PropTypes.string,
    profession:PropTypes.string,
    bio:PropTypes.string,
    age:PropTypes.number,
    isDead:PropTypes.bool,
    handleName:PropTypes.func
};


export default Profile;