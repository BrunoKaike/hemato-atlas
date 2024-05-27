"use client";

import FormfacadeEmbed from "@formfacade/embed-react/dist/index.js";

const FormPage= () => {

  return (
    <div className="mx-auto h-full max-w-[1212px] py-10 px-3">
      <FormfacadeEmbed

        formFacadeURL="https://formfacade.com/include/103973723810161540291/form/1FAIpQLSeVNZxzMBtDLlabkAW5UOYg0LMBTBKYM2tRgW655pZefhsYxg/classic.js/?div=ff-compose"
        fullScreen= {true}
        onSubmitForm={() => console.log('Resposta enviada! Agradecemos pela colaboração.') 
        
        }
        
      />
    </div>
  );
};

export default FormPage;
