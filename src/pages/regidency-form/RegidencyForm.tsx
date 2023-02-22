import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import RegidencyInfo from './component/RegidencyInfo';

const RegidencyForm = () => {
  return <RegidencyInfo />;
};

export default RegidencyForm;
