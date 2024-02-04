import {FieldValues, useForm} from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import './ContactForm.css';

const schema = z.object({
    senderName: z.string().min(1, {message: 'El nombre es requerido.'}),
    senderEmail: z.string()
                        .min(1, {message: 'El correco electronico es requerido.'})
                        .email('El correo electronico es invalido.'),
    senderPhone: z.string().optional(),
    message: z.string().min(1, {message: 'Se requiere un mensaje.'} )
});

type FormData = z.infer<typeof schema>;

const ContactForm = () => {


    const { register, handleSubmit, formState: { errors }} = useForm<FormData>({resolver: zodResolver(schema) });
    console.log(errors);


    const onSubmit = (data: FieldValues) => console.log(data);
    return (
         <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-gropup mb-2">
                <input {...register('senderName')} placeholder="Nombre:" type="text" id="name" className="form-control"/>
               { errors.senderName && <div className="alert alert-danger mt-2">
                    <div> {errors.senderName?.message}</div>
                </div> }
            </div>
            <div className="form-gropup mb-2">
                <input {...register('senderEmail')} placeholder="Correo electronico:" type="text" id="email" className="form-control"/>
                {errors.senderEmail && <div  className="alert alert-danger mt-2">
                    <div>{errors.senderEmail?.message}</div>
                </div>}
            </div>

            <div className="form-gropup mb-2">
                <input {...register('senderPhone')} placeholder="Telefono (opcional):"  type="text" id="phone" className="form-control"/>
            </div>
            <div className="form-gropup mb-2">
                <textarea {...register('message')} placeholder="Tu mensaje:" className="form-control"  id="message" cols={30} rows={10}></textarea>
                {errors.message && <div  className="alert alert-danger mt-2">
                    <div>{errors.message?.message}</div>
                </div>}
            </div>
            <button className="mt-3 btn btn-primary contact-btn" type="submit">Enviar</button>
        </form>
    )
     
}

export default ContactForm;

