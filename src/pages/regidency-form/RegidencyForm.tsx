import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import RegidencyInfo from './component/RegidencyInfo';

const RegidencyForm = () => {
  const methods = useForm({ mode: 'all' });
  const navigate = useNavigate();
  const params = useParams();

  //각 스텝별 페이지
  const switchAuthPage = () => {
    switch (true) {
      default:
        return <RegidencyInfo />;
    }
  };

  //각각의 필드들 유효성 검사 후 페이지 동
  const onSubmit = () => {
    navigate('/info/2');
  };

  return (
    <FormProvider {...methods}>
      <__Container onSubmit={methods.handleSubmit(onSubmit)}>
        {switchAuthPage()}
      </__Container>
    </FormProvider>
  );
};

export default RegidencyForm;

const __Container = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
