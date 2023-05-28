import './AboutusStyles.css'

const Aboutus=(props)=>{

    return (
        <>
            <div className='about-container'>
                <h1>{props.heading}</h1>
                <p>{props.text}</p>
            </div>
        </>
    )
}

export default Aboutus;