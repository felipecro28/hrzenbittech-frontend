import style from './Form.module.css'

export default function Form() {
  return ( 
    <div className={style.mainFormDiv}>
        <h2>Reach out to us!</h2>
        <form>
            <label htmlFor="name"></label>
                <input type="text" id="name" name="name" placeholder='Your name*' />
            <label htmlFor="email"></label>
            <input type="text" id="email" name="email" placeholder='Your email*' />
            <label htmlFor="message"></label>
                <input type="text" id="message" name="message" placeholder='Your message*' className={style.message}/>
            <button type='submit'> Send Message </button>
        </form>
    </div>
  )
}
