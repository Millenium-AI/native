export interface FormData {
  name: string;
  email: string;
  phone: string;
  contactMethod: 'email' | 'phone' | 'text';
  insuranceType: string;
  message: string;
}
