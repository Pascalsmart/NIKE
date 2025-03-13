import "./category.scss";

let Category = ({grab})=>{
    return(

        <div className='mycate'>

            <img src={grab.imageUrl} alt="c-image"/>

            <div className='overlay'>
            <div id="rest">

                <div id="fle">
                <h2>{grab.fText}</h2>
                <h5>{grab.sText}</h5>
                </div>

                <div id="slec">
                  <button type="button"> Shop Now &rarr;</button>
                 </div>
            </div>
            </div>

          

        </div>
    )
}

export default Category;