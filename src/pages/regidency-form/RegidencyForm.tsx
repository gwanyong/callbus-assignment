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

  return <RegidencyInfo />;
};

export default RegidencyForm;
