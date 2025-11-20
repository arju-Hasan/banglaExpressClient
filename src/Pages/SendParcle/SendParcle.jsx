import React from 'react';
import Container from '../../Components/Container';
import { useForm } from 'react-hook-form';

const SendParcle = () => {

    const {register, handleSubmit, formState: { error }} = useForm();
     const handelSendParcle = data =>{

     }


    return (
        <div>
            <Container>
            <h2 className="text-5lx font-bold">Send A Parcel</h2>
            <p className="text-2xl font-bold">Enter your parcel details</p>
            <form onSubmit={handleSubmit(handelSendParcle)}>
                {/* docoment */}
                <div>

                </div>
                {/* Parcle info  */}
                <div>

                </div>
                {/* tow colum */}
                <div>
                    {/* sent info */}
                    <div>

                    </div>
                    {/* rechive info */}
                    <div>

                    </div>
                </div>
            </form>
            </Container>
        </div>
    );
};

export default SendParcle;