export default function Map () {
    return(
        <div className="w-[90%] mx-auto rounded mb-[5rem]">
        <iframe className='rounded-[1rem] shadow-xl' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.2630961994855!2d3.357995874045661!3d6.488331023572993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8c736b9253ab%3A0xfc89975b1d381c70!2sNew%20Horizons%20Computer%20Learning%20Center!5e0!3m2!1sen!2sng!4v1754029230374!5m2!1sen!2sng " 
        width="100%"
         height="450" 
         style={{border: 0}}
         border-radius='2rem' 
         allowfullscreen 
         loading="lazy" 
         title="Location Map"
         referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    )
}