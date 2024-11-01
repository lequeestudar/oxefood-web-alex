import React from "react";
import InputMask from 'react-input-mask';
/*import { Link } from "react-router-dom";*/
import { Button, Container, Divider, Form, Icon, FormSelect, FormRadio } from 'semantic-ui-react';

const options = [
    { key: 'AL', value: 'Al', text: 'Alagoas' },
    { key: 'BA', value: 'BA', text: 'Bahia' },
    { key: 'CE', value: 'CE', text: 'Ceará' },
    { key: 'MA', value: 'MA', text: 'Maranhão' },
    { key: 'PB', value: 'PB', text: 'Paraíba' },
    { key: 'PE', value: 'PE', text: 'Pernambuco' },
    { key: 'PI', value: 'PI', text: 'Piauí' },
    { key: 'RN', value: 'RN', text: 'Rio Grande do Norte' },
    { key: 'SE', value: 'SE', text: 'Sergipe' },
]


export default function FormCliente() {

    return (
        <div>

            <div style={{ marginTop: '3%' }}>

                <Container textAlign='justified' >

                    <h2> <span style={{ color: 'darkgray' }}> Entregador &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro </h2>

                    <Divider />

                    <div style={{ marginTop: '4%' }}>

                        <Form>

                            <Form.Group>

                                <Form.Input
                                    required
                                    fluid
                                    label='Nome'
                                    maxLength="150"
                                    width={12}
                                />

                                <Form.Input
                                    required
                                    fluid
                                    label='CPF'
                                    width={8}
                                >
                                    <InputMask
                                        required
                                        mask="999.999.999-99"
                                    />
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='RG'
                                    width={8}
                                />

                            </Form.Group>

                            <Form.Group>

                                <Form.Input
                                    fluid
                                    label='DT Nascimento'
                                    width={3}>

                                    <InputMask
                                        mask="99/99/9999"
                                        maskChar={null}
                                        placeholder="Ex: 20/03/1985"
                                    />
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    required
                                    label='Fone Celular'
                                    width={8}>
                                    <InputMask
                                        mask="(99) 9999.9999"
                                    />
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Fone Fixo'
                                    width={8}>
                                    <InputMask
                                        mask="(99) 9999.9999"
                                    />
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='QTD Entregas Realizadas'
                                    width={6}>
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Valor por Frete'
                                    width={6}
                                />

                            </Form.Group>

                            <Form.Group>

                                <Form.Input
                                    fluid
                                    label='Rua'
                                    width={15}
                                />

                                <Form.Input
                                    fluid
                                    label='Número'
                                    width={4}
                                />

                            </Form.Group>

                            <Form.Group>

                                <Form.Input
                                    fluid
                                    label='Bairro'
                                    width={11}
                                />

                                <Form.Input
                                    fluid
                                    label='Cidade'
                                    width={11}
                                />

                                <Form.Input
                                    fluid
                                    label='CEP'
                                    width={3}
                                />

                            </Form.Group>

                            <FormSelect
                                fluid
                                label='UF'
                                options={options}
                                placeholder='Selecione'
                            />

                            <Form.Group>
                                <span>Ativo: </span>
                                <Form.Radio
                                    fluid
                                    label='Sim'
                                    name="sn"
                                />
                                <Form.Radio
                                    fluid
                                    label='Não'
                                    name="sn"
                                />
                            </Form.Group>

                        </Form>

                        <div style={{ marginTop: '4%' }}>

                            <Button
                                type="button"
                                inverted
                                circular
                                icon
                                labelPosition='left'
                                color='orange'
                                textColo
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
