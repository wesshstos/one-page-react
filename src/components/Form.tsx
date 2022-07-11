export default function Form() {
     
     return (
          <div className="w-full h-auto flex flex-col items-center justify-center space-y-2 bg-[#D7D4FF] py-20">

               <h2 className="text-2xl uppercase font-bold font-['Merriweather'] mb-10">Entre em contato</h2>

               <form action="" method="get" className="flex flex-col space-y-4 mobileP:w-full mobileP:px-4 tablet:p-0 tablet:w-1/2 desktop:w-1/3">

                    <input className="border p-3 font-['Lato'] rounded-md" type="text" placeholder="Nome Completo" />
                    <input className="border p-3 font-['Lato'] rounded-md" type="text" placeholder="E-mail" />
                    <input className="border p-3 font-['Lato'] rounded-md" type="text" placeholder="Telefone" />
                    <textarea className="border p-3 font-['Lato'] rounded-md" placeholder="Mensagem" name="" id="" cols={30} rows={10} />
                    <input type="button" value={'Enviar Mensagem'} className="text-lg font-semibold text-neutral-50 font-['Lato'] bg-[#6C63FF] py-3 rounded-md cursor-pointer hover:bg-[#564FCC]" />
               </form>
          </div>
     )
}
