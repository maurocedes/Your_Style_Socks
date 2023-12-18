export const Contact = () => {



    return(
        <div className="ContactConteiner">
            <form className="flex flex-col gap-3 items-center justify-center" action="">
                <h2 className="font-custom text-slate-200 text-3xl text-center">Dejanos tu mensaje, nuestro equipo te respondera a la brevedad.</h2>
                <input className="p-4 rounded-xl w-96" type="text" placeholder="Tu nombre..."/>
                <input className="p-4 rounded-xl w-96" type="text" placeholder="Tu e-mail..."/>
                <input className="p-4 rounded-xl w-96 h-32 text-start" type="text" placeholder="Tu consulta..."/>
                <button className='h-10 bg-red-600 rounded-md p-2 w-96 text-black font-custom'>Enviar</button>
            </form>
            <article>
                <img src="" alt="" />
                <img src="" alt="" />
            </article>
        </div>
    )
}