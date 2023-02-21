import React, { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import styled from 'styled-components';
import themes from '../../../styles/themes';

interface Props {
  isChecked: boolean;
}
const JeonseForm = (props: Props) => {
  const { isChecked } = props;
  const { register, setValue, unregister } = useFormContext();

  useEffect(() => {
    unregister('rental-fee');
    if (isChecked) {
      setValue('monthly-cost', 0);
      setValue('due-date', '');
    } else {
      setValue('monthly-cost', '');
    }
  }, [isChecked]);

  return (
    <__InputContainer>
      <__InputWrapper>
        <p>보증금</p>
        <__Input {...register('deposit')} autoFocus required />
        만원
      </__InputWrapper>

      <__InputWrapper isChecked={isChecked}>
        <p>월 관리비</p>
        <__Input {...register('monthly-cost')} required />
        만원
      </__InputWrapper>
      <__InputWrapper isChecked={isChecked}>
        <p>임대료 납부일</p>
        <__Input {...register('due-date')} required />일
      </__InputWrapper>
    </__InputContainer>
  );
};

export default JeonseForm;

const __InputContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-row-gap: 8px;
  margin-top: 3px;

  div:nth-child(1) {
    grid-column: 1 / 3;
  }
`;

const __InputWrapper = styled.div<{ isChecked?: boolean }>`
  display: flex;
  align-items: center;
  padding: 16px 8px 16px 12px;
  background-color: ${(props) =>
    props.isChecked ? '#F2F2F2' : themes.color.white};
  border: 1px solid #e8e8e8;
  white-space: nowrap;
  font-size: 14px;
  font-weight: 500;
  border-radius: 4px;
  pointer-events: ${(props) => props.isChecked && 'none'};

  &:nth-child(2) {
    border-right: none;
    border-radius: 4px 0 0 4px;
  }

  :nth-child(3) {
    border-radius: 0 4px 4px 0;
  }

  p {
    width: 56px;
    font-size: 14px;
    color: ${themes.color.grey};
  }
`;

const __Input = styled.input`
  width: 100%;
  padding-right: 3px;
  text-align: end;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
