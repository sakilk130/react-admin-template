import * as Yup from 'yup';

export interface IFormValues {
  firstName: string;
  lastName: string;
  email: string;
  contact: string;
  address1: string;
  address2: string;
}
const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

export const initialValues: IFormValues = {
  firstName: '',
  lastName: '',
  email: '',
  contact: '',
  address1: '',
  address2: '',
};

export const validationSchema = Yup.object().shape({
  firstName: Yup.string().required('required'),
  lastName: Yup.string().required('required'),
  email: Yup.string().email('invalid email').required('required'),
  contact: Yup.string()
    .matches(phoneRegExp, 'Phone number is not valid')
    .required('required'),
  address1: Yup.string().required('required'),
  address2: Yup.string().required('required'),
});
