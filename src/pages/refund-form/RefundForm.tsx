import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';

import styled from 'styled-components';
import RegidencyForm from '../regidency-form/RegidencyForm';
import RentalFee from './components/RentalFee';

const RefundForm = () => {
  const methods = useForm({ mode: 'all' });
  const navigate = useNavigate();
  const params = useParams();

  //각 스텝별 페이지
  const switchAuthPage = () => {
    switch (true) {
      // case params.step === '2':
      //   return <RegidencyForm />;
      default:
        return <RentalFee />;
    }
  };

  //각각의 필드들 유효성 검사 후 페이지 동
  const onSubmit = () => {
    navigate('/regidency-form');
  };

  return (
    <FormProvider {...methods}>
      <__Container onSubmit={methods.handleSubmit(onSubmit)}>
        {switchAuthPage()}
      </__Container>
    </FormProvider>
  );
};

export default RefundForm;

const __Container = styled.form`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 360px;
`;
