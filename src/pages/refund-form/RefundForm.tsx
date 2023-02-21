/* eslint-disable react/jsx-pascal-case */
import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { useRecoilState, useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import RentalFee from './components/RentalFee';

const RefundForm = () => {
  const methods = useForm({ mode: 'all' });

  //각 스텝별 페이지
  const switchAuthPage = () => {
    switch (true) {
      default:
        return <RentalFee />;
    }
  };

  //각각의 필드들 유효성 검사 후 인증요청 보내는 함수
  const onSubmit = (data) => {
    console.log(data);
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
