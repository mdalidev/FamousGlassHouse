import React from 'react'

function Footer() {

    const footer= {
    /* width:400px; */
    
    background: '#143d59',
    color: 'white',
    padding: "5px 2px",
    textAlign: 'center',
    justifyContent: 'center'
  }
    return (
        <div>
             <div style={footer}>
        Copyright &copy;www.famousglass.in All right reserverd!
      </div>
        </div>
    )
}

export default Footer
