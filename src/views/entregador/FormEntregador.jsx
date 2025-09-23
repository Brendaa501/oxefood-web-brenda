import InputMask from 'comigo-tech-react-input-mask';
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';
import React, { useState } from "react";
import MenuSistema from '../../MenuSistema';

export default function FormCliente () {
    
    const [selectedValue, setSelectedValue] = useState('option1');

const handleChange = (e) => {
  setSelectedValue(e.target.value);
};


    return (

        <div>
            <MenuSistema tela={'entregador'} />

            <div style={{marginTop: '3%'}}>

                <Container textAlign='justified' >

                    <h2> <span style={{color: 'darkgray'}}> Entregador &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro </h2>

                    <Divider />

                    <div style={{marginTop: '4%'}}>

                        <Form>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    required
                                    fluid
                                    label='Nome'
                                    maxLength="100"
                                    width={15}
                                />

                                <Form.Input
                                    required
                                    fluid
                                    label='CPF'
                                    width={8}>
                                    <InputMask
                                        required
                                        mask="999.999.999-99"
                                    /> 
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='RG'
                                    width={8}>
                                    <InputMask
                                        required
                                        mask="99.999.999-9"
                                    /> 
                                </Form.Input>
                            </Form.Group>
                            

                            <Form.Group>

                            <Form.Input
                                    fluid
                                    label='DT nascimento'
                                    width={5}
                                    placeholder="Ex: 20/03/1985">
                                    
                                </Form.Input>

                                <Form.Input
                                    required
                                    fluid
                                    label='Fone Celular'
                                    width={7}>
                                    <InputMask 
                                        mask="(99) 9999.9999"
                                    /> 
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Fone Fixo'
                                    width={7}>
                                    <InputMask 
                                        mask="(99) 9999.9999"
                                    /> 
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='QTD entregas realizadas'
                                    width={5}
                                >
                                    
                                </Form.Input>


                                <Form.Input
                                    fluid
                                    label='Valor por frete'
                                    width={5}
                                >
                                    
                                </Form.Input>

                            </Form.Group>

                            <Form.Group>

                            <Form.Input
                                    fluid
                                    label='Rua'
                                    width={15}
                                    >
                                    
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Número'
                                    width={5}
                                    >
                                    
                                </Form.Input>
                                </Form.Group>


                                <Form.Group>

                                <Form.Input
                                        fluid
                                        label='Bairro'
                                        width={10}
                                        >
                                        
                                    </Form.Input>

                                    <Form.Input
                                        fluid
                                        label='Cidade'
                                        width={10}
                                        >
                                        
                                    </Form.Input>

                                    <Form.Input
                                        fluid
                                        label='CEP'
                                        width={5}
                                        >
                                        
                                    </Form.Input>
                                    </Form.Group>

                                    <Form.Group>
        <Form.Field width={16}   placeholder="Ex: 20/03/1985" >
          <label>UF</label>
          <select name="uf">
            <option value="">Selecione </option>
            <option value="AC">RO</option>
            <option value="AL">AC</option>
            <option value="AP">AM</option>
            <option value="AP">RR</option>
            <option value="AP">PA</option>
            <option value="AP">AP</option>
            <option value="AP">TO</option>
            <option value="AP">MA</option>
            <option value="AP">PI</option>
            <option value="AP">CE</option>
            <option value="AP">RN</option>
            <option value="AP">PB</option>
            <option value="AP">PE</option>
            <option value="AP">AL</option>
            <option value="AP">SE</option>
            <option value="AP">BA</option>
            <option value="AP">MG</option>
            <option value="AP">ES</option>
            <option value="AP">RJ</option>
            <option value="AP">SP</option>
            <option value="AP">PR</option>
            <option value="AP">SC</option>
            <option value="AP">RS</option>
            <option value="AP">MS</option>
            <option value="AP">MT</option>
            <option value="AP">GO</option>
            <option value="AP">DF</option>

          </select>

        </Form.Field>
      </Form.Group>


      <Form.Group>
      <Form.Input
              fluid
              label='Complemento'
              width={16} >
                                        
   </Form.Input>

      </Form.Group>

  
  <Form.Field>
  <label>Ativo:</label>

  <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
    <label>
      <input
        type="radio"
        name="optionGroup"
        value="option1"
        checked={selectedValue === 'option1'}
        onChange={handleChange}
      />
      Sim
    </label>

    <label>
      <input
        type="radio"
        name="optionGroup"
        value="option2"
        checked={selectedValue === 'option2'}
        onChange={handleChange}
      />
      Não
    </label>
  </div>
</Form.Field>



                        </Form>
                        
                        <div style={{marginTop: '4%'}}>

                            <Button
                                type="button"
                                inverted
                                circular
                                icon
                                labelPosition='left'
                                color='orange'
                            >
                                <Icon name='reply' />
                                Voltar
                            </Button>
                                
                            <Button
                                inverted
                                circular
                                icon
                                labelPosition='left'
                                color='blue'
                                floated='right'
                            >
                                <Icon name='save' />
                                Salvar
                            </Button>

                        </div>

                    </div>
                    
                </Container>
            </div>
        </div>

    );

}
